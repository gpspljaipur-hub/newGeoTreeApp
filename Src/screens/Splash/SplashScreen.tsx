import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { RootState } from '../../redux/Store/Store';
import Images from '../../constants/images';
import String from '../../comman/String';
import { handleNavigation } from '../../navigation/RootNavigator';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.6)).current;
  const textFadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Fade in the subtitle text after logo animation completes
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    });

    // Navigate to next screen after 2.5 seconds
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        handleNavigation({ type: 'setRoot', page: 'UserDashboard', navigation });
      } else {
        handleNavigation({ type: 'setRoot', page: 'Home', navigation });
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigation]);

  return (
    <LinearGradient
      colors={['#0F3C25', '#1E6B46', '#2F9E67']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.contentContainer}>
        {/* Animated Logo Container */}
        <Animated.View
          style={[
            styles.logoWrapper,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Animated.Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Tagline / Subtitle */}
        <Animated.Text
          style={[
            styles.tagline,
            {
              opacity: textFadeAnim,
            },
          ]}
        >
          {String.Splash_Tagline}
        </Animated.Text>
      </View>

      {/* Loading Spinner */}

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoWrapper: {
    width: width * 0.55,
    height: width * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: (width * 0.55) / 2,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
    marginBottom: 24,
  },
  logo: {
    width: '75%',
    height: '75%',
    tintColor: '#FFFFFF', // Tinting logo to white for clean premium look on dark green background
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: 'OpenSans-SemiBold',
    letterSpacing: 1.2,
    textAlign: 'center',
    marginTop: 8,
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 60,
  },
});

export default SplashScreen;
