import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import Images from '../../../../constants/images';
import fonts from '../../../../comman/fonts';
import { Colors } from '../../../../comman/Colors';

const { width } = Dimensions.get('window');

const TravelEmissionCalculationScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    // Input parameters passed via route parameters
    const {
        selectedMode = '1',
        distance = 600,
        selectedFuel = '1',
        selectedOccupancy = '1',
    } = route.params || {};

    // Factors & Maps matching TravelCarbonScreen
    const MODE_FACTORS: Record<string, { label: string; factor: number; icon: any }> = {
        '1': { label: 'Car', factor: 0.2, icon: Images.travel_mode_car },
        '2': { label: 'Bike', factor: 0.05, icon: Images.travel_mode_bike },
        '3': { label: 'Public Transport', factor: 0.03, icon: Images.travel_mode_public },
        '4': { label: 'Walking', factor: 0.0, icon: Images.travel_mode_walk },
        '5': { label: 'Other', factor: 0.15, icon: Images.travel_mode_car },
    };

    const FUEL_FACTORS: Record<string, { label: string; factor: number; co2PerLitre: string; efficiency: string }> = {
        '1': { label: 'Petrol', factor: 1.0, co2PerLitre: '2.31 kg CO₂/litre', efficiency: '15 km/litre' },
        '2': { label: 'Diesel', factor: 1.2, co2PerLitre: '2.68 kg CO₂/litre', efficiency: '18 km/litre' },
        '3': { label: 'CNG', factor: 0.8, co2PerLitre: '1.93 kg CO₂/kg', efficiency: '22 km/kg' },
        '4': { label: 'LPG', factor: 0.9, co2PerLitre: '1.51 kg CO₂/kg', efficiency: '12 km/kg' },
        '5': { label: 'Electric', factor: 0.2, co2PerLitre: '0.82 kg CO₂/kWh', efficiency: '6 km/kWh' },
    };

    const modeData = MODE_FACTORS[selectedMode] || MODE_FACTORS['1'];
    const fuelData = FUEL_FACTORS[selectedFuel] || FUEL_FACTORS['1'];
    const occupancyVal = parseInt(selectedOccupancy) || 1;

    // Monthly emissions calculation
    const monthlyEmissions = (distance * modeData.factor * fuelData.factor) / occupancyVal;

    // Annual emissions calculation
    const annualEmissionsKg = Math.round(monthlyEmissions * 12);
    const annualEmissionsTons = parseFloat((annualEmissionsKg / 1000).toFixed(2));

    // Trees Required (1 tree offsets ~22 kg CO2 per year)
    const treesRequired = Math.ceil(annualEmissionsKg / 22);

    // Offset cost (₹25 per tree)
    const offsetCost = treesRequired * 25;

    // Daily commute distance approximation
    const dailyDistance = Math.round(distance / 30);

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Header Section with Landscape Background */}
                <ImageBackground
                    source={Images.calculator_icon}
                    style={styles.headerBg}
                    resizeMode="cover"
                >
                    <View style={styles.headerOverlay}>
                        <View style={styles.headerRow}>
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

                            <View style={styles.headerTitleContainer}>
                                <Text style={styles.headerTitle}>Travel Emission Calculation</Text>
                                <Text style={styles.headerSubtitle}> Here's how we calculated your travel emissions</Text>

                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Overlapping Key Stats Cards */}
                <View style={styles.statsCardContainer}>
                    <View style={styles.statsCard}>
                        {/* Stat 1: Annual Emissions */}
                        <View style={styles.statItem}>
                            <View style={[styles.statIconWrapper, { backgroundColor: '#0A5F35', width: 28, height: 28, borderRadius: 20 }]}>
                                <Image
                                    source={Images.co2Cloud}
                                    style={[styles.statIcon, { tintColor: '#FFFFFF', width: 14, height: 14 }]}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.statTextContainer}>
                                <Text style={styles.statLabel}>Your Estimated Annual Emissions</Text>
                                <Text style={styles.statValue}>
                                    {annualEmissionsTons} <Text style={styles.statUnit}>Tons CO₂</Text>
                                </Text>
                                <Text style={styles.statSubText}>This is from your travel activities</Text>
                            </View>
                        </View>

                        <View style={styles.verticalDivider} />

                        {/* Stat 2: Trees Required */}
                        <View style={styles.statItem2}>
                            <View style={[styles.statIconWrapper, { backgroundColor: '#F3F9F5', width: 28, height: 28, borderRadius: 14 }]}>
                                <Image
                                    source={Images.treeIcon}
                                    style={[styles.statIcon, { tintColor: '#0A5F35', width: 14, height: 14 }]}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.statTextContainer}>
                                <Text style={styles.statLabel}>Trees Required</Text>
                                <Text style={styles.statValue}>
                                    {treesRequired}
                                </Text>
                                <Text style={styles.statSubText}>To Offset 1 Year</Text>
                            </View>
                        </View>

                        <View style={styles.verticalDivider} />

                        {/* Stat 3: Offset Cost */}
                        <View style={styles.statItem3}>
                            <View style={[styles.statIconWrapper, { backgroundColor: '#F3F9F5', width: 28, height: 28, borderRadius: 14 }]}>
                                <Image
                                    source={Images.leaf}
                                    style={[styles.statIcon, { tintColor: '#0A5F35', width: 14, height: 14 }]}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.statTextContainer}>
                                <Text style={styles.statLabel}>Offset Cost (Est.)</Text>
                                <Text style={styles.statValue}>
                                    ₹{offsetCost.toLocaleString('en-IN')}
                                </Text>
                                <Text style={styles.statSubText}>For {treesRequired} Trees</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Calculation Breakdown Section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Calculation Breakdown</Text>

                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Formula Used</Text>
                        <Text style={styles.formulaText}>
                            Emissions (kg CO₂) =
                            Distance (km) × Fuel Efficiency
                            × Emission Factor × Occupancy
                            × Days per Year
                        </Text>
                    </View>

                    <View style={styles.breakdownRow}>
                        {/* Table of Parameters */}
                        <View style={styles.tableCard}>
                            {/* Table Headers */}
                            <View style={styles.tableHeaderRow}>
                                <Text style={[styles.tableHeaderCell, { flex: 1.4 }]}>Parameter</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.1, textAlign: 'center' }]}>Your Input</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.3, textAlign: 'center' }]}>Factor Used</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1, textAlign: 'right' }]}>Emissions</Text>
                            </View>

                            {/* Row 1: Monthly Distance */}
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCellLabel, { flex: 1.4 }]}>
                                    <Image source={Images.travel_speedometer} style={styles.tableIcon} resizeMode="contain" />
                                    <Text style={styles.tableLabelText}>Monthly Distance</Text>
                                </View>
                                <Text style={[styles.tableValueText, { flex: 1.1, textAlign: 'center' }]}>{distance} km</Text>
                                <Text style={[styles.tableValueText, { flex: 1.3, textAlign: 'center', color: '#94A3B8' }]}>-</Text>
                                <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right', color: '#94A3B8' }]}>-</Text>
                            </View>

                            {/* Row 2: Daily Distance */}
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCellLabel, { flex: 1.4 }]}>
                                    <Image source={Images.travel_speedometer} style={styles.tableIcon} resizeMode="contain" />
                                    <Text style={styles.tableLabelText}>Daily Distance</Text>
                                </View>
                                <Text style={[styles.tableValueText, { flex: 1.1, textAlign: 'center' }]}>{dailyDistance} km/day</Text>
                                <Text style={[styles.tableValueText, { flex: 1.3, textAlign: 'center', color: '#94A3B8' }]}>-</Text>
                                <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right', color: '#94A3B8' }]}>-</Text>
                            </View>

                            {/* Row 3: Days per Year */}
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCellLabel, { flex: 1.4 }]}>
                                    <Image source={Images.calendar} style={styles.tableIcon} resizeMode="contain" />
                                    <Text style={styles.tableLabelText}>Days per Year</Text>
                                </View>
                                <Text style={[styles.tableValueText, { flex: 1.1, textAlign: 'center' }]}>300 days</Text>
                                <Text style={[styles.tableValueText, { flex: 1.3, textAlign: 'center', color: '#94A3B8' }]}>-</Text>
                                <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right', color: '#94A3B8' }]}>-</Text>
                            </View>

                            {/* Row 4: Fuel Type */}
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCellLabel, { flex: 1.4 }]}>
                                    <Image source={Images.drop} style={styles.tableIcon} resizeMode="contain" />
                                    <Text style={styles.tableLabelText}>Fuel Type</Text>
                                </View>
                                <Text style={[styles.tableValueText, { flex: 1.1, textAlign: 'center' }]}>
                                    {selectedMode === '4' ? 'N/A' : fuelData.label}
                                </Text>
                                <Text style={[styles.tableValueText, { flex: 1.3, textAlign: 'center', fontSize: 10.5 }]}>
                                    {selectedMode === '4' ? '-' : fuelData.co2PerLitre}
                                </Text>
                                <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right', color: '#94A3B8' }]}>-</Text>
                            </View>

                            {/* Row 5: Vehicle Efficiency */}
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCellLabel, { flex: 1.4 }]}>
                                    <Image source={Images.travel_speedometer} style={styles.tableIcon} resizeMode="contain" />
                                    <Text style={styles.tableLabelText}>Efficiency</Text>
                                </View>
                                <Text style={[styles.tableValueText, { flex: 1.1, textAlign: 'center' }]}>
                                    {selectedMode === '4' ? 'N/A' : fuelData.efficiency}
                                </Text>
                                <Text style={[styles.tableValueText, { flex: 1.3, textAlign: 'center', color: '#94A3B8' }]}>-</Text>
                                <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right', color: '#94A3B8' }]}>-</Text>
                            </View>

                            {/* Row 6: Vehicle Occupancy */}
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCellLabel, { flex: 1.4 }]}>
                                    <Image source={Images.group} style={styles.tableIcon} resizeMode="contain" />
                                    <Text style={styles.tableLabelText}>Occupancy</Text>
                                </View>
                                <Text style={[styles.tableValueText, { flex: 1.1, textAlign: 'center' }]}>
                                    {occupancyVal} Person{occupancyVal > 1 ? 's' : ''}
                                </Text>
                                <Text style={[styles.tableValueText, { flex: 1.3, textAlign: 'center', color: '#94A3B8' }]}>-</Text>
                                <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right', color: '#94A3B8' }]}>-</Text>
                            </View>

                            {/* Summary Bottom Bar */}
                            <View style={styles.tableSummaryRow}>
                                <Text style={styles.tableSummaryLabel}>Total Annual Emissions</Text>
                                <View style={styles.tableSummaryValueContainer}>
                                    <Text style={styles.tableSummaryValue}>
                                        {annualEmissionsKg.toLocaleString('en-IN')} kg CO₂
                                    </Text>
                                    <Text style={styles.tableSummaryValueSub}>
                                        = {annualEmissionsTons} Tons CO₂
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Where does this come from? */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Where does this come from?</Text>

                    <View style={styles.chartsContainer}>
                        {/* Donut Chart & Legend Section */}
                        <View style={styles.donutCard}>
                            <View style={styles.donutRing}>
                                <Text style={styles.donutPercentage}>100%</Text>
                            </View>
                            <View style={styles.donutLegend}>
                                <View style={styles.legendDot} />
                                <Text style={styles.legendText}>Road Travel</Text>
                                <Text style={styles.legendVal}>100%</Text>
                            </View>
                        </View>

                        <View style={styles.howItWorksCard}>
                            <View style={styles.howItWorksIconContainer}>
                                <Image
                                    source={Images.plant}
                                    style={styles.howItWorksIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.howItWorksTextContainer}>
                                <Text style={styles.howItWorksTitle}>How it works?</Text>
                                <Text numberOfLines={2} style={styles.howItWorksText}>
                                    We use globally recognized emission factors from IPCC and Govt. of India databases to calculate your carbon footprint.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Every calculation is an estimate Banner */}
                <View style={styles.estimateBanner}>
                    <View style={styles.estimateBannerLeft}>
                        <View style={styles.estimateIconCircle}>
                            <Image source={Images.leaf} style={styles.estimateBannerIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.estimateTextContainer}>
                            <Text style={styles.estimateBannerTitle}>Every calculation is an estimate</Text>
                            <Text style={styles.estimateBannerText}>
                                Actual emissions may vary based on real-world conditions.
                            </Text>
                        </View>
                    </View>
                    <Image source={Images.banner_tree} style={styles.bannerTreeImage} resizeMode="contain" />
                </View>

                {/* Want more accurate results? Card */}
                <View style={styles.accurateCard}>
                    <View style={styles.accurateIconContainer}>
                        <Image source={Images.impact} style={styles.accurateIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.accurateTextContainer}>
                        <Text style={styles.accurateTitle}>Want more accurate results?</Text>
                        <Text style={styles.accurateDesc}>
                            Connect your Google Maps timeline or vehicle data for more precise calculation.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.connectButton} activeOpacity={0.7}>
                        <Text style={styles.connectButtonText}>Connect Data</Text>
                        <Text style={styles.connectButtonIcon}>→</Text>
                    </TouchableOpacity>
                </View>

                {/* Back to Travel Assessment CTA */}
                <TouchableOpacity
                    style={styles.backCtaButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backCtaText}>Back to Travel Assessment</Text>
                    <Text style={styles.backCtaIcon}>→</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default TravelEmissionCalculationScreen;


