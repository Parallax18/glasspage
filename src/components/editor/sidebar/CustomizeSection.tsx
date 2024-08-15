import { ITemplate, ITemplateWithIndex } from "@/types/schema";
import { DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Heading,
  Divider,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsDash } from "react-icons/bs";
import CustomizationForm from "./CusomizationForm";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useFieldArray, useFormContext } from "react-hook-form";
import { EditorForm } from "@/app/editor/page";
import { onDragEnd } from "@/utils/dnd-utils";
import { useEditorStore } from "@/store/editor-store";
import { BiTrash } from "react-icons/bi";

const CustomizeSection = () => {
  const { control } = useFormContext<EditorForm>();
  const { componentInFocus, updateFocusedComponent } = useEditorStore();
  const {
    fields: addedTemplates,
    remove: deleteSection,
    update,
  } = useFieldArray({
    control,
    name: `page`,
  });

  const handleDragEnd = (result: DropResult) => {
    if (addedTemplates) {
      const index = componentInFocus?.index as number;
      onDragEnd({
        result,
        list: addedTemplates[index].children as ITemplate[],
        callback: (reorderedChildren) => {
          update(index, {
            ...addedTemplates[index],
            children: reorderedChildren,
          });
          updateFocusedComponent({ children: reorderedChildren });
          console.log({ reorderedChildren });
        },
      });
    }
  };
  return (
    <Stack>
      <CustomizationForm index={Number(componentInFocus?.index)} />

      <Stack
        gap={3}
        paddingTop={"1rem"}
        borderTop={"1px solid"}
        borderColor={"dark"}
      >
        <Text size={"base"} fontWeight={"light"} color={"lightgrey"}>
          Children
        </Text>
        <Stack p={0} rounded={"md"}>
          <Accordion allowToggle border={"none"} padding={0}>
            <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
              <Droppable droppableId="customize-children">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {componentInFocus?.children?.map((child, idx) => (
                      <Draggable
                        key={`k-${idx}`}
                        draggableId={`k-${idx}`}
                        index={idx}
                      >
                        {(_provided) => (
                          <AccordionItem
                            ref={_provided.innerRef}
                            {..._provided.draggableProps}
                            {..._provided.dragHandleProps}
                            border={"none"}
                            key={idx}
                            padding={0}
                            mb={2}
                          >
                            <AccordionButton padding={0}>
                              <Flex
                                w={"full"}
                                border={"1px solid"}
                                borderColor={"borderColor"}
                                padding={3}
                                rounded={"base"}
                                cursor={"pointer"}
                                alignItems={"center"}
                                justifyContent={"space-between"}
                              >
                                <Flex gap={2} alignItems={"center"}>
                                  <Text
                                    fontSize={"sm"}
                                    color={"lightgrey"}
                                    fontWeight={"bold"}
                                    textAlign={"left"}
                                    isTruncated
                                    maxW="200px"
                                    textTransform={"capitalize"}
                                  >
                                    {child.innerText ||
                                      (child.type === "card"
                                        ? `${child.children?.[0].type}s container`
                                        : child.type)}
                                  </Text>
                                  {child.level === 0 && (
                                    <BsDash color="white" />
                                  )}
                                  <Text
                                    fontSize={"sm"}
                                    color={"gray"}
                                    fontWeight={"semibold"}
                                    textAlign={"left"}
                                    textTransform={"capitalize"}
                                  >
                                    {child.name}
                                  </Text>
                                </Flex>

                                <DragHandleIcon
                                  color={"white"}
                                  cursor={"grab"}
                                />
                              </Flex>

                              <AccordionIcon color={"white"} />
                            </AccordionButton>

                            <AccordionPanel pb={4} padding={0}>
                              <CustomizationForm index={idx} />
                              {child.children ? (
                                <Item child={{ ...child, index: idx }} />
                              ) : null}
                            </AccordionPanel>
                          </AccordionItem>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Accordion>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CustomizeSection;

const Item = ({ child }: { child: ITemplateWithIndex }) => {
  return (
    <Flex
      w={"full"}
      border={"1px solid"}
      borderColor={"borderColor"}
      padding={3}
      rounded={"base"}
      cursor={"pointer"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex gap={2} alignItems={"center"}>
        <Text
          fontSize={"sm"}
          color={"lightgrey"}
          fontWeight={"bold"}
          textAlign={"left"}
          isTruncated
          maxW="200px"
          textTransform={"capitalize"}
        >
          {child.innerText ||
            (child.type === "card"
              ? `${child.children?.[0].type}s container`
              : child.type)}
        </Text>
        {child.level === 0 && <BsDash color="white" />}
        <Text
          fontSize={"sm"}
          color={"gray"}
          fontWeight={"semibold"}
          textAlign={"left"}
          textTransform={"capitalize"}
        >
          {child.name}
        </Text>
      </Flex>

      <DragHandleIcon color={"white"} cursor={"grab"} />
    </Flex>
  );
};
