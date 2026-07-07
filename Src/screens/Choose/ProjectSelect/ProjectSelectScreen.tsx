import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Share,
} from 'react-native';
import GalleryModal from './GalleryModal';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Images from '../../../constants/images';
import String from '../../../comman/String';
import { Colors } from '../../../comman/Colors';

interface TreeSpecies {
  id: string;
  name: string;
  scientificName: string;
  image: any;
}

const ProjectSelectScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'ProjectSelect'>>();

  // Extract project from navigation parameter
  const { project = {} } = route.params || {};
  console.log('project', project, route.params)

  // Dynamic values with static fallbacks matching "Aravalli Green Belt" design mockup
  const projectName = route?.params?.title || 'Aravalli Green Belt';
  const projectCategory = project?.category || 'Desert Restoration';
  const projectDescription = project?.description || 'Restoring the Aravalli hills and enhancing biodiversity around Jaipur.';
  const treesPlantedText = project?.treesPlanted || '25,000+';
  const survivalRateText = project?.survivalRate || '96%';
  const heroImage = project?.image || Images.aravali_belt;
  const projectCity = project?.city || 'Jaipur, Rajasthan';
  const projectAbout = project?.about || 'The Aravalli Green Belt project aims to restore the degraded Aravalli hills by planting native trees, improving soil health, and creating a sustainable green cover for future generations.';
  const areaCoveredText = project?.areaCovered || '120+ Acres';
  const projectSinceText = project?.projectSince || '2019';
  const projectPartnerText = project?.projectPartner || 'Green Earth Foundation';
  const plantationMethodText = project?.plantationMethod || 'Miyawaki & Native Plantation';
  const soilTypeText = project?.soilType || 'Rocky, Sandy Loam';
  const rainfallText = project?.rainfall || '650–700 mm/year';
  const maintenanceText = project?.maintenance || '3 Years of Care & Monitoring';
  const co2OffsetVal = project?.co2Offset || '5,200+ Tons';
  const nativeSpeciesCountVal = project?.nativeSpeciesCount || '50+';
  const waterSavedVal = project?.waterSaved || '1.8M+ Liters';

  // Dynamic gallery with fallbacks
  const galleryImages = project?.gallery || [
    Images.aravali_belt,
    Images.thar_desert,
    Images.udaipur_lakeside,
    Images.project_aravalli,
    Images.thar_desert,
    Images.udaipur_lakeside,
    Images.project_aravalli,
  ];

  // States
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTreeId, setSelectedTreeId] = useState('neem');
  const [isGalleryModalVisible, setIsGalleryModalVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setActiveImageIndex(index);
    setIsGalleryModalVisible(true);
  };

  // Hardcoded tree species fallback list
  const fallbackSpeciesList: TreeSpecies[] = [
    {
      id: 'neem',
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      image: Images.neem_tree,
    },
    {
      id: 'khejri',
      name: 'Khejri',
      scientificName: 'Prosopis cineraria',
      image: Images.peepal_tree,
    },
    {
      id: 'rohida',
      name: 'Rohida',
      scientificName: 'Tecomella undulata',
      image: Images.mango_tree,
    },
    {
      id: 'amla',
      name: 'Amla',
      scientificName: 'Phyllanthus emblica',
      image: Images.gulmohar_tree,
    },
    {
      id: 'babul',
      name: 'Babul',
      scientificName: 'Vachellia nilotica',
      image: Images.peepal_tree,
    },
  ];
  const treeSpeciesList = project?.availableSpecies || fallbackSpeciesList;

  const SpeciesAll = () => {
    navigation.navigate('ChooseSpecies')
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header Image Background */}
          <ImageBackground
            source={heroImage}
            style={styles.headerBackground}
            resizeMode="cover"
          >
            <View style={styles.headerOverlay} />

            {/* Top Navigation Row */}
            <View style={styles.headerTopRow}>
              <TouchableOpacity
                style={styles.headerTopButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
              >
                <Image source={Images.back} style={styles.headerTopButtonIcon} resizeMode="contain" />
              </TouchableOpacity>

              <View style={styles.headerRightButtons}>
                <TouchableOpacity
                  style={styles.headerTopButton}
                  activeOpacity={0.7}
                  onPress={() => setIsLiked(!isLiked)}
                >
                  <Image
                    source={Images.heart}
                    style={[
                      styles.headerTopButtonIcon,
                      { tintColor: isLiked ? '#E11D48' : Colors.black }
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.headerTopButton}
                  activeOpacity={0.7}
                >
                  <Image source={Images.share} style={styles.headerTopButtonIcon} resizeMode="contain" />
                </TouchableOpacity>
              </View>

            </View>

            {/* Header Text Content */}
            <View style={styles.headerBottomContent}>
              <View style={styles.verifiedBadge}>
                <Image source={Images.shield} style={styles.verifiedBadgeIcon} resizeMode="contain" />
                <Text style={styles.verifiedBadgeText}>{String.Dashboard_GPSVerified}</Text>
              </View>


              <Text style={styles.headerTitle}>{projectName}</Text>

              <View style={styles.headerLocationRow}>
                <Image source={Images.location} style={styles.headerLocationIcon} resizeMode="contain" />
                <Text style={styles.headerLocationText}>{projectCity}</Text>
              </View>

              <Text numberOfLines={2} style={styles.headerDescription}>
                {projectDescription}
              </Text>
            </View>

            {/* Overlapping Stats Floating Card */}
            <View style={styles.statsOverlayCard}>
              <View style={styles.statsCardColumn}>
                {/* <Image source={Images.treeIcon} style={styles.statsCardIcon} resizeMode="contain" /> */}
                <View style={styles.statsCardTextCol}>
                  <Text style={styles.statsCardValue}>{treesPlantedText}</Text>
                  <Text style={styles.statsCardLabel}>{String.AppOpening_TreesPlanted}</Text>
                </View>
              </View>

              <View style={styles.statsCardDivider} />

              <View style={styles.statsCardColumn}>
                {/* <Image source={Images.check} style={styles.statsCardIcon} resizeMode="contain" /> */}
                <View style={styles.statsCardTextCol}>
                  <Text style={styles.statsCardValue}>{survivalRateText}</Text>
                  <Text style={styles.statsCardLabel}>{String.AppOpening_SurvivalRate}</Text>
                </View>
              </View>
            </View>

            {/* Overlapping Stats Floating Card */}

          </ImageBackground>

          {/* Main Content Area */}
          <View style={styles.mainContent}>
            {/* Quick Info / Stats Card */}
            <View style={styles.quickStatsCard}>
              <View style={styles.quickStatCol}>
                <View style={styles.quickStatIconBg}>
                  <Image source={Images.shield} style={styles.quickStatIcon} resizeMode="contain" />
                </View>
                <Text style={styles.quickStatValue}>{projectCategory}</Text>
                <Text style={styles.quickStatLabel}>{String.ProjectSelect_ProjectFocus}</Text>
              </View>

              <View style={styles.quickStatDivider} />

              <View style={styles.quickStatCol}>
                <View style={styles.quickStatIconBg}>
                  <Image source={Images.leaf} style={styles.quickStatIcon} resizeMode="contain" />
                </View>
                <Text style={styles.quickStatValue}>{areaCoveredText}</Text>
                <Text style={styles.quickStatLabel}>{String.ProjectSelect_AreaCovered}</Text>
              </View>

              <View style={styles.quickStatDivider} />

              <View style={styles.quickStatCol}>
                <View style={styles.quickStatIconBg}>
                  <Image source={Images.calendar} style={styles.quickStatIcon} resizeMode="contain" />
                </View>
                <Text style={styles.quickStatValue}>{projectSinceText}</Text>
                <Text style={styles.quickStatLabel}>{String.ProjectSelect_ProjectSince}</Text>
              </View>

              <View style={styles.quickStatDivider} />

              <View style={styles.quickStatCol}>
                <View style={styles.quickStatIconBg}>
                  <Image source={Images.group} style={styles.quickStatIcon} resizeMode="contain" />
                </View>
                <Text style={styles.quickStatValue}>{String.ProjectSelect_NgoPartner}</Text>
                <Text style={styles.quickStatLabel}>{String.ProjectSelect_TrustedPartner}</Text>
              </View>
            </View>

            {/* About Section */}
            <View style={styles.aboutSection}>
              <View style={styles.aboutContentRow}>
                <View style={styles.aboutLeftTextContainer}>
                  <Text style={styles.sectionTitle}>{String.ProjectSelect_AboutProject}</Text>

                  <Text
                    style={styles.aboutText}
                    numberOfLines={isExpanded ? undefined : 2}
                  >
                    {projectAbout}
                  </Text>
                  <TouchableOpacity
                    style={styles.readMoreBtn}
                    activeOpacity={0.7}
                    onPress={() => setIsExpanded(!isExpanded)}
                  >
                    <Text style={styles.readMoreText}>
                      {isExpanded ? String.ProjectSelect_ReadLess : String.ProjectSelect_ReadMore}
                    </Text>

                  </TouchableOpacity>
                </View>

                {/* Video Card */}
                <TouchableOpacity style={styles.videoCard} activeOpacity={0.9}>
                  <ImageBackground
                    source={Images.project_jaipur}
                    style={styles.videoImageBg}
                    resizeMode="cover"
                  >
                    <View style={styles.videoOverlay} />
                    <View style={styles.playIconBg}>
                      <Image source={Images.video} style={styles.playIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.videoLabel}>{String.ProjectSelect_ProjectVideo}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>

            {/* Project Gallery */}
            <View style={styles.gallerySection}>
              <Text style={styles.sectionTitle}>{String.ProjectSelect_ProjectGallery}</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.galleryScroll}
              >
                {galleryImages.map((img: any, index: number) => {
                  const maxVisible = 5;
                  const showOverlay = galleryImages.length > maxVisible && index === maxVisible - 1;
                  if (galleryImages.length > maxVisible && index >= maxVisible) {
                    return null;
                  }

                  if (showOverlay) {
                    const remainingCount = galleryImages.length - 4;
                    return (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => openGallery(index)}
                      >
                        <ImageBackground
                          source={img}
                          style={styles.galleryImage}
                          resizeMode="cover"
                        >
                          <View style={styles.galleryMoreOverlay}>
                            <Text style={styles.galleryMoreText}>{String.ProjectSelect_MoreImages.replace('{{count}}', remainingCount.toString())}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    );
                  }
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.8}
                      onPress={() => openGallery(index)}
                    >
                      <Image
                        source={img}
                        style={styles.galleryImage}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            {/* Project Impact */}
            <View style={styles.impactSection}>
              <Text style={styles.sectionTitle}>{String.ProjectSelect_ProjectImpact}</Text>
              <View style={styles.impactStatsCard}>
                <View style={styles.impactStatCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.treeIcon} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactValue}>{treesPlantedText}</Text>
                  <Text style={styles.impactLabel}>{String.AppOpening_TreesPlanted}</Text>
                </View>

                <View style={styles.impactStatDivider} />

                <View style={styles.impactStatCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.co2Cloud} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactValue}>{co2OffsetVal}</Text>
                  <Text style={styles.impactLabel}>{String.ProjectSelect_Co2OffsetEst}</Text>
                </View>

                <View style={styles.impactStatDivider} />

                <View style={styles.impactStatCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.group} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactValue}>{nativeSpeciesCountVal}</Text>
                  <Text style={styles.impactLabel}>{String.ProjectSelect_NativeSpecies}</Text>
                </View>

                <View style={styles.impactStatDivider} />

                <View style={styles.impactStatCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.drop} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactValue}>{waterSavedVal}</Text>
                  <Text style={styles.impactLabel}>{String.ProjectSelect_WaterSaved}</Text>
                </View>

              </View>
            </View>

            {/* Available Tree Species */}
            <View style={styles.speciesSection}>
              <View style={styles.speciesHeader}>
                <View style={styles.speciesTitleContainer}>
                  <Text style={styles.sectionTitle}>{String.ProjectSelect_AvailableSpecies}</Text>
                </View>
                <TouchableOpacity onPress={() => { SpeciesAll() }} style={styles.viewAllSpeciesLink} activeOpacity={0.7}>
                  <Text style={styles.viewAllSpeciesText}>{String.HomeDeshbord_ViewAll}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.speciesSubtitle}>
                {String.ProjectSelect_ChooseNative}
              </Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.speciesScroll}
              >
                {treeSpeciesList.map((tree: TreeSpecies) => {
                  const isSelected = selectedTreeId === tree.id;
                  return (
                    <TouchableOpacity
                      key={tree.id}
                      style={[styles.speciesCard, isSelected && styles.speciesCardSelected]}
                      activeOpacity={0.9}
                      onPress={() => setSelectedTreeId(tree.id)}
                    >
                      <View style={styles.speciesImageWrapper}>
                        <Image source={tree.image} style={styles.speciesImage} resizeMode="cover" />
                        {isSelected && (
                          <View style={styles.selectedCheckBadge}>
                            <Image source={Images.check} style={styles.selectedCheckIcon} resizeMode="contain" />
                          </View>
                        )}
                      </View>
                      <View style={styles.speciesContent}>
                        <Text style={styles.speciesName}>{tree.name}</Text>
                        <Text style={styles.speciesScientific}>{tree.scientificName}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            {/* Project Details */}
            <View style={styles.detailsSection}>
              <Text style={styles.sectionTitle}>{String.ProjectSelect_ProjectDetails}</Text>
              <View style={styles.detailsGrid}>
                {/* Location - Row item */}
                <View style={styles.detailsItemRow}>
                  <View style={styles.detailsIconBg}>
                    <Image source={Images.location} style={styles.detailsIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.detailsTextColRow}>
                    <Text style={styles.detailsLabelRow}>{String.LocationLabel}</Text>
                    <Text style={styles.detailsValueRow}>{projectCity}</Text>
                  </View>
                </View>

                {/* Project Partner - Col item */}
                <View style={styles.detailsItemCol}>
                  <View style={styles.detailsIconBg}>
                    <Image source={Images.group} style={styles.detailsIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.detailsTextColCol}>
                    <Text style={styles.detailsLabel}>{String.ProjectSelect_ProjectPartner}</Text>
                    <Text style={styles.detailsValue}>{projectPartnerText}</Text>
                  </View>
                </View>

                {/* Soil Type - Row item */}
                <View style={styles.detailsItemRow}>
                  <View style={styles.detailsIconBg}>
                    <Image source={Images.soiltype} style={styles.detailsIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.detailsTextColRow}>
                    <Text style={styles.detailsLabelRow}>{String.ProjectSelect_SoilType}</Text>
                    <Text style={styles.detailsValueRow}>{soilTypeText}</Text>
                  </View>
                </View>

                {/* Plantation Method - Col item */}
                <View style={styles.detailsItemCol}>
                  <View style={styles.detailsIconBg}>
                    <Image source={Images.treeIcon} style={styles.detailsIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.detailsTextColCol}>
                    <Text style={styles.detailsLabel}>{String.ProjectSelect_PlantationMethod}</Text>
                    <Text style={styles.detailsValue}>{plantationMethodText}</Text>
                  </View>
                </View>

                {/* Rainfall - Row item */}
                <View style={styles.detailsItemRow}>
                  <View style={styles.detailsIconBg}>
                    <Image source={Images.drop} style={styles.detailsIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.detailsTextColRow}>
                    <Text style={styles.detailsLabelRow}>{String.ProjectSelect_Rainfall}</Text>
                    <Text style={styles.detailsValueRow}>{rainfallText}</Text>
                  </View>
                </View>

                {/* Maintenance - Col item */}
                <View style={styles.detailsItemCol}>
                  <View style={styles.detailsIconBg}>
                    <Image source={Images.maintaince} style={styles.detailsIcon} resizeMode="contain" />
                  </View>
                  <View style={styles.detailsTextColCol}>
                    <Text style={styles.detailsLabel}>{String.ProjectSelect_Maintenance}</Text>
                    <Text style={styles.detailsValue}>{maintenanceText}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Bottom Callout Banner */}
          <View style={styles.bottomBanner}>
            <Image source={Images.handtree} style={styles.bannerHandImage} resizeMode="contain" />
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTextTitle}>{String.ProjectSelect_ReadyImpact}</Text>
              <Text style={styles.bannerTextDesc}>
                {String.ProjectSelect_ChooseTreeJourney}
              </Text>
            </View>

          </View>

          <TouchableOpacity
            style={styles.bannerBtn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DedicateTree',)}
          >
            <Text style={styles.bannerBtnText}>{String.ProjectSelect_ChooseTreeSpecies}</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Fullscreen Gallery Modal */}
        <GalleryModal
          visible={isGalleryModalVisible}
          onClose={() => setIsGalleryModalVisible(false)}
          images={galleryImages}
          activeIndex={activeImageIndex}
          setActiveIndex={setActiveImageIndex}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProjectSelectScreen;
