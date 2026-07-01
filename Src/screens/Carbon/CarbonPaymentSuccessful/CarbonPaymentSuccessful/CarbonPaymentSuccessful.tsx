import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { styles } from './Styles';
import Images from '../../../../constants/images';

const CarbonPaymentSuccessful = ({ navigation }: any) => {

    const handleBack = () => {
        navigation.goBack();
    };

    const handleHome = () => {
        navigation.navigate('Home'); // adjust to actual Home route
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Hero Section */}
            <ImageBackground source={Images.PaymentBg} style={styles.heroSection} resizeMode='contain'>
                {/* Header */}
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.8}>
                        <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                {/* Success Message */}
                <View style={styles.successMessageContainer}>
                    {/* <View style={styles.checkCircle}>
                        <Image source={Images.check} style={styles.checkIcon} resizeMode="contain" />
                    </View> */}
                    <View style={styles.successTextContainer}>
                        <Text style={styles.successTitle}>Payment Successful!</Text>
                        <Text style={styles.successSubtitle}>Thank you for making a positive impact.{'\n'}Your contribution helps create a greener planet. 💚</Text>
                    </View>
                </View>

                <View style={styles.orderCard}>
                    <View style={styles.orderInfoCol}>
                        <Text style={styles.orderIdText}>Order ID: GTREE-2024-56789</Text>
                        <Text style={styles.orderDateText}>10 May 2024, 11:45 AM</Text>
                    </View>
                    <View style={styles.paidBadge}>
                        <Text style={styles.paidText}>Paid Successfully</Text>
                    </View>
                </View>
            </ImageBackground>

            {/* Main Content Area */}
            <View style={styles.contentContainer}>


                {/* Two Column Layout Row */}
                <View style={styles.rowContainer}>
                    {/* Your Contribution Summary */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Your Contribution Summary</Text>

                        <View style={styles.summaryRow}>
                            <Image source={Images.peepal_tree} style={styles.summaryTreeImage} resizeMode="contain" />
                            <View style={styles.summaryTextCol}>
                                <Text style={styles.planLabel}>Carbon Offset Plan</Text>
                                <Text style={styles.planTitle}>100% Offset <Text style={{ fontSize: 14, color: '#0A5F35' }}>(Carbon Neutral)</Text></Text>
                                <Text style={styles.planOffsetDesc}>You are offsetting 6.42 Tons CO₂ / Year</Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <View style={styles.detailLabelRow}>
                                <Image source={Images.treeIcon} style={styles.detailIcon} resizeMode="contain" />
                                <Text style={styles.detailLabelText}>Total Trees</Text>
                            </View>
                            <Text style={styles.detailValueText}>292 Trees</Text>
                        </View>
                        <View style={styles.divider} />

                        <View style={styles.detailRow}>
                            <View style={styles.detailLabelRow}>
                                <Image source={Images.leaf} style={styles.detailIcon} resizeMode="contain" />
                                <Text style={styles.detailLabelText}>Tree Type</Text>
                            </View>
                            <Text style={styles.detailValueText}>Arjun (Terminalia arjuna)</Text>
                        </View>
                        <View style={styles.divider} />

                        <View style={styles.detailRow}>
                            <View style={styles.detailLabelRow}>
                                <Image source={Images.location} style={styles.detailIcon} resizeMode="contain" />
                                <Text style={styles.detailLabelText}>Plantation Location</Text>
                            </View>
                            <Text style={styles.detailValueText}>Rajasthan, India</Text>
                        </View>
                        <View style={styles.divider} />

                        <View style={styles.detailRow}>
                            <View style={styles.detailLabelRow}>
                                <Image source={Images.Emission} style={styles.detailIcon} resizeMode="contain" />
                                <Text style={styles.detailLabelText}>Impact</Text>
                            </View>
                            <Text style={styles.detailValueText}>6.42 Tons CO₂ / Year</Text>
                        </View>

                        <View style={styles.alertBanner}>
                            <Image source={Images.leaf1} style={styles.alertIcon} resizeMode="contain" />
                            <Text style={styles.alertText}>
                                You will receive a <Text style={styles.boldAlertText}>digital certificate</Text> and{'\n'}
                                <Text style={styles.boldAlertText}>real-time updates</Text> of your plantation.
                            </Text>
                        </View>
                    </View>

                    {/* Payment Receipt */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Payment Receipt</Text>

                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>Order ID</Text>
                            <Text style={styles.receiptValue}>GTREE-2024-56789</Text>
                        </View>
                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>Payment Date</Text>
                            <Text style={styles.receiptValue}>10 May 2024, 11:45 AM</Text>
                        </View>
                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>Payment Method</Text>
                            <Text style={styles.receiptValue}>Credit Card (**** 3456)</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>Total Amount</Text>
                            <Text style={styles.receiptValue}>₹10,220</Text>
                        </View>
                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>GST (18%)</Text>
                            <Text style={styles.receiptValue}>₹1,560</Text>
                        </View>

                        <View style={[styles.divider, { borderStyle: 'dashed' }]} />

                        <View style={styles.grandTotalRow}>
                            <Text style={styles.grandTotalLabel}>Grand Total</Text>
                            <Text style={styles.grandTotalValue}>₹11,780</Text>
                        </View>

                        <View style={styles.alertBanner}>
                            <Image source={Images.gift} style={styles.alertIcon} resizeMode="contain" />
                            <Text style={styles.alertText}>
                                <Text style={styles.boldAlertText}>You're making a difference!</Text>{'\n'}
                                This contribution is eligible for 80G tax benefit.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* What's Next? */}
                <View style={styles.whatsNextCard}>
                    <Text style={styles.cardTitle}>What's Next?</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.stepsRow}>
                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.plant} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text style={styles.stepTitle}>1. Plantation Initiated</Text>
                                <Text style={styles.stepDesc}>Your trees will be planted{'\n'}soon in the selected{'\n'}location.</Text>
                            </View>
                        </View>
                        <View style={styles.verticalDivider} />

                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.camera} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text style={styles.stepTitle}>2. Real-time Updates</Text>
                                <Text style={styles.stepDesc}>You will receive updates{'\n'}with photos and GPS{'\n'}location.</Text>
                            </View>
                        </View>
                        <View style={styles.verticalDivider} />

                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.certificate} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text style={styles.stepTitle}>3. Certificate & Impact</Text>
                                <Text style={styles.stepDesc}>Digital certificate will be{'\n'}shared on your email{'\n'}within 24 hours.</Text>
                            </View>
                        </View>
                        <View style={styles.verticalDivider} />

                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.heart} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text style={styles.stepTitle}>4. Long-term Impact</Text>
                                <Text style={styles.stepDesc}>Your trees will grow and{'\n'}create a lasting impact{'\n'}for generations.</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                {/* Action Cards Stack */}
                <View style={styles.cardsStack}>

                    <View style={styles.certificateCard}>
                        <View style={styles.certLeftCol}>
                            <Text style={styles.cardTitle}>Digital Certificate</Text>
                            <Text style={styles.certDesc}>Your digital certificate will be{'\n'}sent to your email:</Text>

                            <TouchableOpacity style={styles.emailButton} activeOpacity={0.7}>
                                <Image source={Images.email} style={styles.emailButtonIcon} resizeMode="contain" />
                                <Text style={styles.emailButtonText}>john.doe@email.com</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.downloadButton} activeOpacity={0.7}>
                                <Image source={Images.download} style={styles.downloadButtonIcon} resizeMode="contain" />
                                <Text style={styles.downloadButtonText}>Download Certificate</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.certRightCol}>
                            <Image source={Images.certificate} style={styles.certPreviewImage} resizeMode="contain" />
                        </View>
                    </View>

                    <View style={styles.trackCard}>
                        <View style={styles.trackLeftCol}>
                            <Text style={styles.cardTitle}>Track Your Impact</Text>
                            <Text style={styles.trackDesc}>Stay updated on your trees and{'\n'}the impact you create.</Text>

                            <View style={styles.featureList}>
                                <View style={styles.featureItemRow}>
                                    <Image source={Images.check} style={styles.featureCheckIcon} resizeMode="contain" />
                                    <Text style={styles.featureItemText}>Real-time plantation updates</Text>
                                </View>
                                <View style={styles.featureItemRow}>
                                    <Image source={Images.check} style={styles.featureCheckIcon} resizeMode="contain" />
                                    <Text style={styles.featureItemText}>GPS verified locations</Text>
                                </View>
                                <View style={styles.featureItemRow}>
                                    <Image source={Images.check} style={styles.featureCheckIcon} resizeMode="contain" />
                                    <Text style={styles.featureItemText}>Growth tracking & photos</Text>
                                </View>
                                <View style={styles.featureItemRow}>
                                    <Image source={Images.check} style={styles.featureCheckIcon} resizeMode="contain" />
                                    <Text style={styles.featureItemText}>Impact reports</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
                                <Text style={styles.primaryButtonText}>Go to My Dashboard</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.trackRightCol}>
                            <Image source={Images.Mobile} style={styles.dashboardPreviewImage} />
                        </View>
                    </View>

                </View>

                {/* Community Banner & Social Share */}
                <View style={styles.communityBanner}>
                    <View style={styles.communityTop}>
                        <Image source={Images.handtree} style={styles.communityImage} resizeMode="contain" />
                        <View style={styles.communityTextCol}>
                            <Text style={styles.communityTitle}>Together, we are creating a greener, healthier planet.</Text>
                            <Text style={styles.communitySubtitle}>Thank you for being a part of the GeoTree movement! 💚</Text>
                        </View>
                    </View>
                    <View style={styles.communityHorizontalDivider} />
                    <View style={styles.communityBottom}>
                        <Text style={styles.socialTitle}>Spread the word and inspire others!</Text>
                        <View style={styles.socialRow}>
                            <TouchableOpacity style={styles.socialIconBtn}><Image source={Images.whatsapp} style={styles.socialIcon} resizeMode="contain" /></TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconBtn}><Image source={Images.facebook} style={styles.socialIcon} resizeMode="contain" /></TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconBtn}><Image source={Images.link} style={styles.socialIcon} resizeMode="contain" /></TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconBtn}><Image source={Images.linkedin} style={styles.socialIcon} resizeMode="contain" /></TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconBtn}><Image source={Images.twitter} style={styles.socialIcon} resizeMode="contain" /></TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Bottom Actions */}
                <View style={styles.bottomActionsContainer}>
                    <TouchableOpacity style={styles.outlineBtn} onPress={handleHome}>
                        <Text style={styles.outlineBtnText}>Back to Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.outlineBtn}>
                        <Text style={styles.outlineBtnText}>View My Dashboard</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.shareBtn}>
                        <Text style={styles.shareBtnText}>Share Your Impact</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.footerSecureText}>🔒 Secure • Verified • Transparent Impact</Text>
            </View>
        </ScrollView>
    );
};

export default CarbonPaymentSuccessful;
