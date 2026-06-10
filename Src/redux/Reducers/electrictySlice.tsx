import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Electricy {
    _id: number;
    name: string;
    value: string;
}


interface ElectricyListState {
    electricyList: Electricy[];
}

const initialState: ElectricyListState = {
    electricyList: [],
};

export const electricySlice = createSlice({
    name: 'electricy',
    initialState,
    reducers: {
        setElectricy: (state, action: PayloadAction<Electricy[]>) => {
            state.electricyList = action.payload;
        },
        clearElectricy: state => {
            state.electricyList = [];
        },
    },
});

export const { setElectricy, clearElectricy } = electricySlice.actions;
export default electricySlice.reducer;