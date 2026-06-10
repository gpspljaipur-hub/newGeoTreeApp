import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CertificateState {
    certificatesList: any[];
    certificateDetails: { [key: string]: any };
}

const initialState: CertificateState = {
    certificatesList: [],
    certificateDetails: {},
};

export const certificateSlice = createSlice({
    name: 'certificate',
    initialState,
    reducers: {
        setCertificatesList: (state, action: PayloadAction<any[]>) => {
            state.certificatesList = action.payload;
        },
        setCertificateDetail: (state, action: PayloadAction<{ id: string; data: any }>) => {
            state.certificateDetails[action.payload.id] = action.payload.data;
        },
        clearCertificates: (state) => {
            state.certificatesList = [];
            state.certificateDetails = {};
        },
    },
});

export const { setCertificatesList, setCertificateDetail, clearCertificates } = certificateSlice.actions;
export default certificateSlice.reducer;
