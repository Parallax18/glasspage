import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ModalProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface SideDrawerProps {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
  children: ReactNode;
  title: string | ReactNode;
}

const SideDrawer = (props: SideDrawerProps) => {
  const { isOpen, onClose, title, children } = props;

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            <>{children}</>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
