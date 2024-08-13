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
import ComponentsDrawer from "./Components";
import ElementsDrawer from "./Elements";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";

import { IComponent, IComponentWithIndex } from "@/types/schema";
import CustomizeSection from "./CustomizeSection";
import { BiChevronLeft, BiPencil } from "react-icons/bi";
import { EditorForm } from "@/app/editor/page";
import { useStore } from "zustand";
import { useEditorStore } from "@/store/editor-store";

export type EditorDrawerViews = "sections" | "templates" | "customize";
// | "elements"
// | "components"
interface EditorDrawer extends Omit<SideDrawerProps, "title" | "children"> {}

const EditorDrawer = () => {
  const { isOpen, onClose } = useEditorStore((state) => state);

  const {
    currentEditorDrawerView,
    setCurrentEditorDrawerView,
    componentInFocus,
  } = useEditorStore();
  const [customizationData, setCustomizationData] =
    useState<IComponentWithIndex>();
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

  const views = {
    templates: {
      header: "Browse Templates",
      component: <TemplatesDrawer onSelectTemplate={selectTemplate} />,
    },
    sections: {
      header: "Your Sections",
      component: (
        <AddedSections
          openEditView={(data: IComponentWithIndex) => {
            setCurrentEditorDrawerView("customize");
            setCustomizationData(data);
          }}
        />
      ),
    },
    // components: { header: "Components", component: <ComponentsDrawer /> },

    // elements: { header: "Elements", component: <ElementsDrawer /> },
    customize: {
      header: (
        <Stack gap={5}>
          <Button
            paddingX={2}
            py={0}
            alignItems={"center"}
            cursor={"pointer"}
            gap={1}
            w={"max"}
            display={"flex"}
            justifyContent={"center"}
            onClick={() => setCurrentEditorDrawerView("sections")}
          >
            <BiChevronLeft size={24} />
            <Text fontSize={"sm"}>Back</Text>
          </Button>
          <Flex alignItems={"center"} cursor={"pointer"} gap={4} w={"80%"}>
            <Text
              flex={1}
              maxW={"100%"}
              textTransform={"capitalize"}
              isTruncated
            >
              {getHeader()}
            </Text>
          </Flex>
        </Stack>
      ),
      component: <CustomizeSection data={customizationData} />,
    },
  };

  return (
    <SideDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={
        <Heading color={"white"} fontSize={"base"}>
          {views[currentEditorDrawerView].header}
        </Heading>
      }
      footer={
        <Flex
          alignItems="center"
          justifyContent="start"
          px={0}
          py={2}
          gap={4}
          w={"full"}
        >
          {Object.keys(views)
            .filter((view) => view !== "customize")
            .map((view) => (
              <Button
                key={view}
                bg={currentEditorDrawerView === view ? "rosybrown" : ""}
                color={currentEditorDrawerView === view ? "black" : "lightgray"}
                onClick={() =>
                  setCurrentEditorDrawerView(view as EditorDrawerViews)
                }
                py={2}
                fontSize={"sm"}
                textTransform={"capitalize"}
              >
                {views[view as EditorDrawerViews].header}
                {view === "sections" ? (
                  <Flex
                    ml={2}
                    p={1}
                    bg={"black"}
                    h={4}
                    w={4}
                    color={"white"}
                    rounded={"full"}
                    fontSize={"xs"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {fields.length}
                  </Flex>
                ) : null}
              </Button>
            ))}
          {/*
          <Button w={"max"} bg={"green.600"} rounded={"base"}>
            Save Changes
          </Button> */}
        </Flex>
      }
    >
      <Box position={"relative"}>
        <>{views[currentEditorDrawerView].component}</>
      </Box>
    </SideDrawer>
  );
};

export default EditorDrawer;
