"use client";

import { templates } from "@/static/templates";
import { IComponent } from "@/types/schema";

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
import Image from "next/image";

import React from "react";

export const TemplateCategory = ({
  name,
  templates,
  onSelectTemplate,
}: {
  name: string;
  templates?: IComponent[];
  onSelectTemplate: (section: IComponent) => void;
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
                {name} section templates
              </Text>
              <AccordionIcon color={"white"} fontSize={"lg"} />
            </Flex>
          </AccordionButton>

          <AccordionPanel
            pb={4}
            maxH={250}
            overflowY={"scroll"}
            border={"1px"}
            borderTop={0}
          >
            <SimpleGrid columns={{ base: 1, md: 1 }} w={"full"} gap={2}>
              {templates?.map((template) => (
                <Stack
                  rounded={"base"}
                  key={template.id}
                  bg={"black"}
                  p={2}
                  w={"full"}
                  cursor={"pointer"}
                  onClick={() => onSelectTemplate(template)}
                >
                  <Box
                    h={"10rem"}
                    bg={"dimgray"}
                    w={"full"}
                    rounded={"base"}
                    position={"relative"}
                  >
                    <Image
                      fill
                      src={String(template.thumbnail)}
                      alt=""
                      objectFit="cover"
                    />
                  </Box>

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
  onSelectTemplate: (section: IComponent) => void;
}) => {
  const groupTemplatesByCategory = () => {
    return templates.reduce((acc, template) => {
      // If the category doesn't exist in the accumulator, create it
      if (!acc[template.category]) {
        acc[template.category] = [];
      }

      // Add the current template to the relevant category
      // TODO: FIX THIS!!!
      // @ts-ignore
      acc[template.category].push(template);

      return acc;
    }, {} as Record<string, IComponent[]>);
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
