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
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import Images from '../../../constants/images';
import { styles } from './styles';

const CompletePaymentScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const qty = 292;
  const co2 = '6.42';
  const treeType = 'Arjun (Terminalia arjuna)';
  const stateName = 'Rajasthan, India';
  const cost = 10220;
  const gst = 1560;
  const total = 11780;
  const projectName = 'Aravalli Green Belt';
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'upi' | 'netbanking' | 'wallet' | 'emi'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [selectedUpiApp, setSelectedUpiApp] = useState<string | null>(null);
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [selectedEmi, setSelectedEmi] = useState<string | null>(null);

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

  // Auto-format expiry date as MM / YY
  const handleExpiryChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = '';
    if (cleaned.length > 0) {
      formatted += cleaned.slice(0, 2);
      if (cleaned.length > 2) {
        formatted += ' / ' + cleaned.slice(2, 4);
      }
    }
    setExpiryDate(formatted.slice(0, 7));
  };

  const handleCvvChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    setCvv(cleaned.slice(0, 3));
  };
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Top Custom Header */}
          <ImageBackground
            source={Images.detailbg}
            style={styles.topSectionWrapper}
            resizeMode="cover"
          >
            <View style={styles.headerTopRow}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
              >
                <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
              </TouchableOpacity>

              <Image source={Images.logoGeotree} style={styles.logo} resizeMode="contain" />

              <View style={styles.securePaymentBadge}>
                <Image source={Images.shield} style={styles.securePaymentIcon} resizeMode="contain" />
                <Text style={styles.securePaymentText}>100% Secure Payment</Text>
              </View>
            </View>

            {/* Hero Section */}
            <View style={styles.heroSection}>
              <Text style={styles.heroTitle}>
                Complete Your <Text style={styles.heroTitleGreen}>Payment</Text>
                <Image source={Images.leaf} style={{ width: 20, height: 20, tintColor: '#1E6B46' }} resizeMode="contain" />
              </Text>
              <Text style={styles.heroDesc}>
                You are one step away from creating a lasting impact on our planet. 💚
              </Text>
            </View>

            {/* Trust Badges Row */}
            <View style={styles.trustRow}>
              {/* Badge 1 */}
              <View style={styles.trustItem}>
                <View style={styles.trustIconContainer}>
                  <Image source={Images.shield} style={styles.trustIcon} resizeMode="contain" />
                </View>
                <View style={styles.trustTextContainer}>
                  <Text style={styles.trustLabel}>100% Secure</Text>
                  <Text style={styles.trustSublabel}>Transactions</Text>
                </View>
              </View>
              {/* Badge 2 */}
              <View style={styles.trustItem}>
                <View style={styles.trustIconContainer}>
                  <Image source={Images.creditcard} style={styles.trustIcon} resizeMode="contain" />
                </View>
                <View style={styles.trustTextContainer}>
                  <Text style={styles.trustLabel}>Multiple</Text>
                  <Text style={styles.trustSublabel}>Payment Options</Text>
                </View>
              </View>
              {/* Badge 3 */}
              <View style={styles.trustItem}>
                <View style={styles.trustIconContainer}>
                  <Image source={Images.electricity} style={styles.trustIcon} resizeMode="contain" />
                </View>
                <View style={styles.trustTextContainer}>
                  <Text style={styles.trustLabel}>Instant</Text>
                  <Text style={styles.trustSublabel}>Confirmation</Text>
                </View>
              </View>
              {/* Badge 4 */}
              <View style={[styles.trustItem, styles.trustItemLast]}>
                <View style={styles.trustIconContainer}>
                  <Image source={Images.verified} style={styles.trustIcon} resizeMode="contain" />
                </View>
                <View style={styles.trustTextContainer}>
                  <Text style={styles.trustLabel}>Tax Benefit</Text>
                  <Text style={styles.trustSublabel}>80G Certified</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          {/* Order Summary Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Order Summary</Text>

            <View style={styles.planHeader}>
              <Image source={Images.neem_tree} style={styles.planIcon} resizeMode="cover" />
              <View style={styles.planTexts}>
                <Text style={styles.planTitle}>Carbon Offset Plan</Text>
                <Text style={styles.planOffset}>100% Offset (Carbon Neutral)</Text>
                <Text style={styles.planSubtext}>You are offsetting {co2} Tons CO₂ / Year</Text>
              </View>
            </View>

            <View style={styles.detailList}>
              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <Image source={Images.leaf} style={styles.detailIcon} resizeMode="contain" />
                  <Text style={styles.detailLabel}>Total Trees</Text>
                </View>
                <Text style={styles.detailVal}>{qty} Trees</Text>
              </View>

              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <Image source={Images.treeIcon} style={styles.detailIcon} resizeMode="contain" />
                  <Text style={styles.detailLabel}>Tree Type</Text>
                </View>
                <Text style={styles.detailVal}>{treeType}</Text>
              </View>

              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <Image source={Images.location} style={styles.detailIcon} resizeMode="contain" />
                  <Text style={styles.detailLabel}>Plantation Location</Text>
                </View>
                <Text style={styles.detailVal}>{stateName}</Text>
              </View>

              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <Image source={Images.Emission} style={styles.detailIcon} resizeMode="contain" />
                  <Text style={styles.detailLabel}>Impact</Text>
                </View>
                <Text style={styles.detailVal}>{co2} Tons CO₂ / Year</Text>
              </View>
            </View>

            {/* Price Details */}
            <Text style={[styles.cardTitle, { marginTop: 6, marginBottom: 4 }]}>Price Details</Text>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Total Amount</Text>
              <Text style={styles.priceVal}>₹{cost.toLocaleString('en-IN')}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>GST (18%)</Text>
              <Text style={styles.priceVal}>₹{gst.toLocaleString('en-IN')}</Text>
            </View>

            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Grand Total</Text>
              <Text style={styles.grandTotalVal}>₹{total.toLocaleString('en-IN')}</Text>
            </View>

            <View style={[styles.alertBox, { backgroundColor: '#F9FAF6', borderStyle: 'dashed', borderWidth: 1, borderColor: '#D1DCD6', marginTop: 6 }]}>
              <Image source={Images.gift || Images.star} style={styles.alertIcon} resizeMode="contain" />
              <Text style={[styles.alertText, { color: '#0A1C14' }]}>
                Eligible for <Text style={{ fontWeight: 'bold', color: '#1A6836' }}>80G tax benefit</Text>. Certificate & updates included.
              </Text>
            </View>
          </View>

          {/* Select Payment Method Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Select Payment Method</Text>

            {/* Credit / Debit Card option */}
            <TouchableOpacity
              style={[styles.paymentMethodRow, selectedMethod === 'card' ? styles.paymentMethodSelected : styles.paymentMethodUnselected]}
              onPress={() => setSelectedMethod('card')}
              activeOpacity={0.8}
            >
              <View style={styles.paymentMethodLeft}>
                <View style={styles.paymentMethodIconWrapper}>
                  <Image source={Images.creditcard} style={styles.paymentMethodIcon} resizeMode="contain" />
                </View>
                <View style={styles.paymentMethodTexts}>
                  <Text style={styles.paymentMethodName}>Credit / Debit Cards</Text>
                  <Text style={styles.paymentMethodSubtext}>Visa, Mastercard, RuPay, Amex</Text>
                </View>
              </View>
              <View style={[styles.paymentMethodRadio, selectedMethod === 'card' && styles.paymentMethodRadioSelected]}>
                {selectedMethod === 'card' && <View style={styles.paymentMethodRadioInner} />}
              </View>
            </TouchableOpacity>

            {/* Card details collapsible form */}
            {selectedMethod === 'card' && (
              <View style={styles.cardFormContainer}>
                {/* Simulated payment card brand logos */}
                <View style={styles.cardLogosRow}>
                  <Image source={Images.visa} style={styles.cardLogo} resizeMode="contain" />
                  <Image source={Images.mastercard} style={styles.cardLogo} resizeMode="contain" />
                  <Image source={Images.rupay} style={styles.cardLogo} resizeMode="contain" />
                </View>

                <Text style={styles.inputLabel}>Card Number</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="1234 5678 9012 3456"
                  placeholderTextColor="#8E9A93"
                  keyboardType="numeric"
                  value={cardNumber}
                  onChangeText={handleCardNumberChange}
                />

                <View style={styles.cardRow}>
                  <View style={styles.cardCol}>
                    <Text style={styles.inputLabel}>Expiry Date</Text>
                    <TextInput
                      style={styles.inputField}
                      placeholder="MM / YY"
                      placeholderTextColor="#8E9A93"
                      keyboardType="numeric"
                      value={expiryDate}
                      onChangeText={handleExpiryChange}
                    />
                  </View>
                  <View style={styles.cardColLast}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.inputLabel}>CVV</Text>
                      <TouchableOpacity style={{ marginLeft: 4, marginBottom: 4 }}>
                        <Text style={{ fontSize: 10, color: '#8E9A93', borderWidth: 1, borderColor: '#8E9A93', borderRadius: 6, width: 12, height: 12, textAlign: 'center', lineHeight: 11, fontWeight: 'bold' }}>i</Text>
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      style={styles.inputField}
                      placeholder="123"
                      placeholderTextColor="#8E9A93"
                      keyboardType="numeric"
                      secureTextEntry
                      value={cvv}
                      onChangeText={handleCvvChange}
                    />
                  </View>
                </View>

                <Text style={styles.inputLabel}>Cardholder Name</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Name on Card"
                  placeholderTextColor="#8E9A93"
                  value={cardholderName}
                  onChangeText={setCardholderName}
                />
              </View>
            )}

            {/* UPI Option */}
            <TouchableOpacity
              style={[styles.paymentMethodRow, selectedMethod === 'upi' ? styles.paymentMethodSelected : styles.paymentMethodUnselected]}
              onPress={() => setSelectedMethod('upi')}
              activeOpacity={0.8}
            >
              <View style={styles.paymentMethodLeft}>
                <View style={styles.paymentMethodIconWrapper}>
                  <Image source={Images.upi || Images.verified} style={styles.paymentMethodIcon} resizeMode="contain" />
                </View>
                <View style={styles.paymentMethodTexts}>
                  <Text style={styles.paymentMethodName}>UPI</Text>
                  <Text style={styles.paymentMethodSubtext}>Pay using any UPI app</Text>
                </View>
              </View>
              <View style={[styles.paymentMethodRadio, selectedMethod === 'upi' && styles.paymentMethodRadioSelected]}>
                {selectedMethod === 'upi' && <View style={styles.paymentMethodRadioInner} />}
              </View>
            </TouchableOpacity>

            {/* UPI details collapsible form */}
            {selectedMethod === 'upi' && (
              <View style={styles.cardFormContainer}>
                <Text style={styles.inputLabel}>Select UPI App</Text>
                <View style={styles.upiAppsRow}>
                  <TouchableOpacity
                    style={[styles.upiAppButton, selectedUpiApp === 'gpay' && styles.upiAppButtonSelected]}
                    onPress={() => {
                      setSelectedUpiApp('gpay');
                      setUpiId('');
                    }}
                    activeOpacity={0.7}
                  >
                    <Image source={Images.gpay} style={styles.upiAppLogo} resizeMode="contain" />
                    <Text style={styles.upiAppText}>Google Pay</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.upiAppButton, selectedUpiApp === 'phonepe' && styles.upiAppButtonSelected]}
                    onPress={() => {
                      setSelectedUpiApp('phonepe');
                      setUpiId('');
                    }}
                    activeOpacity={0.7}
                  >
                    <Image source={Images.phonepe} style={styles.upiAppLogo} resizeMode="contain" />
                    <Text style={styles.upiAppText}>PhonePe</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.upiAppButton, selectedUpiApp === 'paytm' && styles.upiAppButtonSelected]}
                    onPress={() => {
                      setSelectedUpiApp('paytm');
                      setUpiId('');
                    }}
                    activeOpacity={0.7}
                  >
                    <Image source={Images.paytm} style={styles.upiAppLogo} resizeMode="contain" />
                    <Text style={styles.upiAppText}>Paytm</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.inputLabel}>Or Enter UPI ID</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="username@bank / mobile@upi"
                  placeholderTextColor="#8E9A93"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={upiId}
                  onChangeText={(text) => {
                    setUpiId(text);
                    setSelectedUpiApp(null);
                  }}
                />
              </View>
            )}

            {/* Net Banking Option */}
            <TouchableOpacity
              style={[styles.paymentMethodRow, selectedMethod === 'netbanking' ? styles.paymentMethodSelected : styles.paymentMethodUnselected]}
              onPress={() => setSelectedMethod('netbanking')}
              activeOpacity={0.8}
            >
              <View style={styles.paymentMethodLeft}>
                <View style={styles.paymentMethodIconWrapper}>
                  <Image source={Images.bank} style={styles.paymentMethodIcon} resizeMode="contain" />
                </View>
                <View style={styles.paymentMethodTexts}>
                  <Text style={styles.paymentMethodName}>Net Banking</Text>
                  <Text style={styles.paymentMethodSubtext}>All major banks supported</Text>
                </View>
              </View>
              <View style={[styles.paymentMethodRadio, selectedMethod === 'netbanking' && styles.paymentMethodRadioSelected]}>
                {selectedMethod === 'netbanking' && <View style={styles.paymentMethodRadioInner} />}
              </View>
            </TouchableOpacity>

            {/* Net Banking details collapsible form */}
            {selectedMethod === 'netbanking' && (
              <View style={styles.cardFormContainer}>
                <Text style={styles.inputLabel}>Popular Banks</Text>
                <View style={styles.banksGrid}>
                  {[
                    { id: 'sbi', name: 'SBI', code: 'SBI' },
                    { id: 'hdfc', name: 'HDFC', code: 'HDFC' },
                    { id: 'icici', name: 'ICICI', code: 'ICICI' },
                    { id: 'axis', name: 'Axis', code: 'AXIS' },
                    { id: 'kotak', name: 'Kotak', code: 'KOTAK' },
                    { id: 'pnb', name: 'PNB', code: 'PNB' },
                  ].map((bank) => (
                    <TouchableOpacity
                      key={bank.id}
                      style={[styles.bankButton, { justifyContent: 'center' }, selectedBank === bank.id && styles.bankButtonSelected]}
                      onPress={() => setSelectedBank(bank.id)}
                      activeOpacity={0.7}
                    >
                      <Text style={[styles.bankText, { textAlign: 'center' }]} numberOfLines={1}>
                        {bank.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Wallets Option */}
            <TouchableOpacity
              style={[styles.paymentMethodRow, selectedMethod === 'wallet' ? styles.paymentMethodSelected : styles.paymentMethodUnselected]}
              onPress={() => setSelectedMethod('wallet')}
              activeOpacity={0.8}
            >
              <View style={styles.paymentMethodLeft}>
                <View style={styles.paymentMethodIconWrapper}>
                  <Image source={Images.wallet} style={styles.paymentMethodIcon} resizeMode="contain" />
                </View>
                <View style={styles.paymentMethodTexts}>
                  <Text style={styles.paymentMethodName}>Wallets</Text>
                  <Text style={styles.paymentMethodSubtext}>Paytm, PhonePe, Google Pay & more</Text>
                </View>
              </View>
              <View style={[styles.paymentMethodRadio, selectedMethod === 'wallet' && styles.paymentMethodRadioSelected]}>
                {selectedMethod === 'wallet' && <View style={styles.paymentMethodRadioInner} />}
              </View>
            </TouchableOpacity>

            {/* Wallets details collapsible form */}
            {selectedMethod === 'wallet' && (
              <View style={styles.cardFormContainer}>
                <Text style={styles.inputLabel}>Select Wallet</Text>
                <View style={styles.banksGrid}>
                  {[
                    { id: 'paytm', name: 'Paytm Wallet', icon: Images.paytm },
                    { id: 'phonepe', name: 'PhonePe Wallet', icon: Images.phonepe },
                    { id: 'amazonpay', name: 'Amazon Pay', icon: Images.wallet },
                  ].map((wallet) => (
                    <TouchableOpacity
                      key={wallet.id}
                      style={[styles.bankButton, selectedWallet === wallet.id && styles.bankButtonSelected]}
                      onPress={() => setSelectedWallet(wallet.id)}
                      activeOpacity={0.7}
                    >
                      {wallet.icon ? (
                        <Image source={wallet.icon} style={styles.walletLogo} resizeMode="contain" />
                      ) : (
                        <View style={styles.bankLogoBadge}>
                          <Text style={styles.bankLogoBadgeText}>W</Text>
                        </View>
                      )}
                      <Text style={styles.bankText} numberOfLines={1}>
                        {wallet.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* EMI / Pay Later Option */}
            <TouchableOpacity
              style={[styles.paymentMethodRow, selectedMethod === 'emi' ? styles.paymentMethodSelected : styles.paymentMethodUnselected]}
              onPress={() => setSelectedMethod('emi')}
              activeOpacity={0.8}
            >
              <View style={styles.paymentMethodLeft}>
                <View style={styles.paymentMethodIconWrapper}>
                  <Image source={Images.calendar} style={styles.paymentMethodIcon} resizeMode="contain" />
                </View>
                <View style={styles.paymentMethodTexts}>
                  <Text style={styles.paymentMethodName}>EMI / Pay Later</Text>
                  <Text style={styles.paymentMethodSubtext}>Easy EMI options available</Text>
                </View>
              </View>
              <View style={[styles.paymentMethodRadio, selectedMethod === 'emi' && styles.paymentMethodRadioSelected]}>
                {selectedMethod === 'emi' && <View style={styles.paymentMethodRadioInner} />}
              </View>
            </TouchableOpacity>

            {/* EMI / Pay Later collapsible form */}
            {selectedMethod === 'emi' && (
              <View style={styles.cardFormContainer}>
                <Text style={styles.inputLabel}>Available EMI & Pay Later Options</Text>
                <View style={{ gap: 8 }}>
                  {[
                    { id: 'simpl', name: 'Simpl Pay Later', details: 'Interest-free up to 15 days' },
                    { id: 'lazypay', name: 'LazyPay', details: 'Buy now, pay later in 15 days' },
                    { id: 'zest', name: 'ZestMoney EMI', details: '3 or 6 months no-cost EMI' },
                  ].map((emi) => (
                    <TouchableOpacity
                      key={emi.id}
                      style={[
                        styles.bankButton,
                        { width: '100%', paddingVertical: 10, justifyContent: 'flex-start' },
                        selectedEmi === emi.id && styles.bankButtonSelected,
                      ]}
                      onPress={() => setSelectedEmi(emi.id)}
                      activeOpacity={0.7}
                    >
                      <View style={styles.bankLogoBadge}>
                        <Text style={styles.bankLogoBadgeText}>{emi.name.substring(0, 2).toUpperCase()}</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.bankText, { fontSize: 12 }]}>{emi.name}</Text>
                        <Text style={{ fontSize: 10, color: '#8E9A93', marginTop: 2 }}>{emi.details}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Your Impact Matters Card */}
          <View style={styles.impactCard}>
            <View style={styles.impactTop}>
              <Image source={Images.rotatehand_tree} style={styles.impactLeftHand} resizeMode="contain" />
              <View style={styles.impactTexts}>
                <Text style={styles.impactTitle}>Your Impact Matters 🌏</Text>
                <Text style={styles.impactDesc}>
                  {qty} Trees will be planted and nurtured to offset {co2} Tons of CO₂ every year.
                </Text>
              </View>
            </View>

            <View style={styles.impactMiniRow}>
              <View style={styles.impactMiniBadge}>
                <Image source={Images.treeIcon} style={styles.impactMiniIcon} resizeMode="contain" />
                <Text style={styles.impactMiniText}>Plant Trees</Text>
              </View>
              <View style={styles.impactMiniBadge}>
                <Image source={Images.leaf} style={styles.impactMiniIcon} resizeMode="contain" />
                <Text style={styles.impactMiniText}>Heal Earth</Text>
              </View>
              <View style={styles.impactMiniBadge}>
                <Image source={Images.group} style={styles.impactMiniIcon} resizeMode="contain" />
                <Text style={styles.impactMiniText}>Inspire Future</Text>
              </View>
            </View>
          </View>

          {/* Safe, Secure & Trusted Badges Section */}
          <View style={styles.trustedSection}>
            <View style={styles.trustedRow}>
              <View style={styles.trustedLeft}>
                <Image source={Images.shield} style={styles.trustedShieldIcon} resizeMode="contain" />
                <View style={styles.trustedTexts}>
                  <Text style={styles.trustedTitle}>Safe, Secure & Trusted</Text>
                  <Text style={styles.trustedDesc} numberOfLines={2}>Your payment information is encrypted.</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Bottom Footer*/}
          <View style={styles.stickyFooter}>
            <View style={styles.footerMain}>
              <View style={styles.footerLeft}>
                <Text style={styles.footerLabel}>Amount Payable</Text>
                <Text style={styles.footerVal}>₹{total.toLocaleString('en-IN')}</Text>
                <TouchableOpacity style={styles.footerDetailsLink} activeOpacity={0.7}>
                  <Text style={styles.footerDetailsText}>View Details</Text>
                  <Text style={styles.footerDetailsArrow}>v</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.payButton}
                activeOpacity={0.8}
              >
                <Image source={Images.lock} style={styles.payButtonIcon} resizeMode="contain" />
                <Text style={styles.payButtonText}>Pay Securely ₹{total.toLocaleString('en-IN')}</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.termsText}>
              By proceeding, you agree to our <Text style={styles.termsLink}>Terms & Conditions</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CompletePaymentScreen;
