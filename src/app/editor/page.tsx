"use client";

import EditorDrawer from "@/components/editor/sidebar";
import EmptyScreen from "@/components/editor/EmptyScreen";
import RenderComponent from "@/components/editor/RenderComponent";
import { useEditorStore } from "@/store/editor-store";
import { IComponent } from "@/types/schema";

import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { Component, memo } from "react";

import { Form, FormProvider, useForm, useWatch } from "react-hook-form";
import SideDrawer from "@/components/general/SideDrawer";
import ComponentEditor from "@/components/editor/component-editor/ComponentEditor";
import { ComponentStruct, StyleEntity } from "@/types/schema";
import { componentsJson } from "@/static/components";

export interface EditorForm {
  page: IComponent[];
  components: ComponentStruct[][];
  componentStyles: StyleEntity[];
}

const Editor = () => {
  const { onOpen, isOpen, onClose } = useEditorStore();
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
                <EmptyScreen onOpen={onOpen} />
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
            <SideDrawer
              isOpen={isOpen}
              onClose={onClose}
              size={"full"}
              title={
                <Heading color={"white"} fontSize={"base"}>
                  Component Name
                </Heading>
              }
            >
              <ComponentEditor />
            </SideDrawer>
          </Flex>
        </Form>
      </FormProvider>
    </Box>
  );
};

export default Editor;
