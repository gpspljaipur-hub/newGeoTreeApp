import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
    _id: string;
    title: string;
    desc: string;
    image: string;
    screen: string;
    category_name?: string;
    category_description?: string;
    category_image?: string;
    navigation_screen?: string;
}

interface CategoryListState {
    categoryList: Category[]
}

const initialState: CategoryListState = {
    categoryList: [],
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<Category[]>) => {
            state.categoryList = action.payload;
        },
        clearCategory: state => {
            state.categoryList = [];
        },
    },
});

export const { setCategory, clearCategory } = categorySlice.actions;
export default categorySlice.reducer;
