import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Ocassion {
    _id: number;
    name: string;
    occasion_image: string;
    status: boolean;
    form_html_url: string;
}

interface ocassionListState {
    ocassionList: Ocassion[];
}

const initialState: ocassionListState = {
    ocassionList: [],
};

export const ocassionSlice = createSlice({
    name: 'ocassion',
    initialState,
    reducers: {
        setOcassion: (state, action: PayloadAction<Ocassion[]>) => {
            state.ocassionList = action.payload;
        },
        clearOcassion: state => {
            state.ocassionList = [];
        },
    },
});

export const { setOcassion, clearOcassion } = ocassionSlice.actions;
export default ocassionSlice.reducer;