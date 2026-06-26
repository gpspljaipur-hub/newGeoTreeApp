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
    logoSubtitle: {
        fontFamily: fonts.OpenSans_Bold,
        fontSize: FontsSize.size10 || 10,
        color: Colors.tint,
        letterSpacing: 2,
        marginTop: -MarginHW.MarginH10,
        textTransform: 'uppercase',
    },
    spacer: {
        flex: 1,
    },
    cardContainer: {
        paddingHorizontal: MarginHW.PaddingW24,
        flex: 1,
        justifyContent: 'flex-end'
        ,
    },
    glassCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: Colors.glassBorder,
        paddingVertical: MarginHW.PaddingH20,
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
        color: '#4A5D53',
        lineHeight: FontsSize.size20 || 20,
        marginBottom: MarginHW.MarginH16,
    },
    phoneNumberText: {
        fontFamily: fonts.OpenSans_Bold,
        color: Colors.legacyGreen,
    },
    // OTP input styles
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: MarginHW.MarginH2,
    },
    otpBox: {
        width: 44,
        height: 48,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: 'rgba(0, 0, 0, 0.06)',
        backgroundColor: 'rgba(245, 247, 246, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpBoxActive: {
        borderColor: Colors.btnBorder,
        backgroundColor: Colors.white,
        shadowColor: Colors.btnBorder,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 2,
    },
    otpText: {
        fontFamily: fonts.OpenSans_Bold,
        fontSize: FontsSize.size22 || 22,
        color: Colors.darkGreen,
    },
    otpDot: {
        fontFamily: fonts.OpenSans_Bold,
        fontSize: FontsSize.size22 || 22,
        color: 'rgba(3, 44, 23, 0.25)',
    },
    otpCursor: {
        fontFamily: fonts.OpenSans_Regular,
        fontSize: FontsSize.size22 || 22,
        color: Colors.btnBorder,
    },
    hiddenTextInput: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1,
    },
    // Info row styles
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: MarginHW.PaddingH3,
    },
    dividerLine: {
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    infoIconWrapper: {
        width: ImageSize.ImageW24 || 24,
        height: ImageSize.ImageH24 || 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: MarginHW.MarginW12,
    },
    infoIconImage: {
        width: ImageSize.ImageW16 || 16,
        height: ImageSize.ImageH16 || 16,
        tintColor: '#5E6E66',
    },
    infoText: {
        fontFamily: fonts.OpenSans_Medium,
        fontSize: FontsSize.size12 || 13,
        color: '#5E6E66',
        flex: 1,
    },
    highlightText: {
        fontFamily: fonts.OpenSans_Bold,
        color: Colors.legacyGreen,
    },
    pressableText: {
        fontFamily: fonts.OpenSans_Bold,
        color: Colors.btnBg,
    },
    resendDisabled: {
        color: Colors.placeholderColor,
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
        fontFamily: fonts.OpenSans_Bold,
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
    // Footer styles
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: MarginHW.PaddingW20,
        marginTop: MarginHW.MarginH20,
        marginBottom: MarginHW.MarginH16,
    },
    footerText: {
        fontFamily: fonts.OpenSans_Medium,
        fontSize: FontsSize.size10 || 10,
        color: Colors.white,
        textAlign: 'center',
        lineHeight: FontsSize.size14 || 14,
        textShadowColor: Colors.textShadow,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    footerLink: {
        fontFamily: fonts.OpenSans_Bold,
        color: Colors.textHighlight,
        textDecorationLine: 'underline',
    },
    footerLockIcon: {
        fontSize: 10,
        color: Colors.white,
        marginRight: 4,
    },
    // CSS drawn clock styles
    clockOutline: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#5E6E66',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clockHour: {
        width: 1.5,
        height: 5,
        backgroundColor: '#5E6E66',
        position: 'absolute',
        top: 2,
    },
    clockMinute: {
        width: 4,
        height: 1.5,
        backgroundColor: '#5E6E66',
        position: 'absolute',
        top: 7,
        left: 7,
    },
    // CSS drawn refresh icon
    refreshIconText: {
        fontSize: 16,
        color: '#5E6E66',
        fontWeight: 'bold',
    },
});
