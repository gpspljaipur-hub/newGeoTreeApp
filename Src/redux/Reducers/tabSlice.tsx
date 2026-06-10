import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabState {
    currentTab: string;
}

const initialState: TabState = {
    currentTab: 'HomeScreen',
};

const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        setCurrentTab: (state, action: PayloadAction<string>) => {
            state.currentTab = action.payload;
        },
    },
});

export const { setCurrentTab } = tabSlice.actions;
export default tabSlice.reducer;