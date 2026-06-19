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
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
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
  const route = useRoute<RouteProp<RootStackParamList, 'Payment'>>();
  const plantedBy = route.params?.name || 'You';
  const dedicatedTo = route.params?.dedication || 'In memory of My Grandfather';

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
          <View style={{ borderWidth: 1.2, borderColor: '#C4D4CB', borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1 }}>
            <Text style={{ fontSize: 7, fontFamily: 'OpenSans-ExtraBold', color: '#5B665F', fontStyle: 'italic' }}>
              UPI
            </Text>
          </View>
        );
      case 'card':
        return <Image source={Images.creditcard} style={{ width: 20, height: 20, tintColor: '#5B665F' }} resizeMode="contain" />;
      case 'netbanking':
        return <Image source={Images.bank} style={{ width: 20, height: 20, tintColor: '#5B665F' }} resizeMode="contain" />;
      case 'wallet':
        return <Image source={Images.wallet} style={{ width: 20, height: 20, tintColor: '#5B665F' }} resizeMode="contain" />;
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
          <View style={{ backgroundColor: '#FAFBFB', position: 'absolute', top: 50, left: 0, right: 0, }}>

            <Stepper currentStep={4} />
          </View>
          {/* Hero Card */}
          <View style={styles.heroCard}>
            <ImageBackground
              source={Images.BgChoose}
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
                  <Text numberOfLines={2} style={styles.heroSubtitle}>
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

            {/* Horizontal 4-Column Summary Layout */}
            <View style={styles.summaryHorizontalRow}>
              {/* Item 1: Tree */}
              <View style={[styles.summaryItem, { flex: 0.75 }]}>
                <View style={styles.summaryIconCircle}>
                  <Image source={Images.leaf} style={styles.summaryItemIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryItemTextCol}>
                  <Text style={styles.summaryItemLabel}>Tree</Text>
                  <Text style={styles.summaryItemValue} numberOfLines={1}>Neem</Text>
                </View>
              </View>

              <View style={styles.summaryVerticalDivider} />

              {/* Item 2: Location */}
              <View style={[styles.summaryItem, { flex: 1.45 }]}>
                <View style={styles.summaryIconCircle}>
                  <Image source={Images.geolocation} style={styles.summaryItemIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryItemTextCol}>
                  <Text style={styles.summaryItemLabel}>Location</Text>
                  <Text style={styles.summaryItemValue} numberOfLines={3}>Aravalli Green Belt, Jaipur, Rajasthan</Text>
                </View>
              </View>

              <View style={styles.summaryVerticalDivider} />

              {/* Item 3: Dedicated To */}
              <View style={[styles.summaryItem, { flex: 1.3 }]}>
                <View style={styles.summaryIconCircle}>
                  <Image source={Images.gift} style={styles.summaryItemIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryItemTextCol}>
                  <Text style={styles.summaryItemLabel}>Dedicated To</Text>
                  <Text style={styles.summaryItemValue} numberOfLines={3}>{dedicatedTo}</Text>
                </View>
              </View>

              <View style={styles.summaryVerticalDivider} />

              {/* Item 4: Planted By */}
              <View style={[styles.summaryItem, { flex: 0.8 }]}>
                <View style={styles.summaryIconCircle}>
                  <Image source={Images.profile} style={styles.summaryItemIcon} resizeMode="contain" />
                </View>
                <View style={styles.summaryItemTextCol}>
                  <Text style={styles.summaryItemLabel}>Planted By</Text>
                  <Text style={styles.summaryItemValue} numberOfLines={1}>{plantedBy}</Text>
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
                        <Image source={Images.check} style={{ width: 10, height: 10, tintColor: '#FFFFFF' }} resizeMode="contain" />
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
              <View style={styles.customAmountContainer}>
                <View style={styles.customAmountInputWrapper}>
                  <Text style={styles.customAmountCurrency}>₹</Text>
                  <TextInput
                    style={styles.customAmountInput}
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
            <View style={styles.secureBadgeContainer}>
              <Image source={Images.shield} style={styles.secureBadgeIcon} resizeMode="contain" />
              <View>
                <Text style={styles.secureBadgeText}>Secure &</Text>
                <Text style={styles.secureBadgeText}>Transparent</Text>
              </View>
            </View>
          </View>

          {/* Payment Methods Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Payment Methods</Text>
            <View style={styles.secureBannerRow}>
              <Image source={Images.lock} style={styles.secureBannerLockIcon} resizeMode="contain" />
              <Text style={styles.secureBannerText}>All payments are secure and encrypted.</Text>
            </View>
          </View>

          <View style={styles.paymentMethodsContainer}>
            {paymentMethods.map((method, index) => {
              const isSelected = selectedMethodId === method.id;
              const isLast = index === paymentMethods.length - 1;

              return (
                <View key={method.id}>
                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => setSelectedMethodId(method.id)}
                    style={styles.paymentMethodRowCustom}
                  >
                    <View style={styles.paymentMethodLeft}>
                      <View style={styles.methodIconWrapperCustom}>
                        {renderMethodIcon(method.id)}
                      </View>
                      <View style={styles.methodTextRow}>
                        <Text style={styles.methodTitleCustom}>{method.name}</Text>
                        <Text style={styles.methodSubtextCustom} numberOfLines={1}>
                          {method.subtext}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.paymentMethodRight}>
                      {method.recommended && (
                        <View style={styles.recommendedBadgeCustom}>
                          <Text style={styles.recommendedTextCustom}>Recommended</Text>
                        </View>
                      )}
                      <View style={[styles.radioButtonOuterCustom, isSelected && styles.radioButtonOuterSelectedCustom]}>
                        {isSelected && <View style={styles.radioButtonInnerCustom} />}
                      </View>
                    </View>
                  </TouchableOpacity>
                  {!isLast && <View style={styles.paymentMethodDivider} />}
                </View>
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
                    backgroundColor: applyPoints ? '#056213' : '#D1DCD6',
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
