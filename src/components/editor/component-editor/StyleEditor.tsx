import { Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const styles = [
  {
    name: "background color",
    value: (color: string) => `bg-[${color}]`,
  },
  {
    name: "color",
    value: (color: string) => `text-[${color}]`,
  },
  {
    name: "padding",
    value: (padding: string) => `p-[${padding}]`,
  },
  {
    name: "padding X-axis",
    value: (padding: string) => `px-[${padding}]`,
  },
  {
    name: "padding Y-axis",
    value: (padding: string) => `py-[${padding}]`,
  },
  {
    name: "width",
    value: (width: string) => `w-[${width}]`,
  },
  {
    name: "height",
    value: (height: string) => `h-[${height}]`,
  },
];

interface Style {
  name: string;
  value: (val: string) => string;
}

const StyleEditor = ({
  handleUpdateStyles,
}: {
  handleUpdateStyles: (style: string) => void;
}) => {
  const handleChange = (style: Style, val: string) => {
    console.log(style.name, style.value(val));
    handleUpdateStyles(style.value(val));
  };
  return (
    <Stack spacing={3}>
      {styles.map((style) => (
        <HStack key={style.name}>
          <Text flex={1} color={"white"} textTransform={"capitalize"}>
            {style.name}
          </Text>
          <Input
            color={"white"}
            w={32}
            onChange={(e) => handleChange(style, e.target.value)}
          />
        </HStack>
      ))}
    </Stack>
  );
};

export default StyleEditor;
