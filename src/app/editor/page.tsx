"use client";

import EditorDrawer from "@/components/editor/drawer";
import AddedSections from "@/components/editor/drawer/AddedSections";
import EmptyScreen from "@/components/editor/EmptyScreen";
import RenderComponent from "@/components/editor/RenderComponent";
import { useEditorStore } from "@/store/editor-store";
import { IComponent } from "@/types/schema";
import { onDragEnd } from "@/utils/dnd-utils";

import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import {
  Form,
  FormProvider,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";

export interface EditorForm {
  page: IComponent[];
}

const Editor = () => {
  const { onOpen } = useEditorStore();
  const form = useForm<EditorForm>({ defaultValues: { page: [] } });

  const onScreenSectionTemplates = useWatch({
    control: form.control,
    name: "page",
  });
  const { update } = useFieldArray({
    control: form.control,
    name: "page",
  });
  const handleDragEnd = (result: DropResult) => {
    onDragEnd({
      result,
      list: onScreenSectionTemplates,
      callback: (reorderedSections) => {
        reorderedSections.forEach((item, index) => update(index, item));
      },
    });
  };

  return (
    <Box>
      <FormProvider {...form}>
        <Form>
          {onScreenSectionTemplates.length === 0 ? (
            <EmptyScreen onOpen={onOpen} />
          ) : (
            <Box>
              <Flex justify={"end"} position={"fixed"} right={0} p={5}>
                <Button
                  onClick={onOpen}
                  variant={"outline"}
                  color={"lightgray"}
                  border={"1px solid #131313"}
                  _hover={{ border: "1px solid rosybrown" }}
                >
                  Editor panel
                </Button>
              </Flex>

              <Box color={"white"}>
                <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
                  <Droppable droppableId="editor">
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {onScreenSectionTemplates.map((section, index) => {
                          console.log({ section });
                          const MemoizedComponent = memo(RenderComponent);

                          return (
                            <MemoizedComponent key={index} {...section} />
                            // <Draggable
                            //   key={`k-${index}`}
                            //   draggableId={`k-${index}`}
                            //   index={index}
                            // >
                            //   {(_provided) => (
                            //     <div
                            //       ref={_provided.innerRef}
                            //       {..._provided.draggableProps}
                            //       {..._provided.dragHandleProps}
                            //     >

                            //     </div>
                            //   )}
                            // </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </Box>
            </Box>
          )}

          <EditorDrawer />
        </Form>
      </FormProvider>
    </Box>
  );
};

export default Editor;
