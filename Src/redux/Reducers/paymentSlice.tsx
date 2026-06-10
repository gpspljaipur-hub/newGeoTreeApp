import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentData {
    amount: number;
    teamName: string;
    Donat_tree: number;
    Byfor_tree: 'Team' | 'Match' | 'Tournament';
}

interface PaymentState {
    paymentData: PaymentData | null;
}

const initialState: PaymentState = {
    paymentData: null,
};

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setPaymentData: (state, action: PayloadAction<PaymentData>) => {
            state.paymentData = action.payload;
        },
        clearPaymentData: (state) => {
            state.paymentData = null;
        },
    },
});

export const { setPaymentData, clearPaymentData } = paymentSlice.actions;
export default paymentSlice.reducer;
