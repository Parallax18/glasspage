import { BaseComponentStyles } from "@/static/components";
import { cn } from "@/utils/cn";
import {
  Center,
  Flex,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import React from "react";
import StyleEditor from "./StyleEditor";
import RenderComponent from "../_RenderComponent";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { EditorForm } from "@/app/editor/page";
import { useComponentEditorStore } from "@/store/component-editor-store";

const ComponentEditor = () => {
  const { control } = useFormContext<EditorForm>();
  const addedComponents = useWatch({ control, name: "components" });
  const { update: updateStyles, fields: addedStyles } = useFieldArray({
    control,
    name: "componentStyles",
    keyName: "_id",
  });
  const { componentInFocus, componentChildInFocus } = useComponentEditorStore();

  console.log(componentChildInFocus, {
    comp: componentInFocus?.structure.find(
      (element) => element.id === componentChildInFocus?.id
    ),
    styles: BaseComponentStyles.find((style) => {
      const ID = componentInFocus?.structure.find(
        (element) => element.id === componentChildInFocus?.id
      )?.styleEntityId;

      return style.id === ID;
    }),
  });

  const handleUpdateStyles = (style: string) => {
    const index = addedStyles.findIndex((style) => {
      const ID = componentInFocus?.structure.find(
        (element) => element.id === componentChildInFocus?.id
      )?.styleEntityId;

      console.log(ID, style);

      return style.id === ID;
    });
    console.log(addedStyles[index]);
    // const rem = `${style}rem`;
    updateStyles(index, {
      ...addedStyles[index],
      classes: {
        ...addedStyles[index].classes,
        light: addedStyles[index].classes.light.concat(`  ${style}`),
      },
    });
  };

  return (
    <Flex h={"85dvh"} gap={3} justifyContent={"space-between"}>
      <Center bg={"dark"} h={"full"} w={"50%"}>
        <RenderComponent
          data={
            addedComponents.find(
              (component) => component.name === componentInFocus?.name
            )?.structure
          }
        />
      </Center>
      <Tabs
        h={"full"}
        w={"50%"}
        position="relative"
        variant="unstyled"
        isFitted
      >
        <TabList color={"lightgray"} py={2}>
          <Tab fontSize={"sm"}>Styles</Tab>
          <Tab fontSize={"sm"} isDisabled>
            Content
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="rosybrown"
          borderRadius="1px"
        />
        <TabPanels h={"full"}>
          <TabPanel>
            <StyleEditor handleUpdateStyles={handleUpdateStyles} />
            {/*TODO:  add a save and cancel button. the save button, formats to proper structure and updates db, the cancel button, formats and save to state */}
          </TabPanel>
          <TabPanel>
            <p>content</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Stack></Stack>
    </Flex>
  );
};

export default ComponentEditor;
