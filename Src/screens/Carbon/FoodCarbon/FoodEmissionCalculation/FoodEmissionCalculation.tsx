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
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './Styles';
import Images from '../../../../constants/images';
import fonts from '../../../../comman/fonts';
import { Colors } from '../../../../comman/Colors';

const { width } = Dimensions.get('window');

const FoodEmissionCalculationScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    // Route Parameters
    const {
        annualTons = 0.92,
        selectedDiet = 'vegetarian',
        selectedMeals = '3',
        selectedFruits = '3-4',
        selectedDairy = '3-4',
        selectedProcessed = 'rarely',
        selectedMeat = 'never',
        selectedLocal = 'always',
    } = route.params || {};

    // Metrics Math
    const annualEmissionsKg = Math.round(annualTons * 1000);
    const treesRequired = Math.ceil(annualEmissionsKg / 22);
    const offsetCost = treesRequired * 25;

    // Format Helper
    const formatInput = (key: string, value: string) => {
        if (key === 'diet') {
            if (value === 'vegetarian') return 'Vegetarian';
            if (value === 'eggetarian') return 'Eggetarian';
            if (value === 'non-veg') return 'Non-Vegetarian';
            if (value === 'high-meat') return 'High Meat Diet';
        }
        if (key === 'meals') return `${value} Meals`;
        if (key === 'local') return value.charAt(0).toUpperCase() + value.slice(1);
        if (value === 'rarely') return 'Rarely';
        if (value === 'daily') return 'Daily';
        return `${value} times / week`;
    };

    // Row Data Calculations
    const getDietDetails = () => {
        if (selectedDiet === 'vegetarian') return { factor: 'Low', color: '#10B981', impact: '0.35' };
        if (selectedDiet === 'eggetarian') return { factor: 'Medium', color: '#F59E0B', impact: '0.45' };
        if (selectedDiet === 'non-veg') return { factor: 'High', color: '#EF4444', impact: '0.65' };
        return { factor: 'Very High', color: '#EF4444', impact: '0.95' };
    };

    const getMealsDetails = () => {
        if (selectedMeals === '1') return { factor: 'Low', color: '#10B981', impact: '0.10' };
        if (selectedMeals === '2') return { factor: 'Standard', color: '#F59E0B', impact: '0.15' };
        if (selectedMeals === '3') return { factor: 'Standard', color: '#F59E0B', impact: '0.18' };
        return { factor: 'High', color: '#EF4444', impact: '0.25' };
    };

    const getDairyDetails = () => {
        if (selectedDairy === 'rarely') return { factor: 'Low', color: '#10B981', impact: '0.05' };
        if (selectedDairy === '1-2') return { factor: 'Medium', color: '#F59E0B', impact: '0.12' };
        if (selectedDairy === '3-4') return { factor: 'Medium', color: '#F59E0B', impact: '0.22' };
        return { factor: 'High', color: '#EF4444', impact: '0.35' };
    };

    const getProcessedDetails = () => {
        if (selectedProcessed === 'rarely') return { factor: 'Low', color: '#10B981', impact: '0.05' };
        if (selectedProcessed === '1-2') return { factor: 'Medium', color: '#F59E0B', impact: '0.15' };
        if (selectedProcessed === '3-4') return { factor: 'Medium', color: '#F59E0B', impact: '0.25' };
        return { factor: 'High', color: '#EF4444', impact: '0.40' };
    };

    const getLocalDetails = () => {
        if (selectedLocal === 'always') return { factor: 'Reduction Applied', color: '#10B981', impact: '-0.08' };
        if (selectedLocal === 'often') return { factor: 'Reduction Applied', color: '#10B981', impact: '-0.05' };
        if (selectedLocal === 'sometimes') return { factor: 'Neutral', color: '#64748B', impact: '0.00' };
        if (selectedLocal === 'rarely') return { factor: 'High', color: '#EF4444', impact: '0.05' };
        return { factor: 'High', color: '#EF4444', impact: '0.10' };
    };

    const dietDetails = getDietDetails();
    const mealsDetails = getMealsDetails();
    const dairyDetails = getDairyDetails();
    const processedDetails = getProcessedDetails();
    const localDetails = getLocalDetails();

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Header Background */}
                <ImageBackground
                    source={Images.food_cat}
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
                                <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                            </TouchableOpacity>
                            <View style={styles.headerTitleContainer}>
                                <View style={styles.headerTitleRow}>
                                    <Text style={styles.headerTitle}>Food Emission Calculation</Text>
                                </View>
                                <Text style={styles.headerSubtitle}>
                                    Here’s how we calculated your food-related carbon emissions.
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Overlapping Key Stats Cards */}
                <View style={styles.statsCardContainer}>
                    <View style={styles.statsCard}>
                        <View style={styles.statItem}>
                            <View style={styles.statIconCircle}>
                                <Image source={Images.co2Cloud} style={styles.statIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.statLabel}>Annual Food Emissions</Text>
                            <Text style={[styles.statValue, styles.statValueText]}>
                                {annualTons} <Text style={styles.statUnit}>Tons CO₂ / Year</Text>
                            </Text>
                        </View>
                        <View style={styles.verticalDivider} />
                        <View style={styles.statItem}>
                            <View style={styles.statIconCircle}>
                                <Image source={Images.treeIcon} style={styles.statIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.statLabel}>Trees Required</Text>
                            <Text style={styles.statValue}>{treesRequired} <Text style={styles.statUnit}>Trees</Text></Text>
                        </View>
                        <View style={styles.verticalDivider} />
                        <View style={styles.statItem}>
                            <View style={styles.statIconCircle}>
                                <Image source={Images.leaf} style={styles.statIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.statLabel}>Offset Cost (Est.)</Text>
                            <Text style={styles.statValue}>₹{offsetCost.toLocaleString('en-IN')} <Text style={styles.statUnit}>For {treesRequired} Trees</Text></Text>
                        </View>
                    </View>
                </View>

                {/* Calculation Breakdown */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionTitle}>Calculation Breakdown</Text>
                    <View style={styles.tableContainer}>
                        {/* Table Header */}
                        <View style={styles.tableHeader}>
                            <Text style={[styles.tableCellParam, styles.colHeader]}>Parameter</Text>
                            <Text style={[styles.cellInput, styles.colHeader]}>Your Input</Text>
                            <Text style={[styles.cellFactor, styles.colHeader]}>Emission Factor</Text>
                            <Text style={[styles.cellImpact, styles.colHeader]}>Annual Impact (CO₂)</Text>
                        </View>

                        {/* Diet Type Row */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCellParam}>
                                <Image source={Images.food_icon_diet} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text style={styles.tableCellText}>Diet Type</Text>
                            </View>
                            <Text style={styles.cellInput}>{formatInput('diet', selectedDiet)}</Text>
                            <Text style={[styles.cellFactor, { color: dietDetails.color }]}>{dietDetails.factor}</Text>
                            <Text style={styles.cellImpact}>{dietDetails.impact} Tons</Text>
                        </View>

                        {/* Meals Per Day Row */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCellParam}>
                                <Image source={Images.food_icon_meals} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text style={styles.tableCellText}>Meals Per Day</Text>
                            </View>
                            <Text style={styles.cellInput}>{formatInput('meals', selectedMeals)}</Text>
                            <Text style={[styles.cellFactor, { color: mealsDetails.color }]}>{mealsDetails.factor}</Text>
                            <Text style={styles.cellImpact}>{mealsDetails.impact} Tons</Text>
                        </View>

                        {/* Dairy Products Row */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCellParam}>
                                <Image source={Images.food_icon_freq} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text style={styles.tableCellText}>Dairy Products</Text>
                            </View>
                            <Text style={styles.cellInput}>{formatInput('dairy', selectedDairy)}</Text>
                            <Text style={[styles.cellFactor, { color: dairyDetails.color }]}>{dairyDetails.factor}</Text>
                            <Text style={styles.cellImpact}>{dairyDetails.impact} Tons</Text>
                        </View>

                        {/* Processed Food Row */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCellParam}>
                                <Image source={Images.food_icon_freq} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text style={styles.tableCellText}>Processed Food</Text>
                            </View>
                            <Text style={styles.cellInput}>{formatInput('processed', selectedProcessed)}</Text>
                            <Text style={[styles.cellFactor, { color: processedDetails.color }]}>{processedDetails.factor}</Text>
                            <Text style={styles.cellImpact}>{processedDetails.impact} Tons</Text>
                        </View>

                        {/* Local Food Preference Row */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCellParam}>
                                <Image source={Images.food_icon_local} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text style={styles.tableCellText}>Local Food Preference</Text>
                            </View>
                            <Text style={styles.cellInput}>{formatInput('local', selectedLocal)}</Text>
                            <Text style={[styles.cellFactor, { color: localDetails.color }]}>{localDetails.factor}</Text>
                            <Text style={styles.cellImpact}>{localDetails.impact} Tons</Text>
                        </View>

                        {/* Highlighted Total Bar */}
                        <View style={styles.totalRowHighlight}>
                            <Text style={styles.totalRowLabel}>Total Annual Food Emissions</Text>
                            <View>
                                <Text style={styles.totalRowValue}>{annualEmissionsKg} KG CO₂</Text>
                                <Text style={styles.totalRowSub}>= {annualTons} Tons CO₂</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Two Column Layout: Donut & Analysis */}
                <View style={styles.twoColRow}>
                    {/* Donut Chart Card */}
                    <View style={styles.colCardLeft}>
                        <Text style={styles.colCardTitle}>Where does your food footprint come from?</Text>
                        <View style={styles.donutChartContainer}>
                            <View style={styles.donutCircleWrapper}>
                                <View style={styles.donutView} />
                                <View style={styles.donutHole} />
                            </View>
                            <View style={styles.donutLegend}>
                                <View style={styles.legendItem}>
                                    <View style={[styles.legendDot, { backgroundColor: '#3B82F6' }]} />
                                    <Text style={styles.legendText} numberOfLines={1}>Dairy</Text>
                                    <Text style={styles.legendValue}>45%</Text>
                                </View>
                                <View style={styles.legendItem}>
                                    <View style={[styles.legendDot, { backgroundColor: '#10B981' }]} />
                                    <Text style={styles.legendText} numberOfLines={1}>Fruits/Veg</Text>
                                    <Text style={styles.legendValue}>25%</Text>
                                </View>
                                <View style={styles.legendItem}>
                                    <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
                                    <Text style={styles.legendText} numberOfLines={1}>Processed</Text>
                                    <Text style={styles.legendValue}>10%</Text>
                                </View>
                                <View style={styles.legendItem}>
                                    <View style={[styles.legendDot, { backgroundColor: '#94A3B8' }]} />
                                    <Text style={styles.legendText} numberOfLines={1}>Supply Chain</Text>
                                    <Text style={styles.legendValue}>20%</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Diet Analysis Card */}
                    <View style={styles.colCardRight}>
                        <View style={styles.analysisHeader}>
                            <Image source={Images.food_icon_bulb} style={styles.analysisHeaderIcon} resizeMode="contain" />
                            <Text style={styles.analysisTitle}>Your Diet Analysis</Text>
                        </View>
                        <Text style={styles.analysisDesc}>
                            Your vegetarian diet generates approximately{' '}
                            <Text style={{ fontFamily: fonts.OpenSans_Bold, color: '#10B981' }}>60% less emissions</Text>{' '}
                            than an average non-vegetarian diet.
                        </Text>
                    </View>
                </View>

                {/* Offset Card */}
                <View style={styles.offsetCard}>
                    <View style={styles.offsetLeft}>
                        <Image source={Images.food_icon_leaf_circle} style={{ width: 44, height: 44, marginRight: 10 }} resizeMode="contain" />
                        <View style={styles.offsetTextContainer}>
                            <Text style={styles.offsetLabel}>Offset Your Food Impact</Text>
                            <Text style={styles.offsetValue}>Plant {treesRequired} Trees</Text>
                            <Text style={styles.offsetDesc}>Offset 100% of your annual food emissions.</Text>
                        </View>
                    </View>
                    <View style={styles.offsetDivider} />
                    <View style={styles.offsetRightGrid}>
                        <View style={styles.offsetGridCol}>
                            <Image source={Images.treeIcon} style={styles.offsetGridIcon} resizeMode="contain" />
                            <Text style={styles.offsetGridText}>{treesRequired} Trees</Text>
                        </View>
                        <View style={styles.offsetGridCol}>
                            <Image source={Images.globe} style={styles.offsetGridIcon} resizeMode="contain" />
                            <Text style={styles.offsetGridText}>{annualTons} Tons CO₂</Text>
                        </View>
                        <View style={styles.offsetGridCol}>
                            <Image source={Images.verified} style={styles.offsetGridIcon} resizeMode="contain" />
                            <Text style={styles.offsetGridText}>GPS Verified</Text>
                        </View>
                        <View style={styles.offsetGridCol}>
                            <Image source={Images.certificate} style={styles.offsetGridIcon} resizeMode="contain" />
                            <Text style={styles.offsetGridText}>Certificate</Text>
                        </View>
                    </View>
                </View>

                {/* Compared to Household Comparison Card */}
                <View style={styles.compareCard}>
                    <Image source={Images.food_icon_bar_chart_circle} style={{ width: 44, height: 44, marginRight: 10 }} resizeMode="contain" />
                    <View style={styles.compareTextContainer}>
                        <Text style={styles.compareLabel}>Compared to Average Indian Household</Text>
                        <View style={styles.compareTitleRow}>
                            <Text style={styles.compareTitleText}>Your Food Footprint is Lower Than Average</Text>
                            <Image source={Images.back} style={[styles.compareChevron, { transform: [{ rotate: '-90deg' }] }]} resizeMode="contain" />
                        </View>
                    </View>
                    <View style={styles.sliderContainer}>
                        <View style={styles.sliderBarWrapper}>
                            {/* Smooth Linear Gradient Bar */}
                            <LinearGradient
                                colors={['#10B981', '#84CC16', '#EAB308', '#F97316', '#EF4444']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.sliderBar}
                            />
                            
                            {/* Dotted Vertical Indicators */}
                            <View style={[styles.sliderDottedLine, { left: '18%' }]} />
                            <View style={[styles.sliderDottedLine, { left: '50%' }]} />
                            <View style={[styles.sliderDottedLine, { left: '82%' }]} />

                            {/* Teardrop Locator Pin */}
                            <View style={[styles.pinContainer, { left: '32%' }]}>
                                <Image source={Images.food_icon_pin} style={{ width: 18, height: 20 }} resizeMode="contain" />
                            </View>
                        </View>
                        <View style={styles.sliderLabels}>
                            <Text style={styles.sliderLabelText}>Lower</Text>
                            <Text style={styles.sliderLabelText}>Average</Text>
                            <Text style={styles.sliderLabelText}>Higher</Text>
                        </View>
                    </View>
                </View>

                {/* Bottom CTA Button */}
                <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity
                        style={styles.backAssessmentBtn}
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backAssessmentBtnText}>Back to Food Assessment</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default FoodEmissionCalculationScreen;
