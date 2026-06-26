import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Switch,
    StatusBar,
    ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import Images from '../../../constants/images';
import { Colors } from '../../../comman/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import String from '../../../comman/String';

interface Recipient {
    name: string;
    qty: number;
    icon: any;
}

const DedicatePlantationScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'DedicatePlantationScreen'>>();

    // Retrieve parameters from previous screen, with defaults matching the Rajasthan/Aravalli mockup
    const qty = route.params?.qty ?? 10;
    const co2 = route.params?.co2 ?? (qty * 22);
    const projectName = route.params?.projectName ?? 'Aravalli Restoration Project';
    const stateName = route.params?.stateName ?? 'Rajasthan';
    const treeName = route.params?.treeName ?? 'Neem Tree';

    // Form selection states
    const [selectedType, setSelectedType] = useState('myself'); // 'myself' | 'gift' | 'birthday' etc.
    const [allocation, setAllocation] = useState('one'); // 'one' | 'split'
    const [isMeToggle, setIsMeToggle] = useState(false);

    const isHi = String.ChooseTree_CategoryNative === 'स्वदेशी';

    // Inputs focus and value states
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [recipientPhone, setRecipientPhone] = useState('');
    const [personalMessage, setPersonalMessage] = useState('May these trees grow and inspire a greener future.');

    // Toggle states for updates
    const [receiveUpdates, setReceiveUpdates] = useState(true);
    const [receiveGps, setReceiveGps] = useState(true);
    const [receivePhotos, setReceivePhotos] = useState(true);
    const [receiveCarbon, setReceiveCarbon] = useState(true);

    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [isMsgFocused, setIsMsgFocused] = useState(false);

    // Static types based on mockup
    const dedicationTypes = [
        { id: 'myself', title: String.DedicateTree_OptionMyselfTitle, icon: Images.leaf },
        { id: 'gift', title: String.Home_QuickGiftTitle.replace('\n', ' '), icon: Images.gift },
        { id: 'birthday', title: String.DedicateTree_OptionBirthdayTitle, icon: Images.calendar },
        { id: 'anniversary', title: String.DedicateTree_OptionAnniversaryTitle, icon: Images.verified }, // Ring fallback
        { id: 'lovedone', title: String.DedicateTree_OptionLovedOneTitle, icon: Images.heart },
        { id: 'inmemory', title: String.DedicateTree_OptionMemoryTitle, icon: Images.bird },
        { id: 'corporate', title: String.DedicateTree_OptionCorporateTitle, icon: Images.folder },
    ];

    const allocationOptions = [
        {
            id: 'one',
            title: isHi ? `सभी ${qty} पेड़ एक व्यक्ति को समर्पित करें` : `Dedicate all ${qty} trees to one person`,
            subtitle: isHi ? 'सभी पेड़ एक ही व्यक्ति को समर्पित किए जाएंगे' : 'All trees will be dedicated to the same person',
            icon: Images.profile,
        },
        {
            id: 'split',
            title: isHi ? 'अनेक प्राप्तकर्ताओं में विभाजित करें' : 'Split among multiple recipients',
            subtitle: isHi ? 'एक से अधिक व्यक्तियों को पेड़ समर्पित करें' : 'Dedicate trees to more than one person',
            icon: Images.group,
        },
    ];

    // Static default split recipients for mockup demonstration
    const defaultRecipients: Recipient[] = [
        { name: 'Aarav Sharma', qty: Math.ceil(qty * 0.5), icon: Images.profile },
        { name: 'Riya Verma', qty: Math.ceil(qty * 0.3), icon: Images.profile },
        { name: 'Parents', qty: Math.max(1, qty - Math.ceil(qty * 0.5) - Math.ceil(qty * 0.3)), icon: Images.group },
    ];

    // Toggle "This is for me" helper to auto-fill recipient values
    useEffect(() => {
        if (isMeToggle) {
            setRecipientName(isHi ? 'स्वयं' : 'Self');
            setRecipientEmail('user@geotree.org');
            setRecipientPhone('+91 9999999999');
        } else {
            setRecipientName('');
            setRecipientEmail('');
            setRecipientPhone('');
        }
    }, [isMeToggle]);

    const handleProceed = () => {
        navigation.navigate('ReviewPlantation', {
            // name: recipientName || 'You',
            // dedication: personalMessage || 'In memory of My Grandfather',
        });
    };

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                </TouchableOpacity>

                {/* Stepper indicator with background line and active segments */}
                <View style={styles.stepperContainer}>
                    <View style={styles.stepperLine} />
                    <View style={styles.stepperLineActive} />

                    <View style={styles.stepItem}>
                        <View style={styles.stepCircleContainer}>
                            <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                                <Image source={Images.location} style={styles.stepIconCompleted} resizeMode="contain" />
                            </View>
                            <View style={styles.checkmarkBadge}>
                                <Image source={Images.check} style={styles.checkmarkBadgeIcon} resizeMode="contain" />
                            </View>
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>{String.ChoiceTree_StepState}</Text>
                    </View>

                    <View style={styles.stepItem}>
                        <View style={styles.stepCircleContainer}>
                            <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                                <Image source={Images.projectIcon} style={styles.stepIconCompleted} resizeMode="contain" />
                            </View>
                            <View style={styles.checkmarkBadge}>
                                <Image source={Images.check} style={styles.checkmarkBadgeIcon} resizeMode="contain" />
                            </View>
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>{String.ChoiceTree_StepProject}</Text>
                    </View>

                    <View style={styles.stepItem}>
                        <View style={styles.stepCircleContainer}>
                            <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                                <Image source={Images.treeIcon} style={styles.stepIconCompleted} resizeMode="contain" />
                            </View>
                            <View style={styles.checkmarkBadge}>
                                <Image source={Images.check} style={styles.checkmarkBadgeIcon} resizeMode="contain" />
                            </View>
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>{String.ChoiceTree_StepTree}</Text>
                    </View>

                    <View style={styles.stepItem}>
                        <View style={[styles.stepCircle, styles.stepCircleActive]}>
                            <Image source={Images.heart} style={[styles.stepIcon, styles.stepIconActive, { tintColor: Colors.legacyGreen, }]} resizeMode="contain" />
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>{String.ChoiceTree_StepDedication}</Text>
                    </View>

                    <View style={styles.stepItem}>
                        <View style={styles.stepCircle}>
                            <Image source={Images.lock} style={styles.stepIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.stepLabel}>{String.ChoiceTree_StepPayment}</Text>
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Top Navigation Row & Stepper Indicator inside Hero ImageBackground */}
                <ImageBackground source={Images.location_hero_bg} style={styles.headerHeroBg} imageStyle={styles.heroImageRadius} resizeMode='center'>

                    {/* Hero section title */}
                    <View style={styles.heroSection}>
                        <View style={styles.heroLeft}>
                            <View style={{ flexDirection: 'column' }}>
                                {isHi ? (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.heroTitle}>{String.DedicateTree_Title}</Text>
                                        <Image source={Images.leaf} style={styles.heroTitleLeaf} resizeMode="contain" />
                                    </View>
                                ) : (
                                    <>
                                        <Text style={styles.heroTitle}>Dedicate Your</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                            <Text style={styles.heroTitle}>Plantation</Text>
                                            <Image source={Images.leaf} style={styles.heroTitleLeaf} resizeMode="contain" />
                                        </View>
                                    </>
                                )}
                            </View>
                            <Text style={styles.heroSubtitle}>{String.DedicateTree_Subtitle.replace('\n', ' ')}</Text>
                        </View>
                        <View style={styles.heroRight}>
                            <View style={styles.heroRightContainer}>
                                <View style={styles.secureBadge}>
                                    <View style={styles.secureBadgeTextCol}>
                                        <Text style={styles.secureBadgeText}>{String.ChoiceTree_VerifiedTransparent}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Selected Summary Card */}
                <View style={styles.summaryCard}>
                    <View style={styles.summaryLeftCol}>
                        <View style={styles.summaryTreeImgContainer}>
                            <Image source={Images.one_tree_plant} style={styles.summaryTreeImg} resizeMode="contain" />
                        </View>
                    </View>
                    <View style={styles.summaryRightCol}>
                        <View style={styles.summaryHeaderRow}>
                            <Text style={styles.summaryTreeName}>{treeName}</Text>
                            <View style={styles.gpsVerifiedBadge}>
                                <Image source={Images.shield} style={styles.gpsVerifiedIcon} resizeMode="contain" />
                                <Text style={styles.gpsVerifiedText}>{String.WhichTree_GpsVerified}</Text>
                            </View>
                        </View>

                        <View style={styles.summaryStatsRow}>
                            <View style={styles.summaryStatCol}>
                                <Text style={styles.summaryStatLabel}>{isHi ? 'मात्रा' : 'Quantity'}</Text>
                                <Text style={styles.summaryStatValGreen}>{qty === 1 ? String.DedicateTree_TreeVal.replace('{{count}}', qty.toString()) : String.DedicateTree_TreesVal.replace('{{count}}', qty.toString())}</Text>
                            </View>
                            <View style={styles.summaryStatDivider} />
                            <View style={[styles.summaryStatCol, { flex: 1.5 }]}>
                                <Text style={styles.summaryStatLabel}>{String.DedicateTree_Location}</Text>
                                <Text style={styles.summaryStatVal} numberOfLines={2}>
                                    {projectName}{'\n'}{stateName === 'Rajasthan' ? 'Jaipur, ' : ''}{stateName}
                                </Text>
                            </View>
                            <View style={styles.summaryStatDivider} />
                            <View style={styles.summaryStatCol}>
                                <Text style={styles.summaryStatLabel}>{String.Review_EstCo2}</Text>
                                <View style={styles.co2Row}>
                                    <Text style={styles.summaryStatValGreen}>{String.ChoiceTree_Co2Year.replace('{{count}}', co2.toString())}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* 1. Dedication Type */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>{isHi ? '1. समर्पण का प्रकार 🍃' : '1. Dedication Type 🍃'}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.typeList}>
                        {dedicationTypes.map(item => {
                            const isTypeActive = selectedType === item.id;
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[styles.typeCard, isTypeActive && styles.typeCardActive]}
                                    onPress={() => setSelectedType(item.id)}
                                    activeOpacity={0.8}
                                >
                                    {isTypeActive && (
                                        <View style={styles.checkmarkBadgeSelection}>
                                            <Image source={Images.check} style={styles.checkmarkBadgeSelectionIcon} resizeMode="contain" />
                                        </View>
                                    )}
                                    <Image source={item.icon} style={[styles.typeIcon, isTypeActive && styles.typeIconActive]} resizeMode="contain" />
                                    <Text style={[styles.typeTitle, isTypeActive && styles.typeTitleActive]}>{item.title}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* 2. Tree Allocation */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>{isHi ? '2. पेड़ आवंटन 🍃' : '2. Tree Allocation 🍃'}</Text>

                    <View style={styles.allocationRow}>
                        {allocationOptions.map(option => {
                            const isSelected = allocation === option.id;
                            return (
                                <TouchableOpacity
                                    key={option.id}
                                    style={[styles.allocationCard, isSelected && styles.allocationCardActive]}
                                    onPress={() => setAllocation(option.id)}
                                    activeOpacity={0.9}
                                >
                                    <Image source={option.icon} style={styles.allocationIcon} resizeMode="contain" />
                                    <View style={styles.allocationTextCol}>
                                        <Text style={styles.allocationTitle}>{option.title}</Text>
                                        <Text style={styles.allocationSubtitle}>{option.subtitle}</Text>
                                    </View>
                                    <View style={[styles.allocationCheck, isSelected && styles.allocationCheckActive]}>
                                        {isSelected && (
                                            <Image source={Images.check} style={{ width: 8, height: 8, tintColor: '#FFFFFF' }} resizeMode="contain" />
                                        )}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Example sub-row for split allocation */}
                    {allocation === 'split' && (
                        <View style={styles.exampleContainer}>
                            <Text style={styles.exampleTitle}>{isHi ? 'उदाहरण: अनेक प्राप्तकर्ताओं में विभाजित करें 🍃' : 'Example: Split among multiple recipients 🍃'}</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.exampleScrollList}>
                                {defaultRecipients.map((rec, index) => (
                                    <View key={index} style={styles.exampleBadge}>
                                        <View style={styles.exampleBadgeIconBg}>
                                            <Image source={rec.icon} style={styles.exampleBadgeIcon} resizeMode="contain" />
                                        </View>
                                        <View style={styles.exampleBadgeTextCol}>
                                            <Text style={styles.exampleBadgeName}>{rec.name === 'Parents' && isHi ? 'माता-पिता' : rec.name}</Text>
                                            <Text style={styles.exampleBadgeQty}>{rec.qty === 1 ? String.DedicateTree_TreeVal.replace('{{count}}', rec.qty.toString()) : String.DedicateTree_TreesVal.replace('{{count}}', rec.qty.toString())}</Text>
                                        </View>
                                    </View>
                                ))}
                                <TouchableOpacity style={styles.exampleAddBadge} activeOpacity={0.7}>
                                    <Text style={styles.exampleAddText}>{isHi ? '+ प्राप्तकर्ता जोड़ें' : '+ Add Recipient'}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    )}
                </View>

                {/* 3. Recipient Details */}
                <View style={styles.sectionContainer}>
                    <View style={styles.recipientHeaderRow}>
                        <Text style={styles.sectionTitle}>{isHi ? '3. प्राप्तकर्ता विवरण 🍃' : '3. Recipient Details 🍃'}</Text>
                        <View style={styles.thisIsMeRow}>
                            <Text style={styles.thisIsMeLabel}>{isHi ? 'यह मेरे लिए है' : 'This is for me'}</Text>
                            <Switch
                                value={isMeToggle}
                                onValueChange={setIsMeToggle}
                                trackColor={{ false: '#D1DCD6', true: Colors.legacyGreen }}
                                thumbColor="#FFFFFF"
                            />
                        </View>
                    </View>

                    <View style={styles.inputsRow}>
                        <View style={styles.inputGroupCol}>
                            <Text style={styles.inputLabel}>{String.DedicateTree_RecipientName}</Text>
                            <View style={[styles.inputWrapper, isNameFocused && styles.inputWrapperActive]}>
                                <Image source={Images.profile} style={styles.inputIcon} resizeMode="contain" />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={String.DedicateTree_EnterName}
                                    placeholderTextColor="#9CA3AF"
                                    value={recipientName}
                                    onChangeText={setRecipientName}
                                    onFocus={() => setIsNameFocused(true)}
                                    onBlur={() => setIsNameFocused(false)}
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroupCol}>
                            <Text style={styles.inputLabel}>{isHi ? 'ईमेल पता' : 'Email Address'}</Text>
                            <View style={[styles.inputWrapper, isEmailFocused && styles.inputWrapperActive]}>
                                <Image source={Images.bell} style={styles.inputIcon} resizeMode="contain" />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={isHi ? 'ईमेल दर्ज करें' : 'Enter email'}
                                    placeholderTextColor="#9CA3AF"
                                    value={recipientEmail}
                                    onChangeText={setRecipientEmail}
                                    onFocus={() => setIsEmailFocused(true)}
                                    onBlur={() => setIsEmailFocused(false)}
                                    keyboardType="email-address"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroupCol}>
                            <Text style={styles.inputLabel}>{String.MobileNumber}</Text>
                            <View style={[styles.inputWrapper, isPhoneFocused && styles.inputWrapperActive]}>
                                <Image source={Images.location} style={styles.inputIcon} resizeMode="contain" />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={String.SignIn_MobilePlaceholder}
                                    placeholderTextColor="#9CA3AF"
                                    value={recipientPhone}
                                    onChangeText={setRecipientPhone}
                                    onFocus={() => setIsPhoneFocused(true)}
                                    onBlur={() => setIsPhoneFocused(false)}
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Two-Column Form & Impact Preview Section */}
                <View style={styles.twoColumnRow}>
                    {/* Left Column */}
                    <View style={styles.leftColumn}>
                        {/* 4. Personal Message */}
                        <Text style={styles.sectionTitle}>{isHi ? '4. व्यक्तिगत संदेश 🍃' : '4. Personal Message 🍃'}</Text>
                        <View style={[styles.messageCard, isMsgFocused && styles.messageCardActive]}>
                            <View style={styles.messageInputCol}>
                                <TextInput
                                    style={styles.messageTextInput}
                                    placeholder={String.DedicateTree_WriteMessage}
                                    placeholderTextColor="#9CA3AF"
                                    multiline
                                    value={personalMessage}
                                    onChangeText={setPersonalMessage}
                                    maxLength={200}
                                    onFocus={() => setIsMsgFocused(true)}
                                    onBlur={() => setIsMsgFocused(false)}
                                />
                            </View>
                            <View style={styles.messageGraphicCol}>
                                <Image source={Images.selectfootertree} style={styles.messageGraphic} resizeMode="contain" />
                                <Text style={styles.messageCharCount}>{personalMessage.length}/200</Text>
                            </View>
                        </View>

                        <View style={{ height: 16 }} />

                        {/* 5. Receive Updates About Your Plantation */}
                        <Text style={styles.sectionTitle}>{isHi ? '5. अपने वृक्षारोपण के बारे में अपडेट प्राप्त करें 🍃' : '5. Receive Updates About Your Plantation 🍃'}</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.updatesList}>
                            <View style={styles.updateToggleCard}>
                                <View style={styles.updateIconBg}>
                                    <Image source={Images.bell} style={styles.updateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.updateTitle}>{String.DedicateTree_ReceiveUpdates}</Text>
                                    <Text style={styles.updateDesc}>{String.DedicateTree_ReceiveUpdatesDesc}</Text>
                                </View>
                                <View style={styles.updateSwitchRow}>
                                    <Switch
                                        value={receiveUpdates}
                                        onValueChange={setReceiveUpdates}
                                        trackColor={{ false: '#D1DCD6', true: Colors.legacyGreen }}
                                        thumbColor="#FFFFFF"
                                    />
                                </View>
                            </View>

                            <View style={styles.updateToggleCard}>
                                <View style={styles.updateIconBg}>
                                    <Image source={Images.location} style={styles.updateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.updateTitle}>{isHi ? 'जीपीएस सत्यापन प्राप्त करें' : 'Receive GPS Verification'}</Text>
                                    <Text style={styles.updateDesc}>{isHi ? 'जीपीएस स्थान और सत्यापन अपडेट प्राप्त करें' : 'Get GPS location & verification updates'}</Text>
                                </View>
                                <View style={styles.updateSwitchRow}>
                                    <Switch
                                        value={receiveGps}
                                        onValueChange={setReceiveGps}
                                        trackColor={{ false: '#D1DCD6', true: Colors.legacyGreen }}
                                        thumbColor="#FFFFFF"
                                    />
                                </View>
                            </View>

                            <View style={styles.updateToggleCard}>
                                <View style={styles.updateIconBg}>
                                    <Image source={Images.verified} style={styles.updateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.updateTitle}>{isHi ? 'विकास की तस्वीरें प्राप्त करें' : 'Receive Growth Photos'}</Text>
                                    <Text style={styles.updateDesc}>{isHi ? 'समय के साथ बढ़ते पेड़ों की तस्वीरें' : 'Photos of your trees growing over time'}</Text>
                                </View>
                                <View style={styles.updateSwitchRow}>
                                    <Switch
                                        value={receivePhotos}
                                        onValueChange={setReceivePhotos}
                                        trackColor={{ false: '#D1DCD6', true: Colors.legacyGreen }}
                                        thumbColor="#FFFFFF"
                                    />
                                </View>
                            </View>

                            <View style={styles.updateToggleCard}>
                                <View style={styles.updateIconBg}>
                                    <Image source={Images.Emission} style={styles.updateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.updateTitle}>{isHi ? 'कार्बन रिपोर्ट प्राप्त करें' : 'Receive Carbon Reports'}</Text>
                                    <Text style={styles.updateDesc}>{isHi ? 'CO₂ प्रभाव और पर्यावरणीय योगदान को ट्रैक करें' : 'Track CO₂ impact & environmental contribution'}</Text>
                                </View>
                                <View style={styles.updateSwitchRow}>
                                    <Switch
                                        value={receiveCarbon}
                                        onValueChange={setReceiveCarbon}
                                        trackColor={{ false: '#D1DCD6', true: Colors.legacyGreen }}
                                        thumbColor="#FFFFFF"
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Right Column (Impact Preview Sidebar) */}
                    <View style={styles.rightColumn}>
                        <View style={styles.previewCard}>
                            <View style={styles.previewTitleRow}>
                                <Text style={styles.previewTitleText}>{String.Payment_PreviewTitle}</Text>
                                <Image source={Images.leaf} style={styles.previewTitleLeaf} resizeMode="contain" />
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.treeIcon} style={[styles.previewIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>{qty === 1 ? String.DedicateTree_TreeVal.replace('{{count}}', qty.toString()) : String.DedicateTree_TreesVal.replace('{{count}}', qty.toString())}</Text>
                                    <Text style={styles.previewLabel}>{String.ChoiceTree_YouArePlanting}</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.globe} style={styles.previewIcon} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>{String.ChoiceTree_Co2Year.replace('{{count}}', co2.toString())}</Text>
                                    <Text style={styles.previewLabel}>{isHi ? 'कार्बन ऑफसेट' : 'Carbon offset'}</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.location} style={[styles.previewIcon, { tintColor: '#EF4444' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>{String.WhichTree_GpsVerified}</Text>
                                    <Text style={styles.previewLabel}>{isHi ? 'हर पेड़ पर जीपीएस टैग है' : 'Every tree is GPS tagged'}</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.verified} style={[styles.previewIcon, { tintColor: '#F59E0B' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>{isHi ? 'विकास की तस्वीरें शामिल' : 'Growth Photos Included'}</Text>
                                    <Text style={styles.previewLabel}>{isHi ? 'नियमित अपडेट' : 'Regular updates'}</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.shield} style={[styles.previewIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>{String.ChoiceTree_MonitoringVal} {String.ChoiceTree_Monitoring}</Text>
                                    <Text style={styles.previewLabel}>{isHi ? 'हम आपके पेड़ों की देखभाल करते हैं' : 'We care for your trees'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                {/* Bottom Trust Strip */}
                <View style={styles.trustBanner}>
                    <View style={styles.trustCol}>
                        <View style={styles.trustIconBg}>
                            <Image source={Images.verified} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustTitleText}>{isHi ? '100% सत्यापित' : '100% Verified'}</Text>
                            <Text style={styles.trustDescText}>{isHi ? 'जीपीएस ट्रैक और सत्यापित' : 'GPS tracked & verified'}</Text>
                        </View>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustCol}>
                        <View style={styles.trustIconBg}>
                            <Image source={Images.leaf} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustTitleText}>{isHi ? 'वास्तविक प्रभाव' : 'Real Impact'}</Text>
                            <Text style={styles.trustDescText}>{isHi ? 'मापने योग्य और पारदर्शी' : 'Measurable & Transparent'}</Text>
                        </View>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustCol}>
                        <View style={styles.trustIconBg}>
                            <Image source={Images.shield} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustTitleText}>{isHi ? '3 वर्ष देखभाल' : '3 Years Care'}</Text>
                            <Text style={styles.trustDescText}>{isHi ? 'निगरानी और अपडेट' : 'Monitoring & Updates'}</Text>
                        </View>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustCol}>
                        <View style={styles.trustIconBg}>
                            <Image source={Images.group} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustTitleText}>{String.ChoiceTree_TrustedBy}</Text>
                            <Text style={styles.trustDescText}>{String.ChoiceTree_PlantersAcross}</Text>
                        </View>
                    </View>
                </View>

                {/* main actions CTA button to payment */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.actionButton} onPress={handleProceed} activeOpacity={0.95}>
                        <LinearGradient
                            colors={['#1E6B46', '#12462E']}
                            style={styles.gradientBtn}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Image source={Images.handtree} style={styles.btnSaplingImg} resizeMode="contain" />
                            <Text style={styles.actionBtnText}>{String.DedicateTree_ContinuePayment}</Text>
                            {/* <Text style={styles.actionBtnArrow}>→</Text> */}
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.secureTextRow}>
                        <Text style={styles.secureIcon}>🔒</Text>
                        <Text style={styles.secureText}>{String.ChoiceTree_SecureNote}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DedicatePlantationScreen;
