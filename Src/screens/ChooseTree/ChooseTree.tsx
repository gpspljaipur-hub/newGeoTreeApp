import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { styles } from './styles';
import { Colors } from '../../comman/Colors';
import Images from '../../constants/images';
import String from '../../comman/String';
import { SafeAreaView } from 'react-native-safe-area-context';
interface TreeItem {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  category: string;
  badge: string;
  badgeColor: string;
  co2: string;
  growthRate: string;
  maintenance: string;
  maintenanceKey: 'low' | 'medium' | 'high';
  points: number;
  image: any;
}

const ChooseTreeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTreeId, setSelectedTreeId] = useState<string>('1'); // Default select Neem

  // Categories list
  const categories = [
    {
      id: 'all',
      name: String.ChooseTree_CategoryAll,
      /* IMAGE: Category icon (Leaf) */
      icon: Images.leaf,
    },
    {
      id: 'native',
      name: String.ChooseTree_CategoryNative,
      /* IMAGE: Category icon (Tree) */
      icon: Images.tree,
    },
    {
      id: 'fruit',
      name: String.ChooseTree_CategoryFruit,
      /* IMAGE: Category icon (Tree as placeholder) */
      icon: Images.tree,
    },
    {
      id: 'flowering',
      name: String.ChooseTree_CategoryFlowering,
      /* IMAGE: Category icon (Leaf as placeholder) */
      icon: Images.leaf,
    },
  ];

  // Tree database list
  const trees: TreeItem[] = [
    {
      id: '1',
      name: String.ChooseTree_TreeNeemName,
      scientificName: String.ChooseTree_TreeNeemScientific,
      description: String.ChooseTree_TreeNeemDesc,
      category: 'native',
      badge: String.ChooseTree_TreeNeemBadge,
      badgeColor: '#1E6B46',
      co2: '22 kg/year',
      growthRate: String.ChooseTree_RateMedium,
      maintenance: String.ChooseTree_MaintLow,
      maintenanceKey: 'low',
      points: 100,
      image: Images.tree,
    },
    {
      id: '2',
      name: String.ChooseTree_TreePeepalName,
      scientificName: String.ChooseTree_TreePeepalScientific,
      description: String.ChooseTree_TreePeepalDesc,
      category: 'native',
      badge: String.ChooseTree_TreePeepalBadge,
      badgeColor: '#1E6B46',
      co2: '28 kg/year',
      growthRate: String.ChooseTree_RateFast,
      maintenance: String.ChooseTree_MaintLow,
      maintenanceKey: 'low',
      points: 120,
      image: Images.tree,
    },
    {
      id: '3',
      name: String.ChooseTree_TreeMangoName,
      scientificName: String.ChooseTree_TreeMangoScientific,
      description: String.ChooseTree_TreeMangoDesc,
      category: 'fruit',
      badge: String.ChooseTree_TreeMangoBadge,
      badgeColor: '#F5B041',
      co2: '25 kg/year',
      growthRate: String.ChooseTree_RateMedium,
      maintenance: String.ChooseTree_MaintMedium,
      maintenanceKey: 'medium',
      points: 150,
      image: Images.tree,
    },
    {
      id: '4',
      name: String.ChooseTree_TreeGulmoharName,
      scientificName: String.ChooseTree_TreeGulmoharScientific,
      description: String.ChooseTree_TreeGulmoharDesc,
      category: 'flowering',
      badge: String.ChooseTree_TreeGulmoharBadge,
      badgeColor: '#EC7063',
      co2: '20 kg/year',
      growthRate: String.ChooseTree_RateMedium,
      maintenance: String.ChooseTree_MaintLow,
      maintenanceKey: 'low',
      points: 120,
      image: Images.tree,
    },
  ];

  // Filter trees based on chosen tab category
  const filteredTrees = selectedCategory === 'all'
    ? trees
    : trees.filter(tree => tree.category === selectedCategory);

  const handleContinue = () => {
    const selectedTree = trees.find(t => t.id === selectedTreeId);
    console.log('Continuing with selected tree:', selectedTree?.name);
  };

  const renderTreeItem = ({ item }: { item: TreeItem }) => {
    const isSelected = selectedTreeId === item.id;
    return (
      <TouchableOpacity
        style={[
          styles.card,
          isSelected && { borderColor: Colors.tint, borderWidth: 1.5, backgroundColor: '#FAFCFB' }
        ]}
        onPress={() => setSelectedTreeId(item.id)}
        activeOpacity={0.9}
      >
        {/* Tree Image Column */}
        <View style={styles.cardImageContainer}>
          {/* Badge */}
          <View style={[styles.badge, { backgroundColor: item.badgeColor }]}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
          {/* Main Tree image */}
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>

        {/* Tree Info Details */}
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              {/* Green Verified Tick Image */}
              <Image
                source={Images.leaf}
                style={styles.checkIcon}
                resizeMode="contain"
              />
            </View>
          </View>

          <Text style={styles.cardSub}>{item.scientificName}</Text>
          <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>

          {/* Grid Spec */}
          <View style={styles.specsContainer}>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>{String.ChooseTree_CO2Absorption}</Text>
              <Text style={styles.specValue}>{item.co2}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>{String.ChooseTree_GrowthRate}</Text>
              <Text style={[styles.specValue, { color: Colors.tint }]}>{item.growthRate}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>{String.ChooseTree_Maintenance}</Text>
              <Text style={[styles.specValue, { color: item.maintenanceKey === 'low' ? Colors.tint : '#4B5E53' }]}>
                {item.maintenance}
              </Text>
            </View>
          </View>
        </View>

        {/* Top-Right Green Points Badge */}
        <View style={styles.cardPointsBadge}>
          {/* Little green points/leaf badge icon */}
          <Image
            source={Images.leaf}
            style={styles.cardPointsIcon}
            resizeMode="contain"
          />
          <Text style={styles.cardPointsText}>{item.points}</Text>
        </View>

        {/* Bottom-Right Arrow Circle */}
        <TouchableOpacity
          style={[
            styles.arrowButton,
            isSelected && { backgroundColor: '#144D32' }
          ]}
          onPress={() => setSelectedTreeId(item.id)}
          activeOpacity={0.7}
        >
          {/* Arrow icon */}
          <Image
            source={Images.verified}
            style={[styles.arrowButtonIcon, { transform: [{ rotate: '-90deg' }] }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header Navigation Bar */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          {/* Left Arrow Icon */}
          <Image
            source={Images.verified}
            style={[styles.backIcon, { transform: [{ rotate: '90deg' }] }]}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{String.ChooseTree_HeaderTitle}</Text>

        {/* Green Points Badge on the Right */}
        <View style={styles.pointsBadge}>
          {/* Gold Coin Icon */}
          <Image
            source={Images.globe}
            style={styles.pointsIcon}
            resizeMode="contain"
          />
          <Text style={styles.pointsText}>1,250 {String.ChooseTree_PointsBadge}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 2. Stepper Progress Bar */}
        <View style={styles.stepperContainer}>
          {/* Step 1 */}
          <View style={styles.stepWrapper}>
            <View style={[styles.stepCircle, styles.stepCircleActive]}>
              <Text style={styles.stepTextActive}>1</Text>
            </View>
            <Text style={styles.stepLabelActive}>{String.ChooseTree_Step1}</Text>
            <View style={[styles.stepLine, styles.stepLineActive]} />
          </View>

          {/* Step 2 */}
          <View style={styles.stepWrapper}>
            <View style={[styles.stepCircle, styles.stepCircleInactive]}>
              <Text style={styles.stepTextInactive}>2</Text>
            </View>
            <Text style={styles.stepLabelInactive}>{String.ChooseTree_Step2}</Text>
            <View style={styles.stepLine} />
          </View>

          {/* Step 3 */}
          <View style={styles.stepWrapper}>
            <View style={[styles.stepCircle, styles.stepCircleInactive]}>
              <Text style={styles.stepTextInactive}>3</Text>
            </View>
            <Text style={styles.stepLabelInactive}>{String.ChooseTree_Step3}</Text>
            <View style={styles.stepLine} />
          </View>

          {/* Step 4 */}
          <View style={styles.stepWrapper}>
            <View style={[styles.stepCircle, styles.stepCircleInactive]}>
              <Text style={styles.stepTextInactive}>4</Text>
            </View>
            <Text style={styles.stepLabelInactive}>{String.ChooseTree_Step4}</Text>
          </View>
        </View>

        {/* 3. Selected State Decorative Card */}
        <View style={styles.selectedStateCard}>
          <View style={styles.stateTextContainer}>
            <View style={styles.stateIconContainer}>
              {/* Map Marker Pin Icon */}
              <Image
                source={Images.location}
                style={styles.stateIcon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.stateLabel}>{String.ChooseTree_SelectedStateLabel}</Text>
            <Text style={styles.stateName}>{String.ChooseTree_Rajasthan}</Text>

            <TouchableOpacity style={styles.changeStateContainer} activeOpacity={0.7}>
              <Text style={styles.changeStateText}>{String.ChooseTree_ChangeState}</Text>
              {/* Tiny Edit Pencil Icon */}
              <Image
                source={Images.verified}
                style={styles.pencilIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* Right Side Teardrop Fort Graphic */}
          <View style={styles.stateGraphicContainer}>
            <Image
              source={Images.chooseTree}
              style={styles.stateGraphic}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* 4. Choose Tree Headers */}
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>
            {String.ChooseTree_MainTitleLeft}
            <Text style={styles.mainTitleHighlight}>{String.ChooseTree_MainTitleHighlight}</Text>
            {String.ChooseTree_MainTitleRight}
          </Text>
          <Text style={styles.mainSubtitle}>
            {String.ChooseTree_MainSubtitleLeft}
            <Text style={styles.mainSubtitleHighlight}>{String.ChooseTree_MainSubtitleHighlight}</Text>
            {String.ChooseTree_MainSubtitleRight}
          </Text>
        </View>

        {/* 5. Horizontal Categories Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryButton,
                  isActive && styles.categoryButtonActive
                ]}
                onPress={() => setSelectedCategory(cat.id)}
                activeOpacity={0.8}
              >
                {/* Category Icon */}
                <Image
                  source={cat.icon}
                  style={[styles.categoryIcon, isActive && styles.categoryIconActive]}
                  resizeMode="contain"
                />
                <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <FlatList
          data={filteredTrees}
          renderItem={renderTreeItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.listContainer}
        />
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
        <View style={styles.bottomBanner}>
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
