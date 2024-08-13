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
import { useEditorStore } from "@/store/editor-store";

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
  const {
    onOpen,
    setFocusedComponent,
    setCurrentEditorDrawerView,
    componentInFocus,
  } = useEditorStore();
  const Component = componentMap[component.Component];

  if (!Component) return null;

  const StyledComponent = chakra(Component, {
    baseStyle: {
      ...component.styles,
      border:
        componentInFocus?.id === component.id ? "1px dashed silver" : "none",
      cursor: "pointer",
    },
  });

  // todo: fix type
  const handleComponentSelect = (e: any, component: IComponent) => {
    onOpen();
    console.log({ component });
    const focusedComponent =
      component.type === "image"
        ? component
        : e.target.id ===
          (component.name || component.id || component.innerText)
        ? component
        : component.children?.find((i) => i.id === component.id);
    focusedComponent ? setFocusedComponent(focusedComponent) : null;
    setCurrentEditorDrawerView("customize");
  };

  return (
    <>
      {component.type === "image" || component.type === "text-input" ? (
        <StyledComponent
          {...component.attributes}
          // todo: fix type
          onClick={(e: any) => {
            console.log(e.target);
            handleComponentSelect(e, component);
          }}
        />
      ) : (
        <StyledComponent
          id={component.name || component.id || component.innerText}
          {...component.attributes}
          // todo: fix type
          onClick={(e: any) => {
            console.log(e.target);
            handleComponentSelect(e, component);
          }}
        >
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
