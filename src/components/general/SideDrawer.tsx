import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ModalProps,
  DrawerFooter,
  ThemingProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface SideDrawerProps {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
  children: ReactNode;
  footer?: ReactNode;
  title: string | ReactNode;
  size?: ThemingProps<"Drawer">["size"];
}

const SideDrawer = (props: SideDrawerProps) => {
  const { isOpen, onClose, title, children, footer, size } = props;

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={"left"}
        size={size ?? "md"}
      >
        <DrawerContent
          bg={"bgColor"}
          borderLeft={"1px solid "}
          borderColor={"borderColor"}
          w={"50rem"}
          zIndex={99999}
        >
          <DrawerCloseButton color={"lightgrey"} />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody position={"relative"}>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
