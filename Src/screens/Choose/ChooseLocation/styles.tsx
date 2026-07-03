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
  scrollContainer: {
    paddingBottom: MarginHW.PaddingH20,
  },

  heroCard: {
    marginHorizontal: 0,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 170,
    justifyContent: 'center',

  },
  heroImageRadius: {
    width: '100%',
    left: 60,
  },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  heroContent: {
    flex: 1,
    paddingHorizontal: MarginHW.PaddingW20,
    justifyContent: 'center',
  },
  heroTextContainer: {
    width: '60%',
  },
  heroTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size22,
    lineHeight: 28,
    color: Colors.textDark,
  },
  heroSubtitle: {
    marginTop: MarginHW.MarginH3,
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    lineHeight: 16,
    color: Colors.black,
  },
  highlightGreen: {
    color: Colors.tint,
    fontFamily: fonts.OpenSans_Bold,
  },
  stateSelectorCard: {
    marginTop: -20,
    backgroundColor: '#F3F8F4',
    borderWidth: 1,
    borderColor: '#E2EFE5',
    borderRadius: 10,
    marginHorizontal: MarginHW.MarginW16,
    paddingVertical: MarginHW.PaddingH5,
    paddingHorizontal: MarginHW.PaddingW16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: MarginHW.MarginH1,
  },
  stateLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stateIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'rgba(161, 190, 172, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW12,
  },
  stateIcon: {
    width: 42,
    height: 42,

  },
  stateTextContainer: {
    justifyContent: 'center',
  },
  stateLabelText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size12,
    color: '#6B7A70',
  },
  stateValueText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size16,
    color: Colors.tint,
    marginTop: 1,
  },
  changeStateButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeStateText: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size12,
    color: Colors.tint,
    marginRight: 4,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: MarginHW.MarginW16,
    marginVertical: 10,
  },
  sectionTitleContainer: {
    flex: 1,
    paddingRight: MarginHW.PaddingW8,
  },
  sectionTitle: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size16,
    color: Colors.textDark,
  },
  sectionSubtitle: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size10,
    color: Colors.textMuted,
    marginTop: MarginHW.MarginH1,
  },
  viewMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: MarginHW.PaddingH3,
  },
  viewMapText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.tint,
    marginRight: MarginHW.MarginW1,
  },
  viewMapIcon: {
    width: ImageSize.ImageH16,
    height: ImageSize.ImageH16,
    tintColor: Colors.tint,
  },
  locationList: {
    paddingHorizontal: MarginHW.PaddingW16,
  },
  locationCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: MarginHW.PaddingW12,
    marginBottom: MarginHW.MarginH10,
    borderWidth: 1.5,
    borderColor: '#E8EFEA',
    flexDirection: 'row',
    position: 'relative',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  locationCardSelected: {
    borderColor: Colors.tint,
  },
  locationImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  locationImage: {
    width: '100%',
    height: '100%',
  },
  popularBadge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: '#1E6B46',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  popularText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: 8,
    color: Colors.white,
  },
  locationInfoContainer: {
    flex: 1,
    marginLeft: MarginHW.MarginW12,
    justifyContent: 'space-between',
  },
  cardTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  cardTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size13,
    color: Colors.textDark,
    flex: 1,
    paddingRight: 6,
  },
  selectionOuterCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#BCCAC0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionOuterCircleSelected: {
    borderColor: Colors.tint,
    backgroundColor: Colors.tint,
  },

  locationPinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  pinIcon: {
    width: 10,
    height: 10,
    tintColor: '#5B665F',
    marginRight: 3,
  },
  pinText: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: FontsSize.size9,
    color: '#5B665F',
  },
  cardDescription: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: 9,
    color: '#6B7A70',
    lineHeight: 12,
    marginTop: 4,
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 6,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  statIcon: {
    width: 11,
    height: 11,
    tintColor: Colors.tint,
    marginRight: 3,
  },
  statValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: 9,
    color: Colors.textDark,
  },
  statLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: 7,
    color: '#8E9A93',
  },
  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#E2EBE5',
  },
  verifiedLabel: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: 9,
    color: Colors.tint,
  },
  bannerCard: {
    backgroundColor: Colors.bgGreenLight,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.borderGreenLight,
    marginHorizontal: MarginHW.MarginW16,
    marginTop: MarginHW.MarginH1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  bannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: MarginHW.PaddingW14,
    paddingRight: MarginHW.PaddingW10,
  },
  bannerShieldContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: Colors.borderGreenUltraLight,
  },
  bannerShieldIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.shieldIconColor,
  },
  bannerText: {
    fontFamily: fonts.OpenSans_SemiBold,
    fontSize: FontsSize.size12,
    color: Colors.textDark,
    lineHeight: 14,
    flex: 1,
  },

  bannerHandImage: {
    width: 70,
    height: 70,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW20,
    paddingBottom: MarginHW.PaddingH10,
  },
  continueButton: {
    flex: 1,
    backgroundColor: Colors.continue,
    height: 45,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: Colors.btnShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  continueText: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size16,
    color: Colors.white,
  },
  continueArrow: {
    position: 'absolute',
    right: 20,
    width: 18,
    height: 18,
    tintColor: Colors.white,
  },
});
