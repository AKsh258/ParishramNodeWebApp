// src/Redux/Features/Counter/ActiveSectionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 'sectionA', 
};

const activeSectionSlice = createSlice({
  name: 'activeSection',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload; 
    },
  },
});

export const { setActiveSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;
