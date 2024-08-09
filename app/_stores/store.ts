import create from 'zustand';

interface AppState {
  modals: string[];
  addModal: (modal: string) => void;
  removeModal: (modal: string) => void;
}

export const useStore = create<AppState>((set) => ({
  modals: [],
  addModal: (modal) => set((state) => ({ modals: [...state.modals, modal] })),
  removeModal: (modal) => set((state) => ({ modals: state.modals.filter((m) => m !== modal) })),
}));
