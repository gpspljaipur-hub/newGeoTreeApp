import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';

interface SpeciesImpact {
  co2: string;
  oxygen: string;
  waterSaved: string;
  biodiversity: string;
}

interface TreeSpecies {
  id: string;
  name: string;
  scientificName: string;
  image: any;
  co2: string;
  lifespan: string;
  waterNeed: string;
  impact: SpeciesImpact;
}

const ChooseSpeciesScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'ChooseSpecies'>>();
  const { project, selectedTreeId } = route.params || {};
  const projectName = project?.name || 'Aravalli Green Belt';
  const projectCity = project?.city || 'Jaipur, Rajasthan';
  const treesPlantedText = project?.treesPlanted || '25,000+';
  const survivalRateText = project?.survivalRate || '96%';
  const areaCoveredText = project?.areaCovered || '120+ Acres';
  const projectSinceText = project?.projectSince || '2019';
  const [selectedSpeciesId, setSelectedSpeciesId] = useState(selectedTreeId || 'neem');

  const speciesList: TreeSpecies[] = [
    {
      id: 'neem',
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      image: Images.neem_tree,
      co2: '22 Kg/Year',
      lifespan: '100+ Years',
      waterNeed: 'Low',
      impact: {
        co2: '22 Kg/Year',
        oxygen: '160 Kg/Year',
        waterSaved: '1,000+ Liters/Year',
        biodiversity: 'High',
      },
    },
    {
      id: 'khejri',
      name: 'Khejri',
      scientificName: 'Prosopis cineraria',
      image: Images.peepal_tree,
      co2: '18 Kg/Year',
      lifespan: '80+ Years',
      waterNeed: 'Very Low',
      impact: {
        co2: '18 Kg/Year',
        oxygen: '130 Kg/Year',
        waterSaved: '1,200+ Liters/Year',
        biodiversity: 'Very High',
      },
    },
    {
      id: 'rohida',
      name: 'Rohida',
      scientificName: 'Tecomella undulata',
      image: Images.mango_tree,
      co2: '16 Kg/Year',
      lifespan: '70+ Years',
      waterNeed: 'Low',
      impact: {
        co2: '16 Kg/Year',
        oxygen: '115 Kg/Year',
        waterSaved: '950+ Liters/Year',
        biodiversity: 'High',
      },
    },
    {
      id: 'amla',
      name: 'Amla',
      scientificName: 'Phyllanthus emblica',
      image: Images.gulmohar_tree,
      co2: '14 Kg/Year',
      lifespan: '60+ Years',
      waterNeed: 'Low',
      impact: {
        co2: '14 Kg/Year',
        oxygen: '100 Kg/Year',
        waterSaved: '800+ Liters/Year',
        biodiversity: 'High',
      },
    },
    {
      id: 'babul',
      name: 'Babul',
      scientificName: 'Vachellia nilotica',
      image: Images.neem_tree,
      co2: '12 Kg/Year',
      lifespan: '50+ Years',
      waterNeed: 'Very Low',
      impact: {
        co2: '12 Kg/Year',
        oxygen: '90 Kg/Year',
        waterSaved: '700+ Liters/Year',
        biodiversity: 'High',
      },
    },
  ];

  // Currently selected species object
  const selectedSpecies = speciesList.find(s => s.id === selectedSpeciesId) || speciesList[0];
  const areaCoveredVal = areaCoveredText.includes(' ') ? areaCoveredText.split(' ')[0] : areaCoveredText;

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* Header section */}
          <ImageBackground
            source={Images.TreeBgChoose}
            style={styles.headerSection}
            resizeMode='cover'
          >
            <View style={styles.headerTopRow}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
              >
                <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <View style={styles.headerContentRow}>
              <View style={styles.headerTextContainer}>
                <View style={styles.headerTitleRow}>
                  <Text style={styles.headerTitle}>Choose a Tree Species</Text>
                </View>
                <View style={styles.headerSubtitleRow}>
                  <Text style={styles.headerSubtitle}>Select a native tree species to plant at</Text>
                  <Text style={styles.projectHighlight}>{projectName}, {projectCity.split(',')[0]}  </Text>
                </View>

                <View style={styles.gpsBadge}>
                  <Image source={Images.shield} style={styles.gpsIcon} resizeMode="contain" />
                  <Text style={styles.gpsText}>GPS Verified Project</Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* Floating Quick Stats Card */}
          <View style={styles.quickStatsContainer}>
            <View style={styles.quickStatCol}>
              <Image source={Images.treeIcon} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{treesPlantedText}</Text>
              <Text style={styles.quickStatLabel}>Trees Planted</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.soiltype} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{areaCoveredVal}</Text>
              <Text style={styles.quickStatLabel}>Acres Covered</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.verified} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{survivalRateText}</Text>
              <Text style={styles.quickStatLabel}>Survival Rate</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.calendar} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{projectSinceText}</Text>
              <Text style={styles.quickStatLabel}>Project Since</Text>
            </View>
          </View>

          {/* Available Species Section */}
          <View style={styles.listSection}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>Available Tree Species</Text>
            </View>
            <Text style={styles.listSubtitle}>Choose a species that you want to plant.</Text>

            {/* Render Species Cards */}
            {speciesList.map((species) => {
              const isSelected = selectedSpeciesId === species.id;
              return (
                <TouchableOpacity
                  key={species.id}
                  style={[styles.speciesCard, isSelected && styles.speciesCardSelected]}
                  activeOpacity={0.9}
                  onPress={() => setSelectedSpeciesId(species.id)}
                >
                  <View style={styles.cardContentRow}>
                    {/* Left image of tree */}
                    <Image source={species.image} style={styles.speciesImage} resizeMode="cover" />

                    {/* Right column with title, subtitle, badge, radio button and details */}
                    <View style={styles.speciesInfoCol}>
                      {/* Name row with radio button */}
                      <View style={styles.speciesHeaderRow}>
                        <Text style={styles.speciesName}>{species.name}</Text>

                        {/* Radio Button selector */}
                        <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
                          {isSelected && <View style={styles.radioDot} />}
                        </View>
                      </View>

                      {/* Scientific name and Native badge */}
                      <View style={styles.scientificRow}>
                        <Text style={styles.speciesScientific}>{species.scientificName}</Text>
                        <View style={styles.nativeBadge}>
                          <Image source={Images.leaf} style={styles.nativeBadgeLeaf} resizeMode="contain" />
                          <Text style={styles.nativeText}>Native</Text>
                        </View>
                      </View>

                      {/* Attribute columns row */}
                      <View style={styles.cardBottomRow}>
                        <View style={styles.detailCol}>
                          <View style={styles.detailLabelContainer}>
                            <Image source={Images.co2Cloud} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailLabel}>CO₂ Absorption</Text>
                            <Text style={styles.detailValue}>{species.co2}</Text>
                          </View>
                        </View>
                        <View style={styles.detailCol}>
                          <View style={styles.detailLabelContainer}>
                            <Image source={Images.maintaince} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailLabel}>Lifespan</Text>
                            <Text style={styles.detailValue}>{species.lifespan}</Text>
                          </View>
                        </View>

                        <View style={styles.detailCol}>
                          <View style={styles.detailLabelContainer}>
                            <Image source={Images.drop} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailLabel}>Water Need</Text>
                            <Text style={styles.detailValue}>{species.waterNeed}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Your Impact Card */}
          <View style={styles.impactSection}>
            <View style={styles.impactCard}>
              <View style={styles.impactHeader}>
                <Text style={styles.impactTitle}>Your Impact with This Tree</Text>
                <Image source={Images.leaf} style={styles.headerTitleLeaf} resizeMode="contain" />
              </View>
              <Text style={styles.impactSubtitle}>See the positive change your tree will create.</Text>

              <View style={styles.impactGrid}>
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.co2Cloud} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>CO₂ Absorption (Est.)</Text>
                  <Text style={styles.impactValue}>{selectedSpecies.impact.co2}</Text>
                </View>
                <View style={styles.impactDivider} />
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.leaf} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>Oxygen Generated</Text>
                  <Text style={styles.impactValue}>{selectedSpecies.impact.oxygen}</Text>
                </View>
                <View style={styles.impactDivider} />
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBgDrop}>
                    <Image source={Images.drop} style={styles.impactIconDrop} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>Water Saved</Text>
                  <Text style={styles.impactValue}>{selectedSpecies.impact.waterSaved}</Text>
                </View>
                <View style={styles.impactDivider} />
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.bird} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>Supports Biodiversity</Text>
                  <Text style={styles.impactValue}>{selectedSpecies.impact.biodiversity}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footerContainer}>
            {/* Selected Species Summary */}
            <View style={styles.footerSelectedInfo}>
              <Image source={selectedSpecies.image} style={styles.footerThumbnail} resizeMode="cover" />
              <View style={styles.footerTextCol}>
                <Text style={styles.footerLabel}>Selected Species</Text>
                <Text style={styles.footerName}>{selectedSpecies.name}</Text>
                <Text style={styles.footerScientific}>{selectedSpecies.scientificName}</Text>
                <TouchableOpacity
                  style={styles.footerChangeBtn}
                  activeOpacity={0.7}
                  onPress={() => {
                    // Action to trigger change
                  }}
                >
                  <Text style={styles.footerChangeText}>Change</Text>
                  <Image source={Images.edit} style={styles.footerChangeIcon} resizeMode="contain" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerActionCol}>
              <TouchableOpacity
                style={styles.proceedButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DedicateTree', { project, selectedSpecies })}
              >
                <Text style={styles.proceedButtonText}>Proceed to Dedication</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>

        {/* Sticky Footer Area */}


      </View>
    </SafeAreaView>
  );
};

export default ChooseSpeciesScreen;
