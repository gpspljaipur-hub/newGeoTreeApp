import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface HomeList {
    _id: number;
    name: string;
    value: string;
}

interface HomeListState {
    homeList: HomeList[];
}

const initialState: HomeListState = {
    homeList: [],
};

export const homeListSlice = createSlice({
    name: 'homeList',
    initialState,
    reducers: {
        setHomeList: (state, action: PayloadAction<HomeList[]>) => {
            state.homeList = action.payload;
        },
        clearHomeList: state => {
            state.homeList = [];
        },
    },
});

export const { setHomeList, clearHomeList } = homeListSlice.actions;
export default homeListSlice.reducer;