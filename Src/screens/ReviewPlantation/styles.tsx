import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../comman/Colors';
import fonts from '../../comman/fonts';
import MarginHW from '../../comman/MarginHW';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFB',
  },
  scrollContent: {
    paddingBottom: 100, // accommodate sticky footer
  },
  headerHeroBg: {
    width: '100%',
    height: 230,
    position: 'relative',
  },
  headerBgImg: {
    width: '100%',
    height: '100%',
  },
  headerTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingW16,
    paddingTop: 25, // More top margin/padding to give it space
    paddingBottom: 16,
  },
  backButton: {
    width: 36,
    height: 36,
    top: -8, // Adjust to align center with larger step circles
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    width: 16,
    height: 16,
    tintColor: Colors.textDark,
  },
  // Stepper styles (5-step layout)
  stepperContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 28, // Increase spacing from back button to stepper
    position: 'relative',
    height: 52,
  },
  stepperLine: {
    position: 'absolute',
    left: 16, // Connect exact center of the first step circle (half of 32px circle)
    right: 16, // Connect exact center of the last step circle (half of 32px circle)
    top: 16, // Center vertically on 32px circle
    height: 1,
    backgroundColor: '#E2ECE5',
    zIndex: 1,
  },
  stepperLineActive: {
    position: 'absolute',
    left: 16,
    right: 16,
    top: 16,
    height: 1,
    backgroundColor: Colors.legacyGreen,
    zIndex: 1.5,
  },
  stepItem: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  stepCircleContainer: {
    position: 'relative',
    width: 32,
    height: 32,
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF', // White background for all steps
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFF2F0', // light grey border outline
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  stepCircleActive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: Colors.legacyGreen, // Green border for active step
  },
  stepCircleCompleted: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFF2F0',
  },
  stepIcon: {
    width: 14,
    height: 14,
    tintColor: '#8E9A93',
  },
  stepIconActive: {
    tintColor: Colors.legacyGreen, // Green active step icon
  },
  stepIconCompleted: {
    width: 14,
    height: 14,
    tintColor: Colors.legacyGreen, // Green completed step icon
  },
  checkmarkBadge: {
    position: 'absolute',
    bottom: -2, // Position at the bottom right of the circle
    right: -2,
    backgroundColor: Colors.TextColorLightGreen, // Rich green background matching layout
    width: 12,
    height: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#FFFFFF',
    zIndex: 3,
  },
  checkmarkBadgeIcon: {
    width: 6,
    height: 6,
    tintColor: '#FFFFFF',
  },
  stepLabel: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: 9.5,
    color: '#8E9A93',
    marginTop: 6,
    textAlign: 'center',
  },
  stepLabelActive: {
    color: Colors.TextColorLightGreen, // Active step label in green
  },
  // Hero section titles
  heroSection: {
    paddingHorizontal: MarginHW.PaddingW16,
    marginTop: 14,
  },
  heroTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDarkGreen,
  },
  heroTitleGreen: {
    color: Colors.TextColorLightGreen,
  },
  heroTitleLeaf: {
    width: 16,
    height: 16,
    marginLeft: 6,
    tintColor: Colors.TextColorLightGreen,
  },
  heroSubtitle: {
    fontSize: 12,
    fontFamily: fonts.OpenSans_Regular,
    color: Colors.black,
    marginTop: 6,
  },
  // Summary card (Neem Tree)
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: MarginHW.PaddingW10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
    borderWidth: 1,
    borderColor: '#EFF2F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  treeImgContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#F3FAF6',
    overflow: 'hidden',
  },
  treeImg: {
    width: '100%',
    height: '100%',
  },
  summaryDivider: {
    width: 1,
    height: 70,
    backgroundColor: '#E2ECE5',
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  detailsCol: {
    flex: 1.4,
    paddingLeft: 10,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  treeTitle: {
    fontSize: 14.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
    marginRight: 6,
  },
  gpsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6EFE8',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2.5,
  },
  gpsBadgeText: {
    fontSize: 7.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
    marginLeft: 2,
  },
  gpsBadgeIcon: {
    width: 8,
    height: 8,
    tintColor: Colors.TextColorLightGreen,
  },
  qtyPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3FAF6',
    borderWidth: 1,
    borderColor: '#D1FAE5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  qtyPillIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.TextColorLightGreen,
    marginRight: 4,
  },
  qtyPillText: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  locationIcon: {
    width: 10,
    height: 10,
    tintColor: '#6B7280',
    marginTop: 2,
    marginRight: 4,
  },
  locationText: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#6B7280',
    lineHeight: 12,
    flex: 1,
  },
  impactCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  impactLabel: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Regular,
    color: '#6B7280',
    textAlign: 'center',
  },
  impactValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  impactValue: {
    fontSize: 11,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
  },
  infoIcon: {
    width: 9,
    height: 9,
    tintColor: Colors.TextColorLightGreen,
    marginLeft: 3,
  },
  // Section layout
  sectionContainer: {
    marginTop: 14,
    paddingHorizontal: MarginHW.PaddingW10,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  sectionTitleIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
    tintColor: Colors.TextColorLightGreen,
  },
  sectionTitle: {
    fontSize: 13.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  // Dedication Card (Unified containing card)
  dedicationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EFF2F0',
    padding: 16,
  },
  dedicationHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dedicationHeaderIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.TextColorLightGreen,
    marginRight: 8,
  },
  dedicationHeaderTitle: {
    fontSize: 13.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  dedicationContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dedicationCol1: {
    flex: 0.8,
  },
  dedicationCol2: {
    flex: 1.2,
  },
  dedicationCol3: {
    flex: 1.6,
  },
  dedicationColLabel: {
    fontSize: 10,
    fontFamily: fonts.OpenSans_Medium,
    color: '#4B5563', // medium-weight gray
    marginBottom: 5,
  },
  dedicationUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dedicationUserIcon: {
    width: 14,
    height: 14,
    tintColor: Colors.TextColorLightGreen,
    marginRight: 6,
  },
  dedicationValue: {
    fontSize: 11.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 0,
    paddingRight: 6,
  },
  quoteIcon: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
    marginRight: 4,
    marginTop: -2,
  },
  messageText: {
    fontSize: 10.5,
    fontFamily: fonts.OpenSans_Medium,
    color: '#374151',
    lineHeight: 14,
    flex: 1,
  },
  dedicationDivider: {
    width: 1,
    height: 55,
    backgroundColor: '#E2ECE5',
    marginHorizontal: 12,
    alignSelf: 'center',
  },
  allocationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  allocationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  allocationUserIcon: {
    width: 12,
    height: 12,
    tintColor: Colors.TextColorLightGreen,
    marginRight: 6,
  },
  allocationName: {
    fontSize: 10.5,
    fontFamily: fonts.OpenSans_Medium,
    color: '#111827',
  },
  allocationDash: {
    fontSize: 10.5,
    color: '#9CA3AF',
    marginHorizontal: 4,
  },
  allocationQty: {
    fontSize: 10.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  viewDetailsLink: {
    fontSize: 10.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
    marginTop: 8,
  },
  // Environmental Impact card layout
  impactCard: {
    backgroundColor: '#f8f8f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6EFE8',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  impactCardTitle: {
    fontSize: 13.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  impactRow: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  impactItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    minWidth: 46,
  },
  impactItemIcon: {
    width: 22,
    height: 22,
    tintColor: Colors.TextColorLightGreen,
    marginBottom: 6,
  },
  impactItemValue: {
    fontSize: 10,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
    textAlign: 'center',
  },
  impactItemLabel: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Medium,
    color: '#374151',
    textAlign: 'center',
    marginTop: 2,
  },
  verticalSeparator: {
    width: 1,
    height: 35,
    backgroundColor: '#E0E6E2',
    alignSelf: 'center',
  },
  // Cost breakdown
  costCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EFF2F0',
    padding: 14,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  costLabel: {
    fontSize: 11.5,
    fontFamily: fonts.OpenSans_Medium,
    color: '#4B5563',
  },
  costValue: {
    fontSize: 11.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  costValueGreen: {
    color: Colors.TextColorLightGreen,
    fontFamily: fonts.OpenSans_Bold,
  },
  costDivider: {
    height: 1,
    backgroundColor: '#EFF5F0',
    marginVertical: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 12,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  totalLabelSub: {
    fontSize: 8.5,
    fontFamily: fonts.OpenSans_Regular,
    color: '#9CA3AF',
    marginTop: 2,
  },
  totalValue: {
    fontSize: 16,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDarkGreen,
  },
  // Payment methods
  paymentSecureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF6F2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  paymentSecureIcon: {
    width: 8,
    height: 8,
    tintColor: Colors.TextColorLightGreen,
  },
  paymentSecureText: {
    fontSize: 7.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
    marginLeft: 3,
  },
  paymentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EFF2F0',
    overflow: 'hidden',
  },
  paymentMethodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3FAF6',
  },
  paymentMethodRowSelected: {
    backgroundColor: '#FAFCFA',
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  radioOuter: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#D1DCD6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioOuterSelected: {
    borderColor: Colors.TextColorLightGreen,
  },
  radioInner: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: Colors.TextColorLightGreen,
  },
  paymentMethodDetails: {
    flex: 1,
  },
  paymentMethodTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodTitle: {
    fontSize: 11.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  paymentMethodCheckBadge: {
    backgroundColor: '#EFF5F0',
    borderRadius: 20,
    width: 11,
    height: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  paymentMethodCheckIcon: {
    width: 7,
    height: 7,
    tintColor: Colors.TextColorLightGreen,
  },
  paymentMethodSubtext: {
    fontSize: 8.5,
    fontFamily: fonts.OpenSans_Regular,
    color: '#9CA3AF',
    marginTop: 2,
  },
  upiLogosRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  upiLogoBox: {
    borderWidth: 1,
    borderColor: '#EFF2F0',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#FFFFFF',
    marginRight: 6,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upiLogoImg: {
    width: 44,
    height: 12,
  },
  upiTextLogo: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
    fontStyle: 'italic',
  },
  cardLogosRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLogoImg: {
    width: 18,
    height: 12,
    marginLeft: 4,
  },
  // Trust banner grid
  trustBanner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#F4F7F4',
    borderWidth: 1,
    borderColor: '#EAF1EC',
    borderRadius: 10,
    marginHorizontal: MarginHW.PaddingW10,
    marginTop: 20,
    padding: 10,
  },
  trustItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  trustIconWrapper: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#E6EFE8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  trustIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.TextColorLightGreen,
  },
  trustTextCol: {
    flex: 1,
  },
  trustLabel: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDark,
  },
  trustDesc: {
    fontSize: 6.5,
    fontFamily: fonts.OpenSans_Regular,
    color: '#6B7280',
    marginTop: 1,
  },
  // Sticky footer
  stickyFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#ECEFEF',
    paddingBottom: 12,
  },
  stickyGreenBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.TextColorGreenDark,
    marginHorizontal: 12,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  stickyPromiseCol: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 12,
  },
  stickyPromiseIcon: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
    marginRight: 8,
  },
  stickyPromiseTitle: {
    fontSize: 9.5,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  stickyPromiseDesc: {
    fontSize: 7.5,
    fontFamily: fonts.OpenSans_Regular,
    color: 'rgba(255, 255, 255, 0.85)',
    marginTop: 1,
  },
  payButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 10.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
  },
  payButtonArrow: {
    fontSize: 10.5,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
    marginLeft: 3,
  },
  footerSecureNoteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  footerSecureNoteIcon: {
    width: 9,
    height: 9,
    tintColor: '#9CA3AF',
    marginRight: 4,
  },
  footerSecureNoteText: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Medium,
    color: '#9CA3AF',
  },
});
