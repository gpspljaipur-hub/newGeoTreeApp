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

const PaymentScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedPackageId, setSelectedPackageId] = useState('1');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethodId, setSelectedMethodId] = useState('upi');
  const [applyPoints, setApplyPoints] = useState(true);

  const contributionPackages = [
    { id: '1', amount: 199, text: 'Plant 1 Tree', isCustom: false },
    { id: '2', amount: 399, text: 'Plant 2 Trees', isCustom: false },
    { id: '3', amount: 599, text: 'Plant 3 Trees', isCustom: false },
    { id: '4', amount: 999, text: 'Plant 5 Trees', isCustom: false },
    { id: 'other', amount: 0, text: 'Custom Amount', isCustom: true },
  ];

  const paymentMethods = [
    { id: 'upi', name: 'UPI', subtext: 'Pay using any UPI app', recommended: true },
    { id: 'card', name: 'Credit / Debit Card', subtext: 'Visa, Mastercard, RuPay', recommended: false },
    { id: 'netbanking', name: 'Net Banking', subtext: 'All major banks supported', recommended: false },
    { id: 'wallet', name: 'Wallets', subtext: 'Paytm, PhonePe, Amazon Pay & more', recommended: false },
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEditSummary = () => {
    navigation.navigate('Details');
  };

  const toggleSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setApplyPoints(!applyPoints);
  };

  // Pricing calculations
  const getSelectedAmount = () => {
    if (selectedPackageId === 'other') {
      const parsed = parseInt(customAmount, 10);
      return isNaN(parsed) ? 0 : parsed;
    }
    const pkg = contributionPackages.find((p) => p.id === selectedPackageId);
    return pkg ? pkg.amount : 0;
  };

  const baseAmount = getSelectedAmount();
  const pointsDiscount = applyPoints ? 125 : 0;
  const payableAmount = Math.max(0, baseAmount - pointsDiscount);

  const renderMethodIcon = (id: string) => {
    switch (id) {
      case 'upi':
        return (
          <Text style={{ fontSize: 9.5, fontWeight: '900', color: '#0F7F1B', fontStyle: 'italic' }}>
            UPI
          </Text>
        );
      case 'card':
        return <Image source={Images.creditcard} style={styles.methodIcon} resizeMode="contain" />;
      case 'netbanking':
        return <Image source={Images.bank} style={styles.methodIcon} resizeMode="contain" />;
      case 'wallet':
        return <Image source={Images.wallet} style={styles.methodIcon} resizeMode="contain" />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 120}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <PlantHeader />
          {/* Stepper */}
          <Stepper currentStep={4} />
          {/* Hero Card */}
          <View style={styles.heroCard}>
            <ImageBackground
              source={Images.detailbg}
              style={styles.heroImage}
              imageStyle={styles.heroImageRadius}
              resizeMode='contain'
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
                    Complete Your Impact{'\n'}
                    with a <Text style={styles.highlightGreen}>Payment</Text>
                  </Text>
                  <Text style={styles.heroSubtitle}>
                    Your contribution helps us plant, protect, and monitor trees for a greener tomorrow.
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* Plantation Summary */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryCardHeaderRow}>
              <Text style={styles.summaryCardTitle}>Your Plantation Summary</Text>
              <TouchableOpacity style={styles.editButton} onPress={handleEditSummary} activeOpacity={0.7}>
                <Text style={styles.editButtonText}>Edit</Text>
                <Image source={Images.edit} style={styles.editIcon} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            {/* Row 1: Tree & Location */}
            <View style={styles.summaryContentRow}>

              <View style={styles.summaryItemLeft}>
                <View style={styles.summaryIconContainer}>
                  <Image source={Images.tree} style={styles.summaryIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Tree</Text>
                  <Text style={styles.summaryValue} numberOfLines={1}>Neem</Text>
                </View>
              </View>

              <View style={styles.summaryDivider} />

              <View style={styles.summaryItemRight}>
                <View style={styles.summaryIconContainer}>
                  <Image source={Images.geolocation} style={styles.summaryIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Location</Text>
                  <Text style={styles.summaryValue}>Aravalli Green Belt Jaipur, Rajasthan</Text>
                </View>
              </View>
            </View>

            <View style={styles.summaryRowDivider} />

            {/* Row 2: Dedicated To & Planted By */}
            <View style={styles.summaryContentRow}>
              <View style={styles.summaryItemLeft}>
                <View style={styles.summaryIconContainer}>
                  <Image source={Images.profile} style={styles.summaryIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Planted By</Text>
                  <Text style={styles.summaryValue}>You</Text>
                </View>

              </View>

              <View style={styles.summaryDivider} />

              <View style={styles.summaryItemRight}>
                <View style={styles.summaryIconContainer}>
                  <Image source={Images.gift} style={styles.summaryIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Dedicated To</Text>
                  <Text style={styles.summaryValue}>In memory of My Grandfather</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Contribution Amount Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Contribution Amount</Text>
            <Text style={styles.sectionSubtitle}>Your support makes a real difference!</Text>
          </View>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.amountScrollView}
            >
              {contributionPackages.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;

                return (
                  <TouchableOpacity
                    key={pkg.id}
                    activeOpacity={0.85}
                    onPress={() => {
                      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                      setSelectedPackageId(pkg.id);
                    }}
                    style={[styles.amountCard, isSelected && styles.amountCardSelected]}
                  >
                    {isSelected && (
                      <View style={styles.amountBadge}>
                        <View style={{ width: 8, height: 5, borderLeftWidth: 1.5, borderBottomWidth: 1.5, borderColor: '#FFFFFF', transform: [{ rotate: '-45deg' }], marginTop: -1 }} />
                      </View>
                    )}

                    <View style={styles.amountIconContainer}>
                      <Image
                        source={pkg.isCustom ? Images.leaf : Images.tree}
                        style={styles.amountCardIcon}
                        resizeMode="contain"
                      />
                    </View>

                    <Text style={styles.amountValueText}>
                      {pkg.isCustom ? 'Other' : `₹${pkg.amount}`}
                    </Text>

                    <Text style={styles.amountSubtext}>
                      {pkg.text}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Custom Amount Input Field */}
            {selectedPackageId === 'other' && (
              <View style={{ marginHorizontal: 16, marginTop: 12, marginBottom: 4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#1E6B46', borderRadius: 10, backgroundColor: '#FFFFFF', paddingHorizontal: 12, height: 50 }}>
                  <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 16, color: '#1E6B46', marginRight: 6 }}>₹</Text>
                  <TextInput
                    style={{ flex: 1, fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#111827', paddingVertical: 0 }}
                    placeholder="Enter custom amount"
                    placeholderTextColor="#8E9A93"
                    keyboardType="numeric"
                    value={customAmount}
                    onChangeText={(val) => setCustomAmount(val.replace(/[^0-9]/g, ''))}
                  />
                </View>
              </View>
            )}
          </View>

          {/* 100% Contribution Banner */}
          <View style={styles.impactBanner}>
            <View style={styles.impactLeft}>
              <View style={styles.impactIconContainer}>
                <Image source={Images.plant} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={styles.impactText}>
                100% of your contribution goes towards verified tree plantation and long-term care.
              </Text>
            </View>
            <View style={styles.impactRight}>
              <Image source={Images.shield} style={styles.impactShieldIcon} resizeMode="contain" />
              <Text style={styles.impactSecureText}>Secure &{'\n'}Transparent</Text>
            </View>
          </View>

          {/* Payment Methods Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Payment Methods</Text>
            <Text style={styles.sectionSubtitle}>🔒 All payments are secure and encrypted.</Text>
          </View>

          <View>
            {paymentMethods.map((method) => {
              const isSelected = selectedMethodId === method.id;

              return (
                <TouchableOpacity
                  key={method.id}
                  activeOpacity={0.85}
                  onPress={() => setSelectedMethodId(method.id)}
                  style={[styles.paymentMethodRow, isSelected && styles.paymentMethodRowSelected]}
                >
                  <View style={styles.paymentMethodLeft}>
                    <View style={styles.methodIconWrapper}>
                      {renderMethodIcon(method.id)}
                    </View>
                    <View style={{ flex: 1 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.methodTitle}>{method.name}</Text>
                        {method.recommended && (
                          <View style={styles.recommendedBadge}>
                            <Text style={styles.recommendedText}>Recommended</Text>
                          </View>
                        )}
                      </View>
                      <Text style={styles.methodSubtext} numberOfLines={1}>
                        {method.subtext}
                      </Text>
                    </View>
                  </View>

                  <View style={[styles.radioButtonOuter, isSelected && styles.radioButtonOuterSelected]}>
                    {isSelected && <View style={styles.radioButtonInner} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Apply Green Points row */}
          <View style={styles.applyPointsCard}>
            <View style={styles.applyPointsLeft}>
              <View style={styles.pointsIconContainer}>
                <Image source={Images.leaf} style={styles.pointsIcon} resizeMode="contain" />
              </View>
              <View style={styles.applyPointsTextContainer}>
                <Text style={styles.applyPointsTitle}>Apply Green Points</Text>
                <Text style={styles.applyPointsSubtext}>You have 1,250 Green Points</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.discountValueText}>- ₹125</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={toggleSwitch}
                style={[
                  styles.customSwitchContainer,
                  {
                    backgroundColor: applyPoints ? '#1E6B46' : '#D1DCD6',
                    alignItems: applyPoints ? 'flex-end' : 'flex-start',
                  },
                ]}
              >
                <View style={styles.customSwitchKnob} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Safety Disclaimer */}
          <View style={styles.bannerCard}>
            <View style={styles.bannerLeft}>
              <View style={styles.bannerShieldContainer}>
                <Image source={Images.shield} style={styles.bannerShieldIcon} resizeMode="contain" />
              </View>
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerText}>Safe. Verified. Impactful.</Text>
                <Text style={styles.bannerTextSecondary}>Every tree you plant is geo-tagged, verified, and monitored by our local partners.</Text>
              </View>
            </View>
            <Image source={Images.handtree} style={styles.bannerHandImage} resizeMode="cover" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Sticky Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate('ThankYou')}
          activeOpacity={0.85}
        >
          <View style={styles.payTitleRow}>
            <Image source={Images.lock} style={styles.payLockIcon} resizeMode="contain" />
            <Text style={styles.payButtonText}>
              Pay ₹{payableAmount} & Plant Your Tree
            </Text>
          </View>
          {applyPoints && (
            <Text style={styles.payButtonSubtext}>
              (After applying Green Points)
            </Text>
          )}
          {/* <Image
            source={Images.back}
            style={[styles.payArrow, { transform: [{ rotate: '180deg' }] }]}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
