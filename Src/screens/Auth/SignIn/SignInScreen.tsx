import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { Colors } from '../../../comman/Colors';
import String from '../../../comman/String';
import Loader_button from '../../../comman/Loader_button';
import MarginHW from '../../../comman/MarginHW';

import { useDispatch } from 'react-redux';
import { requestNotificationPermission } from '../../../comman/requestNotificationPermission';
import { getFcmToken, setStateFromCurrentLocation } from '../../../comman/LocationService';
import { Auth_Api } from '../../../redux/userapi/Requests';
import ApiUrl from '../../../Lib/ApiUrl';
import Helper from '../../../comman/Helper';
import AsyncStorageHelper from '../../../Lib/AsyncStorageHelper';
import Config from '../../../comman/Config';
import { loginSuccess } from '../../../redux/Reducers/Userslice';
import { handleNavigation } from '../../../navigation/RootNavigator';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={Images.SinginGeotree}
        style={styles.logoImage}
        resizeMode='cover'
      />
    </View>
  );
};

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState('7742817188');
  const [fcmToken, setFCMToken] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    requestNotificationPermission();
    setStateFromCurrentLocation(dispatch);
    const loadDeviceId = async () => {
      try {
        const fcmTokenValue = await getFcmToken();
        setFCMToken(fcmTokenValue);
      } catch (error) {
        console.log('FCM token load error:', error);
      }
    };
    loadDeviceId();
  }, [dispatch]);

  const handlePhoneNumberChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    if (cleaned.length <= 10) {
      setPhoneNumber(cleaned);
    }
  };

  const checkValidation = () => {
    if (phoneNumber.length === 0) {
      Helper.showToast("Please enter mobile number");
      return false;
    }
    if (phoneNumber.length < 10) {
      Helper.showToast("Please enter valid mobile number");
      return false;
    }
    return true;
  };

  const handleSendOTP = async () => {
    // handleNavigation({
    //   type: 'push',
    //   page: 'Otp',
    //   navigation,
    //   passProps: {
    //     phoneNumber: `+91 ${phoneNumber}`,
    //     otp: '123456',
    //     fcmToken: fcmToken,
    //   },
    // });
    if (!checkValidation()) return;
    try {
      setLoader(true);
      const userData = { mobile: phoneNumber, device_token: fcmToken };
      const response: any = await (dispatch as any)(Auth_Api(ApiUrl.CheckNumber, userData));
      const userinfo = response?.data?.data?.data;
      console.log('userinfo', userinfo);
      if (!userinfo) {
        Helper.showToast("Server error, please try again");
        setLoader(false);
        return;
      }
      if (!userinfo?.number_verified) {
        const apiOtp = userinfo?.otp;
        setLoader(false);
        handleNavigation({
          type: 'push',
          page: 'Otp',
          navigation,
          passProps: {
            phoneNumber: `+91 ${phoneNumber}`,
            otp: apiOtp,
            fcmToken: fcmToken,
          },
        });
      } else {
        if (!userinfo?.token) {
          setLoader(false);
          return;
        }
        setLoader(false);
        await AsyncStorageHelper.setData(Config.TOKEN, userinfo?.token);
        dispatch(loginSuccess(userinfo));
        handleNavigation({ type: 'setRoot', page: 'UserDashboard', navigation });
      }
    } catch (e) {
      console.log('Login error:', e);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ImageBackground
      source={Images.LoginBg}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.contentContainer}>
              <Logo />
              {/* <View style={styles.spacer} /> */}

              <View style={styles.cardContainer}>
                <View style={styles.glassCard}>
                  <Text style={styles.cardTitle}>{String.SignIn_Title}</Text>
                  <Text style={styles.cardSubtitle}>
                    {String.SignIn_Subtitle}
                  </Text>

                  <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.countryPicker} activeOpacity={0.7}>
                      <Text style={styles.flagEmoji}>🇮🇳</Text>
                      <Text style={styles.countryCode}>+91</Text>
                      <View style={styles.caretIcon} />
                    </TouchableOpacity>

                    <View style={styles.dividerLine} />

                    <TextInput
                      style={styles.textInput}
                      placeholder={String.SignIn_MobilePlaceholder}
                      placeholderTextColor={Colors.placeholderColor}
                      keyboardType="phone-pad"
                      value={phoneNumber}
                      onChangeText={handlePhoneNumberChange}
                      maxLength={10}
                    />
                  </View>
                  <Loader_button
                    isGradient
                    showArrow
                    textcolor="#fff"
                    title={String.SignIn_SendOTP}
                    disabled={phoneNumber.length < 10}
                    loader={loader}
                    Onclick={handleSendOTP}
                    containerStyle={{ marginHorizontal: 0, marginTop: MarginHW.MarginH24 }}
                  />
                </View>
              </View>
              <View style={styles.bottomSpacer} />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignInScreen;
