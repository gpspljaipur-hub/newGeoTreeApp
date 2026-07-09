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
  Modal,
} from 'react-native';
import { styles } from './styles';
import Images from '../../../constants/images';
import String from '../../../comman/String';
import { Colors } from '../../../comman/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store/Store';
import { stateData } from '../../../api/ApiService';
import Config from '../../../comman/Config';
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
  const dispatch = useDispatch();
  const apiStates = useSelector((state: RootState) => state.state.stateList);

  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState<string>('Name (A-Z)');
  const [filterOption, setFilterOption] = useState<string>('All');

  console.log('apiStates', apiStates)
  React.useEffect(() => {
    stateData(dispatch);
  }, [dispatch]);

  const mappedAllStates = apiStates && apiStates.length > 0
    ? apiStates.map((item: any, idx: number) => ({
      id: item._id?.toString() || idx.toString(),
      name: item.state_name,
      image: item.state_image ? { uri: Config.imageurl + item.state_image } : Images.rajasthan,
      trees: item.tree_count,
      projects: item.project_count,
      description: item.description || 'Forestry Conservation',
      icon: Images.treeIcon,
      species: 'Native Species',
    }))
    : [];

  console.log('mappedAllStates', mappedAllStates)

  let filteredAll = mappedAllStates.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filterOption === 'Has Trees') {
    filteredAll = filteredAll.filter(item => parseInt(item.trees || '0') > 0);
  } else if (filterOption === 'Has Projects') {
    filteredAll = filteredAll.filter(item => parseInt(item.projects || '0') > 0);
  }

  filteredAll = [...filteredAll].sort((a, b) => {
    if (sortOption === 'Name (A-Z)') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'Name (Z-A)') {
      return b.name.localeCompare(a.name);
    } else if (sortOption === 'Highest Trees') {
      return parseInt(b.trees || '0') - parseInt(a.trees || '0');
    } else if (sortOption === 'Highest Projects') {
      return parseInt(b.projects || '0') - parseInt(a.projects || '0');
    }
    return 0;
  });

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
              ><Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTextContainer}>
              <View style={styles.headerTitleRow}>
                <Text style={styles.headerTitle}>{String.ExploreStates_Title}</Text>
              </View>
              <Text style={styles.headerSubtitle}>
                {String.ExploreStates_Subtitle}
              </Text>
            </View>
            <View style={styles.searchContainer}>
              {/* <Image source={Images.geolocation} style={styles.searchIcon} resizeMode="contain" /> */}
              <TextInput
                style={styles.searchInput}
                placeholder={String.ExploreStates_SearchPlaceholder}
                placeholderTextColor={Colors.placeholderColor}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="words"
              />
            </View>
          </ImageBackground>



          {/* Popular States Section */}
          {mappedAllStates.length > 0 && (
            <>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionTitle}>{String.ExploreStates_PopularStates}</Text>
                </View>
              </View>

              <FlatList
                data={mappedAllStates}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.popularStatesList}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.popularCard}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('Statewise', { State: item })}
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
                        {/* <View style={styles.popularArrowBtn}>
                          <Image source={Images.back} style={styles.popularArrowIcon} resizeMode="contain" />
                        </View> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </>
          )}

          {/* All States Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{String.ExploreStates_AllStates}</Text>
            <View style={styles.sortFilterRow}>
              <TouchableOpacity
                style={styles.sortFilterBtn}
                activeOpacity={0.7}
                onPress={() => setSortModalVisible(true)}
              >
                <Image source={Images.sort} style={styles.sortFilterIcon} resizeMode="contain" />
                <Text style={styles.sortFilterText}>{String.ExploreStates_Sort}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sortFilterBtn}
                activeOpacity={0.7}
                onPress={() => setFilterModalVisible(true)}
              >
                <Image source={Images.filter} style={styles.sortFilterIcon} resizeMode="contain" />
                <Text style={styles.sortFilterText}>{String.ExploreStates_Filter}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.allStatesList}>
            {filteredAll.map((item) => (
              <TouchableOpacity key={item.id} style={styles.allCard} onPress={() => navigation.navigate('Statewise', { State: item })}>
                <View style={styles.allCardImageContainer}>
                  <Image source={item.image} style={styles.allCardImage} resizeMode="cover" />

                  {/* {item.icon && (
                    <View style={styles.overlapIconContainer}>
                      <Image source={item.icon} style={styles.overlapIcon} resizeMode="contain" />
                    </View>
                  )} */}
                </View>

                <View style={styles.allCardContent}>
                  <View style={styles.allCardTitleRow}>
                    <Text style={styles.allCardTitle}>{item.name}</Text>
                    <View style={{ position: 'absolute', right: 0, top: 2, flexDirection: 'column', alignItems: 'center', }}>
                      <View style={styles.treeBadge}>
                        <Text style={styles.treeBadgeText}>{item.trees}</Text>
                      </View>
                      <Text style={styles.treeBadgeDesc}>{String.Dashboard_TreesSuffix}</Text>
                    </View>
                  </View>

                  <View style={styles.allCardProjectsRow}>
                    <Image source={Images.folder} style={styles.allCardFolderIcon} resizeMode="contain" />
                    <Text style={styles.allCardProjectsText}>
                      {item.projects} {String.ExploreStates_ProjectsAvailable}
                    </Text>
                  </View>

                  <Text style={styles.speciesLabel}>
                    <Text style={styles.speciesHighlight}>{item.description}</Text>
                  </Text>


                  {/* <View style={styles.allCardDivider} /> */}

                  {/* <TouchableOpacity
                    style={styles.exploreBtn}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Statewise', { stateName: item.name })}
                  >
                    <Text style={styles.exploreBtnText}>{String.ExploreStates_Explore}</Text>
                  </TouchableOpacity> */}
                </View>
              </TouchableOpacity>
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
                {String.ExploreStates_BannerTextMain}
              </Text>
              <Text style={styles.bannerTextSub}>
                {String.ExploreStates_BannerTextSub}
              </Text>
              <Text style={styles.bannerTextDesc}>
                {String.ExploreStates_BannerTextDesc}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Sort Modal */}
      <Modal
        visible={sortModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSortModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{String.ExploreStates_Sort || 'Sort By'}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setSortModalVisible(false)}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            {['Name (A-Z)', 'Name (Z-A)', 'Highest Trees', 'Highest Projects'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.optionRow}
                onPress={() => {
                  setSortOption(option);
                  setSortModalVisible(false);
                }}
              >
                <Text style={[styles.optionText, sortOption === option && styles.optionSelectedText]}>
                  {option}
                </Text>
                <View style={[styles.radioButton, sortOption === option && styles.radioButtonSelected]}>
                  {sortOption === option && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      {/* Filter Modal */}
      <Modal
        visible={filterModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{String.ExploreStates_Filter || 'Filter By'}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setFilterModalVisible(false)}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            {['All', 'Has Trees', 'Has Projects'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.optionRow}
                onPress={() => {
                  setFilterOption(option);
                  setFilterModalVisible(false);
                }}
              >
                <Text style={[styles.optionText, filterOption === option && styles.optionSelectedText]}>
                  {option}
                </Text>
                <View style={[styles.radioButton, filterOption === option && styles.radioButtonSelected]}>
                  {filterOption === option && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ExploreStatesScreen;
