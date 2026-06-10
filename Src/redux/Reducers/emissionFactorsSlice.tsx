import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface EmissionFactors {
    _id: number;
    name: string;
    value: string;
    category: 'transport' | 'energy' | 'food' | 'waste';
    sub_category: string;
    factor: number;
    unit: string;
    region: string;
    image: string;
}


interface ElectricyListState {
    emissionFactorsList: EmissionFactors[];
    emissionValuesList: string[];
}

const initialState: ElectricyListState = {
    emissionFactorsList: [],
    emissionValuesList: [],
};

export const emissionFactorsSlice = createSlice({
    name: 'emissionFactors',
    initialState,
    reducers: {
        setEmissionFactors: (state, action: PayloadAction<EmissionFactors[]>) => {
            state.emissionFactorsList = action.payload;
        },
        setEmissionValues: (state, action: PayloadAction<string[]>) => {
            state.emissionValuesList = action.payload;
        },
        clearEmissionFactors: state => {
            state.emissionFactorsList = [];
            state.emissionValuesList = [];
        },
    },
});

export const { setEmissionFactors, setEmissionValues, clearEmissionFactors } = emissionFactorsSlice.actions;
export default emissionFactorsSlice.reducer;