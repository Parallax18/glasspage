import { StackProps, StyleProps } from "@chakra-ui/react";

export interface IComponent {
  name?: string;
  id?: string;
  type: string;
  styles: StyleProps;
  attributes?: any;
  Component: string;
  innerText?: string;
  level: number;
  componentType: string;
  children?: IComponent[];
}
