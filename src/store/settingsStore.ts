import { create } from 'zustand';

export interface SettingsDataType {
  isFullScreen: boolean;
  isSideMenuOpen: boolean;
}

interface SettingsState extends SettingsDataType {
  toggleFullScreen: () => void;
  toggleSideMenu: () => void;
  setSideMenuOpen: (isOpen: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  isFullScreen: false,
  isSideMenuOpen: true,
  toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen })),
  toggleSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
  setSideMenuOpen: (isOpen) => set({ isSideMenuOpen: isOpen }),
}));
