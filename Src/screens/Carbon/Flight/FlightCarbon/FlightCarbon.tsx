import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Alert,
    ImageBackground,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Images from '../../../../constants/images';
import { Colors } from '../../../../comman/Colors';

const FlightCarbonScreen = () => {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();

    // Question Selection States
    const [flightType, setFlightType] = useState<'domestic' | 'international' | 'both' | null>(null);
    const [tripType, setTripType] = useState<'oneway' | 'roundtrip' | 'multicity' | null>(null);
    const [frequency, setFrequency] = useState<'0' | '1-2' | '3-5' | '6-10' | '10+' | null>(null);
    const [seatClass, setSeatClass] = useState<'economy' | 'premium_economy' | 'business' | 'first' | null>(null);
    const [distanceSector, setDistanceSector] = useState<'0-500' | '500-1500' | '1500-4000' | '4000+' | null>(null);

    // Static Calculation logic 
    const calculateEmissions = () => {
        return {
            annualDistance: 3200,
            annualEmissionsKg: 2840,
            annualEmissionsTons: 2.84,
            treesRequired: 129,
            tripsPerYear: 1
        };
    };

    const { annualEmissionsTons, treesRequired } = calculateEmissions();
    const handleSeeCalculation = () => {
        const { annualDistance, annualEmissionsKg, tripsPerYear } = calculateEmissions();
        navigation.navigate('FlightEmissionCalculation', {
            annualTons: annualEmissionsTons,
            annualDistance,
            annualEmissionsKg,
            tripsPerYear,
            flightType: flightType || 'domestic',
            tripType: tripType || 'roundtrip',
            frequency: frequency || '1-2',
            seatClass: seatClass || 'economy',
            distanceSector: distanceSector || '1500-4000',
        });
    };

    const handleSaveAndContinue = () => {
        const { annualDistance, annualEmissionsKg, tripsPerYear } = calculateEmissions();
        navigation.navigate('FlightEmissionCalculation', {
            annualTons: annualEmissionsTons,
            annualDistance,
            annualEmissionsKg,
            tripsPerYear,
            flightType: flightType || 'domestic',
            tripType: tripType || 'roundtrip',
            frequency: frequency || '1-2',
            seatClass: seatClass || 'economy',
            distanceSector: distanceSector || '1500-4000',
        });
    };

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/*Header*/}
                <ImageBackground
                    source={Images.flight_carbon_bg}
                    style={styles.heroImageBg}
                    resizeMode="cover"
                >
                    {/* Header */}
                    <View style={[styles.headerRow, { paddingTop: Math.max(insets.top, 10) }]}>
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>

                        <View style={styles.headerTitleContainer}>
                            <View style={styles.headerTitleRow}>
                                <Text style={styles.headerTitle}>Flight Carbon Assessment</Text>
                            </View>
                            {/* <Text style={styles.headerSubtitle}>Calculate the carbon impact of your air travel.</Text> */}
                        </View>

                        <TouchableOpacity
                            style={styles.headerInfoButton}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.headerInfoText}>i</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Hero Message Overlay */}
                    <View style={styles.heroOverlay}>
                        <Text style={styles.heroTitle}>
                            Your flight,{'\n'}
                            <Text style={styles.heroTitleGreen}>your impact.</Text>
                        </Text>
                        <Text style={styles.heroDesc}>
                            Measure your emissions and take a step towards a greener planet.
                        </Text>
                    </View>
                </ImageBackground>

                {/* Form Questions */}
                <View style={styles.questionsSection}>
                    {/* Question 1: Flight Type */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.flight} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>Flight Type</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.optionsRow}>
                            {(['domestic', 'international', 'both'] as const).map((type) => {
                                const selected = flightType === type;
                                return (
                                    <TouchableOpacity
                                        key={type}
                                        style={[styles.optionBox, selected && styles.optionBoxSelected]}
                                        onPress={() => setFlightType(type)}
                                        activeOpacity={0.8}
                                    >
                                        <View style={[styles.radioDot, selected && styles.radioDotSelected]}>
                                            {selected && <View style={styles.radioDotInner} />}
                                        </View>
                                        <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 2: Trip Type */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.trip} style={[styles.questionHeaderIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>Trip Type</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.optionsRow}>
                            {[
                                { key: 'oneway', label: 'One Way' },
                                { key: 'roundtrip', label: 'Round Trip' },
                                { key: 'multicity', label: 'Multi-City' }
                            ].map((type) => {
                                const selected = tripType === type.key;
                                return (
                                    <TouchableOpacity
                                        key={type.key}
                                        style={[styles.optionBox, selected && styles.optionBoxSelected]}
                                        onPress={() => setTripType(type.key as any)}
                                        activeOpacity={0.8}
                                    >
                                        <View style={[styles.radioDot, selected && styles.radioDotSelected]}>
                                            {selected && <View style={styles.radioDotInner} />}
                                        </View>
                                        <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                                            {type.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 3: Flight Frequency */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.calendar} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>Flight Frequency</Text>
                                <Text style={styles.questionSubtitle}>How many flights do you take each year?</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.optionsRow}>
                            {(['0', '1-2', '3-5', '6-10', '10+'] as const).map((freq) => {
                                const selected = frequency === freq;
                                return (
                                    <TouchableOpacity
                                        key={freq}
                                        style={[styles.optionBoxSmall, selected && styles.optionBoxSmallSelected]}
                                        onPress={() => setFrequency(freq)}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={[styles.optionTextSmall, selected && styles.optionTextSmallSelected]}>
                                            {freq}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 4: Seat Class */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.seat} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>Seat Class</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.optionsRow}>
                            {[
                                { key: 'economy', label: 'Economy' },
                                { key: 'premium_economy', label: 'Premium Economy' },
                                { key: 'business', label: 'Business' },
                                { key: 'first', label: 'First Class' }
                            ].map((type) => {
                                const selected = seatClass === type.key;
                                return (
                                    <TouchableOpacity
                                        key={type.key}
                                        style={[styles.optionBoxSmall, selected && styles.optionBoxSmallSelected]}
                                        onPress={() => setSeatClass(type.key as any)}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={[styles.optionTextSmall, selected && styles.optionTextSmallSelected]}>
                                            {type.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 5: Distance Sector */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.distance_icon} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>Distance Sector</Text>
                                <Text style={styles.questionSubtitle}>Select the approximate distance of your flight</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.optionsRow}>
                            {[
                                { key: '0-500', label: '0 – 500 km' },
                                { key: '500-1500', label: '500 – 1,500 km' },
                                { key: '1500-4000', label: '1,500 – 4,000 km' },
                                { key: '4000+', label: '4,000+ km' }
                            ].map((type) => {
                                const selected = distanceSector === type.key;
                                return (
                                    <TouchableOpacity
                                        key={type.key}
                                        style={[styles.optionBoxSmall, selected && styles.optionBoxSmallSelected]}
                                        onPress={() => setDistanceSector(type.key as any)}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={[styles.optionTextSmall, selected && styles.optionTextSmallSelected]}>
                                            {type.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                </View>
                <View style={styles.questionsSection1}>
                    {/* Estimated Annual Flight Emissions Card */}
                    <View style={styles.emissionsCard}>
                        <View style={styles.emissionsIconContainer}>
                            <Image source={Images.leaf} style={styles.emissionsLeafIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.emissionsTextContainer}>
                            <View style={styles.emissionsCardTitle}>
                                <Text style={{ fontSize: 11, fontFamily: styles.emissionsCardTitle.fontFamily, color: '#6B7A70' }}>Estimated Annual Flight Emissions</Text>
                                <TouchableOpacity
                                    style={styles.emissionsTitleInfoIcon}
                                >
                                    <Text style={styles.emissionsTitleInfoText}>i</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.emissionsValueRow}>
                                <Text style={styles.emissionsValue}>{annualEmissionsTons}</Text>
                                <Text style={styles.emissionsUnit}>Tons CO₂</Text>
                            </View>
                            <View style={styles.emissionsEquivalentRow}>
                                <Text style={styles.emissionsEquivalentText}>Equivalent to</Text>
                                <Image source={Images.treeIcon} style={styles.emissionsTreeIcon} resizeMode="contain" />
                                <Text style={[styles.emissionsEquivalentText, { fontFamily: 'OpenSans-Bold', color: '#0A5F35' }]}>{treesRequired} Trees</Text>
                                <Text style={styles.emissionsEquivalentText}> Required to Offset</Text>
                            </View>
                        </View>
                        <Image source={Images.green_trees} style={styles.emissionsForestImage} resizeMode="contain" />
                    </View>

                    {/* Did You Know? Card */}
                    <View style={styles.didYouKnowCard}>
                        <View style={styles.didYouKnowIconContainer}>
                            <Image source={Images.idea} style={styles.didYouKnowBulbIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.didYouKnowContent}>
                            <Text style={styles.didYouKnowTitle}>Did you know?</Text>
                            <Text style={styles.didYouKnowText}>
                                A single round-trip international flight can emit more CO₂ than several months of daily commuting.
                            </Text>
                        </View>
                        <Image source={Images.flight} style={styles.didYouKnowPlaneImage} resizeMode="contain" />
                    </View>

                    {/* Footer Action Buttons */}
                    <View style={styles.footerButtonsRow}>
                        <TouchableOpacity
                            style={styles.seeCalculationButton}
                            onPress={handleSeeCalculation}
                            activeOpacity={0.8}
                        >
                            <Image source={Images.calculator} style={styles.seeCalculationIcon} resizeMode="contain" />
                            <Text style={styles.seeCalculationText}>See Calculation</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.saveContinueButton}
                            onPress={handleSaveAndContinue}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.saveContinueText}>Save & Continue</Text>
                            <Image source={Images.back} style={[styles.saveContinueArrow, { transform: [{ rotate: '180deg' }] }]} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    {/* Security and Privacy Banner */}
                    <View style={styles.securityBanner}>
                        <View style={styles.securityIconTextRow}>
                            <Image source={Images.shield} style={styles.securityIcon} resizeMode="contain" />
                            <Text style={styles.securityText}>
                                Your data is 100% secure and used only to calculate your carbon footprint.
                            </Text>
                        </View>
                        <Image source={Images.leaf} style={styles.securityLeaf} resizeMode="contain" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FlightCarbonScreen;
