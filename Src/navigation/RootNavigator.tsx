import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppOpeningScreen from '../screens/AppOpening/AppOpeningScreen';

export type RootStackParamList = {
  AppOpening: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AppOpening"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AppOpening" component={AppOpeningScreen} />
    </Stack.Navigator>
  );
}
