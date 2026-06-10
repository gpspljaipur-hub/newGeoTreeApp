
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    _id: number;
    state_name: string;
    description: string;
    state_image: string;
}

interface StateListState {
    stateList: State[]
}

const initialState: StateListState = {
    stateList: [],
};

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<State[]>) => {
            state.stateList = action.payload;
        },
        clearState: state => {
            state.stateList = [];
        },
    },
});

export const { setState, clearState } = stateSlice.actions;
export default stateSlice.reducer;