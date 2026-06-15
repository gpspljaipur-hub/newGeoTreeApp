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
import PlantHeader from '../../comman/PlantHeader';
import Stepper from '../../comman/Stepper';

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
        <PlantHeader />
        {/* Stepper */}
        <Stepper currentStep={1} />
        {/* Hero Card */}
        <View style={styles.heroCard}>
          <ImageBackground
            source={Images.detailbg}
            style={styles.heroImage}
            imageStyle={styles.heroImageRadius}
            resizeMode='contain'
          >
            <View style={styles.heroContent}>

              {/* State Card */}
              <View style={styles.stateCard}>
                <View style={styles.stateCardRow}>
                  <View style={styles.stateIconContainer}>
                    <Image
                      source={Images.geolocation}
                      style={styles.stateIcon}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={styles.stateTextContainer}>
                    {/* <Text style={styles.stateLabel}>Selected State </Text> */}
                    <Text style={styles.stateName}>Rajasthan</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.changeStateButton} >
                      <Text style={styles.changeStateText}>Change State </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Main Content */}
              <View style={styles.heroBottomContent}>

                {/* Left Side Text */}
                <View style={styles.heroTextContainer}>
                  <Text style={styles.heroTitle}>Choose a Tree to{'\n'}Plant in{' '}
                    <Text style={styles.highlightGreen}>Rajasthan   </Text>
                  </Text>

                  <Text style={styles.heroSubtitle}>
                    Every tree you plant contributes to a{' '}
                    <Text style={styles.greenRegular}> greener</Text>{' '}and healthier Rajasthan </Text>
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
                <View style={{ flexDirection: 'row', }}>
                  <View style={styles.treeImageContainer}>
                    <ImageBackground source={tree.image} style={styles.treeImage} resizeMode='cover' imageStyle={{ borderRadius: 10, }}>
                      <View style={[styles.categoryBadge, badgeStyle]}>
                        <Text style={styles.categoryBadgeText}>{tree.category}</Text>
                      </View>
                    </ImageBackground>
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

                    <Text style={styles.treeDescription}>
                      {tree.description}
                    </Text>

                  </View>
                </View>

                <View style={styles.treeFooterRow}>
                  <View style={styles.attributesRow}>

                    <View style={styles.attributeCol}>
                      <Text style={styles.attributeLabel}>CO₂ Absorption</Text>
                      <Text style={styles.attributeValue} numberOfLines={1}>{tree.co2}</Text>
                    </View>

                    <View style={styles.attributeDivider} />
                    <View style={styles.attributeCol}>
                      <Text style={styles.attributeLabel}>Growth Rate</Text>
                      <Text style={[styles.attributeValue, { color: growthRateColor }]} >
                        {tree.growthRate}
                      </Text>
                    </View>
                    <View style={styles.attributeDivider} />
                    <View style={styles.attributeCol}>
                      <Text style={styles.attributeLabel}>Maintenance</Text>
                      <Text style={[styles.attributeValue, { color: maintenanceColor }]} >
                        {tree.maintenance}
                      </Text>
                    </View>
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

          {/* Divider */}
          <View style={styles.bannerDivider} />
          {/* Benefits Grid Layout */}
          {/* Row 1 */}
          <View style={styles.benefitsRow}>

            <View style={styles.benefitGridItem}>

              <View style={styles.benefitTextCol}>
                <Image
                  source={Images.Emission}
                  style={styles.benefitGridIcon}
                  resizeMode="contain"
                />
                <Text style={styles.benefitGridLabel}>{String.ChooseTree_BenefitReduces}</Text>
                <Text style={styles.benefitGridValue}>{String.ChooseTree_BenefitCarbon}</Text>
              </View>

            </View>

            <View style={styles.benefitGridItem}>
              <View style={styles.benefitTextCol}>
                <Image
                  source={Images.bird}
                  style={styles.benefitGridIcon}
                  resizeMode="contain"
                />
                <Text style={styles.benefitGridLabel}>{String.ChooseTree_BenefitSupports}</Text>
                <Text style={styles.benefitGridValue}>{String.ChooseTree_BenefitSupportsSub}</Text>
              </View>

            </View>

            <View style={styles.benefitGridItem}>
              <View style={styles.benefitTextCol}>
                <Image
                  source={Images.earth}
                  style={styles.benefitGridIcon}
                  resizeMode="contain"
                />
                <Text style={styles.benefitGridLabel}>{String.ChooseTree_BenefitCreates}</Text>
                <Text style={styles.benefitGridValue}>{String.ChooseTree_BenefitGreenerFuture}</Text>
              </View>
            </View>

            <View style={styles.benefitGridItem}>
              <View style={styles.benefitTextCol}>
                <Image
                  source={Images.geolocation}
                  style={styles.benefitGridIcon}
                  resizeMode="contain"
                />

                <Text style={styles.benefitGridLabel}>{String.ChooseTree_BenefitGPSTracked}</Text>
                <Text style={styles.benefitGridValue}>{String.ChooseTree_BenefitVerified}</Text>
              </View>
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
            onPress={() => navigation.navigate('ChooseLocation')}
            activeOpacity={0.85}
          >
            <Text style={styles.continueText}>{String.ChooseTree_Continue}</Text>

          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseTreeScreen;

