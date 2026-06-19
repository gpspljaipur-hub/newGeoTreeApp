import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Alert,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { handleNavigation, RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import { styles } from './styles';

const PlantationJourneyScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    // Interactive States
    const [selectedState, setSelectedState] = useState('rajasthan');

    // List Arrays
    const statesList = [
        { id: 'rajasthan', name: 'Rajasthan', image: Images.rajasthan },
        { id: 'uttarakhand', name: 'Uttarakhand', image: Images.uttarakhand },
        { id: 'karnataka', name: 'Karnataka', image: Images.karnataka },
        { id: 'maharashtra', name: 'Maharashtra', image: Images.maharashtra },
        { id: 'tamil_nadu', name: 'Tamil Nadu', image: Images.tamil_nadu },
    ];

    const projectsList = [
        {
            id: 'aravalli',
            title: 'Aravalli Restoration',
            location: 'Jaipur, Rajasthan',
            treesPlanted: '12,500+ Trees Planted',
            image: Images.project_aravalli,
            badge: 'FEATURED',
        },
        {
            id: 'urban_jaipur',
            title: 'Urban Forest Jaipur',
            location: 'Jaipur, Rajasthan',
            treesPlanted: '8,200+ Trees Planted',
            image: Images.project_jaipur,
            badge: 'TRENDING',
        },
        {
            id: 'green_belt',
            title: 'Rajasthan Green Belt',
            location: 'Alwar, Rajasthan',
            treesPlanted: '6,300+ Trees Planted',
            image: Images.aravali_belt,
            badge: 'NEW',
        },
    ];

    const categoriesList = [
        {
            id: 'native',
            title: 'Native Trees',
            desc: 'Best for local\nenvironment',
            species: '20+ Species',
            image: Images.peepal_tree,
        },
        {
            id: 'fruit',
            title: 'Fruit Trees',
            desc: 'Nourish nature\n& communities',
            species: '15+ Species',
            image: Images.mango_tree,
        },
        {
            id: 'medicinal',
            title: 'Medicinal Trees',
            desc: 'Support health\n& well-being',
            species: '10+ Species',
            image: Images.neem_tree,
        },
        {
            id: 'flowering',
            title: 'Flowering Trees',
            desc: 'Beautify nature\n& surroundings',
            species: '12+ Species',
            image: Images.gulmohar_tree,
        },
    ];

    const trustBadgesList = [
        {
            title: 'GPS Verified',
            desc: 'Every tree is\nGPS tagged',
            icon: Images.location,
        },
        {
            title: 'High Survival',
            desc: 'Carefully planted\n& monitored',
            icon: Images.shield,
        },
        {
            title: 'Transparent',
            desc: 'Real time updates\n& tracking',
            icon: Images.verified,
        },
        {
            title: 'Trusted 50K+',
            desc: 'Join thousands of\ngreen partners',
            icon: Images.community,
        },
    ];

    const handleBack = () => {
        navigation.goBack();
    };

    const handleNotifications = () => {
        Alert.alert('Notifications', 'No new notifications.');
    };

    const handleSettings = () => {
        Alert.alert('Settings', 'Settings screen opened.');
    };

    const handleViewAllStates = () => {
        navigation.navigate('ExploreStates');
    };

    const handleViewAllProjects = () => {
        Alert.alert('Projects', 'Redirecting to all verified projects...');
    };

    const handleCategoryGuide = () => {
        Alert.alert('Category Guide', 'Showing recommendation engine guide...');
    };

    const handleSelectProject = (projectId: string, title: string) => {
        // Navigate to ChoiceTreePlantationScreen passing state/project info
        const stateObj = statesList.find(s => s.id === selectedState);
        navigation.navigate('Choicetreeplantation', {
            stateName: stateObj?.name ?? 'Rajasthan',
            selectedProjId: projectId,
        });
    };

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            {/* <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" /> */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Hero ImageBackground header covering title and sapling graphics */}
                <ImageBackground source={Images.detailbg} style={styles.headerBg} imageStyle={styles.headerBgImg} resizeMode="cover">

                    {/* Header Top Row */}
                    <View style={styles.headerRow}>
                        <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.7}>
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>

                        <View style={styles.headerActions}>
                            <TouchableOpacity style={styles.actionButtonCircle} onPress={handleNotifications} activeOpacity={0.7}>
                                <Image source={Images.bell} style={styles.actionIcon} resizeMode="contain" />
                                <View style={styles.notificationDot} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.actionButtonCircle} onPress={handleSettings} activeOpacity={0.7}>
                                <Image source={Images.setting} style={styles.actionIcon} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Hero Content Section */}
                    <View style={styles.heroContentRow}>
                        <View style={styles.heroLeftCol}>
                            <Text style={styles.heroTitle}>
                                Start Your{'\n'}
                                <Text style={styles.heroTitleGreen}>Plantation Journey</Text>
                            </Text>
                            <Text style={styles.heroSubtitle}>
                                Plant a tree today and create a greener tomorrow.
                            </Text>

                            <View style={styles.heroBadge}>
                                <Text style={styles.heroBadgeText}>✓ 100% Verified • GPS Tracked • Impactful</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Choose a State */}
                <View style={styles.sectionHeaderRow}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Choose a State</Text>
                        <Image source={Images.geolocation} style={[styles.sectionTitleLeaf, { tintColor: Colors.TextColorGreenDark }]} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.viewAllRow} onPress={handleViewAllStates} activeOpacity={0.7}>
                        <Text style={styles.viewAllText}>View All States</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statesScroll}>
                    {statesList.map(item => {
                        const isActive = selectedState === item.id;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[styles.stateCard, isActive && styles.stateCardActive]}
                                onPress={() => setSelectedState(item.id)}
                                activeOpacity={0.8}
                            >
                                <Image source={item.image} style={styles.stateImg} resizeMode="cover" />
                                <Text style={[styles.stateName, isActive && styles.stateNameActive]}>
                                    {item.name}
                                </Text>
                                {isActive && (
                                    <View style={styles.stateCheckBadge}>
                                        <Image source={Images.check} style={styles.stateCheckIcon} resizeMode="contain" />
                                    </View>
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

                {/* Explore Verified Projects */}
                <View style={styles.sectionHeaderRow}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Explore Verified Projects</Text>
                        <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.viewAllRow} onPress={handleViewAllProjects} activeOpacity={0.7}>
                        <Text style={styles.viewAllText}>View All Projects</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.projectsScroll}>
                    {projectsList.map(project => (
                        <TouchableOpacity
                            key={project.id}
                            style={styles.projectCard}
                            onPress={() => handleSelectProject(project.id, project.title)}
                            activeOpacity={0.9}
                        >
                            <View style={styles.projectImgContainer}>
                                <Image source={project.image} style={styles.projectImg} resizeMode="cover" />
                                <View style={styles.projectBadge}>
                                    <Text style={styles.projectBadgeText}>{project.badge}</Text>
                                </View>
                            </View>

                            <View style={styles.projectInfo}>
                                <Text style={styles.projectTitle} numberOfLines={1}>{project.title}</Text>
                                <View style={styles.projectRow}>
                                    <Image source={Images.location} style={styles.projectIcon} resizeMode="contain" />
                                    <Text style={styles.projectText} numberOfLines={1}>{project.location}</Text>
                                </View>
                                <View style={styles.projectRow}>
                                    <Image source={Images.treeIcon} style={[styles.projectIcon, styles.projectIconGreen]} resizeMode="contain" />
                                    <Text style={[styles.projectText, styles.projectTextGreen]} numberOfLines={1}>{project.treesPlanted}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Pagination Dots */}
                <View style={styles.paginationContainer}>
                    <View style={styles.paginationDotActive} />
                    <View style={styles.paginationDot} />
                    <View style={styles.paginationDot} />
                </View>

                {/* Choose a Tree Category */}
                <View style={styles.sectionHeaderRow}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Choose a Tree Category</Text>
                        <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.viewAllRow} onPress={handleCategoryGuide} activeOpacity={0.7}>
                        <Text style={styles.viewAllText}>Which tree should I plant?</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
                    {categoriesList.map(cat => (
                        <TouchableOpacity
                            key={cat.id}
                            style={styles.categoryCard}
                            onPress={() => {
                                handleNavigation({ type: 'push', navigation, page: 'WhichtreeShouldIPlant' })
                                // Alert.alert('Category Info', `${cat.title} selected!`);
                            }}
                            activeOpacity={0.8}
                        >
                            <View style={styles.categoryIconBg}>
                                <Image source={cat.image} style={styles.categoryIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.categoryTitle}>{cat.title}</Text>
                            <Text style={styles.categoryDesc}>{cat.desc}</Text>
                            <Text style={styles.categoryFooter}>{cat.species}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Trust Badges Bar */}
                <View style={styles.trustRow}>
                    {trustBadgesList.map((badge, idx) => (
                        <View key={idx} style={styles.trustCol}>
                            <View style={styles.trustIconBg}>
                                <Image source={badge.icon} style={styles.trustIcon} resizeMode="contain" />
                            </View>
                            <Text style={styles.trustTitle}>{badge.title}</Text>
                            <Text style={styles.trustDesc}>{badge.desc}</Text>
                        </View>
                    ))}
                </View>

                {/* Bottom Navigation Tab Bar Simulation */}

            </ScrollView>
        </SafeAreaView>
    );
};

export default PlantationJourneyScreen;
