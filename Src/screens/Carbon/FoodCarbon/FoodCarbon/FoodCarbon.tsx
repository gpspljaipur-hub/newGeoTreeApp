import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Images from '../../../../constants/images';
import { Colors } from '../../../../comman/Colors';

const FoodCarbonScreen = () => {
    const navigation = useNavigation<any>();

    // Question States (defaulting to match 0.92 Tons CO2 / Year visual mockup)
    const [selectedDiet, setSelectedDiet] = useState('vegetarian'); // vegetarian, eggetarian, non-veg, high-meat
    const [selectedMeals, setSelectedMeals] = useState('3'); // '1', '2', '3', '4+'
    const [selectedFruits, setSelectedFruits] = useState('3-4'); // 'rarely', '1-2', '3-4', 'daily'
    const [selectedDairy, setSelectedDairy] = useState('3-4'); // 'rarely', '1-2', '3-4', 'daily'
    const [selectedProcessed, setSelectedProcessed] = useState('rarely'); // 'rarely', '1-2', '3-4', 'daily'
    const [selectedMeat, setSelectedMeat] = useState('never'); // 'never', '1-2', '3-4', 'daily'
    const [selectedLocal, setSelectedLocal] = useState('always'); // 'always', 'often', 'sometimes', 'rarely', 'never'

    // Dynamic Footprint Estimation Formula
    const getEmissionValue = () => {
        let base = 2.2; // vegetarian base factor (kg CO2/day)
        if (selectedDiet === 'eggetarian') base = 2.8;
        else if (selectedDiet === 'non-veg') base = 3.8;
        else if (selectedDiet === 'high-meat') base = 5.2;

        let mealsMult = 1.0;
        if (selectedMeals === '1') mealsMult = 0.7;
        else if (selectedMeals === '2') mealsMult = 0.9;
        else if (selectedMeals === '3') mealsMult = 1.0;
        else if (selectedMeals === '4+') mealsMult = 1.2;

        let fruitAdj = 0;
        if (selectedFruits === 'rarely') fruitAdj = 0.2;
        else if (selectedFruits === '1-2') fruitAdj = 0.1;
        else if (selectedFruits === '3-4') fruitAdj = 0;
        else if (selectedFruits === 'daily') fruitAdj = -0.15;

        let dairyAdj = 0.3;
        if (selectedDairy === 'rarely') dairyAdj = 0;
        else if (selectedDairy === '1-2') dairyAdj = 0.15;
        else if (selectedDairy === '3-4') dairyAdj = 0.3;
        else if (selectedDairy === 'daily') dairyAdj = 0.5;

        let processedAdj = 0;
        if (selectedProcessed === 'rarely') processedAdj = 0;
        else if (selectedProcessed === '1-2') processedAdj = 0.2;
        else if (selectedProcessed === '3-4') processedAdj = 0.4;
        else if (selectedProcessed === 'daily') processedAdj = 0.7;

        let meatAdj = 0;
        if (selectedMeat === 'never') meatAdj = 0;
        else if (selectedMeat === '1-2') meatAdj = 0.6;
        else if (selectedMeat === '3-4') meatAdj = 1.2;
        else if (selectedMeat === 'daily') meatAdj = 2.2;

        let localAdj = 0;
        if (selectedLocal === 'always') localAdj = -0.2;
        else if (selectedLocal === 'often') localAdj = -0.1;
        else if (selectedLocal === 'sometimes') localAdj = 0;
        else if (selectedLocal === 'rarely') localAdj = 0.1;
        else if (selectedLocal === 'never') localAdj = 0.2;

        const dailyKg = (base * mealsMult) + fruitAdj + dairyAdj + processedAdj + meatAdj + localAdj;
        const annualKg = Math.round(dailyKg * 365);
        const annualTons = parseFloat((annualKg / 1000).toFixed(2));
        return { annualKg, annualTons };
    };

    const { annualTons } = getEmissionValue();

    // Explain why food impacts carbon footprint
    const handleInfoPress = () => {
        Alert.alert(
            'Why Food Impacts Carbon?',
            'Food production, processing, transport, and packaging account for approximately 26% of global greenhouse gas emissions. Meat and animal products generally have a 10x-50x higher footprint than plant-based alternatives.',
            [{ text: 'Got it', style: 'default' }]
        );
    };

    const handleSeeCalculation = () => {
        Alert.alert(
            'How Estimate is Calculated',
            `Based on your selections:\n- Diet base: ${selectedDiet === 'vegetarian' ? '2.2' : selectedDiet === 'eggetarian' ? '2.8' : selectedDiet === 'non-veg' ? '3.8' : '5.2'
            } kg CO₂/day\n- Meal factor: ${selectedMeals === '1' ? '70%' : selectedMeals === '2' ? '90%' : selectedMeals === '3' ? '100%' : '120%'}\n- Adjustments for dairy, processed food, meat frequencies, and local sourcing.\n- Formula: Annual Tons = (Daily Base * Meals Multiplier + Frequencies Adjustments) * 365 / 1000.`,
            [{ text: 'OK', style: 'default' }]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={Images.food_cat}
                    style={styles.heroImageBg}
                    resizeMode="cover"
                >
                    <View style={styles.headerRow}>
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>

                        <View style={styles.stepperContainer}>
                            <View style={styles.stepLineLeft} />
                            <View style={styles.stepLineRight} />
                            {[
                                { step: '1', title: 'Travel', active: false, completed: true },
                                { step: '2', title: 'Food', active: true, completed: false },
                                { step: '3', title: 'Electricity', active: false, completed: false },
                                { step: '4', title: 'Flights', active: false, completed: false },
                            ].map((item) => (
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
                                <Text style={styles.heroTitle}>Food</Text>
                                <Image source={Images.leaf} style={styles.heroLeafIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.heroDescTitle}>Carbon Assessment</Text>
                            <Text style={styles.heroDesc}>
                                Let’s understand the impact of your food choices and diet.
                            </Text>
                            <TouchableOpacity
                                style={styles.infoPillButton}
                                activeOpacity={0.7}
                                onPress={handleInfoPress}
                            >
                                <View style={styles.infoPillIconContainer}>
                                    <Text style={styles.infoPillIconText}>i</Text>
                                </View>
                                <Text style={styles.infoPillText}>Why does food impact carbon?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.heroRightSpacer} />
                    </View>
                </ImageBackground>

                {/* Main Questions Form */}
                <View style={styles.questionsSection}>
                    {/* Question 1: Diet Type */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.food_icon_diet} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>1. What type of diet do you follow most of the time?</Text>
                                <Text style={styles.questionSubtitle}>Choose the option that best represents your diet.</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.7}
                                onPress={() =>
                                    Alert.alert(
                                        'Diet Types Explained',
                                        'Vegetarian: No meat, fish, or poultry. Veg products & dairy only.\nEggetarian: Vegetarian diet plus eggs.\nNon-Vegetarian: Regular consumption of fish, chicken, and meats.\nHigh Meat: High consumption of beef, pork, or lamb (high-emissions meats).'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.optionsRow}>
                            {[
                                { id: 'vegetarian', label: 'Vegetarian', emoji: '🌿' },
                                { id: 'eggetarian', label: 'Eggetarian', emoji: '🥚' },
                                { id: 'non-veg', label: 'Non-Vegetarian', emoji: '🍗' },
                                { id: 'high-meat', label: 'High Meat Diet', emoji: '🥩' },
                            ].map((item) => {
                                const isSelected = selectedDiet === item.id;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[styles.dietOptionBox, isSelected && styles.dietOptionBoxSelected]}
                                        activeOpacity={0.7}
                                        onPress={() => setSelectedDiet(item.id)}
                                    >
                                        <Text style={styles.dietOptionEmoji}>{item.emoji}</Text>
                                        <Text style={[styles.dietOptionText, isSelected && styles.dietOptionTextSelected]}>
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 2: Daily Meals Count */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.food_icon_meals} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>2. How many meals do you have in a day?</Text>
                                <Text style={styles.questionSubtitle}>Count your main meals.</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.7}
                                onPress={() =>
                                    Alert.alert(
                                        'Meals per Day',
                                        'Fewer daily meals reduce energy inputs in prep and food packaging, while frequent snacks/meals raise processing demands.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.optionsRow}>
                            {[
                                { id: '1', label: '1 Meal' },
                                { id: '2', label: '2 Meals' },
                                { id: '3', label: '3 Meals' },
                                { id: '4+', label: '4+ Meals' },
                            ].map((item) => {
                                const isSelected = selectedMeals === item.id;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[styles.optionBox, isSelected && styles.optionBoxSelected]}
                                        activeOpacity={0.7}
                                        onPress={() => setSelectedMeals(item.id)}
                                    >
                                        <Text style={[styles.optionBoxText, isSelected && styles.optionBoxTextSelected]}>
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 3: Frequency Items Table */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.food_icon_freq} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>3. How often do you eat the following?</Text>
                                <Text style={styles.questionSubtitle}>Select the average frequency per week.</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.7}
                                onPress={() =>
                                    Alert.alert(
                                        'Frequency and Footprint',
                                        'Higher veggie consumption (low carbon) reduces footprint, while processed food and high-fat dairy increase transportation & manufacturing footprints.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Fruits & Veg Row */}
                        <View style={styles.freqRowContainer}>
                            <View style={styles.freqRowLabel}>
                                <Text style={styles.freqRowEmoji}>🍎</Text>
                                <Text style={styles.freqRowLabelText}>Fruits & Vegetables</Text>
                            </View>
                            <View style={styles.freqRowSegments}>
                                {['rarely', '1-2', '3-4', 'daily'].map((val) => {
                                    const isSelected = selectedFruits === val;
                                    const labelMap: { [key: string]: string } = {
                                        rarely: 'Rarely',
                                        '1-2': '1-2 times',
                                        '3-4': '3-4 times',
                                        daily: 'Daily',
                                    };
                                    return (
                                        <TouchableOpacity
                                            key={val}
                                            style={[styles.freqSegmentBox, isSelected && styles.freqSegmentBoxSelected]}
                                            activeOpacity={0.7}
                                            onPress={() => setSelectedFruits(val)}
                                        >
                                            <Text style={[styles.freqSegmentText, isSelected && styles.freqSegmentTextSelected]}>
                                                {labelMap[val]}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>

                        {/* Dairy Products Row */}
                        <View style={styles.freqRowContainer}>
                            <View style={styles.freqRowLabel}>
                                <Text style={styles.freqRowEmoji}>🥛</Text>
                                <Text style={styles.freqRowLabelText}>Dairy Products</Text>
                            </View>
                            <View style={styles.freqRowSegments}>
                                {['rarely', '1-2', '3-4', 'daily'].map((val) => {
                                    const isSelected = selectedDairy === val;
                                    const labelMap: { [key: string]: string } = {
                                        rarely: 'Rarely',
                                        '1-2': '1-2 times',
                                        '3-4': '3-4 times',
                                        daily: 'Daily',
                                    };
                                    return (
                                        <TouchableOpacity
                                            key={val}
                                            style={[styles.freqSegmentBox, isSelected && styles.freqSegmentBoxSelected]}
                                            activeOpacity={0.7}
                                            onPress={() => setSelectedDairy(val)}
                                        >
                                            <Text style={[styles.freqSegmentText, isSelected && styles.freqSegmentTextSelected]}>
                                                {labelMap[val]}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>

                        {/* Processed Food Row */}
                        <View style={styles.freqRowContainer}>
                            <View style={styles.freqRowLabel}>
                                <Text style={styles.freqRowEmoji}>🥫</Text>
                                <Text style={styles.freqRowLabelText}>Processed Food</Text>
                            </View>
                            <View style={styles.freqRowSegments}>
                                {['rarely', '1-2', '3-4', 'daily'].map((val) => {
                                    const isSelected = selectedProcessed === val;
                                    const labelMap: { [key: string]: string } = {
                                        rarely: 'Rarely',
                                        '1-2': '1-2 times',
                                        '3-4': '3-4 times',
                                        daily: 'Daily',
                                    };
                                    return (
                                        <TouchableOpacity
                                            key={val}
                                            style={[styles.freqSegmentBox, isSelected && styles.freqSegmentBoxSelected]}
                                            activeOpacity={0.7}
                                            onPress={() => setSelectedProcessed(val)}
                                        >
                                            <Text style={[styles.freqSegmentText, isSelected && styles.freqSegmentTextSelected]}>
                                                {labelMap[val]}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </View>

                    {/* Question 4: Meat Consumption */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.food_icon_meat} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>4. How often do you consume meat?</Text>
                                <Text style={styles.questionSubtitle}>Include chicken, mutton, fish or seafood.</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.7}
                                onPress={() =>
                                    Alert.alert(
                                        'Meat Consumption Footprint',
                                        'Red meats (beef, lamb) have the highest carbon footprint (~27-60 kg CO₂ per kg of meat) due to methane emissions and land-use changes.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.optionsRow}>
                            {[
                                { id: 'never', label: 'Never / Rarely' },
                                { id: '1-2', label: '1-2 times / week' },
                                { id: '3-4', label: '3-4 times / week' },
                                { id: 'daily', label: 'Daily' },
                            ].map((item) => {
                                const isSelected = selectedMeat === item.id;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[styles.optionBox, isSelected && styles.optionBoxSelected]}
                                        activeOpacity={0.7}
                                        onPress={() => setSelectedMeat(item.id)}
                                    >
                                        <Text style={[styles.optionBoxText, isSelected && styles.optionBoxTextSelected]}>
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Question 5: Local Food Preference */}
                    <View style={styles.questionCard}>
                        <View style={styles.questionHeader}>
                            <View style={styles.questionIconContainer}>
                                <Image source={Images.food_icon_local} style={styles.questionHeaderIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionTitle}>5. Do you prefer locally sourced & seasonal food?</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.questionInfoButton}
                                activeOpacity={0.7}
                                onPress={() =>
                                    Alert.alert(
                                        'Local Food Preference',
                                        'Buying local minimizes "food miles" — the emissions generated from transporting produce via cargo ships, flights, and trucks.'
                                    )
                                }
                            >
                                <View style={styles.questionInfoIcon}>
                                    <Text style={styles.questionInfoIconText}>i</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.optionsRow}>
                            {[
                                { id: 'always', label: 'Always' },
                                { id: 'often', label: 'Often' },
                                { id: 'sometimes', label: 'Sometimes' },
                                { id: 'rarely', label: 'Rarely' },
                                { id: 'never', label: 'Never' },
                            ].map((item) => {
                                const isSelected = selectedLocal === item.id;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[styles.localOptionBox, isSelected && styles.optionBoxSelected]}
                                        activeOpacity={0.7}
                                        onPress={() => setSelectedLocal(item.id)}
                                    >
                                        <Text style={[styles.optionBoxText, isSelected && styles.optionBoxTextSelected]}>
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Estimated Food Emissions Card */}
                    <View style={styles.emissionsCard}>
                        <View style={styles.emissionsLeft}>
                            <View style={styles.emissionsIconCircle}>
                                <Image source={Images.co2Cloud} style={styles.emissionsIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.emissionsTextContainer}>
                                <Text style={styles.emissionsLabel}>Your Food Emissions (Estimated)</Text>
                                <Text style={styles.emissionsValue}>
                                    {annualTons} <Text style={{ fontSize: 12 }}>Tons CO₂ / Year</Text>
                                </Text>
                                <Text style={styles.emissionsSub}>This is an estimate based on your inputs.</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.seeCalcButton}
                            activeOpacity={0.7}
                            onPress={handleSeeCalculation}
                        >
                            <Image source={Images.impact} style={styles.seeCalcIcon} resizeMode="contain" />
                            <Text style={styles.seeCalcText}>See Calculation</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Did You Know Educational Card */}
                    <View style={styles.didYouKnowCard}>
                        <View style={styles.didYouKnowIconContainer}>
                            <Image source={Images.food_icon_bulb} style={styles.didYouKnowIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.didYouKnowTextContainer}>
                            <Text style={styles.didYouKnowTitle}>Did You Know?</Text>
                            <Text style={styles.didYouKnowDesc}>
                                A plant-rich diet can reduce your food emissions by up to 70% compared to a high meat diet.
                            </Text>
                        </View>
                        <Image source={Images.food_icon_salad_bowl} style={{ width: 44, height: 30 }} resizeMode="contain" />
                    </View>

                    {/* Save & Continue CTA */}
                    <TouchableOpacity
                        style={styles.saveButton}
                        activeOpacity={0.8}
                        onPress={() => {
                            navigation.navigate('FoodEmissionCalculation', {
                                annualTons,
                                selectedDiet,
                                selectedMeals,
                                selectedFruits,
                                selectedDairy,
                                selectedProcessed,
                                selectedMeat,
                                selectedLocal,
                            });
                        }}
                    >
                        <Text style={styles.saveButtonText}>Save & Continue  →</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FoodCarbonScreen;
