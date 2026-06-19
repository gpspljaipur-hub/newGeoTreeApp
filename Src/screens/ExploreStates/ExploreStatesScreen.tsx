import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import { styles } from './styles';
import Images from '../../constants/images';
import String from '../../comman/String';
import { Colors } from '../../comman/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
interface StateItem {
  id: string;
  name: string;
  image: any;
  trees: string;
  projects: string;
  tag?: string;
  icon?: any;
  species?: string;
}

const ExploreStatesScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const POPULAR_STATES: StateItem[] = [
    {
      id: '1',
      name: 'Rajasthan',
      image: Images.rajasthan,
      trees: '1.2M+ Trees',
      projects: '25 Projects',
    },
    {
      id: '2',
      name: 'Uttarakhand',
      image: Images.uttarakhand,
      trees: '850K+ Trees',
      projects: '18 Projects',
    },
    {
      id: '3',
      name: 'Karnataka',
      image: Images.karnataka,
      trees: '650K+ Trees',
      projects: '20 Projects',
    },
    {
      id: '4',
      name: 'Maharashtra',
      image: Images.maharashtra,
      trees: '1M+ Trees',
      projects: '22 Projects',
    },
  ];

  const ALL_STATES: StateItem[] = [
    {
      id: '1',
      name: 'Rajasthan',
      image: Images.rajasthan,
      trees: '1.2M+',
      projects: '25',
      tag: 'Desert Restoration',
      icon: Images.treeIcon,
      species: 'Neem • Khejri ',
    },
    {
      id: '2',
      name: 'Uttarakhand',
      image: Images.uttarakhand,
      trees: '850K+',
      projects: '18',
      tag: 'Himalayan Conservation',
      icon: Images.treeIcon,
      species: 'Deodar • Pine',
    },
    {
      id: '3',
      name: 'Karnataka',
      image: Images.karnataka,
      trees: '650K+',
      projects: '20',
      tag: 'Urban Forestry',
      icon: Images.treeIcon,
      species: 'Neem • Peepal',
    },
    {
      id: '4',
      name: 'Tamil Nadu',
      image: Images.tamil_nadu,
      trees: '700K+',
      projects: '15',
      tag: 'Coastal Plantation',
      icon: Images.treeIcon,
      species: 'Pungan • Casuarina',
    },
    {
      id: '5',
      name: 'Gujarat',
      image: Images.project_aravalli,
      trees: '600K+',
      projects: '14',
      tag: 'Green Corridors',
      icon: Images.treeIcon,
      species: 'Neem • Babul',
    },
    {
      id: '6',
      name: 'Kerala',
      image: Images.project_himalayas,
      trees: '500K+',
      projects: '13',
      tag: 'Rainforest Restoration',
      icon: Images.treeIcon,
      species: 'Teak • Rosewood',
    },
  ];

  const filteredPopular = POPULAR_STATES.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAll = ALL_STATES.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={Images.detailbg}
            style={styles.headerBackground}
            // imageStyle={styles.headerImageStyle}
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

            <View style={styles.headerTextContainer}>
              <View style={styles.headerTitleRow}>
                <Text style={styles.headerTitle}>Explore Plantation {'\n'}States</Text>
              </View>
              <Text style={styles.headerSubtitle}>
                Choose a state and discover verified plantation projects.
              </Text>
            </View>
            <View style={styles.searchContainer}>
              <Image source={Images.geolocation} style={styles.searchIcon} resizeMode="contain" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search State"
                placeholderTextColor={Colors.placeholderColor}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="words"
              />
            </View>
          </ImageBackground>



          {/* Popular States Section */}
          {filteredPopular.length > 0 && (
            <>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionTitle}>Popular States</Text>
                </View>
              </View>

              <FlatList
                data={filteredPopular}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.popularStatesList}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.popularCard}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('Statewise', { stateName: item.name })}
                  >
                    <Image source={item.image} style={styles.popularCardImage} resizeMode="cover" />
                    <View style={styles.popularCardContent}>
                      <View style={styles.popularStatRow}>
                        <Image source={Images.location} style={styles.popularStatIcon} resizeMode="contain" />
                        <Text style={[styles.popularCardName, { marginBottom: 0 }]} numberOfLines={1}>
                          {item.name}
                        </Text>
                      </View>
                      <View style={styles.popularStatRow}>
                        <Image source={Images.treeIcon} style={styles.popularStatIcon} resizeMode="contain" />
                        <Text style={styles.popularStatValue} numberOfLines={1}>
                          {item.trees}
                        </Text>
                      </View>
                      <View style={styles.popularActionRow}>
                        <View style={styles.popularStatRow}>
                          <Image source={Images.folder} style={styles.popularStatIcon} resizeMode="contain" />
                          <Text style={styles.popularStatText} numberOfLines={1}>
                            {item.projects}
                          </Text>
                        </View>
                        <View style={styles.popularArrowBtn}>
                          <Image source={Images.back} style={styles.popularArrowIcon} resizeMode="contain" />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </>
          )}

          {/* All States Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All States</Text>
            <View style={styles.sortFilterRow}>
              <TouchableOpacity style={styles.sortFilterBtn} activeOpacity={0.7}>
                <Image source={Images.sort} style={styles.sortFilterIcon} resizeMode="contain" />
                <Text style={styles.sortFilterText}>Sort</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortFilterBtn} activeOpacity={0.7}>
                <Image source={Images.filter} style={styles.sortFilterIcon} resizeMode="contain" />
                <Text style={styles.sortFilterText}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.allStatesList}>
            {filteredAll.map((item) => (
              <View key={item.id} style={styles.allCard}>
                <View style={styles.allCardImageContainer}>
                  <Image source={item.image} style={styles.allCardImage} resizeMode="cover" />
                  {item.tag && (
                    <View style={styles.tagBadge}>
                      <Text style={styles.tagBadgeText}>{item.tag}</Text>
                    </View>
                  )}
                  {item.icon && (
                    <View style={styles.overlapIconContainer}>
                      <Image source={item.icon} style={styles.overlapIcon} resizeMode="contain" />
                    </View>
                  )}
                </View>

                <View style={styles.allCardContent}>
                  <View style={styles.allCardTitleRow}>
                    <Text style={styles.allCardTitle}>{item.name}</Text>
                    <View style={{ position: 'absolute', right: 0, top: 2, flexDirection: 'column', alignItems: 'center', }}>
                      <View style={styles.treeBadge}>
                        <Text style={styles.treeBadgeText}>{item.trees}</Text>
                      </View>
                      <Text style={styles.treeBadgeDesc}>Trees</Text>
                    </View>
                  </View>

                  <View style={styles.allCardProjectsRow}>
                    <Image source={Images.folder} style={styles.allCardFolderIcon} resizeMode="contain" />
                    <Text style={styles.allCardProjectsText}>
                      {item.projects} Projects Available
                    </Text>
                  </View>

                  {item.species && (
                    <Text style={styles.speciesLabel}>
                      Species: <Text style={styles.speciesHighlight}>{item.species}</Text>
                    </Text>
                  )}

                  <View style={styles.allCardDivider} />

                  <TouchableOpacity
                    style={styles.exploreBtn}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Statewise', { stateName: item.name })}
                  >
                    <Text style={styles.exploreBtnText}>Explore</Text>
                    <Text style={styles.exploreBtnArrow}>→</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Bottom Banner */}
          <View style={styles.bottomBanner}>
            <Image
              source={Images.selectfootertree}
              style={styles.bannerLeftIcon}
            />
            <View style={styles.bannerLeftCol}>
              <Text style={styles.bannerTextMain}>
                Every state. Every tree.
              </Text>
              <Text style={styles.bannerTextSub}>
                Every action counts.
              </Text>
              <Text style={styles.bannerTextDesc}>
                Your small step today creates a {'\n'} greener tomorrow.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreStatesScreen;
