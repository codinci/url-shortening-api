import { create } from "zustand";
import { LinkObject } from "./components/LinkForm";

interface NavState {
  isOpen: boolean;
  displayLink: boolean;
  linkObjects: LinkObject[];
  toggleIsOpen: () => void;
  setDisplayLink: () => void;
  resetDisplayLink: () => void;
  setLinkObj: (newLinks: LinkObject[]) => LinkObject[];
}

const getStoredLinks = () => {
  const storedLinkObjectsString = localStorage.getItem("shortenedUrls");
  const storedLinkObjects = storedLinkObjectsString ? JSON.parse(storedLinkObjectsString) : [];
  return storedLinkObjects;
}

export const useNavStore = create<NavState>((set) => {
  return {
    isOpen: false,
    displayLink: false,
    linkObjects: getStoredLinks(),
    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    setDisplayLink: () => set(() => ({ displayLink: true })),
    resetDisplayLink: () => set(() => ({ displayLink: false })),
    setLinkObj: (newLinks) => {
      set((state) => {
        const updatedLinkObjects = [...state.linkObjects, ...newLinks];
        localStorage.setItem("shortenedUrls", JSON.stringify(updatedLinkObjects));

        // Update the linkObjects in the store
        return { linkObjects: updatedLinkObjects };
      });


      return newLinks;
    },
  };
});


