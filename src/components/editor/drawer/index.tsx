import SideDrawer, { SideDrawerProps } from "@/components/general/SideDrawer";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TemplatesDrawer from "./Templates";
import AddedSections from "./AddedSections";
import ComponentsDrawer from "./Components";
import ElementsDrawer from "./Elements";
import { useFieldArray, useFormContext } from "react-hook-form";

import { IComponent, IComponentWithIndex } from "@/types/schema";
import CustomizeSection from "./CustomizeSection";
import { BiChevronLeft } from "react-icons/bi";

export type EditorDrawerViews =
  | "sections"
  | "templates"
  | "elements"
  | "components"
  | "customize";
interface EditorDrawer extends Omit<SideDrawerProps, "title" | "children"> {}

const EditorDrawer = (props: EditorDrawer) => {
  const { isOpen, onClose } = props;
  const [currentEditorDrawerView, setCurrentEditorDrawerView] =
    useState<EditorDrawerViews>("templates");
  const [customizationData, setCustomizationData] =
    useState<IComponentWithIndex>();
  const form = useFormContext();
  const { append: selectTemplate } = useFieldArray({
    control: form.control,
    name: "page",
  });

  const views = {
    templates: {
      header: "Templates",
      component: <TemplatesDrawer onSelectTemplate={selectTemplate} />,
    },
    sections: {
      header: "Sections",
      component: (
        <AddedSections
          openEditView={(data: IComponentWithIndex) => {
            setCurrentEditorDrawerView("customize");
            setCustomizationData(data);
          }}
        />
      ),
    },
    components: { header: "Components", component: <ComponentsDrawer /> },

    elements: { header: "Elements", component: <ElementsDrawer /> },
    customize: {
      header: (
        <Flex
          alignItems={"center"}
          cursor={"pointer"}
          onClick={() => setCurrentEditorDrawerView("sections")}
        >
          <BiChevronLeft color="white" size={24} />
          <Text>
            {customizationData?.name ||
              customizationData?.type ||
              customizationData?.id}
          </Text>
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
          rounded={"base"}
          alignItems="center"
          justifyContent="space-between"
          backdropFilter="blur(8px)"
          boxShadow={"lg"}
          px={2}
          py={2}
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
                py={3}
                textTransform={"capitalize"}
              >
                {view}
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
