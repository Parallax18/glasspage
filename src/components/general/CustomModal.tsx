"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomModalProps {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
  children: ReactNode;
  title: string | ReactNode;
}

const CustomModal = (props: CustomModalProps) => {
  const { isOpen, onClose, title, children } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent bg={"black"}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
