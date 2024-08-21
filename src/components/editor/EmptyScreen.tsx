import { componentsJson } from "@/static/components";
import { useComponentEditorStore } from "@/store/component-editor-store";
import { useEditorStore } from "@/store/editor-store";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  UseDisclosureProps,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { RxComponent1 } from "react-icons/rx";

const EmptyScreen = () => {
  const { onOpen, setFocusedComponent } = useComponentEditorStore();
  return (
    <Box
      position="relative"
      width="full"
      height="100vh"
      bgGradient="linear(to-r, black, dark)"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
      >
        <Box className="animate-fade-in-up">
          <Heading as="h1" size="2xl" fontWeight="bold" mb="4">
            You&apos;ve got a clean slate
          </Heading>
          <Text fontSize="lg" mb="8" color={"lightgray"}>
            Select a template from the left panel to begin
          </Text>
          <Button
            bg={"rosybrown"}
            color={"black"}
            onClick={() => {
              // temporary
              setFocusedComponent(componentsJson[0]);
              onOpen();
            }}
            py={3}
            fontSize={"sm"}
            rounded={"none"}
            w={"full"}
          >
            <Flex>
              {/* <RxComponent1 color="black" size={16} /> */}
              <Text>Or start with a component</Text>
            </Flex>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyScreen;
