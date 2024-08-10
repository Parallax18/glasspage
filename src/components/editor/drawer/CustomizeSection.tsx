import { IComponentWithIndex } from "@/types/schema";
import { DragHandleIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React from "react";
import { BsDash } from "react-icons/bs";
import CustomizationForm from "./CusomizationForm";

const CustomizeSection = ({ data }: { data?: IComponentWithIndex }) => {
  return (
    <Stack>
      <CustomizationForm index={Number(data?.index)} />

      <Heading size={"base"} color={"white"}>
        Children
      </Heading>
      <Stack p={3} rounded={"md"}>
        <Accordion allowToggle border={"none"}>
          {data?.children?.map((child, idx) => (
            <AccordionItem border={"none"} key={child.id} padding={0}>
              <AccordionButton>
                <Flex
                  w={"full"}
                  border={"1px solid"}
                  borderColor={"lightgrey"}
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
                      maxW="250px"
                      textTransform={"capitalize"}
                    >
                      {child.innerText || child.type}
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
                <AccordionIcon color={"white"} />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <CustomizationForm index={idx} />
                {child.children ? (
                  <CustomizeSection data={{ ...child, index: idx }} />
                ) : null}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default CustomizeSection;
