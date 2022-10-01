// Import Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create Slice
const uiSlice = createSlice({
  name: 'portal/ui',
  initialState: {
    activeTab: 'now',
  },
  reducers: {
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

// Export Actions
export const { changeActiveTab } = uiSlice.actions;

// Export Reducer
export default uiSlice.reducer;
