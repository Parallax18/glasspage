import { StyleProps } from "@chakra-ui/react";

export interface IComponent {
  name?: string;
  id?: string;
  type: string;
  thumbnail?: string;
  category?: string;
  styles: StyleProps;
  attributes?: any;
  Component: string;
  innerText?: string;
  level: number;
  componentType: string;
  children?: IComponent[];
}

export type IComponentWithIndex = IComponent & { index?: number };

export type ITag =
  | "div"
  | "span"
  | "p"
  | "button"
  | "img"
  | "a"
  | "input"
  | "form"
  | "section"
  | "header"
  | "footer"
  | "nav"
  | "ul"
  | "li"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface IElement {
  name?: string;
  id?: string;
  tag: ITag;
  thumbnail?: string;
  category?: string;
  styles?: Record<string, string | number>; // Inline HTML styles
  styleClassesLight?: string; // Tailwind class names for light mode
  styleClassesDark?: string; // Tailwind class names for dark mode
  attributes?: Record<string, any>;
  innerText?: string;
  parentId?: string; // Optional: Reference for context, if needed
  siblingsIds?: string[]; // Optional: Reference for context, if needed
  level: number; // Optional: For hierarchy or ordering
  childrenIds?: string[]; // Optional: Reference for context, if needed
  eventHandlers?: Record<string, Function>;
  bindings?: Record<string, any>;
  conditionalRender?: () => boolean;
}

export interface ComponentStruct {
  id: string;
  tag: ITag;
  name: string;
  styleEntityId: string;
  level: number;
  childrenIds?: string[];
  parentId?: string;
  innerText?: string;
}

export interface StyleEntity {
  id: string;
  name: string;
  variantName: string;
  classes: Classes;
  isDefault: boolean;
}

export interface Classes {
  light: string;
  dark: string;
  neutral: string;
}
