import ChooseSectionType from "@/components/editor/ChooseSectionType";
import Preview from "@/components/editor/Preview";
import SidePane from "@/components/editor/SidePane";

import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Editor = () => {
  return (
    <Box>
      <Center w={"full"} mt={"10%"}>
        <Stack w={"60%"}>
          <Heading color={"white"}>Select your first section</Heading>
          <ChooseSectionType />
        </Stack>
      </Center>
    </Box>
  );
};

export default Editor;
