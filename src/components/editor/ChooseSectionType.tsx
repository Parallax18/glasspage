"use client";

import { Section, sections, Template } from "@/static/sections";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";

import React, { useState } from "react";

export const SectionOption = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <>
      <Stack
        onClick={onClick}
        height={"32"}
        w={"full"}
        bg={"black"}
        padding={2}
        rounded={"base"}
        cursor={"pointer"}
      >
        <Flex gap={2} h={"60%"} w={"full"}>
          <Box bg={"dark"} h={"full"} w={"full"} rounded={"base"} />
        </Flex>
        <Text
          fontSize={"sm"}
          color={"yellow.400"}
          textAlign={"center"}
          fontWeight={"semibold"}
        >
          {name}
        </Text>
      </Stack>
    </>
  );
};

const ChooseSectionType = ({
  onSelectSectionTemplate,
}: {
  onSelectSectionTemplate: (section: Template) => void;
}) => {
  const [currentViewingSection, setCurrentViewingSection] = useState<Section>(
    sections[0]
  );
  return (
    <Flex>
      <Stack w={"full"}>
        <HStack spacing={2} w={"full"}>
          {sections.map((section) => (
            <SectionOption
              name={section.name}
              key={section.name}
              onClick={() => {
                setCurrentViewingSection(section);
              }}
            />
          ))}
        </HStack>

        <Flex w={"full"} gap={2}>
          {sections
            .find((item) => item.name === currentViewingSection?.name)
            ?.templates.map((template) => (
              <Stack
                rounded={"base"}
                key={template.id}
                height={"64"}
                bg={"black"}
                p={2}
                w={"full"}
                cursor={"pointer"}
                onClick={() => onSelectSectionTemplate(template)}
              >
                <Flex gap={2} h={"60%"} w={"full"}>
                  <Box bg={"dark"} h={"full"} w={"full"} rounded={"base"} />
                </Flex>
                <Text
                  fontSize={"sm"}
                  color={"yellow.400"}
                  textAlign={"center"}
                  fontWeight={"semibold"}
                >
                  {template.name}
                </Text>
              </Stack>
            ))}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ChooseSectionType;
