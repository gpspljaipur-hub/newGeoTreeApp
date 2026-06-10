import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Location {
    _id: number;
    location_name: string;
    description: string;
    image_url: string;
}

interface LocationListState {
    locationList: Location[];
}

const initialState: LocationListState = {
    locationList: [],
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<Location[]>) => {
            state.locationList = action.payload;
        },
        clearLocation: state => {
            state.locationList = [];
        },
    },
});

export const { setLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;