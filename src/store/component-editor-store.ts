import { ComponentStruct, IComponent } from "@/types/schema";
import { create } from "zustand";

export interface ComponentEditorState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
  componentInFocus?: IComponent;
  setFocusedComponent: (component: IComponent) => void;
  componentChildInFocus?: ComponentStruct;
  setFocusedComponentChild: (child: ComponentStruct) => void;
}

export const useComponentEditorStore = create<ComponentEditorState>()(
  (set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true })),
    onClose: () => set(() => ({ isOpen: false })),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    setFocusedComponent: (component) => {
      console.log("store", { component });
      set(() => ({ componentInFocus: component }));
    },
    setFocusedComponentChild: (child) => {
      console.log("store", { child });
      set(() => ({ componentChildInFocus: child }));
    },
  })
);
