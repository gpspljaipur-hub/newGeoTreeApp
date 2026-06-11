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
import { RootStackParamList } from '../../../navigation/RootNavigator';
import Images from '../../../constants/images';
import { styles } from './styles';

type OtpScreenRouteProp = RouteProp<RootStackParamList, 'Otp'>;

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={Images.logo}
                style={styles.logoImage}
                resizeMode="contain"
            />
            <Text style={styles.logoSubtitle}>Plant. Track. Impact.</Text>
        </View>
    );
};

const OtpScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<OtpScreenRouteProp>();
    const rawPhoneNumber = route.params?.phoneNumber || '';
    const formattedPhoneNumber = rawPhoneNumber.startsWith('+91')
        ? `+91 ${rawPhoneNumber.replace('+91', '').replace(/\s+/g, '').trim()}`
        : rawPhoneNumber;

    const [code, setCode] = useState('');
    const [secondsLeft, setSecondsLeft] = useState(59);
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

    const handleResendOTP = () => {
        if (secondsLeft === 0) {
            console.log('Resending OTP to:', rawPhoneNumber);
            setSecondsLeft(59);
            setCode('');
        }
    };

    const handleVerifyOTP = () => {
        if (code.length === 6) {
            console.log('Verifying OTP code:', code);
        }
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

                            {/* Glass Card */}
                            <View style={styles.cardContainer}>
                                <View style={styles.glassCard}>
                                    <Text style={styles.cardTitle}>Verify OTP</Text>
                                    <Text style={styles.cardSubtitle}>
                                        Enter the 6-digit verification code sent to{'\n'}
                                        <Text style={styles.phoneNumberText}>{formattedPhoneNumber}</Text>
                                    </Text>

                                    {/* OTP Row */}
                                    <View style={styles.otpContainer}>
                                        {renderOtpBoxes()}
                                    </View>

                                    {/* Hidden TextInput for keyboard input */}
                                    <TextInput
                                        ref={textInputRef}
                                        style={styles.hiddenTextInput}
                                        keyboardType="number-pad"
                                        maxLength={6}
                                        value={code}
                                        onChangeText={setCode}
                                        autoFocus={true}
                                    />

                                    {/* Info Row 1: Secure mobile verification */}
                                    <View style={styles.infoRow}>
                                        <View style={styles.infoIconWrapper}>
                                            <Image
                                                source={Images.security}
                                                style={styles.infoIconImage}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <Text style={styles.infoText}>Secure mobile verification</Text>
                                    </View>

                                    <View style={styles.dividerLine} />

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
                                            Code expires in{' '}
                                            <Text style={styles.highlightText}>
                                                00:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
                                            </Text>
                                        </Text>
                                    </View>

                                    <View style={styles.dividerLine} />

                                    {/* Info Row 3: Resend OTP */}
                                    <View style={styles.infoRow}>
                                        <View style={styles.infoIconWrapper}>
                                            {/* Unicode circular reload arrow */}
                                            <Text style={styles.refreshIconText}>⟳</Text>
                                        </View>
                                        <Text style={styles.infoText}>
                                            Didn't receive OTP?{' '}
                                            <Text
                                                style={[
                                                    styles.pressableText,
                                                    secondsLeft > 0 && styles.resendDisabled,
                                                ]}
                                                onPress={handleResendOTP}
                                            >
                                                Resend OTP
                                            </Text>
                                        </Text>
                                    </View>

                                    {/* Verify OTP Button */}
                                    <Pressable
                                        style={({ pressed }) => [
                                            styles.button,
                                            code.length < 6 && styles.buttonDisabled,
                                            pressed && code.length === 6 && styles.buttonPressed,
                                        ]}
                                        onPress={handleVerifyOTP}
                                        disabled={code.length < 6}
                                    >
                                        <Text style={styles.buttonText}>Verify OTP</Text>
                                        <View style={styles.arrowContainer}>
                                            <View style={styles.arrowLine} />
                                            <View style={styles.arrowHead} />
                                        </View>
                                    </Pressable>
                                </View>
                            </View>

                            {/* Bottom footer text */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.footerText}>
                                    <Text style={styles.footerLockIcon}>🔒</Text> By continuing, you agree to our{' '}
                                    <Text style={styles.footerLink} onPress={handleTermsPress}>
                                        Terms & Conditions
                                    </Text>{' '}
                                    and{' '}
                                    <Text style={styles.footerLink} onPress={handlePrivacyPress}>
                                        Privacy Policy
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
