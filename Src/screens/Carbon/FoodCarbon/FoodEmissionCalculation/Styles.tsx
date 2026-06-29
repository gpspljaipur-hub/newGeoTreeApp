import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../comman/Colors';
import FontsSize from '../../../../comman/FontsSize';
import fonts from '../../../../comman/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    headerBg: {
        width: '100%',
        height: 180,
    },
    headerOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    backButton: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 2,
    },
    backIcon: {
        width: 14,
        height: 14,
        tintColor: '#0A5F35',
    },
    headerTitleContainer: {
        marginLeft: 12,
        flex: 1,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: fonts.OpenSans_Bold,
        color: '#FFFFFF',
    },
    headerLeafIcon: {
        width: 16,
        height: 16,
        marginLeft: 6,
        tintColor: '#FFFFFF',
    },
    headerSubtitle: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Regular,
        color: '#FFFFFF',
        marginTop: 3,
        opacity: 0.9,
    },
    // Stats Overlapping Cards
    statsCardContainer: {
        paddingHorizontal: 16,
        marginTop: -30,
        zIndex: 10,
    },
    statsCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 8,
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    statIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#EFF6F1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    statIcon: {
        width: 16,
        height: 16,
        tintColor: '#0A5F35',
    },
    statLabel: {
        fontSize: 8.5,
        fontFamily: fonts.OpenSans_Regular,
        color: '#64748B',
        textAlign: 'center',
    },
    statValue: {
        fontSize: 14.5,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0F172A',
        marginTop: 2,
    },
    statValueText: {
        color: '#0A5F35',
    },
    statUnit: {
        fontSize: 8.5,
        fontFamily: fonts.OpenSans_Regular,
        color: '#64748B',
    },
    verticalDivider: {
        width: 1,
        height: 36,
        backgroundColor: '#E2E8F0',
    },
    // Sections
    sectionCard: {
        marginHorizontal: 16,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 14,
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0F172A',
        marginBottom: 12,
    },
    // Table styles
    tableContainer: {
        width: '100%',
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        paddingBottom: 6,
        marginBottom: 4,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
        paddingVertical: 10,
        alignItems: 'center',
    },
    tableCellParam: {
        flex: 1.1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tableCellIcon: {
        width: 14,
        height: 14,
        marginRight: 6,
        tintColor: '#0A5F35',
    },
    tableCellText: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Regular,
        color: '#334155',
    },
    tableCellTextBold: {
        fontFamily: fonts.OpenSans_Bold,
    },
    colHeader: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Bold,
        color: '#64748B',
    },
    cellInput: {
        flex: 0.9,
        fontSize: 10,
        fontFamily: fonts.OpenSans_Regular,
        color: '#334155',
    },
    cellFactor: {
        flex: 0.9,
        fontSize: 10,
        fontFamily: fonts.OpenSans_Bold,
        textAlign: 'center',
    },
    cellImpact: {
        flex: 0.9,
        fontSize: 10,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0F172A',
        textAlign: 'right',
    },
    // Total Row inside table
    totalRowHighlight: {
        flexDirection: 'row',
        backgroundColor: '#F3F9F5',
        borderColor: '#E6F4ED',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalRowLabel: {
        fontSize: 11,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
    },
    totalRowValue: {
        fontSize: 12,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        textAlign: 'right',
    },
    totalRowSub: {
        fontSize: 9.5,
        fontFamily: fonts.OpenSans_Regular,
        color: '#0A5F35',
        opacity: 0.85,
        textAlign: 'right',
    },
    // Two column row (Donut & Analysis)
    twoColRow: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 16,
        justifyContent: 'space-between',
    },
    colCardLeft: {
        width: '48.5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 12,
    },
    colCardRight: {
        width: '48.5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 12,
    },
    colCardTitle: {
        fontSize: 10.5,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0F172A',
        lineHeight: 14,
        marginBottom: 10,
    },
    // Donut Layout
    donutChartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    donutCircleWrapper: {
        width: 68,
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
    },
    donutView: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 9,
        borderStyle: 'solid',
        borderTopColor: '#3B82F6', // Dairy: 45% (top border spans top quadrant)
        borderRightColor: '#10B981', // Fruits/Veg: 25% (right quadrant)
        borderBottomColor: '#F59E0B', // Processed: 10% (bottom quadrant)
        borderLeftColor: '#94A3B8', // Transportation: 20% (left quadrant)
        transform: [{ rotate: '45deg' }],
    },
    donutHole: {
        position: 'absolute',
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
    },
    donutLegend: {
        flex: 1,
        marginLeft: 8,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    legendDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 4,
    },
    legendText: {
        fontSize: 7.5,
        fontFamily: fonts.OpenSans_Regular,
        color: '#475569',
        flex: 1,
    },
    legendValue: {
        fontSize: 7.5,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0F172A',
    },
    // Diet Analysis Column
    analysisHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    analysisHeaderIcon: {
        width: 14,
        height: 14,
        tintColor: '#0A5F35',
        marginRight: 6,
    },
    analysisTitle: {
        fontSize: 10,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0F172A',
    },
    analysisDesc: {
        fontSize: 9.5,
        fontFamily: fonts.OpenSans_Regular,
        color: '#475569',
        lineHeight: 14,
        marginTop: 4,
    },
    // Offset Card
    offsetCard: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 12,
        alignItems: 'center',
    },
    offsetLeft: {
        flex: 1.1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    offsetCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#EFF6F1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    offsetTextContainer: {
        flex: 1,
    },
    offsetLabel: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Regular,
        color: '#64748B',
    },
    offsetValue: {
        fontSize: 12.5,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginTop: 1,
    },
    offsetDesc: {
        fontSize: 8.5,
        fontFamily: fonts.OpenSans_Regular,
        color: '#64748B',
        marginTop: 1,
    },
    offsetRightGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingLeft: 8,
    },
    offsetGridCol: {
        width: '46%',
        alignItems: 'center',
        marginVertical: 4,
    },
    offsetGridIcon: {
        width: 14,
        height: 14,
        tintColor: '#0A5F35',
        marginBottom: 2,
    },
    offsetGridText: {
        fontSize: 7.5,
        fontFamily: fonts.OpenSans_Bold,
        color: '#475569',
        textAlign: 'center',
    },
    offsetDivider: {
        width: 1,
        height: '80%',
        backgroundColor: '#E2E8F0',
        marginHorizontal: 4,
    },
    // Compared to Household Comparison Card
    compareCard: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 12,
        alignItems: 'center',
    },
    compareIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#EFF6F1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    compareTextContainer: {
        flex: 1,
    },
    compareLabel: {
        fontSize: 9,
        fontFamily: fonts.OpenSans_Regular,
        color: '#64748B',
    },
    compareTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,
    },
    compareTitleText: {
        fontSize: 11,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginRight: 4,
    },
    compareChevron: {
        width: 8,
        height: 8,
        tintColor: '#0A5F35',
    },
    // Slider Bar
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 8,
    },
    sliderBar: {
        height: 8,
        borderRadius: 4,
        width: '100%',
    },
    sliderBarWrapper: {
        height: 24,
        width: '100%',
        justifyContent: 'center',
    },
    sliderDottedLine: {
        position: 'absolute',
        width: 1,
        height: 14,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#475569',
        opacity: 0.35,
        top: 5,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    sliderLabelText: {
        fontSize: 7.5,
        fontFamily: fonts.OpenSans_Regular,
        color: '#64748B',
    },
    pinContainer: {
        position: 'absolute',
        top: -4,
        marginLeft: -9,
        alignItems: 'center',
    },
    // Bottom button
    bottomButtonContainer: {
        marginHorizontal: 16,
        marginTop: 20,
    },
    backAssessmentBtn: {
        flexDirection: 'row',
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0A5F35',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backAssessmentBtnText: {
        fontSize: 13,
        fontFamily: fonts.OpenSans_Bold,
        color: '#0A5F35',
        marginLeft: 6,
    },
    backArrowIcon: {
        width: 14,
        height: 14,
        tintColor: '#0A5F35',
    },
});
