"use client";
import ChooseSectionType from "@/components/editor/ChooseSectionType";
import CustomModal from "@/components/general/CustomModal";
import SideDrawer from "@/components/general/SideDrawer";
import { Template } from "@/static/sections";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo, useState } from "react";

const Editor = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const {
    onClose: closeSectionsDrawer,
    isOpen: sectionsDrawerIsOpen,
    onOpen: openSectionsDrawer,
  } = useDisclosure();
  const [onScreenSectionTemplates, setOnScreenSectionTemplates] = useState<
    Template[]
  >([]);
  const handleSelectSection = (sectionTemplate: Template) => {
    onClose();
    setOnScreenSectionTemplates([...onScreenSectionTemplates, sectionTemplate]);
  };
  return (
    <Stack>
      <Box color={"white"}>
        {onScreenSectionTemplates?.map((section, index) => {
          const { Component } = section;
          const MemoizedComponent = memo(Component);

          return (
            <Box padding={"0%"}>
              <MemoizedComponent key={section.id + index} />
            </Box>
          );
        })}
        <Flex
          justify={"center"}
          position={"fixed"}
          w="full"
          zIndex={100000}
          left={0}
          bottom={10}
        >
          <Flex
            rounded={"full"}
            alignItems="center"
            justifyContent="space-between"
            bg="rgba(0, 0, 0, 0.3)"
            backdropFilter="blur(8px)"
            boxShadow={"lg"}
            px={2}
            py={2}
          >
            <Button rounded={"full"} bg={"none"} onClick={openSectionsDrawer}>
              Edit sections
            </Button>
            <Button w={"max"} bg={"none"} rounded={"full"} onClick={onOpen}>
              {onScreenSectionTemplates.length === 0
                ? "Add your first section"
                : "Add new section"}
            </Button>
            <Button
              w={"max"}
              bg={"green.600"}
              rounded={"full"}
              onClick={onOpen}
            >
              Save Changes
            </Button>
          </Flex>
        </Flex>
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title={
          <Heading color={"white"} fontSize={"base"}>
            Select your first section
          </Heading>
        }
      >
        <Center w={"full"}>
          <Stack w={"full"}>
            <ChooseSectionType onSelectSectionTemplate={handleSelectSection} />
          </Stack>
        </Center>
      </CustomModal>
      <SideDrawer
        isOpen={sectionsDrawerIsOpen}
        onClose={closeSectionsDrawer}
        title={
          <Heading color={"white"} fontSize={"base"}>
            Select your first section
          </Heading>
        }
      >
        {onScreenSectionTemplates.map((template) => (
          <Text color={"black"}>{template.name}</Text>
        ))}
      </SideDrawer>
    </Stack>
  );
};

export default Editor;
