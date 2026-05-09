import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  activeSection: string;
  isMobileMenuOpen: boolean;
}

const initialState: UIState = {
  activeSection: 'hero',
  isMobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

export const { setActiveSection, toggleMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;