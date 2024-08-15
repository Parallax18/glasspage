import { componentsJson } from "@/static/components";
import { ComponentStruct } from "@/types/schema";
import { DragHandleIcon } from "@chakra-ui/icons";
import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Components = () => {
  return (
    <>
      <Stack spacing={4} w={"full"}>
        {componentsJson.map((component, index) => (
          <Item
            key={component[index].id}
            component={component as ComponentStruct[]}
          />
        ))}
      </Stack>
    </>
  );
};

export default Components;

const Item = ({ component }: { component: ComponentStruct[] }) => {
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
          {component[0].name}
        </Text>
      </Flex>

      <DragHandleIcon color={"white"} cursor={"grab"} />
    </Flex>
  );
};
