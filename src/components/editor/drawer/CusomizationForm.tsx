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
  const { setValue, control, register } = useFormContext<EditorForm>();
  const form = useWatch({ control: control });

  return (
    <Box color={"lightgray"}>
      <Stack p="6" gap="4">
        <FormControl mb="4">
          {/* <FormLabel
            htmlFor="name"
            fontSize="sm"
            fontWeight="medium"
            color={"lightgrey"}
          >
            Content
          </FormLabel> */}
          <Input
            id="name"
            placeholder="Enter your name"
            size="md"
            rounded="md"
            borderColor="borderColor"
            // {...register(`page.${index}.name`)}
            value={form.page?.[index]?.name}
            onChange={(e) => setValue(`page.${index}.name`, e.target.value)}
            bg={"dark"}
            h={12}
            _focus={{
              ring: 2,
              ringColor: "blue.500",
            }}
          />
        </FormControl>
      </Stack>
    </Box>
  );
};

export default CustomizationForm;
