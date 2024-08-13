"use client";

import React from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Box,
  IconButton,
  Divider,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import { BiTrash } from "react-icons/bi";
import { IComponentWithIndex } from "@/types/schema";
import { useFieldArray, useFormContext } from "react-hook-form";
import { EditorForm } from "@/app/editor/page";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { onDragEnd } from "@/utils/dnd-utils";

interface AddedSectionSidePaneProps {
  level?: number;
  openEditView: (data: IComponentWithIndex) => void;
}

const AddedSections = (props: AddedSectionSidePaneProps) => {
  const { openEditView, level = 0 } = props;
  const { control } = useFormContext<EditorForm>();
  const {
    fields: addedTemplates,
    remove: deleteSection,
    update,
  } = useFieldArray({
    control,
    name: "page",
  });

  const handleDragEnd = (result: DropResult) => {
    onDragEnd({
      result,
      list: addedTemplates,
      callback: (reorderedSections) => {
        reorderedSections.forEach((item, index) => update(index, item));
      },
    });
  };

  return (
    <>
      <Stack spacing={4}>
        <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
          <Droppable droppableId="added-sections">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {addedTemplates.map((template, index) => (
                  <Draggable
                    key={`k-${index}`}
                    draggableId={`k-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <Stack
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        mb={2} // Add margin between items
                      >
                        <Menu closeOnSelect={false}>
                          <Flex
                            w="full"
                            border="1px solid"
                            borderColor={"borderColor"}
                            padding={3}
                            rounded="base"
                            cursor="pointer"
                            alignItems="center"
                            justifyContent="space-between"
                            // ml={level * 4} // Indentation based on level
                          >
                            <MenuButton aria-label="Added Sections" flex={1}>
                              <Flex gap={2} alignItems="center">
                                <Text
                                  fontSize="sm"
                                  color="lightgrey"
                                  fontWeight="semibold"
                                  textAlign="left"
                                  textTransform="capitalize"
                                >
                                  {template.name}
                                </Text>
                              </Flex>
                            </MenuButton>
                            <DragHandleIcon color="white" cursor="grab" />
                          </Flex>
                          <MenuList bg={"bgColor"} border="1px solid #131313">
                            <MenuItem
                              bg={"bgColor"}
                              color="lightgrey"
                              icon={<EditIcon />}
                              onClick={() => {
                                openEditView({ ...template, index });
                              }}
                            >
                              Edit section
                            </MenuItem>
                            <Popover placement="bottom-end" closeOnBlur>
                              <PopoverTrigger>
                                <MenuItem
                                  bg={"bgColor"}
                                  color="red.600"
                                  icon={<BiTrash size={16} />}
                                >
                                  Delete section
                                </MenuItem>
                              </PopoverTrigger>
                              <PopoverContent
                                bg={"bgColor"}
                                border="1px solid #131313"
                                w="max"
                                mt={2}
                              >
                                <PopoverBody>
                                  <HStack gap={4}>
                                    <IconButton
                                      aria-label="confirm delete action"
                                      bg="none"
                                      onClick={() => deleteSection(index)}
                                      icon={
                                        <Text color="green" fontSize="xs">
                                          Confirm
                                        </Text>
                                      }
                                    />
                                    <Divider
                                      orientation="vertical"
                                      h={5}
                                      border="1px solid #131313"
                                    />
                                    <IconButton
                                      aria-label="cancel delete action"
                                      bg="none"
                                      icon={
                                        <Text color="red.700" fontSize="xs">
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
                      </Stack>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Stack>
    </>
  );
};

export default AddedSections;
