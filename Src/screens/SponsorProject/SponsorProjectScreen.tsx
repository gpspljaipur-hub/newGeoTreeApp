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
    { id: '1', title: 'Digital Certificate of Sponsorship', icon: Images.certificate },
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

              <Image
                source={Images.logoGeotree}
                style={styles.headerLogo}
                resizeMode="contain"
              />

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
                  Sponsor a <Text style={styles.heroTitleGreen}>Green Project</Text>
                </Text>
                <Text style={styles.heroSubtitle}>
                  Support large-scale environmental restoration projects across India. Your contribution helps plant thousands of trees with verified implementation and transparent impact tracking.
                </Text>
              </View>

              {/* 2x2 Grid of Badges */}
              <View style={styles.metricsGrid}>
                <View style={styles.metricChip}>
                  <Image source={Images.shield} style={styles.metricChipIcon} resizeMode="contain" />
                  <Text style={styles.metricChipText}>
                    100% <Text style={styles.metricChipTextBlack}>Verified Projects</Text>
                  </Text>
                </View>
                <View style={styles.metricChip}>
                  <Image source={Images.group || Images.profile} style={styles.metricChipIcon} resizeMode="contain" />
                  <Text style={styles.metricChipText}>
                    NGO <Text style={styles.metricChipTextBlack}>& Expert Implementation</Text>
                  </Text>
                </View>
                <View style={styles.metricChip}>
                  <Image source={Images.location} style={styles.metricChipIcon} resizeMode="contain" />
                  <Text style={styles.metricChipText}>
                    GPS <Text style={styles.metricChipTextBlack}>Verified Plantations</Text>
                  </Text>
                </View>
                <View style={styles.metricChip}>
                  <Image source={Images.impact || Images.chooseTree} style={styles.metricChipIcon} resizeMode="contain" />
                  <Text style={styles.metricChipText}>
                    Transparent <Text style={styles.metricChipTextBlack}>Impact Tracking</Text>
                  </Text>
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
                <Text style={styles.viewAllText}>View All Projects </Text>
                <Text style={styles.viewAllText}>→</Text>
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
                          <Text style={styles.progressTextLabel}>
                            {item.planted.toLocaleString()} / {item.goal.toLocaleString()} Trees
                          </Text>
                          <Text style={styles.progressTextPercent}>{percent}%</Text>
                        </View>
                        <View style={styles.progressBarBg}>
                          <View style={[styles.progressBarFill, { width: `${percent}%` }]} />
                        </View>
                      </View>

                      {/* Card Stats */}
                      <View style={styles.cardStatsRow}>
                        <View style={styles.cardStatItem}>
                          <Image source={Images.calendar} style={styles.cardStatIcon} resizeMode="contain" />
                          <Text style={styles.cardStatText} numberOfLines={1}>{item.daysLeft} Days Left</Text>
                        </View>
                        <View style={styles.cardStatItem}>
                          <Image source={Images.group || Images.profile} style={styles.cardStatIcon} resizeMode="contain" />
                          <Text style={styles.cardStatText} numberOfLines={1}>{item.ngoPartner} NGO Partner</Text>
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
                        <Text style={styles.supportButtonArrow}>→</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* How Sponsorship Works */}
          <View style={[styles.sectionContainer, { paddingTop: 0, paddingBottom: 4 }]}>
            <View style={[styles.sectionHeaderRow, { marginBottom: 4 }]}>
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
                  <Text style={styles.stepTitle}>1. Choose Project</Text>
                  <Text style={styles.stepSub}>Select a verified green project</Text>
                </View>

                <Text style={styles.stepArrowIcon}>→</Text>

                <View style={styles.stepItem}>
                  <View style={styles.stepIconContainer}>
                    <Image source={Images.heart} style={styles.stepIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.stepTitle}>2. Make Impact</Text>
                  <Text style={styles.stepSub}>Your contribution plants trees</Text>
                </View>

                <Text style={styles.stepArrowIcon}>→</Text>

                <View style={styles.stepItem}>
                  <View style={styles.stepIconContainer}>
                    <Image source={Images.camera} style={styles.stepIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.stepTitle}>3. Track Progress</Text>
                  <Text style={styles.stepSub}>Get real-time updates & GPS coords</Text>
                </View>

                <Text style={styles.stepArrowIcon}>→</Text>

                <View style={styles.stepItem}>
                  <View style={styles.stepIconContainer}>
                    <Image source={Images.certificate} style={styles.stepIcon} resizeMode="contain" />
                  </View>
                  <Text style={styles.stepTitle}>4. Get Certificate</Text>
                  <Text style={styles.stepSub}>Earn your digital certificate</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Choose Your Sponsorship Level */}
          <View style={[styles.sectionContainer, { paddingTop: 4, paddingBottom: 4 }]}>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>Choose Your Sponsorship Level</Text>
              </View>
            </View>

            <View style={styles.levelsGrid}>
              {levelsData.map((level) => {
                const isSelected = selectedLevel.id === level.id;
                return (
                  <TouchableOpacity
                    key={level.id}
                    style={[styles.levelCard, isSelected && styles.levelCardSelected]}
                    activeOpacity={0.9}
                    onPress={() => setSelectedLevel(level)}
                  >
                    {isSelected && (
                      <View style={styles.selectedCheckmark}>
                        <Image source={Images.check} style={styles.selectedCheckmarkIcon} resizeMode="contain" />
                      </View>
                    )}

                    <View style={styles.levelIconContainer}>
                      <Image source={Images.leaf} style={styles.levelIcon} resizeMode="contain" />
                    </View>

                    <Text style={styles.levelName}>{level.name}</Text>
                    <Text style={styles.levelAmount}>{level.amountText}</Text>
                    <Text style={styles.levelDesc}>{level.desc}</Text>

                    <View style={styles.levelBadge}>
                      <Text style={styles.levelBadgeText}>{level.badge}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
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
                      {' Trees planted of '}
                      <Text style={styles.boldProgressText}>
                        {selectedProject.goal.toLocaleString()}
                      </Text>
                      {' goal'}
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
                  <Text style={styles.continueButtonArrow}>→</Text>
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
