import SideDrawer, { SideDrawerProps } from "@/components/general/SideDrawer";
import { Box, Button, Circle, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TemplatesDrawer from "./Templates";
import AddedSections from "./AddedSections";
import ComponentsDrawer from "./Components";
import ElementsDrawer from "./Elements";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";

import { IComponent, IComponentWithIndex } from "@/types/schema";
import CustomizeSection from "./CustomizeSection";
import { BiChevronLeft } from "react-icons/bi";
import { EditorForm } from "@/app/editor/page";

export type EditorDrawerViews = "sections" | "templates" | "customize";
// | "elements"
// | "components"
interface EditorDrawer extends Omit<SideDrawerProps, "title" | "children"> {}

const EditorDrawer = (props: EditorDrawer) => {
  const { isOpen, onClose } = props;
  const [currentEditorDrawerView, setCurrentEditorDrawerView] =
    useState<EditorDrawerViews>("templates");
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
      fields?.[Number(customizationData?.index)]?.name ||
      fields?.[Number(customizationData?.index)]?.type ||
      fields?.[Number(customizationData?.index)]?.id
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
        <Flex
          alignItems={"center"}
          cursor={"pointer"}
          w={"max"}
          onClick={() => setCurrentEditorDrawerView("sections")}
        >
          <BiChevronLeft color="white" size={24} />
          <Text>{getHeader()}</Text>
        </Flex>
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
                {views[view].header}
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
