import { StyleSheet } from 'react-native';
import { Colors } from '../../../comman/Colors';
import FontsSize from '../../../comman/FontsSize';
import MarginHW from '../../../comman/MarginHW';
import ImageSize from '../../../comman/ImageSize';
import HWSize from '../../../comman/HWSize';
import fonts from '../../../comman/fonts';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: Colors.overlayBg,
  },
  safeArea: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -MarginHW.MarginH20,
    marginBottom: MarginHW.MarginH5,
  },
  logoImage: {
    width: 210,
    height: 100,
  },
  titleContainer: {
    paddingHorizontal: MarginHW.PaddingW30,
    marginBottom: MarginHW.MarginH10,
  },
  titleDark: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size30,
    color: Colors.green,
  },
  titleGreen: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size30,
    color: Colors.legacyGreen,
  },
  subtitleContainer: {
    paddingHorizontal: MarginHW.PaddingW30,
    marginBottom: MarginHW.MarginH30,
  },
  subtitleText: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size14,
    color: Colors.labelGrey,
  },
  subtitleLegacy: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.legacyGreen,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    marginVertical: MarginHW.MarginH10,
    paddingHorizontal: MarginHW.PaddingW24,
  },
  glassCard: {
    backgroundColor: Colors.glassBg,
    borderRadius: FontsSize.size24,
    borderWidth: 1.5,
    borderColor: Colors.glassBorder,
    paddingVertical: MarginHW.PaddingH5,
    paddingHorizontal: MarginHW.PaddingW20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: MarginHW.PaddingH8,
  },
  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: Colors.iconWrapperBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: MarginHW.MarginW16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardValue: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size14,
    color: Colors.darkGreen,
  },
  cardLabel: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size10,
    color: Colors.labelGrey,
    marginTop: MarginHW.MarginH2,
    letterSpacing: 1,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.whiteDivider,
    marginHorizontal: MarginHW.MarginW4,
  },
  spacer: {
    flex: 1,
    minHeight: 20,
  },
  buttonContainer: {
    marginHorizontal: MarginHW.MarginW24,
    shadowColor: Colors.btnShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonGradient: {
    height: HWSize.H_Height50,
    borderRadius: FontsSize.size12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.white,
    fontSize: FontsSize.size20,
  },
  arrowContainer: {
    width: ImageSize.ImageW24,
    height: ImageSize.ImageH24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: MarginHW.MarginW10,
  },
  arrowLine: {
    width: ImageSize.ImageW14,
    height: 2.5,
    backgroundColor: Colors.white,
    position: 'absolute',
  },
  arrowHead: {
    width: ImageSize.ImageW9,
    height: ImageSize.ImageH9,
    borderTopWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: Colors.white,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    right: 4,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: MarginHW.MarginH16,
    marginBottom: MarginHW.MarginH24,
  },
  signInText: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size14,
    color: Colors.white,
    textShadowColor: Colors.textShadow,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  signInHighlight: {
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.lightGreen,
    textDecorationLine: 'underline',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: MarginHW.PaddingW12,
    marginTop: MarginHW.MarginH10,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size9,
    color: Colors.white,
    marginLeft: MarginHW.MarginW6,
    lineHeight: FontsSize.size12,
    letterSpacing: 0.5,
    textShadowColor: Colors.textShadow,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  footerSeparator: {
    width: 1,
    height: HWSize.H_Height18,
    backgroundColor: Colors.footerDivider,
  },
  cardIcon: {
    width: 22,
    height: 22,
    tintColor: Colors.darkGreen,
  },
  footerIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.greenMint,
  },
});
