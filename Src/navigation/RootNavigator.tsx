import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import AppOpeningScreen from '../screens/AppOpening/AppOpeningScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
import OtpScreen from '../screens/Otp/Otp';
import ChooseTreeScreen from '../screens/ChooseTree/ChooseTree';
import HomeScreen from '../screens/Home/HomeScreen';
import ChooseLocationScreen from '../screens/ChooseLocation/ChooseLocation';
import UserDashboardScreen from '../screens/UserDashboard/UserDashboardScreen';
import StateScreen from '../screens/StateScreen/StateScreen';
import DetailsScreen from '../screens/Details/Details';
import PaymentScreen from '../screens/Payment/Payment';
import ThankYouScreen from '../screens/ThankYou/ThankYou';
import ExploreStatesScreen from '../screens/ExploreStates/ExploreStatesScreen';
import SettingScreen from '../screens/Setting/SettingScreen';

import Images from '../constants/images';
import { Colors } from '../comman/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store/Store';

export type RootStackParamList = {
  AppOpening: undefined;
  SignIn: undefined;
  Otp: { phoneNumber: string; otp?: string | number; fcmToken?: string };
  ChooseTree: undefined;
  UserDashboard: undefined;
  StateScreen: undefined;
  ChooseLocation: undefined;
  Details: undefined;
  Payment: undefined;
  Home: undefined;
  ThankYou: undefined;
  ExploreStates: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.legacyGreen,
        tabBarInactiveTintColor: '#8E9A93',
        tabBarStyle: {
          height: 64,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#ECEFEF',
          paddingBottom: 8,
          paddingTop: 8,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'OpenSans-Medium',
        },
        tabBarIcon: ({ focused, color }) => {
          let iconSource;
          if (route.name === 'HomeTab') {
            iconSource = Images.home;
          } else if (route.name === 'PlantTab') {
            iconSource = Images.plant;
          } else if (route.name === 'ImpactTab') {
            iconSource = Images.impact;
          } else if (route.name === 'SettingTab') {
            iconSource = Images.profile;
          }
          return (
            <Image
              source={iconSource}
              style={{
                width: 22,
                height: 22,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="PlantTab"
        component={ChooseTreeScreen}
        options={{ tabBarLabel: 'Plant' }}
      />
      <Tab.Screen
        name="ImpactTab"
        component={UserDashboardScreen}
        options={{ tabBarLabel: 'Impact' }}
      />
      <Tab.Screen
        name="SettingTab"
        component={SettingScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? "Home" : "AppOpening"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AppOpening" component={AppOpeningScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ChooseTree" component={ChooseTreeScreen} />
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="ChooseLocation" component={ChooseLocationScreen} />
      <Stack.Screen name="UserDashboard" component={UserDashboardScreen} />
      <Stack.Screen name="StateScreen" component={StateScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
      <Stack.Screen name="ExploreStates" component={ExploreStatesScreen} />
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
