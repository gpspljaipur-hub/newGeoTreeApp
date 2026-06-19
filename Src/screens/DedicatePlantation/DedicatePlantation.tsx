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
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

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
        { id: 'myself', title: 'For Myself', icon: Images.leaf },
        { id: 'gift', title: 'Gift a Tree', icon: Images.gift },
        { id: 'birthday', title: 'Birthday', icon: Images.calendar },
        { id: 'anniversary', title: 'Anniversary', icon: Images.verified }, // Ring fallback
        { id: 'lovedone', title: 'Loved One', icon: Images.heart },
        { id: 'inmemory', title: 'In Memory', icon: Images.bird },
        { id: 'corporate', title: 'Corporate / CSR', icon: Images.folder },
    ];

    const allocationOptions = [
        {
            id: 'one',
            title: `Dedicate all ${qty} trees to one person`,
            subtitle: 'All trees will be dedicated to the same person',
            icon: Images.profile,
        },
        {
            id: 'split',
            title: 'Split among multiple recipients',
            subtitle: 'Dedicate trees to more than one person',
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
            setRecipientName('Self');
            setRecipientEmail('user@geotree.org');
            setRecipientPhone('+91 9999999999');
        } else {
            setRecipientName('');
            setRecipientEmail('');
            setRecipientPhone('');
        }
    }, [isMeToggle]);

    const handleProceed = () => {
        navigation.navigate('Payment', {
            name: recipientName || 'You',
            dedication: personalMessage || 'In memory of My Grandfather',
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
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>State</Text>
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
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>Project</Text>
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
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>Tree</Text>
                    </View>

                    <View style={styles.stepItem}>
                        <View style={[styles.stepCircle, styles.stepCircleActive]}>
                            <Image source={Images.heart} style={[styles.stepIcon, styles.stepIconActive, { tintColor: Colors.legacyGreen, }]} resizeMode="contain" />
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>Dedication</Text>
                    </View>

                    <View style={styles.stepItem}>
                        <View style={styles.stepCircle}>
                            <Image source={Images.lock} style={styles.stepIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.stepLabel}>Payment</Text>
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
                                <Text style={styles.heroTitle}>Dedicate Your</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                    <Text style={styles.heroTitle}>Plantation</Text>
                                    <Image source={Images.leaf} style={styles.heroTitleLeaf} resizeMode="contain" />
                                </View>
                            </View>
                            <Text style={styles.heroSubtitle}>Add meaning to your environmental impact.</Text>
                        </View>
                        <View style={styles.heroRight}>
                            <View style={styles.heroRightContainer}>
                                <View style={styles.secureBadge}>
                                    <View style={styles.secureBadgeTextCol}>
                                        <Text style={styles.secureBadgeText}>100% Secure & Transparent</Text>
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
                                <Text style={styles.gpsVerifiedText}>GPS VERIFIED</Text>
                            </View>
                        </View>

                        <View style={styles.summaryStatsRow}>
                            <View style={styles.summaryStatCol}>
                                <Text style={styles.summaryStatLabel}>Quantity</Text>
                                <Text style={styles.summaryStatValGreen}>{qty} Trees</Text>
                            </View>
                            <View style={styles.summaryStatDivider} />
                            <View style={[styles.summaryStatCol, { flex: 1.5 }]}>
                                <Text style={styles.summaryStatLabel}>Location</Text>
                                <Text style={styles.summaryStatVal} numberOfLines={2}>
                                    {projectName}{'\n'}{stateName === 'Rajasthan' ? 'Jaipur, ' : ''}{stateName}
                                </Text>
                            </View>
                            <View style={styles.summaryStatDivider} />
                            <View style={styles.summaryStatCol}>
                                <Text style={styles.summaryStatLabel}>Estimated CO₂ Impact</Text>
                                <View style={styles.co2Row}>
                                    <Text style={styles.summaryStatValGreen}>{co2} KG / Year</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* 1. Dedication Type */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>1. Dedication Type 🍃</Text>
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
                    <Text style={styles.sectionTitle}>2. Tree Allocation 🍃</Text>

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
                            <Text style={styles.exampleTitle}>Example: Split among multiple recipients 🍃</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.exampleScrollList}>
                                {defaultRecipients.map((rec, index) => (
                                    <View key={index} style={styles.exampleBadge}>
                                        <View style={styles.exampleBadgeIconBg}>
                                            <Image source={rec.icon} style={styles.exampleBadgeIcon} resizeMode="contain" />
                                        </View>
                                        <View style={styles.exampleBadgeTextCol}>
                                            <Text style={styles.exampleBadgeName}>{rec.name}</Text>
                                            <Text style={styles.exampleBadgeQty}>{rec.qty} Trees</Text>
                                        </View>
                                    </View>
                                ))}
                                <TouchableOpacity style={styles.exampleAddBadge} activeOpacity={0.7}>
                                    <Text style={styles.exampleAddText}>+ Add Recipient</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    )}
                </View>

                {/* 3. Recipient Details */}
                <View style={styles.sectionContainer}>
                    <View style={styles.recipientHeaderRow}>
                        <Text style={styles.sectionTitle}>3. Recipient Details 🍃</Text>
                        <View style={styles.thisIsMeRow}>
                            <Text style={styles.thisIsMeLabel}>This is for me</Text>
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
                            <Text style={styles.inputLabel}>Recipient Name</Text>
                            <View style={[styles.inputWrapper, isNameFocused && styles.inputWrapperActive]}>
                                <Image source={Images.profile} style={styles.inputIcon} resizeMode="contain" />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter name"
                                    placeholderTextColor="#9CA3AF"
                                    value={recipientName}
                                    onChangeText={setRecipientName}
                                    onFocus={() => setIsNameFocused(true)}
                                    onBlur={() => setIsNameFocused(false)}
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroupCol}>
                            <Text style={styles.inputLabel}>Email Address</Text>
                            <View style={[styles.inputWrapper, isEmailFocused && styles.inputWrapperActive]}>
                                <Image source={Images.bell} style={styles.inputIcon} resizeMode="contain" />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter email"
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
                            <Text style={styles.inputLabel}>Mobile Number</Text>
                            <View style={[styles.inputWrapper, isPhoneFocused && styles.inputWrapperActive]}>
                                <Image source={Images.location} style={styles.inputIcon} resizeMode="contain" />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter mobile number"
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
                        <Text style={styles.sectionTitle}>4. Personal Message 🍃</Text>
                        <View style={[styles.messageCard, isMsgFocused && styles.messageCardActive]}>
                            <View style={styles.messageInputCol}>
                                <TextInput
                                    style={styles.messageTextInput}
                                    placeholder="Write your dedication message"
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
                        <Text style={styles.sectionTitle}>5. Receive Updates About Your Plantation 🍃</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.updatesList}>
                            <View style={styles.updateToggleCard}>
                                <View style={styles.updateIconBg}>
                                    <Image source={Images.bell} style={styles.updateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.updateTitle}>Receive Plantation Updates</Text>
                                    <Text style={styles.updateDesc}>Stay updated on your plantation activities</Text>
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
                                    <Text style={styles.updateTitle}>Receive GPS Verification</Text>
                                    <Text style={styles.updateDesc}>Get GPS location & verification updates</Text>
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
                                    <Text style={styles.updateTitle}>Receive Growth Photos</Text>
                                    <Text style={styles.updateDesc}>Photos of your trees growing over time</Text>
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
                                    <Text style={styles.updateTitle}>Receive Carbon Reports</Text>
                                    <Text style={styles.updateDesc}>Track CO₂ impact & environmental contribution</Text>
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
                                <Text style={styles.previewTitleText}>Your Impact Preview</Text>
                                <Image source={Images.leaf} style={styles.previewTitleLeaf} resizeMode="contain" />
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.treeIcon} style={[styles.previewIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>{qty} Trees</Text>
                                    <Text style={styles.previewLabel}>You are planting</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.globe} style={styles.previewIcon} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>{co2} KG CO₂ / Year</Text>
                                    <Text style={styles.previewLabel}>Carbon offset</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.location} style={[styles.previewIcon, { tintColor: '#EF4444' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>GPS Verified</Text>
                                    <Text style={styles.previewLabel}>Every tree is GPS tagged</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.verified} style={[styles.previewIcon, { tintColor: '#F59E0B' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>Growth Photos Included</Text>
                                    <Text style={styles.previewLabel}>Regular updates</Text>
                                </View>
                            </View>

                            <View style={styles.previewItem}>
                                <Image source={Images.shield} style={[styles.previewIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                                <View style={styles.previewTextWrapper}>
                                    <Text style={styles.previewVal}>3 Years Monitoring</Text>
                                    <Text style={styles.previewLabel}>We care for your trees</Text>
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
                            <Text style={styles.trustTitleText}>100% Verified</Text>
                            <Text style={styles.trustDescText}>GPS tracked & verified</Text>
                        </View>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustCol}>
                        <View style={styles.trustIconBg}>
                            <Image source={Images.leaf} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustTitleText}>Real Impact</Text>
                            <Text style={styles.trustDescText}>Measurable & Transparent</Text>
                        </View>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustCol}>
                        <View style={styles.trustIconBg}>
                            <Image source={Images.shield} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustTitleText}>3 Years Care</Text>
                            <Text style={styles.trustDescText}>Monitoring & Updates</Text>
                        </View>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustCol}>
                        <View style={styles.trustIconBg}>
                            <Image source={Images.group} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustTitleText}>Trusted by 50K+</Text>
                            <Text style={styles.trustDescText}>Planters across India</Text>
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
                            <Text style={styles.actionBtnText}>Continue To Payment</Text>
                            {/* <Text style={styles.actionBtnArrow}>→</Text> */}
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.secureTextRow}>
                        <Text style={styles.secureIcon}>🔒</Text>
                        <Text style={styles.secureText}>Secure • Transparent • Trusted by 50K+ Planters</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DedicatePlantationScreen;
