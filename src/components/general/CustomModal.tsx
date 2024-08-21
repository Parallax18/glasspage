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
  ThemingProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomModalProps {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
  children: ReactNode;
  footer?: ReactNode;
  title: string | ReactNode;
  size?: ThemingProps<"Modal">["size"];
}

const CustomModal = (props: CustomModalProps) => {
  const { isOpen, onClose, title, children, footer, size } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={size ?? "md"}>
        <ModalOverlay />
        <ModalContent
          bg={"bgColor"}
          borderLeft={"1px solid "}
          borderColor={"borderColor"}
          // zIndex={99999}
        >
          <ModalHeader>{title}</ModalHeader>

          <ModalBody h={"full"}>{children}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
