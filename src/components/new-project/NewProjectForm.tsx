"use client";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const NewProjectForm = () => {
  const router = useRouter();
  return (
    <Box w={"40%"} m={"auto"} paddingY={"10%"}>
      <Stack spacing={10}>
        <Text color={"yellow.400"} fontWeight={"bold"} fontSize={"2rem"}>
          Create your portfolio
        </Text>
        <Stack>
          <Text as={"label"} color={"gray.300"}>
            Enter your name
          </Text>
          <Input
            h={14}
            px={4}
            border={"1px solid"}
            borderColor={"dimgray"}
            outline={"none"}
            boxShadow={"none"}
            color={"white"}
            _focus={{
              outline: "none",
              border: "1px solid",
              borderColor: "grey",
              boxShadow: "none",
              ring: "none",
            }}
            _hover={{
              boxShadow: "none",
            }}
            _active={{
              outline: "none",
              boxShadow: "none",
            }}
          />
        </Stack>
        <Button
          w={"full"}
          bg={"green.600"}
          onClick={() => router.push("/editor")}
        >
          Go to editor
        </Button>
      </Stack>
    </Box>
  );
};

export default NewProjectForm;
