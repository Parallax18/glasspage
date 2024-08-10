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
      //   bg={'dark'}
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
          {/* <Image
            src="/placeholder.svg"
            alt="Amazon Pay"
            mx="auto"
            width="8rem"
            mb="6"
          /> */}

          <Heading as="h1" size="2xl" fontWeight="bold" mb="4">
            You&apos;ve got a clean slate
          </Heading>
          <Text fontSize="lg" mb="8" color={"lightgray"}>
            Customize templates to fit your brand, build your page
          </Text>
        </Box>
        <Box className="animate-fade-in-up" transitionDelay="0.3s">
          <Button
            bg="rosybrown"
            color="black"
            fontWeight="bold"
            py="3"
            px="8"
            onClick={props.onOpen}
          >
            Start building
          </Button>
        </Box>
      </Box>
      {/* <Box
        position="absolute"
        bottom="0"
        width="full"
        height="33%"
        bgGradient="linear(to-t, #0072C6, transparent)"
      /> */}
    </Box>
  );
};

export default EmptyScreen;
