import { StyleSheet } from 'react-native';
import { Colors } from '../../../comman/Colors';
import FontsSize from '../../../comman/FontsSize';
import MarginHW from '../../../comman/MarginHW';
import ImageSize from '../../../comman/ImageSize';
import HWSize from '../../../comman/HWSize';
import fonts from '../../../comman/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFB',
  },

  bottomBanner: {
    backgroundColor: Colors.bgGreenLight,
    borderWidth: 1,
    borderColor: Colors.borderGreenLight,
    borderRadius: 18,
    marginHorizontal: MarginHW.MarginW16,
    paddingHorizontal: MarginHW.PaddingW4,
    paddingBottom: MarginHW.MarginH10,
    marginBottom: MarginHW.MarginH12,
  },

  bannerLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  bannerHandImage: {
    width: ImageSize.ImageW80,
    height: ImageSize.ImageW80,
  },

  bannerTextContainer: {
    flex: 1,
    flexShrink: 1,
    paddingLeft: MarginHW.PaddingW12,
  },

  bannerTextTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.textGreenDark,
  },

  bannerTextDesc: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.bannerTextDesc,
    marginTop: MarginHW.MarginH2,
    lineHeight: 14,
  },

  bannerDivider: {
    height: 1,
    backgroundColor: Colors.dividerGreen,
    // marginVertical: MarginHW.MarginH10,
    width: '100%',
  },

  benefitsGrid: {
    width: '100%',
  },

  benefitsRow: {
    flexDirection: 'row',
    marginVertical: MarginHW.MarginH8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',


  },

  benefitGridItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },

  benefitIconWrapper: {
    width: ImageSize.ImageW30,
    height: ImageSize.ImageW30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW8,
    borderWidth: 1,
    borderColor: Colors.borderGreenUltraLight,
  },

  benefitGridIcon: {
    width: ImageSize.ImageW20,
    height: ImageSize.ImageW20,
    tintColor: Colors.tintColorDrak,
  },

  benefitTextCol: {
    flex: 1,
    alignItems: 'center'
  },

  benefitGridLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.bannerBenefitLabel,
  },

  benefitGridValue: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size12,
    color: Colors.tint,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW20,
    paddingBottom: MarginHW.PaddingH5,
    paddingTop: MarginHW.PaddingH10,
    backgroundColor: Colors.lightgray,

  },
  footerTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,

  },

  footerCheckIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.tint,
    marginRight: MarginHW.MarginW8,
  },
  footerText: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size12,
    color: Colors.footertextgray,
    flex: 1,
  },
  continueButton: {
    flex: 0.4,
    backgroundColor: Colors.continue,
    height: ImageSize.ImageH35,
    paddingHorizontal: 10,
    borderRadius: 10,
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

  heroCard: {
    marginHorizontal: 0,
    marginBottom: MarginHW.MarginH20,
    borderRadius: 0,
    overflow: 'visible',
    backgroundColor: Colors.white,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingW20,
    paddingTop: MarginHW.PaddingH16,
    width: '100%',
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 10,
  },
  backButtonIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.tint,
  },

  heroImage: {
    width: '100%',
    height: 260,
    justifyContent: 'space-between',
  },

  heroContent: {
    paddingHorizontal: MarginHW.PaddingW20,

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
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: Colors.listBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW8,
  },

  stateIcon: {
    width: 15,
    height: 15,
    tintColor: Colors.tint,
  },

  stateTextContainer: {
    justifyContent: 'center',
  },

  stateLabel: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size10,
    color: Colors.black,
  },

  stateName: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.tint,
    marginTop: 0,
  },

  changeStateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: MarginHW.MarginH2,
  },

  changeStateText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size8,
    color: Colors.tint,
  },

  heroTextContainer: {
    marginTop: MarginHW.MarginH5,
    width: '60%',
  },

  heroTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size18,
    color: Colors.textDark,
  },

  heroSubtitle: {
    marginTop: MarginHW.MarginH8,
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.black,
  },

  highlightGreen: {
    color: Colors.tint,
    fontSize: FontsSize.size20,
    fontFamily: fonts.OpenSans_Bold,
  },
  greenRegular: {
    color: Colors.tint,
    fontSize: FontsSize.size14,
    fontFamily: fonts.OpenSans_Regular,
  },

  tabsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -MarginHW.MarginH12,
  },

  tabsScrollView: {
    paddingHorizontal: MarginHW.PaddingW16,
  },

  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: MarginHW.PaddingH5,
    paddingHorizontal: MarginHW.PaddingW10,
    marginVertical: 2,
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
    width: ImageSize.ImageW16,
    height: ImageSize.ImageH16,
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
    width: '100%',
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
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    shadowColor: Colors.black,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  treeCardSelected: {
    borderColor: Colors.tint,
    backgroundColor: Colors.bgGreenLight,
  },
  treeImageContainer: {
    flex: 0.5,


  },
  treeImage: {
    width: 110,
    height: 100,
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
    backgroundColor: Colors.tint,
  },
  fruitBadge: {
    backgroundColor: '#F58220',
  },
  floweringBadge: {
    backgroundColor: '#D81B60',
  },
  treeDetailsContainer: {
    flex: 1,
    left: 5,
  },
  treeHeaderRow: {
    flexDirection: 'row',

  },
  treeNameContainer: {
    flex: 1,
  },
  treeNameRow: {
  },
  treeName: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size18,
    color: Colors.textDark,
  },

  scientificName: {
    fontFamily: fonts.OpenSans_Regular,
    fontStyle: 'italic',
    fontSize: FontsSize.size12,
    color: Colors.textMuted,
    marginTop: MarginHW.MarginH2,
  },
  treeDescription: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.textMuted,
    lineHeight: FontsSize.size14,
    marginTop: MarginHW.MarginH8,

  },
  treeFooterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MarginHW.MarginH8,
  },
  attributesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: MarginHW.PaddingH5,
    marginRight: MarginHW.MarginW10,
  },
  attributeCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 8,
  },
  pointsLeafIcon: {
    width: ImageSize.ImageW12,
    height: ImageSize.ImageH12,
    tintColor: '#1E6B46',
    marginRight: 3,
  },
  pointsValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: '#1E6B46',
  },
  pointsLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
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
