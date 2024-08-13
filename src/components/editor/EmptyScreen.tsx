import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  UseDisclosureProps,
} from "@chakra-ui/react";

interface EmptyScreenProps {
  onOpen: UseDisclosureProps["onOpen"];
}

const EmptyScreen = (props: EmptyScreenProps) => {
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
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyScreen;
