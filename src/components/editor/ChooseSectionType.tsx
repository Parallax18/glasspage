import { Box, Center, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const sections = ["Hero", "Pricing", "Grid", "List", "Cards", "Custom"];

export const SectionOption = ({ name }: { name: string }) => {
  return (
    <Stack
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
  );
};

const ChooseSectionType = () => {
  return (
    // <Center>
    <Flex
      rounded={"base"}
      alignItems="center"
      justifyContent="space-between"
      // bg="rgba(255, 255, 255, 0.3)" // Set the background color with opacity for the blur effect
      // backdropFilter="blur(8px)"
      // boxShadow={"lg"}
      // px={2}
      py={2}
    >
      <HStack spacing={2} w={"full"} padding={2}>
        {sections.map((section) => (
          <SectionOption key={section} name={section} />
        ))}
      </HStack>
    </Flex>
    // </Center>
  );
};

export default ChooseSectionType;
