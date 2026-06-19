import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  LayoutAnimation,
  Platform,
  UIManager,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { styles } from './styles';
import Images from '../../constants/images';
import Stepper from '../../comman/Stepper';
import PlantHeader from '../../comman/PlantHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }
const DetailsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Form State
  const [name, setName] = useState('');
  const [dedication, setDedication] = useState('');
  const [message, setMessage] = useState('');
  const [stayUpdated, setStayUpdated] = useState(true);

  // Focus States for Inputs
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isDedicationFocused, setIsDedicationFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const toggleSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setStayUpdated(!stayUpdated);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 80}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {/* Header */}

          <PlantHeader />
          {/* Stepper */}
          <View style={{ backgroundColor: '#FAFBFB', position: 'absolute', top: 38, left: 0, right: 0, }}>
            <Stepper currentStep={3} />
          </View>

          {/* Hero Card */}
          <View style={styles.heroCard}>
            <ImageBackground
              source={Images.BgChoose}
              style={styles.heroImage}
              imageStyle={styles.heroImageRadius}
              resizeMode='cover'
            >
              <LinearGradient
                colors={['#FFFFFF', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.38, 0.58, 1]}
                style={styles.heroOverlay}
              />

              <View style={styles.heroContent}>
                <View style={styles.heroTextContainer}>
                  <Text style={styles.heroTitle}>
                    Tell us a little about{'\n'}
                    <Text style={styles.highlightGreen}>your tree </Text>
                  </Text>
                  <Text style={styles.heroSubtitle}>
                    Add a personal touch! This helps us dedicate your tree and keep you updated on its growth.
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* Selection Summary */}
          <View style={styles.summaryCard}>
            <Text style={styles.summaryCardTitle}>Your Selection Summary</Text>

            {/* Row 1: Tree & Location */}
            <View style={styles.summaryRow}>
              {/* Tree */}
              <View style={styles.summaryCol1}>
                <View style={styles.summaryIconContainer}>
                  <Image source={Images.leaf} style={styles.summaryIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Tree</Text>
                  <Text style={styles.summaryValue}>Neem</Text>
                </View>
              </View>
              {/* Divider */}
              {/* Location */}
              <View style={styles.summaryCol2}>
                <View style={styles.summaryIconContainer}>
                  <Image source={Images.location} style={styles.summaryIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Location</Text>
                  <Text numberOfLines={2} style={styles.summaryValue}>Aravalli Green Belt,{"\n"}Jaipur, Rajasthan</Text>
                </View>
              </View>

              {/* Planted By */}
              <View style={styles.summaryCol1}>
                <View style={styles.summaryIconContainer}>
                  <Image source={Images.calendar} style={styles.summaryIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Planted By</Text>
                  <Text style={styles.summaryValue} numberOfLines={1}>You</Text>
                </View>
              </View>
            </View>


            {/* Row Divider */}

            {/* Row 2: Planted By */}

          </View>

          {/* Form Details Section */}
          <View style={styles.formContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Add Your Details</Text>
            </View>

            {/* Input Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Your Name</Text>
              <View style={[styles.inputWrapper, isNameFocused && styles.inputWrapperActive]}>
                <Image source={Images.profile} style={styles.inputIcon} resizeMode="contain" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your full name"
                  placeholderTextColor="#8E9A93"
                  value={name}
                  onChangeText={(text) => {
                    const filtered = text.replace(/[^a-zA-Z\s]/g, '');
                    setName(filtered);
                  }}
                  maxLength={50}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                />
              </View>
            </View>

            {/* Input Dedication */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Dedicate Your Tree (Optional)</Text>
              <View style={[styles.inputWrapper, isDedicationFocused && styles.inputWrapperActive]}>
                <Image source={Images.gift} style={styles.inputIcon} resizeMode="contain" />
                <View style={{ width: 8 }} />
                <TextInput
                  style={styles.textInput}
                  placeholder="E.g.In memory of someone / For a loved one"
                  placeholderTextColor="#8E9A93"
                  value={dedication}
                  onChangeText={(text) => {
                    const filtered = text.replace(/[^a-zA-Z\s]/g, '');
                    setDedication(filtered);
                  }}
                  onFocus={() => setIsDedicationFocused(true)}
                  onBlur={() => setIsDedicationFocused(false)}
                />
              </View>
              <Text style={styles.inputSubtext}>This will appear on your tree certificate.</Text>
            </View>

            {/* Input Message */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Add a Message (Optional)</Text>
              <View style={[styles.textAreaWrapper, isMessageFocused && styles.textAreaWrapperActive]}>
                <Image source={Images.leaf} style={styles.textAreaIcon} resizeMode="contain" />
                <TextInput
                  style={styles.textAreaInput}
                  placeholder="E.g., For a greener tomorrow"
                  placeholderTextColor="#8E9A93"
                  multiline={true}
                  numberOfLines={3}
                  maxLength={100}
                  value={message}
                  onChangeText={setMessage}
                  onFocus={() => setIsMessageFocused(true)}
                  onBlur={() => setIsMessageFocused(false)}
                />
              </View>
              <Text style={styles.charCountText}>{message.length}/100</Text>
            </View>
            {/* Stay Updated Toggle row */}
            <Text style={styles.stayUpdatedLabel}>Stay Updated</Text>
            <View style={styles.stayUpdatedCard}>
              <View style={styles.stayUpdatedLeft}>
                <View style={styles.bellIconContainer}>
                  <Image source={Images.notification} style={styles.bellIcon} resizeMode="contain" />
                </View>
                <Text style={styles.stayUpdatedText}>
                  We'll keep you updated with your tree's growth and impact.
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={toggleSwitch}
                style={[
                  styles.customSwitchContainer,
                  {
                    backgroundColor: stayUpdated ? '#1E6B46' : '#D1DCD6',
                    alignItems: stayUpdated ? 'flex-end' : 'flex-start',
                  },
                ]}
              >
                <View style={styles.customSwitchKnob} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Verification banner */}
          <View style={styles.bannerCard}>
            <View style={styles.bannerLeft}>
              <View style={styles.bannerShieldContainer}>
                <Image source={Images.shield} style={styles.bannerShieldIcon} resizeMode="contain" />
              </View>
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerText}>Your tree is in safe hands!</Text>
                <Text style={styles.bannerTextSecondary}>All plantations are verified and monitored by our local partners.</Text>
              </View>
            </View>
            <Image source={Images.handtree} style={styles.bannerHandImage} resizeMode="cover" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Sticky Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Payment', { name: name || 'You', dedication: dedication || 'In memory of My Grandfather' })}
          activeOpacity={0.85}
        >
          <Text style={styles.continueText}>Continue to Payment</Text>
          {/* <Image
            source={Images.back}
            style={[styles.continueArrow, { transform: [{ rotate: '180deg' }] }]}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default DetailsScreen;
