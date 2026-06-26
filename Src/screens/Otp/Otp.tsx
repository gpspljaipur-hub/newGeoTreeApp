import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { styles } from './styles';
import String from '../../comman/String';
import Loader_button from '../../comman/Loader_button';
import MarginHW from '../../comman/MarginHW';

import { useDispatch } from 'react-redux';
import { Auth_Api } from '../../redux/userapi/Requests';
import ApiUrl from '../../Lib/ApiUrl';
import Helper from '../../comman/Helper';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import Config from '../../comman/Config';
import { loginSuccess } from '../../redux/Reducers/Userslice';
import { handleNavigation } from '../../navigation/RootNavigator';

type OtpScreenRouteProp = RouteProp<RootStackParamList, 'Otp'>;

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={Images.logo}
                style={styles.logoImage}
                resizeMode="contain"
            />
            <Text style={styles.logoSubtitle}>{String.Otp_LogoSubtitle}</Text>
        </View>
    );
};

const OtpScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<OtpScreenRouteProp>();
    const dispatch = useDispatch();

    const rawPhoneNumber = route.params?.phoneNumber || '';
    const initialOtp = route.params?.otp ? `${route.params.otp}` : '';
    const fcmToken = route.params?.fcmToken || '';

    const formattedPhoneNumber = rawPhoneNumber.startsWith('+91')
        ? `+91 ${rawPhoneNumber.replace('+91', '').replace(/\s+/g, '').trim()}`
        : rawPhoneNumber;

    const [code, setCode] = useState(initialOtp);
    const [secondsLeft, setSecondsLeft] = useState(59);
    const [loader, setLoader] = useState(false);
    const textInputRef = useRef<TextInput>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            textInputRef.current?.focus();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Timer countdown
    useEffect(() => {
        if (secondsLeft <= 0) return;
        const interval = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [secondsLeft]);

    const handleBoxPress = () => {
        textInputRef.current?.focus();
    };

    const handleResendOTP = async () => {
        if (secondsLeft === 0) {
            try {
                setLoader(true);
                const mobileNum = rawPhoneNumber.replace('+91', '').replace(/\s+/g, '').trim();
                const userData = { mobile: mobileNum, device_token: fcmToken };
                const response: any = await (dispatch as any)(Auth_Api(ApiUrl.CheckNumber, userData));
                const userinfo = response?.data?.data?.data;
                if (!userinfo) {
                    Helper.showToast("Server error, please try again");
                    setLoader(false);
                    return;
                }
                Helper.showToast("OTP resent successfully");
                setSecondsLeft(59);
                if (userinfo?.otp) {
                    setCode(`${userinfo.otp}`);
                } else {
                    setCode('');
                }
            } catch (e) {
                console.log('Resend OTP error:', e);
            } finally {
                setLoader(false);
            }
        }
    };

    const handleVerifyOTP = async () => {
        handleNavigation({ type: 'setRoot', page: 'UserDashboard', navigation });

        if (code.length < 6) return;
        // try {
        //     setLoader(true);
        //     const mobileNum = rawPhoneNumber.replace('+91', '').replace(/\s+/g, '').trim();
        //     const verifyData = { mobile: mobileNum, otp: code, device_token: fcmToken };
        //     const response: any = await (dispatch as any)(Auth_Api(ApiUrl.VERIFY_OTP, verifyData));
        //     const userinfo = response?.data?.data?.data;
        //     if (!userinfo) {
        //         Helper.showToast("Verification failed, please try again");
        //         setLoader(false);
        //         return;
        //     }
        //     if (!userinfo?.token) {
        //         Helper.showToast("Verification failed, invalid token");
        //         setLoader(false);
        //         return;
        //     }
        //     setLoader(false);
        //     await AsyncStorageHelper.setData(Config.TOKEN, userinfo?.token);
        //     dispatch(loginSuccess(userinfo));
        //     handleNavigation({ type: 'setRoot', page: 'UserDashboard', navigation });
        // } catch (e) {
        //     console.log('Error verifying OTP:', e);
        // } finally {
        //     setLoader(false);
        // }
    };

    const handleTermsPress = () => {
        console.log('Navigate to Terms & Conditions');
    };

    const handlePrivacyPress = () => {
        console.log('Navigate to Privacy Policy');
    };

    const renderOtpBoxes = () => {
        const boxes = [];
        for (let i = 0; i < 6; i++) {
            const isFocused = i === code.length;
            const val = code[i];
            boxes.push(
                <Pressable
                    key={i}
                    style={[styles.otpBox, isFocused && styles.otpBoxActive]}
                    onPress={handleBoxPress}
                >
                    {val ? (
                        <Text style={styles.otpText}>{val}</Text>
                    ) : isFocused ? (
                        <Text style={styles.otpCursor}>|</Text>
                    ) : (
                        <Text style={styles.otpDot}>•</Text>
                    )}
                </Pressable>
            );
        }
        return boxes;
    };

    return (
        <ImageBackground
            source={Images.OtpScreenGeotree}
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
                            {/* <View style={styles.spacer} /> */}
                            <View style={styles.cardContainer}>
                                <View style={styles.glassCard}>
                                    <Text style={styles.cardTitle}>{String.Otp_VerifyTitle}</Text>
                                    <Text style={styles.cardSubtitle}>
                                        {String.Otp_EnterCodeSent}{'\n'}
                                        <Text style={styles.phoneNumberText}>{formattedPhoneNumber}</Text>
                                    </Text>
                                    <View style={styles.otpContainer}>
                                        {renderOtpBoxes()}
                                    </View>
                                    <TextInput
                                        ref={textInputRef}
                                        style={styles.hiddenTextInput}
                                        keyboardType="number-pad"
                                        maxLength={6}
                                        value={code}
                                        onChangeText={setCode}
                                        autoFocus={true}
                                    />
                                    <View style={styles.infoRow}>
                                        <View style={styles.infoIconWrapper}>
                                            <Image
                                                source={Images.verified}
                                                style={styles.infoIconImage}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <Text style={styles.infoText}>{String.Otp_SecureVerification}</Text>
                                    </View>

                                    {/* Info Row 2: Clock Timer */}
                                    <View style={styles.infoRow}>
                                        <View style={styles.infoIconWrapper}>
                                            {/* CSS-drawn Clock Icon */}
                                            <View style={styles.clockOutline}>
                                                <View style={styles.clockHour} />
                                                <View style={styles.clockMinute} />
                                            </View>
                                        </View>
                                        <Text style={styles.infoText}>
                                            {String.Otp_ExpiresIn}{' '}
                                            <Text style={styles.highlightText}>
                                                00:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
                                            </Text>
                                        </Text>
                                    </View>

                                    {/* <View style={styles.dividerLine} /> */}

                                    {/* Info Row 3: Resend OTP */}
                                    <View style={styles.infoRow}>
                                        <View style={styles.infoIconWrapper}>
                                            {/* Unicode circular reload arrow */}
                                            <Text style={styles.refreshIconText}>⟳</Text>
                                        </View>
                                        <Text style={styles.infoText}>
                                            {String.Otp_DidNotReceive}
                                            <Text
                                                style={[
                                                    styles.pressableText,
                                                    secondsLeft > 0 && styles.resendDisabled,
                                                ]}
                                                onPress={handleResendOTP}
                                            >
                                                {String.Otp_Resend}
                                            </Text>
                                        </Text>
                                    </View>

                                    <Loader_button
                                        isGradient
                                        showArrow
                                        textcolor="#fff"
                                        title={String.Otp_VerifyTitle}
                                        disabled={code.length < 6}
                                        loader={loader}
                                        Onclick={handleVerifyOTP}
                                        containerStyle={{ marginHorizontal: 0, marginTop: MarginHW.MarginH24 }}
                                    />
                                </View>
                            </View>

                            {/* Bottom footer text */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.footerText}>
                                    <Text style={styles.footerLockIcon}>🔒</Text> {String.Otp_AgreeTo}
                                    <Text style={styles.footerLink} onPress={handleTermsPress}>
                                        {String.Otp_TermsAndConditions}
                                    </Text>{' '}
                                    and{' '}
                                    <Text style={styles.footerLink} onPress={handlePrivacyPress}>
                                        {String.Otp_PrivacyPolicy}
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default OtpScreen;
