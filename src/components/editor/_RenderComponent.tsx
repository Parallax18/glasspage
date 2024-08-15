import { EditorForm } from "@/app/editor/page";
import { BaseComponentStyles, componentsJson } from "@/static/components";
import { ComponentStruct } from "@/types/schema";
import { cn } from "@/utils/cn";
import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

// Array of component JSONs

const renderComponent = (
  component: ComponentStruct | undefined,
  json: ComponentStruct[]
) => {
  if (!component) return null;

  const Tag = component.tag;
  const classNames = BaseComponentStyles.find(
    (style) => style.id === component.styleEntityId
  )?.classes;

  const children = component.childrenIds?.map((id) =>
    json.find((item) => item.id === id)
  );

  return (
    <Tag
      key={component.id}
      className={cn(
        classNames?.light,
        "border-neutral-200 border space-y-5 space-x-4 mb-2"
      )}
    >
      {component.innerText}
      {children && children.map((_item) => renderComponent(_item, json))}
    </Tag>
  );
};

const _RenderComponent = () => {
  const form = useForm<EditorForm>({
    defaultValues: { page: [] },
  });

  const onScreenSectionTemplates = useWatch({
    control: form.control,
    name: "page",
  });

  console.log({ onScreenSectionTemplates, form: form.getValues() });

  return (
    <Text bg={"white"} p={20} color={"red"}>
      Test
      {/* {onScreenSectionTemplates.map((json, index) => {
        const rootComponents = json.filter((item) => !item.parentId);
        return (
          <React.Fragment key={index}>
            {rootComponents.map((component) =>
              renderComponent(component, json)
            )}
          </React.Fragment>
        );
      })} */}
    </Text>
  );
};

export default _RenderComponent;
