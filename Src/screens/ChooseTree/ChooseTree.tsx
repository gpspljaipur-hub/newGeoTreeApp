import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import Images from '../../constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import String from '../../comman/String';

const treesData = [
  {
    id: 'neem',
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    description: 'A hardy native tree known for its medicinal properties and air purifying qualities.',
    co2: '22 kg/year',
    growthRate: 'Medium',
    maintenance: 'Low',
    points: 100,
    category: 'Native',
    image: Images.neem_tree,
  },
  {
    id: 'peepal',
    name: 'Peepal',
    scientificName: 'Ficus religiosa',
    description: 'A sacred tree that produces oxygen even at night and supports biodiversity.',
    co2: '28 kg/year',
    growthRate: 'Fast',
    maintenance: 'Low',
    points: 120,
    category: 'Native',
    image: Images.peepal_tree,
  },
  {
    id: 'mango',
    name: 'Mango',
    scientificName: 'Mangifera indica',
    description: 'A popular fruit tree that provides shade and delicious fruits.',
    co2: '25 kg/year',
    growthRate: 'Medium',
    maintenance: 'Medium',
    points: 150,
    category: 'Fruit',
    image: Images.mango_tree,
  },
  {
    id: 'gulmohar',
    name: 'Gulmohar',
    scientificName: 'Delonix regia',
    description: 'A beautiful flowering tree that adds vibrant colors to the environment.',
    co2: '20 kg/year',
    growthRate: 'Medium',
    maintenance: 'Low',
    points: 120,
    category: 'Flowering',
    image: Images.gulmohar_tree,
  },
];

const ChooseTreeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedTab, setSelectedTab] = useState('All');
  const filteredTrees = selectedTab === 'All'
    ? treesData
    : treesData.filter(tree => tree.category === selectedTab);

  const steps = [
    { number: 1, label: 'Choose Tree', active: true },
    { number: 2, label: 'Choose Location', active: false },
    { number: 3, label: 'Details', active: false },
    { number: 4, label: 'Payment', active: false },
  ];

  const categories = [
    { id: 'All', label: 'All Trees' },
    { id: 'Native', label: 'Native Trees' },
    { id: 'Fruit', label: 'Fruit Trees' },
    { id: 'Flowering', label: 'Flowering Trees' },
  ];

  const renderTabIcon = (tabId: string, isActive: boolean) => {
    const tintColor = isActive ? '#FFFFFF' : '#1E6B46';
    switch (tabId) {
      case 'All':
        return <Image source={Images.leaf} style={[styles.tabIcon, { tintColor }]} resizeMode="contain" />;
      case 'Native':
        return <Image source={Images.tree} style={[styles.tabIcon, { tintColor }]} resizeMode="contain" />;
      case 'Fruit':
        return <Image source={Images.apple} style={[styles.tabIcon, { tintColor }]} resizeMode="contain" />;
      case 'Flowering':
        return <Image source={Images.flower} style={[styles.tabIcon]} resizeMode="contain" />;
      default:
        return null;
    }
  };

  const handleContinue = () => {
    navigation.navigate('ChooseLocation');
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Plant Your First Tree</Text>
          <View style={styles.coinBadge}>
            <LinearGradient
              colors={['#FFE259', '#FFA751']}
              style={styles.coinIconContainer}
            >
              <Image source={Images.leaf} style={styles.coinIcon} resizeMode="contain" />
            </LinearGradient>
            <View style={styles.coinTextContainer}>
              <Text style={styles.coinAmount}>1,250</Text>
              <Text style={styles.coinLabel}>Green Points</Text>
            </View>
          </View>
        </View>

        {/* Stepper */}
        <View style={styles.stepperContainer}>
          <View style={styles.stepperLine} />
          {steps.map((step) => (
            <View key={step.number} style={styles.stepItem}>
              <View style={[styles.stepCircle, step.active ? styles.stepCircleActive : styles.stepCircleInactive]}>
                <Text style={styles.stepNumber}>{step.number}</Text>
              </View>
              <Text style={[styles.stepLabel, step.active ? styles.stepLabelActive : styles.stepLabelInactive]}>
                {step.label}
              </Text>
            </View>
          ))}
        </View>
        {/* Hero Card */}
        <View style={styles.heroCard}>
          <ImageBackground
            source={Images.chooseTree}
            style={styles.heroImage}
            imageStyle={styles.heroImageRadius}
            resizeMode="cover"
          >
            {/* White Fade Overlay */}
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, 0.35, 0.55, 1]}
              style={styles.heroOverlay}
            />

            <View style={styles.heroContent}>

              {/* State Card */}
              <View style={styles.stateCard}>
                <View style={styles.stateCardRow}>
                  <View style={styles.stateIconContainer}>
                    <Image
                      source={Images.location}
                      style={styles.stateIcon}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={styles.stateTextContainer}>
                    <Text style={styles.stateLabel}>
                      Selected State
                    </Text>

                    <Text style={styles.stateName}>
                      Rajasthan
                    </Text>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.changeStateButton}
                    >
                      <Text style={styles.changeStateText}>
                        Change State ↗
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Main Content */}
              <View style={styles.heroBottomContent}>

                {/* Left Side Text */}
                <View style={styles.heroTextContainer}>
                  <Text style={styles.heroTitle}>
                    Choose a Tree to{'\n'}
                    Plant in{' '}
                    <Text style={styles.highlightGreen}>
                      Rajasthan
                    </Text>
                  </Text>

                  <Text style={styles.heroSubtitle}>
                    Every tree you plant contributes to a{' '}
                    <Text style={styles.highlightGreen}>
                      greener
                    </Text>{' '}
                    and healthier Rajasthan.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* Floating Category Tabs */}
          <View style={styles.tabsContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsScrollView}
            >
              {categories.map(tab => {
                const isActive = selectedTab === tab.id;

                return (
                  <TouchableOpacity
                    key={tab.id}
                    activeOpacity={0.8}
                    onPress={() => setSelectedTab(tab.id)}
                    style={[
                      styles.tabButton,
                      isActive
                        ? styles.tabButtonActive
                        : styles.tabButtonInactive,
                    ]}
                  >
                    {renderTabIcon(tab.id, isActive)}

                    <Text
                      style={[
                        styles.tabText,
                        isActive
                          ? styles.tabTextActive
                          : styles.tabTextInactive,
                      ]}
                    >
                      {tab.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>

        {/* Tree Cards List */}
        <View style={styles.treeListContainer}>
          {filteredTrees.map((tree) => {
            let badgeStyle = styles.nativeBadge;
            if (tree.category === 'Fruit') badgeStyle = styles.fruitBadge;
            if (tree.category === 'Flowering') badgeStyle = styles.floweringBadge;

            const growthRateColor = '#1E6B46';
            const maintenanceColor = tree.maintenance === 'Low' ? '#1E6B46' : '#111827';

            return (
              <View key={tree.id} style={styles.treeCard}>
                <View style={styles.treeImageContainer}>
                  <Image source={tree.image} style={styles.treeImage} resizeMode="cover" />
                  <View style={[styles.categoryBadge, badgeStyle]}>
                    <Text style={styles.categoryBadgeText}>{tree.category}</Text>
                  </View>
                </View>
                <View style={styles.treeDetailsContainer}>
                  <View style={styles.treeHeaderRow}>
                    <View style={styles.treeNameContainer}>
                      <View style={styles.treeNameRow}>
                        <Text style={styles.treeName} numberOfLines={1}>{tree.name}</Text>
                      </View>
                      <Text style={styles.scientificName} numberOfLines={1}>{tree.scientificName}</Text>
                    </View>
                    <View style={styles.pointsBadgeContainer}>
                      <View style={styles.pointsPill}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Image source={Images.leaf} style={styles.pointsLeafIcon} resizeMode="contain" />
                          <Text style={styles.pointsValue}>{tree.points}</Text>
                        </View>
                        <Text style={styles.pointsLabel}>Green Points</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.treeDescription} numberOfLines={2}>
                    {tree.description}
                  </Text>
                  <View style={styles.treeFooterRow}>
                    <View style={styles.attributesRow}>
                      <View style={styles.attributeCol}>
                        <Text style={styles.attributeLabel}>CO₂ Absorption</Text>
                        <Text style={styles.attributeValue} numberOfLines={1}>{tree.co2}</Text>
                      </View>
                      <View style={styles.attributeDivider} />
                      <View style={styles.attributeCol}>
                        <Text style={styles.attributeLabel}>Growth Rate</Text>
                        <Text style={[styles.attributeValue, { color: growthRateColor }]} numberOfLines={1}>
                          {tree.growthRate}
                        </Text>
                      </View>
                      <View style={styles.attributeDivider} />
                      <View style={styles.attributeCol}>
                        <Text style={styles.attributeLabel}>Maintenance</Text>
                        <Text style={[styles.attributeValue, { color: maintenanceColor }]} numberOfLines={1}>
                          {tree.maintenance}
                        </Text>
                      </View>
                    </View>

                    {/* Select Button */}
                    <TouchableOpacity style={styles.arrowButton} activeOpacity={0.8}>
                      <Image
                        source={Images.back}
                        style={styles.arrowIcon}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/*Bottom banner*/}
        <View style={styles.bottomBanner}>
          <View style={styles.bannerLeftSection}>
            <Image
              source={Images.handtree}
              style={styles.bannerHandImage}
              resizeMode="contain"
            />
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTextTitle}>{String.ChooseTree_BannerTitle}</Text>
              <Text style={styles.bannerTextDesc}>
                {String.ChooseTree_BannerDesc}
              </Text>
            </View>
          </View>
        </View>

        {/* Benefits banner */}
        <View style={styles.benefitsBanner}>
          <View style={styles.bannerRightSection}>
            <View style={styles.benefitItem}>
              <Image
                source={Images.co2Cloud}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
              <Text style={styles.benefitLabel}>{String.ChooseTree_BenefitReduces}</Text>
              <Text style={styles.benefitValue}>{String.ChooseTree_BenefitCarbon}</Text>
            </View>
            <View style={styles.benefitItem}>
              <Image
                source={Images.bird}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
              <Text style={styles.benefitLabel}>{String.ChooseTree_BenefitSupports}</Text>
              <Text style={styles.benefitValue}>{String.ChooseTree_BenefitSupportsSub}</Text>
            </View>
            <View style={styles.benefitItem}>
              <Image
                source={Images.earth}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
              <Text style={styles.benefitLabel}>{String.ChooseTree_BenefitCreates}</Text>
              <Text style={styles.benefitValue}>{String.ChooseTree_BenefitGreenerFuture}</Text>
            </View>
          </View>
        </View>

        {/*Footer*/}
        <View style={styles.footerContainer}>
          <View style={styles.footerTextRow}>
            <Image
              source={Images.shield}
              style={styles.footerCheckIcon}
              resizeMode="contain"
            />
            <Text style={styles.footerText}>
              {String.ChooseTree_FooterText}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.85}
          >
            <Text style={styles.continueText}>{String.ChooseTree_Continue}</Text>
            <Image
              source={Images.back}
              style={[styles.continueArrow, { transform: [{ rotate: '180deg' }] }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseTreeScreen;

