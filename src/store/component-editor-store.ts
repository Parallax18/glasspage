import { ComponentStruct } from "@/types/schema";
import { create } from "zustand";

export interface ComponentEditorState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
  componentInFocus?: ComponentStruct;
  setFocusedComponent: (component: ComponentStruct) => void;
  updateFocusedComponent: (itemToUpdate: Partial<ComponentStruct>) => void;
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
    updateFocusedComponent: (itemToUpdate) =>
      //  @ts-ignore - - todo: fix this partial type bug
      set((state) => ({
        componentInFocus: { ...state.componentInFocus, ...itemToUpdate },
      })),
  })
);
