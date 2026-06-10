import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
  );
};

const AppOpeningScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        <View
        >
          <Logo />
          <View style={styles.titleContainer}>
            <Text style={styles.titleDark}>PLANT.</Text>
            <Text style={styles.titleDark}>TRACK.</Text>
            <Text style={styles.titleGreen}>IMPACT.</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>
              Plant verified trees.{'\n'}
              Track growth.{'\n'}
              Leave a <Text style={styles.subtitleLegacy}>legacy</Text>.
            </Text>
          </View>

          {/* Glass Stats Card */}
          <View style={styles.cardContainer}>
            <View style={styles.glassCard}>
              <View style={styles.cardRow}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={require('../../assets/tree.png')}
                    style={styles.cardIcon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardValue}>50,000+</Text>
                  <Text style={styles.cardLabel}>TREES PLANTED</Text>
                </View>
              </View>

              <View style={styles.divider} />
              <View style={styles.cardRow}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={require('../../assets/globe.png')}
                    style={styles.cardIcon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardValue}>12,500+ Tons</Text>
                  <Text style={styles.cardLabel}>CO₂ OFFSET</Text>
                </View>
              </View>

              <View style={styles.divider} />
              <View style={styles.cardRow}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={require('../../assets/shield.png')}
                    style={styles.cardIcon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardValue}>98%</Text>
                  <Text style={styles.cardLabel}>SURVIVAL RATE</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.spacer} />

          {/* Button Area */}
          <TouchableOpacity style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Get Started</Text>
            <View style={styles.arrowContainer}>
              <View style={styles.arrowLine} />
              <View style={styles.arrowHead} />
            </View>
          </TouchableOpacity>

          {/* Sign In Link */}
          <TouchableOpacity style={styles.signInContainer} activeOpacity={0.7}>
            <Text style={styles.signInText}>
              Already have an account? <Text style={styles.signInHighlight}>Sign In</Text>
            </Text>
          </TouchableOpacity>

          {/* Footer Features */}
          <View style={styles.footerContainer}>
            <View style={styles.footerItem}>
              <Image
                source={require('../../assets/verified.png')}
                style={styles.footerIcon}
              />
              <Text style={styles.footerText}>VERIFIED{'\n'}PLANTATIONS</Text>
            </View>

            <View style={styles.footerSeparator} />

            <View style={styles.footerItem}>
              <Image
                source={require('../../assets/location.png')}
                style={styles.footerIcon}
              />
              <Text style={styles.footerText}>GPS{'\n'}TRACKED</Text>
            </View>

            <View style={styles.footerSeparator} />

            <View style={styles.footerItem}>
              <Image
                source={require('../../assets/leaf.png')}
                style={styles.footerIcon}
              />
              <Text style={styles.footerText}>REAL{'\n'}IMPACT</Text>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AppOpeningScreen;
