import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground, FlatList } from 'react-native';
import { styles } from './Styles';
import Images from '../../../../constants/images';
import { Colors } from '../../../../comman/Colors';

const plantationsData = [
    {
        id: '1',
        title: 'Aravalli Restoration',
        location: '📍 Rajasthan, India',
        image: Images.project_aravalli,
        status: 'Plantation Complete',
        progress: '100%',
        btnText: 'Track Trees →',
        isComplete: true,
    },
    {
        id: '2',
        title: 'Urban Forest Jaipur',
        location: '📍 Rajasthan, India',
        image: Images.project_jaipur,
        status: 'Monitoring',
        progress: '65%',
        progressColor: '#F59E0B',
        btnText: 'View Updates →',
        isComplete: false,
    }
];

const growthUpdatesData = [
    { id: '1', image: Images.mango_tree, tag: 'Month 1' },
    { id: '2', image: Images.gulmohar_tree, tag: 'Month 3' },
    { id: '3', image: Images.neem_tree, tag: 'Month 6' }
];

const certificatesData = [
    { id: '1', title: 'Plantation\nCertificate', icon: Images.treeIcon, color: Colors.legacyGreen },
    { id: '2', title: 'Carbon Offset\nCertificate', icon: Images.Emission, color: '#3B82F6' },
    { id: '3', title: 'Impact\nReport', icon: Images.copy, color: '#8B5CF6' }
];

const achievementsData = [
    {
        id: '1',
        title: 'First Tree',
        desc: 'Planted your\nfirst tree',
        icon: Images.mango_tree,
        status: 'Achieved ✅',
        bgColor: '#FFFFFF',
        borderColor: '#E5E7EB',
    },
    {
        id: '2',
        title: '50 Trees',
        desc: 'Planted 50\ntrees',
        icon: Images.gulmohar_tree,
        status: 'Achieved ✅',
        bgColor: '#FFFFFF',
        borderColor: '#E5E7EB',
    },
    {
        id: '3',
        title: '100 Trees',
        desc: 'Planted 100\ntrees',
        icon: Images.peepal_tree,
        status: 'Achieved ✅',
        bgColor: '#FFFFFF',
        borderColor: '#E5E7EB',
    },

];

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

                <FlatList
                    data={plantationsData}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <View style={styles.plantationCard}>
                            <View style={styles.plantationRow}>
                                <Image source={item.image} style={styles.plantationImg} />
                                <View style={styles.plantationInfo}>
                                    <Text style={styles.plantationTitle}>{item.title}</Text>
                                    <Text style={styles.plantationLocation}>{item.location}</Text>
                                    <View style={item.isComplete ? styles.statusTagComplete : styles.statusTagMonitoring}>
                                        <Text style={item.isComplete ? styles.statusTagTextComplete : styles.statusTagTextMonitoring}>{item.status}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.progressRow}>
                                <View style={styles.progressBarContainer}>
                                    <View style={[styles.progressBarFill, { width: item.progress as any }, item.progressColor && { backgroundColor: item.progressColor }]} />
                                </View>
                                <Text style={styles.progressText}>{item.progress}</Text>
                            </View>
                            <TouchableOpacity style={styles.trackBtn}>
                                <Text style={styles.trackBtnText}>{item.btnText}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

                {/* Section 2: Updates & Certificates */}
                <View style={styles.growthUpdatesContainer}>
                    <View style={styles.growthUpdatesHeader}>
                        <Text style={styles.sectionTitle}>Latest Growth Updates</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionLink}>View All Photos →</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        numColumns={3}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        scrollEnabled={false}
                        data={growthUpdatesData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.growthUpdateCard}>
                                <Image source={item.image} style={styles.growthUpdateImg} />
                                <View style={styles.growthUpdateTag}>
                                    <Text style={styles.growthUpdateTagText}>{item.tag}</Text>
                                </View>
                            </View>
                        )}
                    />

                    <View style={styles.growthUpdatesFooter}>
                        <Image source={Images.calendar} style={styles.footerIcon} resizeMode="contain" />
                        <Text style={styles.footerText}>Photos from Aravalli Restoration Project</Text>
                    </View>
                </View>

                <View style={styles.certificatesContainer}>
                    <View style={styles.growthUpdatesHeader}>
                        <Text style={styles.sectionTitle}>My Certificates</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionLink}>View All →</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        numColumns={3}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        scrollEnabled={false}
                        data={certificatesData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={[styles.certificateItemCard, { borderColor: item.color }]}>
                                <Image source={item.icon} style={[styles.certIcon, { tintColor: item.color }]} resizeMode="contain" />
                                <Text style={styles.certTitle}>{item.title}</Text>
                                <TouchableOpacity style={styles.certDownloadBtn}>
                                    <Text style={styles.certDownloadText}>Download</Text>
                                    <Image source={Images.download} style={styles.certDownloadIcon} resizeMode="contain" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>

                {/* Section 3: Journey & Feed */}
                <View style={styles.journeyCard}>
                    <View style={styles.journeyHeader}>
                        <Text style={styles.sectionTitle}>My Carbon Journey</Text>
                        <TouchableOpacity>
                            <Image source={Images.copy} style={styles.infoIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.journeyRow}>
                        <View style={styles.journeyLeftCol}>
                            <View style={styles.journeyRingContainer}>
                                <Image source={Images.treeIcon} style={styles.journeyInnerImg} resizeMode="contain" />
                            </View>
                            <Text style={styles.journeyFooterText}>Carbon Neutral ✅</Text>
                        </View>

                        <View style={styles.journeyInfo}>
                            <Text style={styles.journeyLabel}>Annual Footprint</Text>
                            <Text style={styles.journeyValue}>6.42 <Text style={styles.journeyUnit}>Tons CO₂</Text></Text>

                            <View style={styles.journeyDivider} />

                            <Text style={styles.journeyLabel}>Offset Completed</Text>
                            <Text style={styles.journeyValue}>6.42 <Text style={styles.journeyUnit}>Tons CO₂</Text></Text>

                            <View style={styles.journeyStatusBox}>
                                <Text style={styles.journeyStatusValue}>Carbon Neutral ✅</Text>
                                <Text style={styles.journeyStatusSub}>You've achieved 100% offset.</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.quickActionsContainer}>
                    <View style={styles.feedHeader}>
                        <Text style={styles.sectionTitle}>Quick Actions</Text>
                    </View>
                    <View style={styles.quickActionsGrid}>
                        <TouchableOpacity style={styles.quickActionBtn}>
                            <Image source={Images.plantMore} style={styles.quickActionIcon} resizeMode="contain" />
                            <Text style={styles.quickActionTitle}>Plant More Trees</Text>
                            <Text style={styles.quickActionDesc}>Contribute again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quickActionBtn}>
                            <Image source={Images.gifttree} style={styles.quickActionIcon} resizeMode="contain" />
                            <Text style={styles.quickActionTitle}>Gift A Tree</Text>
                            <Text style={styles.quickActionDesc}>For your loved ones</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quickActionBtn}>
                            <Image source={Images.calculator} style={[styles.quickActionIcon, { tintColor: Colors.greenthem }]} resizeMode="contain" />
                            <Text style={styles.quickActionTitle}>Carbon Calculator</Text>
                            <Text style={styles.quickActionDesc}>Recalculate footprint</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quickActionBtn}>
                            <Image source={Images.Sponser_plantation} style={[styles.quickActionIcon, { tintColor: Colors.greenthem }]} resizeMode="contain" />
                            <Text style={styles.quickActionTitle}>Sponsor Plantation</Text>
                            <Text style={styles.quickActionDesc}>Support more projects</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.feedCard}>
                    <View style={styles.feedHeader}>
                        <Text style={styles.sectionTitle}>My Impact Feed</Text>
                    </View>
                    <View style={styles.feedItem}>
                        <View style={styles.feedIconCircleGreen}>
                            <Image source={Images.check} style={styles.feedIconWhite} resizeMode="contain" />
                        </View>
                        <View style={styles.feedInfo}>
                            <Text style={styles.feedDate}>12 July 2024</Text>
                            <Text style={styles.feedText}>GPS verification completed for Aravalli Restoration</Text>
                        </View>
                    </View>

                    <View style={styles.feedItem}>
                        <View style={styles.feedIconCircleGray}>
                            <Image source={Images.tree} style={styles.feedIconGray} resizeMode="contain" />
                        </View>
                        <View style={styles.feedInfo}>
                            <Text style={styles.feedDate}>15 July 2024</Text>
                            <Text style={styles.feedText}>Plantation photographs uploaded</Text>
                        </View>
                    </View>

                    <View style={styles.feedItem}>
                        <View style={styles.feedIconCircleGray}>
                            <Image source={Images.copy} style={styles.feedIconGray} resizeMode="contain" />
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

                <View style={styles.mapCard}>
                    <View style={styles.cardHeaderRow}>
                        <Text style={styles.sectionTitle}>My Trees Across India</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionLink}>View Full Map</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mapRow}>
                        <Image source={Images.treemap} style={styles.mapImg} resizeMode="contain" />
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

                <View style={styles.achievementsContainer}>
                    <View style={styles.cardHeaderRow}>
                        <Text style={styles.sectionTitle}>Environmental Achievements</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionLink}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        numColumns={3}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        showsVerticalScrollIndicator={false}
                        data={achievementsData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={[styles.achievementCard, { backgroundColor: item.bgColor, borderColor: item.borderColor }]}>
                                <View style={styles.achievementRing}>
                                    <Image source={item.icon} style={styles.achievementIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.achievementTitle}>{item.title}</Text>
                                <Text style={styles.achievementDesc}>{item.desc}</Text>
                                <View style={styles.achievementStatus}>
                                    <Text style={styles.achievementStatusText}>{item.status}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>

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
                    <Text style={styles.continueBtnText}>Continue Making Impact – Plant More Trees</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ImpactDashboard;
