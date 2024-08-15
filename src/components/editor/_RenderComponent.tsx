import React from "react";
import { BaseComponentStyles } from "@/static/components";
import { cn } from "@/utils/cn";
import { ComponentStruct } from "@/types/schema";

interface RenderComponentProps {
  data: ComponentStruct[];
}

const renderComponent = (
  component: ComponentStruct | undefined,
  json: ComponentStruct[]
): JSX.Element | null => {
  if (!component) return null;

  const Tag = component.tag as keyof JSX.IntrinsicElements; // Type assertion

  // Validate the tag to ensure it's a valid HTML element or component
  if (!Tag || typeof Tag !== "string") {
    console.error(`Invalid tag: ${Tag} for component with id ${component.id}`);
    return null;
  }

  const classNames = BaseComponentStyles.find(
    (style) => style.id === component.styleEntityId
  )?.classes;

  // Retrieve the children components based on their IDs
  const childrenComponents = component.childrenIds?.map((id) =>
    json.find((item) => item.id === id)
  );

  const children = childrenComponents?.map((child) =>
    renderComponent(child, json)
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
      {children}
    </Tag>
  );
};

const RenderComponent: React.FC<RenderComponentProps> = ({ data }) => {
  // Flatten the array of arrays into a single array of components
  const flattenedData = data;

  // Identify and render only the root components (those with no parentId)
  const rootComponents = flattenedData.filter((item) => !item.parentId);

  if (rootComponents.length === 0) {
    console.warn("No root components found for rendering");
    return <div>No components to render</div>;
  }

  return (
    <>
      {rootComponents.map((component) =>
        renderComponent(component, flattenedData)
      )}
    </>
  );
};

export default RenderComponent;
