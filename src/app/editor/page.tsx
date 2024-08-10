"use client";

import EditorDrawer, { EditorDrawerViews } from "@/components/editor/drawer";
import TestCta from "@/components/templates/hero/cta-with-annotation/test-cta";
import { IComponent } from "@/types/schema";

import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo, useState } from "react";

const Editor = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  const [onScreenSectionTemplates, setOnScreenSectionTemplates] = useState<
    IComponent[]
  >([]);

  return (
    <Box>
      <Flex justify={"end"} position={"fixed"} right={0} p={5}>
        <Button
          onClick={onOpen}
          variant={"outline"}
          color={"lightgray"}
          border={"1px solid #131313"}
        >
          Editor panel
        </Button>
      </Flex>

      <Box color={"white"}>
        <Box paddingX={"3%"}>
          {onScreenSectionTemplates?.map((section, index) => {
            console.log({ section });
            const MemoizedComponent = memo(TestCta);

            return <MemoizedComponent key={section.name} {...section} />;
          })}
        </Box>
      </Box>
      <EditorDrawer
        onClose={onClose}
        isOpen={isOpen}
        selectedTemplates={onScreenSectionTemplates}
        selectTemplate={setOnScreenSectionTemplates}
      />
    </Box>
  );
};

export default Editor;
