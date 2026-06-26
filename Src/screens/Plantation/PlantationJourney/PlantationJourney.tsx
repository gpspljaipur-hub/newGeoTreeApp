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
import { handleNavigation, RootStackParamList } from '../../../navigation/RootNavigator';
import Images from '../../../constants/images';
import String from '../../../comman/String';
import { Colors } from '../../../comman/Colors';
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
            treesPlanted: String.PlantationJourney_TreesPlantedCount.replace('{{count}}', '12,500'),
            image: Images.project_aravalli,
            badge: String.PlantationJourney_BadgeFeatured,
        },
        {
            id: 'urban_jaipur',
            title: 'Urban Forest Jaipur',
            location: 'Jaipur, Rajasthan',
            treesPlanted: String.PlantationJourney_TreesPlantedCount.replace('{{count}}', '8,200'),
            image: Images.project_jaipur,
            badge: String.PlantationJourney_BadgeTrending,
        },
        {
            id: 'green_belt',
            title: 'Rajasthan Green Belt',
            location: 'Alwar, Rajasthan',
            treesPlanted: String.PlantationJourney_TreesPlantedCount.replace('{{count}}', '6,300'),
            image: Images.aravali_belt,
            badge: String.PlantationJourney_BadgeNew,
        },
    ];

    const categoriesList = [
        {
            id: 'native',
            title: String.ChooseTree_CategoryNative,
            desc: String.PlantationJourney_NativeTreesDesc,
            species: String.PlantationJourney_SpeciesCount.replace('{{count}}', '20'),
            image: Images.peepal_tree,
        },
        {
            id: 'fruit',
            title: String.ChooseTree_CategoryFruit,
            desc: String.PlantationJourney_FruitTreesDesc,
            species: String.PlantationJourney_SpeciesCount.replace('{{count}}', '15'),
            image: Images.mango_tree,
        },
        {
            id: 'medicinal',
            title: String.PlantationJourney_MedicinalTreesTitle,
            desc: String.PlantationJourney_MedicinalTreesDesc,
            species: String.PlantationJourney_SpeciesCount.replace('{{count}}', '10'),
            image: Images.neem_tree,
        },
        {
            id: 'flowering',
            title: String.ChooseTree_CategoryFlowering,
            desc: String.PlantationJourney_FloweringTreesDesc,
            species: String.PlantationJourney_SpeciesCount.replace('{{count}}', '12'),
            image: Images.gulmohar_tree,
        },
    ];

    const trustBadgesList = [
        {
            title: String.Dashboard_GPSVerified,
            desc: String.PlantationJourney_TrustGPSDesc,
            icon: Images.location,
        },
        {
            title: String.PlantationJourney_TrustSurvivalTitle,
            desc: String.PlantationJourney_TrustSurvivalDesc,
            icon: Images.shield,
        },
        {
            title: String.PlantationJourney_TrustTranspTitle,
            desc: String.PlantationJourney_TrustTranspDesc,
            icon: Images.verified,
        },
        {
            title: String.PlantationJourney_TrustTrustedTitle,
            desc: String.PlantationJourney_TrustTrustedDesc,
            icon: Images.community,
        },
    ];

    const handleBack = () => {
        navigation.goBack();
    };

    const handleNotifications = () => {
        Alert.alert(String.Alert_NotificationsTitle, String.PlantationJourney_AlertNoNotifications);
    };

    const handleSettings = () => {
        handleNavigation({
            type: 'push',
            page: 'Setting',
            navigation,
        })
    };

    const handleViewAllStates = () => {
        navigation.navigate('ExploreStates');
    };

    const handleViewAllProjects = () => {
        Alert.alert(String.Alert_ProjectsTitle, String.PlantationJourney_AlertProjectsRedirect);
    };

    const handleCategoryGuide = () => {
        Alert.alert(String.Alert_CategoryGuideTitle, String.PlantationJourney_AlertCategoryGuide);
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
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                <ImageBackground source={Images.detailbg} style={styles.headerBg} imageStyle={styles.headerBgImg} resizeMode="cover">

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

                    <View style={styles.heroContentRow}>
                        <View style={styles.heroLeftCol}>
                            <Text style={styles.heroTitle}>
                                {String.PlantationJourney_TitleStart}{'\n'}
                                <Text style={styles.heroTitleGreen}>{String.PlantationJourney_TitleHighlight}</Text>
                            </Text>
                            <Text style={styles.heroSubtitle}>
                                {String.PlantationJourney_Subtitle}
                            </Text>

                            <View style={styles.heroBadge}>
                                <Text style={styles.heroBadgeText}>{String.PlantationJourney_HeroBadge}</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.sectionHeaderRow}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>{String.PlantationJourney_ChooseState}</Text>
                        <Image source={Images.geolocation} style={[styles.sectionTitleLeaf, { tintColor: Colors.TextColorGreenDark }]} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.viewAllRow} onPress={handleViewAllStates} activeOpacity={0.7}>
                        <Text style={styles.viewAllText}>{String.PlantationJourney_ViewAllStates}</Text>
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

                <View style={styles.sectionHeaderRow}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>{String.PlantationJourney_ExploreProjects}</Text>
                        <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.viewAllRow} onPress={handleViewAllProjects} activeOpacity={0.7}>
                        <Text style={styles.viewAllText}>{String.PlantationJourney_ViewAllProjects}</Text>
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

                <View style={styles.paginationContainer}>
                    <View style={styles.paginationDotActive} />
                    <View style={styles.paginationDot} />
                    <View style={styles.paginationDot} />
                </View>

                <View style={styles.sectionHeaderRow}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>{String.PlantationJourney_ChooseCategory}</Text>
                        <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.viewAllRow} onPress={handleCategoryGuide} activeOpacity={0.7}>
                        <Text style={styles.viewAllText}>{String.PlantationJourney_WhichTreeGuide}</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
                    {categoriesList.map(cat => (
                        <TouchableOpacity
                            key={cat.id}
                            style={styles.categoryCard}
                            onPress={() => {
                                handleNavigation({ type: 'push', navigation, page: 'WhichtreeShouldIPlant' })
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default PlantationJourneyScreen;
