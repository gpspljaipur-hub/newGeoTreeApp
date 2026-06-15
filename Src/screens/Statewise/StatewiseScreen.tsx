import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { styles } from './styles';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

type StatewiseScreenRouteProp = RouteProp<RootStackParamList, 'Statewise'>;

interface LocationItem {
  id: string;
  name: string;
  category: string;
  description: string;
  treesPlanted: string;
  survivalRate: string;
  image: any;
  city: string;
}

interface StateData {
  bannerImage: any;
  subtitle: string;
  treesPlanted: string;
  locationsCovered: string;
  co2Offset: string;
  locations: LocationItem[];
}

const PROJECTS_DATA: { [key: string]: StateData } = {
  Rajasthan: {
    bannerImage: Images.rajasthan,
    subtitle: 'Restore desert ecosystems and create greener landscapes across Rajasthan.',
    treesPlanted: '1.2M+',
    locationsCovered: '28+',
    co2Offset: '12.5K+',
    locations: [
      {
        id: 'rajasthan-1',
        name: 'Aravalli Green Belt',
        category: 'Desert Restoration',
        description: 'Restoring the Aravalli hills and enhancing biodiversity around Jaipur.',
        treesPlanted: '25,000+',
        survivalRate: '96%',
        image: Images.aravali_belt,
        city: 'Jaipur, Rajasthan',
      },
      {
        id: 'rajasthan-2',
        name: 'Jodhpur Desert Restoration',
        category: 'Desert Greening',
        description: 'Combating desertification and bringing life to the barren lands of Jodhpur.',
        treesPlanted: '15,000+',
        survivalRate: '94%',
        image: Images.thar_desert,
        city: 'Jodhpur, Rajasthan',
      },
      {
        id: 'rajasthan-3',
        name: 'Udaipur Biodiversity Zone',
        category: 'Biodiversity Conservation',
        description: 'Creating a thriving habitat for wildlife and improving green cover.',
        treesPlanted: '12,500+',
        survivalRate: '95%',
        image: Images.udaipur_lakeside,
        city: 'Udaipur, Rajasthan',
      },
    ],
  },
  Uttarakhand: {
    bannerImage: Images.uttarakhand,
    subtitle: 'Protect mountain habitats and restore Himalayan forests.',
    treesPlanted: '850K+',
    locationsCovered: '18+',
    co2Offset: '9.2K+',
    locations: [
      {
        id: 'uttarakhand-1',
        name: 'Rishikesh Riverbed Forest',
        category: 'Riverbed Restoration',
        description: 'Planting local species along the Ganges riverbed to control soil erosion.',
        treesPlanted: '18,000+',
        survivalRate: '93%',
        image: Images.project_himalayas,
        city: 'Rishikesh, Uttarakhand',
      },
      {
        id: 'uttarakhand-2',
        name: 'Nainital Oak Woodlands',
        category: 'Oak Forest Protection',
        description: 'Rejuvenating water tables and restoring Himalayan Oak species.',
        treesPlanted: '12,000+',
        survivalRate: '95%',
        image: Images.project_aravalli,
        city: 'Nainital, Uttarakhand',
      },
    ],
  },
  Karnataka: {
    bannerImage: Images.karnataka,
    subtitle: 'Enhance canopy cover and preserve Western Ghats biodiversity.',
    treesPlanted: '650K+',
    locationsCovered: '20+',
    co2Offset: '7.8K+',
    locations: [
      {
        id: 'karnataka-1',
        name: 'Western Ghats Afforestation',
        category: 'Rainforest Conservation',
        description: 'Restoring damaged corridors and planting native Western Ghats species.',
        treesPlanted: '20,000+',
        survivalRate: '97%',
        image: Images.project_himalayas,
        city: 'Coorg, Karnataka',
      },
      {
        id: 'karnataka-2',
        name: 'Bengaluru Urban Forestry',
        category: 'Urban Greening',
        description: 'Developing green lungs inside the city borders with Miyawaki forests.',
        treesPlanted: '15,000+',
        survivalRate: '93%',
        image: Images.aravali_belt,
        city: 'Bengaluru, Karnataka',
      },
    ],
  },
  Maharashtra: {
    bannerImage: Images.maharashtra,
    subtitle: 'Revitalize degraded soil and foster agroforestry across Maharashtra.',
    treesPlanted: '1M+',
    locationsCovered: '22+',
    co2Offset: '10.8K+',
    locations: [
      {
        id: 'maharashtra-1',
        name: 'Sahyadri Range Restoration',
        category: 'Hill Conservation',
        description: 'Restoring vegetation cover on the degraded slopes of the Sahyadri mountains.',
        treesPlanted: '30,000+',
        survivalRate: '95%',
        image: Images.project_aravalli,
        city: 'Pune, Maharashtra',
      },
    ],
  },
  'Tamil Nadu': {
    bannerImage: Images.tamil_nadu,
    subtitle: 'Promote coastal conservation and build green corridors.',
    treesPlanted: '700K+',
    locationsCovered: '15+',
    co2Offset: '8.1K+',
    locations: [
      {
        id: 'tamil_nadu-1',
        name: 'Pichavaram Mangrove Greening',
        category: 'Coastal Restoration',
        description: 'Planting mangrove saplings to protect estuaries and coastline ecosystems.',
        treesPlanted: '22,000+',
        survivalRate: '96%',
        image: Images.project_himalayas,
        city: 'Chidambaram, Tamil Nadu',
      },
    ],
  },
};

const WHY_CHOOSE_DATA = [
  {
    id: '1',
    icon: Images.location,
    title: 'GPS Tracked',
    desc: 'Real-time location tracking',
  },
  {
    id: '2',
    icon: Images.verified,
    title: 'Verified Plantation',
    desc: '100% verified & authenticated',
  },
  {
    id: '3',
    icon: Images.co2Cloud,
    title: 'Carbon Offset',
    desc: 'Measurable carbon impact',
  },
  {
    id: '4',
    icon: Images.certificate,
    title: 'Digital Certificate',
    desc: 'Get a certificate for your contribution',
  },
];

const StatewiseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<StatewiseScreenRouteProp>();

  const stateName = route.params?.stateName || 'Rajasthan';
  const stateData = PROJECTS_DATA[stateName] || PROJECTS_DATA['Rajasthan'];

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {/* Header Image Background */}
          <ImageBackground
            source={Images.location_hero_bg}
            style={styles.headerBackground}
            resizeMode="cover"
          >
            <View style={styles.headerOverlay} />
            {/* Top row actions */}
            <View style={styles.headerTopRow}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={handleBack}
              >
                <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            {/* Header titles */}
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>{stateName} {'\n'}Plantation Projects</Text>
              <Text style={styles.headerSubtitle}>{stateData.subtitle}</Text>
            </View>
          </ImageBackground>

          {/* Stats Box Banner */}
          <View style={styles.statsCardContainer}>
            <View style={styles.statsCard}>
              <View style={styles.statColumn}>
                <View style={styles.statIconBadge}>
                  <Image source={Images.leaf} style={styles.statIcon} resizeMode="contain" />
                </View>
                <Text style={styles.statValue}>{stateData.treesPlanted}</Text>
                <Text style={styles.statLabel}>Trees Planted</Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.statColumn}>
                <View style={[styles.statIconBadge, { backgroundColor: '#EEF6F2' }]}>
                  <Image source={Images.location} style={[styles.statIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                </View>
                <Text style={styles.statValue}>{stateData.locationsCovered}</Text>
                <Text style={styles.statLabel}>Locations Covered</Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.statColumn}>
                <View style={[styles.statIconBadge, { backgroundColor: '#EEF6F2' }]}>
                  <Image source={Images.co2Cloud} style={[styles.statIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                </View>
                <Text style={styles.statValue}>{stateData.co2Offset}</Text>
                <Text style={styles.statLabel}>Tons CO₂ Offset</Text>
              </View>
            </View>
          </View>

          {/* Main Content Area */}
          <View style={styles.mainContent}>
            {/* Section Header */}
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>Available Plantation Locations</Text>
                <Image source={Images.leaf1} style={styles.titleLeafIcon} resizeMode="contain" />
              </View>
              <Text style={styles.sectionSubtitle}>Choose a verified project location to plant your tree.</Text>
            </View>

            {/* Location Cards */}
            {stateData.locations.map((loc) => {
              return (
                <View key={loc.id} style={styles.horizontalCard}>
                  {/* Left Column: Image wrapper */}
                  <View style={styles.horizontalCardImageWrapper}>
                    <ImageBackground
                      source={loc.image}
                      style={styles.horizontalCardImage}
                      resizeMode="cover"
                    >
                      <View style={styles.horizontalLocationBadge}>
                        <Image source={Images.location} style={styles.horizontalLocationBadgeIcon} resizeMode="contain" />
                        <Text style={styles.horizontalLocationBadgeText}>{loc.city}</Text>
                      </View>
                    </ImageBackground>
                  </View>

                  {/* Right Column: Content */}
                  <View style={styles.horizontalCardContent}>
                    {/* Title and Favorite Row */}
                    <View style={styles.horizontalTitleRow}>
                      <Text style={styles.horizontalCardTitle}>
                        {loc.name}
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.7}
                      >
                        <Image source={Images.heart} style={styles.horizontalHeartIcon} resizeMode="contain" />
                      </TouchableOpacity>
                    </View>

                    {/* Category Tag */}
                    <View style={styles.horizontalCategoryTag}>
                      <Image source={Images.leaf} style={styles.horizontalCategoryTagIcon} resizeMode="contain" />
                      <Text style={styles.horizontalCategoryTagText}>{loc.category}</Text>
                    </View>

                    {/* Description */}
                    <Text style={styles.horizontalCardDesc}>
                      {loc.description}
                    </Text>

                    {/* Divider Line */}
                    <View style={styles.horizontalDivider} />

                    {/* Specs Row */}
                    <View style={styles.horizontalSpecsRow}>
                      <View style={styles.horizontalSpecItem}>
                        <Image source={Images.tree} style={styles.horizontalSpecIcon} resizeMode="contain" />
                        <View style={styles.horizontalSpecTextContainer}>
                          <Text style={styles.horizontalSpecValue}>{loc.treesPlanted}</Text>
                          <Text style={styles.horizontalSpecLabel}>Trees Planted</Text>
                        </View>
                      </View>

                      <View style={styles.horizontalSpecItem}>
                        <Image source={Images.verified} style={styles.horizontalSpecIcon} resizeMode="contain" />
                        <View style={styles.horizontalSpecTextContainer}>
                          <Text style={styles.horizontalSpecValue}>GPS</Text>
                          <Text style={styles.horizontalSpecLabel}>Verified</Text>
                        </View>
                      </View>

                      <View style={styles.horizontalSpecItem}>
                        <Image source={Images.check} style={styles.horizontalSpecIcon} resizeMode="contain" />
                        <View style={styles.horizontalSpecTextContainer}>
                          <Text style={styles.horizontalSpecValue}>{loc.survivalRate}</Text>
                          <Text style={styles.horizontalSpecLabel}>Tree Survival Rate</Text>
                        </View>
                      </View>
                    </View>

                    {/* Explore Action Button */}
                    <TouchableOpacity
                      style={styles.horizontalExploreButton}
                      activeOpacity={0.8}
                    >
                      <View style={{ width: 12 }} />
                      <Text style={styles.horizontalExploreButtonText}>Explore Project</Text>
                      <Text style={styles.horizontalExploreButtonArrow}>→</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}

            {/* Why Choose Section */}
            <View style={styles.whySection}>
              <View style={styles.whyHeaderRow}>
                <Text style={styles.whyTitle}>Why Choose Our Plantation Projects?</Text>
                <Image source={Images.leaf} style={styles.whyTitleLeaf} resizeMode="contain" />
              </View>

              <View style={styles.whyGrid}>
                {WHY_CHOOSE_DATA.map((item) => (
                  <View key={item.id} style={styles.whyGridItem}>
                    <View style={styles.whyIconBadge}>
                      <Image source={item.icon} style={styles.whyGridIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.whyItemTitle}>{item.title}</Text>
                    <Text style={styles.whyItemDesc}>{item.desc}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Sticky Select Banner at Bottom */}
        <View style={styles.bottomBanner}>
          <Image source={Images.handtree} style={styles.bottomBannerIcon} resizeMode="cover" />
          <View style={styles.bottomBannerTextContainer}>
            <Text style={styles.bottomBannerText}>Select a Project to Plant Your Tree</Text>
          </View>
          <TouchableOpacity
            style={styles.bottomBannerButton}
            activeOpacity={0.8}
          >
            <Text style={styles.bottomBannerArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StatewiseScreen;
