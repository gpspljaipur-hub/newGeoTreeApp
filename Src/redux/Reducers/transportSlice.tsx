import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Transport {
    _id: number;
    name: string;
    value: string;
}

interface TransportListState {
    transportList: Transport[];
}

const initialState: TransportListState = {
    transportList: [],
};

export const transportSlice = createSlice({
    name: 'transport',
    initialState,
    reducers: {
        setTransport: (state, action: PayloadAction<Transport[]>) => {
            state.transportList = action.payload;
        },
        clearTransport: state => {
            state.transportList = [];
        },
    },
});

export const { setTransport, clearTransport } = transportSlice.actions;
export default transportSlice.reducer;