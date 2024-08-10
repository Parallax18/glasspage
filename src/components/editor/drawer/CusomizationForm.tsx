import { EditorForm } from "@/app/editor/page";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Switch,
  Text,
  Textarea,
  useCheckbox,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";

const CustomizationForm = ({ index }: { index: number }) => {
  const { getInputProps, getCheckboxProps } = useCheckbox();
  const { getRootProps, getRadioProps } = useRadioGroup();
  const { setValue, control } = useFormContext<EditorForm>();
  const form = useWatch({ control: control });
  //   const {} = useFieldArray({control, name: "page"})
  console.log({ form });

  return (
    <Box color={"lightgray"}>
      <Stack p="6" gap="4">
        <FormControl mb="4">
          <FormLabel htmlFor="name" fontSize="sm" fontWeight="medium">
            Name
          </FormLabel>
          <Input
            id="name"
            placeholder="Enter your name"
            size="md"
            rounded="md"
            borderColor="borderColor"
            onChange={(e) => setValue(`page.${index}.name`, e.target.value)}
            bg={"dark"}
            _focus={{
              ring: 2,
              ringColor: "blue.500",
            }}
          />
        </FormControl>

        <FormControl mb="4" hidden>
          <FormLabel htmlFor="bio" fontSize="sm" fontWeight="medium">
            Content
          </FormLabel>
          <Textarea
            id="bio"
            placeholder="Tell us about yourself"
            size="md"
            rounded="md"
            borderColor="borderColor"
            bg={"dark"}
            minH="100px"
            _focus={{
              ring: 2,
              ringColor: "blue.500",
            }}
          />
        </FormControl>

        <FormControl mb="4" hidden>
          <FormLabel htmlFor="avatar" fontSize="sm" fontWeight="medium">
            Avatar
          </FormLabel>
          <Flex alignItems="center" gap="2">
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              position="relative"
              h={100}
              w={32}
              bg={"dark"}
              border={"1px solid"}
              borderColor={"borderColor"}
            >
              {/* <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                rounded="md"
                border="1px"
                borderColor="borderColor"
                bg="gray.100"
                cursor="pointer"
                overflow="hidden"
                p="1"
                color="gray.500"
                transition="all 0.2s"
                _hover={{ borderColor: "blue.500" }}
              >
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M2 15h10"></path>
                <path d="m9 18 3-3-3-3"></path>
              </Box> */}
              <Box
                // position="absolute"
                inset="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  as="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  w="6"
                  h="6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </Box>
              </Box>
            </Flex>
            <Box flex="1">
              <Text id="avatar-file-name" fontSize="sm" fontWeight="medium">
                No file chosen
              </Text>
              <Flex gap="2">
                <Button size="sm" borderRadius="md">
                  Change
                </Button>
                <Button size="sm" borderRadius="md">
                  Delete
                </Button>
              </Flex>
            </Box>
          </Flex>
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="4" hidden>
          <Switch id="notifications" defaultChecked colorScheme="green" />
          <FormLabel
            htmlFor="notifications"
            mb="0"
            ml="2"
            fontSize="sm"
            fontWeight="medium"
          >
            Notifications
          </FormLabel>
        </FormControl>

        <FormControl mb="4">
          <FormLabel fontSize="sm" fontWeight="medium">
            Preferences
          </FormLabel>
          <Box>
            <Flex alignItems="center" gap="2">
              <Box
                as="button"
                {...getCheckboxProps()}
                id="dark-mode"
                h="4"
                w="4"
                borderWidth="1px"
                borderColor="dark"
                rounded="sm"
              />
              <FormLabel
                htmlFor="dark-mode"
                mb="0"
                fontSize="sm"
                fontWeight="medium"
              >
                Dark Mode
              </FormLabel>
            </Flex>
            <Flex alignItems="center" gap="2">
              <Box
                as="button"
                {...getCheckboxProps()}
                id="weekly-updates"
                h="4"
                w="4"
                borderWidth="1px"
                borderColor="dark"
                rounded="sm"
              />
              <FormLabel
                htmlFor="weekly-updates"
                mb="0"
                fontSize="sm"
                fontWeight="medium"
              >
                Weekly Updates
              </FormLabel>
            </Flex>
          </Box>
        </FormControl>

        <FormControl mb="4">
          <FormLabel fontSize="sm" fontWeight="medium">
            Notification Frequency
          </FormLabel>
          <Box {...getRootProps()} role="radiogroup">
            <Flex alignItems="center" gap="2">
              <Box
                as="button"
                {...getRadioProps({ value: "daily" })}
                id="daily"
                h="4"
                w="4"
                borderWidth="1px"
                borderColor="dark"
                rounded="full"
              />
              <FormLabel
                htmlFor="daily"
                mb="0"
                fontSize="sm"
                fontWeight="medium"
              >
                Daily
              </FormLabel>
            </Flex>
            <Flex alignItems="center" gap="2">
              <Box
                as="button"
                {...getRadioProps({ value: "weekly" })}
                id="weekly"
                h="4"
                w="4"
                borderWidth="1px"
                borderColor="dark"
                rounded="full"
              />
              <FormLabel
                htmlFor="weekly"
                mb="0"
                fontSize="sm"
                fontWeight="medium"
              >
                Weekly
              </FormLabel>
            </Flex>
            <Flex alignItems="center" gap="2">
              <Box
                as="button"
                {...getRadioProps({ value: "monthly" })}
                id="monthly"
                h="4"
                w="4"
                borderWidth="1px"
                borderColor="dark"
                rounded="full"
              />
              <FormLabel
                htmlFor="monthly"
                mb="0"
                fontSize="sm"
                fontWeight="medium"
              >
                Monthly
              </FormLabel>
            </Flex>
          </Box>
        </FormControl>

        <FormControl>
          <FormLabel fontSize="sm" fontWeight="medium">
            Notification Channels
          </FormLabel>
          {/* Add more inputs here as needed */}
        </FormControl>
      </Stack>
    </Box>
  );
};

export default CustomizationForm;
