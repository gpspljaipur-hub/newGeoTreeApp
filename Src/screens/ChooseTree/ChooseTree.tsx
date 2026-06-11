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
      name: 'All Trees',
      /* IMAGE: Category icon (Leaf) */
      icon: Images.leaf, // REPLACE_IMAGE: Icon for 'All Trees' category
    },
    {
      id: 'native',
      name: 'Native Trees',
      /* IMAGE: Category icon (Tree) */
      icon: Images.tree, // REPLACE_IMAGE: Icon for 'Native Trees' category
    },
    {
      id: 'fruit',
      name: 'Fruit Trees',
      /* IMAGE: Category icon (Tree as placeholder) */
      icon: Images.tree, // REPLACE_IMAGE: Icon for 'Fruit Trees' category
    },
    {
      id: 'flowering',
      name: 'Flowering Trees',
      /* IMAGE: Category icon (Leaf as placeholder) */
      icon: Images.leaf, // REPLACE_IMAGE: Icon for 'Flowering Trees' category
    },
  ];

  // Tree database list
  const trees: TreeItem[] = [
    {
      id: '1',
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      description: 'A hardy native tree known for its medicinal properties and air purifying qualities.',
      category: 'native',
      badge: 'Native',
      badgeColor: '#1E6B46',
      co2: '22 kg/year',
      growthRate: 'Medium',
      maintenance: 'Low',
      points: 100,
      /* IMAGE: Neem Tree image illustration */
      image: Images.tree, // REPLACE_IMAGE: Main list image of Neem tree
    },
    {
      id: '2',
      name: 'Peepal',
      scientificName: 'Ficus religiosa',
      description: 'A sacred tree that produces oxygen even at night and supports biodiversity.',
      category: 'native',
      badge: 'Native',
      badgeColor: '#1E6B46',
      co2: '28 kg/year',
      growthRate: 'Fast',
      maintenance: 'Low',
      points: 120,
      /* IMAGE: Peepal Tree image illustration */
      image: Images.tree, // REPLACE_IMAGE: Main list image of Peepal tree
    },
    {
      id: '3',
      name: 'Mango',
      scientificName: 'Mangifera indica',
      description: 'A popular fruit tree that provides shade and delicious fruits.',
      category: 'fruit',
      badge: 'Fruit',
      badgeColor: '#F5B041',
      co2: '25 kg/year',
      growthRate: 'Medium',
      maintenance: 'Medium',
      points: 150,
      /* IMAGE: Mango Tree image illustration */
      image: Images.tree, // REPLACE_IMAGE: Main list image of Mango tree
    },
    {
      id: '4',
      name: 'Gulmohar',
      scientificName: 'Delonix regia',
      description: 'A beautiful flowering tree that adds vibrant colors to the environment.',
      category: 'flowering',
      badge: 'Flowering',
      badgeColor: '#EC7063',
      co2: '20 kg/year',
      growthRate: 'Medium',
      maintenance: 'Low',
      points: 120,
      /* IMAGE: Gulmohar Tree image illustration */
      image: Images.tree, // REPLACE_IMAGE: Main list image of Gulmohar tree
    },
  ];

  // Filter trees based on chosen tab category
  const filteredTrees = selectedCategory === 'all'
    ? trees
    : trees.filter(tree => tree.category === selectedCategory);

  const handleContinue = () => {
    const selectedTree = trees.find(t => t.id === selectedTreeId);
    console.log('Continuing with selected tree:', selectedTree?.name);
    // You can handle state changes or navigation to Location Screen here
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
            source={item.image} // REPLACE_IMAGE: Source for each tree illustration in the card
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
                source={Images.leaf} // REPLACE_IMAGE: Mini green check or leaf verification icon
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
              <Text style={styles.specLabel}>CO₂ Absorption</Text>
              <Text style={styles.specValue}>{item.co2}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Growth Rate</Text>
              <Text style={[styles.specValue, { color: Colors.tint }]}>{item.growthRate}</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Maintenance</Text>
              <Text style={[styles.specValue, { color: item.maintenance === 'Low' ? Colors.tint : '#4B5E53' }]}>
                {item.maintenance}
              </Text>
            </View>
          </View>
        </View>

        {/* Top-Right Green Points Badge */}
        <View style={styles.cardPointsBadge}>
          {/* Little green points/leaf badge icon */}
          <Image
            source={Images.leaf} // REPLACE_IMAGE: Leaf or coin points badge icon
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
            source={Images.verified} // REPLACE_IMAGE: Right-facing small white arrow
            style={[styles.arrowButtonIcon, { transform: [{ rotate: '-90deg' }] }]} // placeholder rotate
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
            source={Images.verified} // REPLACE_IMAGE: Header Back left arrow icon
            style={[styles.backIcon, { transform: [{ rotate: '90deg' }] }]} // rotate placeholder to face left
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Plant Your First Tree</Text>

        {/* Green Points Badge on the Right */}
        <View style={styles.pointsBadge}>
          {/* Gold Coin Icon */}
          <Image
            source={Images.globe} // REPLACE_IMAGE: Points badge gold coin/green-point icon
            style={styles.pointsIcon}
            resizeMode="contain"
          />
          <Text style={styles.pointsText}>1,250 Green Points</Text>
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
            <Text style={styles.stepLabelActive}>Choose Tree</Text>
            <View style={[styles.stepLine, styles.stepLineActive]} />
          </View>

          {/* Step 2 */}
          <View style={styles.stepWrapper}>
            <View style={[styles.stepCircle, styles.stepCircleInactive]}>
              <Text style={styles.stepTextInactive}>2</Text>
            </View>
            <Text style={styles.stepLabelInactive}>Choose Location</Text>
            <View style={styles.stepLine} />
          </View>

          {/* Step 3 */}
          <View style={styles.stepWrapper}>
            <View style={[styles.stepCircle, styles.stepCircleInactive]}>
              <Text style={styles.stepTextInactive}>3</Text>
            </View>
            <Text style={styles.stepLabelInactive}>Details</Text>
            <View style={styles.stepLine} />
          </View>

          {/* Step 4 */}
          <View style={styles.stepWrapper}>
            <View style={[styles.stepCircle, styles.stepCircleInactive]}>
              <Text style={styles.stepTextInactive}>4</Text>
            </View>
            <Text style={styles.stepLabelInactive}>Payment</Text>
          </View>
        </View>

        {/* 3. Selected State Decorative Card */}
        <View style={styles.selectedStateCard}>
          <View style={styles.stateTextContainer}>
            <View style={styles.stateIconContainer}>
              {/* Map Marker Pin Icon */}
              <Image
                source={Images.location} // REPLACE_IMAGE: Green pin location icon
                style={styles.stateIcon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.stateLabel}>Selected State</Text>
            <Text style={styles.stateName}>Rajasthan</Text>

            <TouchableOpacity style={styles.changeStateContainer} activeOpacity={0.7}>
              <Text style={styles.changeStateText}>Change State</Text>
              {/* Tiny Edit Pencil Icon */}
              <Image
                source={Images.verified} // REPLACE_IMAGE: Edit pencil icon
                style={styles.pencilIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* Right Side Teardrop Fort Graphic */}
          <View style={styles.stateGraphicContainer}>
            <Image
              source={Images.chooseTree} // REPLACE_IMAGE: Teardrop glass-pin fort illustration (assets/Images/chooseTree.png)
              style={styles.stateGraphic}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* 4. Choose Tree Headers */}
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>
            Choose a Tree to {'\n'}Plant in <Text style={styles.mainTitleHighlight}>Rajasthan</Text>
          </Text>
          <Text style={styles.mainSubtitle}>
            Every tree you plant contributes to a <Text style={styles.mainSubtitleHighlight}>greener</Text> and healthier Rajasthan.
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
                  source={cat.icon} // REPLACE_IMAGE: Mini icon beside category text (e.g. leaf, tree)
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
              <Text style={styles.bannerTextTitle}>Once you choose a tree,</Text>
              <Text style={styles.bannerTextDesc}>
                you'll be able to select the best location for plantation in Rajasthan.
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
              <Text style={styles.benefitLabel}>Reduces</Text>
              <Text style={styles.benefitValue}>Carbon</Text>
            </View>
            <View style={styles.benefitItem}>
              <Image
                source={Images.bird}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
              <Text style={styles.benefitLabel}>Supports</Text>
              <Text style={styles.benefitValue}>Biodiversity</Text>
            </View>
            <View style={styles.benefitItem}>
              <Image
                source={Images.earth}
                style={styles.benefitIcon}
                resizeMode="contain"
              />
              <Text style={styles.benefitLabel}>Creates a</Text>
              <Text style={styles.benefitValue}>Greener Future</Text>
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
              All trees are verified and planted in partnership with local communities.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.85}
          >
            <Text style={styles.continueText}>Continue</Text>
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
