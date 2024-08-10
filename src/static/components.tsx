import { IElement } from "./elements";
import { StyleProps } from "@chakra-ui/react";

// Define the component types
type ComponentTypes = "card" | "avatar" | "button-with-icon" | "social-button";

// Interface for a component
interface IComponent {
  name: string;
  type: ComponentTypes;
  elements: IElement[];
  styles: Partial<StyleProps>; // Styles for the overall component
}

interface ComponentSchema {}

// Example components array with filtered styles
const components: IComponent[] = [
  {
    name: "card1",
    type: "card",
    styles: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "lg",
    },
    elements: [],
  },
  {
    name: "avatar1",
    type: "avatar",
    styles: {
      display: "flex",
      alignItems: "center",
    },
    elements: [],
  },
  {
    name: "buttonWithIcon1",
    type: "button-with-icon",
    styles: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "blue",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    elements: [],
  },
  {
    name: "socialButton1",
    type: "social-button",
    styles: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "gray.200",
    },
    elements: [],
  },
];

export default components;
