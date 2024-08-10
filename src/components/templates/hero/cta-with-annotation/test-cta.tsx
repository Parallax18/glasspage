import React from "react";
import CtaWithAnnotationData from "./cta-with-annotation.json";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
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
  Flex,
  Image,
};

export function RenderElement({ component }: { component: IComponent }) {
  const Component = componentMap[component.Component];

  if (!Component) return null;

  const StyledComponent = chakra(Component, {
    baseStyle: component.styles,
  });

  return (
    <>
      {component.type === "image" || component.type === "text-input" ? (
        <StyledComponent {...component.attributes} />
      ) : (
        <StyledComponent {...component.attributes}>
          <>{component.innerText}</>
          {component.children &&
            component.children?.map((childElement) => {
              return (
                <RenderElement key={childElement.id} component={childElement} />
              );
            })}
        </StyledComponent>
      )}
    </>
  );
}

const TestCta = (props) => {
  return (
    <Center>
      <RenderElement key={props.name} component={props} />
    </Center>
  );
};

export default TestCta;
