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
import { RootStackParamList } from '../../navigation/RootNavigator';
import { styles } from './styles';
import Images from '../../constants/images';
import String from '../../comman/String';
import { SafeAreaView } from 'react-native-safe-area-context';

const STATES_DATA = [
  {
    id: 'rajasthan',
    name: String.Home_ProjRajasthan,
    popular: true,
    treesPlanted: '1.2M+',
    activeProjects: '25+',
    image: Images.rajasthan,
  },
  {
    id: 'uttarakhand',
    name: String.Home_ProjUttarakhand,
    popular: false,
    treesPlanted: '850K+',
    activeProjects: '18+',
    image: Images.uttarakhand,
  },
  {
    id: 'karnataka',
    name: String.Home_ProjKarnataka,
    popular: false,
    treesPlanted: '650K+',
    activeProjects: '20+',
    image: Images.karnataka,
  },
  {
    id: 'tamil_nadu',
    name: String.Home_ProjTamilNadu,
    popular: false,
    treesPlanted: '420K+',
    activeProjects: '15+',
    image: Images.tamil_nadu,
  },
  {
    id: 'maharashtra',
    name: String.Home_ProjMaharashtra,
    popular: false,
    treesPlanted: '500K+',
    activeProjects: '12+',
    image: Images.maharashtra,
  },
];

const StateScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedStateId, setSelectedStateId] = useState('rajasthan');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    console.log('Selected State:', selectedStateId);
    // Move forward in flow
    navigation.navigate('ChooseTree');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {/* Hero Banner Background Wrapping Header & Hero Section */}
        <ImageBackground
          source={Images.StateBg}
          style={styles.heroImage}
          resizeMode="cover"
        >
          {/* Header Row */}
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.7}>
              <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
            </TouchableOpacity>

            {/* <View style={styles.coinBadge}>
              <Text style={styles.coinEmoji}>🪙</Text>
              <View style={styles.coinTextContainer}>
                <Text style={styles.coinAmount}>1,250</Text>
                <Text style={styles.coinLabel}>Green Points</Text>
              </View>
            </View> */}
          </View>

          {/* Hero Section */}
          <View style={styles.heroRow}>
            <View style={styles.heroLeft}>
              <Text style={styles.titleText}>
                {String.State_TitlePart1}
                <Text style={styles.highlightGreen}>{String.State_TitlePart2}</Text>
              </Text>
              <Text style={styles.subtitleText}>{String.State_Subtitle}</Text>
            </View>

          </View>
        </ImageBackground>

        {/* Why select a state? Banner */}
        <View style={{ flex: 1, top: -40 }}>


          <View style={styles.whyCard}>
            <View style={styles.whyIconBg}>
              <Image source={Images.geolocation} style={styles.whyPinIcon} resizeMode="contain" />
            </View>
            <View style={styles.whyTextContent}>
              <Text style={styles.whyTitle}>{String.State_WhySelectTitle}</Text>
              <Text style={styles.whyDesc}>{String.State_WhySelectDesc}</Text>
            </View>
            <Image source={Images.nature} style={styles.whyLeafIcon} resizeMode="contain" />
          </View>

          {/* Select State Section Header */}
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleCol}>
              <Text style={styles.sectionTitle}>{String.State_SelectYourState}</Text>
              <Text style={styles.sectionSubtitle}>{String.State_ExploreAcrossIndia}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllLink}>{String.Home_ViewAllStates} &gt;</Text>
            </TouchableOpacity>
          </View>

          {/* Grid List of States */}
          <View style={styles.gridContainer}>
            {STATES_DATA.map((state) => {
              const isSelected = selectedStateId === state.id;
              return (
                <TouchableOpacity
                  key={state.id}
                  style={[styles.stateCard, isSelected && styles.stateCardSelected]}
                  onPress={() => setSelectedStateId(state.id)}
                  activeOpacity={0.9}
                >
                  <View style={styles.imageWrapper}>
                    <Image source={state.image} style={styles.stateImage} resizeMode="cover" />
                    <View style={[styles.checkIndicator, isSelected && styles.checkIndicatorSelected]}>
                      {isSelected && <Text style={styles.checkText}>✓</Text>}
                    </View>
                  </View>

                  <View style={styles.cardContent}>
                    <View style={styles.nameRow}>
                      <Text style={[styles.stateName, isSelected && styles.stateNameSelected]}>
                        {state.name}
                      </Text>
                      {state.popular && (
                        <View style={styles.popularBadge}>
                          <Text style={styles.popularText}>{String.State_Popular}</Text>
                        </View>
                      )}
                    </View>

                    <View style={styles.statItemRow}>
                      <Image source={Images.tree} style={styles.statIcon} resizeMode="contain" tintColor="#1E6B46" />
                      <Text style={styles.statText}>{state.treesPlanted} {String.State_TreesPlantedSuffix}</Text>
                    </View>

                    <View style={styles.statItemRow}>
                      <Image source={Images.geolocation} style={styles.statIcon} resizeMode="contain" tintColor="#1E6B46" />
                      <Text style={styles.statText}>{state.activeProjects} {String.State_ActiveProjectsSuffix}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Info Banner near Bottom */}
          <View style={styles.infoBanner}>
            <View style={styles.infoLeftSection}>
              <Image source={Images.plant} style={styles.infoPinIcon} resizeMode="contain" />
              <Text style={styles.infoText}>{String.State_BottomInfo}</Text>
            </View>
            <Image source={Images.handtree} style={styles.infoHandImage} resizeMode="cover" />
          </View>

          {/* Continue Action Button */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueText}>{String.State_Continue}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StateScreen;
