import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import fonts from '../../comman/fonts';
import { styles } from './styles';

// Mock QR Code drawer using native Views
const MockQRCode = () => (
    <View style={{ width: 62, height: 62, padding: 4, backgroundColor: 'white', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 4, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: 16, height: 16, borderWidth: 3, borderColor: '#000', borderRadius: 2 }} />
            <View style={{ width: 16, height: 16, borderWidth: 3, borderColor: '#000', borderRadius: 2 }} />
        </View>
        <View style={{ flex: 1, marginVertical: 2, paddingHorizontal: 2, justifyContent: 'space-around' }}>
            <View style={{ height: 2, backgroundColor: '#000', width: '85%', alignSelf: 'center' }} />
            <View style={{ height: 2, backgroundColor: '#000', width: '65%', alignSelf: 'flex-start' }} />
            <View style={{ height: 2, backgroundColor: '#000', width: '90%', alignSelf: 'center' }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <View style={{ width: 16, height: 16, borderWidth: 3, borderColor: '#000', borderRadius: 2 }} />
            <View style={{ width: 10, height: 10, backgroundColor: '#000', borderRadius: 1 }} />
        </View>
    </View>
);

const CustomDownloadIcon = () => (
    <View style={{ width: 14, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 6 }}>
        {/* Arrow stem */}
        <View style={{ width: 2, height: 7, backgroundColor: '#056213' }} />
        {/* Arrow head */}
        <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: 3.5,
            borderRightWidth: 3.5,
            borderTopWidth: 4,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: '#056213',
            marginTop: -1,
        }} />
        {/* Tray */}
        <View style={{ width: 10, height: 2.5, borderLeftWidth: 1.5, borderRightWidth: 1.5, borderBottomWidth: 1.5, borderColor: '#056213', marginTop: 1.5 }} />
    </View>
);

const PlantationConfirmedScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'ReviewPlantation'>>();

    // Retrieve parameters passed from dedication/payment, fallbacks matching the mockup
    const qty = route.params?.qty ?? 10;
    const treeName = route.params?.treeName ?? 'Neem';
    const stateName = route.params?.stateName ?? 'Rajasthan';
    const projectName = route.params?.projectName ?? 'Aravalli Restoration Project';
    const co2 = route.params?.co2 ?? (qty * 22);

    const handleTrackTrees = () => {
        // Navigate back to Home tabs
        navigation.navigate('Home');
    };

    const handleDownloadReceipt = () => {
        Alert.alert('Receipt Download', 'Your payment receipt is being downloaded as a PDF...');
    };

    const handleCopyId = () => {
        Alert.alert('ID Copied', 'Plantation ID copied successfully to clipboard.');
    };

    const handleShare = (channel: string) => {
        Alert.alert('Share Impact', `Opening share dialog for ${channel}...`);
    };

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Hero Header Section */}
                <ImageBackground
                    source={Images.PlantConfiram}
                    style={styles.heroBg}
                    imageStyle={styles.heroBgImg}
                    resizeMode="cover"
                >
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
                        <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </ImageBackground>

                {/* Success Message */}
                <View style={styles.successHeader}>
                    <View style={styles.successTitleRow}>
                        <Image source={Images.treeIcon} style={styles.successTitleIcon} resizeMode="contain" />
                        <Text style={styles.successTitle}>Plantation Confirmed!</Text>
                    </View>
                    <Text style={styles.successSubtitle}>
                        Your <Text style={{ fontFamily: fonts.OpenSans_Bold }}>{qty} {treeName} Trees</Text> have been successfully reserved for plantation.
                    </Text>
                </View>

                {/* Grid details card */}
                <View style={[styles.card, { padding: 0 }]}>
                    <View style={styles.quadrantRow}>
                        {/* Cell 1: Trees Reserved */}
                        <View style={styles.quadrantCell}>
                            <Image source={Images.treeIcon} style={[styles.quadrantIcon, { tintColor: Colors.TextColorLightGreen }]} resizeMode="contain" />
                            <View style={styles.quadrantTextCol}>
                                <Text style={styles.quadrantLabel}>Trees Reserved</Text>
                                <Text style={[styles.quadrantValue, { color: Colors.TextColorLightGreen }]}>{qty} Trees</Text>
                            </View>
                        </View>

                        {/* Divider Line Vertical */}
                        <View style={styles.quadrantDividerV} />

                        {/* Cell 2: Project */}
                        <View style={styles.quadrantCell}>
                            <Image source={Images.folder} style={[styles.quadrantIcon, { tintColor: Colors.TextColorLightGreen }]} resizeMode="contain" />
                            <View style={styles.quadrantTextCol}>
                                <Text style={styles.quadrantLabel}>Project</Text>
                                <Text style={styles.quadrantValue} numberOfLines={2}>{projectName}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Divider Line Horizontal */}
                    <View style={styles.quadrantDividerH} />

                    <View style={styles.quadrantRow}>
                        {/* Cell 3: Location */}
                        <View style={styles.quadrantCell}>
                            <Image source={Images.location} style={[styles.quadrantIcon, { tintColor: '#DC2626' }]} resizeMode="contain" />
                            <View style={styles.quadrantTextCol}>
                                <Text style={styles.quadrantLabel}>Location</Text>
                                <Text style={styles.quadrantValue}>{stateName === 'Rajasthan' ? 'Jaipur, Rajasthan' : stateName}</Text>
                            </View>
                        </View>

                        {/* Divider Line Vertical */}
                        <View style={styles.quadrantDividerV} />

                        {/* Cell 4: Estimated CO2 impact */}
                        <View style={styles.quadrantCell}>
                            <Image source={Images.globe} style={styles.quadrantIcon} resizeMode="contain" />
                            <View style={styles.quadrantTextCol}>
                                <Text style={styles.quadrantLabel}>Estimated CO₂ Impact</Text>
                                <Text style={[styles.quadrantValue, { color: Colors.TextColorLightGreen }]}>{co2} KG / Year</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Plantation Journey Card */}
                <View style={styles.card}>
                    <Text style={styles.journeyHeader}>Plantation Journey</Text>

                    <View style={styles.journeyStepper}>
                        {/* Step 1: Payment Complete */}
                        <View style={[styles.stepperNode, styles.stepperNodeCompleted]}>
                            <Image source={Images.check} style={styles.stepperCheckIcon} resizeMode="contain" />
                        </View>
                        <View style={[styles.stepperLine, styles.stepperLineCompleted]} />

                        {/* Step 2: Plantation Reserved */}
                        <View style={[styles.stepperNode, styles.stepperNodeCompleted]}>
                            <Image source={Images.check} style={styles.stepperCheckIcon} resizeMode="contain" />
                        </View>
                        <View style={[styles.stepperLine, styles.stepperLineCompleted]} />

                        {/* Step 3: Plantation Scheduled */}
                        <View style={[styles.stepperNode, styles.stepperNodeActive]}>
                            <View style={styles.stepperActiveInner}>
                                <Image source={Images.plant} style={styles.stepperActiveIcon} resizeMode="contain" />
                            </View>
                        </View>
                        <View style={[styles.stepperLine, styles.stepperLinePending]} />

                        {/* Step 4: GPS Verification */}
                        <View style={[styles.stepperNode, styles.stepperNodePending]}>
                            <Image source={Images.profile} style={styles.stepperPendingIcon} resizeMode="contain" />
                        </View>
                        <View style={[styles.stepperLine, styles.stepperLinePending]} />

                        {/* Step 5: Growth Updates */}
                        <View style={[styles.stepperNode, styles.stepperNodePending]}>
                            <Image source={Images.camera} style={styles.stepperPendingIcon} resizeMode="contain" />
                        </View>
                    </View>

                    <View style={styles.stepperLabelsRow}>
                        <Text style={styles.stepperLabelText}>Payment{"\n"}Complete</Text>
                        <Text style={styles.stepperLabelText}>Plantation{"\n"}Reserved</Text>
                        <Text style={styles.stepperLabelText}>Plantation{"\n"}Scheduled</Text>
                        <Text style={styles.stepperLabelText}>GPS{"\n"}Verification</Text>
                        <Text style={styles.stepperLabelText}>Growth{"\n"}Updates</Text>
                    </View>

                    {/* Plantation ID and Date Card */}
                    <View style={styles.plantationIdCard}>
                        <View style={styles.plantationIdLeft}>
                            <Text style={styles.plantationIdLabel}>Your Plantation ID</Text>
                            <View style={styles.plantationIdRow}>
                                <Text style={styles.plantationIdVal}>GT-2026-10245</Text>
                                <TouchableOpacity style={styles.copyBtn} onPress={handleCopyId} activeOpacity={0.7}>
                                    <Image source={Images.edit} style={styles.copyIcon} resizeMode="contain" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.dateLabel}>Date</Text>
                            <Text style={styles.dateVal}>28 May 2026, 09:41 AM</Text>
                        </View>

                        {/* Vertical Divider inside light green card */}

                        <View style={styles.qrCodeContainer}>
                            <MockQRCode />
                            <Text style={styles.qrLabel}>Scan to view{"\nyour plantation"}</Text>
                        </View>
                    </View>
                </View>

                {/* What's Next & Your Impact Combined Card */}
                <View style={styles.card}>
                    {/* What's Next Section */}
                    <View style={styles.sectionHeaderInside}>
                        <Image source={Images.leaf} style={styles.sectionTitleIconInside} resizeMode="contain" />
                        <Text style={styles.sectionTitleInside}>What's Next?</Text>
                    </View>

                    <View style={styles.whatsNextCard}>
                        <View style={styles.badgeWithinDays}>
                            <Text style={styles.badgeWithinDaysText}>Within 7-15 Days</Text>
                        </View>

                        <View style={styles.whatsNextContent}>
                            <View style={styles.whatsNextList}>
                                <View style={styles.whatsNextItem}>
                                    <View style={styles.whatsNextCheckOutline}>
                                        <Image source={Images.check} style={styles.whatsNextCheckIcon} resizeMode="contain" />
                                    </View>
                                    <Text style={styles.whatsNextText}>Plantation will be completed</Text>
                                </View>
                                <View style={styles.whatsNextItem}>
                                    <View style={styles.whatsNextCheckOutline}>
                                        <Image source={Images.check} style={styles.whatsNextCheckIcon} resizeMode="contain" />
                                    </View>
                                    <Text style={styles.whatsNextText}>GPS coordinates will be assigned</Text>
                                </View>
                                <View style={styles.whatsNextItem}>
                                    <View style={styles.whatsNextCheckOutline}>
                                        <Image source={Images.check} style={styles.whatsNextCheckIcon} resizeMode="contain" />
                                    </View>
                                    <Text style={styles.whatsNextText}>Geo-tagged photos will be uploaded</Text>
                                </View>
                                <View style={styles.whatsNextItem}>
                                    <View style={styles.whatsNextCheckOutline}>
                                        <Image source={Images.check} style={styles.whatsNextCheckIcon} resizeMode="contain" />
                                    </View>
                                    <Text style={styles.whatsNextText}>Digital certificate will be issued</Text>
                                </View>
                            </View>

                            <View style={styles.whatsNextImageContainer}>
                                <Image source={Images.handtree} style={styles.whatsNextImg} resizeMode="contain" />
                            </View>
                        </View>
                    </View>

                    {/* Section Divider */}
                    <View style={styles.sectionDivider} />

                    {/* Your Impact Preview Section */}
                    <View style={[styles.sectionHeaderInside, { marginTop: 4 }]}>
                        <Text style={styles.sectionTitleInside}>Your Impact Preview</Text>
                    </View>

                    <View style={styles.impactPreviewRow}>
                        <View style={styles.impactPreviewCard}>
                            <Image source={Images.treeIcon} style={styles.impactPreviewIcon} resizeMode="contain" />
                            <Text style={styles.impactPreviewVal}>{qty}</Text>
                            <Text style={styles.impactPreviewLabel}>Trees</Text>
                        </View>

                        <View style={styles.impactPreviewCard}>
                            <Image source={Images.co2Cloud} style={styles.impactPreviewIcon} resizeMode="contain" />
                            <Text style={styles.impactPreviewVal}>{co2} KG</Text>
                            <Text style={styles.impactPreviewLabel}>CO₂ / Year</Text>
                        </View>

                        <View style={styles.impactPreviewCard}>
                            <Image source={Images.location} style={styles.impactPreviewIcon} resizeMode="contain" />
                            <Text style={styles.impactPreviewVal}>GPS</Text>
                            <Text style={styles.impactPreviewLabel}>Tracked</Text>
                        </View>

                        <View style={styles.impactPreviewCard}>
                            <Image source={Images.camera} style={styles.impactPreviewIcon} resizeMode="contain" />
                            <Text style={styles.impactPreviewVal}>Growth</Text>
                            <Text style={styles.impactPreviewLabel}>Photos</Text>
                        </View>

                        <View style={styles.impactPreviewCard}>
                            <Image source={Images.certificate} style={styles.impactPreviewIcon} resizeMode="contain" />
                            <Text style={styles.impactPreviewVal}>Digital</Text>
                            <Text style={styles.impactPreviewLabel}>Certificate</Text>
                        </View>
                    </View>
                </View>

                {/* Share Your Impact & Actions Card */}
                <View style={styles.card}>
                    <View style={styles.shareTitleRow}>
                        <Text style={styles.shareTitle}>Share Your Impact</Text>
                        <Image source={Images.leaf} style={styles.shareTitleIcon} resizeMode="contain" />
                    </View>
                    <Text style={{ fontSize: 10.5, color: '#6B7280', fontFamily: fonts.OpenSans_Medium, marginLeft: 0, marginTop: 4, marginBottom: 12 }}>
                        Inspire others to make a difference
                    </Text>

                    <View style={styles.shareRow}>
                        <TouchableOpacity style={styles.shareBtn} onPress={() => handleShare('WhatsApp')} activeOpacity={0.8}>
                            <View style={styles.shareBtnIconBgWhatsApp}>
                                <Text style={styles.shareBtnIconTextWhatsApp}>📞</Text>
                            </View>
                            <Text style={styles.shareBtnText}>WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.shareBtn} onPress={() => handleShare('LinkedIn')} activeOpacity={0.8}>
                            <View style={styles.shareBtnIconBgLinkedIn}>
                                <Text style={styles.shareBtnIconTextLinkedIn}>in</Text>
                            </View>
                            <Text style={styles.shareBtnText}>LinkedIn</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.shareBtn} onPress={() => handleShare('Instagram')} activeOpacity={0.8}>
                            <View style={styles.shareBtnIconBgInstagram}>
                                <Text style={styles.shareBtnIconTextInstagram}>📸</Text>
                            </View>
                            <Text style={styles.shareBtnText}>Instagram Story</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.shareBtn} onPress={() => handleShare('X (Twitter)')} activeOpacity={0.8}>
                            <View style={styles.shareBtnIconBgX}>
                                <Text style={styles.shareBtnIconTextX}>X</Text>
                            </View>
                            <Text style={styles.shareBtnText}>X (Twitter)</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Divider line before buttons */}
                    <View style={styles.shareDivider} />

                    {/* Track and Receipt Action Buttons */}
                    <TouchableOpacity style={styles.primaryBtn} onPress={handleTrackTrees} activeOpacity={0.9}>
                        <Text style={styles.primaryBtnText}>Track My Trees</Text>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryBtn} onPress={handleDownloadReceipt} activeOpacity={0.8}>
                        <CustomDownloadIcon />
                        <Text style={styles.secondaryBtnText}>Download Receipt</Text>
                    </TouchableOpacity>
                </View>

                {/* Thank You Banner */}
                <View style={styles.footerBanner}>
                    <Text style={styles.footerBannerText}>
                        Thank you for contributing to a greener tomorrow! 🌏
                    </Text>
                </View>

                {/* Bottom Trust Badges card */}
                <View style={styles.trustCard}>
                    <View style={styles.trustBadgeItem}>
                        <Image source={Images.location} style={styles.trustBadgeIcon} resizeMode="contain" />
                        <View style={styles.trustBadgeTextCol}>
                            <Text style={styles.trustBadgeTitle}>GPS Verified</Text>
                            <Text style={styles.trustBadgeDesc}>& Monitored</Text>
                        </View>
                    </View>

                    <View style={styles.trustBadgeItem}>
                        <Image source={Images.calendar} style={styles.trustBadgeIcon} resizeMode="contain" />
                        <View style={styles.trustBadgeTextCol}>
                            <Text style={styles.trustBadgeTitle}>3 Years</Text>
                            <Text style={styles.trustBadgeDesc}>Monitoring</Text>
                        </View>
                    </View>

                    <View style={styles.trustBadgeItem}>
                        <Image source={Images.group} style={styles.trustBadgeIcon} resizeMode="contain" />
                        <View style={styles.trustBadgeTextCol}>
                            <Text style={styles.trustBadgeTitle}>Trusted by</Text>
                            <Text style={styles.trustBadgeDesc}>50K+ Planters</Text>
                        </View>
                    </View>

                    <View style={styles.trustBadgeItem}>
                        <Image source={Images.impact} style={styles.trustBadgeIcon} resizeMode="contain" />
                        <View style={styles.trustBadgeTextCol}>
                            <Text style={styles.trustBadgeTitle}>Real Impact</Text>
                            <Text style={styles.trustBadgeDesc}>You Can Track</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default PlantationConfirmedScreen;
