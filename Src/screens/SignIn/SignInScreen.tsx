import React, { useState } from 'react';
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
import Images from '../../constants/images';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { Colors } from '../../comman/Colors';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={Images.logo}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
  );
};

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    if (cleaned.length <= 10) {
      setPhoneNumber(cleaned);
    }
  };

  const handleSendOTP = () => {
    console.log('Sending OTP to:', phoneNumber);
    navigation.navigate('Otp', { phoneNumber: `+91 ${phoneNumber}` });
  };

  return (
    <ImageBackground
      source={Images.background}
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
              <View style={styles.spacer} />

              {/* Sign In Glass Card */}
              <View style={styles.cardContainer}>
                <View style={styles.glassCard}>
                  <Text style={styles.cardTitle}>Sign In</Text>
                  <Text style={styles.cardSubtitle}>
                    Enter your mobile number to continue.
                  </Text>

                  {/* Mobile Number Input Wrapper */}
                  <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.countryPicker} activeOpacity={0.7}>
                      <Text style={styles.flagEmoji}>🇮🇳</Text>
                      <Text style={styles.countryCode}>+91</Text>
                      <View style={styles.caretIcon} />
                    </TouchableOpacity>

                    <View style={styles.dividerLine} />

                    <TextInput
                      style={styles.textInput}
                      placeholder="Enter mobile number"
                      placeholderTextColor={Colors.placeholderColor}
                      keyboardType="phone-pad"
                      value={phoneNumber}
                      onChangeText={handlePhoneNumberChange}
                      maxLength={10}
                    />
                  </View>

                  {/* Send OTP Button */}
                  <Pressable
                    style={({ pressed }) => [
                      styles.button,
                      phoneNumber.length < 10 && styles.buttonDisabled,
                      pressed && phoneNumber.length === 10 && styles.buttonPressed
                    ]}
                    onPress={handleSendOTP}
                    disabled={phoneNumber.length < 10}
                  >
                    <Text style={styles.buttonText}>Send OTP</Text>
                    <View style={styles.arrowContainer}>
                      <View style={styles.arrowLine} />
                      <View style={styles.arrowHead} />
                    </View>
                  </Pressable>
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
