import React from "react";
import CtaWithAnnotationData from "./cta-with-annotation.json";
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";

import { IComponent } from "@/types/schema";

const componentMap: Record<string, React.ComponentType<any>> = {
  Heading,
  Text,
  Button,
  Box,
  Icon,
  Stack,
  HStack,
};

export function RenderElement({ component }: { component: IComponent }) {
  const Component = componentMap[component.Component];

  if (!Component) return null;

  const StyledComponent = chakra(Component, {
    baseStyle: component.styles,
  });

  return (
    <StyledComponent {...component.attributes}>
      <>{component.innerText}</>
      {component.children &&
        component.children?.map((childElement) => {
          console.log(childElement);
          return (
            <RenderElement key={childElement.id} component={childElement} />
          );
        })}
    </StyledComponent>
  );
}

const TestCta = () => {
  return (
    <Center>
      {CtaWithAnnotationData.components.map((component) => (
        <RenderElement key={component.name} component={component} />
      ))}
    </Center>
  );
};

export default TestCta;
