import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import MarginHW from '../../comman/MarginHW';
import fonts from '../../comman/fonts';
import FontsSize from '../../comman/FontsSize';

const StatePaymentScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'StatePayment'>>();
  const {
    project,
    selectedSpecies,
    quantity,
    recipientName,
    occasion,
    occasionDate,
    email,
    personalMessage,
    sendCertificate,
  } = route.params || {};

  const currentProject = project || {
    name: 'Aravalli Green Belt',
    city: 'Jaipur, Rajasthan',
  };

  const currentSpecies = selectedSpecies || {
    name: 'Neem Tree',
    scientificName: 'Azadirachta indica',
    image: Images.neem_tree,
    co2: '22 KG',
  };

  const treeQuantity = quantity || 1;
  const pricePerTree = 199;
  const totalAmount = treeQuantity * pricePerTree;
  const getDedicationText = () => {
    if (recipientName) {
      return `${occasion || 'Plantation'} – ${recipientName}`;
    }
    return occasion || 'Personal Plantation';
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* Header Section with Forest Background */}
          <ImageBackground
            source={Images.location_hero_bg}
            style={styles.headerSection}
            imageStyle={styles.headerImageStyle}
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
            </View>

            <View style={styles.headerContentRow}>
              <View style={styles.headerTextContainer}>
                <View style={styles.headerTitleRow}>
                  <Text style={styles.headerTitle}>{"Almost There"}</Text>
                  <Image source={Images.leaf} style={{ width: 22, height: 22, marginLeft: 6, tintColor: '#1E6B46' }} resizeMode="contain" />
                </View>
                <Text style={styles.headerSubtitle}>
                  Review your plantation{"\n"}details before proceeding.
                </Text>

                {/* Badges Row */}
                <View style={styles.badgesCapsule}>
                  <View style={styles.badgeItem}>
                    <Image source={Images.lock} style={styles.headerBadgeIcon} resizeMode="contain" />
                    <Text style={styles.headerBadgeText}>100% Secure</Text>
                  </View>
                  <View style={styles.badgeSeparator} />
                  <View style={styles.badgeItem}>
                    <Image source={Images.verified} style={styles.headerBadgeIcon} resizeMode="contain" />
                    <Text style={styles.headerBadgeText}>GPS Verified</Text>
                  </View>
                  <View style={styles.badgeSeparator} />
                  <View style={styles.badgeItem}>
                    <Image source={Images.group} style={styles.headerBadgeIcon} resizeMode="contain" />
                    <Text style={styles.headerBadgeText}>Trusted by 50K+</Text>
                  </View>
                </View>

              </View>
            </View>
          </ImageBackground>

          {/* Plantation Summary Card */}
          <View style={styles.card}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>Plantation Summary</Text>
              <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
            </View>

            <View style={styles.summaryContent}>
              {/* Tree Image */}
              <Image source={currentSpecies.image} style={styles.summaryImage} resizeMode="cover" />

              {/* Details List (Split into 2 Columns) */}
              <View style={styles.summaryDetails}>

                {/* Left Column */}
                <View style={{ flex: 1, marginRight: MarginHW.MarginW10 }}>
                  {/* 1. Tree Species */}
                  <View style={styles.detailRow}>
                    <View style={styles.detailCircle}>
                      <Image source={Images.leaf} style={styles.detailIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.detailTexts}>
                      <Text style={styles.detailLabel}>Tree Species</Text>
                      <Text style={styles.detailValue}>{currentSpecies.name}</Text>
                      <Text style={styles.detailSub}>{currentSpecies.scientificName}</Text>
                    </View>
                  </View>

                  {/* 2. Location */}
                  <View style={styles.detailRow}>
                    <View style={styles.detailCircle}>
                      <Image source={Images.location} style={styles.detailIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.detailTexts}>
                      <Text style={styles.detailLabel}>Location</Text>
                      <Text style={styles.detailValue}>{currentProject.name}</Text>
                      <Text style={styles.detailSub}>{currentProject.city || 'Jaipur, Rajasthan'}</Text>
                    </View>
                  </View>

                  {/* 3. Quantity */}
                  <View style={styles.detailRow}>
                    <View style={styles.detailCircle}>
                      <Text style={{ fontSize: FontsSize.size10, fontFamily: fonts.OpenSans_Bold, color: Colors.legacyGreen }}>#</Text>
                    </View>
                    <View style={styles.detailTexts}>
                      <Text style={styles.detailLabel}>Quantity</Text>
                      <Text style={styles.detailValue}>{treeQuantity} {treeQuantity === 1 ? 'Tree' : 'Trees'}</Text>
                    </View>
                  </View>
                </View>

                {/* Right Column */}
                <View style={{ flex: 1 }}>
                  {/* 4. Project */}
                  <View style={styles.detailRow}>
                    <View style={styles.detailCircle}>
                      <Image source={Images.treeIcon} style={styles.detailIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.detailTexts}>
                      <Text style={styles.detailLabel}>Project</Text>
                      <Text style={styles.detailValue}>Aravalli Restoration</Text>
                    </View>
                  </View>

                  {/* 5. Dedication */}
                  <View style={styles.detailRow}>
                    <View style={styles.detailCircle}>
                      <Image source={Images.gift} style={styles.detailIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.detailTexts}>
                      <Text style={styles.detailLabel}>Dedication</Text>
                      <Text style={styles.detailValue}>{getDedicationText()}</Text>
                      {occasionDate ? <Text style={styles.detailSub}>{occasionDate}</Text> : null}
                    </View>
                  </View>

                  {/* 6. GPS Status */}
                  <View style={styles.detailRow}>
                    <View style={styles.detailCircle}>
                      <Image source={Images.verified} style={styles.detailIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.detailTexts}>
                      <Text style={styles.detailLabel}>GPS Status</Text>
                      <Text style={[styles.detailValue, { color: Colors.legacyGreen }]}>GPS Verified</Text>
                    </View>
                  </View>
                </View>

              </View>

            </View>
          </View>

          {/* Your Impact Preview */}
          <View style={styles.impactPreviewCard}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>Your Impact Preview</Text>
              <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
            </View>

            <View style={styles.impactRow}>
              {/* Left Column */}
              <View style={{ flex: 1 }}>
                {/* 1. Trees planted */}
                <View style={styles.impactItem}>
                  <Image source={Images.treeIcon} style={styles.impactItemIcon} resizeMode="contain" />
                  <Text style={styles.impactItemValue}>{treeQuantity}</Text>
                  <Text style={styles.impactItemLabel}>{treeQuantity === 1 ? 'Tree Planted' : 'Trees Planted'}</Text>
                </View>

                <View style={{ height: MarginHW.MarginH10 }} />

                {/* 2. CO2 offset */}
                <View style={styles.impactItem}>
                  <Image source={Images.co2Cloud} style={styles.impactItemIcon} resizeMode="contain" />
                  <Text style={styles.impactItemValue}>
                    {treeQuantity * (parseFloat(currentSpecies.co2) || 22)} KG
                  </Text>
                  <Text style={styles.impactItemLabel}>CO₂ Offset / Year</Text>
                </View>

                <View style={{ height: MarginHW.MarginH10 }} />

                {/* 3. Water Contribution */}
                <View style={styles.impactItem}>
                  <Image source={Images.drop} style={styles.impactItemIcon} resizeMode="contain" />
                  <Text style={styles.impactItemValue}>Water</Text>
                  <Text style={styles.impactItemLabel}>Conservation Contribution</Text>
                </View>
              </View>

              <View style={styles.impactDivider} />

              {/* Right Column */}
              <View style={{ flex: 1 }}>
                {/* 4. Digital Certificate */}
                <View style={styles.impactItem}>
                  <Image source={Images.certificate} style={styles.impactItemIcon} resizeMode="contain" />
                  <Text style={styles.impactItemValue}>
                    {sendCertificate !== false ? 'Included' : 'Optional'}
                  </Text>
                  <Text style={styles.impactItemLabel}>Digital Certificate Included</Text>
                </View>

                <View style={{ height: MarginHW.MarginH10 }} />

                {/* 5. GPS Tracking */}
                <View style={styles.impactItem}>
                  <Image source={Images.location} style={styles.impactItemIcon} resizeMode="contain" />
                  <Text style={styles.impactItemValue}>Included</Text>
                  <Text style={styles.impactItemLabel}>GPS Tracking Included</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Container for Payment Options & Donation Breakdown */}
          <View style={styles.splitGrid}>

            {/* Payment Options (Full Width) */}
            <View style={styles.rightCol}>
              <View style={styles.cardInner}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionTitle}>Choose Payment Method</Text>
                </View>

                {/* UPI list */}
                <Text style={styles.paymentSubheading}>UPI</Text>
                <View style={styles.logoGrid}>
                  {/* Google Pay */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 10, color: '#4285F4' }}>G</Text>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 8, color: '#34A853' }}>Pay</Text>
                  </TouchableOpacity>
                  {/* PhonePe */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 8, color: '#5f259f' }}>PhonePe</Text>
                  </TouchableOpacity>
                  {/* Paytm */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 8, color: '#00baf2' }}>Paytm</Text>
                  </TouchableOpacity>
                  {/* BHIM */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 8, color: '#f58220' }}>BHIM</Text>
                  </TouchableOpacity>
                </View>

                {/* Cards list */}
                <Text style={styles.paymentSubheading}>Cards</Text>
                <View style={styles.logoGrid}>
                  {/* Visa */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 10, color: '#1A1F71' }}>VISA</Text>
                  </TouchableOpacity>
                  {/* Mastercard */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 8, color: '#EB001B' }}>MasterCard</Text>
                  </TouchableOpacity>
                  {/* RuPay */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 9, color: '#114D9C', fontStyle: 'italic' }}>RuPay</Text>
                  </TouchableOpacity>
                  {/* Amex */}
                  <TouchableOpacity style={styles.logoWrapper} activeOpacity={0.7}>
                    <Text style={{ fontFamily: fonts.OpenSans_Bold, fontSize: 8, color: '#0070CD' }}>AMEX</Text>
                  </TouchableOpacity>
                </View>

                {/* Net Banking & Wallets */}
                <Text style={styles.paymentSubheading}>Net Banking</Text>
                <TouchableOpacity style={styles.listSelectorRow} activeOpacity={0.7}>
                  <View style={styles.listSelectorLeft}>
                    <Image source={Images.bank} style={styles.listSelectorIcon} resizeMode="contain" />
                    <Text style={styles.listSelectorLabel}>All Major Banks</Text>
                  </View>
                  <Text style={styles.listSelectorChevron}>&gt;</Text>
                </TouchableOpacity>

                <Text style={styles.paymentSubheading}>Wallets</Text>
                <TouchableOpacity style={styles.listSelectorRow} activeOpacity={0.7}>
                  <View style={styles.listSelectorLeft}>
                    <Image source={Images.wallet} style={styles.listSelectorIcon} resizeMode="contain" />
                    <Text style={styles.listSelectorLabel}>Paytm, Amazon Pay, Mobikwik</Text>
                  </View>
                  <Text style={styles.listSelectorChevron}>&gt;</Text>
                </TouchableOpacity>

              </View>
            </View>

            {/* Donation Breakdown (Full Width) */}
            <View style={styles.leftCol}>
              <View style={styles.cardInner}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionTitle}>Donation Breakdown</Text>
                </View>

                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownLabel}>Tree Plantation</Text>
                  <Text style={styles.breakdownValue}>₹{totalAmount}</Text>
                </View>

                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownLabel}>GPS Verification</Text>
                  <Text style={[styles.breakdownValue, { color: Colors.legacyGreen }]}>Included</Text>
                </View>

                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownLabel}>3 Years Monitoring</Text>
                  <Text style={[styles.breakdownValue, { color: Colors.legacyGreen }]}>Included</Text>
                </View>

                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownLabel}>Digital Certificate</Text>
                  <Text style={[styles.breakdownValue, { color: Colors.legacyGreen }]}>
                    {sendCertificate !== false ? 'Included' : 'Not Requested'}
                  </Text>
                </View>

                <View style={styles.breakdownDivider} />

                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Total Amount</Text>
                  <Text style={styles.totalValue}>₹{totalAmount}</Text>
                </View>

                {/* Banner bottom */}
                <View style={styles.thankYouBanner}>
                  <Image source={Images.gift} style={styles.thankYouIcon} resizeMode="contain" />
                  <Text style={styles.thankYouText}>
                    You are contributing to a greener tomorrow. Thank you!
                  </Text>
                </View>
              </View>
            </View>

          </View>

          {/* Security Information Row */}
          <View style={styles.trustRow}>
            <View style={styles.trustCol}>
              <Image source={Images.shield} style={styles.trustIcon} resizeMode="contain" />
              <View style={styles.trustTextContainer}>
                <Text style={styles.trustTitle}>256-bit SSL Encrypted</Text>
                <Text style={styles.trustSub}>Your payment information is safe with us</Text>
              </View>
            </View>

            <View style={styles.trustDivider} />

            <View style={styles.trustCol}>
              <Image source={Images.lock} style={styles.trustIcon} resizeMode="contain" />
              <View style={styles.trustTextContainer}>
                <Text style={styles.trustTitle}>100% Secure Payment</Text>
                <Text style={styles.trustSub}>We do not store your card details</Text>
              </View>
            </View>
          </View>

        </ScrollView>

        {/* Sticky Footer Pay Securly */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.paymentButton}
            activeOpacity={0.9}
          >
            <Image
              source={Images.handtree}
              style={styles.paymentButtonLeftImg}
              resizeMode="contain"
            />
            <View style={styles.paymentButtonContent}>
              <Text style={styles.paymentButtonText}>Pay ₹{totalAmount} Securely →</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.termsRow}>
            <Image source={Images.check} style={styles.termsIcon} resizeMode="contain" />
            <Text style={styles.termsText}>
              By proceeding, you agree to our <Text style={styles.termsLink}>Terms & Conditions</Text>
            </Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default StatePaymentScreen;
