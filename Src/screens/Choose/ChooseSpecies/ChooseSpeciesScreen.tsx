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
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Images from '../../../constants/images';
import { Colors } from '../../../comman/Colors';
import String from '../../../comman/String';

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
      name: String.ChooseSpecies_NeemName,
      scientificName: 'Azadirachta indica',
      image: Images.neem_tree,
      co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '22'),
      lifespan: String.ChooseSpecies_LifespanVal.replace('{{count}}', '100+'),
      waterNeed: String.ChooseSpecies_WaterLow,
      impact: {
        co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '22'),
        oxygen: String.ChooseSpecies_OxygenVal.replace('{{count}}', '160'),
        waterSaved: String.ChooseSpecies_WaterSavedVal.replace('{{count}}', '1,000+'),
        biodiversity: String.ChooseSpecies_BioHigh,
      },
    },
    {
      id: 'khejri',
      name: String.ChooseSpecies_KhejriName,
      scientificName: 'Prosopis cineraria',
      image: Images.peepal_tree,
      co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '18'),
      lifespan: String.ChooseSpecies_LifespanVal.replace('{{count}}', '80+'),
      waterNeed: String.ChooseSpecies_WaterVeryLow,
      impact: {
        co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '18'),
        oxygen: String.ChooseSpecies_OxygenVal.replace('{{count}}', '130'),
        waterSaved: String.ChooseSpecies_WaterSavedVal.replace('{{count}}', '1,200+'),
        biodiversity: String.ChooseSpecies_BioVeryHigh,
      },
    },
    {
      id: 'rohida',
      name: String.ChooseSpecies_RohidaName,
      scientificName: 'Tecomella undulata',
      image: Images.mango_tree,
      co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '16'),
      lifespan: String.ChooseSpecies_LifespanVal.replace('{{count}}', '70+'),
      waterNeed: String.ChooseSpecies_WaterLow,
      impact: {
        co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '16'),
        oxygen: String.ChooseSpecies_OxygenVal.replace('{{count}}', '115'),
        waterSaved: String.ChooseSpecies_WaterSavedVal.replace('{{count}}', '950+'),
        biodiversity: String.ChooseSpecies_BioHigh,
      },
    },
    {
      id: 'amla',
      name: String.ChooseSpecies_AmlaName,
      scientificName: 'Phyllanthus emblica',
      image: Images.gulmohar_tree,
      co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '14'),
      lifespan: String.ChooseSpecies_LifespanVal.replace('{{count}}', '60+'),
      waterNeed: String.ChooseSpecies_WaterLow,
      impact: {
        co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '14'),
        oxygen: String.ChooseSpecies_OxygenVal.replace('{{count}}', '100'),
        waterSaved: String.ChooseSpecies_WaterSavedVal.replace('{{count}}', '800+'),
        biodiversity: String.ChooseSpecies_BioHigh,
      },
    },
    {
      id: 'babul',
      name: String.ChooseSpecies_BabulName,
      scientificName: 'Vachellia nilotica',
      image: Images.neem_tree,
      co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '12'),
      lifespan: String.ChooseSpecies_LifespanVal.replace('{{count}}', '50+'),
      waterNeed: String.ChooseSpecies_WaterVeryLow,
      impact: {
        co2: String.ChooseSpecies_OxygenVal.replace('{{count}}', '12'),
        oxygen: String.ChooseSpecies_OxygenVal.replace('{{count}}', '90'),
        waterSaved: String.ChooseSpecies_WaterSavedVal.replace('{{count}}', '700+'),
        biodiversity: String.ChooseSpecies_BioHigh,
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
                  <Text style={styles.headerTitle}>{String.ChooseSpecies_Title}</Text>
                </View>
                <View style={styles.headerSubtitleRow}>
                  <Text style={styles.headerSubtitle}>{String.ChooseSpecies_Subtitle}</Text>
                  <Text style={styles.projectHighlight}>{projectName}, {projectCity.split(',')[0]}  </Text>
                </View>

                <View style={styles.gpsBadge}>
                  <Image source={Images.shield} style={styles.gpsIcon} resizeMode="contain" />
                  <Text style={styles.gpsText}>{String.ChooseSpecies_GpsVerified}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* Floating Quick Stats Card */}
          <View style={styles.quickStatsContainer}>
            <View style={styles.quickStatCol}>
              <Image source={Images.treeIcon} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{treesPlantedText}</Text>
              <Text style={styles.quickStatLabel}>{String.Home_StatsTreesLabel}</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.soiltype} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{areaCoveredVal}</Text>
              <Text style={styles.quickStatLabel}>{String.ChooseSpecies_AcresCovered}</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.verified} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{survivalRateText}</Text>
              <Text style={styles.quickStatLabel}>{String.AppOpening_SurvivalRate}</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatCol}>
              <Image source={Images.calendar} style={styles.quickStatIcon} resizeMode="contain" />
              <Text style={styles.quickStatValue}>{projectSinceText}</Text>
              <Text style={styles.quickStatLabel}>{String.ProjectSelect_ProjectSince}</Text>
            </View>
          </View>

          {/* Available Species Section */}
          <View style={styles.listSection}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>{String.ChooseSpecies_AvailableTitle}</Text>
            </View>
            <Text style={styles.listSubtitle}>{String.ChooseSpecies_AvailableSubtitle}</Text>

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
                          <Text style={styles.nativeText}>{String.ChooseSpecies_NativeTag}</Text>
                        </View>
                      </View>

                      {/* Attribute columns row */}
                      <View style={styles.cardBottomRow}>
                        <View style={styles.detailCol}>
                          <View style={styles.detailLabelContainer}>
                            <Image source={Images.co2Cloud} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailLabel}>{String.CO2AbsorptionLabel}</Text>
                            <Text style={styles.detailValue}>{species.co2}</Text>
                          </View>
                        </View>
                        <View style={styles.detailCol}>
                          <View style={styles.detailLabelContainer}>
                            <Image source={Images.maintaince} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailLabel}>{String.ChooseSpecies_Lifespan}</Text>
                            <Text style={styles.detailValue}>{species.lifespan}</Text>
                          </View>
                        </View>

                        <View style={styles.detailCol}>
                          <View style={styles.detailLabelContainer}>
                            <Image source={Images.drop} style={styles.detailIcon} resizeMode="contain" />
                            <Text style={styles.detailLabel}>{String.ChooseSpecies_WaterNeed}</Text>
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
                <Text style={styles.impactTitle}>{String.ChooseSpecies_ImpactTitle}</Text>
                <Image source={Images.leaf} style={styles.headerTitleLeaf} resizeMode="contain" />
              </View>
              <Text style={styles.impactSubtitle}>{String.ChooseSpecies_ImpactSubtitle}</Text>

              <View style={styles.impactGrid}>
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.co2Cloud} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>{String.ProjectSelect_Co2OffsetEst}</Text>
                  <Text style={styles.impactValue}>{selectedSpecies.impact.co2}</Text>
                </View>
                <View style={styles.impactDivider} />
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.leaf} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>{String.ChooseSpecies_OxygenGenerated}</Text>
                  <Text style={styles.impactValue}>{selectedSpecies.impact.oxygen}</Text>
                </View>
                <View style={styles.impactDivider} />
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBgDrop}>
                    <Image source={Images.drop} style={styles.impactIconDrop} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>{String.ChooseSpecies_WaterSaved}</Text>
                  <Text style={styles.impactValue}>{selectedSpecies.impact.waterSaved}</Text>
                </View>
                <View style={styles.impactDivider} />
                <View style={styles.impactCol}>
                  <View style={styles.impactIconBg}>
                    <Image source={Images.bird} style={styles.impactIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.impactLabel}>{String.ChooseSpecies_SupportsBiodiversity}</Text>
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
                <Text style={styles.footerLabel}>{String.ChooseSpecies_SelectedLabel}</Text>
                <Text style={styles.footerName}>{selectedSpecies.name}</Text>
                <Text style={styles.footerScientific}>{selectedSpecies.scientificName}</Text>
                <TouchableOpacity
                  style={styles.footerChangeBtn}
                  activeOpacity={0.7}
                  onPress={() => {
                    // Action to trigger change
                  }}
                >
                  <Text style={styles.footerChangeText}>{String.ChooseSpecies_ChangeBtn}</Text>
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
                <Text style={styles.proceedButtonText}>{String.ChooseSpecies_ProceedBtn}</Text>
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
