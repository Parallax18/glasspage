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
            {data?.children?.map((child, idx) => (
              <AccordionItem border={"none"} key={child.id} padding={0} mb={2}>
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

                <AccordionPanel pb={4} padding={0}>
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
    </Stack>
  );
};

export default CustomizeSection;
