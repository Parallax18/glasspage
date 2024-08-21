import { EditorForm } from "@/app/editor/page";
import { HStack, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FieldArrayWithId } from "react-hook-form";

interface Style {
  name: string;
  value: (val: string) => string;
}

interface StyleEditorProps {
  handleUpdateStyles: (style: string) => void;
  existingStyles:
    | FieldArrayWithId<EditorForm, "componentStyles", "_id">
    | undefined;
}

const StyleEditor = ({
  handleUpdateStyles,
  existingStyles,
}: StyleEditorProps) => {
  console.log({ existingStyles });
  const handleChange = (style: Style, val: string) => {
    console.log(style.name, style.value(val));
    // handleUpdateStyles(style.value(val));
  };
  const mapStyles = () => {
    if (existingStyles?.styles) {
      return Object.keys(existingStyles?.styles.light).map((property) => ({
        name: property.toUpperCase(),
        property,
        value: existingStyles?.styles.light[property],
      }));
    }
  };
  console.log({ styles: mapStyles() });
  return (
    <Stack spacing={3}>
      {mapStyles()?.map((style) => (
        <HStack key={style.name}>
          <Text flex={1} color={"white"} textTransform={"capitalize"}>
            {style.name}
          </Text>
          <Input
            color={"white"}
            w={32}
            value={style.value}
            // onChange={(e) => handleChange(style, e.target.value)}
          />
        </HStack>
      ))}
    </Stack>
  );
};

export default StyleEditor;
