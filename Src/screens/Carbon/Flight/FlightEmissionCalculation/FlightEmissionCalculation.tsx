import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ImageBackground,
    Share,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import Images from '../../../../constants/images';

const FlightEmissionCalculationScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    // Dynamic Route Parameters
    const {
        annualTons = 2.84,
        annualDistance = 3200,
        annualEmissionsKg = 2840,
        tripsPerYear = 1,
        flightType = 'domestic',
        tripType = 'roundtrip',
        frequency = '1-2',
        seatClass = 'economy',
        distanceSector = '1500-4000',
    } = route.params || {};

    const treesRequired = Math.round(annualEmissionsKg / 22);
    const offsetCost = treesRequired * 25;

    const getFlightTypeLabel = () => {
        if (flightType === 'domestic') return 'Domestic';
        if (flightType === 'international') return 'International';
        return 'Both';
    };

    const getTripTypeLabel = () => {
        if (tripType === 'oneway') return 'One Way';
        if (tripType === 'roundtrip') return 'Round Trip';
        return 'Multi-City';
    };

    const getSeatClassLabel = () => {
        if (seatClass === 'economy') return 'Economy';
        if (seatClass === 'premium_economy') return 'Premium Economy';
        if (seatClass === 'business') return 'Business';
        return 'First Class';
    };

    // Calculate details for dynamic charts
    const totalBudget = 10.0;
    const remainingBudget = Math.max(0, parseFloat((totalBudget - annualTons).toFixed(2)));
    const remainingPct = Math.max(0, Math.round((remainingBudget / totalBudget) * 100));
    const offsetPct = Math.min(100, Math.round((annualTons / totalBudget) * 100));

    // Compared with average traveler
    const averageTons = 1.95;
    const isHigher = annualTons > averageTons;
    const difference = Math.abs(parseFloat((annualTons - averageTons).toFixed(2)));

    // What this means equivalents
    const carKm = Math.round(annualEmissionsKg * 4.225);
    const homeMonths = Math.max(1, Math.round(annualTons * 1.056));

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/*Header*/}
                <ImageBackground
                    source={Images.flight_carbon_bg}
                    style={styles.topSectionBg}
                    resizeMode="cover"
                >
                    {/* Custom Navigation Header */}
                    <View style={styles.headerRow}>
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>

                        <View style={styles.headerTitleContainer}>
                            <View style={styles.headerTitleRow}>
                                <Text style={styles.headerTitle}>Flight Carbon Emission Report</Text>
                            </View>
                            {/* <Text style={styles.headerSubtitle}>Here's the breakdown of your flight emissions.</Text> */}
                        </View>

                        <TouchableOpacity
                            style={styles.shareButton}
                            activeOpacity={0.7}
                        >
                            <Image source={Images.share} style={styles.shareIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    {/* Stats hero content */}
                    <View style={styles.heroContentContainer}>
                        <View style={styles.heroLeftContent}>
                            <View style={styles.heroTitleLabelRow}>
                                <Text style={styles.heroTitleLabel}>Estimated Annual Flight Emissions</Text>
                                <View style={styles.heroInfoIcon}>
                                    <Text style={styles.heroInfoIconText}>i</Text>
                                </View>
                            </View>
                            <View style={styles.heroEmissionsValueRow}>
                                <Text style={styles.heroEmissionsVal}>{annualTons}</Text>
                                <Text style={styles.heroEmissionsUnit}>Tons CO₂</Text>
                            </View>

                            <View style={styles.heroEquivalentRow}>
                                <Image source={Images.treeIcon} style={styles.heroEquivalentIcon} resizeMode="contain" />
                                <View style={styles.heroEquivalentTextContainer}>
                                    <Text style={styles.heroEquivalentLabel}>Equivalent to</Text>
                                    <Text style={styles.heroEquivalentVal}>{treesRequired} Trees</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                {/* Flight Summary Grid */}
                <View style={styles.summarySection}>
                    <Text style={styles.summaryTitle}>Flight Summary</Text>
                    <View style={styles.summaryGrid}>
                        <View style={styles.summaryCol}>
                            <View style={styles.summaryIconWrapper}>
                                <Image source={Images.flight} style={styles.summaryIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.summaryLabel}>Flight Type</Text>
                            <Text style={styles.summaryValue}>{getFlightTypeLabel()}</Text>
                        </View>

                        <View style={styles.summaryCol}>
                            <View style={styles.summaryIconWrapper}>
                                <Image source={Images.trip} style={styles.summaryIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.summaryLabel}>Trip Type</Text>
                            <Text style={styles.summaryValue}>{getTripTypeLabel()}</Text>
                        </View>

                        <View style={styles.summaryCol}>
                            <View style={styles.summaryIconWrapper}>
                                <Image source={Images.calendar} style={styles.summaryIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.summaryLabel}>Flights Per Year</Text>
                            <Text style={styles.summaryValue}>
                                {tripsPerYear * (tripType === 'roundtrip' ? 2 : tripType === 'multicity' ? 3 : 1)}
                            </Text>
                        </View>

                        <View style={styles.summaryCol}>
                            <View style={styles.summaryIconWrapper}>
                                <Image source={Images.seat} style={styles.summaryIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.summaryLabel}>Seat Class</Text>
                            <Text style={styles.summaryValue}>{getSeatClassLabel()}</Text>
                        </View>
                    </View>
                </View>
                {/* Emission Breakdown Block */}
                <View style={styles.breakdownCard}>
                    <Text style={styles.breakdownTitle}>Emission Breakdown</Text>
                    <View style={styles.breakdownGrid}>

                        <View style={styles.breakdownBox}>
                            <Image source={Images.flight} style={styles.breakdownBoxIcon} resizeMode="contain" />
                            <Text style={styles.breakdownBoxLabel}>Total Flights</Text>
                            <Text style={styles.breakdownBoxVal}>
                                {tripsPerYear * (tripType === 'roundtrip' ? 2 : tripType === 'multicity' ? 3 : 1)}
                            </Text>
                            <Text style={styles.breakdownBoxSub}>Flights / Year</Text>
                        </View>

                        <View style={styles.breakdownBox}>
                            <Image source={Images.distance_icon} style={styles.breakdownBoxIcon} resizeMode="contain" />
                            <Text style={styles.breakdownBoxLabel}>Estimated Flight Distance</Text>
                            <Text style={styles.breakdownBoxVal}>{annualDistance.toLocaleString()} km</Text>
                            <Text style={styles.breakdownBoxSub}>(Approx.)</Text>
                        </View>

                        <View style={styles.breakdownBox}>
                            <Image source={Images.leaf} style={styles.breakdownBoxIcon} resizeMode="contain" />
                            <Text style={styles.breakdownBoxLabel}>CO₂ Emitted</Text>
                            <Text style={styles.breakdownBoxVal}>{annualEmissionsKg.toLocaleString()} kg</Text>
                            <Text style={styles.breakdownBoxSub}>CO₂</Text>
                        </View>

                        <View style={styles.breakdownBox}>
                            <Image source={Images.score} style={styles.breakdownBoxIcon} resizeMode="contain" />
                            <Text style={styles.breakdownBoxLabel}>Carbon Score</Text>
                            <View style={styles.scoreBadgeRow}>
                                <View style={[styles.scoreStatusDot, { backgroundColor: isHigher ? '#D97706' : '#10B981' }]} />
                                <Text style={[styles.scoreStatusText, { color: isHigher ? '#D97706' : '#10B981' }]}>
                                    {isHigher ? 'Moderate Impact' : 'Low Impact'}
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
                {/* Double column visual charts */}
                <View style={styles.chartsRow}>

                    {/* Card 1: Your Emission Breakdown (Pie Representation) */}
                    <View style={styles.chartHalfCard}>
                        <Text style={styles.chartTitle}>Your Emission Breakdown</Text>
                        <View style={styles.pieContainer}>
                            {/* Replicating the circle structure */}
                            <View style={styles.pieCircle}>
                                <Text style={styles.pieCircleInnerVal}>{annualTons}</Text>
                                <Text style={styles.pieCircleInnerUnit}>Tons CO₂</Text>
                            </View>
                        </View>

                        <View style={styles.pieLegend}>
                            <View style={styles.pieLegendItem}>
                                <View style={[styles.pieLegendDot, { backgroundColor: '#0A5F35' }]} />
                                <Text style={styles.pieLegendLabel}>Flight Emissions</Text>
                                <Text style={styles.pieLegendVal}>{annualTons} Tons (100%)</Text>
                            </View>
                            <View style={styles.pieLegendItem}>
                                <View style={[styles.pieLegendDot, { backgroundColor: '#E2E8F0' }]} />
                                <Text style={styles.pieLegendLabel}>Remaining Carbon Budget</Text>
                                <Text style={styles.pieLegendVal}>{remainingBudget} Tons ({remainingPct}%)</Text>
                            </View>
                            <View style={styles.pieLegendItem}>
                                <View style={[styles.pieLegendDot, { backgroundColor: '#3B82F6' }]} />
                                <Text style={styles.pieLegendLabel}>Offset Needed</Text>
                                <Text style={styles.pieLegendVal}>{annualTons} Tons ({offsetPct}%)</Text>
                            </View>
                        </View>

                        <View style={styles.pieFooterBanner}>
                            <Image source={Images.leaf} style={styles.pieFooterLeafIcon} resizeMode="contain" />
                            <Text style={styles.pieFooterText}>Every small step helps create a big impact.</Text>
                            <Image source={Images.treeIcon} style={styles.pieFooterForestImage} resizeMode="contain" />
                        </View>
                    </View>

                    {/* Card 2: Compared with an Average Traveler (Bar Chart) */}
                    <View style={styles.chartHalfCard}>
                        <Text style={styles.chartTitle}>Compared with an Average Traveler</Text>

                        {/* Custom Bar Graph */}
                        <View>
                            <View style={styles.barChartContainer}>
                                <View style={styles.barCol}>
                                    <Text style={styles.barVal}>
                                        1.95 <Text style={styles.barValUnit}>Tons</Text>
                                    </Text>
                                    <View style={[styles.barFill, { height: 35, backgroundColor: '#A7F3D0' }]} />
                                </View>

                                <View style={styles.barCol}>
                                    <Text style={styles.barVal}>
                                        {annualTons} <Text style={styles.barValUnit}>Tons</Text>
                                    </Text>
                                    <View style={[styles.barFill, { height: 35 * (annualTons / averageTons), backgroundColor: '#065F46' }]} />
                                </View>
                            </View>

                            <View style={styles.barLabelsRow}>
                                <Text style={styles.barLabel}>Average Annual Flight Emissions</Text>
                                <Text style={styles.barLabel}>Your Annual Flight Emissions</Text>
                            </View>
                        </View>

                        {/* Comparison Alert Banner */}
                        <View style={[styles.comparisonAlert, { backgroundColor: isHigher ? '#FFF8E6' : '#ECFDF5', borderColor: isHigher ? '#FFE8CC' : '#D1FAE5' }]}>
                            <View style={[styles.comparisonAlertIconWrapper, { backgroundColor: isHigher ? '#FFA751' : '#10B981' }]}>
                                <Text style={styles.comparisonAlertIconText}>{isHigher ? '↑' : '↓'}</Text>
                            </View>
                            <View style={styles.comparisonAlertContent}>
                                <Text style={[styles.comparisonAlertTitle, { color: isHigher ? '#D97706' : '#047857' }]}>
                                    {isHigher ? 'Higher than Average' : 'Lower than Average'}
                                </Text>
                                <Text style={[styles.comparisonAlertDesc, { color: isHigher ? '#B45309' : '#065F46' }]}>
                                    You emit {difference} Tons CO₂ {isHigher ? 'more' : 'less'} than the average traveler.
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
                {/* GeoTree AI Recommendation Card */}
                <View style={styles.recCard}>
                    <Image source={Images.AI} style={styles.recClipboardGraphic} resizeMode="contain" />
                    <View style={styles.recIconContainer}>
                        <Text style={styles.recIconText}>AI</Text>
                    </View>
                    <View style={styles.recContent}>
                        <View style={styles.recHeaderRow}>
                            <Text style={styles.recHeaderTitle}>GeoTree Recommendation</Text>
                        </View>
                        <Text style={styles.recText}>
                            Choosing economy class and reducing one round-trip flight annually could significantly lower your flight-related carbon footprint.
                        </Text>
                    </View>
                </View>
                {/* What This Means Equivalents Section */}
                <View style={styles.whatMeansSection}>
                    <Text style={styles.whatMeansTitle}>What This Means</Text>

                    <View style={styles.whatMeansItem}>
                        <View style={styles.whatMeansIconWrapper}>
                            <Image source={Images.treeIcon} style={styles.whatMeansIcon} resizeMode="contain" />
                        </View>
                        <View>
                            <Text style={styles.whatMeansTextLabel}>Equivalent to planting</Text>
                            <Text style={styles.whatMeansTextVal}>{treesRequired} trees</Text>
                        </View>
                    </View>

                    <View style={styles.whatMeansItem}>
                        <View style={styles.whatMeansIconWrapper}>
                            <Image source={Images.car} style={styles.whatMeansIcon} resizeMode="contain" />
                        </View>
                        <View>
                            <Text style={styles.whatMeansTextLabel}>Equivalent to driving</Text>
                            <Text style={styles.whatMeansTextVal}>~{carKm.toLocaleString()} km by car</Text>
                        </View>
                    </View>

                    <View style={styles.whatMeansItemLast}>
                        <View style={styles.whatMeansIconWrapper}>
                            <Image source={Images.electricity} style={styles.whatMeansIcon} resizeMode="contain" />
                        </View>
                        <View>
                            <Text style={styles.whatMeansTextLabel}>Equivalent to powering</Text>
                            <Text style={styles.whatMeansTextVal}>a home for ~{homeMonths} months</Text>
                        </View>
                    </View>
                </View>
                {/* Offset Your Flight Impact Card */}
                <View style={styles.offsetCard}>
                    <View style={styles.offsetHeaderRow}>
                        <Text style={styles.offsetTitle}>Offset Your Flight Impact</Text>
                        <View style={styles.offsetRecommendBadge}>
                            <Text style={styles.offsetRecommendText}>Recommended</Text>
                        </View>
                    </View>

                    <View style={styles.offsetBodyRow}>
                        <View style={styles.offsetGraphicCol}>
                            <View style={styles.offsetCircleContainer}>
                                <Image source={Images.treeIcon} style={styles.offsetCircleTreeIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.offsetTreesText}>{treesRequired}</Text>
                            <Text style={styles.offsetTreesSub}>Trees</Text>
                        </View>

                        <View style={styles.offsetInfoCol}>
                            <View style={styles.offsetFeatureRow}>
                                <Image source={Images.check} style={styles.offsetCheckIcon} resizeMode="contain" />
                                <Text style={styles.offsetFeatureText}>GPS Verified Plantation</Text>
                            </View>
                            <View style={styles.offsetFeatureRow}>
                                <Image source={Images.check} style={styles.offsetCheckIcon} resizeMode="contain" />
                                <Text style={styles.offsetFeatureText}>Digital Carbon Offset Certificate</Text>
                            </View>
                            <View style={styles.offsetFeatureRow}>
                                <Image source={Images.check} style={styles.offsetCheckIcon} resizeMode="contain" />
                                <Text style={styles.offsetFeatureText}>Growth Updates</Text>
                            </View>
                            <View style={styles.offsetFeatureRow}>
                                <Image source={Images.check} style={styles.offsetCheckIcon} resizeMode="contain" />
                                <Text style={styles.offsetFeatureText}>Impact Tracking</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.offsetPricingRow}>
                        <View style={styles.offsetCostLabelContainer}>
                            <Text style={styles.offsetCostLabel}>Estimated Offset</Text>
                            <View style={styles.offsetCostValueRow}>
                                <Text style={styles.offsetCostVal}>{annualTons} Tons CO₂</Text>
                            </View>
                            <Text style={styles.offsetDifferenceText}>Make a difference today!</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.offsetNowButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.offsetNowButtonText}>Offset Now</Text>
                            <Image source={Images.back} style={[styles.offsetNowButtonArrow, { transform: [{ rotate: '180deg' }] }]} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* Back Button Bar at the bottom */}
            <TouchableOpacity
                style={styles.backAssessmentBarButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('FlightCarbon')}
            >
                <Image source={Images.back} style={styles.backAssessmentArrow} resizeMode="contain" />
                <Text style={styles.backAssessmentText}>Back to Flight Assessment</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default FlightEmissionCalculationScreen;
