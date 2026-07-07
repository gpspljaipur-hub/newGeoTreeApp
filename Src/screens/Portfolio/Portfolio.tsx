import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    FlatList,
    ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import fonts from '../../comman/fonts';
import { styles } from './styles';

// Menu Burger Icon drawn using Views
const MenuIcon = () => (
    <View style={{ width: 18, height: 12, justifyContent: 'space-between' }}>
        <View style={{ height: 2, backgroundColor: '#111827', borderRadius: 1 }} />
        <View style={{ height: 2, backgroundColor: '#111827', borderRadius: 1, width: '75%', alignSelf: 'flex-end' }} />
        <View style={{ height: 2, backgroundColor: '#111827', borderRadius: 1 }} />
    </View>
);

interface TimelineStep {
    id: string;
    title: string;
    desc: string;
    status: 'completed' | 'active' | 'pending';
    icon: any;
    hasChevron: boolean;
}

const timelineData: TimelineStep[] = [
    {
        id: '1',
        title: 'Payment Completed',
        desc: '28 May 2026, 09:41 AM',
        status: 'completed',
        icon: Images.check,
        hasChevron: true,
    },
    {
        id: '2',
        title: 'Plantation Reserved',
        desc: '28 May 2026, 09:41 AM',
        status: 'completed',
        icon: Images.check,
        hasChevron: true,
    },
    {
        id: '3',
        title: 'Plantation Scheduled',
        desc: 'Expected in 7-15 days',
        status: 'active',
        icon: Images.plant,
        hasChevron: false,
    },
    {
        id: '4',
        title: 'GPS Verification',
        desc: 'Pending',
        status: 'pending',
        icon: Images.location,
        hasChevron: false,
    },
    {
        id: '5',
        title: 'Growth Updates',
        desc: 'Pending',
        status: 'pending',
        icon: Images.camera,
        hasChevron: false,
    },
];

const renderTimelineItem = ({ item, index }: { item: TimelineStep; index: number }) => {
    const isCompleted = item.status === 'completed';
    const isActive = item.status === 'active';
    const isPending = item.status === 'pending';

    // Node style
    const nodeStyle = [
        styles.timelineNode,
        isCompleted && styles.timelineNodeCompleted,
        isActive && styles.timelineNodeActive,
        isPending && styles.timelineNodePending,
    ];

    // Icon style
    let iconStyle = styles.timelinePendingIcon;
    if (isCompleted) {
        iconStyle = styles.timelineCheckIcon;
    } else if (isActive) {
        iconStyle = styles.timelineActiveIcon;
    }

    // Title style
    const titleStyle = [
        styles.timelineTitle,
        isCompleted && styles.timelineTitleCompleted,
        isActive && styles.timelineTitleActive,
    ];

    // Connecting line style
    const isLast = index === timelineData.length - 1;
    const lineStyle = [
        styles.timelineLine,
        (isActive || isPending) && styles.timelineLinePending,
    ];

    // Chevron styling
    const chevronColor = isCompleted ? '#056213' : '#9CA3AF';

    return (
        <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
                <View style={nodeStyle}>
                    <Image source={item.icon} style={iconStyle} resizeMode="contain" />
                </View>
                {!isLast && <View style={lineStyle} />}
            </View>

            <View style={styles.timelineRight}>
                <View style={styles.timelineTextCol}>
                    <Text style={titleStyle}>{item.title}</Text>
                    <Text style={styles.timelineDesc}>{item.desc}</Text>
                </View>

                {item.hasChevron && (
                    <Image
                        source={Images.back}
                        style={[styles.timelineChevron, { tintColor: chevronColor, transform: [{ rotate: '-90deg' }] }]}
                        resizeMode="contain"
                    />
                )}
            </View>
        </View>
    );
};

interface ActionLink {
    id: string;
    title: string;
    icon: any;
    action: string;
}

const actionData: ActionLink[] = [
    {
        id: '1',
        title: 'Certificates',
        icon: Images.certificate,
        action: 'Certificates',
    },
    {
        id: '2',
        title: 'Growth Photos',
        icon: Images.camera,
        action: 'Growth Photos',
    },
    {
        id: '3',
        title: 'Impact Reports',
        icon: Images.impact,
        action: 'Impact Reports',
    },
    {
        id: '4',
        title: 'My Orders',
        icon: Images.wallet,
        action: 'My Orders',
    },
];

const PortfolioScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleCopyBatchId = () => {
        Alert.alert('Copied', 'Batch ID copied successfully to clipboard.');
    };

    const handleActionClick = (actionName: string) => {
        Alert.alert(actionName, `Opening ${actionName}...`);
    };

    const renderActionItem = ({ item }: { item: ActionLink }) => (
        <TouchableOpacity style={styles.actionCard} onPress={() => handleActionClick(item.action)} activeOpacity={0.8}>
            <Image source={item.icon} style={styles.actionCardIcon} resizeMode="contain" />
            <Text style={styles.actionCardTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    const handleNavigateJourney = () => {
        navigation.navigate('MyTreeJourneyScreen');
    };

    const handleGoToJourney = () => {
        navigation.navigate('MyTreeJourneyScreen');
    };

    const handleNavigateProject = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            {/* Header Row */}


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Hero section wrapped in ImageBackground */}
                <ImageBackground source={Images.detailbg} style={styles.heroImageBackground} resizeMode="cover">
                    {/* Header Row for Back Icon */}
                    <View style={styles.heroHeaderRow}>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} style={styles.backCircle}>
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    {/* Hero Title Section */}
                    <View style={styles.heroSection}>
                        <Text style={styles.heroTitle}>My Plantation Portfolio</Text>
                        <Text style={styles.heroSubtitle}>Track your trees. See your impact. Inspire the world.</Text>
                    </View>

                    {/* Dark Green Impact Card */}
                    <View style={styles.impactCard}>
                        <View style={styles.impactMetric}>
                            <View style={styles.impactTitleRow}>
                                <Image source={Images.treeIcon} style={styles.impactMetricIcon} resizeMode="contain" />
                                <Text style={styles.impactLabel}>Active Trees</Text>
                            </View>
                            <Text style={styles.impactVal}>10</Text>
                        </View>

                        <View style={styles.impactDividerV} />

                        <View style={styles.impactMetric}>
                            <View style={styles.impactTitleRow}>
                                <Image source={Images.globe} style={[styles.impactMetricIcon, { tintColor: undefined }]} resizeMode="contain" />
                                <Text style={styles.impactLabel}>Total CO₂ Impact</Text>
                            </View>
                            <Text style={styles.impactVal}>
                                220 <Text style={styles.impactValSub}>KG / Year</Text>
                            </Text>
                        </View>

                        <View style={styles.impactDividerV} />

                        <View style={styles.impactMetric}>
                            <View style={styles.impactTitleRow}>
                                <Image source={Images.folder} style={styles.impactMetricIcon} resizeMode="contain" />
                                <Text style={styles.impactLabel}>Active Projects</Text>
                            </View>
                            <Text style={styles.impactVal}>1</Text>
                        </View>
                    </View>
                </ImageBackground>

                {/* Project details card */}
                <View style={[styles.card, { marginTop: 15 }]}>
                    <View style={styles.projectCardBody}>
                        <View style={styles.projectHeader}>
                            <Text style={styles.projectTitle}>Aravalli Restoration Project</Text>
                            <View style={styles.activeBadge}>
                                <Text style={styles.activeBadgeText}>Active</Text>
                            </View>
                        </View>

                        <View style={styles.locationRow}>
                            <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" />
                            <Text style={styles.locationText}>Jaipur, Rajasthan</Text>
                        </View>

                        <View style={styles.projectLandscape}>
                            <Image source={Images.aravali_belt} style={styles.projectImage} resizeMode="cover" />

                            <View style={styles.projectInfoCol}>
                                <View style={styles.infoField}>
                                    <Text style={styles.infoLabel}>Status</Text>
                                    <Text style={styles.infoValueOrange}>Plantation Scheduled</Text>
                                </View>
                                <View style={styles.infoDivider} />
                                <View style={styles.expectedDateRow}>
                                    <Image source={Images.calendar} style={styles.expectedDateIcon} resizeMode="contain" />
                                    <View style={styles.expectedDateTextCol}>
                                        <Text style={styles.infoLabel}>Expected Date</Text>
                                        <Text style={styles.infoValueDate}>15 July 2026</Text>
                                    </View>
                                </View>

                                <View style={styles.progressBarContainer}>
                                    <Text style={styles.infoLabel}>Progress</Text>
                                    <View style={styles.progressBarRow}>
                                        <View style={styles.progressBarBg}>
                                            <View style={styles.progressBarFill} />
                                        </View>
                                        <Text style={styles.progressText}>60%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.primaryBtn} onPress={handleGoToJourney} activeOpacity={0.9}>
                            <Text style={styles.primaryBtnText}>View Tree Journey</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.projectCardFooter}>
                        <TouchableOpacity style={styles.projectFooterBtn} onPress={handleNavigateJourney} activeOpacity={0.7}>
                            <Image source={Images.location} style={styles.projectFooterIcon} resizeMode="contain" />
                            <Text style={styles.projectFooterText}>View on Map</Text>
                        </TouchableOpacity>

                        <View style={styles.projectFooterDividerV} />

                        <TouchableOpacity style={styles.projectFooterBtn} onPress={handleNavigateProject} activeOpacity={0.7}>
                            <Image source={Images.folder} style={styles.projectFooterIcon} resizeMode="contain" />
                            <Text style={styles.projectFooterText}>Project Details</Text>
                        </TouchableOpacity>

                        <View style={styles.projectFooterDividerV} />

                        <TouchableOpacity style={styles.projectFooterBtn} onPress={() => handleActionClick('Share Project')} activeOpacity={0.7}>
                            <Image source={Images.group} style={styles.projectFooterIcon} resizeMode="contain" />
                            <Text style={styles.projectFooterText}>Share Project</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* Section: My Trees Status */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>My Trees Status</Text>
                    <TouchableOpacity onPress={handleNavigateJourney}>
                        <Text style={styles.sectionLink}>View All &gt;</Text>
                    </TouchableOpacity>
                </View>

                {/* Vertical timeline stepper card */}
                <View style={[styles.card, { padding: 16 }]}>
                    <FlatList
                        data={timelineData}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        renderItem={renderTimelineItem}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 1, backgroundColor: '#EFF2F0', marginLeft: 46 }} />
                        )}
                    />
                </View>

                {/* Section: Tree Details */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Tree Details</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ChooseTree')}>
                        <Text style={styles.sectionLink}>View All Trees &gt;</Text>
                    </TouchableOpacity>
                </View>

                {/* Tree Details Card */}
                <View style={[styles.card, { padding: 16, backgroundColor: Colors.listBgLight }]}>
                    <View style={styles.treeDetailsContent}>
                        <Image source={Images.neem_tree} style={styles.treeImage} resizeMode="contain" />

                        <View style={styles.treeInfoCol}>
                            <View style={styles.treeHeaderRow}>
                                <Text style={styles.treeName}>Neem Tree</Text>
                                <View style={styles.qtyPill}>
                                    <Text style={styles.qtyPillText}>10 Trees</Text>
                                </View>
                            </View>

                            <View style={styles.featureCheckRow}>
                                <Image source={Images.check} style={styles.featureCheckIcon} resizeMode="contain" />
                                <Text style={styles.featureText}>Native to Rajasthan</Text>
                            </View>

                            <View style={styles.featureCheckRow}>
                                <Image source={Images.check} style={styles.featureCheckIcon} resizeMode="contain" />
                                <Text style={styles.featureText}>Drought Resistant</Text>
                            </View>

                            <View style={styles.featureCheckRow}>
                                <Image source={Images.check} style={styles.featureCheckIcon} resizeMode="contain" />
                                <Text style={styles.featureText}>High CO₂ Absorption</Text>
                            </View>

                            <View style={styles.treeInfoDivider} />

                            <View style={styles.treeBatchRow}>
                                <Text style={styles.treeBatchText}>
                                    Batch ID: <Text style={styles.treeBatchVal}>GT-BATCH-10245</Text>
                                </Text>
                                <TouchableOpacity onPress={handleCopyBatchId} activeOpacity={0.7} style={{ marginLeft: 6 }}>
                                    <Image source={Images.edit} style={styles.treeCopyIcon} resizeMode="contain" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Section: Latest Updates */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Latest Updates</Text>
                    <TouchableOpacity onPress={handleNavigateJourney}>
                        <Text style={styles.sectionLink}>View All &gt;</Text>
                    </TouchableOpacity>
                </View>

                {/* Latest Updates Card */}
                <View style={[styles.card, { padding: 16 }]}>
                    <View style={styles.updatesContent}>
                        <Text style={styles.updatesText}>
                            No updates yet. We will notify you once plantation is completed and photos are uploaded.
                        </Text>
                        <View style={styles.updatesIllustrationContainer}>
                            <Image source={Images.bubbletree} style={styles.updatesIllustration} resizeMode="contain" />
                        </View>
                    </View>
                </View>

                {/* Section: Action Links Grid */}
                <FlatList
                    data={actionData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={renderActionItem}
                    style={styles.actionRow}
                    contentContainerStyle={styles.actionListContent}

                />

                {/* Green Callout Banner */}
                <View style={styles.badgeCallout}>
                    <View style={styles.badgeCalloutTextCol}>
                        <Text style={styles.badgeCalloutTitle}>You're Making a Real Difference! 🌏</Text>
                        <Text style={styles.badgeCalloutDesc}>Thank you for helping build a greener planet.</Text>
                    </View>
                    <View style={styles.badgeCalloutImgContainer}>
                        <Image source={Images.handtree} style={styles.badgeCalloutImg} resizeMode="contain" />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default PortfolioScreen;
