import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../comman/Colors';
import FontsSize from '../../../../comman/FontsSize';
import MarginHW from '../../../../comman/MarginHW';
import ImageSize from '../../../../comman/ImageSize';
import HWSize from '../../../../comman/HWSize';
import fonts from '../../../../comman/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.containerBg,
  },
  safeArea: {
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingBottom: MarginHW.MarginH2,
  },
  // Top Header Style
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW16,
    paddingVertical: MarginHW.PaddingH10,
    backgroundColor: 'transparent',
  },
  backButton: {
    width: ImageSize.ImageW25,
    height: ImageSize.ImageH25,
    borderRadius: ImageSize.ImageW25 / 2,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#ECEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  backIcon: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    tintColor: Colors.black,
  },
  headerTitleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: FontsSize.size16,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDarkGreen,
  },
  headerSubtitle: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Regular,
  },
  headerInfoButton: {
    width: ImageSize.ImageW25,
    height: ImageSize.ImageH25,
    borderRadius: ImageSize.ImageW25 / 2,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#ECEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  headerInfoText: {
    fontSize: FontsSize.size14,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.placeholderColor,
  },

  // Hero Section
  heroImageBg: {
    width: '100%',
    minHeight: HWSize.H_Height220,
    backgroundColor: Colors.white,
  },
  heroOverlay: {
    flex: 1,
    top: -10,
    paddingRight: MarginHW.PaddingW10,
    paddingLeft: MarginHW.PaddingW5,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: FontsSize.size26,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDarkGreen,
    lineHeight: 30,
  },
  heroTitleGreen: {
    color: Colors.TextColorLightGreen,
  },
  heroDesc: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Regular,
    color: Colors.black,
    marginTop: MarginHW.MarginH8,
    lineHeight: 18,
    maxWidth: '75%',
  },

  // Main Form Questions Area
  questionsSection: {
    paddingHorizontal: MarginHW.PaddingW10,
    top: -10
  },
  questionsSection1: {
    paddingHorizontal: MarginHW.PaddingW10,
    marginTop: 0,
    top: -10,
  },


  // Question Card
  questionCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: MarginHW.PaddingH16,
    paddingVertical: MarginHW.PaddingH8,
    marginBottom: MarginHW.MarginH8,
    borderWidth: 1,
    borderColor: '#EEF2EF',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 3,
    elevation: 1.5,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH8,
  },
  questionNumberBadge: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    borderRadius: ImageSize.ImageW18 / 2,
    backgroundColor: Colors.TextColorLightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    left: -5,
    zIndex: 10,
  },
  questionNumberText: {
    fontSize: FontsSize.size10,
    color: Colors.white,
    fontFamily: fonts.OpenSans_Bold,
  },
  questionIconContainer: {
    width: ImageSize.ImageW28,
    height: ImageSize.ImageH28,
    borderRadius: 8,
    backgroundColor: Colors.iconBgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW8,
  },
  questionHeaderIcon: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    tintColor: Colors.TextColorLightGreen,
  },
  questionTextContainer: {
    flex: 1,
  },
  questionTitle: {
    fontSize: FontsSize.size14,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textDarkGreen,
  },
  questionSubtitle: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Regular,
    color: Colors.textLabelGrey,
    marginTop: MarginHW.MarginH2,
  },
  questionInfoButton: {
    padding: MarginHW.PaddingH3,
  },
  questionInfoIcon: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    borderRadius: ImageSize.ImageW18 / 2,
    borderWidth: 1.2,
    borderColor: Colors.placeholderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionInfoIconText: {
    fontSize: FontsSize.size10,
    color: Colors.placeholderColor,
    fontFamily: fonts.OpenSans_Bold,
  },

  // Dynamic Options Layout
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ECEFEF',
    backgroundColor: Colors.white,
    paddingVertical: MarginHW.PaddingH6,
    paddingHorizontal: MarginHW.PaddingW6,
    flex: 1,
    marginHorizontal: MarginHW.MarginW4,
    minHeight: 34,
  },
  optionBoxSelected: {
    borderColor: Colors.legacyGreen,
    backgroundColor: Colors.iconBgLight,
  },
  radioDot: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    borderRadius: ImageSize.ImageW14 / 2,
    borderWidth: 1.5,
    borderColor: Colors.placeholderColor,
    marginRight: MarginHW.MarginW6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioDotSelected: {
    borderColor: Colors.legacyGreen,
  },
  radioDotInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.legacyGreen,
  },
  optionText: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_SemiBold,
    color: '#44554C',
  },
  optionTextSelected: {
    color: Colors.legacyGreen,
    fontFamily: fonts.OpenSans_Bold,
  },

  // Special designs for 4-5 options sizes
  optionBoxSmall: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ECEFEF',
    backgroundColor: Colors.white,
    paddingVertical: MarginHW.PaddingH6,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: MarginHW.MarginW3,
    minHeight: 30,
  },
  optionBoxSmallSelected: {
    borderColor: Colors.legacyGreen,
    backgroundColor: Colors.iconBgLight,
  },
  optionTextSmall: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_SemiBold,
    color: '#44554C',
  },
  optionTextSmallSelected: {
    color: Colors.legacyGreen,
    fontFamily: fonts.OpenSans_Bold,
  },

  // Emissions Banner Card
  emissionsCard: {
    backgroundColor: Colors.bannerBgGreen,
    borderWidth: 1,
    borderColor: Colors.bannerBorderGreen,
    borderRadius: 12,
    paddingHorizontal: MarginHW.PaddingH10,
    paddingVertical: MarginHW.PaddingH8,
    marginBottom: MarginHW.MarginH8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emissionsIconContainer: {
    width: ImageSize.ImageW35,
    height: ImageSize.ImageH35,
    borderRadius: ImageSize.ImageW35 / 2,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderGreenLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW12,
  },
  emissionsLeafIcon: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    tintColor: Colors.TextColorLightGreen,
  },
  emissionsTextContainer: {
    flex: 1,
    paddingRight: 75,
  },
  emissionsCardTitle: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_SemiBold,
    color: Colors.textLabelGrey,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  emissionsTitleInfoIcon: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    borderRadius: ImageSize.ImageW14 / 2,
    borderWidth: 1,
    borderColor: Colors.placeholderColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: MarginHW.MarginW4,
  },
  emissionsTitleInfoText: {
    fontSize: FontsSize.size10,
    color: Colors.placeholderColor,
    fontWeight: 'bold',
  },
  emissionsValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: MarginHW.MarginH2,
  },
  emissionsValue: {
    fontSize: FontsSize.size26,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.TextColorLightGreen,
  },
  emissionsUnit: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_SemiBold,
    color: Colors.TextColorLightGreen,
    marginLeft: MarginHW.MarginW4,
  },
  emissionsEquivalentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: MarginHW.MarginH4,
  },
  emissionsEquivalentText: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Regular,
    color: Colors.bannerBenefitLabel,
  },
  emissionsTreeIcon: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    marginHorizontal: MarginHW.MarginW4,
    tintColor: Colors.TextColorLightGreen,
  },
  emissionsForestImage: {
    width: 80,
    height: 48,
    position: 'absolute',
    right: MarginHW.MarginW1,
    bottom: 4,
  },

  // Did You Know Card
  didYouKnowCard: {
    backgroundColor: '#EFF5FD',
    borderRadius: 12,
    paddingHorizontal: MarginHW.PaddingH16,
    paddingVertical: MarginHW.PaddingH6,
    marginBottom: MarginHW.MarginH10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  didYouKnowIconContainer: {
    marginRight: MarginHW.MarginW12,
    marginTop: MarginHW.MarginH2,
  },
  didYouKnowBulbIcon: {
    width: ImageSize.ImageW24,
    height: ImageSize.ImageH24,
    tintColor: '#1E3A8A',
  },
  didYouKnowContent: {
    flex: 1,
    paddingRight: ImageSize.ImageW60, // Space for overlapping plane image
  },
  didYouKnowTitle: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#1E3A8A',
  },
  didYouKnowText: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Regular,
    color: '#1E3A8A',
    marginTop: MarginHW.MarginH4,
    lineHeight: 14,
  },
  didYouKnowPlaneImage: {
    width: ImageSize.ImageW80,
    height: ImageSize.ImageH50,
    position: 'absolute',
    right: 5,
    bottom: 0,
    opacity: 0.8,
  },

  // Bottom Buttons Layout
  footerButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: MarginHW.MarginH10,
  },
  seeCalculationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.legacyGreen,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    marginRight: MarginHW.MarginW8,
    height: HWSize.H_Height48,
    backgroundColor: Colors.white,
  },
  seeCalculationIcon: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    marginRight: MarginHW.MarginW8,
    tintColor: Colors.legacyGreen,
  },
  seeCalculationText: {
    fontSize: FontsSize.size14,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.legacyGreen,
  },
  saveContinueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.TextColorLightGreen,
    borderRadius: 8,
    flex: 1.2,
    marginLeft: MarginHW.MarginW8,
    height: HWSize.H_Height48,
  },
  saveContinueText: {
    fontSize: FontsSize.size14,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.white,
    marginRight: MarginHW.MarginW8,
  },
  saveContinueArrow: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    tintColor: Colors.white,
  },

  // Security and Privacy Banner
  securityBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightgray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: MarginHW.PaddingH10,
    paddingHorizontal: MarginHW.PaddingW12,
  },
  securityIconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  securityIcon: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    tintColor: '#0F5F38',
    marginRight: MarginHW.MarginW8,
  },
  securityText: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Medium,
    color: '#55665C',
    flex: 1,
  },
  securityLeaf: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    tintColor: Colors.placeholderColor,
  },
});
