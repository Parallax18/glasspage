import { EditorDrawerViews } from "@/components/editor/sidebar";
import { ITemplate, ITemplateWithIndex } from "@/types/schema";
import { create } from "zustand";

export interface EditorState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
  componentInFocus?: ITemplateWithIndex;
  setFocusedComponent: (component: ITemplate) => void;
  currentEditorDrawerView: EditorDrawerViews;
  setCurrentEditorDrawerView: (view: EditorDrawerViews) => void;
  updateFocusedComponent: (itemToUpdate: Partial<ITemplateWithIndex>) => void;
}

export const useEditorStore = create<EditorState>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setFocusedComponent: (component) => {
    console.log("store", { component });
    set(() => ({ componentInFocus: component }));
  },
  currentEditorDrawerView: "templates",
  setCurrentEditorDrawerView: (view) =>
    set(() => ({ currentEditorDrawerView: view })),
  updateFocusedComponent: (itemToUpdate) =>
    //  @ts-ignore - - todo: fix this partial type bug
    set((state) => ({
      componentInFocus: { ...state.componentInFocus, ...itemToUpdate },
    })),
}));
