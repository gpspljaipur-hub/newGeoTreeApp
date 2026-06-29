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
import { RootStackParamList } from '../../../navigation/RootNavigator';
import Images from '../../../constants/images';
import { Colors } from '../../../comman/Colors';
import fonts from '../../../comman/fonts';
import { styles } from './styles';
import String from '../../../comman/String';

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

    const isHi = String.ChooseTree_CategoryNative === 'स्वदेशी';

    const getLocalizedTreeName = (name: string) => {
        if (name.includes('Neem')) return `${String.ChooseTree_NeemName} ${String.Dashboard_TreeLabel}`;
        if (name.includes('Peepal')) return `${String.ChooseTree_PeepalName} ${String.Dashboard_TreeLabel}`;
        if (name.includes('Mango')) return `${String.ChooseTree_MangoName} ${String.Dashboard_TreeLabel}`;
        if (name.includes('Gulmohar')) return `${String.ChooseTree_GulmoharName} ${String.Dashboard_TreeLabel}`;
        if (name.includes('Khejri')) return `${String.ChooseSpecies_KhejriName} ${String.Dashboard_TreeLabel}`;
        if (name.includes('Rohida')) return `${String.ChooseSpecies_RohidaName} ${String.Dashboard_TreeLabel}`;
        if (name.includes('Amla')) return `${String.ChooseSpecies_AmlaName} ${String.Dashboard_TreeLabel}`;
        if (name.includes('Babul')) return `${String.ChooseSpecies_BabulName} ${String.Dashboard_TreeLabel}`;
        return name;
    };

    const getLocalizedMatchRate = (rate: string) => {
        return rate.replace('Match', isHi ? 'मिलान' : 'Match');
    };

    const getLocalizedCo2 = (co2: string) => {
        return co2.replace('KG', isHi ? 'किग्रा' : 'KG');
    };

    const getLocalizedLifespan = (lifespan: string) => {
        return lifespan.replace('Years', isHi ? 'वर्ष' : 'Years');
    };

    const getLocalizedWaterNeed = (need: string) => {
        if (need === 'Low') return isHi ? 'कम' : 'Low';
        if (need === 'Very Low') return isHi ? 'बहुत कम' : 'Very Low';
        if (need === 'Medium') return isHi ? 'मध्यम' : 'Medium';
        return need;
    };

    const getLocalizedProject = (project: string) => {
        if (project.includes('Aravalli Restoration')) return isHi ? 'अरावली पुनरुद्धार परियोजना' : project;
        if (project.includes('Thar Desert Afforestation')) return isHi ? 'थार मरुस्थल वनीकरण' : project;
        if (project.includes('Marwar Restoration')) return isHi ? 'मारवाड़ पुनरुद्धार पहल' : project;
        if (project.includes('Community Orchards')) return isHi ? 'सामुदायिक उद्यान अभियान' : project;
        if (project.includes('Urban Canopy')) return isHi ? 'शहरी छत्र जयपुर' : project;
        if (project.includes('Sariska Eco Buffer')) return isHi ? 'सरिस्का इको बफर जोन' : project;
        return project;
    };

    const getLocalizedBullet = (bullet: string) => {
        if (bullet.includes('High carbon absorption')) return isHi ? 'उच्च कार्बन अवशोषण (22 किग्रा/वर्ष)' : bullet;
        if (bullet.includes('Native to Rajasthan')) return isHi ? 'राजस्थान का मूल निवासी' : bullet;
        if (bullet.includes('Drought resistant')) return isHi ? 'सूखा प्रतिरोधी' : bullet;
        if (bullet.includes('Supports local biodiversity')) return isHi ? 'स्थानीय जैव विविधता का समर्थन करता है' : bullet;
        if (bullet.includes('Very low water requirement')) return isHi ? 'बहुत कम पानी की आवश्यकता' : bullet;
        if (bullet.includes('Great for arid regions')) return isHi ? 'शुष्क क्षेत्रों के लिए बढ़िया' : bullet;
        if (bullet.includes('Supports soil health')) return isHi ? 'मिट्टी के स्वास्थ्य का समर्थन करता है' : bullet;
        if (bullet.includes('Native species')) return isHi ? 'स्वदेशी प्रजाति' : bullet;
        if (bullet.includes('Supports wildlife')) return isHi ? 'वन्यजीवों का समर्थन करता है' : bullet;
        if (bullet.includes('Beautiful flowering tree')) return isHi ? 'सुंदर फूलों वाला पेड़' : bullet;
        if (bullet.includes('Medicinal value')) return isHi ? 'औषधीय महत्व' : bullet;
        if (bullet.includes('High survival rate')) return isHi ? 'उच्च उत्तरजीविता दर' : bullet;
        if (bullet.includes('Fruits for communities')) return isHi ? 'समुदायों के लिए फल' : bullet;
        if (bullet.includes('Rapid growth rate')) return isHi ? 'तेज़ विकास दर (तेज़ छत्र)' : bullet;
        if (bullet.includes('Provides excellent shade')) return isHi ? 'उत्कृष्ट छाया प्रदान करता है' : bullet;
        if (bullet.includes('Vibrant orange-red blooms')) return isHi ? 'जीवंत नारंगी-लाल फूल' : bullet;
        if (bullet.includes('Improves micro-climate')) return isHi ? 'सूक्ष्म जलवायु में सुधार करता है' : bullet;
        if (bullet.includes('Steady growth')) return isHi ? 'सतत विकास और वायु छनाई' : bullet;
        if (bullet.includes('Supports local soil ecosystem')) return isHi ? 'स्थानीय मिट्टी पारिस्थितिकी तंत्र का समर्थन करता है' : bullet;
        if (bullet.includes('Broad canopy growth')) return isHi ? 'चौड़ी छत्रछाया का विकास' : bullet;
        if (bullet.includes('High oxygen release')) return isHi ? 'उच्च ऑक्सीजन उत्सर्जन' : bullet;
        if (bullet.includes('Sacred heritage species')) return isHi ? 'पवित्र विरासत प्रजाति' : bullet;
        if (bullet.includes('Fast seasonal growth')) return isHi ? 'तेज़ मौसमी विकास' : bullet;
        if (bullet.includes('Fruit-bearing benefits')) return isHi ? 'फल देने वाले लाभ' : bullet;
        if (bullet.includes('High community utility')) return isHi ? 'उच्च सामुदायिक उपयोगिता' : bullet;
        if (bullet.includes('Indispensable native keystone')) return isHi ? 'अपरिहार्य स्वदेशी प्रजाति' : bullet;
        if (bullet.includes('High spiritual & ecological value')) return isHi ? 'उच्च आध्यात्मिक और पारिस्थितिक मूल्य' : bullet;
        if (bullet.includes('Extreme longevity')) return isHi ? 'अत्यधिक दीर्घायु (150+ वर्ष)' : bullet;
        if (bullet.includes('24/7 oxygen production')) return isHi ? '24/7 ऑक्सीजन उत्पादन' : bullet;
        if (bullet.includes('Native medicine powerhouse')) return isHi ? 'स्वदेशी दवा का पावरहाउस' : bullet;
        if (bullet.includes('Pest repellent qualities')) return isHi ? 'कीट प्रतिरोधी गुण' : bullet;
        if (bullet.includes('Drought-hardy root systems')) return isHi ? 'सूखा-सहिष्णु जड़ प्रणाली' : bullet;
        if (bullet.includes('State tree of Rajasthan')) return isHi ? 'राजस्थान का राज्य वृक्ष' : bullet;
        if (bullet.includes('Nitrogen-fixing capabilities')) return isHi ? 'नाइट्रोजन-फिक्सिंग क्षमताएं' : bullet;
        if (bullet.includes('Survival in arid zones')) return isHi ? 'शुष्क क्षेत्रों में उत्तरजीविता' : bullet;
        if (bullet.includes('Native desert teak')) return isHi ? 'स्वदेशी मरुस्थलीय सागौन' : bullet;
        if (bullet.includes('High timber & flower value')) return isHi ? 'उच्च इमारती लकड़ी और फूलों का मूल्य' : bullet;
        if (bullet.includes('Adapts to desert dry spells')) return isHi ? 'मरुस्थलीय सूखे के अनुकूल' : bullet;
        if (bullet.includes('Incredible antibacterial')) return isHi ? 'अद्भुत जीवाणुरोधी/एंटीसेप्टिक गुण' : bullet;
        if (bullet.includes('Purifies air')) return isHi ? 'हवा को शुद्ध करता है और प्राकृतिक रूप से कीड़ों को भगाता है' : bullet;
        if (bullet.includes('Extensively used in Ayurveda')) return isHi ? 'आयुर्वेद में बड़े पैमाने पर उपयोग किया जाता है' : bullet;
        if (bullet.includes('High survival rate on rocky slopes')) return isHi ? 'पथरीले ढलानों पर उच्च उत्तरजीविता दर' : bullet;
        if (bullet.includes('Rich source of Vitamin C')) return isHi ? 'विटामिन सी का समृद्ध स्रोत' : bullet;
        if (bullet.includes('Ayurvedic health tonic source')) return isHi ? 'आयुर्वेदिक स्वास्थ्य टॉनिक स्रोत' : bullet;
        if (bullet.includes('Fruit benefits local gatherers')) return isHi ? 'फल स्थानीय संग्राहकों को लाभान्वित करते हैं' : bullet;
        if (bullet.includes('Aids in breathing ailments')) return isHi ? 'सांस की बीमारियों में मदद करता है' : bullet;
        if (bullet.includes('Bark used in herbal remedies')) return isHi ? 'छाल का उपयोग हर्बल उपचार में किया जाता है' : bullet;
        if (bullet.includes('Supports positive mental')) return isHi ? 'सकारात्मक मानसिक कल्याण का समर्थन करता है' : bullet;
        if (bullet.includes('Traditional skin-soothing extract')) return isHi ? 'पारंपरिक त्वचा-सुखदायक अर्क' : bullet;
        if (bullet.includes('High cultural heritage usage')) return isHi ? 'उच्च सांस्कृतिक विरासत उपयोग' : bullet;
        if (bullet.includes('Durable timber production')) return isHi ? 'टिकाऊ इमारती लकड़ी उत्पादन' : bullet;
        if (bullet.includes('Shelters over 100+ bird species')) return isHi ? '100+ से अधिक पक्षी प्रजातियों को आश्रय देता है' : bullet;
        if (bullet.includes('Attracts essential insect pollinators')) return isHi ? 'आवश्यक कीट परागणकों को आकर्षित करता है' : bullet;
        if (bullet.includes('Feeds monkeys, bats')) return isHi ? 'बंदरों, चमगादड़ों और शाकाहारी जीवों को खिलाता है' : bullet;
        if (bullet.includes('Creates deep canopy nesting sites')) return isHi ? 'गहरे चंदवा घोंसले के शिकार स्थल बनाता है' : bullet;
        if (bullet.includes('Provides food for local fauna')) return isHi ? 'स्थानीय जीवों के लिए भोजन प्रदान करता है' : bullet;
        if (bullet.includes('Nesting area for weaver birds')) return isHi ? 'बुनकर पक्षियों के लिए घोंसले का शिकार क्षेत्र' : bullet;
        if (bullet.includes('Rich organic soil contribution')) return isHi ? 'समृद्ध जैविक मिट्टी का योगदान' : bullet;
        if (bullet.includes('Flowers attract birds')) return isHi ? 'फूल पक्षियों और रेगिस्तानी मधुमक्खियों को आकर्षित करते हैं' : bullet;
        if (bullet.includes('Provides shelter in desert regions')) return isHi ? 'रेगिस्तानी इलाकों में आश्रय प्रदान करता है' : bullet;
        if (bullet.includes('Secures sand dunes')) return isHi ? 'वन्यजीवों के रास्तों के लिए रेत के टीलों को सुरक्षित करता है' : bullet;
        if (bullet.includes('Broad evergreen nesting cover')) return isHi ? 'विस्तृत सदाबहार घोंसले का आवरण' : bullet;
        if (bullet.includes('Feeds small birds with neem berries')) return isHi ? 'नीम की बेरियों से छोटे पक्षियों को खिलाता है' : bullet;
        if (bullet.includes('Reduces ambient temperature')) return isHi ? 'जीवों के लिए परिवेश का तापमान कम करता है' : bullet;
        if (bullet.includes('Extremely long lifespan')) return isHi ? 'अत्यधिक लंबा जीवनकाल (150+ वर्ष)' : bullet;
        if (bullet.includes('High cultural heritage reverence')) return isHi ? 'उच्च सांस्कृतिक विरासत श्रद्धा' : bullet;
        if (bullet.includes('Massive carbon capture')) return isHi ? 'सदियों से विशाल कार्बन कैप्चर स्टोर' : bullet;
        if (bullet.includes('Extremely resilient to harsh weather')) return isHi ? 'कठोर मौसम के प्रति अत्यधिक लचीला' : bullet;
        if (bullet.includes('Lives for 100-150 years')) return isHi ? '100-150 वर्षों तक जीवित रहता है' : bullet;
        if (bullet.includes('Robust root anchor structure')) return isHi ? 'मजबूत जड़ संरचना' : bullet;
        if (bullet.includes('Requires minimal care once matured')) return isHi ? 'एक बार परिपक्व होने पर न्यूनतम देखभाल की आवश्यकता होती है' : bullet;
        if (bullet.includes('Lives up to 80-100 years')) return isHi ? '80-100 वर्षों तक जीवित रहता है' : bullet;
        if (bullet.includes('Continuous fruit yields over decades')) return isHi ? 'दशकों से निरंतर फल की पैदावार' : bullet;
        if (bullet.includes('Durable trunk wood construction')) return isHi ? 'टिकाऊ तने की लकड़ी का निर्माण' : bullet;
        if (bullet.includes('Very long lifespan in dry dunes')) return isHi ? 'रेतीले टीलों में बहुत लंबा जीवनकाल' : bullet;
        if (bullet.includes('Survives severe desert droughts')) return isHi ? 'गंभीर मरुस्थलीय सूखे में जीवित रहता है' : bullet;
        if (bullet.includes('Traditional heritage icon of longevity')) return isHi ? 'दीर्घायु का पारंपरिक विरासत प्रतीक' : bullet;
        return bullet;
    };

    const handleHowItWorks = () => {
        Alert.alert(
            String.WhichTree_HowItWorks,
            String.WhichTree_HowItWorksDesc,
            [{ text: String.WhichTree_GotIt }]
        );
    };

    const handlePlantTree = (treeName: string, co2Val: number, project: string) => {
        navigation.navigate('Choicetreeplantation');
    };

    const handleChangeState = () => {
        Alert.alert(
            String.WhichTree_SelectLocation,
            String.WhichTree_ChooseState,
            [
                { text: 'Rajasthan', onPress: () => setSelectedState('Rajasthan') },
                { text: 'Uttarakhand', onPress: () => setSelectedState('Uttarakhand') },
                { text: 'Karnataka', onPress: () => setSelectedState('Karnataka') },
                { text: String.WhichTree_Cancel, style: 'cancel' },
            ]
        );
    };

    // Static options lists matching the mockup
    const purposes = [
        { id: 'carbon', label: String.WhichTree_PurposeCarbon, icon: Images.co2Cloud },
        { id: 'gift', label: String.WhichTree_PurposeGift, icon: Images.gift },
        { id: 'memory', label: String.WhichTree_PurposeMemory, icon: Images.heart },
        { id: 'env', label: String.WhichTree_PurposeEnv, icon: Images.nature },
        { id: 'csr', label: String.WhichTree_PurposeCsr, icon: Images.projectIcon },
        { id: 'personal', label: String.WhichTree_PurposePersonal, icon: Images.profile },
    ];

    const priorities = [
        { id: 'co2', label: String.WhichTree_PriorityCo2, icon: Images.co2Cloud },
        { id: 'growth', label: String.WhichTree_PriorityGrowth, icon: Images.plant },
        { id: 'native', label: String.WhichTree_PriorityNative, icon: Images.leaf },
        { id: 'medicinal', label: String.WhichTree_PriorityMedicinal, icon: Images.verified },
        { id: 'wildlife', label: String.WhichTree_PriorityWildlife, icon: Images.bird },
        { id: 'lifespan', label: String.WhichTree_PriorityLifespan, icon: Images.treeIcon },
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
                            {isHi ? String.WhichTree_FindPerfect : (
                                <>
                                    Find the {'\n'}
                                    <Text style={styles.heroTitleGreen}>Perfect Tree {'\n'}</Text>
                                    For Your Purpose
                                </>
                            )}
                        </Text>
                        <Text style={styles.heroSubtitle}>
                            {String.WhichTree_AnswerFew}
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
                            <Text style={styles.sectionTitle}>{String.WhichTree_WhyPlanting}</Text>
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
                            <Text style={styles.sectionTitle}>{String.WhichTree_WhatMatters}</Text>
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
                            <Text style={styles.sectionTitle}>{String.WhichTree_PreferredLocation}</Text>
                            <Image source={Images.leaf} style={styles.sectionTitleIcon} resizeMode="contain" />
                        </View>

                        <View style={styles.locationRow}>
                            <TouchableOpacity style={styles.locationCard} onPress={handleChangeState} activeOpacity={0.8}>
                                <Image source={Images.location} style={styles.locationPinIcon} resizeMode="contain" />
                                <View style={styles.locationCardTextCol}>
                                    <Text style={styles.locationStateName}>{selectedState}</Text>
                                    <Text style={styles.locationChangeLink}>{String.WhichTree_ChangeState}</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.locationInfoCard}>
                                <Image source={Images.geolocation} style={styles.locationInfoIcon} resizeMode="contain" />
                                <Text style={styles.locationInfoText}>
                                    {String.WhichTree_LocationInfo}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Section 4: Your Top Tree Recommendations */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleRow}>
                            <Text style={styles.sectionTitle}>{String.WhichTree_TopRecommendations}</Text>
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
                                            <Text style={styles.bestMatchTagText}>{String.WhichTree_BestMatch}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.bestMatchDetails}>
                                        <View style={styles.bestMatchTitleRow}>
                                            <Text style={styles.bestMatchTitle}>{getLocalizedTreeName(bestMatch.name)}</Text>
                                            <View style={styles.gpsBadge}>
                                                <Image source={Images.verified} style={styles.gpsBadgeIcon} resizeMode="contain" />
                                                <Text style={styles.gpsBadgeText}>{String.WhichTree_GpsVerified}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.matchRateBadge}>
                                            <Text style={styles.matchRateText}>{getLocalizedMatchRate(bestMatch.matchRate)}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.bestMatchBullets}>
                                    {bestMatch.bullets.map((bullet, idx) => (
                                        <View key={idx} style={styles.bulletItem}>
                                            <Image source={Images.check} style={styles.bulletIcon} resizeMode="contain" />
                                            <Text style={styles.bulletText}>{getLocalizedBullet(bullet)}</Text>
                                        </View>
                                    ))}
                                </View>

                                <TouchableOpacity
                                    style={styles.bestMatchBtn}
                                    onPress={() => handlePlantTree(bestMatch.name, parseInt(bestMatch.co2), bestMatch.project)}
                                    activeOpacity={0.8}
                                >
                                    <Image source={Images.treeIcon} style={styles.bestMatchBtnIcon} resizeMode="contain" />
                                    <Text style={styles.bestMatchBtnText}>{String.WhichTree_PlantTree.replace('{{name}}', getLocalizedTreeName(bestMatch.name))}</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Other recommendations */}
                            {otherRecs.map((tree, index) => (
                                <View key={index} style={styles.smallRecCard}>
                                    <View style={styles.smallRecImgContainer}>
                                        <Image source={tree.image} style={styles.smallRecImg} resizeMode="cover" />
                                        <View style={styles.smallRecMatchBadge}>
                                            <Text style={styles.smallRecMatchText}>{getLocalizedMatchRate(tree.matchRate)}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.smallRecTitle}>{getLocalizedTreeName(tree.name)}</Text>

                                    <View style={styles.smallRecBullets}>
                                        {tree.bullets.map((bullet, idx) => (
                                            <View key={idx} style={styles.smallRecBulletItem}>
                                                <Image source={Images.check} style={styles.smallRecBulletIcon} resizeMode="contain" />
                                                <Text style={styles.smallRecBulletText}>{getLocalizedBullet(bullet)}</Text>
                                            </View>
                                        ))}
                                    </View>

                                    <TouchableOpacity
                                        style={styles.smallRecLink}
                                        onPress={() => handlePlantTree(tree.name, parseInt(tree.co2), tree.project)}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.smallRecLinkText}>{String.WhichTree_PlantNow}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Section 5: Impact Comparison */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleRow}>
                            <Text style={styles.sectionTitle}>{String.WhichTree_ImpactComparison}</Text>
                            <Image source={Images.leaf} style={styles.sectionTitleIcon} resizeMode="contain" />
                        </View>

                        <View style={styles.tableContainer}>
                            {/* Headers */}
                            <View style={styles.tableHeaderRow}>
                                <Text style={[styles.tableHeaderCell, { flex: 1.5, textAlign: 'left', paddingLeft: 8 }]}>{String.WhichTree_TableTree}</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.6 }]}>{String.WhichTree_TableCo2}</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>{String.WhichTree_TableLifespan}</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>{String.WhichTree_TableWater}</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.3 }]}>{String.WhichTree_TableNative.replace('{{state}}', selectedState)}</Text>
                                <Text style={[styles.tableHeaderCell, { flex: 1.2 }]}>{String.WhichTree_TableSurvival}</Text>
                            </View>

                            {/* Rows */}
                            {currentRecommendations.map((tree, index) => (
                                <View key={index} style={styles.tableDataRow}>
                                    <View style={[styles.treeCellContent, { flex: 1.5 }]}>
                                        <Image source={tree.image} style={styles.treeCellIcon} resizeMode="contain" />
                                        <Text style={styles.treeCellText} numberOfLines={1}>{getLocalizedTreeName(tree.name).replace(isHi ? ' पेड़' : ' Tree', '')}</Text>
                                    </View>

                                    <Text style={[styles.tableCell, { flex: 1.6, fontFamily: fonts.OpenSans_Bold }]}>{getLocalizedCo2(tree.co2)}</Text>
                                    <Text style={[styles.tableCell, { flex: 1.2 }]}>{getLocalizedLifespan(tree.lifespan)}</Text>

                                    <View style={[styles.tableCell, { flex: 1.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                        <Text style={{ fontSize: 9, marginRight: 2 }}>💧</Text>
                                        <Text style={{ fontSize: 8, fontFamily: fonts.OpenSans_Medium, color: Colors.textDark }}>
                                            {getLocalizedWaterNeed(tree.waterNeed)}
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
                                {String.WhichTree_BottomBanner}
                            </Text>
                        </View>

                        <View style={styles.bottomBannerDivider} />

                        <View style={styles.bottomBannerBadgesRow}>
                            <View style={styles.bottomBannerBadge}>
                                <Image source={Images.location} style={styles.bottomBannerBadgeIcon} resizeMode="contain" />
                                <Text style={styles.bottomBannerBadgeLabel}>{isHi ? 'जीपीएस टैग्ड\nऔर सत्यापित' : 'GPS Tagged\n& Verified'}</Text>
                            </View>

                            <View style={styles.bottomBannerBadgeDivider} />

                            <View style={styles.bottomBannerBadge}>
                                <Image source={Images.calendar} style={styles.bottomBannerBadgeIcon} resizeMode="contain" />
                                <Text style={styles.bottomBannerBadgeLabel}>{isHi ? '3 वर्ष\nनिगरानी' : '3 Years\nMonitoring'}</Text>
                            </View>

                            <View style={styles.bottomBannerBadgeDivider} />

                            <View style={styles.bottomBannerBadge}>
                                <Image source={Images.impact} style={styles.bottomBannerBadgeIcon} resizeMode="contain" />
                                <Text style={styles.bottomBannerBadgeLabel}>{isHi ? 'वास्तविक प्रभाव\nआप ट्रैक कर सकते हैं' : 'Real Impact\nYou Can Track'}</Text>
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
                    <Text style={styles.primaryStickyBtnText}>{isHi ? 'अनुशंसित पेड़ लगाएं' : 'Plant Recommended Tree'}</Text>
                    <Text style={styles.primaryStickyBtnArrow}>→</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default WhichtreeShouldIPlantScreen;
