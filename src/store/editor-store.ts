import { EditorDrawerViews } from "@/components/editor/drawer";
import { IComponent } from "@/types/schema";
import { create } from "zustand";

export interface EditorState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
  componentInFocus?: IComponent;
  setFocusedComponent: (component: IComponent) => void;
  currentEditorDrawerView: EditorDrawerViews;
  setCurrentEditorDrawerView: (view: EditorDrawerViews) => void;
}

export const useEditorStore = create<EditorState>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setFocusedComponent: (component) =>
    set(() => ({ componentInFocus: component })),
  currentEditorDrawerView: "templates",
  setCurrentEditorDrawerView: (view) =>
    set(() => ({ currentEditorDrawerView: view })),
}));
