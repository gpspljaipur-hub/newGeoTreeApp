import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { styles } from './Styles';
import Images from '../../../../constants/images';

const ImpactDashboard = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Header Section */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeft}>
                        {/* <Image source={Images.logoGeotree} style={styles.headerLogo} resizeMode="contain" /> */}
                        <View style={styles.headerTextCol}>
                            <Text style={styles.greetingTitle}>Welcome back, Aarav! 🌿</Text>
                            <Text style={styles.greetingSubtitle}>Thank you for making our planet greener.</Text>
                        </View>
                    </View>

                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.notificationBtn} activeOpacity={0.7}>
                            <Image source={Images.notification} style={styles.notificationIcon} resizeMode="contain" />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Top Stats Row */}
                <View style={styles.topStatsCard}>
                    <View style={[styles.statCol, { width: '30%' }]}>
                        <View style={styles.statIconCircle}>
                            <Image source={Images.treeIcon} style={styles.statIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.statValue}>292</Text>
                        <Text style={styles.statLabel}>Total Trees Planted</Text>
                        <Text style={styles.statSubLabel}>Across 3 Projects</Text>
                    </View>

                    <View style={styles.statDivider} />

                    <View style={[styles.statCol, { width: '20%' }]}>
                        <View style={styles.statIconCircle}>
                            <Image source={Images.Emission} style={styles.statIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.statValue}>6.42</Text>
                        <Text style={styles.statLabel}>Tons CO₂</Text>
                        <Text style={styles.statSubLabel}>Carbon Offset</Text>
                    </View>

                    <View style={styles.statDivider} />

                    <View style={[styles.statCol, { width: '20%' }]}>
                        <View style={styles.statIconCircle}>
                            <Image source={Images.location} style={styles.statIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.statValue}>3</Text>
                        <Text style={styles.statLabel}>Projects</Text>
                        <Text style={styles.statSubLabel}>Supported</Text>
                    </View>

                    <View style={styles.statDivider} />

                    <View style={[styles.statCol, { width: '30%' }]}>
                        <View style={styles.carbonRingContainer}>
                            <Text style={styles.carbonRingValue}>100%</Text>
                        </View>
                        <Text style={styles.statLabelNeutral}>Carbon Neutral</Text>
                        <Text style={styles.statSubLabel}>You've offset 100% of{'\n'}your annual footprint!</Text>
                    </View>
                </View>

                {/* Section 1: Contributions & Plantations Layout */}
                <View style={styles.contributionCard}>
                    <ImageBackground source={Images.Contribution} style={styles.contributionBg} imageStyle={{ borderRadius: 1 }}>
                        <View style={styles.contributionOverlay}>
                            <Text style={styles.contributionTitle}>Your Contribution</Text>
                            <View style={styles.contributionStatsBox}>
                                <View style={styles.contribStatItem}>
                                    <View style={styles.contribStatIconCircle}>
                                        <Image source={Images.treeIcon} style={styles.contribStatIcon} resizeMode="contain" />
                                    </View>
                                    <View>
                                        <Text style={styles.contribStatValue}>292 Trees</Text>
                                        <Text style={styles.contribStatLabel}>Planted</Text>
                                    </View>
                                </View>
                                <View style={styles.contribStatItem}>
                                    <View style={styles.contribStatIconCircle}>
                                        <Image source={Images.Emission} style={styles.contribStatIcon} resizeMode="contain" />
                                    </View>
                                    <View>
                                        <Text style={styles.contribStatValue}>6.42 Tons CO₂</Text>
                                        <Text style={styles.contribStatLabel}>Offset Annually</Text>
                                    </View>
                                </View>
                                <View style={styles.contribStatItem}>
                                    <View style={styles.contribStatIconCircle}>
                                        <Image source={Images.location} style={styles.contribStatIcon} resizeMode="contain" />
                                    </View>
                                    <View>
                                        <Text style={styles.contribStatValue}>GPS Verified</Text>
                                        <Text style={styles.contribStatLabel}>All Plantations</Text>
                                    </View>
                                </View>
                                <View style={styles.contribStatItem}>
                                    <View style={styles.contribStatIconCircle}>
                                        <Image source={Images.video} style={styles.contribStatIcon} resizeMode="contain" />
                                    </View>
                                    <View>
                                        <Text style={styles.contribStatValue}>Growth Updates</Text>
                                        <Text style={styles.contribStatLabel}>Photos & Reports</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Active Plantations</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionLink}>View All Projects →</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.plantationCard}>
                    <View style={styles.plantationRow}>
                        <Image source={Images.project_aravalli} style={styles.plantationImg} />
                        <View style={styles.plantationInfo}>
                            <Text style={styles.plantationTitle}>Aravalli Restoration</Text>
                            <Text style={styles.plantationLocation}>📍 Rajasthan, India</Text>
                            <View style={styles.statusTagComplete}>
                                <Text style={styles.statusTagTextComplete}>Plantation Complete</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.progressRow}>
                        <View style={styles.progressBarContainer}>
                            <View style={[styles.progressBarFill, { width: '100%' }]} />
                        </View>
                        <Text style={styles.progressText}>100%</Text>
                    </View>
                    <TouchableOpacity style={styles.trackBtn}>
                        <Text style={styles.trackBtnText}>Track Trees →</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.plantationCard}>
                    <View style={styles.plantationRow}>
                        <Image source={Images.project_jaipur} style={styles.plantationImg} />
                        <View style={styles.plantationInfo}>
                            <Text style={styles.plantationTitle}>Urban Forest Jaipur</Text>
                            <Text style={styles.plantationLocation}>📍 Rajasthan, India</Text>
                            <View style={styles.statusTagMonitoring}>
                                <Text style={styles.statusTagTextMonitoring}>Monitoring</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.progressRow}>
                        <View style={styles.progressBarContainer}>
                            <View style={[styles.progressBarFill, { width: '65%', backgroundColor: '#F59E0B' }]} />
                        </View>
                        <Text style={styles.progressText}>65%</Text>
                    </View>
                    <TouchableOpacity style={styles.trackBtn}>
                        <Text style={styles.trackBtnText}>View Updates →</Text>
                    </TouchableOpacity>
                </View>

                {/* Section 2: Updates & Certificates */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Latest Growth Updates</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionLink}>View All Photos →</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>
                    <View style={styles.growthUpdateCard}>
                        <Image source={Images.plant_img} style={styles.growthUpdateImg} />
                        <View style={styles.growthUpdateTag}>
                            <Text style={styles.growthUpdateTagText}>Month 1</Text>
                        </View>
                    </View>
                    <View style={styles.growthUpdateCard}>
                        <Image source={Images.tree} style={styles.growthUpdateImg} />
                        <View style={styles.growthUpdateTag}>
                            <Text style={styles.growthUpdateTagText}>Month 3</Text>
                        </View>
                    </View>
                    <View style={styles.growthUpdateCard}>
                        <Image source={Images.neem_tree} style={styles.growthUpdateImg} />
                        <View style={styles.growthUpdateTag}>
                            <Text style={styles.growthUpdateTagText}>Month 6</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.growthUpdateFooter}>
                    <Image source={Images.copy} style={styles.footerIcon} resizeMode="contain" />
                    <Text style={styles.footerText}>Photos from Aravalli Restoration Project</Text>
                </View>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>My Certificates</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionLink}>View All →</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>
                    <View style={[styles.certificateItemCard, { borderColor: '#10B981' }]}>
                        <Image source={Images.group} style={styles.certIcon} resizeMode="contain" />
                        <Text style={styles.certTitle}>Plantation{'\n'}Certificate</Text>
                        <TouchableOpacity style={styles.certDownloadBtn}>
                            <Text style={styles.certDownloadText}>Download</Text>
                            <Image source={Images.download} style={styles.certDownloadIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.certificateItemCard, { borderColor: '#3B82F6' }]}>
                        <Image source={Images.Emission} style={styles.certIcon} resizeMode="contain" />
                        <Text style={styles.certTitle}>Carbon Offset{'\n'}Certificate</Text>
                        <TouchableOpacity style={styles.certDownloadBtn}>
                            <Text style={styles.certDownloadText}>Download</Text>
                            <Image source={Images.download} style={styles.certDownloadIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.certificateItemCard, { borderColor: '#8B5CF6' }]}>
                        <Image source={Images.copy} style={styles.certIcon} resizeMode="contain" />
                        <Text style={styles.certTitle}>Impact{'\n'}Report</Text>
                        <TouchableOpacity style={styles.certDownloadBtn}>
                            <Text style={styles.certDownloadText}>Download</Text>
                            <Image source={Images.download} style={styles.certDownloadIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* Section 3: Journey & Feed */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>My Carbon Journey</Text>
                    <TouchableOpacity>
                        <Image source={Images.copy} style={styles.infoIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                <View style={styles.journeyCard}>
                    <View style={styles.journeyRow}>
                        <View style={styles.journeyRingContainer}>
                            <Image source={Images.plant_img} style={styles.journeyInnerImg} resizeMode="cover" />
                        </View>
                        <View style={styles.journeyInfo}>
                            <Text style={styles.journeyLabel}>Annual Footprint</Text>
                            <Text style={styles.journeyValue}>6.42 <Text style={styles.journeyUnit}>Tons CO₂</Text></Text>

                            <View style={styles.journeyDivider} />

                            <Text style={styles.journeyLabel}>Offset Completed</Text>
                            <Text style={styles.journeyValue}>6.42 <Text style={styles.journeyUnit}>Tons CO₂</Text></Text>

                            <View style={styles.journeyStatusBox}>
                                <Text style={styles.journeyStatusLabel}>Status</Text>
                                <Text style={styles.journeyStatusValue}>Carbon Neutral ✅</Text>
                                <Text style={styles.journeyStatusSub}>You've achieved 100% offset.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.journeyFooter}>
                        <Text style={styles.journeyFooterText}>Carbon Neutral ✅</Text>
                    </View>
                </View>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                </View>
                <View style={styles.quickActionsGrid}>
                    <TouchableOpacity style={styles.quickActionBtn}>
                        <Image source={Images.treeIcon} style={styles.quickActionIcon} resizeMode="contain" />
                        <Text style={styles.quickActionTitle}>Plant More Trees</Text>
                        <Text style={styles.quickActionDesc}>Contribute again</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickActionBtn}>
                        <Image source={Images.gift} style={styles.quickActionIcon} resizeMode="contain" />
                        <Text style={styles.quickActionTitle}>Gift A Tree</Text>
                        <Text style={styles.quickActionDesc}>For your loved ones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickActionBtn}>
                        <Image source={Images.copy} style={styles.quickActionIcon} resizeMode="contain" />
                        <Text style={styles.quickActionTitle}>Carbon Calculator</Text>
                        <Text style={styles.quickActionDesc}>Recalculate footprint</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickActionBtn}>
                        <Image source={Images.heart} style={styles.quickActionIcon} resizeMode="contain" />
                        <Text style={styles.quickActionTitle}>Sponsor Plantation</Text>
                        <Text style={styles.quickActionDesc}>Support more projects</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>My Impact Feed</Text>
                </View>
                <View style={styles.feedCard}>
                    <View style={styles.feedItem}>
                        <View style={styles.feedIconCircleGreen}>
                            <Image source={Images.copy} style={styles.feedIconWhite} resizeMode="contain" />
                        </View>
                        <View style={styles.feedInfo}>
                            <Text style={styles.feedDate}>12 July 2024</Text>
                            <Text style={styles.feedText}>GPS verification completed for Aravalli Restoration</Text>
                        </View>
                    </View>
                    <View style={styles.feedLine} />

                    <View style={styles.feedItem}>
                        <View style={styles.feedIconCircleGray}>
                            <Image source={Images.tree} style={styles.feedIconGray} resizeMode="contain" />
                        </View>
                        <View style={styles.feedInfo}>
                            <Text style={styles.feedDate}>15 July 2024</Text>
                            <Text style={styles.feedText}>Plantation photographs uploaded</Text>
                        </View>
                    </View>
                    <View style={styles.feedLine} />

                    <View style={styles.feedItem}>
                        <View style={styles.feedIconCircleGray}>
                            <Image source={Images.Footprintbg} style={styles.feedIconGray} resizeMode="contain" />
                        </View>
                        <View style={styles.feedInfo}>
                            <Text style={styles.feedDate}>22 July 2024</Text>
                            <Text style={styles.feedText}>Plantation certificate issued</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.feedViewAllBtn}>
                        <Text style={styles.feedViewAllText}>View Full Timeline →</Text>
                    </TouchableOpacity>
                </View>

                {/* Section 4: Map & Achievements */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>My Trees Across India</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionLink}>View Full Map →</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.mapCard}>
                    <View style={styles.mapRow}>
                        <Image source={Images.PaymentBg} style={styles.mapImg} resizeMode="contain" />
                        <View style={styles.statesList}>
                            <View style={styles.stateItem}>
                                <View style={styles.stateIconCircle}>
                                    <Image source={Images.treeIcon} style={styles.stateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.stateTitle}>Rajasthan</Text>
                                    <Text style={styles.stateSub}>Aravalli Restoration</Text>
                                    <Text style={styles.stateValue}>142 Trees</Text>
                                </View>
                            </View>
                            <View style={styles.stateItem}>
                                <View style={styles.stateIconCircle}>
                                    <Image source={Images.treeIcon} style={styles.stateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.stateTitle}>Uttarakhand</Text>
                                    <Text style={styles.stateSub}>Himalayan Greens</Text>
                                    <Text style={styles.stateValue}>100 Trees</Text>
                                </View>
                            </View>
                            <View style={styles.stateItem}>
                                <View style={styles.stateIconCircle}>
                                    <Image source={Images.treeIcon} style={styles.stateIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.stateTitle}>Karnataka</Text>
                                    <Text style={styles.stateSub}>Western Ghats Project</Text>
                                    <Text style={styles.stateValue}>50 Trees</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Environmental Achievements</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionLink}>View All →</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>
                    <View style={styles.achievementCard}>
                        <View style={styles.achievementRing}>
                            <Image source={Images.plant_img} style={styles.achievementIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.achievementTitle}>First Tree</Text>
                        <Text style={styles.achievementDesc}>Planted your{'\n'}first tree</Text>
                        <View style={styles.achievementStatus}>
                            <Text style={styles.achievementStatusText}>Achieved ✅</Text>
                        </View>
                    </View>
                    <View style={styles.achievementCard}>
                        <View style={styles.achievementRing}>
                            <Image source={Images.tree} style={styles.achievementIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.achievementTitle}>50 Trees</Text>
                        <Text style={styles.achievementDesc}>Planted 50{'\n'}trees</Text>
                        <View style={styles.achievementStatus}>
                            <Text style={styles.achievementStatusText}>Achieved ✅</Text>
                        </View>
                    </View>
                    <View style={styles.achievementCard}>
                        <View style={styles.achievementRing}>
                            <Image source={Images.neem_tree} style={styles.achievementIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.achievementTitle}>100 Trees</Text>
                        <Text style={styles.achievementDesc}>Planted 100{'\n'}trees</Text>
                        <View style={styles.achievementStatus}>
                            <Text style={styles.achievementStatusText}>Achieved ✅</Text>
                        </View>
                    </View>
                    <View style={styles.achievementCard}>
                        <View style={styles.achievementRing}>
                            <Image source={Images.Footprintbg} style={styles.achievementIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.achievementTitle}>Carbon Neutral</Text>
                        <Text style={styles.achievementDesc}>Offset 100% of{'\n'}your footprint</Text>
                        <View style={styles.achievementStatus}>
                            <Text style={styles.achievementStatusText}>Achieved ✅</Text>
                        </View>
                    </View>
                </ScrollView>

                {/* Section 5: Bottom Banner */}
                <View style={styles.bottomBannerCard}>
                    <View style={styles.bottomBannerRow}>
                        <Image source={Images.handtree} style={styles.bottomBannerImg} resizeMode="contain" />
                        <View style={styles.bottomBannerInfo}>
                            <Text style={styles.bottomBannerText}>Together, we are building a greener, healthier and better planet for all. 🌍💚</Text>
                        </View>
                    </View>
                    <View style={styles.bottomBannerStatsRow}>
                        <View style={styles.bottomBannerStatItem}>
                            <Text style={styles.bottomBannerStatValue}>6.42 <Text style={styles.bottomBannerStatUnit}>Tons CO₂</Text></Text>
                            <Text style={styles.bottomBannerStatLabel}>Offset Every Year</Text>
                        </View>
                        <View style={styles.bottomBannerStatItem}>
                            <Text style={styles.bottomBannerStatValue}>292 <Text style={styles.bottomBannerStatUnit}>Trees</Text></Text>
                            <Text style={styles.bottomBannerStatLabel}>Growing Strong</Text>
                        </View>
                        <View style={styles.bottomBannerStatItem}>
                            <Text style={styles.bottomBannerStatValue}>A Better Planet</Text>
                            <Text style={styles.bottomBannerStatLabel}>For Generations</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.continueBtn}>
                    <Image source={Images.treeIcon} style={styles.continueBtnIconLeft} resizeMode="contain" />
                    <Text style={styles.continueBtnText}>Continue Making Impact – Plant More Trees</Text>
                    <Text style={styles.continueBtnArrow}>→</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ImpactDashboard;
