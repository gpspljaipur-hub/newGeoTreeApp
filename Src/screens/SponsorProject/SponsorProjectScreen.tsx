import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import Images from '../../constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';



interface ProjectItem {
  id: string;
  name: string;
  location: string;
  badge: string;
  desc: string;
  planted: number;
  goal: number;
  daysLeft: number;
  ngoPartner: string;
  image: any;
}

interface LevelItem {
  id: string;
  name: string;
  amount: number;
  amountText: string;
  desc: string;
  badge: string;
}

const SponsorProjectScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const projectsData: ProjectItem[] = [
    {
      id: 'aravali',
      name: 'Aravalli Restoration Project',
      location: 'Rajasthan',
      badge: 'Restoration',
      desc: 'Restoring degraded forest land and reviving native biodiversity in Aravalli ranges.',
      planted: 18450,
      goal: 50000,
      daysLeft: 65,
      ngoPartner: 'Prakriti Foundation',
      image: Images.project_aravalli,
    },
    {
      id: 'school',
      name: 'School Green Campus',
      location: 'Multiple States',
      badge: 'Urban Forest',
      desc: 'Planting trees in government schools and creating green, healthy learning environments.',
      planted: 3420,
      goal: 5000,
      daysLeft: 40,
      ngoPartner: 'Green Shiksha',
      image: Images.project_jaipur,
    },
    {
      id: 'river',
      name: 'River Bank Restoration',
      location: 'Uttarakhand',
      badge: 'Water & Ecosystem',
      desc: 'Restoring river ecosystems by planting trees along riverbanks and preventing erosion.',
      planted: 12750,
      goal: 30000,
      daysLeft: 55,
      ngoPartner: 'Jal Rakshak',
      image: Images.project_himalayas,
    },
  ];

  const levelsData: LevelItem[] = [
    {
      id: 'green_supporter',
      name: 'Green Supporter',
      amount: 500,
      amountText: '₹500',
      desc: 'Helps plant approximately 10 Trees',
      badge: 'Good start!',
    },
    {
      id: 'community_sponsor',
      name: 'Community Sponsor',
      amount: 2000,
      amountText: '₹2,000',
      desc: 'Supports approximately 50 Trees',
      badge: 'Great impact!',
    },
    {
      id: 'project_partner',
      name: 'Project Partner',
      amount: 5000,
      amountText: '₹5,000',
      desc: 'Supports approximately 125 Trees',
      badge: 'High impact!',
    },
    {
      id: 'ecosystem_champion',
      name: 'Ecosystem Champion',
      amount: 10000,
      amountText: '₹10,000+',
      desc: 'Custom sponsorship for maximum impact',
      badge: 'Be a changemaker!',
    },
  ];

  const benefitsData = [
    { id: '1', title: 'Digital Certificate of Sponsorship', icon: Images.certificateIcon },
    { id: '2', title: 'GPS Verified Project Location', icon: Images.location },
    { id: '3', title: 'Monthly Progress Photos', icon: Images.camera },
    { id: '4', title: 'Trees Planted with Your Support', icon: Images.treeIcon },
    { id: '5', title: 'CO2 Offset Estimation', icon: Images.co2Cloud || Images.Emission },
    { id: '6', title: 'Annual Report', icon: Images.folder },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectItem>(projectsData[0]);
  const [selectedLevel, setSelectedLevel] = useState<LevelItem>(levelsData[0]);

  const handleSupportProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <ImageBackground
            source={Images.Sponser1bg}
            style={styles.headerHeroContainer}
            imageStyle={styles.headerBgImg}
            resizeMode="stretch"
          >
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
              >
                <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
              </TouchableOpacity>

              {/* <Image
                source={Images.logoGeotree}
                style={styles.headerLogo}
                resizeMode="contain"
              /> */}

              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                  <Image source={Images.bell} style={styles.iconImg} resizeMode="contain" />
                  <View style={styles.notificationDot} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7} onPress={() => navigation.navigate('Setting')}>
                  <Image source={Images.settings} style={styles.iconImg} resizeMode="contain" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Hero Section */}
            <View style={styles.heroSection}>
              <View style={styles.heroTextContainer}>
                <Text style={styles.heroTitle}>
                  Sponsor a {'\n'}<Text style={styles.heroTitleGreen}>Green Project</Text>
                </Text>
                <Text style={styles.heroSubtitle}>
                  Support large-scale environmental restoration projects across India. Your contribution helps plant thousands of trees with verified implementation and transparent impact tracking.
                </Text>
              </View>

              {/* Horizontal Metrics Bar */}
              <View style={styles.metricsGridOuter}>
                <View style={styles.metricsGridInner}>
                  <View style={styles.metricChip}>
                    <View style={styles.metricIconBg}>
                      <Image source={Images.shield} style={styles.metricChipIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.metricChipText}>
                      100% Verified{'\n'}<Text style={styles.metricChipTextBlack}>Projects</Text>
                    </Text>
                  </View>
                  <View style={styles.metricDivider} />

                  <View style={styles.metricChip}>
                    <View style={styles.metricIconBg}>
                      <Image source={Images.group || Images.profile} style={styles.metricChipIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.metricChipText}>
                      NGO & Expert{'\n'}<Text style={styles.metricChipTextBlack}>Implementation</Text>
                    </Text>
                  </View>
                  <View style={styles.metricDivider} />

                  <View style={styles.metricChip}>
                    <View style={styles.metricIconBg}>
                      <Image source={Images.location} style={styles.metricChipIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.metricChipText}>
                      GPS Verified{'\n'}<Text style={styles.metricChipTextBlack}>Plantations</Text>
                    </Text>
                  </View>
                  <View style={styles.metricDivider} />

                  <View style={styles.metricChip}>
                    <View style={styles.metricIconBg}>
                      <Image source={Images.impact || Images.chooseTree} style={styles.metricChipIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.metricChipText}>
                      Transparent{'\n'}<Text style={styles.metricChipTextBlack}>Impact Tracking</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* Featured Green Projects */}
          <View style={[styles.sectionContainer, { paddingBottom: 4 }]}>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>Featured Green Projects</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.viewAllLink} onPress={() => navigation.navigate('ExploreStates')}>
                <Text style={styles.viewAllText}>View All </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={projectsData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.featuredProjectsScroll}
              renderItem={({ item }) => {
                const percent = Math.round((item.planted / item.goal) * 100);
                const isSelected = selectedProject.id === item.id;
                return (
                  <View style={[styles.projectCard, isSelected && { borderColor: '#1E6B46', borderWidth: 1.5 }]}>
                    <View style={styles.projectImageContainer}>
                      <Image source={item.image} style={styles.projectCardImage} resizeMode="cover" />
                      <View style={styles.categoryBadge}>
                        <Text style={styles.categoryBadgeText}>{item.badge}</Text>
                      </View>
                      <View style={styles.gpsBadge}>
                        <Image source={Images.geolocation} style={styles.gpsBadgeIcon} resizeMode="contain" />
                        <Text style={styles.gpsBadgeText}>GPS Verified</Text>
                      </View>
                    </View>

                    <View style={styles.projectDetails}>
                      <Text style={styles.projectCardTitle}>{item.name}</Text>
                      <View style={styles.projectCardLocationRow}>
                        <Image source={Images.location} style={styles.projectCardLocationIcon} resizeMode="contain" />
                        <Text style={styles.projectCardLocation}>{item.location}</Text>
                      </View>

                      <Text style={styles.projectCardDesc} numberOfLines={2}>
                        {item.desc}
                      </Text>

                      {/* Progress Bar */}
                      <View style={styles.progressContainer}>
                        <View style={styles.progressTextRow}>
                          <View style={styles.progressTextLabelContainer}>
                            <Image source={Images.tree} style={styles.progressTreeIcon} resizeMode="contain" />
                            <Text style={styles.progressTextLabelBold}>{item.planted.toLocaleString()}</Text>
                            <Text style={styles.progressTextLabel}> / {item.goal.toLocaleString()} Trees</Text>
                          </View>
                          <Text style={styles.progressTextPercent}>{percent}%</Text>
                        </View>
                        <View style={styles.progressBarBg}>
                          <View style={[styles.progressBarFill, { width: `${percent}%` }]} />
                        </View>
                      </View>

                      {/* Card Stats */}
                      <View style={styles.cardStatsRow}>
                        <View style={styles.cardStatBox}>
                          <Text style={styles.cardStatValue}>{item.daysLeft}</Text>
                          <Text style={styles.cardStatLabel}>Days Left</Text>
                        </View>
                        <View style={styles.cardStatBoxRight}>
                          <Image source={Images.group || Images.profile} style={styles.cardStatIcon} resizeMode="contain" />
                          <View style={styles.cardStatTextCol}>
                            <Text style={styles.cardStatValueRight} numberOfLines={1}>{item.ngoPartner}</Text>
                            <Text style={styles.cardStatLabelRight}>NGO Partner</Text>
                          </View>
                        </View>
                      </View>

                      {/* Support Button */}
                      <TouchableOpacity
                        style={[
                          styles.supportButton,
                          isSelected && { backgroundColor: '#EAF6EC', borderColor: '#1E6B46' }
                        ]}
                        activeOpacity={0.8}
                        onPress={() => handleSupportProject(item)}
                      >
                        <Text style={styles.supportButtonText}>
                          {isSelected ? 'Selected' : 'Support Project'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* How Sponsorship Works */}
          <View style={[styles.sectionContainer, { paddingTop: 10, paddingBottom: 10 }]}>
            <View style={{
              marginHorizontal: 12,
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#F0F0F0',
              paddingVertical: 16,
              paddingHorizontal: 4,
            }}>
              <View style={[styles.sectionHeaderRow,]}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionTitle}>How Sponsorship Works</Text>
                </View>
              </View>

              <View style={styles.sponsorshipWorksContainer}>
                <View style={styles.sponsorshipStepsRow}>
                  <View style={styles.stepItem}>
                    <View style={styles.stepIconContainer}>
                      <Image source={Images.plant} style={styles.stepIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.stepTitle}>1. Choose a Project</Text>
                    <Text numberOfLines={2} style={styles.stepSub}>Select a verified green project to support</Text>
                  </View>

                  <View style={styles.stepItem}>
                    <View style={styles.stepIconContainer}>
                      <Image source={Images.heart} style={styles.stepIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.stepTitle}>2. Make an Impact</Text>
                    <Text numberOfLines={2} style={styles.stepSub}>Your contribution helps plant thousands of trees</Text>
                  </View>

                  <View style={styles.stepItem}>
                    <View style={styles.stepIconContainer}>
                      <Image source={Images.camera} style={styles.stepIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.stepTitle}>3. Track Progress</Text>
                    <Text numberOfLines={2} style={styles.stepSub}>Get real-time updates, photos & GPS locations</Text>
                  </View>

                  <View style={styles.stepItem}>
                    <View style={styles.stepIconContainer}>
                      <Image source={Images.certificateIcon} style={styles.stepIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.stepTitle}>4. Receive Certificate</Text>
                    <Text numberOfLines={2} style={styles.stepSub}>Earn a digital certificate & impact report</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Choose Your Sponsorship Level */}
          <View style={[styles.sectionContainer, { paddingTop: 10, paddingBottom: 10 }]}>
            <View style={{
              marginHorizontal: 12,
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#F0F0F0',
              paddingVertical: 16,
            }}>
              <View style={[styles.sectionHeaderRow, { marginBottom: 12 }]}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionTitleUppercase}>CHOOSE YOUR SPONSORSHIP LEVEL</Text>
                </View>
              </View>

              <FlatList
                data={levelsData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.levelsGridScroll}
                renderItem={({ item: level }) => {
                  const isSelected = selectedLevel.id === level.id;
                  return (
                    <TouchableOpacity
                      style={[styles.levelCard, isSelected && styles.levelCardSelected]}
                      activeOpacity={0.9}
                      onPress={() => setSelectedLevel(level)}
                    >
                      <View style={styles.levelCardTopRight}>
                        {isSelected ? (
                          <View style={styles.selectedCheckmark}>
                            <Image source={Images.check} style={styles.selectedCheckmarkIcon} resizeMode="contain" />
                          </View>
                        ) : (
                          <View style={styles.unselectedCircle} />
                        )}
                      </View>

                      <View style={styles.levelIconContainer}>
                        <Image source={Images.five_trees_plant || Images.five_trees_plant} style={styles.levelIcon} resizeMode="contain" />
                      </View>

                      <Text style={styles.levelName}>{level.name}</Text>
                      <Text style={styles.levelAmount}>{level.amountText}</Text>
                      <Text style={styles.levelDesc}>{level.desc}</Text>

                      <View style={styles.levelBadge}>
                        <Text style={styles.levelBadgeText}>{level.badge}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>

          {/* What You Receive */}
          <View style={[styles.sectionContainer, { paddingTop: 0, paddingBottom: 8 }]}>
            <View style={[styles.sectionHeaderRow, { marginBottom: 6 }]}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>What You Receive</Text>
              </View>
            </View>

            <View style={styles.receiveGrid}>
              {benefitsData.map((item) => (
                <View key={item.id} style={styles.receiveItemGrid}>
                  <View style={styles.receiveIconContainer}>
                    <Image source={item.icon} style={styles.receiveIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.receiveTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.bottomCheckoutBar}>
            <View style={styles.checkoutMainRow}>
              <View style={styles.selectedDetailsBox}>
                <View style={styles.supportingInfo}>
                  <View style={styles.supportingThumbContainer}>
                    <Image source={Images.rotatehand_tree} style={styles.supportingThumb} resizeMode="contain" />
                  </View>
                  <View style={styles.supportingTextContainer}>
                    <Text style={styles.supportingLabel}>You are supporting</Text>
                    <Text style={styles.supportingName} numberOfLines={1}>
                      {selectedProject.name}
                    </Text>

                    <View style={styles.supportingLocationRow}>
                      <Image source={Images.location} style={styles.supportingLocationIcon} resizeMode="contain" />
                      <Text style={styles.supportingLocation}>
                        {selectedProject.location}
                      </Text>
                    </View>

                    <Text style={styles.supportingProgress}>
                      <Text style={styles.boldProgressText}>
                        {selectedProject.planted.toLocaleString()}
                      </Text>
                      {` Trees planted of ${selectedProject.goal.toLocaleString()} goal`}
                    </Text>
                  </View>
                </View>

                <View style={styles.verticalDivider} />

                <View style={styles.amountInfo}>
                  <Text style={styles.levelLabel}>Selected Level</Text>
                  <Text style={styles.levelValText} numberOfLines={1}>{selectedLevel.name}</Text>
                  <Text style={styles.amountLabel}>Amount</Text>
                  <Text style={styles.amountValText}>{selectedLevel.amountText}</Text>
                </View>
              </View>
              <View style={styles.checkoutButtonBox}>
                <TouchableOpacity
                  style={styles.continueButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('SponsorSupport', {
                    project: selectedProject,
                    selectedLevel: selectedLevel,
                  })}
                >
                  <Text style={styles.continueButtonText}>Continue to Support</Text>
                </TouchableOpacity>

                <View style={styles.securePaymentRow}>
                  <Image source={Images.lock} style={styles.secureIcon} resizeMode="contain" />
                  <Text style={styles.secureText}>Secure Payment</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SponsorProjectScreen;
