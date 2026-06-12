import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import Images from '../../constants/images';
import String from '../../comman/String';
import { Colors } from '../../comman/Colors';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const UserDashboardScreen = () => {
  const [selectedState, setSelectedState] = React.useState('1');

  const STATS_DATA = [
    {
      id: '1',
      value: '28',
      label: 'Trees Planted',
      subtext: '↑ 4 This Month',
      isGreenSub: true,
      icon: Images.treeIcon,
      bgColor: '#EEF5EE',
      iconColor: Colors.legacyGreen,
    },
    {
      id: '2',
      value: '256 kg',
      label: 'CO₂ Offset',
      subtext: '↑ 36 kg This Month',
      isGreenSub: true,
      icon: Images.Emission,
      bgColor: '#EEF5EE',
      iconColor: Colors.legacyGreen,
    },
    {
      id: '3',
      value: '5',
      label: 'Locations',
      subtext: 'Across India',
      isGreenSub: false,
      icon: Images.geolocation,
      bgColor: '#EEF5EE',
      iconColor: Colors.legacyGreen,
    },
    {
      id: '4',
      value: '1,250',
      label: 'Green Points',
      subtext: 'View Rewards >',
      isGreenSub: true,
      icon: Images.shield, // Using shield as points/award icon
      bgColor: '#FEF4E8',
      iconColor: '#F2994A',
    },
  ];

  const JOURNEY_DATA = [
    {
      id: '1',
      title: 'Plant More\nTrees',
      subtitle: 'Grow more green',
      image: Images.handtree,
    },
    {
      id: '2',
      title: 'Offset\nCarbon',
      subtitle: 'Reduce your\ncarbon footprint',
      image: Images.carbon_cal,
    },
    {
      id: '3',
      title: 'Gift\nTrees',
      subtitle: 'Give the gift of a\ngreener future',
      image: Images.gift_tree,
    },
    {
      id: '4',
      title: 'Sponsor\nPlantation',
      subtitle: 'Support large scale\ngreen initiatives',
      image: Images.sponsor_plant,
    },
  ];

  const STATE_CARDS = [
    {
      id: '1',
      name: 'Rajasthan',
      trees: '1.2M+ Trees',
      image: Images.rajasthan,
    },
    {
      id: '2',
      name: 'Uttarakhand',
      trees: '850K+ Trees',
      image: Images.uttarakhand,
    },
    {
      id: '3',
      name: 'Karnataka',
      trees: '650K+ Trees',
      image: Images.karnataka,
    },
    {
      id: '4',
      name: 'Tamil Nadu',
      trees: '420K+ Trees',
      image: Images.tamil_nadu,
    },
  ];

  const COMMUNITY_STATS = [
    { id: '1', label: 'Trees Planted', value: '1.2M+', icon: Images.treeIcon },
    { id: '2', label: 'Tons CO₂ Offset', value: '12.5K+', icon: Images.Emission },
    { id: '3', label: 'Active Users', value: '52K+', icon: Images.group },
    { id: '4', label: 'States Covered', value: '28', icon: Images.geolocation },
  ];

  return (

    <View style={styles.container}>


      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Top Header */}
        <ImageBackground
          source={Images.Deshbordbg}
          style={styles.heroImage}
          resizeMode="cover"
        >

          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={Images.logoGeotree} style={styles.headerLogo} resizeMode="cover" />
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                <Image source={Images.notification} style={styles.iconImg} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                <Image source={Images.profile} style={styles.iconImg} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.greetingContainer}>
            <View style={styles.greetingTextSection}>
              <Text style={styles.greetingSub}>Good Morning, Aarav! 🌿</Text>
              <Text style={styles.greetingMain}>Every Action{'\n'}Creates Impact</Text>
              <Text style={styles.greetingDesc}>
                Keep going, a <Text style={styles.greenText}>greener</Text> tomorrow{'\n'}is in your hands.
              </Text>
            </View>

          </View>
        </ImageBackground>

        <View style={{ flex: 1, top: -40 }}>

          <View style={styles.impactCard}>
            <View style={styles.impactTitleRow}>
              <Text style={styles.impactCardTitle}>{String.Dashboard_YourGreenImpact}</Text>
              <Text style={styles.leafIcon}>🍃</Text>
            </View>

            <View style={styles.statsGrid}>
              {STATS_DATA.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index > 0 && <View style={styles.statDivider} />}
                  <View style={styles.statItem}>
                    <View style={[styles.statIconBg, { backgroundColor: item.bgColor }]}>
                      <Image
                        source={item.icon}
                        style={[styles.statIcon, { tintColor: item.iconColor }]}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.statValue}>{item.value}</Text>
                    <Text style={styles.statLabel}>{item.label}</Text>
                    <Text style={[styles.statSubtext, item.isGreenSub ? styles.statSubtextGreen : styles.statSubtextMuted]}>
                      {item.subtext}
                    </Text>
                  </View>
                </React.Fragment>
              ))}
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>{String.Dashboard_ContinueYourJourney}</Text>
            </View>
          </View>

          <FlatList
            data={JOURNEY_DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.journeyList}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.journeyCard} activeOpacity={0.9}>
                <View style={styles.journeyImageContainer}>
                  <Image source={item.image} style={styles.journeyImage} resizeMode="cover" />
                </View>
                <View style={styles.journeyContent}>
                  <Text style={styles.journeyCardTitle}>{item.title}</Text>
                  <Text style={styles.journeyCardSubtitle}>{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>{String.Dashboard_MyTrees}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllText}>{String.Dashboard_ViewAllTrees}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.myTreeCard} activeOpacity={0.95}>
            <View style={styles.myTreeTopRow}>
              <View style={styles.myTreeImageWrapper}>
                <Image source={Images.neem_tree} style={styles.myTreeImage} resizeMode="cover" />
                <View style={styles.liveBadge}>
                  <View style={styles.liveDot} />
                  <Text style={styles.liveBadgeText}>Live</Text>
                </View>
              </View>
              <View style={styles.myTreeInfo}>
                <View style={styles.myTreeTitleRow}>
                  <Text style={styles.myTreeTitle}>Neem Tree #GT2394</Text>
                  <Image source={Images.edit} style={styles.editIconImage} resizeMode="contain" />
                </View>
                <View style={styles.myTreeLocationRow}>
                  <Image source={Images.geolocation} style={styles.smallLocationIcon} tintColor={Colors.legacyGreen} resizeMode="contain" />
                  <Text style={styles.myTreeLocation}>Jaipur, Rajasthan</Text>
                </View>
                <View style={styles.myTreeBadgesRow}>
                  <View style={styles.treeBadgeOutline}>
                    <Text style={styles.treeBadgeText}>Healthy</Text>
                  </View>
                  <View style={styles.treeBadgeOutline}>
                    <Image source={Images.geolocation} style={styles.badgeLocationIcon} resizeMode="contain" />
                    <Text style={styles.treeBadgeText}>GPS Verified</Text>
                  </View>
                </View>
              </View>

            </View>
            <View style={styles.myTreeHorizontalDivider} />
            <View style={styles.myTreeStatsRow}>
              <View style={styles.myTreeStatCol}>
                <Text style={styles.myTreeStatLabel}>Height</Text>
                <Text style={styles.myTreeStatVal}>72 cm</Text>
              </View>
              <View style={styles.myTreeStatDivider} />
              <View style={styles.myTreeStatCol}>
                <Text style={styles.myTreeStatLabel}>Planted On</Text>
                <Text style={styles.myTreeStatVal}>12 May 2025</Text>
              </View>
              <View style={styles.myTreeStatDivider} />
              <View style={styles.myTreeStatCol}>
                <Text style={styles.myTreeStatLabel}>Last Updated</Text>
                <Text style={styles.myTreeStatVal}>3 Days Ago</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>{String.Dashboard_SelectState}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllText}>{String.Home_ViewAllStates}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={STATE_CARDS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.stateList}
            renderItem={({ item }) => {
              const isSelected = selectedState === item.id;
              return (
                <TouchableOpacity
                  style={[styles.stateCard, isSelected && styles.stateCardSelected]}
                  activeOpacity={0.9}
                  onPress={() => setSelectedState(item.id)}
                >
                  <View style={styles.stateCardImageWrapper}>
                    <Image source={item.image} style={styles.stateCardImage} resizeMode="cover" />
                    {isSelected && (
                      <View style={styles.selectedBadge}>
                        <Text style={styles.selectedBadgeText}>Selected</Text>
                      </View>
                    )}
                  </View>
                  <View style={styles.stateCardContent}>
                    <Text style={[styles.stateCardName, isSelected && styles.stateCardNameSelected]}>
                      {item.name}
                    </Text>
                    <Text style={styles.stateCardTrees}>{item.trees}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />

          <View style={styles.bannerContainer}>
            <Image source={Images.location_hero_bg} style={styles.bannerBgImage} resizeMode='cover' />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.2)']}
              style={styles.bannerOverlay}
            />
            <View style={styles.bannerInner}>
              <View style={styles.bannerLeft}>
                <View style={styles.bannerPinWrapper}>
                  <Image source={Images.geolocation} style={styles.bannerPinIcon} tintColor={Colors.legacyGreen} resizeMode="contain" />
                </View>
                <View style={styles.bannerTextWrapper}>
                  <Text style={styles.bannerStateName}>Rajasthan</Text>
                  <Text style={styles.bannerStateDesc}>
                    Explore verified plantation projects{'\n'}across Rajasthan.
                  </Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8}>
                <LinearGradient
                  colors={['#196427', '#3c8012']}
                  style={styles.exploreBtn}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.exploreBtnText}>Explore Projects</Text>
                  <Text style={styles.exploreBtnArrow}>→</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>{String.Dashboard_CommunityImpact}</Text>
              <Text style={styles.leafIcon}>🍃</Text>
            </View>
          </View>

          <View style={styles.communityContainer}>
            {COMMUNITY_STATS.map((item, index) => (
              <View key={item.id} style={styles.communityStatItem}>
                <View style={styles.communityIconBg}>
                  <Image source={item.icon} style={styles.communityIcon} tintColor={Colors.legacyGreen} resizeMode="contain" />
                </View>
                <View style={styles.communityTextCol}>
                  <Text style={styles.communityVal}>{item.value}</Text>
                  <Text style={styles.communityLabel}>{item.label}</Text>
                </View>
                {index < COMMUNITY_STATS.length - 1 && <View style={styles.communityDivider} />}
              </View>
            ))}
          </View>

          <View style={styles.challengeCard}>
            <View style={styles.challengeContentRow}>
              <View style={styles.challengeMedalWrapper}>
                <Image source={Images.star} style={styles.challengeMedalImage} resizeMode="contain" />
              </View>
              <View style={styles.challengeTextWrapper}>
                <Text style={styles.challengeTitle}>{String.Dashboard_JuneChallenge} 🔥</Text>
                <Text style={styles.challengeSubtitle}>
                  Plant 3 Trees this month and earn 200 Green Coins!
                </Text>
              </View>
            </View>

            <View style={styles.challengeProgressRow}>
              <View style={styles.progressBarContainer}>
                <Text style={styles.progressBarLabel}>Progress</Text>
                <View style={styles.progressBarTrack}>
                  <View style={[styles.progressBarFill, { width: '66.7%' }]} />
                </View>
                <Text style={styles.progressCount}>2 / 3</Text>
              </View>

              <View style={styles.coinBadge}>
                <Text style={styles.coinIcon}>🪙</Text>
                <View>
                  <Text style={styles.coinVal}>200</Text>
                  <Text style={styles.coinLabel}>Green Coins</Text>
                </View>
              </View>
            </View>
          </View>

        </View>

      </ScrollView>

      {/* Custom Bottom Tab Navigation Bar */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={Images.home} style={[styles.navIcon, styles.navIconActive]} resizeMode="contain" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={Images.plant} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navText}>Plant</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={Images.impact} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navText}>Impact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={Images.community} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navText}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={Images.profile} style={styles.navIcon} resizeMode="contain" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View> */}

    </View>
  );
};

export default UserDashboardScreen;
