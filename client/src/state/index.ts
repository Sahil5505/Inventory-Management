import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state interface
export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

// Define the initial state
const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

// Create the slice
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        // Reducer for setting sidebar collapse state
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        // Reducer for setting dark mode state
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    },
});

// Export actions for use in components
export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

// Export the reducer to be used in the store
export default globalSlice.reducer;

