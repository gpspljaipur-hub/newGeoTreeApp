import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FoodType {
    _id: number;
    name: string;
    value: string;
}

interface FoodTypeListState {
    foodTypeList: FoodType[];
}

const initialState: FoodTypeListState = {
    foodTypeList: [],
};

export const foodTypeSlice = createSlice({
    name: 'foodType',
    initialState,
    reducers: {
        setFoodType: (state, action: PayloadAction<[FoodType]>) => {
            state.foodTypeList = action.payload;
        },
        clearFoodType: state => {
            state.foodTypeList = [];
        },
    },
});

export const { setFoodType, clearFoodType } = foodTypeSlice.actions;
export default foodTypeSlice.reducer;