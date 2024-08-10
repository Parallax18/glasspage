"use client";

import EditorDrawer from "@/components/editor/drawer";
import EmptyScreen from "@/components/editor/EmptyScreen";
import RenderComponent from "@/components/editor/RenderComponent";
import { IComponent } from "@/types/schema";

import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { memo, useState } from "react";
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
  const { onClose, isOpen, onOpen } = useDisclosure();
  const form = useForm<EditorForm>({ defaultValues: { page: [] } });

  const onScreenSectionTemplates = useWatch({
    control: form.control,
    name: "page",
  });

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
                  hidden
                >
                  Editor panel
                </Button>
              </Flex>

              <Box color={"white"}>
                {onScreenSectionTemplates.map((section, index) => {
                  console.log({ section });
                  const MemoizedComponent = memo(RenderComponent);

                  return <MemoizedComponent key={index} {...section} />;
                })}
              </Box>
            </Box>
          )}

          <EditorDrawer onClose={onClose} isOpen={isOpen} />
        </Form>
      </FormProvider>
    </Box>
  );
};

export default Editor;
