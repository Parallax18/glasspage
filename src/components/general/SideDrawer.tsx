import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ModalProps,
  DrawerFooter,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface SideDrawerProps {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
  children: ReactNode;
  footer?: ReactNode;
  title: string | ReactNode;
}

const SideDrawer = (props: SideDrawerProps) => {
  const { isOpen, onClose, title, children, footer } = props;

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement={"right"} size="md">
        <DrawerContent
          bg={"#060606"}
          borderLeft={"1px solid #131313"}
          zIndex={99999}
          w={"50rem"}
        >
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody position={"relative"}>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
