import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import carbonPlantationReducer from '../Reducers/CarbonPlantaionSlice';
import certificateReducer from '../Reducers/certificateSlice';
import categoryReducer from '../Reducers/categorySlice';
import electrictyReducer from '../Reducers/electrictySlice';
import emissionFactorsSlice from '../Reducers/emissionFactorsSlice';
import foodTypeReducer from '../Reducers/foodTypeSlice';
import homeListReducer from '../Reducers/homeListSlice';
import locationReducer from '../Reducers/locationSlice';
import ocassionReducer from '../Reducers/ocassionSlice';
import paymentReducer from '../Reducers/paymentSlice';
import selectedStateReducer from '../Reducers/selectedValueSlice';
import stateReducer from '../Reducers/Stateslice';
import tabSlice from '../Reducers/tabSlice';
import tournamentReducer from '../Reducers/tournamentSlice';
import transportReducer from '../Reducers/transportSlice';
import userReducer from '../Reducers/Userslice';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['isAuthenticated', 'user', 'token', 'hasFinishedOnboarding'],
};

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['location', 'state', 'foodType', 'electricy', 'foodType', 'emissionFactors', 'homeList', 'transport', 'userDetails', 'selectedValue', 'carbon', 'tournament', 'certificate', 'tab'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  state: stateReducer,
  location: locationReducer,
  ocassion: ocassionReducer,
  electricy: electrictyReducer,
  emissionFactors: emissionFactorsSlice,
  homeList: homeListReducer,
  transport: transportReducer,
  foodType: foodTypeReducer,
  selectedValue: selectedStateReducer,
  tab: tabSlice,
  category: categoryReducer,
  payment: paymentReducer,
  carbon: carbonPlantationReducer,
  tournament: tournamentReducer,
  certificate: certificateReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] } }),
});

export const persistor = persistStore(Store);
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
