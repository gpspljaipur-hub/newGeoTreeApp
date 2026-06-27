import React from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Images from '../../../constants/images';
import { Colors } from '../../../comman/Colors';
import { useNavigation } from '@react-navigation/native';



const CalculateCarbonScreen = () => {
    const navigation = useNavigation<any>();

    const STATS_DATA = [
        {
            id: '1',
            value: '2.5M+',
            label: 'Trees Planted',
            sublabel: 'Across India',
            icon: Images.treeIcon,
        },
        {
            id: '2',
            value: '25K+ Tons',
            label: 'CO₂ Offset',
            sublabel: 'And Growing',
            icon: Images.Emission,
        },
        {
            id: '3',
            value: '50K+',
            label: 'Happy Planters',
            sublabel: 'Making Impact',
            icon: Images.group,
        },
        {
            id: '4',
            value: '50K+',
            label: 'Trusted By',
            sublabel: 'People Like You',
            icon: Images.verified,
        },
    ];

    const CATEGORIES = [
        {
            id: '1',
            title: '1. Travel',
            description: 'Calculate your emissions from daily commuting and road travel.',
            image: Images.travel_cat,
            infoTitle: 'Travel Assessment',
            infoBody: 'Measures carbon emissions generated from your daily road commutes, public transport, and vehicle usage based on mileage and fuel type.',
        },
        {
            id: '2',
            title: '2. Food',
            description: 'Understand the impact of your food choices and diet.',
            image: Images.food_cat,
            infoTitle: 'Food Assessment',
            infoBody: 'Calculates the carbon footprint based on your dietary choices, meat consumption frequency, and organic food preferences.',
        },
        {
            id: '3',
            title: '3. Electricity',
            description: 'Measure emissions from your home energy consumption.',
            image: Images.electricity_cat,
            infoTitle: 'Electricity Assessment',
            infoBody: 'Measures carbon footprints associated with residential energy usage, electricity bills, and LPG cooking gas consumption.',
        },
        {
            id: '4',
            title: '4. Flights',
            description: 'Calculate the impact of your air travel and trips.',
            image: Images.flights_cat,
            infoTitle: 'Flight Assessment',
            infoBody: 'Computes air travel carbon emissions by considering short-haul and long-haul flights taken annually.',
        },
    ];

    const handleInfoPress = (title: string, body: string) => {
        Alert.alert(title, body, [{ text: 'Close', style: 'cancel' }]);
    };

    const handleCategoryPress = (categoryId: string) => {
        if (categoryId === '1') {
            navigation.navigate('TravelCarbon');
        } else {
            Alert.alert('Coming Soon', 'This category assessment is coming soon!');
        }
    };

    const handleStartAssessment = () => {
        Alert.alert(
            'Assessment',
            'Starting your carbon footprint calculation. You will walk through the travel, food, electricity, and flights steps.',
            [
                {
                    text: 'Begin',
                    onPress: () => {
                        navigation.navigate('TravelCarbon');
                    },
                },
                { text: 'Cancel', style: 'cancel' },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#F4FBF7" barStyle="dark-content" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <ImageBackground
                    source={Images.carbon_bg}
                    style={styles.topSectionWrapper}
                    imageStyle={{}}
                    resizeMode="cover"
                >
                    {/* Custom Header */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.headerIconButton}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={Images.back}
                                style={styles.headerIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View />
                    </View>

                    {/* Hero Section */}
                    <View style={styles.heroSection}>
                        <View style={styles.heroTextContent}>
                            <Text style={styles.heroTitle}>
                                Measure Your{'\n'}
                                <Text style={styles.heroTitleGreen}>Carbon Footprint</Text>
                            </Text>
                            <Text style={styles.heroDesc}>
                                Understand your impact across key areas of your life and take a step towards a greener planet.
                            </Text>
                        </View>
                    </View>


                </ImageBackground>
                {/* Statistics Horizontal Box divided into 4 columns */}
                <View style={styles.statsContainer}>
                    {STATS_DATA.map((item, idx) => (
                        <React.Fragment key={item.id}>
                            <View style={styles.statItem}>
                                <View style={styles.statIconContainer}>
                                    <Image
                                        source={item.icon}
                                        style={styles.statIcon}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={styles.statTextContainer}>
                                    <Text style={styles.statLabel} numberOfLines={2}>{item.label}</Text>
                                    <Text style={styles.statValue}>{item.value}</Text>
                                    <Text style={styles.statSublabel} numberOfLines={2}>{item.sublabel}</Text>
                                </View>
                            </View>
                        </React.Fragment>
                    ))}
                </View>

                {/* Section Title */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Calculate Your Carbon Footprint</Text>
                    <Text style={styles.sectionSubtitle}>Select a category to begin your assessment</Text>
                </View>

                {/* 2x2 Category Grid */}
                <View style={styles.gridContainer}>
                    {CATEGORIES.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.gridCard}
                            activeOpacity={0.8}
                            onPress={() => handleCategoryPress(item.id)}
                        >
                            {/* Info Button */}
                            <TouchableOpacity
                                style={styles.cardInfoButton}
                                activeOpacity={0.6}
                                onPress={() => handleInfoPress(item.infoTitle, item.infoBody)}
                            >
                                <View style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 9,
                                    borderWidth: 1.2,
                                    borderColor: '#8E9A93',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ fontSize: 10, color: '#8E9A93', fontWeight: 'bold' }}>i</Text>
                                </View>
                            </TouchableOpacity>

                            {/* Category Illustration */}
                            <View style={styles.cardImageContainer}>
                                <Image
                                    source={item.image}
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                />
                            </View>

                            {/* Title & Description */}
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDesc} numberOfLines={3}>
                                {item.description}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Quote Banner */}
                <View style={styles.bannerCard}>
                    <View style={styles.bannerIconContainer}>
                        <Image
                            source={Images.calculator_icon}
                            style={styles.bannerIcon}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.bannerText}>
                        Your small step today can create{'\n'}a big impact for tomorrow.
                    </Text>
                    <View style={styles.bannerTreesRow}>
                        <Image source={Images.banner_tree} style={styles.bannerTreeIcon} resizeMode="contain" />
                        <Image source={Images.banner_tree} style={styles.bannerTreeIcon} resizeMode="contain" />
                        <Image source={Images.banner_tree} style={styles.bannerTreeIcon} resizeMode="contain" />
                        <Image source={Images.banner_tree} style={styles.bannerTreeIcon} resizeMode="contain" />
                    </View>
                </View>

                {/* Start Assessment Action Button */}
                <TouchableOpacity
                    style={styles.assessmentButton}
                    activeOpacity={0.8}
                    onPress={handleStartAssessment}
                >
                    <Text style={styles.assessmentButtonText}>Start Assessment</Text>
                </TouchableOpacity>
            </ScrollView>


        </SafeAreaView>
    );
};

export default CalculateCarbonScreen;
