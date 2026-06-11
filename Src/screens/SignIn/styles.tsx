import { StyleSheet } from 'react-native';
import { Colors } from '../../comman/Colors';
import FontsSize from '../../comman/FontsSize';
import MarginHW from '../../comman/MarginHW';
import ImageSize from '../../comman/ImageSize';
import HWSize from '../../comman/HWSize';
import fonts from '../../comman/fonts';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(10, 30, 20, 0.15)',
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -MarginHW.MarginH20,
    marginBottom: MarginHW.MarginH5,
  },
  logoImage: {
    width: ImageSize.ImageW180,
    height: ImageSize.ImageH80,
  },
  spacer: {
    flex: 1,
  },
  cardContainer: {
    paddingHorizontal: MarginHW.PaddingW24,
    marginBottom: MarginHW.MarginH40,
  },
  glassCard: {
    backgroundColor: Colors.glassBorder,
    borderRadius: FontsSize.size24,
    borderWidth: 1.5,
    borderColor: Colors.glassBorder,
    paddingVertical: MarginHW.PaddingH14,
    paddingHorizontal: MarginHW.PaddingW20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  cardTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size28 || 28,
    color: Colors.darkGreen,
    marginBottom: MarginHW.MarginH5,
  },
  cardSubtitle: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size14 || 14,
    color: Colors.darkGreen,
    marginBottom: MarginHW.MarginH24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    height: HWSize.H_Height50 || 54,
    paddingHorizontal: MarginHW.PaddingW16,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagEmoji: {
    fontSize: 20,
    marginRight: MarginHW.MarginW6,
  },
  countryCode: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size16 || 16,
    color: Colors.darkGreen,
    marginRight: MarginHW.MarginW6,
  },
  caretIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    borderRightWidth: 4,
    borderRightColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: Colors.darkGreen,
  },
  dividerLine: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    marginHorizontal: MarginHW.MarginW12,
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size14,
    color: Colors.darkGreen,
    padding: 0,
  },
  button: {
    backgroundColor: Colors.darkGreen,
    height: HWSize.H_Height50,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: MarginHW.MarginH24,
  },
  buttonDisabled: {
    opacity: 0.9,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontFamily: fonts.OpenSans_Medium,
    color: Colors.white,
    fontSize: FontsSize.size16 || 16,
  },
  arrowContainer: {
    width: ImageSize.ImageW20 || 20,
    height: ImageSize.ImageH20 || 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: MarginHW.MarginW8,
  },
  arrowLine: {
    width: 12,
    height: 2,
    backgroundColor: Colors.white,
    position: 'absolute',
  },
  arrowHead: {
    width: 8,
    height: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.white,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    right: 3,
  },
  bottomSpacer: {
    height: MarginHW.MarginH20,
  },
});
