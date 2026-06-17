import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    StatusBar,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import fonts from '../../comman/fonts';
import { styles } from './styles';

interface TreeRecommendation {
    name: string;
    image: any;
    matchRate: string;
    bullets: string[];
    co2: string;
    lifespan: string;
    waterNeed: string;
    isNative: boolean;
    survivalRate: string;
    project: string;
}

const WhichtreeShouldIPlantScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    // User Selections State
    const [selectedPurpose, setSelectedPurpose] = useState('carbon');
    const [selectedPriority, setSelectedPriority] = useState('co2');
    const [selectedState, setSelectedState] = useState('Rajasthan');

    const handleBack = () => {
        navigation.goBack();
    };

    const handleHowItWorks = () => {
        Alert.alert(
            'How it works?',
            'Our algorithms evaluate your planting purpose (e.g. Carbon Offset, gifting) and environmental priorities (e.g. water requirement, local biodiversity) to recommend native trees best suited for your selected state.',
            [{ text: 'Got it!' }]
        );
    };

    const handlePlantTree = (treeName: string, co2Val: number, project: string) => {
        navigation.navigate('DedicatePlantation', {
            treeName: treeName,
            qty: 10,
            projectName: project,
            stateName: selectedState,
            co2: co2Val,
        });
    };

    const handleChangeState = () => {
        Alert.alert(
            'Select Location',
            'Choose a state for plantation:',
            [
                { text: 'Rajasthan', onPress: () => setSelectedState('Rajasthan') },
                { text: 'Uttarakhand', onPress: () => setSelectedState('Uttarakhand') },
                { text: 'Karnataka', onPress: () => setSelectedState('Karnataka') },
                { text: 'Cancel', style: 'cancel' },
            ]
        );
    };

    // Static options lists matching the mockup
    const purposes = [
        { id: 'carbon', label: 'Carbon\nOffset', icon: Images.co2Cloud },
        { id: 'gift', label: 'Gift a\nTree', icon: Images.gift },
        { id: 'memory', label: 'In\nMemory', icon: Images.heart },
        { id: 'env', label: 'Environmental\nImpact', icon: Images.nature },
        { id: 'csr', label: 'CSR /\nCorporate', icon: Images.projectIcon },
        { id: 'personal', label: 'Personal\nPlantation', icon: Images.profile },
    ];

    const priorities = [
        { id: 'co2', label: 'Highest CO₂\nabsorption', icon: Images.co2Cloud },
        { id: 'growth', label: 'Fast\ngrowth', icon: Images.plant },
        { id: 'native', label: 'Native\nspecies', icon: Images.leaf },
        { id: 'medicinal', label: 'Medicinal\nvalue', icon: Images.verified },
        { id: 'wildlife', label: 'Wildlife\nsupport', icon: Images.bird },
        { id: 'lifespan', label: 'Long\nlifespan', icon: Images.treeIcon },
    ];

    // Dynamic recommendations dictionary based on selectedPriority
    const recommendationsData: Record<string, TreeRecommendation[]> = {
        co2: [
            {
                name: 'Neem Tree',
                image: Images.neem_tree,
                matchRate: '95% Match',
                co2: '22 KG',
                lifespan: '100+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '95%',
                project: 'Aravalli Restoration Project',
                bullets: [
                    'High carbon absorption (22 KG/year)',
                    'Native to Rajasthan',
                    'Drought resistant',
                    'Supports local biodiversity',
                ],
            },
            {
                name: 'Khejri Tree',
                image: Images.peepal_tree,
                matchRate: '89% Match',
                co2: '18 KG',
                lifespan: '80+ Years',
                waterNeed: 'Very Low',
                isNative: true,
                survivalRate: '92%',
                project: 'Thar Desert Afforestation',
                bullets: [
                    'Very low water requirement',
                    'Great for arid regions',
                    'Supports soil health',
                ],
            },
            {
                name: 'Rohida Tree',
                image: Images.gulmohar_tree,
                matchRate: '84% Match',
                co2: '16 KG',
                lifespan: '70+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '90%',
                project: 'Marwar Restoration Initiative',
                bullets: [
                    'Native species',
                    'Supports wildlife',
                    'Beautiful flowering tree',
                ],
            },
            {
                name: 'Amla Tree',
                image: Images.mango_tree,
                matchRate: '81% Match',
                co2: '14 KG',
                lifespan: '60+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '88%',
                project: 'Community Orchards Drive',
                bullets: [
                    'Medicinal value',
                    'High survival rate',
                    'Fruits for communities',
                ],
            },
        ],
        growth: [
            {
                name: 'Gulmohar Tree',
                image: Images.gulmohar_tree,
                matchRate: '96% Match',
                co2: '20 KG',
                lifespan: '75+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '91%',
                project: 'Urban Canopy Jaipur',
                bullets: [
                    'Rapid growth rate (fast canopy)',
                    'Provides excellent shade',
                    'Vibrant orange-red blooms',
                    'Improves micro-climate',
                ],
            },
            {
                name: 'Neem Tree',
                image: Images.neem_tree,
                matchRate: '88% Match',
                co2: '22 KG',
                lifespan: '100+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '95%',
                project: 'Aravalli Restoration Project',
                bullets: [
                    'Steady growth & air filtration',
                    'High survival rate',
                    'Supports local soil ecosystem',
                ],
            },
            {
                name: 'Peepal Tree',
                image: Images.peepal_tree,
                matchRate: '82% Match',
                co2: '25 KG',
                lifespan: '150+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '93%',
                project: 'Sariska Eco Buffer Zone',
                bullets: [
                    'Broad canopy growth',
                    'High oxygen release',
                    'Sacred heritage species',
                ],
            },
            {
                name: 'Mango Tree',
                image: Images.mango_tree,
                matchRate: '79% Match',
                co2: '16 KG',
                lifespan: '80+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '89%',
                project: 'Community Orchards Drive',
                bullets: [
                    'Fast seasonal growth',
                    'Fruit-bearing benefits',
                    'High community utility',
                ],
            },
        ],
        native: [
            {
                name: 'Peepal Tree',
                image: Images.peepal_tree,
                matchRate: '98% Match',
                co2: '25 KG',
                lifespan: '150+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '93%',
                project: 'Sariska Eco Buffer Zone',
                bullets: [
                    'Indispensable native keystone',
                    'High spiritual & ecological value',
                    'Extreme longevity (150+ yrs)',
                    '24/7 oxygen production',
                ],
            },
            {
                name: 'Neem Tree',
                image: Images.neem_tree,
                matchRate: '92% Match',
                co2: '22 KG',
                lifespan: '100+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '95%',
                project: 'Aravalli Restoration Project',
                bullets: [
                    'Native medicine powerhouse',
                    'Pest repellent qualities',
                    'Drought-hardy root systems',
                ],
            },
            {
                name: 'Khejri Tree',
                image: Images.peepal_tree,
                matchRate: '90% Match',
                co2: '18 KG',
                lifespan: '80+ Years',
                waterNeed: 'Very Low',
                isNative: true,
                survivalRate: '92%',
                project: 'Thar Desert Afforestation',
                bullets: [
                    'State tree of Rajasthan',
                    'Nitrogen-fixing capabilities',
                    'Survival in arid zones',
                ],
            },
            {
                name: 'Rohida Tree',
                image: Images.gulmohar_tree,
                matchRate: '85% Match',
                co2: '16 KG',
                lifespan: '70+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '90%',
                project: 'Marwar Restoration Initiative',
                bullets: [
                    'Native desert teak',
                    'High timber & flower value',
                    'Adapts to desert dry spells',
                ],
            },
        ],
        medicinal: [
            {
                name: 'Neem Tree',
                image: Images.neem_tree,
                matchRate: '99% Match',
                co2: '22 KG',
                lifespan: '100+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '95%',
                project: 'Aravalli Restoration Project',
                bullets: [
                    'Incredible antibacterial/antiseptic qualities',
                    'Purifies air & repels pests naturally',
                    'Extensively used in Ayurveda',
                    'High survival rate on rocky slopes',
                ],
            },
            {
                name: 'Amla Tree',
                image: Images.mango_tree,
                matchRate: '91% Match',
                co2: '14 KG',
                lifespan: '60+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '88%',
                project: 'Community Orchards Drive',
                bullets: [
                    'Rich source of Vitamin C',
                    'Ayurvedic health tonic source',
                    'Fruit benefits local gatherers',
                ],
            },
            {
                name: 'Peepal Tree',
                image: Images.peepal_tree,
                matchRate: '85% Match',
                co2: '25 KG',
                lifespan: '150+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '93%',
                project: 'Sariska Eco Buffer Zone',
                bullets: [
                    'Aids in breathing ailments',
                    'Bark used in herbal remedies',
                    'Supports positive mental well-being',
                ],
            },
            {
                name: 'Rohida Tree',
                image: Images.gulmohar_tree,
                matchRate: '80% Match',
                co2: '16 KG',
                lifespan: '70+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '90%',
                project: 'Marwar Restoration Initiative',
                bullets: [
                    'Traditional skin-soothing extract',
                    'High cultural heritage usage',
                    'Durable timber production',
                ],
            },
        ],
        wildlife: [
            {
                name: 'Peepal Tree',
                image: Images.peepal_tree,
                matchRate: '97% Match',
                co2: '25 KG',
                lifespan: '150+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '93%',
                project: 'Sariska Eco Buffer Zone',
                bullets: [
                    'Shelters over 100+ bird species',
                    'Attracts essential insect pollinators',
                    'Feeds monkeys, bats & herbivores',
                    'Creates deep canopy nesting sites',
                ],
            },
            {
                name: 'Mango Tree',
                image: Images.mango_tree,
                matchRate: '88% Match',
                co2: '16 KG',
                lifespan: '80+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '89%',
                project: 'Community Orchards Drive',
                bullets: [
                    'Provides food for local fauna',
                    'Nesting area for weaver birds',
                    'Rich organic soil contribution',
                ],
            },
            {
                name: 'Rohida Tree',
                image: Images.gulmohar_tree,
                matchRate: '86% Match',
                co2: '16 KG',
                lifespan: '70+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '90%',
                project: 'Marwar Restoration Initiative',
                bullets: [
                    'Flowers attract birds & desert bees',
                    'Provides shelter in desert regions',
                    'Secures sand dunes for wildlife paths',
                ],
            },
            {
                name: 'Neem Tree',
                image: Images.neem_tree,
                matchRate: '82% Match',
                co2: '22 KG',
                lifespan: '100+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '95%',
                project: 'Aravalli Restoration Project',
                bullets: [
                    'Broad evergreen nesting cover',
                    'Feeds small birds with neem berries',
                    'Reduces ambient temperature for fauna',
                ],
            },
        ],
        lifespan: [
            {
                name: 'Peepal Tree',
                image: Images.peepal_tree,
                matchRate: '99% Match',
                co2: '25 KG',
                lifespan: '150+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '93%',
                project: 'Sariska Eco Buffer Zone',
                bullets: [
                    'Extremely long lifespan (150+ years)',
                    'High cultural heritage reverence',
                    'Massive carbon capture store over centuries',
                    'Extremely resilient to harsh weather',
                ],
            },
            {
                name: 'Neem Tree',
                image: Images.neem_tree,
                matchRate: '90% Match',
                co2: '22 KG',
                lifespan: '100+ Years',
                waterNeed: 'Low',
                isNative: true,
                survivalRate: '95%',
                project: 'Aravalli Restoration Project',
                bullets: [
                    'Lives for 100-150 years',
                    'Robust root anchor structure',
                    'Requires minimal care once matured',
                ],
            },
            {
                name: 'Mango Tree',
                image: Images.mango_tree,
                matchRate: '84% Match',
                co2: '16 KG',
                lifespan: '80+ Years',
                waterNeed: 'Medium',
                isNative: true,
                survivalRate: '89%',
                project: 'Community Orchards Drive',
                bullets: [
                    'Lives up to 80-100 years',
                    'Continuous fruit yields over decades',
                    'Durable trunk wood construction',
                ],
            },
            {
                name: 'Khejri Tree',
                image: Images.peepal_tree,
                matchRate: '82% Match',
                co2: '18 KG',
                lifespan: '80+ Years',
                waterNeed: 'Very Low',
                isNative: true,
                survivalRate: '92%',
                project: 'Thar Desert Afforestation',
                bullets: [
                    'Very long lifespan in dry dunes',
                    'Survives severe desert droughts',
                    'Traditional heritage icon of longevity',
                ],
            },
        ],
    };

    // Get active recommendations list based on selectedPriority (fallback to co2)
    const currentRecommendations = recommendationsData[selectedPriority] || recommendationsData['co2'];
    const bestMatch = currentRecommendations[0];
    const otherRecs = currentRecommendations.slice(1);

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Header Hero Section */}
                <ImageBackground
                    source={Images.detailbg}
                    style={styles.heroBg}
                    imageStyle={styles.heroBgImg}
                    resizeMode='cover'
                >
                    {/* Header Top Bar */}
                    <View style={styles.heroTopBar}>
                        <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.7}>
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={styles.howItWorksBtn} onPress={handleHowItWorks} activeOpacity={0.7}>
                            <Image source={Images.verified} style={styles.howItWorksIcon} resizeMode="contain" />
                            <Text style={styles.howItWorksText}>How it works?</Text>
                        </TouchableOpacity> */}
                    </View>

                    {/* Hero Content */}
                    <View style={styles.heroContent}>
                        <Text style={styles.heroTitle}>
                            Find the {'\n'}
                            <Text style={styles.heroTitleGreen}>Perfect Tree {'\n'}</Text>
                            For Your Purpose
                        </Text>
                        <Text style={styles.heroSubtitle}>
                            Answer a few questions and we'll recommend the best tree for you.
                        </Text>

                        {/* Steps Stepper */}
                        <View style={styles.stepperContainer}>
                            <View style={[styles.stepCircle, styles.stepCircleActive]}>
                                <Text style={[styles.stepCircleText, styles.stepCircleTextActive]}>1</Text>
                            </View>
                            <View style={styles.stepperLineSplit}>
                                <View style={[styles.stepperLineHalf, styles.stepperLineActive]} />
                                <View style={styles.stepperLineHalf} />
                            </View>
                            <View style={[styles.stepCircle, styles.stepCirclePending]}>
                                <Text style={styles.stepCircleText}>2</Text>
                            </View>
                            <View style={styles.stepperLine} />
                            <View style={[styles.stepCircle, styles.stepCirclePending]}>
                                <Text style={styles.stepCircleText}>3</Text>
                            </View>
                            <View style={styles.stepperLine} />
                            <View style={styles.stepCircle}>
                                <Image source={Images.check} style={styles.stepCheckIcon} resizeMode="contain" />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', borderRadius: 15, marginTop: -25 }}>
                    {/* Section 1: Why are you planting? */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleRow}>
                            <Text style={styles.sectionTitle}>1. Why are you planting? </Text>
                            <Image source={Images.leaf} style={styles.sectionTitleIcon} resizeMode="contain" />
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.optionsScroll}
                            style={{ overflow: 'visible' }}
                        >
                            {purposes.map((purpose) => {
                                const isSelected = selectedPurpose === purpose.id;
                                return (
                                    <TouchableOpacity
                                        key={purpose.id}
                                        style={[styles.optionCard, isSelected && styles.optionCardSelected]}
                                        onPress={() => setSelectedPurpose(purpose.id)}
                                        activeOpacity={0.8}
                                    >
                                        <View style={[styles.optionIconWrapper, isSelected && styles.optionIconWrapperSelected]}>
                                            <Image source={purpose.icon} style={styles.optionIcon} resizeMode="contain" />
                                        </View>
                                        <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                                            {purpose.label}
                                        </Text>
                                        {isSelected && (
                                            <View style={styles.optionCheckBadge}>
                                                <Image source={Images.check} style={styles.optionCheckIconMini} resizeMode="contain" />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>

                    {/* Section 2: What matters most to you? */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleRow}>
                            <Text style={styles.sectionTitle}>2. What matters most to you? </Text>
                            <Image source={Images.leaf} style={styles.sectionTitleIcon} resizeMode="contain" />
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.optionsScroll}
                            style={{ overflow: 'visible' }}
                        >
                            {priorities.map((priority) => {
                                const isSelected = selectedPriority === priority.id;
                                return (
                                    <TouchableOpacity
                                        key={priority.id}
                                        style={[styles.priorityCard, isSelected && styles.priorityCardSelected]}
                                        onPress={() => setSelectedPriority(priority.id)}
                                        activeOpacity={0.8}
                                    >
                                        <Image source={priority.icon} style={styles.priorityIcon} resizeMode="contain" />
                                        <Text style={[styles.priorityLabel, isSelected && styles.priorityLabelSelected]}>
                                            {priority.label}
                                        </Text>
                                        {isSelected && (
                                            <View style={styles.optionCheckBadge}>
                                                <Image source={Images.check} style={styles.optionCheckIconMini} resizeMode="contain" />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>

                    {/* Section 3: Preferred Location */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleRow}>
                            <Text style={styles.sectionTitle}>3. Preferred Location </Text>
                            <Image source={Images.leaf} style={styles.sectionTitleIcon} resizeMode="contain" />
                        </View>

                        <View style={styles.locationRow}>
                            <TouchableOpacity style={styles.locationCard} onPress={handleChangeState} activeOpacity={0.8}>
                                <Image source={Images.location} style={styles.locationPinIcon} resizeMode="contain" />
                                <View style={styles.locationCardTextCol}>
                                    <Text style={styles.locationStateName}>{selectedState}</Text>
                                    <Text style={styles.locationChangeLink}>Change state ∨</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.locationInfoCard}>
                                <Image source={Images.geolocation} style={styles.locationInfoIcon} resizeMode="contain" />
                                <Text style={styles.locationInfoText}>
                                    All recommended trees are native and suitable for your selected location.
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Section 4: Your Top Tree Recommendations */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleRow}>
                            <Text style={styles.sectionTitle}>Your Top Tree Recommendations </Text>
                            <Image source={Images.leaf} style={styles.sectionTitleIcon} resizeMode="contain" />
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.recommendationsScroll}
                        >
                            {/* Best Match Tree (Large Card) */}
                            <View style={styles.bestMatchCard}>
                                <View style={styles.bestMatchTopRow}>
                                    <View style={styles.bestMatchImgContainer}>
                                        <Image source={bestMatch.image} style={styles.bestMatchImg} resizeMode="cover" />
                                        <View style={styles.bestMatchTag}>
                                            <Text style={styles.bestMatchTagText}>BEST MATCH</Text>
                                        </View>
                                    </View>
                                    <View style={styles.bestMatchDetails}>
                                        <View style={styles.bestMatchTitleRow}>
                                            <Text style={styles.bestMatchTitle}>{bestMatch.name}</Text>
                                            <View style={styles.gpsBadge}>
                                                <Image source={Images.verified} style={styles.gpsBadgeIcon} resizeMode="contain" />
                                                <Text style={styles.gpsBadgeText}>GPS VERIFIED</Text>
                                            </View>
                                        </View>
                                        <View style={styles.matchRateBadge}>
                                            <Text style={styles.matchRateText}>{bestMatch.matchRate}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.bestMatchBullets}>
                                    {bestMatch.bullets.map((bullet, idx) => (
                                        <View key={idx} style={styles.bulletItem}>
                                            <Image source={Images.check} style={styles.bulletIcon} resizeMode="contain" />
                                            <Text style={styles.bulletText}>{bullet}</Text>
                                        </View>
                                    ))}
                                </View>

                                <TouchableOpacity
                                    style={styles.bestMatchBtn}
                                    onPress={() => handlePlantTree(bestMatch.name, parseInt(bestMatch.co2), bestMatch.project)}
                                    activeOpacity={0.8}
                                >
                                    <Image source={Images.treeIcon} style={styles.bestMatchBtnIcon} resizeMode="contain" />
                                    <Text style={styles.bestMatchBtnText}>Plant {bestMatch.name} →</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Other recommendations */}
                            {otherRecs.map((tree, index) => (
                                <View key={index} style={styles.smallRecCard}>
                                    <View style={styles.smallRecImgContainer}>
                                        <Image source={tree.image} style={styles.smallRecImg} resizeMode="cover" />
                                        <View style={styles.smallRecMatchBadge}>
                                            <Text style={styles.smallRecMatchText}>{tree.matchRate}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.smallRecTitle}>{tree.name}</Text>

                                    <View style={styles.smallRecBullets}>
                                        {tree.bullets.map((bullet, idx) => (
                                            <View key={idx} style={styles.smallRecBulletItem}>
                                                <Image source={Images.check} style={styles.smallRecBulletIcon} resizeMode="contain" />
                                                <Text style={styles.smallRecBulletText}>{bullet}</Text>
                                            </View>
                                        ))}
                                    </View>

                                    <TouchableOpacity
                                        style={styles.smallRecLink}
                                        onPress={() => handlePlantTree(tree.name, parseInt(tree.co2), tree.project)}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.smallRecLinkText}>Plant Now  →</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Section 5: Impact Comparison */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleRow}>
                            <Text style={styles.sectionTitle}>Impact Comparison </Text>
                            <Image source={Images.leaf} style={styles.sectionTitleIcon} resizeMode="contain" />
                        </View>

                        <View style={styles.tableContainer}>
                            {/* Headers */}
                            <View style={styles.tableHeaderRow}>
                                <Text style={[styles.tableHeaderCell, { flex: 1.5, textAlign: 'left', paddingLeft: 8 }]}>Tree</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.6 }]}>CO₂ Absorption{'\n'}(Per Year)</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>Lifespan</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>Water Need</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.3 }]}>Native to{'\n'}{selectedState}</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>Survival{'\n'}Rate</Text>
                            </View>

                            {/* Rows */}
                            {currentRecommendations.map((tree, index) => (
                                <View key={index} style={styles.tableDataRow}>
                                    <View style={[styles.treeCellContent, { flex: 1.5 }]}>
                                        <Image source={tree.image} style={styles.treeCellIcon} resizeMode="contain" />
                                        <Text style={styles.treeCellText} numberOfLines={1}>{tree.name.replace(' Tree', '')}</Text>
                                    </View>

                                    <Text style={[styles.tableCell, { flex: 1.6, fontFamily: fonts.OpenSans_Bold }]}>{tree.co2}</Text>
                                    <Text style={[styles.tableCell, { flex: 1.2 }]}>{tree.lifespan}</Text>

                                    <View style={[styles.tableCell, { flex: 1.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                        <Text style={{ fontSize: 9, marginRight: 2 }}>💧</Text>
                                        <Text style={{ fontSize: 8, fontFamily: fonts.OpenSans_Medium, color: Colors.textDark }}>
                                            {tree.waterNeed}
                                        </Text>
                                    </View>

                                    <View style={[styles.tableCell, { flex: 1.3, justifyContent: 'center' }]}>
                                        <Image source={Images.check} style={styles.checkCircleIcon} resizeMode="contain" />
                                    </View>

                                    <Text style={[styles.tableCell, { flex: 1.2 }]}>{tree.survivalRate}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Section 6: Bottom Banner */}
                    <View style={styles.bottomBanner}>
                        <View style={styles.bottomBannerTop}>
                            <Image source={Images.leaf} style={styles.bottomBannerLeaf} resizeMode="contain" />
                            <Text style={styles.bottomBannerText}>
                                Every tree you plant is GPS tagged, monitored for 3 years & contributes to a greener tomorrow.
                            </Text>
                        </View>

                        <View style={styles.bottomBannerDivider} />

                        <View style={styles.bottomBannerBadgesRow}>
                            <View style={styles.bottomBannerBadge}>
                                <Image source={Images.location} style={styles.bottomBannerBadgeIcon} resizeMode="contain" />
                                <Text style={styles.bottomBannerBadgeLabel}>GPS Tagged{'\n'}& Verified</Text>
                            </View>

                            <View style={styles.bottomBannerBadgeDivider} />

                            <View style={styles.bottomBannerBadge}>
                                <Image source={Images.calendar} style={styles.bottomBannerBadgeIcon} resizeMode="contain" />
                                <Text style={styles.bottomBannerBadgeLabel}>3 Years{'\n'}Monitoring</Text>
                            </View>

                            <View style={styles.bottomBannerBadgeDivider} />

                            <View style={styles.bottomBannerBadge}>
                                <Image source={Images.impact} style={styles.bottomBannerBadgeIcon} resizeMode="contain" />
                                <Text style={styles.bottomBannerBadgeLabel}>Real Impact{'\n'}You Can Track</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>

            {/* Sticky Bottom Actions */}
            <View style={styles.stickyFooter}>
                <TouchableOpacity
                    style={styles.primaryStickyBtn}
                    onPress={() => handlePlantTree(bestMatch.name, parseInt(bestMatch.co2), bestMatch.project)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryStickyBtnText}>Plant Recommended Tree</Text>
                    <Text style={styles.primaryStickyBtnArrow}>→</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default WhichtreeShouldIPlantScreen;
