import { StyleSheet } from 'react-native';
import { Colors } from '../../comman/Colors';
import FontsSize from '../../comman/FontsSize';
import MarginHW from '../../comman/MarginHW';
import ImageSize from '../../comman/ImageSize';
import HWSize from '../../comman/HWSize';
import fonts from '../../comman/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFB',
  },
  scrollView: {
    flex: 1,
  },
  bottomBanner: {
    backgroundColor: Colors.bannerBg,
    borderWidth: 1,
    borderColor: Colors.bannerBg,
    borderRadius: 18,
    marginHorizontal: MarginHW.MarginW16,
    paddingVertical: 0,
    paddingRight: MarginHW.PaddingW12,
    paddingLeft: MarginHW.PaddingW3,
    flexDirection: 'row',
    alignItems: 'center',
    height: ImageSize.ImageH60,
    overflow: 'hidden',
  },

  bannerLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },

  bannerHandImage: {
    width: ImageSize.ImageW75,
    height: '100%',
  },

  bannerTextContainer: {
    flex: 1,
    flexShrink: 1,
    justifyContent: 'center',
    paddingLeft: MarginHW.PaddingW8,
  },

  bannerTextTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.black,
  },

  bannerTextDesc: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size9,
    color: Colors.bannerTextDesc,
    marginTop: MarginHW.MarginH2,
  },

  benefitsBanner: {
    backgroundColor: Colors.bannerBg,
    borderWidth: 1,
    borderColor: Colors.bannerBg,
    borderRadius: 18,
    marginTop: MarginHW.MarginH2,
    marginHorizontal: MarginHW.MarginW16,
    marginBottom: 0,
    paddingVertical: MarginHW.PaddingH10,
    paddingHorizontal: MarginHW.PaddingW8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bannerRightSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  benefitItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: MarginHW.PaddingW3,
  },
  benefitIcon: {
    width: ImageSize.ImageW20,
    height: ImageSize.ImageH20,
    tintColor: Colors.tint,
    marginBottom: MarginHW.MarginH3,
  },

  benefitLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.black,
    textAlign: 'center',
  },

  benefitValue: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.tint,
    textAlign: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW20,
    paddingBottom: MarginHW.PaddingH24,
    paddingTop: MarginHW.PaddingH10,
    backgroundColor: Colors.lightgray,

  },
  footerTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1.3,
    marginRight: MarginHW.MarginW8,
  },
  footerCheckIconContainer: {
    width: ImageSize.ImageH16,
    height: ImageSize.ImageH16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: Colors.tint,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW4,
  },
  footerCheckIcon: {
    width: ImageSize.ImageH20,
    height: ImageSize.ImageH20,
    tintColor: Colors.tint,
    marginRight: MarginHW.MarginW8,
  },
  footerText: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size10,
    color: Colors.footertextgray,
    flex: 1,
  },
  continueButton: {
    flex: 1,
    backgroundColor: Colors.continue,
    height: ImageSize.ImageH40,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.btnShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  continueText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size16,
    color: Colors.white,
    marginRight: MarginHW.MarginW6,
  },
  continueArrow: {
    width: ImageSize.ImageH14,
    height: ImageSize.ImageH14,
    tintColor: Colors.white,
  },
  scrollContainer: {
    paddingBottom: MarginHW.PaddingH20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW16,
    paddingTop: MarginHW.PaddingH10,
    paddingBottom: MarginHW.PaddingH10,
    backgroundColor: '#FAFBFB',
  },
  backButton: {
    padding: MarginHW.PaddingW8,
  },
  backIcon: {
    width: ImageSize.ImageW20,
    height: ImageSize.ImageH20,
    tintColor: Colors.black,
  },
  headerTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size16,
    color: Colors.black,
  },
  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: MarginHW.PaddingW12,
    paddingVertical: MarginHW.PaddingH5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8EFEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  coinIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW6,
  },
  coinIcon: {
    width: 14,
    height: 14,
    tintColor: Colors.white,
  },
  coinTextContainer: {
    alignItems: 'flex-start',
  },
  coinAmount: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.black,
    lineHeight: 14,
  },
  coinLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: 8,
    color: Colors.bannerTextDesc,
    lineHeight: 10,
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingW16,
    marginVertical: MarginHW.MarginH16,
    position: 'relative',
  },
  stepperLine: {
    position: 'absolute',
    left: MarginHW.PaddingW30,
    right: MarginHW.PaddingW30,
    top: 14,
    height: 2,
    backgroundColor: '#E0E5E2',
    zIndex: 1,
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
    zIndex: 2,
  },
  stepCircle: {
    width: ImageSize.ImageH22,
    height: ImageSize.ImageH22,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH5,
  },
  stepCircleActive: {
    backgroundColor: Colors.tint,
  },
  stepCircleInactive: {
    backgroundColor: '#D1DCD6',
  },
  stepNumber: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.white,
  },
  stepLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    textAlign: 'center',
  },
  stepLabelActive: {
    color: Colors.tint,
    fontFamily: fonts.OpenSans_SemiBold,
  },
  stepLabelInactive: {
    color: '#8E9A93',
  },
  heroCard: {
    marginHorizontal: MarginHW.MarginW16,
    marginBottom: MarginHW.MarginH40,
    borderRadius: 24,
    overflow: 'visible',
    backgroundColor: Colors.white,
  },

  heroImage: {
    width: '100%',
    height: HWSize.H_Height250,
    justifyContent: 'space-between',
  },

  heroContent: {
    flex: 1,
    paddingHorizontal: MarginHW.PaddingW20,
    paddingTop: MarginHW.PaddingH16,
    paddingBottom: MarginHW.PaddingH50,
  },

  stateCard: {
    paddingVertical: MarginHW.PaddingH8,
    alignSelf: 'flex-start',
    marginLeft: -MarginHW.MarginW6,
    marginTop: -MarginHW.MarginH4,
  },

  stateCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stateIconContainer: {
    width: ImageSize.ImageW50,
    height: ImageSize.ImageH50,
    borderRadius: 20,
    backgroundColor: Colors.stateIconBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW8,
  },

  stateIcon: {
    width: ImageSize.ImageW30,
    height: ImageSize.ImageH30,
    tintColor: Colors.tint,
  },

  stateTextContainer: {
    justifyContent: 'center',
  },

  stateLabel: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size14,
    color: Colors.stateLabelText,
  },

  stateName: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size26,
    color: Colors.tint,
    marginTop: 0,
    lineHeight: FontsSize.size24,
  },

  changeStateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: MarginHW.MarginH2,
  },

  changeStateText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.tint,
  },

  heroTextContainer: {
    marginTop: MarginHW.MarginH16,
    width: '60%',
  },

  heroTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size22,
    lineHeight: 28,
    color: Colors.textDark,
  },

  heroSubtitle: {
    marginTop: MarginHW.MarginH8,
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size16,
    lineHeight: 18,
    color: Colors.textMuted,
  },

  highlightGreen: {
    color: Colors.tint,
    fontFamily: fonts.OpenSans_Bold,
  },

  tabsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -MarginHW.MarginH24,
  },

  tabsScrollView: {
    paddingHorizontal: MarginHW.PaddingW16,
  },

  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: HWSize.H_Height46,
    paddingHorizontal: MarginHW.PaddingW18,
    borderRadius: 24,
    marginRight: MarginHW.MarginW10,
  },

  tabButtonActive: {
    backgroundColor: Colors.tint,
  },

  tabButtonInactive: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderLight,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  tabIcon: {
    width: ImageSize.ImageW20,
    height: ImageSize.ImageH20,
    marginRight: MarginHW.MarginW8,
  },

  tabEmoji: {
    fontSize: FontsSize.size16,
    marginRight: MarginHW.MarginW8,
  },

  tabText: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size13,
  },

  tabTextActive: {
    color: Colors.white,
  },

  tabTextInactive: {
    color: Colors.textDarkGray,
  },

  heroImageRadius: {
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    width: '65%',
    left: '35%',
  },

  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },

  heroBottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  treeListContainer: {
    marginHorizontal: MarginHW.MarginW16,
    // marginBottom: MarginHW.MarginH20,
  },
  treeCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: MarginHW.PaddingW12,
    flexDirection: 'row',
    marginBottom: MarginHW.MarginH8,
    borderWidth: 1,
    borderColor: '#F0F4F1',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 3,
  },
  treeImageContainer: {
    position: 'relative',
    width: ImageSize.ImageW100,
    height: ImageSize.ImageW100,
    borderRadius: 18,
    overflow: 'hidden',
  },
  treeImage: {
    width: '100%',
    height: '100%',
  },
  categoryBadge: {
    position: 'absolute',
    top: MarginHW.MarginH5,
    left: MarginHW.MarginW6,
    paddingHorizontal: MarginHW.PaddingW8,
    paddingVertical: MarginHW.PaddingH3,
    borderRadius: 8,
  },
  categoryBadgeText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size9,
    color: Colors.white,
  },
  nativeBadge: {
    backgroundColor: '#1E6B46',
  },
  fruitBadge: {
    backgroundColor: '#F58220',
  },
  floweringBadge: {
    backgroundColor: '#D81B60',
  },
  treeDetailsContainer: {
    flex: 1,
    paddingLeft: MarginHW.PaddingW12,
    justifyContent: 'space-between',
  },
  treeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  treeNameContainer: {
    flex: 1,
    paddingRight: MarginHW.PaddingW8,
  },
  treeNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  treeName: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size18,
    color: Colors.textDark,
  },
  treeTitleLeafIcon: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    tintColor: '#8CC63F',
    marginLeft: MarginHW.MarginW4,
  },
  scientificName: {
    fontFamily: fonts.OpenSans_Regular,
    fontStyle: 'italic',
    fontSize: FontsSize.size11,
    color: Colors.textMuted,
    marginTop: MarginHW.MarginH2,
  },
  treeDescription: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.textMuted,
    lineHeight: FontsSize.size14,
    marginTop: MarginHW.MarginH4,
  },
  treeFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: MarginHW.MarginH8,
  },
  attributesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: MarginHW.PaddingH5,
    marginRight: MarginHW.MarginW10,
  },
  attributeCol: {
    flex: 1,
  },
  attributeDivider: {
    width: 1,
    height: ImageSize.ImageH16,
    backgroundColor: '#E5E7EB',
    marginHorizontal: MarginHW.MarginW4,
  },
  attributeLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size9,
    color: Colors.bannerTextDesc,
  },
  attributeValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size10,
    color: Colors.textDark,
    marginTop: MarginHW.MarginH2,
  },
  pointsBadgeContainer: {
    alignItems: 'center',
  },
  pointsPill: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EEF6F0',
    paddingHorizontal: MarginHW.PaddingW8,
    paddingVertical: MarginHW.PaddingH5,
    borderRadius: 12,
  },
  pointsLeafIcon: {
    width: ImageSize.ImageW12,
    height: ImageSize.ImageH12,
    tintColor: '#1E6B46',
    marginRight: 3,
  },
  pointsValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size11,
    color: '#1E6B46',
  },
  pointsLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size9,
    color: Colors.bannerTextDesc,
    marginTop: MarginHW.MarginH2,
    textAlign: 'center',
  },
  arrowButton: {
    width: ImageSize.ImageW30,
    height: ImageSize.ImageH30,
    borderRadius: 30,
    backgroundColor: '#1E6B46',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: ImageSize.ImageW14,
    height: ImageSize.ImageH14,
    tintColor: Colors.white,
    transform: [{ rotate: '180deg' }],
  },
});
