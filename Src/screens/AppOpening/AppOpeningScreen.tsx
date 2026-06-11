import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../constants/images';
import String from '../../comman/String';
import Loader_button from '../../comman/Loader_button';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../comman/GradientText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';

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

const AppOpeningScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ImageBackground
      source={Images.background}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        <View>
          <Logo />
          <View style={styles.titleContainer}>
            <Text style={styles.titleDark}>{String.AppOpening_PlantTitle}</Text>
            <Text style={styles.titleDark}>{String.AppOpening_TrackTitle}</Text>
            <GradientText
              colors={['#217545', '#9eb657', '#2a978a']}
              style={styles.titleGreen}
            >
              {String.AppOpening_ImpactTitle}
            </GradientText>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>
              {String.AppOpening_Subtitle1}{'\n'}
              {String.AppOpening_Subtitle2}{'\n'}
              {String.AppOpening_Subtitle3}
              <GradientText
                colors={['#238563', '#9eb657',]}
                style={styles.subtitleLegacy}
              >
                {String.AppOpening_SubtitleLegacy}
              </GradientText>
            </Text>
          </View>

          {/* Glass Stats Card */}
          <View style={styles.cardContainer}>
            <View style={styles.glassCard}>
              <View style={styles.cardRow}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={Images.tree}
                    style={styles.cardIcon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardValue}>50,000+</Text>
                  <Text style={styles.cardLabel}>{String.AppOpening_TreesPlanted}</Text>
                </View>
              </View>

              <View style={styles.divider} />
              <View style={styles.cardRow}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={Images.globe}
                    style={styles.cardIcon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardValue}>12,500+ Tons</Text>
                  <Text style={styles.cardLabel}>{String.AppOpening_CO2Offset}</Text>
                </View>
              </View>

              <View style={styles.divider} />
              <View style={styles.cardRow}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={Images.shield}
                    style={styles.cardIcon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardValue}>98%</Text>
                  <Text style={styles.cardLabel}>{String.AppOpening_SurvivalRate}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.spacer} />

          {/* Button Area */}

          <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.85}>
            <LinearGradient
              colors={['#9eb657', '#77a958', '#38915d', '#238563']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonText}>{String.AppOpening_GetStarted}</Text>
              <View style={styles.arrowContainer}>
                <View style={styles.arrowLine} />
                <View style={styles.arrowHead} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Sign In Link */}
          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>
              {String.AppOpening_AlreadyHaveAccount}<Text style={styles.signInHighlight}>{String.AppOpening_SignIn}</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signInHighlight}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Features */}
          <View style={styles.footerContainer}>
            <View style={styles.footerItem}>
              <Image
                source={Images.verified}
                style={styles.footerIcon}
                resizeMode='contain'
              />
              <Text style={styles.footerText}>{String.AppOpening_VerifiedPlantations}</Text>
            </View>

            <View style={styles.footerSeparator} />

            <View style={styles.footerItem}>
              <Image
                source={Images.location}
                style={styles.footerIcon}
              />
              <Text style={styles.footerText}>{String.AppOpening_GPSTracked}</Text>
            </View>

            <View style={styles.footerSeparator} />

            <View style={styles.footerItem}>
              <Image
                source={Images.leaf}
                style={styles.footerIcon}
              />
              <Text style={styles.footerText}>{String.AppOpening_RealImpact}</Text>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AppOpeningScreen;
