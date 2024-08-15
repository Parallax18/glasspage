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
import { useFormContext, useWatch } from "react-hook-form";
import { EditorForm } from "@/app/editor/page";

const ComponentEditor = () => {
  const { control } = useFormContext<EditorForm>();
  const addedComponents = useWatch({ control, name: "components" });
  console.log(addedComponents);
  return (
    <Flex h={"full"} justifyContent={"space-between"}>
      <Center bg={"dark"} h={"full"} w={"50%"}>
        {/* <button className={cn(style?.light)}>Test this button</button> */}
        <RenderComponent data={addedComponents[1]} />
      </Center>
      <Tabs
        border={"1px solid"}
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
        <TabPanels>
          <TabPanel>
            <StyleEditor />
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
