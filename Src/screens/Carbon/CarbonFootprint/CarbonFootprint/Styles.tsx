import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../../../comman/fonts';
import FontsSize from '../../../../comman/FontsSize';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    // Top Nav
    topNavRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 20, // Added padding to clear the translucent status bar
        zIndex: 10,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: 16,
        height: 16,
        tintColor: '#111827',
    },
    logoCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 100,
        height: 30,
    },
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verifiedIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    verifiedText: {
        fontSize: 8,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
        textAlign: 'right',
        lineHeight: 10,
    },
    // Hero Section
    mainBgImage: {
        width: '100%',
        height: 260, // Increased to show the full background image properly

    },
    heroSection: {
        position: 'relative',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 30,
    },
    heroTitleTop: {
        fontSize: FontsSize.size20,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
    },
    heroTitleBottom: {
        fontSize: FontsSize.size20,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginBottom: 8,
    },
    heroSubtitle: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#4B5563',
        maxWidth: '65%',
        marginBottom: 20,
    },
    emissionCard: {
        backgroundColor: '#f9f9f6',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D1FAE5',
        alignSelf: 'flex-start',
    },
    emissionIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#0A5F35',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    emissionIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF',
    },
    emissionTextCol: {
        marginRight: 8,
    },
    emissionLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emissionLabel: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_SemiBold,
        color: '#374151',
        marginRight: 4,
    },
    emissionInfoIcon: {
        width: 12,
        height: 12,
        tintColor: '#6B7280',
    },
    emissionValue: {
        fontSize: 16,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
    },
    emissionUnit: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Medium,
        color: '#4B5563',
    },

    // Plans Section
    sectionContainer: {
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: 11,
        fontFamily: fonts.OpenSans_Medium,
        color: '#6B7280',
        marginBottom: 16,
    },
    plansRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    planCard: {
        width: '32%',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingVertical: 8,
        alignItems: 'center',
        position: 'relative',
    },
    planCardSelected: {
        borderColor: '#0A5F35',
        backgroundColor: '#F4FBF6',
        borderWidth: 1.5,
    },
    planRadioEmpty: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#9CA3AF',
    },
    planRadioSelected: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#0A5F35',
        justifyContent: 'center',
        alignItems: 'center',
    },
    planRadioInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#0A5F35',
    },
    mostPopularBadge: {
        position: 'absolute',
        top: -10,
        backgroundColor: '#0A5F35',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10,
    },
    mostPopularIcon: {
        width: 10,
        height: 10,
        tintColor: '#FBBF24',
        marginRight: 4,
    },
    mostPopularText: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Bold,
        color: '#FFFFFF',
    },
    planCircleOuter: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderWidth: 4,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 10,
        position: 'relative',
    },
    planCircleProgress: {
        position: 'absolute',
        top: -4, left: -4, right: -4, bottom: -4,
        borderRadius: 34,
        borderWidth: 4,
        borderColor: '#0A5F35',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{ rotate: '-45deg' }]
    },
    planCircleText: {
        fontSize: 14,
        fontFamily: fonts.OpenSans_Medium,
        color: '#111827',
    },
    planTreeIcon: {
        width: 24,
        height: 24,
        marginBottom: 4,
        tintColor: '#0A5F35'
    },
    planImpactName: {
        fontSize: 8,
        fontFamily: fonts.OpenSans_SemiBold,
        color: '#111827',
        marginBottom: 2,
        textAlign: 'center',
    },
    planTreeCount: {
        fontSize: 14,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginBottom: 2,
    },
    planTreeUnit: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_SemiBold,
        color: '#0A5F35',
    },
    planOffsetAmount: {
        fontSize: 7,
        fontFamily: fonts.OpenSans_Medium,
        color: '#6B7280',
        marginBottom: 10,
        textAlign: 'center',
    },
    planPriceDivider: {
        width: '80%',
        height: 1,
        backgroundColor: '#E5E7EB',
        marginBottom: 8,
    },
    planPrice: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
    },

    // Features Includes
    featuresCard: {
        borderWidth: 1,
        borderColor: '#0A5F35',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    featuresTitle: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginBottom: 12,
    },
    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    featureItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    featureIconCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#EAF6EC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    featureIcon: {
        width: 12,
        height: 12,
        tintColor: '#0A5F35',
    },
    featureText: {
        fontSize: 7,
        fontFamily: fonts.OpenSans_SemiBold,
        color: '#111827',
        flex: 1,
    },
    featureDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#E5E7EB',
        marginHorizontal: 4,
    },

    // Good To Know
    goodToKnowCard: {
        backgroundColor: '#F9F9F6',
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 20,
        flexDirection: 'row',
        position: 'relative',
        overflow: 'hidden',
    },
    goodToKnowContent: {
        flex: 1,
        zIndex: 2,
        paddingRight: 60,
    },
    goodToKnowHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    goodToKnowIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: '#0A5F35',
    },
    goodToKnowTitle: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
    },
    goodToKnowText: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#374151',
        lineHeight: 16,
        marginBottom: 4,
    },
    goodToKnowImage: {
        position: 'absolute',
        right: -10,
        bottom: -10,
        width: 200,
        height: 110,
        zIndex: 1,
    },

    // What's Next
    whatsNextCard: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 10,
        marginHorizontal: 16,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    whatsNextTitle: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
        marginBottom: 12,
    },
    stepsRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepItem: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#EAF6EC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        position: 'relative',
    },
    stepIcon: {
        width: 16,
        height: 16,
        tintColor: '#0A5F35',
    },
    stepNumberCircle: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#0A5F35',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    stepNumberText: {
        fontSize: 7,
        fontFamily: fonts.OpenSans_Bold,
        color: '#FFFFFF',
    },
    stepTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    stepTitle: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#0A5F35',
        textAlign: 'center',
        marginBottom: 2,
    },
    stepDesc: {
        fontSize: 6,
        fontFamily: fonts.OpenSans_Regular,
        color: '#111827',
        textAlign: 'center'
    },
    stepArrow: {
        fontSize: 14,
        color: '#0A5F35',
        marginHorizontal: 2,
    },

    // Footer Button
    footerContainer: {
        paddingHorizontal: 16,
        marginVertical: 20,

    },
    ctaButton: {
        backgroundColor: '#0A5F35',
        borderRadius: 8,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    ctaTreeIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF',
        marginRight: 8,
    },
    ctaButtonText: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Bold,
        color: '#FFFFFF',
        marginRight: 8,
    },
    ctaArrow: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    securePaymentRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secureLockIcon: {
        width: 10,
        height: 10,
        tintColor: '#0A5F35',
        marginRight: 6,
    },
    secureText: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#4B5563',
    }
});

export default styles;
