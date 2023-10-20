import { create } from "zustand";

interface NavState {
	isOpen: boolean,
	displayLink: boolean,
	toggleIsOpen: () => void,
	setDisplayLink: () => void,
	resetDisplayLink: () => void,
}

export const useNavStore = create<NavState>()((set) => ({
	isOpen: false,
	displayLink: false,
	toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
	setDisplayLink: () => set(() => ({ displayLink: true })),
	resetDisplayLink: () => set(() => ({ displayLink:false })),
}))