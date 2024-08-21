import React from "react";
import { ComponentStruct, IComponent, StyleEntity } from "@/types/schema";
import { FieldArrayWithId } from "react-hook-form";
import { EditorForm } from "@/app/editor/page";

interface RenderComponentProps {
  data?: IComponent["structure"];
  addedStyles:
    | FieldArrayWithId<EditorForm, "componentStyles", "_id">
    | undefined;
}

const renderComponent = (
  component: ComponentStruct | undefined,
  json?: IComponent["structure"],
  addedStyles?: StyleEntity
): JSX.Element | null => {
  if (!component) return null;

  const Tag = component.tag as keyof JSX.IntrinsicElements;

  // const tailwindClasses = convertStyleToTailwind(style);

  // Validate the tag to ensure it's a valid HTML element or component
  if (!Tag || typeof Tag !== "string") {
    console.error(`Invalid tag: ${Tag} for component with id ${component.id}`);
    return null;
  }

  // Retrieve the children components based on their IDs
  const childrenComponents = component.childrenIds?.map((id) =>
    json?.find((item) => item.id === id)
  );

  const children = childrenComponents?.map((child) =>
    renderComponent(child, json)
  );

  return (
    <Tag key={component.id} style={addedStyles?.styles.light}>
      {component.innerText}
      {children}
    </Tag>
  );
};

const RenderComponent: React.FC<RenderComponentProps> = ({
  data,
  addedStyles,
}) => {
  // Identify and render only the root components (those with no parentId)
  const rootComponents = data?.filter((item) => !item.parentId);

  if (rootComponents?.length === 0) {
    console.warn("No root components found for rendering");
    return <div>No components to render</div>;
  }

  return (
    <>
      {rootComponents?.map((component) =>
        renderComponent(component, data, addedStyles)
      )}
    </>
  );
};

export default RenderComponent;
