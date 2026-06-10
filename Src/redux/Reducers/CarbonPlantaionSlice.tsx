import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type CarbonBreakdown = { transport: number; energy: number; food: number; waste: number };

export type SpeciesRecommendation = { id: string; name: string; sequestration_kg_per_year: number; type: string; note: string; count: number; rationale: string };

export type CarbonResult = { _id: string; user_id: string; total: number; total_tonnes: number; carbon_result: number; breakdown: CarbonBreakdown; breakdown_percent: CarbonBreakdown; species_recommendations: SpeciesRecommendation[]; createdAt: string; updatedAt: string };

type CarbonState = { data: CarbonResult };
const EMPTY_CARBON_RESULT: CarbonResult = {
    _id: '',
    user_id: '',
    total: 0,
    total_tonnes: 0,
    carbon_result: 0,
    breakdown: { transport: 0, energy: 0, food: 0, waste: 0 },
    breakdown_percent: { transport: 0, energy: 0, food: 0, waste: 0 },
    species_recommendations: [],
    createdAt: '',
    updatedAt: '',
};

const initialState: CarbonState = { data: EMPTY_CARBON_RESULT };

const carbonSlice = createSlice({
    name: 'carbon',
    initialState,
    reducers: {
        setCarbonResult(state, action: PayloadAction<CarbonResult>) {
            state.data = {
                ...EMPTY_CARBON_RESULT,
                ...action.payload,
                breakdown: { ...EMPTY_CARBON_RESULT.breakdown, ...action.payload.breakdown },
                breakdown_percent: { ...EMPTY_CARBON_RESULT.breakdown_percent, ...action.payload.breakdown_percent },
                species_recommendations: action.payload.species_recommendations ?? [],
            };
        },

        resetCarbon(state) {
            state.data = EMPTY_CARBON_RESULT;
        },
    },
});

export const { setCarbonResult, resetCarbon } = carbonSlice.actions;
export default carbonSlice.reducer;
