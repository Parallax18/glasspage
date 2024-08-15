import { componentsJson } from "@/static/components";
import { useComponentEditorStore } from "@/store/component-editor-store";
import { ComponentStruct } from "@/types/schema";
import { DragHandleIcon } from "@chakra-ui/icons";
import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Components = () => {
  const { onOpen, setFocusedComponent } = useComponentEditorStore();
  return (
    <>
      <Stack spacing={4} w={"full"}>
        {componentsJson.map((component, index) => (
          <Item
            onClick={() => {
              setFocusedComponent(component);
              onOpen();
            }}
            key={component.structure[index].id}
            component={component.structure as ComponentStruct[]}
          />
        ))}
      </Stack>
    </>
  );
};

export default Components;

const Item = ({
  component,
  onClick,
}: {
  component: ComponentStruct[];
  onClick: () => void;
}) => {
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
      <Flex flex={1} gap={2} alignItems={"center"} onClick={onClick}>
        <Text
          fontSize={"sm"}
          color={"lightgrey"}
          fontWeight={"bold"}
          textAlign={"left"}
          isTruncated
          maxW="200px"
          textTransform={"capitalize"}
        >
          {component[0].name}
        </Text>
      </Flex>

      <DragHandleIcon color={"white"} cursor={"grab"} />
    </Flex>
  );
};
