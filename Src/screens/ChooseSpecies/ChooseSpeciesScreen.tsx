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
  ];

  // Currently selected species object
  const selectedSpecies = speciesList.find(s => s.id === selectedSpeciesId) || speciesList[0];

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* Header section */}
          <ImageBackground
            source={Images.species}
            style={styles.headerSection}
            resizeMode="cover"
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
                  <Text style={styles.headerTitle}>{"Choose a Tree\nSpecies"}</Text>
                </View>
                <Text style={styles.headerSubtitle}>
                  {"Select a native tree species\nto plant at "}
                  <Text style={styles.projectHighlight}>
                    {projectName}, {projectCity.split(',')[0]}
                  </Text>
                </Text>

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
              <Text style={styles.quickStatLabel}>Planted</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.globe} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{areaCoveredText.split(' ')[0]}</Text>
              <Text style={styles.quickStatLabel}>Acres</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.check} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{survivalRateText}</Text>
              <Text style={styles.quickStatLabel}>Survival</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.calendar} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{projectSinceText}</Text>
              <Text style={styles.quickStatLabel}>Since</Text>
            </View>
          </View>

          {/* Available Species Section */}
          <View style={styles.listSection}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>Available Tree Species</Text>
              <Image source={Images.leaf} style={styles.headerTitleLeaf} resizeMode="contain" />
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
                  <View style={styles.cardTopRow}>
                    <View style={styles.cardLeftContent}>
                      <Image source={species.image} style={styles.speciesImage} resizeMode="cover" />
                      <View style={styles.speciesMeta}>
                        <View style={styles.speciesNameRow}>
                          <Text style={styles.speciesName}>{species.name}</Text>
                          <View style={styles.nativeBadge}>
                            <Text style={styles.nativeText}>Native</Text>
                          </View>
                        </View>
                        <Text style={styles.speciesScientific}>{species.scientificName}</Text>
                      </View>
                    </View>

                    {/* Radio Button selector */}
                    <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
                      {isSelected && <View style={styles.radioDot} />}
                    </View>
                  </View>

                  <View style={styles.cardDivider} />
                  <View style={styles.cardBottomRow}>
                    {/* CO2 attribute */}
                    <View style={styles.detailCol}>
                      <Image source={Images.co2Cloud} style={styles.detailIcon} resizeMode="contain" />
                      <View style={styles.detailLabelContainer}>
                        <Text style={styles.detailLabel}>CO₂ Absorption</Text>
                        <Text style={styles.detailValue}>{species.co2}</Text>
                      </View>
                    </View>
                    {/* Lifespan attribute */}
                    <View style={styles.detailCol}>
                      <Image source={Images.calendar} style={styles.detailIcon} resizeMode="contain" />
                      <View style={styles.detailLabelContainer}>
                        <Text style={styles.detailLabel}>Lifespan</Text>
                        <Text style={styles.detailValue}>{species.lifespan}</Text>
                      </View>
                    </View>
                    {/* Water Need attribute */}
                    <View style={styles.detailCol}>
                      <Image source={Images.drop} style={styles.detailIcon} resizeMode="contain" />
                      <View style={styles.detailLabelContainer}>
                        <Text style={styles.detailLabel}>Water Need</Text>
                        <Text style={styles.detailValue}>{species.waterNeed}</Text>
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

              <View style={styles.cardDivider} />

              <View style={styles.impactGrid}>
                <View style={styles.impactCol}>
                  <Image source={Images.co2Cloud} style={styles.impactIcon} resizeMode="contain" />
                  <Text style={styles.impactValue}>{selectedSpecies.impact.co2}</Text>
                  <Text style={styles.impactLabel}>CO₂ Absorption (Est.)</Text>
                </View>
                <View style={styles.impactCol}>
                  <Image source={Images.leaf} style={styles.impactIcon} resizeMode="contain" />
                  <Text style={styles.impactValue}>{selectedSpecies.impact.oxygen}</Text>
                  <Text style={styles.impactLabel}>Oxygen Generated</Text>
                </View>
                <View style={styles.impactCol}>
                  <Image source={Images.drop} style={styles.impactIcon} resizeMode="contain" />
                  <Text style={styles.impactValue}>{selectedSpecies.impact.waterSaved}</Text>
                  <Text style={styles.impactLabel}>Water Saved</Text>
                </View>
                <View style={styles.impactCol}>
                  <Image source={Images.globe} style={styles.impactIcon} resizeMode="contain" />
                  <Text style={styles.impactValue}>{selectedSpecies.impact.biodiversity}</Text>
                  <Text style={styles.impactLabel}>Supports Biodiversity</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Sticky Footer Area */}
        <View style={styles.footerContainer}>
          <View style={styles.footerTopRow}>

            {/* Selected Species Summary */}
            <View style={styles.footerSelectedInfo}>
              <Image source={selectedSpecies.image} style={styles.footerThumbnail} resizeMode="cover" />
              <View style={styles.footerTextCol}>
                <Text style={styles.footerLabel}>Selected Species</Text>
                <Text style={styles.footerName}>{selectedSpecies.name}</Text>
              </View>
            </View>

            {/* Action Proceed Button */}
            <TouchableOpacity
              style={styles.proceedButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('DedicateTree', { project, selectedSpecies })}
            >
              <Text style={styles.proceedButtonText}>Proceed to Dedication</Text>
              <Text style={styles.proceedButtonArrow}>→</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ChooseSpeciesScreen;
