import { create } from "zustand";

interface NavState {
	isOpen: boolean,
	toggleIsOpen: () => void,
}

export const useNavStore = create<NavState>()((set) => ({
	isOpen: false,
	toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))