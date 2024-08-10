import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import { DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import { BiTrash } from "react-icons/bi";
import { BsDash } from "react-icons/bs";
import { IComponent } from "@/types/schema";
import { useFieldArray, useFormContext } from "react-hook-form";
import { EditorForm } from "@/app/editor/page";

interface AddedSectionSidePaneProps {
  level?: number;
}

const AddedSections = (props: AddedSectionSidePaneProps) => {
  const { level = 0 } = props;
  const form = useFormContext<EditorForm>();
  const {
    fields: addedTemplates,
    append: selectTemplate,
    remove: deleteSection,
    update,
  } = useFieldArray({
    control: form.control,
    name: "page",
  });
  useEffect(() => {
    console.log({ addedTemplates });
  }, [addedTemplates]);

  return (
    <Stack spacing={4}>
      {addedTemplates.map((template, index) => (
        <Stack key={template.id} px={2}>
          <Menu closeOnSelect={false}>
            <Flex
              w={"full"}
              border={"1px solid #131313"}
              padding={3}
              rounded={"base"}
              cursor={"pointer"}
              alignItems={"center"}
              justifyContent={"space-between"}
              ml={level * 4} // Indentation based on level
            >
              <MenuButton aria-label="Added Sections" flex={1}>
                <Flex gap={2} alignItems={"center"}>
                  <Text
                    fontSize={"sm"}
                    color={"lightgrey"}
                    fontWeight={"bold"}
                    textAlign={"left"}
                    isTruncated
                    maxW="200px" // You can adjust the max width as needed
                  >
                    {template.level !== 0
                      ? template.innerText || template.type
                      : template.category}
                  </Text>
                  {template.level === 0 && <BsDash color="white" />}
                  <Text
                    fontSize={"sm"}
                    color={"gray"}
                    fontWeight={"semibold"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                  >
                    {template.name}
                  </Text>
                </Flex>
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
                        onClick={() => deleteSection()}
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
          {/* 
          {template.children && template.children.length > 0 && (
            <AddedSections
              // addedTemplates={template.children}
              // deleteSection={deleteSection}
              level={level + 1} // Increment the level for children
            />
          )} */}
        </Stack>
      ))}
    </Stack>
  );
};

export default AddedSections;
