import React from "react";
import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  IconButton,
  Divider,
  HStack,
} from "@chakra-ui/react";

import { DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import { Template } from "@/static/templates";
import { BiTrash } from "react-icons/bi";

interface AddedSectionSidePaneProps {
  addedTemplates: Template[];
  deleteSection: (section: Template) => void;
}

const AddedSections = (props: AddedSectionSidePaneProps) => {
  const { addedTemplates, deleteSection } = props;
  return (
    <Stack spacing={4}>
      {addedTemplates.map((template) => (
        <Menu closeOnSelect={false}>
          <Flex
            w={"full"}
            border={"1px solid #131313"}
            padding={3}
            rounded={"base"}
            cursor={"pointer"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <MenuButton aria-label="Added Sections" flex={1}>
              <Text
                fontSize={"sm"}
                color={"lightgrey"}
                fontWeight={"semibold"}
                textAlign={"left"}
              >
                {template.name}
              </Text>
            </MenuButton>
            <DragHandleIcon color={"white"} cursor={"grab"} />
          </Flex>
          <MenuList bg={"#060606"} border={"1px solid #131313"}>
            <MenuItem bg={"#060606"} color={"lightgrey"} icon={<EditIcon />}>
              Edit section
            </MenuItem>

            <Popover placement="bottom-end" closeOnBlur>
              <PopoverTrigger>
                <MenuItem
                  bg={"#060606"}
                  color={"red.600"}
                  icon={<BiTrash size={16} />}
                >
                  Delete section
                </MenuItem>
              </PopoverTrigger>
              <PopoverContent
                bg="#060606"
                border={"1px solid #131313"}
                w={"max"}
                mt={2}
              >
                <PopoverBody>
                  <HStack gap={4}>
                    <IconButton
                      aria-label="confirm delete action"
                      bg={"none"}
                      onClick={() => deleteSection(template)}
                      icon={
                        <Text color={"green"} fontSize={"xs"}>
                          Confirm
                        </Text>
                      }
                    />

                    <Divider
                      orientation="vertical"
                      h={5}
                      border={"1px solid #131313"}
                    />
                    <IconButton
                      aria-label="cancel delete action"
                      bg={"none"}
                      icon={
                        <Text color={"red.700"} fontSize={"xs"}>
                          Cancel
                        </Text>
                      }
                    />
                  </HStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </MenuList>
        </Menu>
      ))}
    </Stack>
  );
};

export default AddedSections;
