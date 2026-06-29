import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../comman/Colors';
import FontsSize from '../../../comman/FontsSize';
import MarginHW from '../../../comman/MarginHW';
import ImageSize from '../../../comman/ImageSize';
import HWSize from '../../../comman/HWSize';
import fonts from '../../../comman/fonts';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.containerBg,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.containerBg,
  },
  scrollContent: {
    paddingBottom: MarginHW.MarginH100,
  },
  headerSection: {
    width: '100%',
    height: 240,
    paddingBottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImageStyle: {


  },
  headerTopRow: {
    position: 'absolute',
    top: 30,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
    marginBottom: MarginHW.MarginH6,

  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    width: ImageSize.ImageW16,
    height: ImageSize.ImageH16,
    tintColor: Colors.textDark,
  },
  headerContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: MarginHW.MarginW10,
    marginTop: MarginHW.MarginH30,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size24,
    color: Colors.textDarkGreen,
    lineHeight: 28,
  },
  headerSubtitle: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size13,
    color: Colors.textMuted,
    marginTop: MarginHW.MarginH4,
    lineHeight: 18,
  },
  badgesCapsule: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 10,
    paddingHorizontal: MarginHW.PaddingW10,
    paddingVertical: 5,
    marginTop: MarginHW.MarginH10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.95)',
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeSeparator: {
    width: 1,
    height: 12,
    backgroundColor: 'rgba(7, 62, 46, 0.2)',
    marginHorizontal: MarginHW.MarginW8,
  },
  headerBadgeIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.legacyGreen,
    marginRight: 4,
  },
  headerBadgeText: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size10,
    color: Colors.textGreenDark,
  },

  // Floating summary Card
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: MarginHW.PaddingW8,
    paddingHorizontal: MarginHW.PaddingW10,
    marginHorizontal: MarginHW.MarginW10,
    marginTop: -30,
    borderWidth: 1,
    borderColor: '#F2F4F3',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH4,
  },
  sectionTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size15,
    color: Colors.textDarkGreen,
  },
  sectionTitleLeaf: {
    width: 18,
    height: 18,
    marginLeft: 6,
  },
  summaryContent: {
    flexDirection: 'row',

  },
  summaryImage: {
    width: '100%',
    height: Dimensions.get("window").height / 4.8,
    borderRadius: 10,
    marginRight: MarginHW.MarginW12,
  },
  summaryDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  detailRow: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',

  },
  detailCircle: {
    width: 24,
    height: 24,
    borderRadius: 11,
    backgroundColor: '#EEF6F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW8,
    marginTop: 2,
  },
  detailIcon: {
    width: 16,
    height: 16,
    tintColor: Colors.legacyGreen,
  },
  detailTexts: {
    flex: 1,
  },
  detailLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.textLabelGrey,
  },
  detailValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.textDarkGreen,
    marginTop: 1,
  },
  detailSub: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size11,
    color: Colors.textLabelGrey,
    fontStyle: 'italic',
  },
  summaryRightDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: MarginHW.MarginW10,
  },
  gpsVerificationBox: {
    width: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gpsVerifyIcon: {
    width: 30,
    height: 30,
    tintColor: Colors.legacyGreen,
  },
  gpsVerifyTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size9,
    color: Colors.legacyGreen,
    marginTop: 4,
    textAlign: 'center',
  },
  gpsVerifyLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size8,
    color: Colors.textLabelGrey,
    textAlign: 'center',
    marginTop: 2,
  },
  gpsVerifyCheck: {
    width: 14,
    height: 14,
    tintColor: Colors.legacyGreen,
    marginTop: 4,
  },

  // Impact Preview
  impactPreviewCard: {
    backgroundColor: Colors.listBg,
    borderRadius: 10,
    paddingHorizontal: MarginHW.PaddingW3,
    marginHorizontal: MarginHW.MarginW10,
    marginTop: MarginHW.MarginH10,
    borderWidth: 1,
    borderColor: '#F2F4F3',
  },
  impactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: MarginHW.MarginH4,
  },
  impactItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  impactItemIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.legacyGreen,
    marginBottom: 6,
  },
  impactItemValue: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size12,
    color: Colors.textDarkGreen,
    textAlign: 'center',
  },
  impactItemLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: 8,
    color: Colors.textLabelGrey,
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 8,
  },
  impactDivider: {
    width: 1,
    height: 45,
    backgroundColor: '#E5E7EB',
  },

  // Two columns on grid - changed to stacked vertical cards
  splitGrid: {
    marginHorizontal: MarginHW.MarginW10,
    marginTop: MarginHW.MarginH6,
  },
  leftCol: {
    marginTop: MarginHW.MarginH12,
  },
  rightCol: {
  },
  cardInner: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: MarginHW.PaddingW12,
    borderWidth: 1,
    borderColor: '#F2F4F3',
  },

  // Donation Breakdown
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: MarginHW.PaddingH6,
  },
  breakdownLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.textLabelGrey,
  },
  breakdownValue: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size12,
    color: Colors.textDarkGreen,
  },
  breakdownDivider: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginVertical: MarginHW.MarginH8,
    borderRadius: 1,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  totalLabel: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.textDarkGreen,
  },
  totalValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size16,
    color: Colors.legacyGreen,
  },
  thankYouBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF6F2',
    borderRadius: 8,
    padding: MarginHW.PaddingW8,
    marginTop: MarginHW.MarginH12,
  },
  thankYouIcon: {
    width: 16,
    height: 16,
    tintColor: Colors.legacyGreen,
    marginRight: 6,
  },
  thankYouText: {
    flex: 1,
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size10,
    color: Colors.legacyGreen,
    lineHeight: 12,
  },

  // Payment Methods
  paymentSubheading: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.textLabelGrey,
    textTransform: 'uppercase',
    marginBottom: MarginHW.MarginH3,
    marginTop: MarginHW.MarginH6,
  },
  logoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginBottom: MarginHW.MarginH10,
  },
  logoWrapper: {
    width: '23%',
    aspectRatio: 1.5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2%',
    // marginBottom: 6,
    backgroundColor: Colors.white,
  },
  logoImage: {
    width: '80%',
    height: '60%',
  },
  listSelectorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: MarginHW.PaddingW10,
    paddingVertical: 8,
    // marginBottom: MarginHW.MarginH8,
    backgroundColor: '#FAFBFB',
  },
  listSelectorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listSelectorIcon: {
    width: 14,
    height: 14,
    tintColor: Colors.textLabelGrey,
    marginRight: MarginHW.MarginW6,
  },
  listSelectorLabel: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size11,
    color: Colors.textGreenDark,
  },
  listSelectorChevron: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.textLabelGrey,
  },

  // Security Trust Section
  trustRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEF6F2',
    borderWidth: 1,
    borderColor: '#DCECE3',
    borderRadius: 12,
    padding: MarginHW.PaddingW8,
    marginHorizontal: MarginHW.MarginW20,
    marginTop: MarginHW.MarginH12,
  },
  trustCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  trustIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.legacyGreen,
    marginRight: 6,
  },
  trustTextContainer: {
    flex: 1,
  },
  trustTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size10,
    color: Colors.textDarkGreen,
  },
  trustSub: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size9,
    color: Colors.textLabelGrey,
    marginTop: 1,
  },
  trustDivider: {
    width: 1,
    backgroundColor: '#DCECE3',
    marginHorizontal: 4,
  },

  // Sticky Footer
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: Colors.white,
    paddingHorizontal: MarginHW.PaddingW10,
    paddingTop: MarginHW.PaddingH5,
    paddingBottom: MarginHW.PaddingH10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 5,
  },
  paymentButton: {
    backgroundColor: '#073E2E',
    height: 52,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: MarginHW.PaddingW20,
    position: 'relative',
    shadowColor: '#073E2E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  paymentButtonLeftImg: {
    position: 'absolute',
    bottom: -15,
    left: -10,
    width: ImageSize.ImageW65,
    height: ImageSize.ImageH65,
    transform: [{ rotate: '-175deg' }, { scaleY: -1 }],
  },
  paymentButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentButtonText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size16,
    color: Colors.white,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: MarginHW.MarginH8,
  },
  termsIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.legacyGreen,
    marginRight: 4,
  },
  termsText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size9,
    color: Colors.textLabelGrey,
  },
  termsLink: {
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.legacyGreen,
    textDecorationLine: 'underline',
  },
  gpsBadgeSide: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF6F2',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 6,
  },
  gpsBadgeSideIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.legacyGreen,
    marginRight: 2,
  },
  gpsBadgeSideText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size8,
    color: Colors.legacyGreen,
  },
});
