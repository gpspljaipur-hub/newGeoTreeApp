import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../comman/Colors';
import FontsSize from '../../comman/FontsSize';
import MarginHW from '../../comman/MarginHW';
import ImageSize from '../../comman/ImageSize';
import HWSize from '../../comman/HWSize';
import fonts from '../../comman/fonts';

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
    paddingBottom: 120,
  },
  headerSection: {
    width: '100%',
    paddingBottom: 15,
  },
  headerTopRow: {
    position: 'absolute',
    top: 30,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
    marginBottom: MarginHW.MarginH10,
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
    fontSize: FontsSize.size20,
    color: Colors.textDarkGreen,
    lineHeight: 26,
  },
  headerSubtitle: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.textMuted,
    marginTop: 2,
    lineHeight: 16,
  },
  headerTitleLeaf: {
    width: 24,
    height: 24,
    marginLeft: 6,
  },

  // Floating Summary Card
  summaryCard: {
    width: '70%',
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#F2F4F3',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryCol: {
    flex: 1,
  },
  summaryColLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 3,
  },
  summaryColRight: {
    paddingLeft: MarginHW.PaddingW8,
    justifyContent: 'center',
  },
  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E7EB',
  },
  thumbnail: {
    width: wp(12),
    height: wp(12),
    borderRadius: 6,
    marginRight: MarginHW.MarginW8,
  },
  summaryTextContainer: {
    flex: 1,
  },
  summaryLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.textLabelGrey,
    textTransform: 'uppercase',
  },
  summaryValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.textDarkGreen,
    marginTop: 1,
  },
  summarySub: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size8,
    color: Colors.textLabelGrey,
    fontStyle: 'italic',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    tintColor: Colors.textLabelGrey,
    marginRight: 2,
  },
  locationText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size8,
    color: Colors.textLabelGrey,
  },
  nativeBadge: {
    backgroundColor: '#EEF6F2',
    paddingHorizontal: MarginHW.PaddingW6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nativeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#056213',
    marginRight: 4,
  },
  nativeText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size10,
    color: Colors.legacyGreen,
  },
  gpsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  gpsIcon: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    tintColor: Colors.legacyGreen,
    marginRight: 2,
  },
  gpsText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size10,
    color: Colors.legacyGreen,
  },

  // Sections
  section: {
    marginTop: MarginHW.MarginH8,
    paddingHorizontal: MarginHW.PaddingW14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH1,
  },
  sectionTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.textDarkGreen,
  },
  sectionTitleLeaf: {
    width: ImageSize.ImageW24,
    height: ImageSize.ImageH24,
    marginLeft: MarginHW.MarginW6,
    tintColor: Colors.legacyGreen,
  },

  optionsContainer: {
    paddingLeft: MarginHW.PaddingW14,
    marginTop: MarginHW.MarginH8,
    overflow: 'visible',
  },
  optionsScroll: {
    paddingTop: 8,
    overflow: 'visible',
  },
  optionCard: {
    width: wp(25),
    height: hp(11.5),
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    paddingHorizontal: MarginHW.PaddingW5,
    marginRight: MarginHW.MarginW6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  optionCardSelected: {
    borderColor: Colors.legacyGreen,
    borderWidth: 1.5,
    backgroundColor: '#EEF6F2',
  },
  optionIcon: {
    width: ImageSize.ImageW24,
    height: ImageSize.ImageH24,
    tintColor: Colors.textLabelGrey,
    marginBottom: MarginHW.MarginH6,
  },
  optionIconSelected: {
    tintColor: Colors.legacyGreen,
  },
  optionTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.textDark,
    textAlign: 'center',
  },
  optionSubtitle: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size8,
    color: Colors.textLabelGrey,
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 10,
  },
  checkBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#056213',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  checkIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.white,
  },

  // Form Section
  formGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  inputCol: {
    width: '48%',
    marginBottom: MarginHW.MarginH12,
  },
  inputColFull: {
    width: '100%',
    marginBottom: MarginHW.MarginH12,
  },
  inputLabelRow: {
    flexDirection: 'row',
    marginBottom: MarginHW.MarginH4,
  },
  inputLabel: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size10,
    color: Colors.textDark,
  },
  requiredStar: {
    color: '#E44746',
    marginLeft: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFBFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    height: 44,
    paddingHorizontal: MarginHW.PaddingW10,
  },
  inputIcon: {
    width: ImageSize.ImageW16,
    height: ImageSize.ImageH16,
    tintColor: Colors.textLabelGrey,
    marginRight: MarginHW.MarginW8,
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size13,
    color: Colors.textDarkGreen,
    padding: 0,
  },
  dropdownTrigger: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    flex: 1,
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size13,
    color: Colors.textDarkGreen,
  },
  dropdownPlaceholder: {
    flex: 1,
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size13,
    color: Colors.placeholderColor,
  },
  dropdownArrow: {
    fontSize: FontsSize.size12,
    color: Colors.textLabelGrey,
  },

  // Personal Message Wrapper
  messageWrapper: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: MarginHW.PaddingW10,
    minHeight: 100,
    justifyContent: 'space-between',
  },
  messageInput: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size13,
    color: Colors.textDarkGreen,
    padding: 0,
    textAlignVertical: 'top',
    height: 70,
  },
  charCounter: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.textLabelGrey,
    textAlign: 'right',
  },

  // Impact Summary Card
  impactCard: {
    backgroundColor: '#EEF6F2',
    borderRadius: 10,
    paddingVertical: MarginHW.PaddingH8,
    paddingHorizontal: MarginHW.PaddingW6,
    borderWidth: 1,
    borderColor: '#DCECE3',
  },
  impactList: {
    marginBottom: MarginHW.MarginH10,
  },
  impactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: MarginHW.PaddingH8,
    borderBottomWidth: 1,
    borderBottomColor: '#DCECE3',
  },
  impactItemLast: {
    borderBottomWidth: 0,
  },
  impactCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW12,
  },
  impactItemIcon: {
    width: ImageSize.ImageW18,
    height: ImageSize.ImageH18,
    tintColor: Colors.legacyGreen,
  },
  impactItemMeta: {
    flex: 1,
  },
  impactItemLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.textLabelGrey,
  },
  impactItemValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size13,
    color: Colors.textDarkGreen,
    marginTop: 1,
  },
  greenBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F3EC',
    borderRadius: 8,
    marginHorizontal: 14,
    paddingHorizontal: MarginHW.PaddingW10,
    paddingVertical: MarginHW.PaddingH14,
    marginTop: MarginHW.MarginH4,
  },
  greenBannerText: {
    flex: 1,
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size13,
    color: Colors.textMuted,
    marginLeft: MarginHW.MarginW6,
    lineHeight: 14,
  },
  greenBannerStrong: {
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.legacyGreen,
  },
  greenBannerIcon: {
    width: ImageSize.ImageW20,
    height: ImageSize.ImageH20,
    tintColor: Colors.legacyGreen,
  },

  // Special Options
  checkboxList: {
    marginTop: MarginHW.MarginH4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: MarginHW.PaddingW3,
    paddingVertical: MarginHW.PaddingH8,

  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: Colors.textLabelGrey,
    marginRight: MarginHW.MarginW10,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.legacyGreen,
    borderColor: Colors.legacyGreen,
  },
  checkboxIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.white,
  },
  checkboxDetails: {
    flex: 1,
  },
  checkboxHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxListIcon: {
    width: ImageSize.ImageW16,
    height: ImageSize.ImageH16,
    tintColor: Colors.legacyGreen,
    marginRight: MarginHW.MarginW6,
  },
  checkboxLabel: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size12,
    color: Colors.textGreenDark,
  },
  checkboxSublabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size11,
    color: Colors.textLabelGrey,
    marginTop: 1,
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: MarginHW.MarginH8,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    height: 38,
    backgroundColor: Colors.white,
  },
  counterButton: {
    width: 36,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonText: {
    fontSize: FontsSize.size18,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.textLabelGrey,
  },
  counterValue: {
    paddingHorizontal: MarginHW.PaddingW12,
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size13,
    color: Colors.textDarkGreen,
  },
  twoColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW14,
    marginTop: MarginHW.MarginH8,
  },
  leftColumn: {
    width: '56%',
  },
  rightColumn: {
    width: '46%',
  },
  messageSection: {
    marginHorizontal: 14,
  },
  specialOptionsSection: {
    width: '49%',
  },

  numberTreesSection: {
    marginTop: MarginHW.MarginH16,
    marginHorizontal: 14
  },
  numberTreesHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH8,
  },
  quickSelectRow: {

    flexDirection: 'row',
    marginTop: MarginHW.MarginH10,
    gap: 6,
  },
  quickSelectBtn: {
    width: Dimensions.get('window').width / 4 - 10,
    height: 36,
    paddingHorizontal: 10,
    marginRight: 4,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickSelectBtnSelected: {
    borderColor: Colors.legacyGreen,
    borderWidth: 1.5,
    backgroundColor: '#EEF6F2',
  },
  quickSelectText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size11,
    color: Colors.textLabelGrey,
  },
  quickSelectTextSelected: {
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.legacyGreen,
  },

  // Sticky Footer
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: Colors.white,
    paddingHorizontal: MarginHW.PaddingW20,
    paddingTop: MarginHW.PaddingH5,
    paddingBottom: MarginHW.PaddingH14,
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
    backgroundColor: '#073E2E', // Dark green matching mockup
    height: 50,
    borderRadius: 10,
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
  secureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: MarginHW.MarginH8,
  },
  secureIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.textLabelGrey,
    marginRight: 4,
  },
  secureText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.textLabelGrey,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: MarginHW.PaddingW20,
    paddingTop: MarginHW.PaddingH20,
    paddingBottom: MarginHW.PaddingH30,
    maxHeight: hp(50),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH16,
  },
  modalTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size16,
    color: Colors.textDarkGreen,
  },
  modalCloseText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.legacyGreen,
  },
  modalItem: {
    paddingVertical: MarginHW.PaddingH12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalItemText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size14,
    color: Colors.textDarkGreen,
  },
});

