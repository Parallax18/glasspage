import { Button, Image, StyleProps, Text } from "@chakra-ui/react";
import NextImage from "next/image";

// Define the element types
export type ElementTypes = "text" | "button" | "image" | "icon" | "input";

export interface IElement {
  id: string;
  type: ElementTypes;
  styles: Partial<StyleProps>;
  attributes?: Record<string, any>; // Attributes specific to the element
  Component: React.ComponentType<any>; // Component to render
}

// Define allowed styles for each element type
export const allowedStyles: Record<ElementTypes, (keyof StyleProps)[]> = {
  text: ["color", "fontSize", "fontWeight", "lineHeight", "textAlign"],
  button: [
    "backgroundColor",
    "color",
    "padding",
    "borderRadius",
    "fontSize",
    "paddingX",
    "paddingY",
  ],
  image: ["width", "height", "objectFit", "borderRadius"],
  icon: ["color", "fontSize", "margin"],
  input: ["padding", "borderColor", "fontSize", "width", "height"],
};

// Function to filter styles based on the element type
export function filterStyles(
  type: ElementTypes,
  styles: Partial<StyleProps>
): Partial<StyleProps> {
  const allowed = allowedStyles[type];
  return Object.fromEntries(
    Object.entries(styles).filter(([key]) =>
      allowed.includes(key as keyof StyleProps)
    )
  );
}

// Define elements with specific attributes and components
const elements: IElement[] = [
  {
    id: "1",
    type: "text",
    styles: filterStyles("text", {
      color: "black",
      fontSize: "20px",
    }),
    attributes: { as: "p" }, // Example attribute specific to Text
    Component: Text,
  },
  {
    id: "2",
    type: "button",
    styles: filterStyles("button", {
      backgroundColor: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    }),
    attributes: { type: "submit" }, // Example attribute specific to Button
    Component: Button,
  },
  {
    id: "3",
    type: "image",
    styles: filterStyles("image", {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "8px",
    }),
    attributes: { src: "/path/to/image.jpg", alt: "An image" }, // Attributes for Image
    Component: (props: any) => (
      <Image as={NextImage} {...props} layout="fill" /> // Chakra styling with Next.js Image
    ),
  },
];

export default elements;
