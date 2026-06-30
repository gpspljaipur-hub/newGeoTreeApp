import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ImageBackground,
    Dimensions,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { styles } from './Styles';
import Images from '../../../../constants/images';
import fonts from '../../../../comman/fonts';
import { Colors } from '../../../../comman/Colors';

const { width } = Dimensions.get('window');

const ElectricityCarbonScreen = () => {
    const navigation = useNavigation<any>();

    // Scroll enabling helper for MultiSlider
    const [scrollEnabled, setScrollEnabled] = useState(true);

    // Form States
    const [monthlyBill, setMonthlyBill] = useState<number>(2500);
    const [selectedSource, setSelectedSource] = useState<string>('grid'); // grid, solar, mixed
    const [selectedHomeType, setSelectedHomeType] = useState<string>('apartment'); // apartment, house, villa, other
    const [numResidents, setNumResidents] = useState<string>('3'); // 1, 2, 3, 4, 5+
    const [selectedAppliances, setSelectedAppliances] = useState<string[]>(['led', 'star']); // led, star, heater, panels

    // Toggle Multi-select appliances
    const toggleAppliance = (key: string) => {
        if (selectedAppliances.includes(key)) {
            setSelectedAppliances(selectedAppliances.filter(item => item !== key));
        } else {
            setSelectedAppliances([...selectedAppliances, key]);
        }
    };

    // Live Carbon Footprint math matching mockup (2500 bill with default values = 1.24 Tons)
    const kwh = monthlyBill / 9.45;
    let sourceMult = 1.0;
    if (selectedSource === 'solar') sourceMult = 0.05;
    if (selectedSource === 'mixed') sourceMult = 0.5;

    let homeMult = 1.0;
    if (selectedHomeType === 'apartment') homeMult = 0.7;
    if (selectedHomeType === 'villa') homeMult = 1.2;
    if (selectedHomeType === 'other') homeMult = 0.9;

    let applianceMult = 1.0;
    if (selectedAppliances.includes('led')) applianceMult *= 0.85;
    if (selectedAppliances.includes('star')) applianceMult *= 0.80;
    if (selectedAppliances.includes('heater')) applianceMult *= 0.90;
    if (selectedAppliances.includes('panels')) applianceMult *= 0.70;

    const baseTons = (kwh * 12 * 0.82) / 1000;
    const annualTons = parseFloat((baseTons * sourceMult * homeMult * applianceMult).toFixed(2));
    const annualEmissionsKg = Math.round(annualTons * 1000);
    const treesRequired = Math.ceil(annualEmissionsKg / 22);

    const handleSave = () => {
        Alert.alert(
            'Assessment Saved',
            'Your electricity carbon footprint preferences have been saved successfully.',
            [{ text: 'Proceed', onPress: () => navigation.goBack() }]
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEnabled={scrollEnabled}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Hero / Header Background Banner */}
                <ImageBackground
                    source={Images.electricity_cat}
                    style={styles.heroImageBg}
                    resizeMode="cover"
                >
                    <View style={styles.heroOverlay}>
                        <View style={styles.headerRow}>
                            <TouchableOpacity
                                style={styles.backButton}
                                activeOpacity={0.7}
                                onPress={() => navigation.goBack()}
                            >
                                <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                            </TouchableOpacity>

                            <View style={styles.stepperContainer}>
                                <View style={styles.stepOuter}>
                                    <View style={styles.stepCircleCompleted}>
                                        <Text style={styles.stepTextCompleted}>1</Text>
                                    </View>
                                    <Text style={styles.stepLabel}>Travel</Text>
                                </View>
                                <View style={styles.stepConnectorCompleted} />
                                <View style={styles.stepOuter}>
                                    <View style={styles.stepCircleCompleted}>
                                        <Text style={styles.stepTextCompleted}>2</Text>
                                    </View>
                                    <Text style={styles.stepLabel}>Food</Text>
                                </View>
                                <View style={styles.stepConnectorActive} />
                                <View style={styles.stepOuter}>
                                    <View style={styles.stepCircleActive}>
                                        <Text style={styles.stepTextActive}>3</Text>
                                    </View>
                                    <Text style={[styles.stepLabel, styles.stepLabelActive]}>Electricity</Text>
                                </View>
                                <View style={styles.stepConnectorUpcoming} />
                                <View style={styles.stepOuter}>
                                    <View style={styles.stepCircleUpcoming}>
                                        <Text style={styles.stepTextUpcoming}>4</Text>
                                    </View>
                                    <Text style={styles.stepLabel}>Flights</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.heroTextContainer}>
                            <View style={styles.heroTitleRow}>
                                <Text style={styles.heroTitle}>⚡ Electricity</Text>
                            </View>
                            <Text style={styles.heroSubtitle}>Carbon Assessment</Text>
                            <View style={styles.heroRightSpacer}>
                                <Text style={styles.heroDesc}>
                                    Let's calculate the carbon footprint of your home electricity usage.
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Form Questionnaire Container */}
                <View style={styles.formContainer}>

                    {/* Question 1: Monthly Electricity Bill */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.qustionView}>
                                <Image source={Images.electricity_icon_bill_1} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionHeaderTextCol}>
                                <Text style={styles.questionTitle}>1. Monthly Electricity Bill</Text>
                                <Text style={styles.questionSubtitle}>Enter your average monthly electricity bill amount.</Text>
                            </View>
                            <TouchableOpacity style={styles.infoButton} activeOpacity={0.7}>
                                <Text style={styles.infoButtonText}>i</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.billInputRow}>
                            <View style={styles.sliderContainer}>
                                <MultiSlider
                                    values={[monthlyBill]}
                                    sliderLength={width - 190}
                                    min={0}
                                    max={20000}
                                    step={100}
                                    onValuesChange={(vals) => setMonthlyBill(vals[0])}
                                    onValuesChangeStart={() => setScrollEnabled(false)}
                                    onValuesChangeFinish={() => setScrollEnabled(true)}
                                    trackStyle={styles.sliderTrack}
                                    selectedStyle={styles.sliderSelectedTrack}
                                    customMarker={() => (
                                        <View style={styles.sliderThumb} />
                                    )}
                                />
                                <View style={styles.sliderScale}>
                                    <Text style={styles.sliderScaleText}>₹0</Text>
                                    <Text style={styles.sliderScaleText}>₹20,000+</Text>
                                </View>
                            </View>

                            <View style={styles.billDisplayBox}>
                                <Text style={styles.billDisplayValue}>₹ {monthlyBill.toLocaleString('en-IN')}</Text>
                                <Text style={styles.billDisplayLabel}>/ month</Text>
                            </View>
                        </View>
                    </View>

                    {/* Question 2: Electricity Source */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.qustionView}>
                                <Image source={Images.electricity_icon_bill_2} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>

                            <View style={styles.questionHeaderTextCol}>
                                <Text style={styles.questionTitle}>2. Electricity Source</Text>
                                <Text style={styles.questionSubtitle}>What is the primary source of your home electricity?</Text>
                            </View>
                            <TouchableOpacity style={styles.infoButton} activeOpacity={0.7}>
                                <Text style={styles.infoButtonText}>i</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sourceGridRow}>
                            <TouchableOpacity
                                style={[styles.sourceCard, selectedSource === 'grid' && styles.sourceCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedSource('grid')}
                            >
                                <Image source={Images.electricity_source_grid} style={[styles.sourceCardIcon, { tintColor: Colors.legacyGreen }]} resizeMode="contain" />
                                <View style={styles.sourceCardTextContainer}>
                                    <Text style={[styles.sourceCardTitle, selectedSource === 'grid' && styles.sourceCardTitleSelected]}>Grid Electricity</Text>
                                    <Text style={styles.sourceCardDesc}>From power distribution company</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.sourceCard, selectedSource === 'solar' && styles.sourceCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedSource('solar')}
                            >
                                <Image source={Images.electricity_source_solar} style={styles.sourceCardIcon} resizeMode="contain" />
                                <View style={styles.sourceCardTextContainer}>
                                    <Text style={[styles.sourceCardTitle, selectedSource === 'solar' && styles.sourceCardTitleSelected]}>Solar Power</Text>
                                    <Text style={styles.sourceCardDesc}>100% from solar energy</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.sourceCard, selectedSource === 'mixed' && styles.sourceCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedSource('mixed')}
                            >
                                <Image source={Images.electricity_source_mixed} style={[styles.sourceCardIcon,{ tintColor: Colors.legacyGreen }]} resizeMode="contain" />
                                <View style={styles.sourceCardTextContainer}>
                                    <Text style={[styles.sourceCardTitle, selectedSource === 'mixed' && styles.sourceCardTitleSelected]}>Mixed Source</Text>
                                    <Text style={styles.sourceCardDesc}>Combination of grid and solar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Question 3: Home Type */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.qustionView}>
                                <Image source={Images.electricity_icon_bill_check} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>

                            <View style={styles.questionHeaderTextCol}>
                                <Text style={styles.questionTitle}>3. Home Type</Text>
                                <Text style={styles.questionSubtitle}>What type of home do you live in?</Text>
                            </View>
                            <TouchableOpacity style={styles.infoButton} activeOpacity={0.7}>
                                <Text style={styles.infoButtonText}>i</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.homeTypeRow}>
                            <TouchableOpacity
                                style={[styles.homeTypeCard, selectedHomeType === 'apartment' && styles.homeTypeCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedHomeType('apartment')}
                            >
                                <Image source={Images.electricity_home_apartment} style={styles.homeTypeIcon} resizeMode="contain" />
                                <Text style={[styles.homeTypeTitle, selectedHomeType === 'apartment' && styles.homeTypeTitleSelected]}>Apartment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.homeTypeCard, selectedHomeType === 'house' && styles.homeTypeCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedHomeType('house')}
                            >
                                <Image source={Images.electricity_home_house} style={styles.homeTypeIcon} resizeMode="contain" />
                                <Text style={[styles.homeTypeTitle, selectedHomeType === 'house' && styles.homeTypeTitleSelected]}>Independent House</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.homeTypeCard, selectedHomeType === 'villa' && styles.homeTypeCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedHomeType('villa')}
                            >
                                <Image source={Images.electricity_home_villa} style={styles.homeTypeIcon} resizeMode="contain" />
                                <Text style={[styles.homeTypeTitle, selectedHomeType === 'villa' && styles.homeTypeTitleSelected]}>Villa</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.homeTypeCard, selectedHomeType === 'other' && styles.homeTypeCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedHomeType('other')}
                            >
                                <Image source={Images.electricity_home_other} style={styles.homeTypeIcon} resizeMode="contain" />
                                <Text style={[styles.homeTypeTitle, selectedHomeType === 'other' && styles.homeTypeTitleSelected]}>Other</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Question 4: Number of Residents */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.qustionView}>
                                <Image source={Images.electricity_icon_residents} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionHeaderTextCol}>
                                <Text style={styles.questionTitle}>4. Number of Residents</Text>
                                <Text style={styles.questionSubtitle}>How many people live in your home?</Text>
                            </View>
                            <TouchableOpacity style={styles.infoButton} activeOpacity={0.7}>
                                <Text style={styles.infoButtonText}>i</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.residentsRow}>
                            {['1', '2', '3', '4', '5+'].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    style={[styles.residentSegment, numResidents === num && styles.residentSegmentSelected]}
                                    activeOpacity={0.8}
                                    onPress={() => setNumResidents(num)}
                                >
                                    <Text style={[styles.residentSegmentText, numResidents === num && styles.residentSegmentTextSelected]}>
                                        {num}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Question 5: Energy Efficient Appliances */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.qustionView}>
                                <Image source={Images.electricity_icon_bill_check} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionHeaderTextCol}>
                                <Text style={styles.questionTitle}>5. Energy Efficient Appliances</Text>
                                <Text style={styles.questionSubtitle}>Select the energy-efficient features available in your home.</Text>
                            </View>
                            <TouchableOpacity style={styles.infoButton} activeOpacity={0.7}>
                                <Text style={styles.infoButtonText}>i</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.applianceGrid}>
                            <TouchableOpacity
                                style={[styles.applianceCheckboxCard, selectedAppliances.includes('led') && styles.applianceCheckboxCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => toggleAppliance('led')}
                            >
                                <View style={[styles.checkboxContainer, selectedAppliances.includes('led') && styles.checkboxContainerChecked]}>
                                    {selectedAppliances.includes('led') && <Image source={Images.check} style={styles.checkIcon} resizeMode="contain" />}
                                </View>
                                <Image source={Images.electricity_feature_led} style={styles.applianceIcon} resizeMode="contain" />
                                <Text style={styles.applianceLabel}>LED Lights</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.applianceCheckboxCard, selectedAppliances.includes('star') && styles.applianceCheckboxCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => toggleAppliance('star')}
                            >
                                <View style={[styles.checkboxContainer, selectedAppliances.includes('star') && styles.checkboxContainerChecked]}>
                                    {selectedAppliances.includes('star') && <Image source={Images.check} style={styles.checkIcon} resizeMode="contain" />}
                                </View>
                                <Image source={Images.electricity_feature_star} style={styles.applianceIcon} resizeMode="contain" />
                                <Text style={styles.applianceLabel}>5-Star Appliances</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.applianceCheckboxCard, selectedAppliances.includes('heater') && styles.applianceCheckboxCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => toggleAppliance('heater')}
                            >
                                <View style={[styles.checkboxContainer, selectedAppliances.includes('heater') && styles.checkboxContainerChecked]}>
                                    {selectedAppliances.includes('heater') && <Image source={Images.check} style={styles.checkIcon} resizeMode="contain" />}
                                </View>
                                <Image source={Images.electricity_feature_heater} style={styles.applianceIcon} resizeMode="contain" />
                                <Text style={styles.applianceLabel}>Solar Water Heater</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.applianceCheckboxCard, selectedAppliances.includes('panels') && styles.applianceCheckboxCardSelected]}
                                activeOpacity={0.8}
                                onPress={() => toggleAppliance('panels')}
                            >
                                <View style={[styles.checkboxContainer, selectedAppliances.includes('panels') && styles.checkboxContainerChecked]}>
                                    {selectedAppliances.includes('panels') && <Image source={Images.check} style={styles.checkIcon} resizeMode="contain" />}
                                </View>
                                <Image source={Images.electricity_feature_panels} style={styles.applianceIcon} resizeMode="contain" />
                                <Text style={styles.applianceLabel}>Solar Panels</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Bottom Estimated Stats Card */}
                    <View style={styles.statsOverviewCard}>
                        <View style={styles.statItem}>
                            <View style={styles.statIconCircle}>
                                <Image source={Images.co2Cloud} style={styles.statIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.statTextCol}>
                                <Text style={styles.statLabel}>Estimated Annual Emissions</Text>
                                <Text style={styles.statValue}>
                                    {annualTons} <Text style={styles.statUnit}>Tons CO₂ / Year</Text>
                                </Text>
                                <Text style={styles.statDesc}>From your electricity usage</Text>
                            </View>
                        </View>
                        <View style={styles.statsCardDivider} />
                        <View style={styles.statItem}>
                            <View style={styles.statIconCircle}>
                                <Image source={Images.treeIcon} style={styles.statIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.statTextCol}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.statLabel}>Trees Required To Offset</Text>
                                    <TouchableOpacity style={{ marginLeft: 6 }} activeOpacity={0.7}>
                                        <Text style={styles.infoTextButton}>i</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.statValue}>
                                    {treesRequired} <Text style={styles.statUnit}>Trees</Text>
                                </Text>
                                <Text style={styles.statDesc}>To offset 1 year of emissions</Text>
                            </View>
                        </View>
                    </View>

                    {/* Did You Know? Card */}
                    <View style={styles.didYouKnowCard}>
                        <View style={styles.didYouKnowIconContainer}>
                            <Image source={Images.food_icon_bulb} style={styles.didYouKnowIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.didYouKnowTextContainer}>
                            <Text style={styles.didYouKnowTitle}>Did You Know?</Text>
                            <Text style={styles.didYouKnowDesc}>
                                Switching completely to LED lighting can reduce electricity emissions by up to 15%.
                            </Text>
                        </View>
                    </View>

                    {/* CTA Actions Bar */}
                    <View style={styles.ctaRow}>
                        <TouchableOpacity
                            style={styles.seeCalculationButton}
                            activeOpacity={0.7}
                            onPress={() => {
                                Alert.alert(
                                    'Calculation Info',
                                    'CO₂ emissions are estimated using the official grid carbon intensity data for India (0.82 kg/kWh), corrected for household structure, resident shares, and energy-efficient system benefits.'
                                );
                            }}
                        >
                            <Image source={Images.impact} style={styles.seeCalculationIcon} resizeMode="contain" />
                            <Text style={styles.seeCalculationText}>See Calculation</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.saveButton}
                            activeOpacity={0.8}
                            onPress={handleSave}
                        >
                            <Text style={styles.saveButtonText}>Save & Continue  →</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ElectricityCarbonScreen;
