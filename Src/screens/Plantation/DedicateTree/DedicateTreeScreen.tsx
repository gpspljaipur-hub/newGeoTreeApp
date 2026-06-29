import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store/Store';
import { ocassionData } from '../../../api/ApiService';
import { styles } from './styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../../constants/images';
import { Colors } from '../../../comman/Colors';
import MarginHW from '../../../comman/MarginHW';
import fonts from '../../../comman/fonts';
import FontsSize from '../../../comman/FontsSize';

interface WhoForOption {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
}

const DedicateTreeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'DedicateTree'>>();
  const dispatch = useDispatch();
  const apiOccasions = useSelector((state: RootState) => state.ocassion.ocassionList);

  React.useEffect(() => {
    ocassionData(dispatch);
  }, [dispatch]);

  // Extract project and species parameters with fallbacks
  const { project, selectedSpecies } = route.params || {};
  const currentProject = project || {
    name: 'Aravalli Green Belt',
    city: 'Jaipur, Rajasthan',
    treesPlanted: '25,000+',
    survivalRate: '96%',
    areaCovered: '120+ Acres',
    projectSince: '2019',
  };
  const currentSpecies = selectedSpecies || {
    id: 'neem',
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    image: Images.neem_tree,
    co2: '22 Kg/Year',
    lifespan: '100+ Years',
    waterNeed: 'Low',
    impact: {
      co2: '22 Kg/Year',
      oxygen: '160 Kg/Year',
      waterSaved: '1,000+ Liters/Year',
      biodiversity: 'High',
    },
  };

  // Form States
  const [selectedOptionId, setSelectedOptionId] = useState('myself');
  const [recipientName, setRecipientName] = useState('Aarav Sharma');
  const [occasion, setOccasion] = useState('Birthday');
  const [occasionDate, setOccasionDate] = useState('12 June 2010');
  const [email, setEmail] = useState('aarav.sharma@gmail.com');
  const [personalMessage, setPersonalMessage] = useState('Happy Birthday Aarav 🌱\n\nMay this tree grow stronger every year, just like your dreams.');
  const [quantity, setQuantity] = useState(1);

  // Checkbox States
  const [sendCertificate, setSendCertificate] = useState(true);
  const [notifyRecipient, setNotifyRecipient] = useState(true);
  const [receiveUpdates, setReceiveUpdates] = useState(true);
  const [addToPortfolio, setAddToPortfolio] = useState(true);

  // Modals visibility
  const [occasionModalVisible, setOccasionModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);

  // "Who is this tree for?" Options
  const whoForOptions: WhoForOption[] = [
    {
      id: 'myself',
      title: 'Myself',
      subtitle: 'Plant for your own impact',
      icon: Images.profile,
    },
    {
      id: 'birthday',
      title: 'Birthday',
      subtitle: 'Celebrate a birthday',
      icon: Images.gift,
    },
    {
      id: 'anniversary',
      title: 'Anniversary',
      subtitle: 'Celebrate a special milestone',
      icon: Images.heart,
    },
    {
      id: 'loved_one',
      title: 'Loved One',
      subtitle: 'Gift a tree to someone special',
      icon: Images.heart,
    },
    {
      id: 'memory',
      title: 'In Memory Of',
      subtitle: 'Create a lasting tribute',
      icon: Images.bird,
    },
    {
      id: 'corporate',
      title: 'Corporate / CSR',
      subtitle: 'Plant on behalf of an organization',
      icon: Images.group,
    },
  ];

  const occasionsList = apiOccasions && apiOccasions.length > 0
    ? apiOccasions.map((o: any) => o.name)
    : [
        'Birthday',
        'Anniversary',
        'In Memory Of',
        'Loved One Gift',
        'Corporate Event',
        'Other Celebration',
      ];

  // Custom simple date items for date picker modal
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 40 }, (_, i) => String(2030 - i));

  // Temporary selected date values for date picker modal
  const [tempDay, setTempDay] = useState('12');
  const [tempMonth, setTempMonth] = useState('June');
  const [tempYear, setTempYear] = useState('2010');

  // Handle Dynamic CO2 calculation based on quantity and tree absorption
  const getCO2Value = () => {
    const baseCO2 = parseFloat(currentSpecies.co2) || 22;
    return `${baseCO2 * quantity} KG / Year`;
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const selectOccasion = (item: string) => {
    setOccasion(item);
    setOccasionModalVisible(false);
  };

  const applyDate = () => {
    setOccasionDate(`${tempDay} ${tempMonth} ${tempYear}`);
    setDateModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* Header section with background */}
          <ImageBackground
            source={Images.DedicatedBg}
            style={styles.headerSection}
            resizeMode="cover"
          >
            <View style={styles.headerTopRow}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
              >
                <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, paddingTop: 75 }}>

              <View style={styles.headerContentRow}>
                <View style={styles.headerTextContainer}>
                  <View style={styles.headerTitleRow}>
                    <Text style={styles.headerTitle}>{"Dedicate Your Tree"}</Text>
                  </View>
                  <Text style={styles.headerSubtitle}>
                    Make this plantation meaningful {'\n'}by dedicating it to someone special.
                  </Text>
                </View>
              </View>

              {/* Floating Selected Tree & Project Summary Card */}
              <View style={styles.summaryCard}>
                <View style={[styles.summaryCol, styles.summaryColLeft]}>
                  <Image source={currentSpecies.image} style={styles.thumbnail} resizeMode="cover" />
                  <View style={styles.summaryTextContainer}>
                    <Text style={styles.summaryValue}>{currentSpecies.name}</Text>
                    <Text style={styles.summarySub}>{currentSpecies.scientificName}</Text>
                    {/* <View style={styles.nativeBadge}>
                      <View style={styles.nativeDot} />
                      <Text style={styles.nativeText}>Native Species</Text>
                    </View> */}
                  </View>
                </View>

                <View style={styles.summaryDivider} />

                <View style={[styles.summaryCol, styles.summaryColRight]}>
                  <Text style={styles.summaryValue}>{currentProject.name}</Text>
                  <View style={styles.locationContainer}>
                    <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" />
                    <Text style={styles.locationText}>{currentProject.city}</Text>
                  </View>
                  {/* <View style={styles.gpsBadge}>
                    <Image source={Images.verified} style={styles.gpsIcon} resizeMode="contain" />
                    <Text style={styles.gpsText}>GPS Verified</Text>
                  </View> */}
                </View>
              </View>
            </View>

          </ImageBackground>

          {/* Who is this tree for? */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Who is this tree for?</Text>
            </View>
          </View>

          <View style={styles.optionsContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.optionsScroll}
            >
              {whoForOptions.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <TouchableOpacity
                    key={opt.id}
                    style={[styles.optionCard, isSelected && styles.optionCardSelected]}
                    activeOpacity={0.85}
                    onPress={() => setSelectedOptionId(opt.id)}
                  >
                    {isSelected && (
                      <View style={styles.checkBadge}>
                        <Image source={Images.check} style={styles.checkIcon} resizeMode="contain" />
                      </View>
                    )}
                    <Image
                      source={opt.icon}
                      style={[styles.optionIcon, isSelected && styles.optionIconSelected]}
                      resizeMode="contain"
                    />
                    <Text style={[styles.optionTitle, isSelected && { color: '#056213' }]}>{opt.title}</Text>
                    <Text style={styles.optionSubtitle}>{opt.subtitle}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* Dedication Details */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Dedication Details</Text>
              <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
            </View>

            <View style={styles.formGrid}>
              {/* Recipient Name */}
              <View style={styles.inputCol}>
                <View style={styles.inputLabelRow}>
                  <Text style={styles.inputLabel}>Recipient Name</Text>
                  <Text style={styles.requiredStar}>*</Text>
                </View>
                <View style={styles.inputWrapper}>
                  <Image source={Images.profile} style={styles.inputIcon} resizeMode="contain" />
                  <TextInput
                    style={styles.textInput}
                    value={recipientName}
                    onChangeText={setRecipientName}
                    placeholder="Enter name"
                    placeholderTextColor={Colors.placeholderColor}
                  />
                </View>
              </View>

              {/* Occasion */}
              <View style={styles.inputCol}>
                <View style={styles.inputLabelRow}>
                  <Text style={styles.inputLabel}>Occasion</Text>
                  <Text style={styles.requiredStar}>*</Text>
                </View>
                <TouchableOpacity
                  style={styles.inputWrapper}
                  activeOpacity={0.7}
                  onPress={() => setOccasionModalVisible(true)}
                >
                  <Image source={Images.gift} style={styles.inputIcon} resizeMode="contain" />
                  <View style={styles.dropdownTrigger}>
                    <Text style={occasion ? styles.dropdownText : styles.dropdownPlaceholder}>
                      {occasion || 'Select Occasion'}
                    </Text>
                    <Text style={styles.dropdownArrow}>▼</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Occasion Date */}
              <View style={styles.inputCol}>
                <View style={styles.inputLabelRow}>
                  <Text style={styles.inputLabel}>
                    {occasion ? `${occasion} Date` : 'Occasion Date'}
                  </Text>
                  <Text style={styles.requiredStar}>*</Text>
                </View>
                <TouchableOpacity
                  style={styles.inputWrapper}
                  activeOpacity={0.7}
                  onPress={() => setDateModalVisible(true)}
                >
                  <Image source={Images.calendar} style={styles.inputIcon} resizeMode="contain" />
                  <View style={styles.dropdownTrigger}>
                    <Text style={styles.dropdownText}>{occasionDate}</Text>
                    <Image source={Images.calendar} style={[styles.inputIcon, { marginRight: 0 }]} resizeMode="contain" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Email Optional */}
              <View style={styles.inputCol}>
                <View style={styles.inputLabelRow}>
                  <Text style={styles.inputLabel}>Email (Optional)</Text>
                </View>
                <View style={styles.inputWrapper}>
                  <Image source={Images.email} style={styles.inputIcon} resizeMode="contain" />
                  <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter email address"
                    placeholderTextColor={Colors.placeholderColor}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.messageSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Personal Message</Text>
              <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
            </View>
            <View style={styles.messageWrapper}>
              <TextInput
                style={styles.messageInput}
                value={personalMessage}
                onChangeText={setPersonalMessage}
                maxLength={200}
                multiline
                placeholder="Write a message..."
                placeholderTextColor={Colors.placeholderColor}
              />
              <Text style={styles.charCounter}>{personalMessage.length}/200</Text>
            </View>
          </View>


          {/* Two-Column Row Container */}
          <View style={styles.twoColumnRow}>

            <View style={styles.specialOptionsSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Special Options</Text>
                <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
              </View>

              <View style={styles.checkboxList}>
                {/* 1. Send Digital Certificate */}
                <TouchableOpacity
                  style={styles.checkboxRow}
                  activeOpacity={0.8}
                  onPress={() => setSendCertificate(!sendCertificate)}
                >
                  <View style={[styles.checkbox, sendCertificate && styles.checkboxChecked]}>
                    {sendCertificate && <Image source={Images.check} style={styles.checkboxIcon} resizeMode="contain" />}
                  </View>
                  <View style={styles.checkboxDetails}>
                    <View style={styles.checkboxHeaderRow}>
                      <Image source={Images.certificate} style={styles.checkboxListIcon} resizeMode="contain" />
                      <Text style={styles.checkboxLabel}>Send Digital Certificate</Text>
                    </View>
                    <Text style={styles.checkboxSublabel}>We will email the certificate to recipient</Text>
                  </View>
                </TouchableOpacity>

                {/* 2. Notify Recipient */}
                <TouchableOpacity
                  style={styles.checkboxRow}
                  activeOpacity={0.8}
                  onPress={() => setNotifyRecipient(!notifyRecipient)}
                >
                  <View style={[styles.checkbox, notifyRecipient && styles.checkboxChecked]}>
                    {notifyRecipient && <Image source={Images.check} style={styles.checkboxIcon} resizeMode="contain" />}
                  </View>
                  <View style={styles.checkboxDetails}>
                    <View style={styles.checkboxHeaderRow}>
                      <Image source={Images.bird} style={styles.checkboxListIcon} resizeMode="contain" />
                      <Text style={styles.checkboxLabel}>Notify Recipient via Email</Text>
                    </View>
                    <Text style={styles.checkboxSublabel}>Recipient will be notified about this dedication</Text>
                  </View>
                </TouchableOpacity>

                {/* 3. Receive Growth Updates */}
                <TouchableOpacity
                  style={styles.checkboxRow}
                  activeOpacity={0.8}
                  onPress={() => setReceiveUpdates(!receiveUpdates)}
                >
                  <View style={[styles.checkbox, receiveUpdates && styles.checkboxChecked]}>
                    {receiveUpdates && <Image source={Images.check} style={styles.checkboxIcon} resizeMode="contain" />}
                  </View>
                  <View style={styles.checkboxDetails}>
                    <View style={styles.checkboxHeaderRow}>
                      <Image source={Images.plant} style={styles.checkboxListIcon} resizeMode="contain" />
                      <Text style={styles.checkboxLabel}>Receive Growth Updates</Text>
                    </View>
                    <Text style={styles.checkboxSublabel}>Get updates about your tree's growth</Text>
                  </View>
                </TouchableOpacity>

                {/* 4. Add Tree to Portfolio */}
                <TouchableOpacity
                  style={styles.checkboxRow}
                  activeOpacity={0.8}
                  onPress={() => setAddToPortfolio(!addToPortfolio)}
                >
                  <View style={[styles.checkbox, addToPortfolio && styles.checkboxChecked]}>
                    {addToPortfolio && <Image source={Images.check} style={styles.checkboxIcon} resizeMode="contain" />}
                  </View>
                  <View style={styles.checkboxDetails}>
                    <View style={styles.checkboxHeaderRow}>
                      <Image source={Images.folder} style={styles.checkboxListIcon} resizeMode="contain" />
                      <Text style={styles.checkboxLabel}>Add Tree to My Impact Portfolio</Text>
                    </View>
                    <Text style={styles.checkboxSublabel}>Track and showcase your green impact</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rightColumn}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Impact Summary</Text>
                <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
              </View>

              <View style={styles.impactCard}>
                <View style={styles.impactList}>
                  {/* Trees Count */}
                  <View style={styles.impactItem}>
                    <View style={styles.impactCircle}>
                      <Image source={Images.treeIcon} style={styles.impactItemIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.impactItemMeta}>
                      <Text style={styles.impactItemLabel}>Trees</Text>
                      <Text style={styles.impactItemValue}>
                        {quantity} {quantity === 1 ? 'Tree' : 'Trees'}
                      </Text>
                    </View>
                  </View>

                  {/* CO2 Absorption */}
                  <View style={styles.impactItem}>
                    <View style={styles.impactCircle}>
                      <Image source={Images.co2Cloud} style={styles.impactItemIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.impactItemMeta}>
                      <Text style={styles.impactItemLabel}>CO₂ Absorption</Text>
                      <Text style={styles.impactItemValue}>{getCO2Value()}</Text>
                    </View>
                  </View>

                  {/* Location */}
                  <View style={styles.impactItem}>
                    <View style={styles.impactCircle}>
                      <Image source={Images.location} style={styles.impactItemIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.impactItemMeta}>
                      <Text style={styles.impactItemLabel}>Location</Text>
                      <Text style={styles.impactItemValue} numberOfLines={2}>
                        {currentProject.name}, {currentProject.city.split(',')[0]}
                      </Text>
                    </View>
                  </View>

                  {/* Certificate */}
                  <View style={[styles.impactItem, styles.impactItemLast]}>
                    <View style={styles.impactCircle}>
                      <Image source={Images.certificate} style={styles.impactItemIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.impactItemMeta}>
                      <Text style={styles.impactItemLabel}>Certificate</Text>
                      <Text style={styles.impactItemValue}>
                        {sendCertificate ? 'Digital Certificate Included' : 'No Certificate Requested'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.greenBanner}>
            <Image source={Images.leaf} style={styles.greenBannerIcon} resizeMode="contain" />
            <Text style={styles.greenBannerText}>
              <Text style={styles.greenBannerStrong}>You are making a real impact!</Text>{'\n'}
              Thank you for contributing to a greener tomorrow.
            </Text>
          </View>

          <View style={styles.numberTreesSection}>
            <View style={styles.numberTreesHeaderRow}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Number of Trees</Text>
                <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" />
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.counterButton} onPress={decrementQuantity}>
                  <Text style={styles.counterButtonText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.counterValue}>{quantity} {quantity === 1 ? 'Tree' : 'Trees'}</Text>
                <TouchableOpacity style={styles.counterButton} onPress={incrementQuantity}>
                  <Text style={styles.counterButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.quickSelectRow}
              data={[
                { id: '1', label: '1 Tree', value: 1 },
                { id: '5', label: '5 Trees', value: 5 },
                { id: '10', label: '10 Trees', value: 10 },
                { id: 'custom', label: 'Custom', value: null }
              ]}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const isSelected = item.value !== null ? quantity === item.value : (quantity !== 1 && quantity !== 5 && quantity !== 10);
                return (
                  <TouchableOpacity
                    style={[styles.quickSelectBtn, isSelected && styles.quickSelectBtnSelected]}
                    onPress={() => {
                      if (item.value !== null) {
                        setQuantity(item.value);
                      }
                    }}
                  >
                    <Text style={[styles.quickSelectText, isSelected && styles.quickSelectTextSelected]}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.paymentButton}
              activeOpacity={0.9}
              onPress={() => navigation.navigate('StatePayment', {
                project: currentProject,
                selectedSpecies: currentSpecies,
                quantity,
                recipientName,
                occasion,
                occasionDate,
                email,
                personalMessage,
                sendCertificate,
              })}
            >
              <Image
                source={Images.handtree}
                style={styles.paymentButtonLeftImg}
                resizeMode="contain"
              />
              <View style={styles.paymentButtonContent}>
                <Text style={styles.paymentButtonText}>Continue to Payment</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.secureRow}>
              <Image source={Images.lock} style={styles.secureIcon} resizeMode="contain" />
              <Text style={styles.secureText}>Secure Payment  •  SSL Encrypted  •  Trusted by Thousands</Text>
            </View>
          </View>
        </ScrollView>

        {/* Sticky Footer Continue to Payment */}


        {/* Occasion Selection Modal */}
        <Modal
          visible={occasionModalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setOccasionModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setOccasionModalVisible(false)}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Occasion</Text>
                <TouchableOpacity onPress={() => setOccasionModalVisible(false)}>
                  <Text style={styles.modalCloseText}>Done</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={occasionsList}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => selectOccasion(item)}
                  >
                    <Text style={[
                      styles.modalItemText,
                      occasion === item && { fontFamily: fonts.OpenSans_Bold, color: Colors.legacyGreen }
                    ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>

        {/* Date Selection Modal */}
        <Modal
          visible={dateModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setDateModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setDateModalVisible(false)}
          >
            <View style={[styles.modalContent, { maxHeight: hp(45) }]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Date</Text>
                <TouchableOpacity onPress={applyDate}>
                  <Text style={styles.modalCloseText}>Confirm</Text>
                </TouchableOpacity>
              </View>

              {/* Standard Simple Pickers Grid */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                {/* Day List */}
                <View style={{ flex: 1, height: 180, borderRightWidth: 1, borderColor: '#F3F4F6' }}>
                  <Text style={{ textAlign: 'center', fontFamily: fonts.OpenSans_Bold, fontSize: 12, marginBottom: 5 }}>Day</Text>
                  <FlatList
                    data={days}
                    keyExtractor={(item) => `day-${item}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ paddingVertical: 8 }}
                        onPress={() => setTempDay(item)}
                      >
                        <Text style={{
                          textAlign: 'center',
                          fontSize: 14,
                          fontFamily: tempDay === item ? fonts.OpenSans_Bold : fonts.OpenSans_Regular,
                          color: tempDay === item ? Colors.legacyGreen : Colors.textDarkGreen
                        }}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>

                {/* Month List */}
                <View style={{ flex: 1.5, height: 180, borderRightWidth: 1, borderColor: '#F3F4F6' }}>
                  <Text style={{ textAlign: 'center', fontFamily: fonts.OpenSans_Bold, fontSize: 12, marginBottom: 5 }}>Month</Text>
                  <FlatList
                    data={months}
                    keyExtractor={(item) => `month-${item}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ paddingVertical: 8 }}
                        onPress={() => setTempMonth(item)}
                      >
                        <Text style={{
                          textAlign: 'center',
                          fontSize: 14,
                          fontFamily: tempMonth === item ? fonts.OpenSans_Bold : fonts.OpenSans_Regular,
                          color: tempMonth === item ? Colors.legacyGreen : Colors.textDarkGreen
                        }}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>

                {/* Year List */}
                <View style={{ flex: 1.2, height: 180 }}>
                  <Text style={{ textAlign: 'center', fontFamily: fonts.OpenSans_Bold, fontSize: 12, marginBottom: 5 }}>Year</Text>
                  <FlatList
                    data={years}
                    keyExtractor={(item) => `year-${item}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ paddingVertical: 8 }}
                        onPress={() => setTempYear(item)}
                      >
                        <Text style={{
                          textAlign: 'center',
                          fontSize: 14,
                          fontFamily: tempYear === item ? fonts.OpenSans_Bold : fonts.OpenSans_Regular,
                          color: tempYear === item ? Colors.legacyGreen : Colors.textDarkGreen
                        }}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

      </View>
    </SafeAreaView>
  );
};

export default DedicateTreeScreen;

