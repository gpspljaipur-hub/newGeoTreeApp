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

  bottomBanner: {
    backgroundColor: Colors.bgGreenLight,
    borderWidth: 1,
    borderColor: Colors.borderGreenLight,
    borderRadius: 18,
    marginHorizontal: MarginHW.MarginW16,
    paddingHorizontal: MarginHW.PaddingW14,
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
    justifyContent: 'space-between',
    marginVertical: MarginHW.MarginH4,
  },

  benefitGridItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
  },

  benefitIconWrapper: {
    width: ImageSize.ImageW30,
    height: ImageSize.ImageW30,
    borderRadius: 15,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW8,
    borderWidth: 1,
    borderColor: Colors.borderGreenUltraLight,
  },

  benefitGridIcon: {
    width: ImageSize.ImageW20,
    height: ImageSize.ImageW20,
    tintColor: Colors.tint,
  },

  benefitTextCol: {
    flex: 1,
  },

  benefitGridLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: Colors.bannerBenefitLabel,
  },

  benefitGridValue: {
    fontFamily: fonts.OpenSans_Bold,
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
    flex: 1.3,
    marginRight: MarginHW.MarginW8,
  },

  footerCheckIcon: {
    width: ImageSize.ImageH20,
    height: ImageSize.ImageH20,
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

  heroCard: {
    marginHorizontal: 0,
    marginBottom: MarginHW.MarginH20,
    borderRadius: 0,
    overflow: 'visible',
    backgroundColor: Colors.white,
  },

  heroImage: {
    width: '100%',
    justifyContent: 'space-between',
  },

  heroContent: {
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
    bottom: -MarginHW.MarginH12,
  },

  tabsScrollView: {
    paddingHorizontal: MarginHW.PaddingW16,
  },

  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: MarginHW.PaddingH8,
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
    width: '65%',
    left: '35%',
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
    flexDirection: 'row',
    marginBottom: MarginHW.MarginH8,
    borderWidth: 1,
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
  treeImageContainer: {
    position: 'absolute',
    left: 6,
    top: 6,
    bottom: 6,
    borderRadius: 22,
    width: ImageSize.ImageW100,
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
    marginLeft: ImageSize.ImageW100,
    paddingLeft: MarginHW.PaddingW12,
    paddingRight: MarginHW.PaddingW12,
    paddingVertical: MarginHW.PaddingW12,
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
