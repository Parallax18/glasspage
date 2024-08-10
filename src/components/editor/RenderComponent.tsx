import React from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
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
  Container,
  VStack,
  SimpleGrid,
  Link,
};

const RenderComponent = (component: IComponent) => {
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
                <RenderComponent key={childElement.id} {...childElement} />
              );
            })}
        </StyledComponent>
      )}
    </>
  );
};

export default RenderComponent;
