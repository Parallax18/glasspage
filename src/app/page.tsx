"use client";

import CustomModal from "@/components/general/CustomModal";
import NewProjectForm from "@/components/new-project/NewProjectForm";
import {
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Center>
      <NewProjectForm />
    </Center>
  );
}
