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

const HomeScreen = () => {
  const QUICK_ACTIONS = [
    {
      id: '1',
      title: String.Home_QuickPlantTitle,
      subtitle: String.Home_QuickPlantSubtitle,
      image: Images.handtree,
    },
    {
      id: '2',
      title: String.Home_QuickGiftTitle,
      subtitle: String.Home_QuickGiftSubtitle,
      image: Images.gift_tree,
    },
    {
      id: '3',
      title: String.Home_QuickCarbonTitle,
      subtitle: String.Home_QuickCarbonSubtitle,
      image: Images.carbon_cal,
    },
    {
      id: '4',
      title: String.Home_QuickSponsorTitle,
      subtitle: String.Home_QuickSponsorSubtitle,
      image: Images.sponsor_plant,
    },
  ];

  const FEATURED_PROJECTS = [
    {
      id: '1',
      title: String.Home_ProjAravalliTitle,
      badge: String.Home_ProjBadgeRestoration,
      location: String.Home_ProjRajasthan,
      image: Images.project_aravalli,
    },
    {
      id: '2',
      title: String.Home_ProjJaipurTitle,
      badge: String.Home_ProjBadgeUrban,
      location: String.Home_ProjRajasthan,
      image: Images.project_jaipur,
    },
    {
      id: '3',
      title: String.Home_ProjHimalayasTitle,
      badge: String.Home_ProjBadgeHimalayan,
      location: String.Home_ProjUttarakhand,
      image: Images.project_himalayas,
    },
  ];

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
            <Image source={Images.notification} style={styles.iconImg} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
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
            <TouchableOpacity  >
              <LinearGradient
                colors={['#27702d', '#4a8d21', '#68a212']}
                style={styles.heroBtnGreenGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={{ fontSize: 16, marginRight: 8 }}>🌱</Text>
                <Text style={styles.heroBtnTextWhite}>{String.Home_BtnPlantFirstTree}</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Carbon Calculator button */}
            <TouchableOpacity style={styles.heroBtnWhite} activeOpacity={0.9}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, marginRight: 8 }}>🍃</Text>
                <View>
                  <Text style={styles.heroBtnTextDark}>{String.Home_BtnCarbonCalculator}</Text>
                  <Text style={styles.heroBtnSubtext}>{String.Home_BtnCarbonCalculatorSub}</Text>
                </View>
              </View>

            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.tree} style={styles.statsIcon} tintColor={Colors.tintColorDrak} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>{String.Home_StatsTreesVal}</Text>
            <Text style={styles.statsLabel}>{String.Home_StatsTreesLabel}</Text>
          </View>

          <View style={styles.statsDivider} />

          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.co2Cloud} style={styles.statsIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>{String.Home_StatsCO2Val}</Text>
            <Text style={styles.statsLabel}>{String.Home_StatsCO2Label}</Text>
          </View>

          <View style={styles.statsDivider} />

          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.group} style={styles.statsIcon} tintColor={Colors.tintColorDrak} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>{String.Home_StatsUsersVal}</Text>
            <Text style={styles.statsLabel}>{String.Home_StatsUsersLabel}</Text>
          </View>

          <View style={styles.statsDivider} />

          <View style={styles.statsItem}>
            <View style={styles.statsIconBg}>
              <Image source={Images.location} style={styles.statsIcon} resizeMode="contain" />
            </View>
            <Text style={styles.statsValue}>{String.Home_StatsStatesVal}</Text>
            <Text style={styles.statsLabel}>{String.Home_StatsStatesLabel}</Text>
          </View>
        </View>

        {/* Horizontal Quick Actions List */}
        <FlatList
          data={QUICK_ACTIONS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.quickActionsScroll}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.quickActionCard} activeOpacity={0.9}>
              <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.cardFooterRow}>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                <View style={styles.cardCircleArrow}>
                  <Text style={styles.cardArrowIcon}>→</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Featured Projects Header */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>{String.Home_SectionTitle} </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.viewAllLink}>{String.Home_ViewAll}</Text>
          </TouchableOpacity>
        </View>

        {/* Projects Horizontal List */}
        <FlatList
          data={FEATURED_PROJECTS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={styles.projectsScroll}
          contentContainerStyle={{ paddingRight: 30 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.projectCard} activeOpacity={0.9}>
              <View style={styles.projectImgContainer}>
                <Image source={item.image} style={styles.projectImage} resizeMode="cover" />
                <View style={styles.projectBadge}>
                  <Text style={styles.projectBadgeText}>{item.badge}</Text>
                </View>
              </View>
              <View style={styles.projectInfo}>
                <Text style={styles.projectTitle}>{item.title}</Text>
                <View style={styles.projectLocationRow}>
                  <Image source={Images.location} style={styles.projectLocationIcon} resizeMode="contain" />
                  <Text style={styles.projectLocation}>{item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
        </View>

        {/* Bottom Banner Section */}
        <View style={styles.bottomBanner}>
          <View style={styles.bannerOverlayContent}>
            <Text style={styles.bannerTitle}>{String.Home_BannerSubtitle}</Text>
            <Text style={styles.bannerTitleBold}>
              {String.Home_BannerTitleLeft}
              <Text style={styles.bannerTitleGreen}>{String.Home_BannerTitleHighlight}</Text>
              {String.Home_BannerTitleRight}
            </Text>

            <View style={styles.bannerRow}>
              <View style={styles.bannerItem}>
                <Text style={styles.bannerIcon}>🌿</Text>
                <Text style={styles.bannerText}>{String.Home_BannerItemAir}</Text>
              </View>
              <View style={styles.bannerItem}>
                <Text style={styles.bannerIcon}>🌍</Text>
                <Text style={styles.bannerText}>{String.Home_BannerItemPlanet}</Text>
              </View>
              <View style={styles.bannerItem}>
                <Text style={styles.bannerIcon}>💚</Text>
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
