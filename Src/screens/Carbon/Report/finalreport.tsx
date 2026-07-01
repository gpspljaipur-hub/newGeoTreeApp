import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import Images from '../../../constants/images';
import { Colors } from '../../../comman/Colors';

const FinalReportScreen = () => {
    const navigation = useNavigation<any>();

    // Mock data for the cards & breakdown
    const totalCO2 = '6.42';
    const carbonScore = '78';

    const breakdownData = [
        {
            id: 'travel',
            label: 'Travel',
            value: '1.44',
            percentage: '22%',
            color: '#3B82F6', // Blue
            icon: Images.travel,
        },
        {
            id: 'food',
            label: 'Food',
            value: '0.92',
            percentage: '14%',
            color: '#10B981', // Green
            icon: Images.food,
        },
        {
            id: 'electricity',
            label: 'Electricity',
            value: '1.24',
            percentage: '19%',
            color: '#EAB308', // Orange
            icon: Images.electricity,
        },
        {
            id: 'flights',
            label: 'Flights',
            value: '2.82',
            percentage: '45%',
            color: '#9061F9', // Purple
            icon: Images.flight,
        },
    ];

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {/* Hero Section Container */}
                <ImageBackground
                    source={Images.carbon_bg}
                    style={styles.topSectionWrapper}
                    resizeMode="cover"
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={Images.back}
                                style={styles.backIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.headerDownloadButton}
                            activeOpacity={0.7}
                        >
                            <Image
                                source={Images.download}
                                style={styles.headerDownloadIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Hero Header Title */}
                    <View style={styles.heroSection}>
                        <View style={styles.heroTextContent}>
                            <Text style={styles.heroSubtitle}>Your Personal</Text>
                            <Text style={styles.heroTitle}>
                                Carbon Footprint{'\n'}
                                <Text style={styles.heroTitleGreen}>Report </Text>
                                <Image source={Images.leaf} style={styles.heroTitleIcon} />
                            </Text>
                            <Text style={styles.heroDesc}>
                                Here's your annual carbon footprint summary across all activities.
                            </Text>
                        </View>
                    </View>

                    {/* Top Row with Carbon Score card & bulb seedling & footprint card */}
                    <View style={styles.topVisualsRow}>
                        {/* Annual Carbon Footprint Card */}
                        <View style={styles.annualFootprintWrapper}>
                            <Text style={styles.annualFootprintTitle}>Your Annual Carbon Footprint</Text>
                            <Text style={styles.annualFootprintVal}>{totalCO2}</Text>
                            <Text style={styles.annualFootprintUnit}>Tons CO₂ / Year</Text>
                        </View>

                        {/* Mid-screen Bubble Tree Illustration */}
                        <View style={styles.bulbGraphicWrapper}>
                            <Image
                                source={Images.bubbletree}
                                style={styles.bubbleTreeImage}
                                resizeMode="contain"
                            />
                            <Text style={styles.geotreeStoneText}>🌳Geotree</Text>
                        </View>                        {/* Carbon Score Card */}
                        <View style={styles.carbonScoreWrapper}>
                            <Text style={styles.carbonScoreTitle}>Carbon Score</Text>

                            {/* Circular progress visual */}
                            <View style={styles.progressCircleOuter}>
                                <View style={styles.progressCircleGreenSector} />
                                <Text style={styles.progressCircleValue}>{carbonScore}</Text>
                                <Text style={styles.progressCircleTotal}>/100</Text>
                            </View>

                            {/* Badge */}
                            <View style={styles.scoreBadge}>
                                <Image source={Images.leaf} style={styles.scoreBadgeIcon} />
                                <Text style={styles.scoreBadgeText}>Better Than Average</Text>
                            </View>

                            <Text style={styles.scoreDesc}>
                                Keep it up! You're making a positive impact.
                            </Text>
                        </View>
                    </View>
                </ImageBackground>

                {/* Category Breakdown Horizontal Row */}
                <View style={styles.categoriesContainer}>
                    {breakdownData.map((item, idx) => (
                        <View key={item.id} style={styles.catItem}>
                            <View style={[styles.catIconBg, { backgroundColor: item.color + '18' }]}>
                                <Image
                                    source={item.icon}
                                    style={[styles.catIcon, { tintColor: item.color }]}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.catLabel}>{item.label}</Text>
                            <Text style={styles.catValue}>{item.value}</Text>
                            <Text style={styles.catUnit}>Tons CO₂</Text>
                            <View style={[styles.catBadge, { backgroundColor: item.color + '1F' }]}>
                                <Text style={[styles.catBadgeText, { color: item.color }]}>{item.percentage}</Text>
                            </View>
                        </View>
                    ))}

                    {/* Total Emissions item */}
                    <View style={styles.catItemLast}>
                        <View style={[styles.catIconBg, { backgroundColor: '#05621312' }]}>
                            <Image
                                source={Images.leaf}
                                style={[styles.catIcon, { tintColor: '#056213' }]}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.catLabel}>Total Emissions</Text>
                        <Text style={[styles.catValue, { color: '#056213' }]}>{totalCO2}</Text>
                        <Text style={styles.catUnit}>Tons CO₂ {'\n'}/ Year</Text>
                        <Image source={Images.leaf} style={styles.totalEmissionsLeafBg} />
                    </View>
                </View>

                {/* Charts / Analytics Row */}
                <View style={styles.analyticsRow}>

                    {/* Donut Chart Card */}
                    <View style={styles.analyticsCard}>
                        <Text style={styles.analyticsCardTitle}>Where do your emissions come from?</Text>
                        <View style={styles.donutChartWrapper}>

                            {/* Segmented Ring Chart */}
                            <View style={styles.donutRing}>
                                <View style={styles.donutSegment1} />
                                <View style={styles.donutSegment2} />
                                <View style={styles.donutSegment3} />
                                <View style={styles.donutSegment4} />
                                <View style={styles.donutHole} />
                                <Text style={styles.donutCenterText}>CO₂</Text>
                            </View>

                            {/* Legend list */}
                            <View style={styles.donutLegendList}>
                                {breakdownData.map((item) => (
                                    <View key={item.id} style={styles.legendRow}>
                                        <View style={styles.legendLeft}>
                                            <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                                            <Text style={styles.legendLabel}>{item.label}</Text>
                                        </View>
                                        <Text style={styles.legendPercent}>{item.percentage}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>

                    {/* Compared to Average Indian Citizen Card */}
                    <View style={styles.analyticsCard}>
                        <Text style={styles.analyticsCardTitle}>Compared to Average Indian Citizen</Text>
                        <View style={styles.comparisonWrapper}>

                            {/* Bars */}
                            <View style={styles.barsRow}>
                                <View style={styles.barColumn}>
                                    <Text style={styles.barValue}>1.9 <Text style={styles.barValueUnit}>t</Text></Text>
                                    <View style={styles.barAvg} />
                                    <Text style={styles.barLabel}>Average</Text>
                                </View>
                                <View style={styles.barColumn}>
                                    <Text style={styles.barValue}>{totalCO2} <Text style={styles.barValueUnit}>t</Text></Text>
                                    <View style={styles.barYour} />
                                    <Text style={styles.barLabel}>Your Footprint</Text>
                                </View>
                            </View>

                            {/* Custom Gradient Slider scale */}
                            <View>
                                <LinearGradient
                                    colors={['#10B981', '#FBBF24', '#EF4444']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.gradientTrack}
                                >
                                    <View style={styles.gradientTrackThumb} />
                                </LinearGradient>
                                <View style={styles.sliderLabelRow}>
                                    <Text style={styles.sliderLabel}>Lower</Text>
                                    <Text style={styles.sliderLabel}>Average</Text>
                                    <Text style={styles.sliderLabel}>Higher</Text>
                                </View>
                            </View>

                            {/* Alert highlighting */}
                            <View style={styles.comparisonHighlightBox}>
                                <Text style={styles.comparisonHighlightText}>
                                    Your footprint is <Text style={styles.comparisonHighlightBold}>3.4x higher</Text> than the average Indian citizen.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Offsetting Section */}
                <View style={styles.offsetSectionContainer}>
                    <View style={styles.offsetIntroRow}>
                        <Image
                            source={Images.rotatehand_tree}
                            style={styles.offsetIntroImage}
                            resizeMode="contain"
                        />
                        <View style={styles.offsetIntroTextWrapper}>
                            <Text style={styles.offsetIntroLabel}>Offset Your Emissions</Text>
                            <Text style={styles.offsetIntroDesc}>To Offset 100% of your annual emissions</Text>
                            <Text style={styles.offsetIntroMainText}>Plant 292 Trees</Text>
                            <Text style={styles.offsetIntroSub}>and become carbon neutral.</Text>
                        </View>
                    </View>

                    {/* Offset Option cards */}
                    <View style={styles.offsetCardsRow}>

                        {/* Starter Impact Card */}
                        <TouchableOpacity style={styles.offsetOptionCard} activeOpacity={0.8}>
                            <Text style={styles.offsetOptionTitle}>Starter Impact</Text>
                            <Image
                                source={Images.one_tree_plant}
                                style={styles.offsetOptionImage}
                                resizeMode="contain"
                            />
                            <Text style={styles.offsetOptionCount}>73 Trees</Text>
                            <Text style={styles.offsetOptionPercent}>25% Offset</Text>
                            <Text style={styles.offsetOptionPrice}>₹525</Text>
                        </TouchableOpacity>

                        {/* Green Impact Card (Selected / Featured) */}
                        <TouchableOpacity style={[styles.offsetOptionCard, styles.offsetOptionCardSelected]} activeOpacity={0.8}>
                            <Text style={styles.offsetOptionTitle}>Green Impact</Text>
                            <Image
                                source={Images.five_trees_plant}
                                style={styles.offsetOptionImage}
                                resizeMode="contain"
                            />
                            <Text style={[styles.offsetOptionCount, styles.offsetOptionCountSelected]}>146 Trees</Text>
                            <Text style={styles.offsetOptionPercent}>50% Offset</Text>
                            <Text style={styles.offsetOptionPrice}>₹1,050</Text>
                            <View style={styles.offsetOptionBadge}>
                                <Text style={styles.offsetOptionBadgeText}>Most Popular</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Carbon Neutral Card */}
                        <TouchableOpacity style={styles.offsetOptionCard} activeOpacity={0.8}>
                            <Text style={styles.offsetOptionTitle}>Carbon Neutral</Text>
                            <Image
                                source={Images.twenty_five_trees_plant}
                                style={styles.offsetOptionImage}
                                resizeMode="contain"
                            />
                            <Text style={styles.offsetOptionCount}>292 Trees</Text>
                            <Text style={styles.offsetOptionPercent}>100% Offset</Text>
                            <Text style={styles.offsetOptionPrice}>₹2,100</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* AI Insights & Equivalence Section */}
                <View style={styles.insightsRow}>

                    {/* AI Insight Card */}
                    <View style={styles.insightCard}>
                        <View style={styles.insightHeaderRow}>
                            <View style={styles.aiIconBg}>
                                <Image source={Images.leaf} style={styles.aiIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.insightCardTitle}>GeoTree AI Insight</Text>
                        </View>
                        <Text style={styles.insightBodyText}>
                            Your biggest emission source is{' '}
                            <Text style={styles.insightBodyHighlight}>Flights (45%)</Text>.
                        </Text>
                        <Text style={styles.insightBodyDesc}>
                            Reducing one annual round trip flight can lower your emissions by 18%.
                        </Text>
                    </View>

                    {/* Footprint Equivalence Card */}
                    <View style={styles.insightCard}>
                        <Text style={styles.insightCardTitle}>Your Annual Footprint Equals</Text>
                        <View style={styles.equivalenceContent}>
                            <View style={styles.equivalenceRow}>
                                <View style={styles.equivalenceItem}>
                                    <View style={styles.equivalenceIconBg}>
                                        <Image source={Images.travel} style={styles.equivalenceIcon} resizeMode="contain" />
                                    </View>
                                    <Text style={styles.equivalenceLabel}>Driving</Text>
                                    <Text style={styles.equivalenceVal}>25,000 KM</Text>
                                </View>

                                <Text style={styles.equivalenceOr}>or</Text>

                                <View style={styles.equivalenceItem}>
                                    <View style={styles.equivalenceIconBg}>
                                        <Image source={Images.home} style={[styles.equivalenceIcon, { tintColor: '#EAB308' }]} resizeMode="contain" />
                                    </View>
                                    <Text style={styles.equivalenceLabel}>Powering home</Text>
                                    <Text style={styles.equivalenceVal}>for 3 years</Text>
                                </View>

                                <Text style={styles.equivalenceOr}>or</Text>

                                <View style={styles.equivalenceItem}>
                                    <View style={[styles.equivalenceIconBg, styles.equivalenceIconBgGreen]}>
                                        <Image source={Images.treeIcon} style={[styles.equivalenceIcon, { tintColor: '#056213' }]} resizeMode="contain" />
                                    </View>
                                    <Text style={styles.equivalenceLabel}>Planting</Text>
                                    <Text style={styles.equivalenceVal}>292 trees</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Actions Horizontal Row (Download, Email, Share) */}
                <View style={styles.footerActionsContainer}>
                    <TouchableOpacity style={styles.footerActionBtn} activeOpacity={0.7}>
                        <Image source={Images.download} style={styles.footerActionIcon} resizeMode="contain" />
                        <View style={styles.footerActionTextContainer}>
                            <Text style={styles.footerActionTitle}>Download PDF Report</Text>
                            <Text style={styles.footerActionDesc}>Detailed breakdown of your footprint</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.footerActionDivider} />

                    <TouchableOpacity style={styles.footerActionBtn} activeOpacity={0.7}>
                        <Image source={Images.email} style={styles.footerActionIcon} resizeMode="contain" />
                        <View style={styles.footerActionTextContainer}>
                            <Text style={styles.footerActionTitle}>Email Report</Text>
                            <Text style={styles.footerActionDesc}>Send report to your email</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.footerActionDivider} />

                    <TouchableOpacity style={styles.footerActionBtn} activeOpacity={0.7}>
                        <Image source={Images.share} style={styles.footerActionIcon} resizeMode="contain" />
                        <View style={styles.footerActionTextContainer}>
                            <Text style={styles.footerActionTitle}>Share Report</Text>
                            <Text style={styles.footerActionDesc}>Share impact with others</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Bottom CTA Button */}
                <View style={styles.ctaButtonContainer}>
                    <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                        <Image source={Images.treeIcon} style={styles.ctaButtonIcon} resizeMode="contain" />
                        <Text style={styles.ctaButtonText}>Offset My Carbon Footprint</Text>
                        <Image source={Images.back} style={[styles.ctaButtonArrow, { transform: [{ rotate: '180deg' }] }]} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FinalReportScreen;