import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../../../comman/fonts';
import { Colors } from '../../../../comman/Colors';
import FontsSize from '../../../../comman/FontsSize';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    // Hero Section
    heroImageBg: {
        width: '100%',
        height: 250,
        justifyContent: 'flex-start',
    },
    headerRow: {
        marginTop: 30, // Safe area approx
        marginLeft: 20,
    },
    backButton: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    backIcon: {
        width: 15,
        height: 15,
        tintColor: '#111827',
    },
    heroTextContainer: {
        marginTop: 20,
        marginLeft: 20,
        width: '70%',
    },
    heroTitle: {
        fontSize: 24,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
        lineHeight: 32,
    },
    heroSubtitle: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Regular,
        color: '#374151',
        marginTop: 8,
        lineHeight: 18,
    },

    // Top Stats Strip
    statsContainer: {
        marginTop: -30,
        paddingHorizontal: 16,
    },
    statsCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 12,
        marginTop: -30,
        marginHorizontal: 12,
        flexDirection: 'row',
        shadowColor: '#0A5F35',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    statBox: {
        width: '33%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 2
    },
    statIconCircle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#ebf1e5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    statIcon: {
        width: 20,
        height: 20,
        tintColor: '#0A5F35',
    },
    statLabel: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_SemiBold,
        color: '#6B7280',
    },
    statValue: {
        fontSize: 16,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginTop: 2,
    },
    statUnit: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#0A5F35',
    },
    statDesc: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Medium,
        color: '#6B7280',
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: '80%',
        backgroundColor: '#E5E7EB',
        marginHorizontal: 12,
    },
    impactTag: {
        backgroundColor: '#EAF6EC',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 4,
    },
    impactTagText: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
    },

    // Content Body
    contentContainer: {
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 100,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
        marginBottom: 16,
    },

    // Breakdown Table
    tableContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 24,
        overflow: 'hidden',
    },
    tableHeaderRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    tableHeaderCell: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Bold,
        color: '#374151',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    tableCell: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#4B5563',
        textAlign: 'center',
    },
    tableCellMain: {
        flexDirection: 'row',
    },
    tableCellIcon: {
        width: 14,
        height: 14,
        tintColor: '#0A5F35',
        marginHorizontal: 4,
    },
    tableCellTextMain: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#111827',
    },
    col1: { flex: 2.5, paddingVertical: 12, paddingHorizontal: 4, borderRightWidth: 1, borderRightColor: '#F3F4F6' },
    col2: { flex: 1, paddingVertical: 12, paddingHorizontal: 4, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#F3F4F6' },
    col3: { flex: 1, paddingVertical: 12, paddingHorizontal: 4, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#F3F4F6' },
    col4: { flex: 1, paddingVertical: 12, paddingHorizontal: 4, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#F3F4F6' },
    col5: { flex: 1, paddingVertical: 12, paddingHorizontal: 4, justifyContent: 'center' },

    tableFooterRow: {
        flexDirection: 'row',
        backgroundColor: '#ebf1e5',
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tableFooterLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tableFooterIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E0F2E9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    tableFooterIcon: {
        width: 16,
        height: 16,
        tintColor: '#0A5F35',
    },
    tableFooterTitle: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
    },
    tableFooterValueContainer: {
        alignItems: 'flex-end',
    },
    tableFooterValue: {
        fontSize: 16,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
    },
    tableFooterValueSub: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#0A5F35',
    },

    // Insights Row
    insightsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    insightCard: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        padding: 12,
    },
    insightCardTitle: {
        fontSize: 11,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
        marginBottom: 12,
    },
    pieContentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pieChartPlaceholder: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
    },
    pieLegendContainer: {
        flex: 1,
        marginLeft: 12,
    },
    pieLegendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    pieLegendLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pieColorDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6,
    },
    pieLegendText: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Medium,
        color: '#4B5563',
    },
    pieLegendValue: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Bold,
        color: '#111827',
    },

    barChartPlaceholder: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    barCompareRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    barIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#EAF6EC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    barCompareTextCol: {
        flex: 1,
    },
    barCompareTextTop: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#4B5563',
    },
    barCompareValue: {
        fontSize: 18,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginVertical: 2,
    },
    barCompareTextBottom: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Medium,
        color: '#4B5563',
    },
    progressTrack: {
        width: '100%',
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E5E7EB',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    progressLower: { flex: 1, backgroundColor: '#34D399' },
    progressAverage: { flex: 1, backgroundColor: '#FBBF24' },
    progressHigher: { flex: 1, backgroundColor: '#EF4444' },
    progressMarkerContainer: {
        position: 'absolute',
        top: -16,
        bottom: 0,
        width: 18,
        alignItems: 'center',
        transform: [{ translateX: -9 }],
    },
    progressMarker: {
        width: 18,
        height: 18,
        backgroundColor: '#0A5F35',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 1,
        transform: [{ rotate: '45deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
        zIndex: 2,
    },
    progressMarkerInner: {
        width: 0,
        height: 0,
    },
    progressMarkerLine: {
        width: 1,
        height: 8,
        backgroundColor: '#111827',
        marginTop: -2,
        zIndex: 1,
        opacity: 0.3,
    },
    progressLabelsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    progressLabel: {
        flex: 1,
        fontSize: 10,
        fontFamily: fonts.OpenSans_SemiBold,
        color: '#111827',
        textAlign: 'center'
    },

    // Action Cards
    actionCardsContainer: {
        backgroundColor: '#eff3ea',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#D1FAE5',
    },
    actionCardSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionDivider: {
        width: 1,
        height: '80%',
        backgroundColor: '#D1D5DB',
        marginHorizontal: 12,
    },
    actionIconCircle: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: '#E6F4EA',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    actionIcon: {
        width: 20,
        height: 20,
        tintColor: '#0A5F35',
    },
    actionTextCol: {
        flex: 1,
    },
    actionTitle: {
        fontSize: 11,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginBottom: 2,
    },
    actionDesc: {
        fontSize: 8,
        fontFamily: fonts.OpenSans_Medium,
        color: '#374151',
    },
    actionArrowCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#0A5F35',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
    },
    actionArrowText: {
        fontSize: 18,
        fontFamily: fonts.OpenSans_Medium,
        color: '#0A5F35',
        lineHeight: 20,
    },

    // Footer Info
    footerInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    footerInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    footerIconWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F0FDF4',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    footerInfoIcon: {
        width: 16,
        height: 16,
    },
    footerDivider: {
        width: 1,
        height: '80%',
        backgroundColor: '#E5E7EB',
        marginHorizontal: 8,
    },
    footerInfoTextCol: {
        flex: 1,
    },
    footerInfoValue: {
        fontSize: 8,
        fontFamily: fonts.OpenSans_Medium,
        color: '#111827',
    },
    footerInfoLabel: {
        fontSize: 7,
        fontFamily: fonts.OpenSans_Regular,
        color: '#4B5563',
    },

    // CTA Button
    ctaButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#0A5F35',
        borderRadius: 8,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ctaButtonText: {
        fontSize: 14,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginRight: 8,
    },
    ctaButtonArrow: {
        width: 16,
        height: 16,
        tintColor: '#0A5F35',
        transform: [{ rotate: '180deg' }], // Left arrow
    },
});
