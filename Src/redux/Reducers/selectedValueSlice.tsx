import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedValueName { backupCarbonData?: any; selectedBikeRange: number | null; selectedBusRange: number | null; selectedCarDieselRange: number | null; selectedCarFuelType: string | null; selectedCarPetrolRange: number | null; selectedElectricityRange: number | null; selectedHomeType: string | null; selectedLongFlightRange: number | null; selectedLpgRange: number | null; selectedNonVegRange: number | null; selectedStateDescription: string | null; selectedStateId: string | null; selectedStateName: string | null; selectedTrainRange: number | null; selectedVeganRange: number | null; selectedVegRange: number | null; selectedWasteRange: number | null; setElectrictyType: string | null; setFoodNameType: string | null; setTransportType: string | null; stateImage: string | null; }

const initialState: SelectedValueName = { selectedStateName: null, stateImage: null, selectedStateId: null, selectedStateDescription: null, selectedHomeType: null, setElectrictyType: null, setFoodNameType: null, setTransportType: null, selectedElectricityRange: 0, selectedLongFlightRange: 0, selectedBikeRange: 0, selectedCarDieselRange: 0, selectedCarPetrolRange: 0, selectedCarFuelType: 'Petrol', selectedVegRange: 0, selectedLpgRange: 0, selectedNonVegRange: 0, selectedBusRange: 0, selectedTrainRange: 0, selectedVeganRange: 0, selectedWasteRange: 0, backupCarbonData: null };

const selectedValueSlice = createSlice({
    name: 'selectedValue',
    initialState,
    reducers: {
        setSelectedStateName: (state, action: PayloadAction<string>) => {
            state.selectedStateName = action.payload;
        },
        setSelectedStateValue: (state, action: PayloadAction<{ name: string; description: string; satate_id: string; state_image: string }>) => {
            state.selectedStateName = action.payload.name;
            state.selectedStateDescription = action.payload.description;
            state.selectedStateId = action.payload.satate_id;
            state.stateImage = action.payload.state_image;
        },
        setSelectedHomeType: (state, action: PayloadAction<string>) => {
            state.selectedHomeType = action.payload;
        },
        setElectrictyType: (state, action: PayloadAction<string>) => {
            state.setElectrictyType = action.payload;
        },
        setSelectedElectricityRange: (state, action: PayloadAction<number>) => {
            state.selectedElectricityRange = action.payload;
            state.selectedHomeType = 'electricty';
        },

        setSelectedLongFlightRange: (state, action: PayloadAction<number>) => {
            state.selectedLongFlightRange = action.payload;
            state.setTransportType = 'air_travel';
        },
        setSelectedBikeRange: (state, action: PayloadAction<number>) => {
            state.selectedBikeRange = action.payload;
            state.setTransportType = 'bike';
        },
        setSelectedCarDieselRange: (state, action: PayloadAction<number>) => {
            state.selectedCarDieselRange = action.payload;
            state.setTransportType = 'car';
        },
        setSelectedCarPetrolRange: (state, action: PayloadAction<number>) => {
            state.selectedCarPetrolRange = action.payload;
            state.setTransportType = 'car';
        },

        setSelectedCarFuelType: (state, action: PayloadAction<string>) => {
            state.selectedCarFuelType = action.payload;
        },

        setSelectedLpgRange: (state, action: PayloadAction<number>) => {
            state.selectedLpgRange = action.payload;
            state.selectedHomeType = 'lpg_cng';
        },
        setSelectedVegRange: (state, action: PayloadAction<number>) => {
            state.selectedVegRange = action.payload;
            state.setFoodNameType = 'vegetarian';
        },
        setSelectedNonVegRange: (state, action: PayloadAction<number>) => {
            state.selectedNonVegRange = action.payload;
            state.setFoodNameType = 'non_vegetarian';
        },
        setSelectedBusRange: (state, action: PayloadAction<number>) => {
            state.selectedBusRange = action.payload;
            state.setTransportType = 'public_transport';
        },
        setSelectedTrainRange: (state, action: PayloadAction<number>) => {
            state.selectedTrainRange = action.payload;
            state.setTransportType = 'public_transport';
        },
        setSelectedVeganRange: (state, action: PayloadAction<number>) => {
            state.selectedVeganRange = action.payload;
            state.setFoodNameType = 'vegan';
        },
        setSelectedWasteRange: (state, action: PayloadAction<number>) => {
            state.selectedWasteRange = action.payload;
            state.selectedHomeType = 'waste';
        },

        setFoodNameType: (state, action: PayloadAction<string>) => {
            state.setFoodNameType = action.payload;
        },
        setTransportType: (state, action: PayloadAction<string>) => {
            state.setTransportType = action.payload;
        },
        restoreCarbonBackup: (state) => {
            if (!state.backupCarbonData) return;
            state.selectedHomeType = state.backupCarbonData.selectedHomeType;
            state.setElectrictyType = state.backupCarbonData.setElectrictyType;
            state.selectedElectricityRange = state.backupCarbonData.selectedElectricityRange;
            state.selectedLongFlightRange = state.backupCarbonData.selectedLongFlightRange;
            state.selectedBikeRange = state.backupCarbonData.selectedBikeRange;
            state.selectedCarDieselRange = state.backupCarbonData.selectedCarDieselRange;
            state.selectedCarPetrolRange = state.backupCarbonData.selectedCarPetrolRange;
            state.selectedCarFuelType = state.backupCarbonData.selectedCarFuelType;
            state.selectedVegRange = state.backupCarbonData.selectedVegRange;
            state.selectedLpgRange = state.backupCarbonData.selectedLpgRange;
            state.selectedNonVegRange = state.backupCarbonData.selectedNonVegRange;
            state.selectedBusRange = state.backupCarbonData.selectedBusRange;
            state.selectedTrainRange = state.backupCarbonData.selectedTrainRange;
            state.selectedVeganRange = state.backupCarbonData.selectedVeganRange;
            state.selectedWasteRange = state.backupCarbonData.selectedWasteRange;
        },
        saveCarbonBackup: (state) => {
            state.backupCarbonData = {
                selectedHomeType: state.selectedHomeType,
                setElectrictyType: state.setElectrictyType,
                setFoodNameType: state.setFoodNameType,
                setTransportType: state.setTransportType,
                selectedElectricityRange: state.selectedElectricityRange,
                selectedLongFlightRange: state.selectedLongFlightRange,
                selectedBikeRange: state.selectedBikeRange,
                selectedCarDieselRange: state.selectedCarDieselRange,
                selectedCarPetrolRange: state.selectedCarPetrolRange,
                selectedCarFuelType: state.selectedCarFuelType,
                selectedVegRange: state.selectedVegRange,
                selectedVeganRange: state.selectedVeganRange,
                selectedNonVegRange: state.selectedNonVegRange,
                selectedLpgRange: state.selectedLpgRange,
                selectedBusRange: state.selectedBusRange,
                selectedTrainRange: state.selectedTrainRange,
                selectedWasteRange: state.selectedWasteRange
            };
        },
        clearSelectedCarbonValue: (state) => {
            state.selectedHomeType = null;
            state.setElectrictyType = null;
            state.setFoodNameType = null;
            state.setTransportType = null;
            state.selectedElectricityRange = 0;
            state.selectedLongFlightRange = 0;
            state.selectedBikeRange = 0;
            state.selectedCarDieselRange = 0;
            state.selectedCarPetrolRange = 0;
            state.selectedCarFuelType = 'Petrol';
            state.selectedVegRange = 0;
            state.selectedVeganRange = 0;
            state.selectedNonVegRange = 0;
            state.selectedLpgRange = 0;
            state.selectedBusRange = 0;
            state.selectedTrainRange = 0;
            state.selectedWasteRange = 0;
        },
        clearbackupCarbonValue: state => {
            state.backupCarbonData = null;
        },

        clearSelectedStateValue: state => {
            state.selectedStateName = null;
            state.selectedStateId = null;
            state.selectedStateDescription = null;
        },
    },
});

export const { setSelectedStateName, setSelectedStateValue, setSelectedHomeType, setElectrictyType, setSelectedElectricityRange, setSelectedLongFlightRange, setSelectedBikeRange, setSelectedCarDieselRange, setSelectedCarPetrolRange, setSelectedCarFuelType, setSelectedVegRange, setSelectedLpgRange, setSelectedNonVegRange, setSelectedBusRange, setSelectedTrainRange, setSelectedVeganRange, setSelectedWasteRange, setFoodNameType, setTransportType, clearSelectedStateValue, clearSelectedCarbonValue, saveCarbonBackup, restoreCarbonBackup, clearbackupCarbonValue } = selectedValueSlice.actions;

export default selectedValueSlice.reducer;
