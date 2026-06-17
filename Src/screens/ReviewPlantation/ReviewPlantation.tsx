import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Alert,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import { styles } from './styles';

const ReviewPlantationScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'DedicatePlantation'>>();

    // Retrieve parameters from previous screen, with defaults matching mockup
    const qty = route.params?.qty ?? 10;
    const co2 = route.params?.co2 ?? (qty * 22);
    const projectName = route.params?.projectName ?? 'Aravalli Restoration Project';
    const stateName = route.params?.stateName ?? 'Rajasthan';
    const treeName = route.params?.treeName ?? 'Neem Tree';

    // Selected payment method
    const [selectedMethod, setSelectedMethod] = useState<'upi' | 'card' | 'netbanking' | 'wallet'>('upi');

    const handleBack = () => {
        navigation.goBack();
    };

    const handlePay = () => {
        Alert.alert(
            'Confirm Payment',
            `Process ₹1,990 securely via ${selectedMethod.toUpperCase()}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Pay Now',
                    onPress: () => {
                        navigation.navigate('PlantationConfirmed', {
                            qty: qty,
                            co2: co2,
                            projectName: projectName,
                            stateName: stateName,
                            treeName: treeName,
                        });
                    }
                }
            ]
        );
    };

    // Environmental impact categories
    const impactItems = [
        { id: '1', value: `${qty}`, label: 'Trees', icon: Images.treeIcon },
        { id: '2', value: `${co2} KG`, label: 'CO₂ / Year', icon: Images.globe },
        { id: '3', value: 'GPS', label: 'Verified', icon: Images.location },
        { id: '4', value: 'Growth', label: 'Updates', icon: Images.camera },
        { id: '5', value: 'Digital', label: 'Certificate', icon: Images.certificate },
        { id: '6', value: '3 Years', label: 'Monitoring', icon: Images.shield },
    ];

    // Allocation splits from dedication phase
    const allocations = [
        { name: 'Aarav Sharma', qty: 5 },
        { name: 'Riya Verma', qty: 3 },
    ];

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            {/* <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" /> */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Header Hero Section */}
                <ImageBackground source={Images.detailbg} style={styles.headerHeroBg} imageStyle={styles.headerBgImg} resizeMode="cover">

                    {/* Header Top Bar containing Back Button & 5-Step Stepper */}
                    <View style={styles.headerTopBar}>
                        <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.7}>
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>

                        {/* Stepper with 5 fully completed steps (Payment active) */}
                        <View style={styles.stepperContainer}>
                            <View style={styles.stepperLine} />
                            <View style={styles.stepperLineActive} />

                            {/* Step 1: State (Completed) */}
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

                            {/* Step 2: Project (Completed) */}
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

                            {/* Step 3: Tree (Completed) */}
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

                            {/* Step 4: Dedication (Completed) */}
                            <View style={styles.stepItem}>
                                <View style={styles.stepCircleContainer}>
                                    <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                                        <Image source={Images.heart} style={styles.stepIconCompleted} resizeMode="contain" />
                                    </View>
                                    <View style={styles.checkmarkBadge}>
                                        <Image source={Images.check} style={styles.checkmarkBadgeIcon} resizeMode="contain" />
                                    </View>
                                </View>
                                <Text style={[styles.stepLabel, styles.stepLabelActive]}>Dedication</Text>
                            </View>

                            {/* Step 5: Payment (Active) */}
                            <View style={styles.stepItem}>
                                <View style={styles.stepCircleContainer}>
                                    <View style={[styles.stepCircle, styles.stepCircleActive]}>
                                        <Image source={Images.creditcard} style={[styles.stepIcon, styles.stepIconActive]} resizeMode="contain" />
                                    </View>
                                </View>
                                <Text style={[styles.stepLabel, styles.stepLabelActive]}>Payment</Text>
                            </View>
                        </View>
                    </View>

                    {/* Hero Content Section */}
                    <View style={styles.heroSection}>
                        <View style={styles.heroTitleRow}>
                            <Text style={styles.heroTitle}>
                                Review Your
                                <Text style={styles.heroTitleGreen}> {'\n'}Plantation</Text>
                            </Text>
                            {/* <Image source={Images.leaf} style={styles.heroTitleLeaf} resizeMode="contain" /> */}
                        </View>
                        <Text style={styles.heroSubtitle}>Confirm your impact before completing your plantation.</Text>
                    </View>
                </ImageBackground>

                {/* Tree Summary Card */}
                <View style={styles.cardContainer}>
                    {/* Part 1: Image */}
                    <View style={styles.treeImgContainer}>
                        <Image source={Images.neem_tree} style={styles.treeImg} resizeMode="cover" />
                    </View>
                    <View style={styles.detailsCol}>
                        <View style={styles.titleRow}>
                            <Text style={styles.treeTitle}>{treeName}</Text>
                            <View style={styles.gpsBadge}>
                                <Image source={Images.verified} style={styles.gpsBadgeIcon} resizeMode="contain" />
                                <Text style={styles.gpsBadgeText}>GPS VERIFIED</Text>
                            </View>
                        </View>
                        <View style={styles.qtyPill}>
                            <Image source={Images.treeIcon} style={styles.qtyPillIcon} resizeMode="contain" />
                            <Text style={styles.qtyPillText}>{qty} Trees</Text>
                        </View>
                        <View style={styles.locationContainer}>
                            <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" />
                            <Text style={styles.locationText}>{projectName}{'\n'}{stateName === 'Rajasthan' ? 'Jaipur, Rajasthan' : stateName}</Text>
                        </View>
                    </View>

                    <View style={styles.summaryDivider} />

                    {/* Part 3: Impact */}
                    <View style={styles.impactCol}>
                        <Text style={styles.impactLabel}>Estimated CO₂ Impact</Text>
                        <View style={styles.impactValueRow}>
                            <Text style={styles.impactValue}>{co2} KG / Year</Text>
                            <Image source={Images.verified} style={styles.infoIcon} resizeMode="contain" />
                        </View>
                    </View>
                </View>

                {/* Dedication Summary */}
                <View style={styles.sectionContainer}>
                    <View style={styles.dedicationCard}>
                        {/* Title Row Inside Card */}
                        <View style={styles.dedicationHeaderRow}>
                            <Image source={Images.heart} style={styles.dedicationHeaderIcon} resizeMode="contain" />
                            <Text style={styles.dedicationHeaderTitle}>Dedication Summary</Text>
                        </View>

                        <View style={styles.dedicationContentRow}>
                            {/* Col 1: Dedicated To */}
                            <View style={styles.dedicationCol1}>
                                <Text style={styles.dedicationColLabel}>Dedicated To</Text>
                                <View style={styles.dedicationUserRow}>
                                    <Image source={Images.profile} style={styles.dedicationUserIcon} resizeMode="contain" />
                                    <Text style={styles.dedicationValue}>Aarav Sharma</Text>
                                </View>
                            </View>

                            <View style={styles.dedicationDivider} />

                            {/* Col 2: Message */}
                            <View style={styles.dedicationCol2}>
                                <Text style={styles.dedicationColLabel}>Message</Text>
                                <View style={styles.messageRow}>
                                    <Text style={styles.messageText}>May these trees grow and inspire a greener future.</Text>
                                </View>
                            </View>

                            <View style={styles.dedicationDivider} />

                            {/* Col 3: Tree Allocation */}
                            <View style={styles.dedicationCol3}>
                                <Text style={styles.dedicationColLabel}>Tree Allocation</Text>
                                {allocations.map((alloc, idx) => (
                                    <View key={idx} style={styles.allocationItem}>
                                        <View style={styles.allocationLeft}>
                                            <Image source={Images.profile} style={styles.allocationUserIcon} resizeMode="contain" />
                                            <Text style={styles.allocationName}>{alloc.name}</Text>
                                        </View>
                                        <Text style={styles.allocationDash}>-</Text>
                                        <Text style={styles.allocationQty}>{alloc.qty} Trees</Text>
                                    </View>
                                ))}
                                <TouchableOpacity activeOpacity={0.7}>
                                    <Text style={styles.viewDetailsLink}>View Details  →</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Environmental Impact List */}
                <View style={styles.sectionContainer}>
                    <View style={styles.impactCard}>
                        <Text style={styles.impactCardTitle}>Your Environmental Impact</Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.impactRow}
                        >
                            {impactItems.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    {index > 0 && <View style={styles.verticalSeparator} />}
                                    <View style={styles.impactItem}>
                                        <Image source={item.icon} style={styles.impactItemIcon} resizeMode="contain" />
                                        <Text style={styles.impactItemValue}>{item.value}</Text>
                                        <Text style={styles.impactItemLabel}>{item.label}</Text>
                                    </View>
                                </React.Fragment>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                {/* Cost Breakdown */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <View style={styles.sectionTitleLeft}>
                            <Image source={Images.plant} style={styles.sectionTitleIcon} resizeMode="contain" />
                            <Text style={styles.sectionTitle}>Cost Breakdown</Text>
                        </View>
                    </View>

                    <View style={styles.costCard}>
                        <View style={styles.costRow}>
                            <Text style={styles.costLabel}>Tree Plantation (10 Trees)</Text>
                            <Text style={styles.costValue}>₹1,990</Text>
                        </View>
                        <View style={styles.costRow}>
                            <Text style={styles.costLabel}>GPS Tracking</Text>
                            <Text style={styles.costValueGreen}>Included</Text>
                        </View>
                        <View style={styles.costRow}>
                            <Text style={styles.costLabel}>Growth Monitoring (3 Years)</Text>
                            <Text style={styles.costValueGreen}>Included</Text>
                        </View>
                        <View style={styles.costRow}>
                            <Text style={styles.costLabel}>Digital Certificate</Text>
                            <Text style={styles.costValueGreen}>Included</Text>
                        </View>
                        <View style={styles.costDivider} />
                        <View style={styles.totalRow}>
                            <View>
                                <Text style={styles.totalLabel}>Total Amount</Text>
                                <Text style={styles.totalLabelSub}>Inclusive of all taxes</Text>
                            </View>
                            <Text style={styles.totalValue}>₹1,990</Text>
                        </View>
                    </View>
                </View>

                {/* Choose a Payment Method */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <View style={styles.sectionTitleLeft}>
                            <Image source={Images.lock} style={styles.sectionTitleIcon} resizeMode="contain" />
                            <Text style={styles.sectionTitle}>Choose a Payment Method</Text>
                        </View>
                        <View style={styles.paymentSecureHeader}>
                            <Image source={Images.check} style={styles.paymentSecureIcon} resizeMode="contain" />
                            <Text style={styles.paymentSecureText}>100% Secure Payments</Text>
                        </View>
                    </View>

                    <View style={styles.paymentContainer}>
                        {/* UPI Option */}
                        <TouchableOpacity
                            style={[styles.paymentMethodRow, selectedMethod === 'upi' && styles.paymentMethodRowSelected]}
                            onPress={() => setSelectedMethod('upi')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.paymentMethodLeft}>
                                <View style={[styles.radioOuter, selectedMethod === 'upi' && styles.radioOuterSelected]}>
                                    {selectedMethod === 'upi' && <View style={styles.radioInner} />}
                                </View>
                                <View style={styles.paymentMethodDetails}>
                                    <View style={styles.paymentMethodTitleRow}>
                                        <Text style={styles.paymentMethodTitle}>UPI (Recommended)</Text>
                                        <View style={styles.paymentMethodCheckBadge}>
                                            <Image source={Images.check} style={styles.paymentMethodCheckIcon} resizeMode="contain" />
                                        </View>
                                    </View>
                                    {selectedMethod === 'upi' && (
                                        <View style={styles.upiLogosRow}>
                                            <View style={[styles.upiLogoBox, { width: 75, borderLeftColor: '#5F259F', borderLeftWidth: 2 }]}>
                                                <Text style={[styles.upiTextLogo, { color: '#5F259F' }]}>PhonePe</Text>
                                            </View>
                                            <View style={[styles.upiLogoBox, { width: 75, borderLeftColor: '#4285F4', borderLeftWidth: 2 }]}>
                                                <Text style={[styles.upiTextLogo, { color: '#4285F4' }]}>G Pay</Text>
                                            </View>
                                            <View style={[styles.upiLogoBox, { width: 75, borderLeftColor: '#00B9F5', borderLeftWidth: 2 }]}>
                                                <Text style={[styles.upiTextLogo, { color: '#002970' }]}>Paytm</Text>
                                            </View>
                                            <View style={[styles.upiLogoBox, { width: 75, borderLeftColor: '#0F7F1B', borderLeftWidth: 2 }]}>
                                                <Text style={styles.upiTextLogo}>UPI</Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Debit/Credit Card Option */}
                        <TouchableOpacity
                            style={[styles.paymentMethodRow, selectedMethod === 'card' && styles.paymentMethodRowSelected]}
                            onPress={() => setSelectedMethod('card')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.paymentMethodLeft}>
                                <View style={[styles.radioOuter, selectedMethod === 'card' && styles.radioOuterSelected]}>
                                    {selectedMethod === 'card' && <View style={styles.radioInner} />}
                                </View>
                                <View style={styles.paymentMethodDetails}>
                                    <Text style={styles.paymentMethodTitle}>Debit / Credit Cards</Text>
                                </View>
                                <View style={styles.cardLogosRow}>
                                    <View style={styles.upiLogoBox}>
                                        <Text style={[styles.upiTextLogo, { fontSize: 7.5, color: '#1A1F71' }]}>VISA</Text>
                                    </View>
                                    <View style={styles.upiLogoBox}>
                                        <Text style={[styles.upiTextLogo, { fontSize: 7.5, color: '#EB001B' }]}>MC</Text>
                                    </View>
                                    <View style={styles.upiLogoBox}>
                                        <Text style={[styles.upiTextLogo, { fontSize: 7.5, color: '#FF9900' }]}>RuPay</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Net Banking Option */}
                        <TouchableOpacity
                            style={[styles.paymentMethodRow, selectedMethod === 'netbanking' && styles.paymentMethodRowSelected]}
                            onPress={() => setSelectedMethod('netbanking')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.paymentMethodLeft}>
                                <View style={[styles.radioOuter, selectedMethod === 'netbanking' && styles.radioOuterSelected]}>
                                    {selectedMethod === 'netbanking' && <View style={styles.radioInner} />}
                                </View>
                                <View style={styles.paymentMethodDetails}>
                                    <Text style={styles.paymentMethodTitle}>Net Banking</Text>
                                    <Text style={styles.paymentMethodSubtext}>All major banks supported</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Wallets Option */}
                        <TouchableOpacity
                            style={[styles.paymentMethodRow, selectedMethod === 'wallet' && styles.paymentMethodRowSelected]}
                            onPress={() => setSelectedMethod('wallet')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.paymentMethodLeft}>
                                <View style={[styles.radioOuter, selectedMethod === 'wallet' && styles.radioOuterSelected]}>
                                    {selectedMethod === 'wallet' && <View style={styles.radioInner} />}
                                </View>
                                <View style={styles.paymentMethodDetails}>
                                    <Text style={styles.paymentMethodTitle}>Wallets</Text>
                                    <Text style={styles.paymentMethodSubtext}>Paytm, Amazon Pay, Mobikwik & more</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Brand Trust Badges strip */}
                <View style={styles.trustBanner}>
                    <View style={styles.trustItem}>
                        <View style={styles.trustIconWrapper}>
                            <Image source={Images.shield} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustLabel}>100% Secure Payment</Text>
                            <Text style={styles.trustDesc}>SSL Encrypted</Text>
                        </View>
                    </View>

                    <View style={styles.trustItem}>
                        <View style={styles.trustIconWrapper}>
                            <Image source={Images.treeIcon} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustLabel}>Verified Plantation</Text>
                            <Text style={styles.trustDesc}>Real Trees, Real Impact</Text>
                        </View>
                    </View>

                    <View style={styles.trustItem}>
                        <View style={styles.trustIconWrapper}>
                            <Image source={Images.verified} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustLabel}>Refund Protection</Text>
                            <Text style={styles.trustDesc}>Easy & Hassle-Free</Text>
                        </View>
                    </View>

                    <View style={styles.trustItem}>
                        <View style={styles.trustIconWrapper}>
                            <Image source={Images.profile} style={styles.trustIcon} resizeMode="contain" />
                        </View>
                        <View style={styles.trustTextCol}>
                            <Text style={styles.trustLabel}>Trusted by 50K+</Text>
                            <Text style={styles.trustDesc}>Planters Across India</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

            {/* Sticky Bottom Actions Bar */}
            <View style={styles.stickyFooter}>
                <View style={styles.stickyGreenBar}>
                    <View style={styles.stickyPromiseCol}>
                        <Image source={Images.shield} style={styles.stickyPromiseIcon} resizeMode="contain" />
                        <View>
                            <Text style={styles.stickyPromiseTitle}>Your Impact. Our Promise.</Text>
                            <Text style={styles.stickyPromiseDesc}>Every tree is GPS tracked & verified.</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.payButton} onPress={handlePay} activeOpacity={0.8}>
                        <Text style={styles.payButtonText}>Pay ₹1,990 Securely</Text>
                        <Text style={styles.payButtonArrow}>→</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footerSecureNoteRow}>
                    <Image source={Images.lock} style={styles.footerSecureNoteIcon} resizeMode="contain" />
                    <Text style={styles.footerSecureNoteText}>Secure Payment Gateway • SSL Encrypted • Your Data is Safe</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ReviewPlantationScreen;
