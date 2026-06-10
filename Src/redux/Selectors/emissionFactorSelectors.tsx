
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../Store/Store';

const selectEmissionFactorsList = (state: RootState) =>
    state.emissionFactors.emissionFactorsList;

export const selectTransportFactors = createSelector(
    [selectEmissionFactorsList],
    (list) => list.filter(item => item.category === 'transport')
);

export const selectEnergyFactors = createSelector(
    [selectEmissionFactorsList],
    (list) => list.filter(item => item.category === 'energy')
);

export const selectFoodFactors = createSelector(
    [selectEmissionFactorsList],
    (list) => list.filter(item => item.category === 'food')
);

export const selectWasteFactors = createSelector(
    [selectEmissionFactorsList],
    (list) => list.filter(item => item.category === 'waste')
);
