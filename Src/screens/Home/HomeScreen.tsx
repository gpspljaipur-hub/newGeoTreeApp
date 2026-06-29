import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import { styles } from './styles';
import Images from '../../constants/images';
import String from '../../comman/String';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../comman/GradientText';
import { Colors } from '../../comman/Colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/Store/Store';
import { categoryData, stateData } from '../../api/ApiService';
import Config from '../../comman/Config';
import { Get_Api } from '../../redux/userapi/Requests';
import ApiUrl from '../../Lib/ApiUrl';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.category.categoryList);
  const apiStates = useSelector((state: RootState) => state.state.stateList);
  const [projectSite, setProjectSite] = React.useState<any[]>([]);
  const [selectedState, setSelectedState] = React.useState('1');
  const [dashboardDetails, setDashboardDetails] = React.useState<any>(null);

  const mappedStatesList = apiStates && apiStates.length > 0
    ? apiStates.map((item: any, idx: number) => ({
      id: item._id?.toString() || idx.toString(),
      name: item.state_name,
      image: item.state_image ? { uri: Config.imageurl + item.state_image } : Images.rajasthan,
    }))
    : [];

  React.useEffect(() => {
    categoryData(dispatch);
    stateData(dispatch);
    SiteGetApi();
    DashboardGetApi();
  }, [dispatch]);


  const SiteGetApi = async () => {
    try {
      const response: any = await (dispatch as any)(Get_Api(ApiUrl.all_site_list));
      console.log("response all_site_list", response?.data)
      setProjectSite(response?.data || []);
    } catch {
      // ignore
    }
  };

  const DashboardGetApi = async () => {
    try {
      const response: any = await (dispatch as any)(Get_Api(ApiUrl.DESHBORD_DETAILS));
      console.log("response DESHBORD_DETAILS", response);
      setDashboardDetails(response?.data || null);
    } catch {
      // ignore
    }
  };



  console.log('categoryList in HomeScreen:', categoryList);

  const CategoryHandle = (item: any) => {
    console.log("item: ", item)
  };

  return (
    <ImageBackground
      source={Images.HomeBg}
      style={styles.heroImage}
      resizeMode='cover'
    >

      <View style={styles.header}>
        <Image
          source={Images.logoGeotree}
          style={styles.headerLogoGeotree}
          resizeMode='cover'
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Image source={Images.bell} style={styles.iconImg} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7} onPress={() => navigation.navigate('Setting')}>
            <Image source={Images.settings} style={styles.iconImg} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.heroContainer}>

          <View style={styles.heroTextContent}>
            <GradientText
              colors={['#22391f', '#22391f', '#22391f']}
              style={styles.heroTitleGreen} >
              {String.Home_HeroTitleLeft}
            </GradientText>
            <GradientText
              colors={['#27702d', '#4f902d', '#4a8d21', '#68a212']}
              style={styles.heroTitleGreen} >
              {String.Home_HeroTitleHighlight}
            </GradientText>
            <GradientText
              colors={['#27702d', '#4f902d', '#4a8d21', '#68a212']}
              style={styles.heroTitleGreen}
            >
              {String.Home_HeroTitleRight}
            </GradientText>

            <Text style={styles.heroSubtitle}>
              {String.Home_HeroSubtitleLeft}
              <Text style={styles.heroSubtitleHighlight}>{String.Home_HeroSubtitleHighlight}</Text>
              {String.Home_HeroSubtitleRight}
            </Text>
          </View>

          <View style={styles.heroButtonRow}>
            {/* Plant your first tree button */}
            <TouchableOpacity onPress={() => navigation.navigate('ChooseTreeScreen')} activeOpacity={0.85}>
              <LinearGradient
                colors={['#27702d', '#4a8d21', '#68a212']}
                style={styles.heroBtnGreenGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Image source={Images.plant_img} style={{ width: 18, height: 18, marginRight: 8 }} resizeMode="contain" />
                <Text style={styles.heroBtnTextWhite}>{String.Home_BtnPlantFirstTree}</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Carbon Calculator button */}
            <TouchableOpacity style={styles.heroBtnWhite} activeOpacity={0.9} onPress={() => navigation.navigate('CalculateCarbon')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Images.carbon_img} style={{ width: 18, height: 18, marginRight: 8 }} resizeMode="contain" />
                <View>
                  <Text style={styles.heroBtnTextDark}>{String.Home_BtnCarbonCalculator}</Text>
                  <Text style={styles.heroBtnSubtext}>{String.Home_BtnCarbonCalculatorSub}</Text>
                </View>
              </View>

            </TouchableOpacity>
          </View>
        </View>

        {/* Select State Section */}


        <View style={styles.statsCard}>
          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.treeIcon} style={styles.statsIcon} tintColor={Colors.tintColorDrak} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>
              {dashboardDetails?.impact?.trees_planted !== undefined
                ? dashboardDetails.impact.trees_planted.toString()
                : String.Home_StatsTreesVal}
            </Text>
            <Text style={styles.statsLabel}>{String.Home_StatsTreesLabel}</Text>
          </View>

          <View style={styles.statsDivider} />

          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.Emission} style={styles.statsIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>
              {dashboardDetails?.impact?.carbon_offset_tonnes !== undefined
                ? `${dashboardDetails.impact.carbon_offset_tonnes} T`
                : String.Home_StatsCO2Val}
            </Text>
            <Text style={styles.statsLabel}>{String.Home_StatsCO2Label}</Text>
          </View>

          <View style={styles.statsDivider} />

          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.group} style={styles.statsIcon} tintColor={Colors.tintColorDrak} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>
              {dashboardDetails?.users?.total !== undefined
                ? dashboardDetails.users.total.toString()
                : String.Home_StatsUsersVal}
            </Text>
            <Text style={styles.statsLabel}>{String.Home_StatsUsersLabel}</Text>
          </View>

          <View style={styles.statsDivider} />

          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.Location} style={styles.statsIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>
              {dashboardDetails?.impact?.state_wise?.length !== undefined
                ? dashboardDetails.impact.state_wise.length.toString()
                : String.Home_StatsStatesVal}
            </Text>
            <Text style={styles.statsLabel}>{String.Home_StatsStatesLabel}</Text>
          </View>
        </View>

        <View style={styles.stateSectionContainer}>
          <View style={styles.stateHeaderRow}>
            <View style={styles.stateTitleContainer}>
              <Text style={styles.stateSectionTitle}>{String.Home_SelectStateTitle}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.viewAllStatesContainer} onPress={() => navigation.navigate('ExploreStates')}>
              <Text style={styles.viewAllStatesLink}>{String.Home_ViewAllStates}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={mappedStatesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.statesListScroll}
            renderItem={({ item }) => {
              const isSelected = selectedState === item.id;
              return (
                <TouchableOpacity
                  style={[styles.stateCard, isSelected && styles.stateCardSelected]}
                  activeOpacity={0.9}
                  onPress={() => {
                    setSelectedState(item.id);
                    navigation.navigate('Statewise', { stateName: item.name });
                  }}
                >
                  <Image source={item.image} style={styles.stateCardImage} resizeMode="cover" />
                  <View style={styles.stateCardFooter}>
                    <Text style={[styles.stateCardName, isSelected && styles.stateCardNameSelected]}>
                      {item.name}
                    </Text>

                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Horizontal Quick Actions List */}
        <View style={styles.stateSectionContainer}>
          <View style={styles.stateHeaderRow}>
            <View style={styles.stateTitleContainer}>
              <Text style={styles.stateSectionTitle}>{String.HomeCatgroyTitle}</Text>
            </View>

          </View>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.quickActionsScroll}
            renderItem={({ item }: any) => (
              <TouchableOpacity
                style={styles.quickActionCard}
                activeOpacity={0.9}
                onPress={() => {
                  CategoryHandle(item)
                }}
              >
                <Image source={{ uri: Config.imageurl + item?.category_image }} style={styles.cardImage} resizeMode='cover' />
                <View style={{ paddingHorizontal: 10, marginBottom: 12, }}>
                  <Text style={styles.cardTitle}>{item?.name}</Text>
                  <View style={styles.cardFooterRow}>
                    <Text numberOfLines={1} style={styles.cardSubtitle}>{item?.type}</Text>
                    <View style={styles.cardCircleArrow}>
                      <Text style={styles.cardArrowIcon}>→</Text>
                    </View>
                  </View>
                </View>

              </TouchableOpacity>
            )}
          />
        </View>

        {/* Featured Projects Header */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>{String.Home_SectionTitle} </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ExploreStates')}>
            <Text style={styles.viewAllLink}>{String.Home_ViewAll}</Text>
          </TouchableOpacity>
        </View>

        {/* Projects Horizontal List */}
        {projectSite.length > 0 ?
          <FlatList
            data={projectSite}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, idx) => item._id?.toString() || item.id || idx.toString()}
            style={styles.projectsScroll}
            contentContainerStyle={{ paddingRight: 30 }}
            renderItem={({ item }) => {
              const title = item.site_name || item.site_name || item.site_name || 'Project';
              const location = item.state_id?.state_name || item.location || 'Rajasthan';
              const badge = item.plantation_type || 'Restoration';
              const image = item.site_image
                ? { uri: Config.imageurl + item.site_image }
                : (item.image || Images.project_aravalli);

              return (
                <TouchableOpacity
                  style={styles.projectCard}
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('Statewise', { stateName: location })}
                >
                  <View style={styles.projectImgContainer}>
                    <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.projectImage} resizeMode="cover" />
                    <View style={styles.projectBadge}>
                      <Text style={styles.projectBadgeText}>{badge}</Text>
                    </View>
                  </View>
                  <View style={styles.projectInfo}>
                    <Text style={styles.projectTitle} numberOfLines={1}>{title}</Text>
                    <View style={styles.projectLocationRow}>
                      <Image source={Images.location} style={styles.projectLocationIcon} resizeMode="contain" />
                      <Text style={styles.projectLocation} numberOfLines={1}>{location}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          /> : null}

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
        </View>

        {/* Bottom Banner Section */}

        <View style={styles.bottomBanner}>
          <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={Images.handtree}
              style={styles.bannerImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.bannerContent}>
            <View style={{ left: 20, }}>
              <Text style={styles.bannerTitle}>{String.Home_BannerSubtitle}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 2 }}>
                {String.Home_BannerTitleLeft ? (
                  <Text style={[styles.bannerTitleBold, { marginTop: 0 }]}>
                    {String.Home_BannerTitleLeft}
                  </Text>
                ) : null}
                <GradientText
                  colors={['#27702d', '#4f902d', '#4a8d21', '#68a212']}
                  style={[styles.bannerTitleBold, { marginTop: 0 }]}
                >
                  {String.Home_BannerTitleHighlight}
                </GradientText>
                {String.Home_BannerTitleRight ? (
                  <Text style={[styles.bannerTitleBold, { marginTop: 0 }]}>
                    {String.Home_BannerTitleRight}
                  </Text>
                ) : null}
              </View>
            </View>


            <View style={styles.bannerRow}>
              <View style={styles.bannerItem}>
                <Image source={Images.leaf} style={styles.bannerIcon} resizeMode="contain" />
                <Text style={styles.bannerText}>{String.Home_BannerItemAir}</Text>
              </View>
              <View style={styles.bannerDivider} />
              <View style={styles.bannerItem}>
                <Image source={Images.globe} style={styles.bannerIcon} resizeMode="contain" />
                <Text style={styles.bannerText}>{String.Home_BannerItemPlanet}</Text>
              </View>
              <View style={styles.bannerDivider} />
              <View style={styles.bannerItem}>
                <Image source={Images.bird} style={styles.bannerIcon} resizeMode="contain" />
                <Text style={styles.bannerText}>{String.Home_BannerItemTomorrow}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
