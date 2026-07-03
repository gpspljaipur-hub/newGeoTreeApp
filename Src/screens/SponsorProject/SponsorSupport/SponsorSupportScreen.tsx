import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Images from '../../../constants/images';
import { styles } from './styles';
import MarginHW from '../../../comman/MarginHW';
import fonts from '../../../comman/fonts';

const SponsorSupportScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const scrollViewRef = useRef<ScrollView>(null);

  // Route parameters with fallback defaults
  const initialProject = route.params?.project ?? {
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

  const initialLevel = route.params?.selectedLevel ?? {
    id: 'green_supporter',
    name: 'Green Supporter',
    amount: 500,
    amountText: '₹500',
    desc: 'Helps plant approximately 10 trees',
    badge: 'Good start!',
  };

  // State Management
  const [selectedProject, setSelectedProject] = useState(initialProject);
  const [selectedAmount, setSelectedAmount] = useState<number>(initialLevel.amount);
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(
    ![500, 2000, 5000, 10000].includes(initialLevel.amount)
  );
  const [customAmountText, setCustomAmountText] = useState<string>(
    ![500, 2000, 5000, 10000].includes(initialLevel.amount) ? String(initialLevel.amount) : ''
  );

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [receiveUpdates, setReceiveUpdates] = useState(true);

  // Input Focus highlights
  const [focusedField, setFocusedField] = useState<'name' | 'email' | 'mobile' | 'custom' | null>(null);

  // Payment Method Selection
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking' | 'wallet' | 'emi'>('card');

  // Predefined sponsorship options
  const amountOptions = [
    { value: 500, label: '₹500', trees: 10 },
    { value: 2000, label: '₹2,000', trees: 50 },
    { value: 5000, label: '₹5,000', trees: 125 },
    { value: 10000, label: '₹10,000', trees: 250 },
  ];

  // Dynamic Metrics Calculation
  const getTreesForAmount = (amount: number) => {
    if (amount === 500) return 10;
    if (amount === 2000) return 50;
    if (amount === 5000) return 125;
    if (amount === 10000) return 250;
    return Math.max(1, Math.round(amount / 50));
  };

  const treesCount = getTreesForAmount(selectedAmount);
  const co2Offset = (treesCount * 0.025).toFixed(2);
  const progressPercent = Math.min(100, Math.round((selectedProject.planted / selectedProject.goal) * 100));

  // Determine Level Name
  const getLevelName = (amount: number) => {
    if (amount <= 500) return 'Green Supporter';
    if (amount <= 2000) return 'Community Sponsor';
    if (amount <= 5000) return 'Project Partner';
    return 'Ecosystem Champion';
  };

  // Change amount actions
  const handleSelectPredefinedAmount = (amount: number) => {
    Keyboard.dismiss();
    setIsCustomAmount(false);
    setSelectedAmount(amount);
  };

  const handleCustomAmountChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    setCustomAmountText(cleaned);
    const amountVal = Number(cleaned);
    setSelectedAmount(amountVal > 0 ? amountVal : 0);
  };

  const handleSelectCustomClick = () => {
    setIsCustomAmount(true);
    const amountVal = Number(customAmountText);
    setSelectedAmount(amountVal > 0 ? amountVal : 0);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Screen Header */}
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
              <Text style={styles.headerTitle}>Support {selectedProject.name.split(' ')[0]} Project</Text>
            </View>
            <Text style={styles.headerSubtitle}>You're one step closer to creating a lasting impact</Text>
          </View>

          <View style={styles.headerRightSecure}>
            <Image source={Images.shield} style={styles.headerSecureIcon} resizeMode="contain" />
            <View style={styles.headerSecureTextCol}>
              <Text style={styles.headerSecureTextBold}>100% Secure</Text>
              <Text style={styles.headerSecureTextDesc}>Transaction</Text>
            </View>
          </View>
        </View>

        {/* Main Project Details Card */}
        <View style={styles.projectCard}>
          <View style={styles.projectImageContainer}>
            <Image source={selectedProject.image} style={styles.projectImage} resizeMode="cover" />
            <View style={styles.gpsBadge}>
              <Image source={Images.location} style={styles.gpsIcon} resizeMode="contain" />
              <Text style={styles.gpsText}>GPS VERIFIED</Text>
            </View>
          </View>

          <View style={styles.projectInfo}>
            <View style={styles.projectHeaderRow}>
              <Text style={styles.projectName}>{selectedProject.name}</Text>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryBadgeText}>{selectedProject.badge}</Text>
              </View>
            </View>

            <View style={styles.locationRow}>
              <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" />
              <Text style={styles.locationText}>{selectedProject.location}</Text>
            </View>

            <Text style={styles.projectDesc}>{selectedProject.desc}</Text>

            {/* Progress */}
            <View style={styles.progressWrapper}>
              <View style={styles.progressLabelRow}>
                <Image source={Images.treeIcon || Images.plant} style={styles.progressTreeIcon} resizeMode="contain" />
                <Text style={styles.progressLabelText}>
                  {selectedProject.planted?.toLocaleString()}{' '}
                  <Text style={styles.progressLabelNormal}>/ {selectedProject.goal?.toLocaleString()} Trees Planted</Text>
                </Text>
                <Text style={styles.progressPercentText}>{progressPercent}%</Text>
              </View>
              <View style={styles.progressBarTrack}>
                <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
              </View>
            </View>
          </View>
        </View>

        {/* 4 Stats Chips */}
        <View style={styles.statsGrid}>
          <View style={styles.statChip}>
            <View style={styles.statIconContainer}>
              <Image source={Images.calendar} style={styles.statIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statVal}>{selectedProject.daysLeft}</Text>
            <Text style={styles.statLabel}>Days Left</Text>
          </View>

          <View style={styles.statChip}>
            <View style={styles.statIconContainer}>
              <Image source={Images.group} style={styles.statIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statVal} numberOfLines={1}>{selectedProject.ngoPartner.split(' ')[0]}</Text>
            <Text style={styles.statLabel}>NGO Partner</Text>
          </View>

          <View style={styles.statChip}>
            <View style={styles.statIconContainer}>
              <Image source={Images.treeIcon} style={styles.statIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statVal}>{(selectedProject.goal / 1000).toFixed(0)}K</Text>
            <Text style={styles.statLabel}>Tree Goal</Text>
          </View>

          <View style={styles.statChip}>
            <View style={styles.statIconContainer}>
              <Image source={Images.location} style={styles.statIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statVal}>GPS</Text>
            <Text style={styles.statLabel}>Verified</Text>
          </View>
        </View>

        {/* Your Impact Preview Section */}
        <View style={styles.impactPreviewCard}>
          <Text style={styles.sectionTitle}>Your Impact</Text>
          {/* <Text style={styles.sectionSubtitle}>Based on your selected support</Text> */}

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
                <Image source={Images.certificateIcon} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={[styles.impactValue, { color: '#111827', fontSize: 10, fontFamily: fonts.OpenSans_SemiBold }]}>Digital Certificate</Text>
              <Text style={[styles.impactLabel, { color: '#111827', fontSize: 10 }]}>of Sponsorship</Text>
            </View>

            <View style={styles.impactDivider} />

            <View style={styles.impactColumn}>
              <View style={styles.impactIconCircle}>
                <Image source={Images.location} style={styles.impactIcon} resizeMode="contain" />
              </View>
              <Text style={[styles.impactValue, { color: '#111827', fontSize: 10, fontFamily: fonts.OpenSans_SemiBold }]}>GPS Verified</Text>
              <Text style={[styles.impactLabel, { color: '#111827', fontSize: 10 }]}>Project Location</Text>
            </View>
          </View>
        </View>

        {/* 1. Review Your Selection */}
        <Text style={[styles.sectionTitle, { marginLeft: MarginHW.MarginW10, marginBottom: MarginHW.MarginH6 }]}>1. Review Your Selection</Text>

        {/* Selection Card (Combined) */}
        <View style={styles.reviewCard}>
          {/* Level Row */}
          <View style={styles.reviewRow}>
            <View style={styles.selectionLeft}>
              <View style={styles.selectionThumbContainer}>
                <Image source={Images.plant} style={styles.selectionThumb} resizeMode="contain" />
              </View>
              <View style={styles.selectionTextContainer}>
                <Text style={styles.selectionLabel}>Sponsorship Level</Text>
                <Text style={styles.selectionValue}>{getLevelName(selectedAmount)}</Text>
                <Text style={styles.selectionDesc}>Helps plant approximately {treesCount} trees</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.changeButton} activeOpacity={0.7}>
              <Image source={Images.edit} style={styles.changeButtonIcon} resizeMode="contain" />
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.reviewDivider} />

          {/* Project Row */}
          <View style={styles.reviewRow}>
            <View style={styles.selectionLeft}>
              <View style={styles.selectionTextContainer}>
                <Text style={styles.selectionLabel}>Supporting Project</Text>
                <Text style={[styles.selectionValue, { color: '#111827' }]}>{selectedProject.name}, {selectedProject.location}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.changeButton}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('SponsorProject')}
            >
              <Image source={Images.edit} style={styles.changeButtonIcon} resizeMode="contain" />
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 2. Choose Contribution Amount */}
        <Text style={[styles.sectionTitle, { marginLeft: MarginHW.MarginW10, }]}>2. Choose Contribution Amount</Text>
        <Text style={[styles.sectionSubtitle, { marginLeft: MarginHW.MarginW10, }]}>Select a recommended amount or enter your own</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.amountGridScroll}
        >
          {amountOptions.map((opt) => {
            const isSelected = !isCustomAmount && selectedAmount === opt.value;
            return (
              <TouchableOpacity
                key={opt.value}
                style={[styles.amountCard, isSelected && styles.amountCardSelected]}
                activeOpacity={0.85}
                onPress={() => handleSelectPredefinedAmount(opt.value)}
              >
                <Text style={[styles.amountCardValue, isSelected && styles.amountCardSelectedText]}>
                  {opt.label}
                </Text>
                <Text style={[styles.amountCardTrees, isSelected && styles.amountCardSelectedTrees]}>
                  {opt.trees} Trees
                </Text>

                {isSelected && (
                  <View style={styles.tickBadge}>
                    <Image source={Images.check} style={styles.tickIcon} resizeMode="contain" />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
          {/* Other amount button */}
          <TouchableOpacity
            style={[styles.amountCard, isCustomAmount && styles.amountCardSelected]}
            activeOpacity={0.85}
            onPress={handleSelectCustomClick}
          >
            <Text style={[styles.amountCardValue, isCustomAmount && styles.amountCardSelectedText, { color: isCustomAmount ? '#1A6836' : '#111827' }]}>
              Other
            </Text>
            <Text style={[styles.amountCardTrees, isCustomAmount && styles.amountCardSelectedTrees, { color: isCustomAmount ? '#1A6836' : '#111827' }]}>
              Amount
            </Text>

            {isCustomAmount && (
              <View style={styles.tickBadge}>
                <Image source={Images.check} style={styles.tickIcon} resizeMode="contain" />
              </View>
            )}
          </TouchableOpacity>
        </ScrollView>

        {/* Custom amount text input (visible when Custom is selected) */}
        {isCustomAmount && (
          <View style={styles.otherAmountContainer}>
            <View style={[styles.otherAmountWrapper, focusedField === 'custom' && styles.otherAmountWrapperSelected]}>
              <Text style={styles.otherAmountCurrency}>₹</Text>
              <TextInput
                style={styles.otherAmountInput}
                placeholder="Enter custom contribution amount"
                placeholderTextColor="#8E9A93"
                keyboardType="numeric"
                value={customAmountText}
                onChangeText={handleCustomAmountChange}
                onFocus={() => setFocusedField('custom')}
                onBlur={() => setFocusedField(null)}
              />
            </View>
          </View>
        )}

        {/* Every Contribution helps banner */}
        <View style={styles.alertGreenBanner}>
          <Image source={Images.leaf} style={styles.alertGreenIcon} resizeMode="contain" />
          <Text style={styles.alertGreenText}>
            Every contribution helps. You will receive regular updates on the project progress.
          </Text>
        </View>

        {/* Details & Payment Methods Grid wrapper */}
        <View style={styles.formContainer}>
          {/* 3. Add Your Details */}
          <View style={styles.detailsCard}>
            <Text style={styles.formTitle}>3. Add Your Details</Text>

            {/* Full Name */}
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <View style={[styles.inputWrapper, focusedField === 'name' && styles.inputWrapperActive]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your full name"
                  placeholderTextColor="#8E9A93"
                  value={fullName}
                  onChangeText={setFullName}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  autoCapitalize="words"
                />
              </View>
            </View>

            {/* Email Address */}
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <View style={[styles.inputWrapper, focusedField === 'email' && styles.inputWrapperActive]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your email"
                  placeholderTextColor="#8E9A93"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Mobile Number */}
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <View style={[styles.inputWrapper, focusedField === 'mobile' && styles.inputWrapperActive]}>
                <View style={styles.phonePrefixBox}>
                  <Text style={styles.flagIcon}>🇮🇳</Text>
                  <Text style={styles.phonePrefixText}>+91</Text>
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter mobile number"
                  placeholderTextColor="#8E9A93"
                  keyboardType="numeric"
                  maxLength={10}
                  value={mobileNumber}
                  onChangeText={(val) => setMobileNumber(val.replace(/\D/g, ''))}
                  onFocus={() => setFocusedField('mobile')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Checkbox for updates */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.checkboxRow}
              onPress={() => setReceiveUpdates(!receiveUpdates)}
            >
              <View style={[styles.checkboxSquare, receiveUpdates && styles.checkboxSquareChecked]}>
                {receiveUpdates && <Image source={Images.check} style={styles.checkboxCheckIcon} resizeMode="contain" />}
              </View>
              <View style={styles.checkboxLabelCol}>
                <Text style={styles.checkboxLabelText}>I would like to receive updates on this project</Text>
                <Text style={styles.checkboxDescText}>You can change this preference anytime.</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* 4. Select Payment Method */}
          <View style={styles.detailsCard}>
            <Text style={styles.formTitle}>4. Select Payment Method</Text>

            {/* Credit / Debit Card */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={[styles.paymentMethodRow, paymentMethod === 'card' && styles.paymentMethodRowSelected]}
              onPress={() => setPaymentMethod('card')}
            >
              <View style={styles.methodInfoContainer}>
                <View style={styles.methodIconCircle}>
                  <Image source={Images.creditcard} style={styles.methodLogoImg} resizeMode="contain" />
                </View>
                <View>
                  <Text style={styles.methodTitle}>Credit / Debit Card</Text>
                  <Text style={styles.methodDesc}>Visa, Mastercard, Rupay, Amex</Text>
                </View>
              </View>
              <View style={[styles.radioButtonOuter, paymentMethod === 'card' && styles.radioButtonOuterSelected]}>
                {paymentMethod === 'card' && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>

            {/* UPI */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={[styles.paymentMethodRow, paymentMethod === 'upi' && styles.paymentMethodRowSelected]}
              onPress={() => setPaymentMethod('upi')}
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
              <View style={[styles.radioButtonOuter, paymentMethod === 'upi' && styles.radioButtonOuterSelected]}>
                {paymentMethod === 'upi' && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>

            {/* Netbanking */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={[styles.paymentMethodRow, paymentMethod === 'netbanking' && styles.paymentMethodRowSelected]}
              onPress={() => setPaymentMethod('netbanking')}
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
              <View style={[styles.radioButtonOuter, paymentMethod === 'netbanking' && styles.radioButtonOuterSelected]}>
                {paymentMethod === 'netbanking' && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>

            {/* Wallets */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={[styles.paymentMethodRow, paymentMethod === 'wallet' && styles.paymentMethodRowSelected]}
              onPress={() => setPaymentMethod('wallet')}
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
              <View style={[styles.radioButtonOuter, paymentMethod === 'wallet' && styles.radioButtonOuterSelected]}>
                {paymentMethod === 'wallet' && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>

            {/* EMI / Pay Later */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={[styles.paymentMethodRow, paymentMethod === 'emi' && styles.paymentMethodRowSelected]}
              onPress={() => setPaymentMethod('emi')}
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
              <View style={[styles.radioButtonOuter, paymentMethod === 'emi' && styles.radioButtonOuterSelected]}>
                {paymentMethod === 'emi' && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Encryption/Security disclaimer card */}
        <View style={styles.securityLogosCard}>
          <View style={styles.securityTextRow}>
            <Image source={Images.shield} style={styles.securityTextIcon} resizeMode="contain" />
            <Text style={styles.securityTextTitle}>Your payment is safe and secure</Text>
          </View>
          <Text style={styles.securityTextDesc}>
            We use industry-standard encryption to protect your information.
          </Text>

          <View style={styles.partnerBadgesRow}>
            <View style={styles.partnerTextBadge}>
              <Text style={styles.partnerTextLabel}>PCI DSS</Text>
            </View>
            <View style={styles.partnerTextBadge}>
              <Text style={styles.partnerTextLabel}>Razorpay</Text>
            </View>
            <View style={styles.partnerTextBadge}>
              <Text style={styles.partnerTextLabel}>80G TAX BENEFIT</Text>
            </View>
          </View>
        </View>
        {/* Bottom floating bar inside ScrollView */}
        <View style={styles.bottomFloatingBar}>
          <View style={styles.bottomSummaryCard}>
            <Image source={Images.rotatehand_tree} style={styles.bottomThumbImg} resizeMode="contain" />

            <View style={styles.bottomTextCol}>
              <Text style={styles.bottomSupportingLabel}>You are supporting</Text>
              <Text style={styles.bottomProjectName} numberOfLines={1}>
                {selectedProject.name}
              </Text>
            </View>

            <View style={styles.bottomDivider} />

            <View style={styles.bottomAmountCol}>
              <Text style={styles.bottomAmountLabel}>Amount</Text>
              <Text style={styles.bottomAmountVal}>₹{selectedAmount.toLocaleString('en-IN')}</Text>
              <Text style={styles.bottomAmountQty}>({treesCount} Trees Approx.)</Text>
            </View>
          </View>

          <View style={styles.bottomButtonBox}>
            <TouchableOpacity
              style={styles.paySecurelyButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('SponsorPayment')}
            >
              <Text style={styles.payButtonText}>Proceed to Payment</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', marginTop: 4 }}>
              <Image source={Images.lock} style={styles.bottomRedirectIcon} resizeMode="contain" />
              <Text style={styles.bottomRedirectText}>Secure Checkout</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SponsorSupportScreen;
