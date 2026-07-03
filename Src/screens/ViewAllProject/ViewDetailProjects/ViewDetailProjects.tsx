import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions, FlatList } from 'react-native';
import Images from '../../../constants/images';
import styles from './Styles';

const { width } = Dimensions.get('window');

const ViewDetailProjects = ({ navigation }: any) => {
    const tabs = ['Overview', 'Progress', 'Gallery', 'Impact', 'Location', 'Updates', 'Supporters'];
    const [activeTab, setActiveTab] = useState('Overview');

    const impactData = [
        { id: '1', value: '50,000', label: 'Trees by Goal', icon: Images.treeIcon },
        { id: '2', value: '125 Tons', label: 'CO₂ Offset (Est.)', icon: Images.co2Cloud || Images.co2Cloud },
        { id: '3', value: 'Improved', label: 'Water Retention', icon: Images.drop },
        { id: '4', value: 'Enhanced', label: 'Biodiversity', icon: Images.leaf },
        { id: '5', value: '20+', label: 'Local Jobs Created', icon: Images.group },
    ];

    const stepsData = [
        { id: '1', title: 'Planning & Survey', status: 'Completed', completed: true, icon: Images.edit || Images.calendar },
        { id: '2', title: 'Land Preparation', status: 'Completed', completed: true, icon: Images.group || Images.location },
        { id: '3', title: 'Plantation', status: '60%', completed: false, progress: 60, icon: Images.treeIcon },
        { id: '4', title: 'Monitoring & Maintenance', status: 'Upcoming', completed: false, icon: Images.wallet || Images.calendar },
        { id: '5', title: 'Project Completion', status: 'Upcoming', completed: false, icon: Images.calendar },
    ];

    const galleryData = [
        { id: '1', image: Images.project_aravalli, label: 'Before' },
        { id: '2', image: Images.project_jaipur, label: 'Plantation Drive' },
        { id: '3', image: Images.project_himalayas, label: 'New Growth' },
        { id: '4', image: Images.project_aravalli, label: 'Current Site' },
    ];

    const keyStatsData = [
        { id: '1', value: '65', label: 'Days Left', icon: Images.calendar },
        { id: '2', value: '50,000', label: 'Tree Goal', icon: Images.treeIcon },
        { id: '3', value: 'Prakriti Foundation', label: 'NGO Partner', icon: Images.group },
        { id: '4', value: '100%', label: 'Verified Project', icon: Images.shield, isGreen: true },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                    <Image source={Images.back} style={styles.icon} resizeMode="contain" />
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Image source={Images.share} style={styles.icon} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.iconButton, { marginLeft: 12 }]}>
                        <Image source={Images.heart} style={styles.icon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <View style={styles.heroImageContainer}>
                        <Image source={Images.project_aravalli} style={styles.heroImage} resizeMode="cover" />
                        <View style={styles.tagBadge}>
                            <Text style={styles.tagText}>RESTORATION</Text>
                        </View>
                        <View style={styles.gpsBadge}>
                            <Image source={Images.Location} style={styles.gpsIcon} resizeMode="contain" />
                            <Text style={styles.gpsText}>GPS VERIFIED</Text>
                        </View>
                    </View>

                    <View style={styles.heroInfo}>
                        <View style={styles.titleRow}>
                            <Text style={styles.projectTitle}>Aravalli Restoration Project</Text>
                            {/* <View style={styles.featuredBadge}>
                                <Image source={Images.star} style={styles.featuredIcon} resizeMode="contain" />
                                <Text style={styles.featuredText}>Featured</Text>
                            </View> */}
                        </View>
                        <View style={styles.locationRow}>
                            <Image source={Images.Location} style={styles.locationIcon} resizeMode="contain" />
                            <Text style={styles.locationText}>Rajasthan, India</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.projectDesc}>
                            Restoring degraded forest land and reviving native biodiversity in Aravalli ranges.
                        </Text>

                        <View style={styles.progressSection}>
                            <View style={styles.treesHeader}>
                                <View style={styles.treesLeft}>
                                    <Image source={Images.treeIcon} style={styles.treesIconMain} resizeMode="contain" />
                                    <Text style={styles.treesCount}>18,450</Text>
                                    <Text style={styles.treesGoal}> / 50,000</Text>
                                </View>
                                <Text style={styles.progressPercent}>37%</Text>
                            </View>
                            <Text style={styles.treesLabelMain}>Trees Planted</Text>
                            <View style={styles.progressBarBg}>
                                <View style={[styles.progressBarFill, { width: '37%' }]} />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Key Stats Row */}
                <View style={styles.keyStatsRow}>
                    <FlatList
                        data={keyStatsData}
                        keyExtractor={item => item.id}
                        numColumns={4}
                        columnWrapperStyle={styles.keyStatsColumnWrapper}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View style={styles.keyStatBox}>
                                <View style={styles.keyStatIconBg}>
                                    <Image source={item.icon} style={styles.keyStatIcon} resizeMode="contain" />
                                </View>
                                <View style={styles.keyStatTextCol}>
                                    <Text numberOfLines={1} adjustsFontSizeToFit style={item.isGreen ? styles.keyStatValueGreen : styles.keyStatValue}>{item.value}</Text>
                                    <Text numberOfLines={1} adjustsFontSizeToFit style={styles.keyStatLabel}>{item.label}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>

                {/* Tabs */}
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScroll} contentContainerStyle={{ paddingHorizontal: 16 }}>
                        {tabs.map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
                                onPress={() => setActiveTab(tab)}
                            >
                                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={styles.tabDivider} />
                </View>

                {/* About Project */}
                <View style={styles.sectionContainer}>
                    <View style={styles.aboutRow}>

                        <View style={styles.aboutTextCol}>
                            <Text style={styles.sectionTitle}>About the Project</Text>

                            <Text numberOfLines={6} style={styles.aboutText}>
                                The Aravalli mountain range is one of the oldest fold mountains in the world but has been severely affected by deforestation, soil erosion and unplanned urbanization. This project aims to restore native forests, improve groundwater levels and bring back biodiversity to the region.
                            </Text>
                            <TouchableOpacity style={styles.readMoreBtn}>
                                <Text style={styles.readMoreText}>Read More</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.quickFactsBox}>
                            <View style={styles.factRow}>
                                <Image source={Images.treeIcon} style={styles.factIcon} resizeMode="contain" />
                                <View>
                                    <Text style={styles.factLabel}>Project Type</Text>
                                    <Text style={styles.factValue}>Forest Restoration</Text>
                                </View>
                            </View>
                            <View style={styles.factRow}>
                                <Image source={Images.location || Images.Location} style={styles.factIcon} resizeMode="contain" />
                                <View>
                                    <Text style={styles.factLabel}>Area Covered</Text>
                                    <Text style={styles.factValue}>250 Acres</Text>
                                </View>
                            </View>
                            <View style={styles.factRow}>
                                <Image source={Images.calendar} style={styles.factIcon} resizeMode="contain" />
                                <View>
                                    <Text style={styles.factLabel}>Project Started On</Text>
                                    <Text style={styles.factValue}>12 Jan 2024</Text>
                                </View>
                            </View>
                            <View style={[styles.factRow, { marginBottom: 0 }]}>
                                <Image source={Images.calendar} style={styles.factIcon} resizeMode="contain" />
                                <View>
                                    <Text style={styles.factLabel}>Est. Completion</Text>
                                    <Text style={styles.factValue}>20 Aug 2024</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Expected Impact */}
                <View style={styles.sectionContainer}>
                    <View style={styles.impactCard}>
                        <Text style={styles.impactCardTitle}>Expected Impact</Text>
                        <View style={styles.impactGrid}>
                            {impactData.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <View style={styles.impactBox}>
                                        <View style={styles.impactIconCircle}>
                                            <Image source={item.icon} style={styles.impactIcon} resizeMode="contain" />
                                        </View>
                                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.impactValue}>{item.value}</Text>
                                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.impactLabel}>{item.label}</Text>
                                    </View>
                                    {index < impactData.length - 1 && <View style={styles.impactDivider} />}
                                </React.Fragment>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Project Progress */}
                <View style={styles.sectionContainer}>
                    <View style={styles.impactCard}>
                        <Text style={styles.impactCardTitle}>Project Progress</Text>
                        <View >
                            <View style={styles.progressRow}>
                                <View style={styles.gaugeContainer}>
                                    <View style={styles.gaugeCircle}>
                                        <Text style={styles.gaugeValue}>37%</Text>
                                        <Text style={styles.gaugeLabel}>Completed</Text>
                                    </View>
                                </View>

                                <View style={[styles.stepsContainer, { flex: 1 }]}>
                                    <FlatList
                                        data={stepsData}
                                        keyExtractor={(item) => item.id}
                                        scrollEnabled={false}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item: step }) => (
                                            <View style={styles.stepRow}>
                                                <View style={styles.stepIconBox}>
                                                    <Image source={step.icon} style={step.completed || step.title === 'Plantation' ? styles.stepCheckIcon : styles.stepPendingIcon} resizeMode="contain" />
                                                </View>
                                                <View style={styles.stepTextCol}>
                                                    {step.progress !== undefined ? (
                                                        <>
                                                            <Text style={styles.stepTitle}>{step.title}</Text>
                                                            <View style={styles.stepStatusRow}>
                                                                <View style={styles.stepProgressBar}>
                                                                    <View style={[styles.stepProgressFill, { width: `${step.progress}%` }]} />
                                                                </View>
                                                                <Text style={[styles.stepStatus, { color: '#0A5F35' }]}>{step.progress}%</Text>
                                                            </View>
                                                        </>
                                                    ) : (
                                                        <View style={styles.stepTitleRow}>
                                                            <Text style={styles.stepTitle}>{step.title}</Text>
                                                            <View style={styles.stepStatusRight}>
                                                                <Text style={[styles.stepStatus, step.completed && { color: '#0A5F35' }]}>{step.status}</Text>
                                                            </View>
                                                        </View>
                                                    )}
                                                </View>
                                            </View>
                                        )}
                                    />
                                </View>


                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.progressStatsBox, { marginHorizontal: 16, marginBottom: 16 }]}>
                    <View style={styles.pStatCol}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pStatLabel}>Trees Planted</Text>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pStatValueLarge}>18,450</Text>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pStatSub}>Out of 50k</Text>
                    </View>

                    <View style={styles.pStatDivider} />

                    <View style={styles.pStatCol}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pStatLabel}>This Month</Text>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pStatValueMedium}>2,350</Text>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pStatSub}>Trees</Text>
                    </View>

                    <View style={styles.pStatDivider} />

                    <View style={styles.pStatCol}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                            <Text numberOfLines={1} adjustsFontSizeToFit style={[styles.pStatLabel, { marginBottom: 0 }]}>Survival</Text>
                        </View>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.pStatValueMedium}>92%</Text>
                    </View>
                </View>

                {/* Project Gallery */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.sectionTitle}>Project Gallery</Text>
                        <TouchableOpacity style={styles.viewAllBtn}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryScroll}>
                        {galleryData.map((item) => (
                            <View key={item.id} style={styles.galleryCard}>
                                <Image source={item.image} style={styles.galleryImg} resizeMode="cover" />
                                <View style={styles.galleryLabelBg}>
                                    <Text style={styles.galleryLabel}>{item.label}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Project Location */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Project Location</Text>
                    <View style={styles.locationCard}>
                        <Image source={Images.Maps} style={styles.mapPlaceholder} resizeMode="cover" />
                        <View style={styles.locationDetailsBox}>
                            <View style={styles.locTopRow}>
                                <View style={styles.locIconCircle}>
                                    <Image source={Images.Location} style={styles.locIcon} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.locTitle}>GPS Verified Location</Text>
                                    <Text style={styles.locCoords}>27.1789° N, 76.2867° E</Text>
                                </View>
                            </View>
                            <View style={styles.locBtnsRow}>
                                <TouchableOpacity style={styles.locBtnOutline}>
                                    <Image source={Images.Location} style={styles.locBtnIcon} resizeMode="contain" />
                                    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.locBtnText}>View on Map</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.locBtnOutline, { marginRight: 0 }]}>
                                    <Image source={Images.share} style={styles.locBtnIcon} resizeMode="contain" />
                                    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.locBtnText}>Get Directions</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Support Project Card */}
                <View style={styles.supportCard}>
                    <View style={styles.supportInfo}>
                        <Text style={styles.supportTitle}>Support this Project</Text>
                        <Text style={styles.supportDesc}>
                            Your contribution will help us reach our goal of planting 50,000 trees.
                        </Text>
                        <TouchableOpacity style={styles.supportBtn}>
                            <Image source={Images.treeIcon} style={styles.supportBtnIcon} resizeMode="contain" />
                            <Text style={styles.supportBtnText}>Support Now</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={Images.handtree} style={styles.supportImg} resizeMode="contain" />
                </View>

                {/* What You Will Receive */}
                <View style={styles.receiveSection}>
                    <Text style={styles.receiveTitle}>What You Will Receive</Text>
                    <View style={styles.receiveList}>
                        <View style={styles.receiveRow}>
                            <View style={styles.receiveCheckCircle}>
                                <Image source={Images.check} style={styles.receiveCheck} resizeMode="contain" />
                            </View>
                            <Text style={styles.receiveText}>Digital Sponsorship Certificate</Text>
                        </View>
                        <View style={styles.receiveRow}>
                            <View style={styles.receiveCheckCircle}>
                                <Image source={Images.check} style={styles.receiveCheck} resizeMode="contain" />
                            </View>
                            <Text style={styles.receiveText}>Regular Updates & Photos</Text>
                        </View>
                        <View style={styles.receiveRow}>
                            <View style={styles.receiveCheckCircle}>
                                <Image source={Images.check} style={styles.receiveCheck} resizeMode="contain" />
                            </View>
                            <Text style={styles.receiveText}>Impact Report</Text>
                        </View>
                        <View style={styles.receiveRow}>
                            <View style={styles.receiveCheckCircle}>
                                <Image source={Images.check} style={styles.receiveCheck} resizeMode="contain" />
                            </View>
                            <Text style={styles.receiveText}>GPS Location of the Project</Text>
                        </View>
                    </View>
                </View>

                {/* Bottom Trust Badges */}
                <View style={styles.trustBadgesRow}>
                    <View style={styles.trustBadge}>
                        <Image source={Images.shield} style={styles.trustIcon} resizeMode="contain" />
                        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.trustText}>100% Verified Project</Text>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustBadge}>
                        <Image source={Images.treeIcon} style={styles.trustIcon} resizeMode="contain" />
                        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.trustText}>Transparent & Impactful</Text>
                    </View>
                    <View style={styles.trustDivider} />
                    <View style={styles.trustBadge}>
                        <Image source={Images.shield} style={styles.trustIcon} resizeMode="contain" />
                        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.trustText}>80G Tax Benefit</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ViewDetailProjects;
