import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import SplashScreen from '../screens/Auth/Splash/SplashScreen';
import AppOpeningScreen from '../screens/Auth/AppOpening/AppOpeningScreen';
import SignInScreen from '../screens/Auth/SignIn/SignInScreen';
import OtpScreen from '../screens/Auth/Otp/Otp';
import ChooseTreeScreen from '../screens/Choose/ChooseTree/ChooseTree';
import HomeScreen from '../screens/Home/HomeScreen';
import ChooseLocationScreen from '../screens/Choose/ChooseLocation/ChooseLocation';
import UserDashboardScreen from '../screens/UserDashboard/UserDashboardScreen';
import StateScreen from '../screens/State/StateScreen/StateScreen';
import DetailsScreen from '../screens/Details/Details';
import PaymentScreen from '../screens/Payment/Payment';
import ThankYouScreen from '../screens/ThankYou/ThankYou';
import ExploreStatesScreen from '../screens/State/ExploreStates/ExploreStatesScreen';
import SettingScreen from '../screens/Setting/SettingScreen';
import Images from '../constants/images';
import { Colors } from '../comman/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store/Store';
import StatewiseScreen from '../screens/State/Statewise/StatewiseScreen';
import ChoicetreeplantationScreen from '../screens/Plantation/Choicetreeplantation/Choicetreeplantation';
import DedicatePlantationScreen from '../screens/Plantation/DedicatePlantation/DedicatePlantation';
import MyTreeJourneyScreen from '../screens/MyTreeJourney/MyTreeJourney';
import PlantationJourneyScreen from '../screens/Plantation/PlantationJourney/PlantationJourney';
import ReviewPlantationScreen from '../screens/Plantation/ReviewPlantation/ReviewPlantation';
import ProjectSelectScreen from '../screens/Choose/ProjectSelect/ProjectSelectScreen';
import ChooseSpeciesScreen from '../screens/Choose/ChooseSpecies/ChooseSpeciesScreen';
import DedicateTreeScreen from '../screens/Plantation/DedicateTree/DedicateTreeScreen';
import StatePaymentScreen from '../screens/State/StatePayment/StatePaymentScreen';
import WhichtreeShouldIPlantScreen from '../screens/Plantation/WhichtreeShouldIPlant/WhichtreeShouldIPlant';
import PlantationConfirmedScreen from '../screens/Plantation/PlantationConfirmed/PlantationConfirmed';
import PortfolioScreen from '../screens/Portfolio/Portfolio';
import CalculateCarbonScreen from '../screens/Carbon/CalculateCarbon/CalculateCarbon';
import TravelCarbonScreen from '../screens/Carbon/TravelCarbon/TravelCarbon';

import SponsorProjectScreen from '../screens/SponsorProject/SponsorProjectScreen';
import SponsorPaymentScreen from '../screens/SponsorProject/SponsorPayment/SponsorPaymentScreen';
import PaymentSucessfulScreen from '../screens/SponsorProject/PaymentSucessful/PaymentSucessfulScreen';
import SponsorSupportScreen from '../screens/SponsorProject/SponsorSupport/SponsorSupportScreen';

export type RootStackParamList = {
  Splash: undefined;
  AppOpening: undefined;
  SignIn: undefined;
  Otp: { phoneNumber: string; otp?: string | number; fcmToken?: string };
  ChooseTree: undefined;
  Choicetreeplantation: { stateName?: string; selectedProjId?: string } | undefined;
  UserDashboard: undefined;
  StateScreen: undefined;
  ChooseLocation: undefined;
  ChooseTreeScreen: undefined;
  Details: undefined;
  DedicatePlantation: { qty?: number; co2?: number; projectName?: string; stateName?: string; treeName?: string } | undefined;
  DedicatePlantationScreen: { qty?: number; co2?: number; projectName?: string; stateName?: string; treeName?: string } | undefined;
  MyTreeJourneyScreen: { qty?: number; co2?: number; projectName?: string; stateName?: string; treeName?: string } | undefined;
  PlantationJourneyScreen: undefined;
  ReviewPlantation: { qty?: number; co2?: number; projectName?: string; stateName?: string; treeName?: string } | undefined;
  Payment: { name?: string; dedication?: string } | undefined;
  Home: undefined;
  ThankYou: undefined;
  ExploreStates: undefined;
  Statewise: { stateName: string } | undefined;
  ProjectSelect: { project: any } | undefined;
  ChooseSpecies: { project: any; selectedTreeId?: string } | undefined;
  DedicateTree: { project: any; selectedSpecies: any } | undefined;
  StatePayment: {
    project: any;
    selectedSpecies: any;
    quantity: number;
    recipientName: string;
    occasion: string;
    occasionDate: string;
    email: string;
    personalMessage: string;
    sendCertificate: boolean;
  } | undefined;
  WhichtreeShouldIPlant: undefined;
  PlantationConfirmed: { qty?: number; co2?: number; projectName?: string; stateName?: string; treeName?: string } | undefined;
  Portfolio: undefined;
  Setting: undefined;
  CalculateCarbon: undefined;
  TravelCarbon: undefined;
  SponsorProject: undefined;
  SponsorSupport: { project?: any; selectedLevel?: any } | undefined;
  SponsorPayment: { project?: any; selectedLevel?: any } | undefined;
  PaymentSucessful: { project?: any; selectedLevel?: any; transactionId?: string; dateTime?: string } | undefined;
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
      initialRouteName={'SponsorProject'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="AppOpening" component={AppOpeningScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ChooseTree" component={ChooseTreeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChooseLocation" component={ChooseLocationScreen} />
      <Stack.Screen name="UserDashboard" component={UserDashboardScreen} />
      <Stack.Screen name="StateScreen" component={StateScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="DedicatePlantation" component={DedicatePlantationScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
      <Stack.Screen name="ExploreStates" component={ExploreStatesScreen} />
      <Stack.Screen name="ChooseTreeScreen" component={ChooseTreeScreen} />
      <Stack.Screen name="Choicetreeplantation" component={ChoicetreeplantationScreen} />
      <Stack.Screen name="DedicatePlantationScreen" component={DedicatePlantationScreen} />
      <Stack.Screen name="MyTreeJourneyScreen" component={MyTreeJourneyScreen} />
      <Stack.Screen name="PlantationJourneyScreen" component={PlantationJourneyScreen} />
      <Stack.Screen name="ReviewPlantation" component={ReviewPlantationScreen} />
      <Stack.Screen name="WhichtreeShouldIPlant" component={WhichtreeShouldIPlantScreen} />
      <Stack.Screen name="PlantationConfirmed" component={PlantationConfirmedScreen} />
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      <Stack.Screen name="Statewise" component={StatewiseScreen} />
      <Stack.Screen name="ProjectSelect" component={ProjectSelectScreen} />
      <Stack.Screen name="ChooseSpecies" component={ChooseSpeciesScreen} />
      <Stack.Screen name="DedicateTree" component={DedicateTreeScreen} />
      <Stack.Screen name="StatePayment" component={StatePaymentScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="CalculateCarbon" component={CalculateCarbonScreen} />
      <Stack.Screen name="TravelCarbon" component={TravelCarbonScreen} />
      <Stack.Screen name="SponsorProject" component={SponsorProjectScreen} />
      <Stack.Screen name="SponsorSupport" component={SponsorSupportScreen} />
      <Stack.Screen name="SponsorPayment" component={SponsorPaymentScreen} />
      <Stack.Screen name="PaymentSucessful" component={PaymentSucessfulScreen} />
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
