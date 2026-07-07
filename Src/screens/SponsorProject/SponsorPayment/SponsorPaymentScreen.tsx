import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Images from '../../../constants/images';
import fonts from '../../../comman/fonts';
import { styles } from './styles';

const SponsorPaymentScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // Route parameters with default fallbacks
  const project = route.params?.project ?? {
    id: 'aravali',
    name: 'Aravalli Restoration Project',
    location: 'Rajasthan',
    badge: 'Restoration',
    desc: 'Restoring degraded forest land and reviving native biodiversity in Aravalli ranges.',
    planted: 18450,
    goal: 50000,
    daysLeft: 65,
    ngoPartner: 'Prakriti Foundation',
    image: Images.project_aravalli,
  };

  const selectedLevel = route.params?.selectedLevel ?? {
    id: 'green_supporter',
    name: 'Green Supporter',
    amount: 500,
    amountText: '₹500',
    desc: 'Helps plant approximately 10 Trees',
    badge: 'Good start!',
  };

  // State management
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'upi' | 'netbanking' | 'wallet' | 'emi'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [zip, setZip] = useState('');
  const [saveCard, setSaveCard] = useState(true);

  // Derived calculations
  const progressPercent = Math.min(100, Math.round((project.planted / project.goal) * 100));

  // Approx. metrics based on amount
  const getTreesCount = (amt: number) => {
    if (amt === 500) return 10;
    if (amt === 2000) return 50;
    if (amt === 5000) return 125;
    return Math.round(amt / 50);
  };
  const treesCount = getTreesCount(selectedLevel.amount);
  const co2Offset = (treesCount * 0.025).toFixed(2);

  // Handle Card Number inputs 
  const handleCardNumberChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < cleaned.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += cleaned[i];
    }
    setCardNumber(formatted.slice(0, 19));
  };

  // Handle Expiry Date inputs 
  const handleExpiryChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = '';
    if (cleaned.length > 0) {
      formatted += cleaned.slice(0, 2);
      if (cleaned.length > 2) {
        formatted += ' / ' + cleaned.slice(2, 4);
      }
    }
    setExpiry(formatted.slice(0, 7));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <View style={styles.headerTitleRow}>
              <Text style={styles.headerTitle}>Secure Payment</Text>
              <Image source={Images.shield} style={styles.headerCheckIcon} resizeMode="contain" />
            </View>
            <Text style={styles.headerSubtitle}>Review your order and complete your payment</Text>
          </View>

          <View style={styles.headerRightSecure}>
            <Image source={Images.lock} style={styles.headerSecureIcon} resizeMode="contain" />
            <View style={styles.headerSecureTextCol}>
              <Text style={styles.headerSecureTextBold}>100% Secure</Text>
              <Text style={styles.headerSecureTextDesc}>Transaction</Text>
            </View>
          </View>
        </View>

        {/* You're making a real difference Banner */}
        <View style={styles.alertBanner}>
          <View style={styles.alertIconContainer}>
            <Image source={Images.shield} style={styles.alertIcon} resizeMode="contain" />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTitle}>You're making a real difference!</Text>
            <Text style={styles.alertDesc}>
              Your support will help restore forests, protect biodiversity and create a greener tomorrow.
            </Text>
          </View>
          <Image source={Images.leaf} style={styles.floatingLeaves} resizeMode="contain" />
        </View>

        {/* Selected Project Card */}
        <View style={styles.projectCard}>
          <View style={styles.projectImageContainer}>
            <Image source={project.image} style={styles.projectImage} resizeMode="cover" />
            <View style={styles.gpsBadge}>
              <Image source={Images.location} style={styles.gpsIcon} resizeMode="contain" />
              <Text style={styles.gpsText}>GPS VERIFIED</Text>
            </View>
          </View>

          <View style={styles.projectInfo}>
            <View style={styles.projectHeaderRow}>
              <Text style={styles.projectName}>{project.name}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{project.badge}</Text>
              </View>
            </View>

            <View style={styles.locationRow}>
              <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" />
              <Text style={styles.locationText}>{project.location}</Text>
            </View>

            <Text style={styles.projectDesc}>{project.desc}</Text>

            <View style={styles.progressWrapper}>
              <View style={styles.progressLabelRow}>
                <Text style={styles.progressLabelText}>
                  {project.planted?.toLocaleString()} <Text style={styles.progressLabelNormal}>/ {project.goal?.toLocaleString()} Trees Planted</Text>
                </Text>
                <Text style={styles.progressPercentText}>{progressPercent}%</Text>
              </View>
              <View style={styles.progressBarTrack}>
                <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Your Impact Preview Section */}
        <Text style={styles.sectionTitle}>Your Impact Preview</Text>
        <View style={styles.impactPreviewCard}>
          <View style={styles.impactRow}>
            <View style={styles.impactColumn}>
              <View style={styles.impactIconCircle}>
                <Image source={Images.plant} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={styles.impactValue}>{treesCount}</Text>
              <Text style={styles.impactLabel}>Approx. Trees{'\n'}Supported</Text>
            </View>

            <View style={styles.impactDivider} />

            <View style={styles.impactColumn}>
              <View style={styles.impactIconCircle}>
                <Image source={Images.co2Cloud} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={styles.impactValue}>{co2Offset} Tons</Text>
              <Text style={styles.impactLabel}>CO₂ Offset{'\n'}(Approx.)</Text>
            </View>

            <View style={styles.impactDivider} />

            <View style={styles.impactColumn}>
              <View style={styles.impactIconCircle}>
                <Image source={Images.camera} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={styles.impactValue}>Monthly</Text>
              <Text style={styles.impactLabel}>Progress{'\n'}Updates</Text>
            </View>

            <View style={styles.impactDivider} />

            <View style={styles.impactColumn}>
              <View style={styles.impactIconCircle}>
                <Image source={Images.certificate} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={styles.impactValue}>Digital</Text>
              <Text style={styles.impactLabel}>Certificate{'\n'}of Sponsorship</Text>
            </View>

            <View style={styles.impactDivider} />

            <View style={styles.impactColumn}>
              <View style={styles.impactIconCircle}>
                <Image source={Images.location} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={styles.impactValue}>GPS Verified</Text>
              <Text style={styles.impactLabel}>Project{'\n'}Location</Text>
            </View>
          </View>

          <View style={styles.impactBannerRow}>
            <Image source={Images.leaf} style={styles.impactBannerIcon} resizeMode="contain" />
            <Text style={styles.impactBannerText}>
              You will receive regular updates, photos & impact reports on this project.
            </Text>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.columnCard}>
          <Text style={styles.columnTitle}>Order Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelText}>Project</Text>
            <Text style={styles.summaryValueText} numberOfLines={1}>{project.name}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelText}>Sponsorship Level</Text>
            <Text style={styles.summaryValueText}>{selectedLevel.name}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelText}>Contribution</Text>
            <Text style={styles.summaryValueText}>{selectedLevel.amountText}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelText}>Subtotal</Text>
            <Text style={styles.summaryValueText}>{selectedLevel.amountText}</Text>
          </View>

          <View style={styles.summaryRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.summaryLabelText}>Platform & Payment Charges</Text>
              <Image source={Images.copy} style={styles.infoIcon} resizeMode="contain" />
            </View>
            <Text style={styles.summaryValueText}>₹0</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabelText}>Total Amount</Text>
            <Text style={styles.totalValueText}>{selectedLevel.amountText}</Text>
          </View>

          <View style={styles.taxBenefitCard}>
            <Image source={Images.leaf} style={styles.taxBenefitIcon} resizeMode="contain" />
            <View style={styles.taxBenefitTextCol}>
              <Text style={styles.taxBenefitTextBold}>Thank you for supporting a greener planet!</Text>
              <Text style={styles.taxBenefitTextDesc}>This contribution is eligible for 80G tax benefit.</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.taxBenefitLink}>Know more</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Payment Method Selector */}
        <View style={styles.columnCard}>
          <Text style={styles.columnTitle}>Payment Method</Text>

          {/* Card Option */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.paymentMethodRow, selectedMethod === 'card' && styles.paymentMethodRowSelected]}
            onPress={() => setSelectedMethod('card')}
          >
            <View style={styles.methodInfoContainer}>
              <View style={styles.methodIconCircle}>
                <Image source={Images.creditcard} style={styles.methodLogoImg} resizeMode="contain" />
              </View>
              <View>
                <Text style={styles.methodTitle}>Credit / Debit Card</Text>
                <Text style={styles.methodDesc} numberOfLines={1}>Visa, Mastercard, Rupay, Amex</Text>
              </View>
            </View>
            <View style={[styles.radioButtonOuter, selectedMethod === 'card' && styles.radioButtonOuterSelected]}>
              {selectedMethod === 'card' && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>

          {/* UPI Option */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.paymentMethodRow, selectedMethod === 'upi' && styles.paymentMethodRowSelected]}
            onPress={() => setSelectedMethod('upi')}
          >
            <View style={styles.methodInfoContainer}>
              <View style={styles.methodIconCircle}>
                <Image source={Images.upi} style={styles.methodLogoImg} resizeMode="contain" />
              </View>
              <View>
                <Text style={styles.methodTitle}>UPI</Text>
                <Text style={styles.methodDesc}>Pay using any UPI app</Text>
              </View>
            </View>
            <View style={[styles.radioButtonOuter, selectedMethod === 'upi' && styles.radioButtonOuterSelected]}>
              {selectedMethod === 'upi' && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>

          {/* Netbanking Option */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.paymentMethodRow, selectedMethod === 'netbanking' && styles.paymentMethodRowSelected]}
            onPress={() => setSelectedMethod('netbanking')}
          >
            <View style={styles.methodInfoContainer}>
              <View style={styles.methodIconCircle}>
                <Image source={Images.bank} style={styles.methodLogoImg} resizeMode="contain" />
              </View>
              <View>
                <Text style={styles.methodTitle}>Net Banking</Text>
                <Text style={styles.methodDesc}>All major banks supported</Text>
              </View>
            </View>
            <View style={[styles.radioButtonOuter, selectedMethod === 'netbanking' && styles.radioButtonOuterSelected]}>
              {selectedMethod === 'netbanking' && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>

          {/* Wallets Option */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.paymentMethodRow, selectedMethod === 'wallet' && styles.paymentMethodRowSelected]}
            onPress={() => setSelectedMethod('wallet')}
          >
            <View style={styles.methodInfoContainer}>
              <View style={styles.methodIconCircle}>
                <Image source={Images.wallet} style={styles.methodLogoImg} resizeMode="contain" />
              </View>
              <View>
                <Text style={styles.methodTitle}>Wallets</Text>
                <Text style={styles.methodDesc}>Paytm, PhonePe, Google Pay & more</Text>
              </View>
            </View>
            <View style={[styles.radioButtonOuter, selectedMethod === 'wallet' && styles.radioButtonOuterSelected]}>
              {selectedMethod === 'wallet' && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>

          {/* EMI / Pay Later Option */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.paymentMethodRow, selectedMethod === 'emi' && styles.paymentMethodRowSelected]}
            onPress={() => setSelectedMethod('emi')}
          >
            <View style={styles.methodInfoContainer}>
              <View style={styles.methodIconCircle}>
                <Image source={Images.calendar} style={styles.methodLogoImg} resizeMode="contain" />
              </View>
              <View>
                <Text style={styles.methodTitle}>EMI / Pay Later</Text>
                <Text style={styles.methodDesc}>Easy EMI options available</Text>
              </View>
            </View>
            <View style={[styles.radioButtonOuter, selectedMethod === 'emi' && styles.radioButtonOuterSelected]}>
              {selectedMethod === 'emi' && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Card Input Form - Conditionally Rendered */}
        {selectedMethod === 'card' && (
          <View style={styles.cardFormCard}>
            <View style={styles.cardFormHeader}>
              <Text style={styles.cardFormTitle}>Pay using Card</Text>
              <View style={styles.cardLogosRow}>
                <Image source={Images.visa} style={styles.cardLogoIcon} resizeMode="contain" />
                <Image source={Images.mastercard} style={styles.cardLogoIcon} resizeMode="contain" />
                <Image source={Images.rupay} style={styles.cardLogoIcon} resizeMode="contain" />
              </View>
            </View>

            {/* Card Number */}
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Card Number</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="0000 0000 0000 0000"
                  placeholderTextColor="#8E9A93"
                  keyboardType="numeric"
                  value={cardNumber}
                  onChangeText={handleCardNumberChange}
                />
                <Image source={Images.creditcard} style={styles.inputCardIcon} resizeMode="contain" />
              </View>
            </View>

            {/* Name on Card */}
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Name on Card</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter name on card"
                  placeholderTextColor="#8E9A93"
                  value={cardName}
                  onChangeText={setCardName}
                  autoCapitalize="words"
                />
              </View>
            </View>

            {/* Row of Expiry, CVV, Billing Zip */}
            <View style={styles.formRow}>
              <View style={[styles.formField, styles.formRowCol30]}>
                <Text style={styles.inputLabel}>Expiry Date</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="MM / YY"
                    placeholderTextColor="#8E9A93"
                    keyboardType="numeric"
                    value={expiry}
                    onChangeText={handleExpiryChange}
                  />
                </View>
              </View>

              <View style={[styles.formField, styles.formRowCol30]}>
                <Text style={styles.inputLabel}>CVV</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="123"
                    placeholderTextColor="#8E9A93"
                    keyboardType="numeric"
                    secureTextEntry
                    maxLength={3}
                    value={cvv}
                    onChangeText={(val) => setCvv(val.replace(/\D/g, ''))}
                  />
                  <Image source={Images.copy} style={styles.infoIcon} resizeMode="contain" />
                </View>
              </View>

              <View style={[styles.formField, styles.formRowCol35]}>
                <Text style={styles.inputLabel}>Billing Zip Code</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter zip code"
                    placeholderTextColor="#8E9A93"
                    keyboardType="numeric"
                    maxLength={6}
                    value={zip}
                    onChangeText={(val) => setZip(val.replace(/\D/g, ''))}
                  />
                </View>
              </View>
            </View>

            {/* Save Card Option */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.saveCardRow}
              onPress={() => setSaveCard(!saveCard)}
            >
              <View style={[styles.checkboxSquare, saveCard && styles.checkboxSquareChecked]}>
                {saveCard && <Image source={Images.check} style={styles.checkboxCheckIcon} resizeMode="contain" />}
              </View>
              <View style={styles.checkboxLabelCol}>
                <Text style={styles.checkboxLabelText}>Save this card for faster payments</Text>
                <Text style={styles.checkboxDescText}>Your card details are securely saved.</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* Payment Security Disclaimer & Logos */}
        <View style={styles.encryptionCard}>
          <View style={styles.encryptionLeft}>
            <View style={styles.lockCircle}>
              <Image source={Images.lock} style={styles.lockIcon} resizeMode="contain" />
            </View>
            <View style={styles.encryptionTextCol}>
              <Text style={styles.encryptionTitle}>Your payment information is encrypted and secure.</Text>
              <Text style={styles.encryptionDesc}>We do not store your card details.</Text>
            </View>
          </View>
        </View>

        {/* Bottom Action Bar */}
        <View style={styles.bottomFloatingBar}>
          <View style={styles.bottomMainRow}>
            <View style={styles.bottomLeftInfo}>
              <View style={styles.bottomThumbCircle}>
                <Image source={Images.rotatehand_tree} style={styles.bottomThumbImg} resizeMode="contain" />
              </View>
              <View style={styles.bottomTextCol}>
                <Text style={styles.bottomSupportingLabel}>You are supporting</Text>
                <Text style={styles.bottomProjectName} numberOfLines={1}>{project.name}</Text>

                <View style={styles.bottomAmountRow}>
                  <Text style={styles.bottomAmountLabel}>Amount</Text>
                  <Text style={styles.bottomAmountVal}>{selectedLevel.amountText}</Text>
                  <Text style={styles.bottomAmountQty}>({treesCount} Trees Approx.)</Text>
                </View>
              </View>
            </View>

            <View style={styles.bottomButtonBox}>
              <TouchableOpacity
                style={styles.paySecurelyButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('PaymentSucessful')}
              >
                <Image source={Images.lock} style={styles.payButtonLockIcon} resizeMode="contain" />
                <Text style={styles.payButtonText}>Pay Securely</Text>
              </TouchableOpacity>
              <Text style={styles.bottomRedirectText}>You will be redirected to a secure payment gateway</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SponsorPaymentScreen;
