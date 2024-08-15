"use client";

import EditorDrawer from "@/components/editor/sidebar";
import EmptyScreen from "@/components/editor/EmptyScreen";
import RenderComponent from "@/components/editor/RenderComponent";
import { useEditorStore } from "@/store/editor-store";
import { IComponent, ITemplate } from "@/types/schema";

import { Box, Flex, Heading, ModalCloseButton } from "@chakra-ui/react";
import React, { Component, memo } from "react";

import { Form, FormProvider, useForm, useWatch } from "react-hook-form";
import SideDrawer from "@/components/general/SideDrawer";
import ComponentEditor from "@/components/editor/component-editor/ComponentEditor";
import { ComponentStruct, StyleEntity } from "@/types/schema";
import { componentsJson } from "@/static/components";
import CustomModal from "@/components/general/CustomModal";
import { useComponentEditorStore } from "@/store/component-editor-store";

export interface EditorForm {
  page: ITemplate[];
  components: IComponent[];
  componentStyles: StyleEntity[];
}

const Editor = () => {
  const { onOpen, isOpen, onClose, componentInFocus } =
    useComponentEditorStore();
  const form = useForm<EditorForm>({
    defaultValues: {
      page: [],
      components: componentsJson,
      componentStyles: [],
    },
  });

  const onScreenSectionTemplates = useWatch({
    control: form.control,
    name: "page",
  });

  return (
    <Box>
      <FormProvider {...form}>
        <Form>
          <Flex justifyContent={"space-between"} direction={"row-reverse"}>
            <Box pl={"27%"} w={"full"}>
              {onScreenSectionTemplates.length === 0 ? (
                <EmptyScreen />
              ) : (
                <Box color={"white"}>
                  {onScreenSectionTemplates.map((section, index) => {
                    console.log({ section });
                    const MemoizedComponent = memo(RenderComponent);

                    return <MemoizedComponent key={index} {...section} />;
                  })}
                </Box>
              )}
            </Box>

            <EditorDrawer />
            <CustomModal
              isOpen={isOpen}
              onClose={onClose}
              size={"full"}
              title={
                <Flex
                  w={"full"}
                  justifyContent={"space-between"}
                  paddingX={"2"}
                  alignItems={"center"}
                >
                  <Heading
                    textTransform={"capitalize"}
                    color={"lightgrey"}
                    fontSize={"base"}
                  >
                    {componentInFocus?.name}
                  </Heading>
                  <ModalCloseButton
                    position={"sticky"}
                    padding={0}
                    margin={0}
                    color={"lightgrey"}
                  />
                </Flex>
              }
            >
              <ComponentEditor />
            </CustomModal>
          </Flex>
        </Form>
      </FormProvider>
    </Box>
  );
};

export default Editor;
