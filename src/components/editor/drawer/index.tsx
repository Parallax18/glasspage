import SideDrawer, { SideDrawerProps } from "@/components/general/SideDrawer";
import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TemplatesDrawer from "./Templates";
import AddedSections from "./AddedSections";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";

import { IComponentWithIndex } from "@/types/schema";
import CustomizeSection from "./CustomizeSection";
import { BiChevronLeft } from "react-icons/bi";
import { EditorForm } from "@/app/editor/page";

import { useEditorStore } from "@/store/editor-store";

import { LuLayoutTemplate } from "react-icons/lu";
import { RxSection } from "react-icons/rx";

export type EditorDrawerViews = "sections" | "templates" | "customize";
// | "elements"
// | "components"
interface EditorDrawer extends Omit<SideDrawerProps, "title" | "children"> {}

interface View {
  header: string | React.JSX.Element;
  icon?: React.JSX.Element;
  component: React.JSX.Element;
}

const EditorDrawer = () => {
  const {
    currentEditorDrawerView,
    setCurrentEditorDrawerView,
    setFocusedComponent,
    componentInFocus,
  } = useEditorStore();

  const form = useFormContext<EditorForm>();
  const { append: selectTemplate } = useFieldArray({
    control: form.control,
    name: "page",
  });
  const fields = useWatch({
    control: form.control,
    name: "page",
  });

  const getHeader = () => {
    return (
      componentInFocus?.innerText ||
      componentInFocus?.name ||
      componentInFocus?.type
    );
  };

  const views: Record<EditorDrawerViews, View> = {
    templates: {
      header: "Browse Templates",
      icon: <LuLayoutTemplate color="white" size={16} />,
      component: <TemplatesDrawer onSelectTemplate={selectTemplate} />,
    },
    sections: {
      header: "Your Sections",
      icon: <RxSection color="white" size={16} />,
      component: (
        <AddedSections
          openEditView={(data: IComponentWithIndex) => {
            console.log("from added", { data });
            setCurrentEditorDrawerView("customize");
            // setCustomizationData(data);
            setFocusedComponent(data);
          }}
        />
      ),
    },
    // components: { header: "Components", component: <ComponentsDrawer /> },

    // elements: { header: "Elements", component: <ElementsDrawer /> },
    customize: {
      header: (
        <Stack gap={5}>
          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            gap={1}
            onClick={() => setCurrentEditorDrawerView("sections")}
          >
            <BiChevronLeft size={24} color={"lightgray"} />
            <Text
              flex={1}
              maxW={"100%"}
              textTransform={"capitalize"}
              color={"lightgray"}
              isTruncated
            >
              {getHeader()}
            </Text>
          </Flex>
        </Stack>
      ),
      component: <CustomizeSection />,
    },
  };

  return (
    <>
      <Box
        position={"fixed"}
        left={0}
        borderRight={"1px solid"}
        borderColor={"borderColor"}
        w={"27%"}
        h={"100vh"}
        overflow={"scroll"}
      >
        <Flex
          h={"full"}
          justifyContent={"space-between"}
          direction={"row-reverse"}
          position={"relative"}
        >
          <Stack w={"80%"} px={2} py={3}>
            <Heading
              color={"white"}
              fontSize={"base"}
              position={"fixed"}
              w={"full"}
              // maxW={"250px"}
              bg={"bgColor"}
              zIndex={2}
              top={0}
              py={3}
              isTruncated
            >
              {views[currentEditorDrawerView].header}
            </Heading>
            <Box py={10}>{views[currentEditorDrawerView].component}</Box>
          </Stack>
          <Stack
            w={16}
            h={"full"}
            alignItems="center"
            justifyContent="start"
            bg={"bgColor"}
            borderRight={"1px solid"}
            borderColor={"borderColor"}
            position={"fixed"}
            left={0}
            pt={2}
            gap={0}
          >
            {Object.keys(views)
              .filter((view) => view !== "customize")
              .map((view) => (
                <Button
                  key={view}
                  bg={"none"}
                  borderLeft={
                    currentEditorDrawerView === view ? "3px solid" : ""
                  }
                  borderLeftColor={
                    currentEditorDrawerView === view ? "rosybrown" : ""
                  }
                  color={
                    currentEditorDrawerView === view ? "black" : "lightgray"
                  }
                  onClick={() =>
                    setCurrentEditorDrawerView(view as EditorDrawerViews)
                  }
                  py={3}
                  fontSize={"sm"}
                  textTransform={"capitalize"}
                  rounded={"none"}
                  w={"full"}
                >
                  {views[view as EditorDrawerViews].icon}
                </Button>
              ))}
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default EditorDrawer;
