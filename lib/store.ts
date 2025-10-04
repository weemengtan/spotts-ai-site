import { create } from 'zustand';
import { UIState } from './types';

export const useUIStore = create<UIState>((set) => ({
  scrollY: 0,
  activeStep: 0,
  showSource: null,
  showContactModal: false,
  setScrollY: (scrollY) => set({ scrollY }),
  setActiveStep: (activeStep) => set({ activeStep }),
  setShowSource: (showSource) => set({ showSource }),
  setShowContactModal: (showContactModal) => set({ showContactModal }),
}));