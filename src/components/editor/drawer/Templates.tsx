"use client";

import { Template, templates } from "@/static/templates";

import {
  Box,
  Flex,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  SimpleGrid,
  AccordionIcon,
} from "@chakra-ui/react";

import React, { useState } from "react";

export const TemplateCategory = ({
  name,

  templates,
  onSelectTemplate,
}: {
  name: string;
  templates?: Template[];
  onSelectTemplate: (section: Template) => void;
}) => {
  return (
    <>
      <Accordion border={"none"} allowToggle allowMultiple={false}>
        <AccordionItem border={"none"} padding={0}>
          <AccordionButton padding={0}>
            <Flex
              w={"full"}
              border={"1px solid #131313"}
              padding={3}
              rounded={"base"}
              cursor={"pointer"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                fontSize={"sm"}
                color={"lightgrey"}
                textAlign={"center"}
                fontWeight={"semibold"}
              >
                {name}
              </Text>
              <AccordionIcon color={"white"} fontSize={"lg"} />
            </Flex>
          </AccordionButton>

          <AccordionPanel pb={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} w={"full"} gap={2}>
              {templates?.map((template) => (
                <Stack
                  rounded={"base"}
                  key={template.id}
                  height={"32"}
                  bg={"black"}
                  p={2}
                  w={"full"}
                  cursor={"pointer"}
                  onClick={() => onSelectTemplate(template)}
                >
                  <Flex gap={2} h={"60%"} w={"full"}>
                    <Box
                      bg={"dimgray"}
                      h={"full"}
                      w={"full"}
                      rounded={"base"}
                    />
                  </Flex>
                  <Text
                    fontSize={"sm"}
                    color={"lightgrey"}
                    textAlign={"center"}
                    fontWeight={"semibold"}
                  >
                    {template.name}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

const TemplatesDrawer = ({
  onSelectTemplate,
}: {
  onSelectTemplate: (section: Template) => void;
}) => {
  const [currentViewingSection, setCurrentViewingSection] = useState(
    templates[0]
  );
  const groupTemplatesByCategory = () => {
    return templates.reduce((acc, template) => {
      // If the category doesn't exist in the accumulator, create it
      if (!acc[template.category]) {
        acc[template.category] = [];
      }

      // Add the current template to the relevant category
      acc[template.category].push(template);

      return acc;
    }, {} as Record<string, Template[]>);
  };
  return (
    <Flex>
      <Stack w={"full"}>
        <Stack spacing={4} w={"full"}>
          {Object.keys(groupTemplatesByCategory()).map((category) => (
            <TemplateCategory
              name={category}
              key={category}
              onSelectTemplate={onSelectTemplate}
              templates={groupTemplatesByCategory()[category]}
            />
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default TemplatesDrawer;
