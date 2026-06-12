import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppOpeningScreen from '../screens/AppOpening/AppOpeningScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
import OtpScreen from '../screens/Otp/Otp';
import ChooseTreeScreen from '../screens/ChooseTree/ChooseTree';
import HomeScreen from '../screens/Home/HomeScreen';
import ChooseLocationScreen from '../screens/ChooseLocation/ChooseLocation';
import UserDashboardScreen from '../screens/UserDashboard/UserDashboardScreen';
import DetailsScreen from '../screens/Details/Details';
import PaymentScreen from '../screens/Payment/Payment';
import ThankYouScreen from '../screens/ThankYou/ThankYou';

export type RootStackParamList = {
  AppOpening: undefined;
  SignIn: undefined;
  Otp: { phoneNumber: string };
  ChooseTree: undefined;
  UserDashboard: undefined;
  ChooseLocation: undefined;
  Details: undefined;
  Payment: undefined;
  Home: undefined;
  ThankYou: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ChooseTree"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AppOpening" component={AppOpeningScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ChooseTree" component={ChooseTreeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChooseLocation" component={ChooseLocationScreen} />
      <Stack.Screen name="UserDashboard" component={UserDashboardScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
    </Stack.Navigator>
  );
}

export function handleNavigation(nav: any) {
  switch (nav.type) {
    case 'push':
      nav.navigation.navigate(nav.page, nav.passProps)
      break
    case 'setRoot':
      nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] })
      break
    case 'pop':
      nav.navigation.goBack()
      break
    case 'popToTop':
      nav.navigation.popToTop()
      break
    case 'navigate':
      nav.navigation.push(nav.page, nav.passProps)
      break
  }
}
