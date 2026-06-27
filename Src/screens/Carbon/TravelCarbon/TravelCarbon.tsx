import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Alert,
    Modal,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Images from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
// @ts-ignore
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const TravelCarbonScreen = () => {
    const navigation = useNavigation<any>();
    const { width } = Dimensions.get('window');

    // Input States
    const [selectedMode, setSelectedMode] = useState('1'); // '1' = Car, '2' = Bike, '3' = Public, '4' = Walking, '5' = Other
    const [distance, setDistance] = useState(600); // Distance in KM (0 to 2000)
    const [selectedFuel, setSelectedFuel] = useState('1'); // '1' = Petrol, '2' = Diesel, '3' = CNG, '4' = LPG, '5' = Electric
    const [selectedOccupancy, setSelectedOccupancy] = useState('1'); // '1' = 1, '2' = 2, '3' = 3, '4' = 4, '5' = 5+

    // Modal State
    const [isCalcModalVisible, setIsCalcModalVisible] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(true);

    // Track layout for custom slider
    const trackRef = useRef<View>(null);
    const [sliderWidth, setSliderWidth] = useState(0);

    const measureTrack = () => {
        trackRef.current?.measure((x, y, w, h, px, py) => {
            setSliderWidth(w);
        });
    };

    // Emission Factors
    const MODE_FACTORS: Record<string, { label: string; factor: number; icon: any }> = {
        '1': { label: 'Car', factor: 0.2, icon: Images.travel_mode_car },
        '2': { label: 'Bike', factor: 0.05, icon: Images.travel_mode_bike },
        '3': { label: 'Public Transport', factor: 0.03, icon: Images.travel_mode_public },
        '4': { label: 'Walking', factor: 0.0, icon: Images.travel_mode_walk },
        '5': { label: 'Other', factor: 0.1, icon: null },
    };

    const FUEL_FACTORS: Record<string, { label: string; factor: number; icon: any }> = {
        '1': { label: 'Petrol', factor: 1.0, icon: Images.drop },
        '2': { label: 'Diesel', factor: 1.2, icon: Images.drop },
        '3': { label: 'CNG', factor: 0.6, icon: Images.travel_fuel_pump },
        '4': { label: 'LPG', factor: 0.7, icon: Images.travel_fuel_pump },
        '5': { label: 'Electric', factor: 0.15, icon: Images.travel_mode_electric },
    };

    const OCCUPANCY_FACTORS: Record<string, { label: string; value: number }> = {
        '1': { label: '1', value: 1 },
        '2': { label: '2', value: 2 },
        '3': { label: '3', value: 3 },
        '4': { label: '4', value: 4 },
        '5': { label: '5+', value: 5 },
    };

    // Calculate CO2 Emission
    const calculateEmissions = (): number => {
        const modeFactor = MODE_FACTORS[selectedMode]?.factor ?? 0;
        const fuelFactor = FUEL_FACTORS[selectedFuel]?.factor ?? 0;
        const occupancyVal = OCCUPANCY_FACTORS[selectedOccupancy]?.value ?? 1;

        // If mode is Walking, footprint is 0
        if (selectedMode === '4') return 0;

        const emission = (distance * modeFactor * fuelFactor) / occupancyVal;
        return Math.round(emission * 10) / 10;
    };

    const co2Result = calculateEmissions();

    const handleWhyImpactPress = () => {
        Alert.alert(
            'Why does travel impact carbon?',
            'Burning fossil fuels like petrol and diesel in vehicles releases Carbon Dioxide (CO₂), the primary greenhouse gas driving global climate change. Transitioning to shared rides, public transport, biking, or electric vehicles significantly lowers your transport footprint.',
            [{ text: 'Got It', style: 'cancel' }]
        );
    };

    const handleQuestionInfoPress = (title: string, content: string) => {
        Alert.alert(title, content, [{ text: 'Close', style: 'cancel' }]);
    };

    const handleSaveAndContinue = () => {
        Alert.alert(
            'Calculation Saved',
            `Your travel carbon footprint of ${co2Result} KG CO₂ has been recorded.\n\nNext step is Food Assessment.`,
            [
                {
                    text: 'Continue',
                    onPress: () => {
                        navigation.goBack();
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Stepper Header */}



            {/* Hero Section */}
            <ImageBackground
                source={Images.travel_bg}
                style={styles.heroCard}
                resizeMode="cover"
            >

                <View style={styles.headerRow}>
                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={Images.back}
                            style={styles.backIcon}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>

                    <View style={styles.stepperContainer}>
                        <View style={styles.stepLine} />
                        {[
                            { step: '1', title: 'Travel', active: true, completed: false },
                            { step: '2', title: 'Food', active: false, completed: false },
                            { step: '3', title: 'Electricity', active: false, completed: false },
                            { step: '4', title: 'Flights', active: false, completed: false },
                        ].map((item, idx) => (
                            <View key={item.step} style={styles.stepItem}>
                                <View
                                    style={[
                                        styles.stepIndicator,
                                        item.active && styles.stepIndicatorActive,
                                        item.completed && styles.stepIndicatorCompleted,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.stepText,
                                            item.active && styles.stepTextActive,
                                            item.completed && styles.stepTextCompleted,
                                        ]}
                                    >
                                        {item.step}
                                    </Text>
                                </View>
                                <Text
                                    style={[
                                        styles.stepLabel,
                                        item.active && styles.stepLabelActive,
                                    ]}
                                >
                                    {item.title}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.heroContentRow}>
                    <View style={styles.heroTextSection}>
                        <View style={styles.heroTitleRow}>
                            <Text style={styles.heroTitle}>Travel</Text>
                            <Image
                                source={Images.leaf}
                                style={styles.heroLeafIcon}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.heroDesc}>
                            Calculate your emissions from daily commuting and road travel.
                        </Text>

                        <TouchableOpacity
                            style={styles.infoPillButton}
                            activeOpacity={0.7}
                            onPress={handleWhyImpactPress}
                        >
                            <View style={styles.infoPillIconContainer}>
                                <Text style={styles.infoPillIconText}>i</Text>
                            </View>
                            <Text style={styles.infoPillText}>Why does travel impact carbon?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1.1 }} />
                </View>
            </ImageBackground>
            <ScrollView
                scrollEnabled={scrollEnabled}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                {/* Questions Area */}
                <View style={styles.questionsSection}>
                    <Text style={styles.sectionHeading}>Tell us about your travel</Text>

                    {/* Question 1: Primary Mode of Travel */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image
                                    source={Images.travel_mode_car}
                                    style={styles.questionHeaderIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>1. Primary Mode of Travel</Text>
                                <Text style={styles.questionSubtitle}>What do you use most often for daily travel?</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.6}
                                onPress={() =>
                                    handleQuestionInfoPress(
                                        'Primary Mode of Travel',
                                        'Select the vehicle you travel in most frequently for commuting, leisure, and chores.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Options */}
                        <View style={styles.optionsRow}>
                            {Object.entries(MODE_FACTORS).map(([key, item]) => {
                                const isSelected = selectedMode === key;
                                return (
                                    <TouchableOpacity
                                        key={key}
                                        style={[
                                            styles.optionBox,
                                            isSelected && styles.optionBoxSelected,
                                        ]}
                                        activeOpacity={0.8}
                                        onPress={() => {
                                            setSelectedMode(key);
                                            // Reset fuel type factor for walking
                                            if (key === '4') {
                                                setSelectedFuel('1');
                                                setSelectedOccupancy('1');
                                            }
                                        }}
                                    >
                                        {item.icon ? (
                                            <Image
                                                source={item.icon}
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    tintColor: isSelected ? '#0A5F35' : '#44554C',
                                                    marginBottom: 4,
                                                }}
                                                resizeMode="contain"
                                            />
                                        ) : (
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 'bold',
                                                    color: isSelected ? '#0A5F35' : '#44554C',
                                                    marginBottom: 4,
                                                }}
                                            >
                                                •••
                                            </Text>
                                        )}
                                        <Text
                                            style={[
                                                styles.optionLabel,
                                                isSelected && styles.optionLabelSelected,
                                            ]}
                                            numberOfLines={2}
                                        >
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 2: Monthly Distance Traveled */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image
                                    source={Images.travel_speedometer}
                                    style={styles.questionHeaderIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>2. Monthly Distance Traveled</Text>
                                <Text style={styles.questionSubtitle}>
                                    How many kilometers do you travel per month by your primary mode?
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.6}
                                onPress={() =>
                                    handleQuestionInfoPress(
                                        'Monthly Distance Traveled',
                                        'Provide an approximate estimation of the total distance covered in a typical month.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Custom Slider */}
                        <View style={styles.distanceDisplayContainer}>
                            <Text style={styles.distanceValue}>{distance}</Text>
                            <Text style={styles.distanceUnit}>KM / Month</Text>
                        </View>

                        <View
                            ref={trackRef}
                            onLayout={measureTrack}
                            style={{ width: '100%', alignItems: 'center' }}
                        >
                            <MultiSlider
                                values={[distance]}
                                sliderLength={sliderWidth || width - 64}
                                onValuesChange={(values) => {
                                    setDistance(values[0]);
                                }}
                                onValuesChangeStart={() => setScrollEnabled(false)}
                                onValuesChangeFinish={() => setScrollEnabled(true)}
                                min={0}
                                max={2000}
                                step={50}
                                allowOverlap={false}
                                snapped={true}
                                customMarker={() => (
                                    <View style={[styles.sliderThumb, { position: 'relative', transform: [] }]}>
                                        <View style={styles.sliderThumbDot} />
                                    </View>
                                )}
                                trackStyle={{
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: '#E2E8F0',
                                }}
                                selectedStyle={{
                                    backgroundColor: '#0A5F35',
                                }}
                                unselectedStyle={{
                                    backgroundColor: '#E2E8F0',
                                }}
                                containerStyle={{
                                    height: 30,
                                    justifyContent: 'center',
                                }}
                            />
                        </View>

                        <View style={styles.sliderRangeContainer}>
                            <Text style={styles.sliderRangeLabel}>0 KM</Text>
                            <Text style={styles.sliderRangeLabel}>2000+ KM</Text>
                        </View>
                    </View>

                    {/* Question 3: Fuel Type */}
                    <View
                        style={[
                            styles.questionCard,
                            selectedMode === '4' && { opacity: 0.5 },
                        ]}
                        pointerEvents={selectedMode === '4' ? 'none' : 'auto'}
                    >
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image
                                    source={Images.travel_fuel_pump}
                                    style={styles.questionHeaderIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>3. Fuel Type</Text>
                                <Text style={styles.questionSubtitle}>What type of fuel does your vehicle use?</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.6}
                                onPress={() =>
                                    handleQuestionInfoPress(
                                        'Fuel Type',
                                        'Different fuel types produce different levels of CO₂ emissions. Electric vehicles produce no tailpipe emissions.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Options */}
                        <View style={styles.optionsRow}>
                            {Object.entries(FUEL_FACTORS).map(([key, item]) => {
                                const isSelected = selectedFuel === key;
                                return (
                                    <TouchableOpacity
                                        key={key}
                                        style={[
                                            styles.optionBox,
                                            isSelected && styles.optionBoxSelected,
                                        ]}
                                        activeOpacity={0.8}
                                        onPress={() => setSelectedFuel(key)}
                                    >
                                        {item.icon ? (
                                            <Image
                                                source={item.icon}
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    tintColor: isSelected ? '#0A5F35' : '#44554C',
                                                    marginBottom: 4,
                                                }}
                                                resizeMode="contain"
                                            />
                                        ) : null}
                                        <Text
                                            style={[
                                                styles.optionLabel,
                                                isSelected && styles.optionLabelSelected,
                                            ]}
                                            numberOfLines={2}
                                        >
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 4: Vehicle Occupancy */}
                    <View
                        style={[
                            styles.questionCard,
                            selectedMode === '4' && { opacity: 0.5 },
                        ]}
                        pointerEvents={selectedMode === '4' ? 'none' : 'auto'}
                    >
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image
                                    source={Images.group}
                                    style={styles.questionHeaderIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>4. Vehicle Occupancy</Text>
                                <Text style={styles.questionSubtitle}>
                                    On average, how many people including you travel in the vehicle?
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.6}
                                onPress={() =>
                                    handleQuestionInfoPress(
                                        'Vehicle Occupancy',
                                        'Sharing your ride distributes emissions among passengers, lowering your individual carbon footprint.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Options */}
                        <View style={styles.optionsRow}>
                            {Object.entries(OCCUPANCY_FACTORS).map(([key, item]) => {
                                const isSelected = selectedOccupancy === key;
                                return (
                                    <TouchableOpacity
                                        key={key}
                                        style={[
                                            styles.occupancyBox,
                                            isSelected && styles.occupancyBoxSelected,
                                        ]}
                                        activeOpacity={0.8}
                                        onPress={() => setSelectedOccupancy(key)}
                                    >
                                        <Text
                                            style={[
                                                styles.occupancyLabel,
                                                isSelected && styles.occupancyLabelSelected,
                                            ]}
                                        >
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                </View>

                {/* Estimated Monthly Emissions Banner */}
                <View style={styles.estimatedEmissionsCard}>
                    <View style={styles.co2IconContainer}>
                        <Text style={styles.co2IconText}>CO₂</Text>
                    </View>
                    <View style={styles.emissionsTextContainer}>
                        <Text style={styles.emissionsHeading}>Estimated Monthly Emissions</Text>
                        <Text style={styles.emissionsAmount}>
                            {co2Result} <Text style={styles.emissionsUnit}>KG CO₂</Text>
                        </Text>
                        <Text style={styles.emissionsAmountSub}>This is an estimate based on the info provided.</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.seeCalculationButton}
                        activeOpacity={0.7}
                        onPress={() => setIsCalcModalVisible(true)}
                    >
                        <Image
                            source={Images.impact}
                            style={styles.seeCalculationIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.seeCalculationText}>See Calculation</Text>
                    </TouchableOpacity>
                </View>

                {/* Action button */}
                <TouchableOpacity
                    style={styles.saveButton}
                    activeOpacity={0.8}
                    onPress={handleSaveAndContinue}
                >
                    <Text style={styles.saveButtonText}>Save & Continue</Text>
                    <Text style={styles.saveButtonIcon}>→</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* See Calculation Details Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={isCalcModalVisible}
                onRequestClose={() => setIsCalcModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 12,
                        padding: 20,
                        width: '100%',
                        maxWidth: 340,
                        borderWidth: 1,
                        borderColor: '#E2EFE6',
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'OpenSans-Bold',
                            color: '#0A1C14',
                            marginBottom: 12,
                        }}>CO₂ Calculation Formula</Text>

                        <Text style={{
                            fontSize: 11.5,
                            lineHeight: 18,
                            color: '#44554C',
                            fontFamily: 'OpenSans-Regular',
                            marginBottom: 16,
                        }}>
                            Emissions are calculated by multiplying distance with travel mode and fuel factors, then sharing the result by the occupancy:
                        </Text>

                        <View style={{
                            backgroundColor: '#F5F8F6',
                            borderRadius: 6,
                            padding: 10,
                            marginBottom: 16,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'OpenSans-Bold',
                                color: '#0D684D',
                                textAlign: 'center',
                            }}>
                                (Distance × Mode Factor × Fuel Factor) ÷ Occupancy
                            </Text>
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Text style={{ fontSize: 11, fontFamily: 'OpenSans-Bold', color: '#44554C', marginBottom: 4 }}>Applied Factors:</Text>
                            <Text style={{ fontSize: 10.5, color: '#6B7A70', fontFamily: 'OpenSans-Regular', marginVertical: 1.5 }}>
                                • Monthly Distance: <Text style={{ fontFamily: 'OpenSans-Bold', color: '#0D684D' }}>{distance} KM</Text>
                            </Text>
                            <Text style={{ fontSize: 10.5, color: '#6B7A70', fontFamily: 'OpenSans-Regular', marginVertical: 1.5 }}>
                                • Mode: <Text style={{ fontFamily: 'OpenSans-Bold', color: '#0D684D' }}>{MODE_FACTORS[selectedMode]?.label} ({MODE_FACTORS[selectedMode]?.factor})</Text>
                            </Text>
                            <Text style={{ fontSize: 10.5, color: '#6B7A70', fontFamily: 'OpenSans-Regular', marginVertical: 1.5 }}>
                                • Fuel: <Text style={{ fontFamily: 'OpenSans-Bold', color: '#0D684D' }}>{FUEL_FACTORS[selectedFuel]?.label} ({FUEL_FACTORS[selectedFuel]?.factor})</Text>
                            </Text>
                            <Text style={{ fontSize: 10.5, color: '#6B7A70', fontFamily: 'OpenSans-Regular', marginVertical: 1.5 }}>
                                • Occupancy: <Text style={{ fontFamily: 'OpenSans-Bold', color: '#0D684D' }}>{OCCUPANCY_FACTORS[selectedOccupancy]?.label} ({OCCUPANCY_FACTORS[selectedOccupancy]?.value})</Text>
                            </Text>
                        </View>

                        <View style={{
                            borderTopWidth: 1,
                            borderTopColor: '#EEF2EF',
                            paddingTop: 12,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <View>
                                <Text style={{ fontSize: 9.5, color: '#8E9A93', fontFamily: 'OpenSans-Regular' }}>Total Emissions</Text>
                                <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Bold', color: '#0D684D' }}>{co2Result} KG CO₂</Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#0D684D',
                                    borderRadius: 6,
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                }}
                                activeOpacity={0.7}
                                onPress={() => setIsCalcModalVisible(false)}
                            >
                                <Text style={{ fontSize: 11, fontFamily: 'OpenSans-Bold', color: '#FFFFFF' }}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default TravelCarbonScreen;
