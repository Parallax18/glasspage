"use client";

import EditorBar from "@/components/editor/EditorBar";
import React from "react";
import { chakra } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { EditorProvider } from "@/components/editor/EditorContext";

const InitialValues = {
  page: { bgColor: "primary.700", textColor: "primary.400" },
  hero: {
    heading: {
      bgColor: "transparent",
      textColor: "primary.400",
    },
    subText: {
      bgColor: "transparent",
      textColor: "shade.white",
    },
    dp: {
      bgColor: "primary.200",
      heading: {
        bgColor: "transparent",
        textColor: "primary.900",
      },
      subText: {
        bgColor: "transparent",
        textColor: "dark",
      },
    },
  },
  professionalLinks: {
    linkTo: {
      bgColor: "primary.900",
      heading: {
        bgColor: "transparent",
        textColor: "shade.white",
      },
      subText: {
        bgColor: "transparent",
        textColor: "primary.400",
      },
    },
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const form = useForm({ defaultValues: InitialValues });
  return (
    <FormProvider {...form}>
      <EditorProvider>
        <chakra.form>
          {/* <EditorBar /> */}
          {children}
        </chakra.form>
      </EditorProvider>
    </FormProvider>
  );
};

export default Layout;
