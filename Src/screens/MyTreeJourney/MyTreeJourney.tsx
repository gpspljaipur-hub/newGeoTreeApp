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
import { handleNavigation, RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import { Colors } from '../../comman/Colors';
import { styles } from './styles';

const MyTreeJourneyScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'MyTreeJourneyScreen'>>();

    // Dynamic props with defaults to match high-fidelity mockup
    const qty = route.params?.qty ?? 10;
    const co2 = route.params?.co2 ?? 220;
    const projectName = route.params?.projectName ?? 'Aravalli Restoration Project';
    const stateName = route.params?.stateName ?? 'Rajasthan';
    const treeName = route.params?.treeName ?? 'Neem Tree';

    // Copy to clipboard mock
    const handleCopyId = () => {
        Alert.alert('Success', 'Tree ID: GT-2026-10245 copied to clipboard!');
    };

    // Stage Selection State
    const [selectedStage, setSelectedStage] = useState(0);

    // Progress Steps data representing the plantation progress timeline
    const progressSteps = [
        {
            title: 'Payment\nComplete',
            date: '28 May 2026',
            icon: Images.check,
            isCompleted: true,
        },
        {
            title: 'Tree\nReserved',
            date: '28 May 2026',
            icon: Images.treeIcon,
            isCompleted: true,
        },
        {
            title: 'Plantation\nScheduled',
            date: '15 July 2026',
            icon: Images.calendar,
            isCompleted: true,
        },
        {
            title: 'Tree\nPlanted',
            date: 'Upcoming',
            icon: Images.leaf,
            isCompleted: false,
        },
        {
            title: 'GPS\nVerified',
            date: 'Upcoming',
            icon: Images.location,
            isCompleted: false,
        },
        {
            title: 'Growth\nUpdates',
            date: 'Upcoming',
            icon: Images.impact,
            isCompleted: false,
        },
        {
            title: 'Certificate\nIssued',
            date: 'Upcoming',
            icon: Images.certificate,
            isCompleted: false,
        },
    ];

    const completedCount = progressSteps.filter(step => step.isCompleted).length;
    const lastCompletedIndex = completedCount > 0 ? completedCount - 1 : 0;
    const activeLineWidth: any = progressSteps.length > 1
        ? `${(lastCompletedIndex / (progressSteps.length - 1)) * 88}%`
        : '0%';

    const growthStages = [
        { title: 'Before\nPlantation', status: 'Awaiting\nPlantation', image: Images.leaf },
        { title: 'Month 1', status: 'Coming\nSoon', image: Images.plant },
        { title: 'Month 3', status: 'Coming\nSoon', image: Images.one_tree_plant },
        { title: 'Month 6', status: 'Coming\nSoon', image: Images.five_trees_plant },
        { title: 'Month 12', status: 'Coming\nSoon', image: Images.neem_tree },
    ];

    // Environmental Impact cards
    const impactCards = [
        { value: `${qty}`, label: 'Trees', icon: Images.treeIcon, bgType: 'green' },
        { value: `${co2} KG`, label: 'CO₂ Offset', icon: Images.co2Cloud, bgType: 'green' },
        { value: '1,000 L', label: 'Water Saved', icon: Images.globe, bgType: 'blue' }, // Custom blue tint
        { value: 'Habitat for', label: 'Birds & Wildlife', icon: Images.bird, bgType: 'blue' },
    ];

    // Timeline Updates
    const timelineUpdates = [
        {
            date: '12 June 2026',
            desc: 'Site preparation completed.',
            image: Images.sariska_reserve,
            completed: true,
            icon: Images.location,
        },
        {
            date: '15 June 2026',
            desc: 'Plantation scheduled for 15 July 2026.',
            image: Images.peepal_tree,
            completed: true,
            icon: Images.calendar,
        },
        {
            date: '18 June 2026',
            desc: 'Nursery trees ready for plantation.',
            image: Images.mango_tree,
            completed: true,
            icon: Images.treeIcon,
        },
        {
            date: 'Upcoming',
            desc: 'Our team will plant and geo-tag your trees.',
            image: Images.handtree,
            completed: false,
        },
    ];

    // Documents
    const documentsList = [
        {
            title: 'Digital Certificate',
            desc: 'Will be available after plantation',
            icon: Images.certificate,
            actionType: 'coming_soon',
        },
        {
            title: 'Invoice / Receipt',
            desc: 'Payment of ₹1,990',
            icon: Images.wallet,
            actionType: 'download',
        },
        {
            title: 'Plantation Photos',
            desc: 'Geo-tagged photos from the site',
            icon: Images.impact,
            actionType: 'coming_soon',
        },
        {
            title: 'Impact Report',
            desc: 'Environmental impact report',
            icon: Images.verified,
            actionType: 'coming_soon',
        },
    ];

    // Share Options
    const shareOptions = [
        { label: 'WhatsApp', icon: Images.community },
        { label: 'Facebook', icon: Images.profile },
        { label: 'Instagram', icon: Images.flower },
        { label: 'LinkedIn', icon: Images.group },
    ];

    const handleSharePlatform = (platform: string) => {
        handleNavigation({ type: 'setRoot', navigation, page: 'Home' })
        // Alert.alert('Share', `Sharing your environmental impact on ${platform}!`);
    };

    const handleDownloadInvoice = () => {
        Alert.alert('Download', 'Downloading invoice... PDF saved successfully.');
    };

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* ImageBackground header covering title and summary drop */}
                <ImageBackground source={Images.detailbg} style={styles.headerHeroBg} resizeMode="cover">

                    {/* Header Row */}
                    <View style={styles.headerRow}>
                        <View style={styles.headerLeftCol}>
                            <View style={styles.backTitleRow}>
                                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
                                    <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                                </TouchableOpacity>
                                <View style={styles.titleRow}>
                                    <Text style={styles.headerTitle}>My Tree Journey</Text>
                                    <Text style={styles.heroSubtitle}>Track your tree. See your impact. Inspire the world.</Text>

                                </View>
                            </View>
                        </View>

                        <View style={styles.headerRightCol}>
                            <View style={styles.headerActions}>
                                {/* <TouchableOpacity
                                    style={styles.actionButtonCircle}
                                    onPress={() => handleSharePlatform('Generic Share')}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.shareNodeContainer}>
                                        <View style={[styles.shareNodeCircle, { top: 0, right: 0 }]} />
                                        <View style={[styles.shareNodeCircle, { top: 4.5, left: 0 }]} />
                                        <View style={[styles.shareNodeCircle, { bottom: 0, right: 0 }]} />
                                        <View style={[styles.shareLine, { width: 7, left: 3, top: 3.5, transform: [{ rotate: '-30deg' }] }]} />
                                        <View style={[styles.shareLine, { width: 7, left: 3, top: 8, transform: [{ rotate: '30deg' }] }]} />
                                    </View>
                                </TouchableOpacity> */}

                                <TouchableOpacity
                                    style={styles.actionButtonCircle}
                                    onPress={() => Alert.alert('Options', 'More options menu clicked.')}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.dotsRow}>
                                        <View style={styles.dotItem} />
                                        <View style={styles.dotItem} />
                                        <View style={styles.dotItem} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Hero Content Row: Summary Card (left) and Droplet Bulb (right) */}
                    <View style={styles.heroContentRow}>
                        <View style={styles.heroSummaryCardContainer}>
                            <View style={styles.summaryCardInner}>
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

                                    <View style={styles.treeIdRow}>
                                        <Text style={styles.treeIdLabel}>Tree ID: </Text>
                                        <Text style={styles.treeIdValue}>GT-2026-10245</Text>
                                        <TouchableOpacity style={styles.copyIconContainer} onPress={handleCopyId}>
                                            <Image source={Images.edit} style={styles.copyIcon} resizeMode="contain" />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.locationTextRow}>
                                        <Image source={Images.location} style={styles.locationPinIcon} resizeMode="contain" />
                                        <View style={styles.locationTextCol}>
                                            <Text style={styles.locationText} numberOfLines={1}>{projectName}</Text>
                                            <Text style={styles.locationText} numberOfLines={1}>{stateName === 'Rajasthan' ? 'Jaipur, ' : ''}{stateName}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.scheduledPill}>
                                        <Image source={Images.calendar} style={styles.scheduledPillIcon} resizeMode="contain" />
                                        <Text style={styles.scheduledPillText}>Plantation Scheduled</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Plantation Progress */}
                <View style={[styles.sectionContainer, { marginTop: -25, }]}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Plantation Progress</Text>
                        {/* <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" /> */}
                    </View>

                    <View style={styles.progressStepperContainer}>
                        <View style={styles.progressStepperLine} />
                        <View style={[styles.progressStepperLineActive, { width: activeLineWidth }]} />

                        {progressSteps.map((step, index) => {
                            return (
                                <View key={index} style={styles.progressStepItem}>
                                    {step.isCompleted ? (
                                        <View style={[styles.progressStepOuterCircle, styles.progressStepOuterCircleCompleted]}>
                                            <View style={styles.progressStepInnerCircleCompleted}>
                                                <Image
                                                    source={step.icon}
                                                    style={styles.progressStepIconCompleted}
                                                    resizeMode="contain"
                                                />
                                            </View>
                                            {index > 0 && (
                                                <View style={styles.stepCheckmarkBadge}>
                                                    <Image
                                                        source={Images.check}
                                                        style={styles.stepCheckmarkBadgeIcon}
                                                        resizeMode="contain"
                                                    />
                                                </View>
                                            )}
                                        </View>
                                    ) : (
                                        <View style={styles.progressStepOuterCircle}>
                                            <Image
                                                source={step.icon}
                                                style={styles.progressStepIcon}
                                                resizeMode="contain"
                                            />
                                        </View>
                                    )}
                                    <Text style={[
                                        styles.progressStepLabel,
                                        step.isCompleted && styles.progressStepLabelActive
                                    ]}>
                                        {step.title}
                                    </Text>
                                    <Text style={[
                                        styles.progressStepDate,
                                        step.isCompleted && styles.progressStepDateCompleted
                                    ]}>
                                        {step.date}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>

                {/* Plantation Location & Growth Journey row */}
                <View style={styles.twoColumnRow}>
                    {/* Left Column: Plantation Location */}
                    <View style={styles.columnLeft}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Plantation Location</Text>
                            <View style={{ height: 8 }} />

                            <View style={styles.mapContainer}>
                                <Image source={Images.treemap} style={styles.mapImage} resizeMode="cover" />
                                <View style={styles.mapOverlayLabel}>
                                    <Text style={styles.mapOverlayLabelText}>Aravalli Hills Restoration Zone</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.expandButton}
                                    onPress={() => Alert.alert('Expand Map', 'Map expand modal opened.')}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.expandLinesContainer}>
                                        <View style={styles.expandRow}>
                                            <View style={styles.expandDot} />
                                            <View style={styles.expandDot} />
                                        </View>
                                        <View style={styles.expandRow}>
                                            <View style={styles.expandDot} />
                                            <View style={styles.expandDot} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.latLongRow}>
                                <View style={styles.latLongCol}>
                                    <Text style={styles.latLongLabel}>Latitude</Text>
                                    <Text style={styles.latLongValue}>26.9124° N</Text>
                                </View>
                                <View style={styles.latLongDivider} />
                                <View style={styles.latLongCol}>
                                    <Text style={styles.latLongLabel}>Longitude</Text>
                                    <Text style={styles.latLongValue}>75.7873° E</Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={styles.viewMapButton}
                                onPress={() => Alert.alert('View Map', 'Redirecting to full screen map...')}
                                activeOpacity={0.7}
                            >
                                <Image source={Images.geolocation} style={styles.viewMapButtonIcon} resizeMode="contain" />
                                <Text style={styles.viewMapButtonText}>View Full Map</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Right Column: Tree Growth Journey & Impact */}
                    <View style={styles.columnRight}>

                        {/* Tree Growth Journey Card */}
                        <View style={styles.sectionContainer}>
                            <View style={styles.sectionTitleRow}>
                                <Text style={styles.sectionTitle}>Tree Growth Journey</Text>
                                {/* <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" /> */}
                            </View>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.growthStageScroll}>
                                {growthStages.map((stage, index) => {
                                    const isActive = selectedStage === index;
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={[styles.growthStageCard, isActive && styles.growthStageCardActive]}
                                            onPress={() => setSelectedStage(index)}
                                            activeOpacity={0.8}
                                        >
                                            <Text style={[styles.growthStageHeader, isActive && styles.growthStageHeaderActive]}>{stage.title}</Text>
                                            <Image source={stage.image} style={styles.growthStageImage} resizeMode="contain" />
                                            <Text style={[styles.growthStageStatus, isActive && styles.growthStageStatusActive]}>{stage.status}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>

                        {/* Environmental Impact (Yearly) */}
                        <View style={[styles.sectionContainer, { marginTop: 12 }]}>
                            <View style={styles.sectionTitleRow}>
                                <Text style={styles.sectionTitle}>Environmental Impact (Yearly)</Text>
                                {/* <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" /> */}
                            </View>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.impactScrollContent}>
                                {impactCards.map((card, index) => {
                                    const isBlue = card.bgType === 'blue';
                                    return (
                                        <View key={index} style={styles.impactCard}>
                                            <View style={[styles.impactIconBg, isBlue && styles.impactIconBlueBg]}>
                                                <Image
                                                    source={card.icon}
                                                    style={[styles.impactIcon, isBlue && styles.impactIconBlue]}
                                                    resizeMode="contain"
                                                />
                                            </View>
                                            <View style={styles.impactTextCol}>
                                                <Text style={styles.impactValue}>{card.value}</Text>
                                                <Text style={styles.impactLabel}>{card.label}</Text>
                                            </View>
                                        </View>
                                    );
                                })}
                            </ScrollView>
                        </View>

                    </View>
                </View>

                {/* Project Updates & Documents column row */}
                <View style={[styles.twoColumnRow, { marginBottom: 10, }]}>
                    {/* Left Column: Project Updates */}
                    <View style={styles.columnLeft}>
                        <View style={styles.sectionContainer}>
                            <View style={styles.sectionTitleRow}>
                                <Text style={styles.sectionTitle}>Project Updates</Text>
                                {/* <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" /> */}
                            </View>

                            <View style={styles.timelineContainer}>
                                <View style={styles.timelineLine} />

                                {timelineUpdates.map((item, index) => (
                                    <View key={index} style={styles.timelineItem}>
                                        <View style={[styles.timelineNode, item.completed && styles.timelineNodeActive]}>
                                            {item.completed && item.icon && (
                                                <Image source={item.icon} style={styles.timelineNodeIcon} resizeMode="contain" />
                                            )}
                                        </View>
                                        <View style={styles.timelineContent}>
                                            <Text style={styles.timelineDate}>{item.date}</Text>
                                            <Text style={styles.timelineDesc} numberOfLines={3}>{item.desc}</Text>
                                        </View>
                                        <Image source={item.image} style={styles.timelineImage} resizeMode="cover" />
                                    </View>
                                ))}
                            </View>

                            <TouchableOpacity
                                style={styles.viewAllUpdatesButton}
                                onPress={() => Alert.alert('Updates', 'Redirecting to full timeline...')}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.viewAllUpdatesText}>View All Updates</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Right Column: Documents & Certificates */}
                    <View style={styles.columnRight}>

                        {/* Documents & Certificates card */}
                        <View style={styles.sectionContainer}>
                            <View style={styles.sectionTitleRow}>
                                <Text style={styles.sectionTitle}>Documents & Certificates</Text>
                                {/* <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" /> */}
                            </View>

                            {documentsList.map((doc, index) => (
                                <View key={index} style={styles.docItem}>
                                    <View style={styles.docLeft}>
                                        <View style={styles.docIconBg}>
                                            <Image source={doc.icon} style={styles.docIcon} resizeMode="contain" />
                                        </View>
                                        <View style={styles.docTextCol}>
                                            <Text style={styles.docTitle} numberOfLines={1}>{doc.title}</Text>
                                            <Text style={styles.docDesc} numberOfLines={1}>{doc.desc}</Text>
                                        </View>
                                    </View>
                                    {doc.actionType === 'download' ? (
                                        <TouchableOpacity style={styles.downloadBadge} onPress={handleDownloadInvoice} activeOpacity={0.7}>
                                            <Text style={styles.downloadText}>Download</Text>
                                            <View style={styles.downloadIconCustomContainer}>
                                                <View style={styles.downloadIconShaft} />
                                                <View style={styles.downloadIconArrowhead} />
                                                <View style={styles.downloadIconTray} />
                                            </View>
                                        </TouchableOpacity>
                                    ) : (
                                        <View style={styles.comingSoonBadge}>
                                            <Text style={styles.comingSoonText}>Coming Soon</Text>
                                        </View>
                                    )}
                                </View>
                            ))}
                        </View>

                        {/* Share Your Impact section */}
                        <View style={[styles.sectionContainer, { marginTop: 17 }]}>
                            <View style={styles.sectionTitleRow}>
                                <Text style={styles.sectionTitle}>Share Your Impact</Text>
                                {/* <Image source={Images.leaf} style={styles.sectionTitleLeaf} resizeMode="contain" /> */}
                            </View>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shareRowScroll}>
                                {shareOptions.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.shareItem}
                                        onPress={() => handleSharePlatform(option.label)}
                                        activeOpacity={0.8}
                                    >
                                        <Image source={option.icon} style={styles.shareIcon} resizeMode="contain" />
                                        <Text style={styles.shareLabel}>{option.label}</Text>
                                    </TouchableOpacity>
                                ))}
                                {/* More dots share button */}
                                <TouchableOpacity
                                    style={styles.shareItem}
                                    onPress={() => handleSharePlatform('More Platforms')}
                                    activeOpacity={0.8}
                                >
                                    <View style={styles.shareMoreDotsContainer}>
                                        <View style={styles.dotItem} />
                                        <View style={styles.dotItem} />
                                        <View style={styles.dotItem} />
                                    </View>
                                    <Text style={styles.shareLabel}>More</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                    </View>
                </View>

                {/* Bottom sticky action row simulation */}
                <View style={styles.bottomStickyContainer}>
                    <TouchableOpacity
                        style={styles.stickyButtonLeft}
                        onPress={() => Alert.alert('Plantation Photos', 'Plantation gallery opened.')}
                        activeOpacity={0.95}
                    >
                        <Image source={Images.impact} style={styles.stickyButtonLeftIcon} resizeMode="contain" />
                        <Text style={styles.stickyButtonLeftText}>View Plantation Photos</Text>
                        <Text style={styles.stickyButtonLeftArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.stickyButtonRight}
                        onPress={() => handleSharePlatform('Full Impact')}
                        activeOpacity={0.7}
                    >
                        <Image source={Images.community} style={styles.stickyButtonRightIcon} resizeMode="contain" />
                        <Text style={styles.stickyButtonRightText}>Share My Impact</Text>
                    </TouchableOpacity>
                </View>



                {/* Bottom tab bar simulation */}
                {/* <View style={styles.tabBarContainer}>
                    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7} onPress={() => Alert.alert('Tab', 'Already on Overview')}>
                        <Image source={Images.plant} style={[styles.tabIcon, styles.tabIconActive]} resizeMode="contain" />
                        <Text style={[styles.tabLabel, styles.tabLabelActive]}>Overview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7} onPress={() => Alert.alert('Tab', 'Timeline tab opened')}>
                        <Image source={Images.calendar} style={styles.tabIcon} resizeMode="contain" />
                        <Text style={styles.tabLabel}>Timeline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7} onPress={() => Alert.alert('Tab', 'Map tab opened')}>
                        <Image source={Images.location} style={styles.tabIcon} resizeMode="contain" />
                        <Text style={styles.tabLabel}>Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7} onPress={() => Alert.alert('Tab', 'Photos tab opened')}>
                        <Image source={Images.impact} style={styles.tabIcon} resizeMode="contain" />
                        <Text style={styles.tabLabel}>Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7} onPress={() => Alert.alert('Tab', 'Impact tab opened')}>
                        <Image source={Images.verified} style={styles.tabIcon} resizeMode="contain" />
                        <Text style={styles.tabLabel}>Impact</Text>
                    </TouchableOpacity>
                </View> */}

            </ScrollView>
        </SafeAreaView>
    );
};

export default MyTreeJourneyScreen;
