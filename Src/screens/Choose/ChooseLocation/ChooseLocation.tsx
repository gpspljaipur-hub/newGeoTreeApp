import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { styles } from './styles';
import Images from '../../../constants/images';
import String from '../../../comman/String';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Stepper from '../../../comman/Stepper';
import PlantHeader from '../../../comman/PlantHeader';

const locationsData = [
  {
    id: 'aravali',
    name: 'Aravali Green Belt, Jaipur',
    city: 'Jaipur, Rajasthan',
    popular: true,
    description: 'Native tree plantation to restore the Aravali hills and improve biodiversity.',
    treesPlanted: '12K+',
    activeProjects: '8',
    verified: true,
    image: Images.aravali_belt,
  },
  {
    id: 'sariska',
    name: 'Sariska Tiger Reserve Area',
    city: 'Alwar, Rajasthan',
    popular: false,
    description: 'Supporting wildlife habitats and restoring natural ecosystems.',
    treesPlanted: '9K+',
    activeProjects: '6',
    verified: true,
    image: Images.sariska_reserve,
  },
  {
    id: 'thar',
    name: 'Thar Desert Greening Zone',
    city: 'Jaisalmer, Rajasthan',
    popular: false,
    description: 'Planting drought-resistant native species to combat desertification.',
    treesPlanted: '7K+',
    activeProjects: '5',
    verified: true,
    image: Images.thar_desert,
  },
  {
    id: 'udaipur',
    name: 'Udaipur Green Lakeside',
    city: 'Udaipur, Rajasthan',
    popular: false,
    description: 'Enhancing green cover around lakes for a cleaner and cooler environment.',
    treesPlanted: '6K+',
    activeProjects: '4',
    verified: true,
    image: Images.udaipur_lakeside,
  },
];

const ChooseLocationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedLocationId, setSelectedLocationId] = useState('aravali');


  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <PlantHeader />

        {/* Stepper */}
        <Stepper currentStep={2} />

        {/* Hero Card */}
        <View style={styles.heroCard}>
          <ImageBackground
            source={Images.location_hero_bg}
            style={styles.heroImage}
            imageStyle={styles.heroImageRadius}
            resizeMode='contain'
          >
            {/* White Fade Overlay */}
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, 0.38, 0.58, 1]}
              style={styles.heroOverlay}
            />
            <View style={styles.heroContent}>
              <View style={styles.heroTextContainer}>
                <Text style={styles.heroTitle}>
                  {String.ChooseLocation_TitleLeft} <Text style={styles.highlightGreen}>{'Rajsthan'}</Text>
                </Text>
                <Text style={styles.heroSubtitle}>{String.ChooseLocation_Subtitle}  </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Selected State Card */}
        <View style={styles.stateSelectorCard}>
          <View style={styles.stateLeftSection}>
            <View style={styles.stateIconContainer}>
              <Image source={Images.bubbletree} style={styles.stateIcon} resizeMode='cover' />
            </View>

            <View style={styles.stateTextContainer}>
              <Text style={styles.stateLabelText}>{'Selected State'}</Text>
              <Text style={styles.stateValueText}>{'Rajasthan'}</Text>
            </View>

          </View>
          <TouchableOpacity style={styles.changeStateButton} activeOpacity={0.8}>
            <Text style={styles.changeStateText}>{String.ChooseTree_ChangeState}</Text>
          </TouchableOpacity>
        </View>

        {/* Verified Plantation Locations Header */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>{String.ChooseLocation_VerifiedLocations}</Text>
            <Text style={styles.sectionSubtitle}>{String.ChooseLocation_ChooseSpecific}</Text>
          </View>
          <TouchableOpacity style={styles.viewMapButton} activeOpacity={0.8}>
            <Text style={styles.viewMapText}>View on Map</Text>
            {/* <Image source={Images.Maps} style={styles.viewMapIcon} resizeMode="contain" /> */}
          </TouchableOpacity>
        </View>

        {/* Location List */}
        <View style={styles.locationList}>
          {locationsData.map((loc) => {
            const isSelected = selectedLocationId === loc.id;
            return (
              <TouchableOpacity
                key={loc.id}
                style={[styles.locationCard, isSelected && styles.locationCardSelected]}
                onPress={() => setSelectedLocationId(loc.id)}
                activeOpacity={0.9}
              >
                {/* Left Image */}
                <View style={styles.locationImageContainer}>
                  <Image source={loc.image} style={styles.locationImage} resizeMode="cover" />
                  {loc.popular && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularText}>{String.State_Popular}</Text>
                    </View>
                  )}
                </View>

                {/* Right Details */}
                <View style={styles.locationInfoContainer}>
                  <View style={styles.cardTitleRow}>
                    <Text style={styles.cardTitle} numberOfLines={1}>
                      {loc.name}
                    </Text>
                    <View
                      style={[
                        styles.selectionOuterCircle,
                        isSelected && styles.selectionOuterCircleSelected,
                      ]}
                    >
                      {isSelected && (
                        <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' }}>✓</Text>
                      )}
                    </View>
                  </View>

                  <View style={styles.locationPinRow}>
                    <Image source={Images.location} style={styles.pinIcon} resizeMode="contain" />
                    <Text style={styles.pinText}>{loc.city}</Text>
                  </View>

                  <Text style={styles.cardDescription} numberOfLines={2}>
                    {loc.description}
                  </Text>

                  <View style={styles.cardDivider} />

                  {/* Stats Row */}
                  <View style={styles.statsRow}>
                    <View style={styles.statCol}>
                      <View style={styles.statHeader}>
                        <Image source={Images.tree} style={styles.statIcon} resizeMode="contain" />
                        <Text style={styles.statValue}>{loc.treesPlanted}</Text>
                      </View>
                      <Text style={styles.statLabel}>{String.AppOpening_TreesPlanted}</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statCol}>
                      <View style={styles.statHeader}>
                        <Image source={Images.community} style={styles.statIcon} resizeMode="contain" />
                        <Text style={styles.statValue}>{loc.activeProjects}</Text>
                      </View>
                      <Text style={styles.statLabel}>{String.ChooseLocation_ActiveProjects}</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statCol}>
                      <View style={styles.statHeader}>
                        <Image source={Images.verified} style={[styles.statIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                        <Text style={styles.verifiedLabel}>{String.Verified}</Text>
                      </View>
                      <Text style={styles.statLabel}>{String.ChooseLocation_ByGeoTree}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* Bottom Verification Banner */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerLeft}>
            <View style={styles.bannerShieldContainer}>
              <Image source={Images.shield} style={styles.bannerShieldIcon} resizeMode="contain" />
            </View>
            <Text style={styles.bannerText}>
              {String.ChooseLocation_AllLocationsVerified}
            </Text>
          </View>
          <Image source={Images.handtree} style={styles.bannerHandImage} resizeMode="cover" />
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Details')}
          activeOpacity={0.85}
        >
          <Text style={styles.continueText}>{String.Continue}</Text>
          <Image
            source={Images.back}
            style={[styles.continueArrow, { transform: [{ rotate: '180deg' }] }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseLocationScreen;
