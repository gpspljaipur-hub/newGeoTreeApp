import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions, FlatList } from 'react-native';
import Images from '../../../constants/images';
import styles from './Styles';

const { width } = Dimensions.get('window');

const HowWorks = ({ navigation }: any) => {

    const stepsData = [
        { id: '1', title: 'You Choose\na Project', desc: 'Explore verified green\nprojects and choose\nthe one you want to\nsupport.', icon: Images.heart },
        { id: '2', title: 'Make a\nContribution', desc: 'Select your support\namount and complete\na secure payment.', icon: Images.creditcard },
        { id: '3', title: 'We Plant\n& Implement', desc: 'Our trusted NGO\npartners plant trees\nand implement the\nproject on ground.', icon: Images.plant },
        { id: '4', title: 'Track Real\nProgress', desc: 'You receive regular\nupdates, photos and\nsee the real impact\nof your support.', icon: Images.camera },
        { id: '5', title: 'You Get Impact\nRecognition', desc: 'Receive digital\ncertificate and\nimpact report of\nyour contribution.', icon: Images.certificateIcon },
    ];

    const whatYouGetData = [
        { id: '1', title: 'Digital\nCertificate', icon: Images.certificateIcon },
        { id: '2', title: 'Regular\nUpdates', icon: Images.camera },
        { id: '3', title: 'Impact\nReports', icon: Images.impact },
        { id: '4', title: 'GPS Verified\nLocation', icon: Images.Location },
        { id: '5', title: 'Trees Planted\nin Your Name', icon: Images.treeIcon },
        { id: '6', title: 'Tax Benefit\n(80G)', icon: Images.copy },
    ];

    const assuranceData = [
        { id: '1', title: '100% Verified\nProjects', desc: 'All projects are verified\non field with GPS\nlocation and audits.', icon: Images.verified },
        { id: '2', title: 'Trusted NGO\nPartners', desc: 'We work with\nexperienced and\ntransparent partners.', icon: Images.group },
        { id: '3', title: 'Full Transparency', desc: 'Transparent fund\nutilization and real-time\nproject updates.', icon: Images.Globe || Images.check },
        { id: '4', title: 'Long-term\nImpact', desc: 'We ensure projects\nare monitored for\nlong-term impact.', icon: Images.leaf },
    ];

    const journeyData = [
        { id: '1', title: 'Site Selection & Survey', image: Images.project_aravalli },
        { id: '2', title: 'Plantation', image: Images.project_jaipur },
        { id: '3', title: 'Monitoring & Care', image: Images.project_himalayas },
        { id: '4', title: 'Growing Impact', image: Images.project_aravalli },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}>
                        <View style={styles.titleRow}>
                            <Text style={styles.headerTitle}>How It Works</Text>
                        </View>
                        <Text style={styles.headerSubtitle}>Simple steps. Real impact.</Text>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Image source={Images.shield} style={styles.badgeIcon} resizeMode="contain" />
                        <Text style={styles.badgeText}>100%{'\n'}Transparent</Text>
                    </View>
                </View>

                {/* Top Banner */}
                <View style={styles.topBanner}>
                    <View style={styles.topBannerImgContainer}>
                        <Image source={Images.handtree} style={styles.topBannerImg} resizeMode="cover" />
                    </View>
                    <View style={styles.topBannerTextContainer}>
                        <Text style={styles.topBannerText}>Your support creates a greener, healthier and sustainable future for generations to come.</Text>
                    </View>
                </View>

                {/* How Green Projects Work */}
                <View style={styles.sectionContainer}>
                    <View style={styles.stepsScrollContent}>
                        <Text style={styles.sectionTitle}>How Green Projects Work</Text>

                        <FlatList
                            numColumns={5}
                            showsHorizontalScrollIndicator={false}
                            data={stepsData}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => (
                                <View style={styles.stepItemContainer}>
                                    <View style={styles.stepIconCircle}>
                                        <Image source={item.icon} style={styles.stepIcon} resizeMode="contain" />
                                    </View>

                                    <View style={styles.stepNumberCircle}>
                                        <Text style={styles.stepNumberText}>{item.id}</Text>
                                    </View>

                                    {index < stepsData.length - 1 && (
                                        <View style={styles.stepConnector} />
                                    )}

                                    <Text style={styles.stepTitle}>{item.title}</Text>
                                    <Text numberOfLines={2} style={styles.stepDesc}>{item.desc}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>

                {/* What You Get */}
                <View style={styles.sectionContainerGray}>
                    <Text style={[styles.sectionTitle, { top: -5 }]}>What You Get</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.whatYouGetScrollContent}>
                        {whatYouGetData.map((item) => (
                            <View key={item.id} style={styles.whatYouGetItem}>
                                <View style={styles.whatYouGetIconCircle}>
                                    <Image source={item.icon} style={styles.whatYouGetIcon} resizeMode="contain" />
                                </View>
                                <Text numberOfLines={2} style={styles.whatYouGetTitle}>{item.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Our Assurance to You */}
                <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionTitle, { marginHorizontal: 16, marginBottom: 10 }]}>Our Assurance to You</Text>
                    <FlatList
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.assuranceScrollContent}
                        data={assuranceData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.assuranceCard}>
                                <View style={styles.assuranceIconCircle}>
                                    <Image source={item.icon} style={styles.assuranceIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.assuranceTitle}>{item.title}</Text>
                                <Text numberOfLines={2} style={styles.assuranceDesc}>{item.desc}</Text>
                            </View>
                        )}
                    />
                </View>

                {/* Project Journey */}
                <View style={[styles.sectionContainer, styles.journeySectionWrapper]}>
                    <Text style={[styles.sectionTitle, { marginHorizontal: 16, marginBottom: 10, top: -5 }]}>Project Journey</Text>
                    <FlatList
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.journeyScrollContent}
                        data={journeyData}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                            <View style={styles.journeyItemContainer}>
                                <View style={styles.journeyItem}>
                                    <Image source={item.image} style={styles.journeyImage} resizeMode="cover" />
                                    <Text style={styles.journeyTitle}>{item.title}</Text>
                                </View>

                            </View>
                        )}
                    />
                </View>

                {/* Footer Banner */}
                <View style={styles.footerBanner}>
                    <Image source={Images.handtree} style={styles.footerBannerImg} resizeMode='cover' />
                    <View style={styles.footerBannerInfo}>
                        <Text style={styles.footerBannerTitle}>Together, we can create a greener tomorrow.</Text>
                        <Text style={styles.footerBannerSub}>Thank you for being a part of the change!</Text>
                    </View>
                    <TouchableOpacity style={styles.exploreBtn}>
                        <Text style={styles.exploreBtnText}>Explore Projects</Text>
                    </TouchableOpacity>
                </View>

                {/* Tax Benefit Footer */}
                <View style={styles.taxFooter}>
                    <Image source={Images.shield} style={styles.taxShieldIcon} resizeMode="contain" />
                    <Text style={styles.taxFooterText}>
                        <Text style={styles.taxFooterBold}>80G Tax Benefit</Text> Available on All Eligible Contributions
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.taxFooterLink}>Know More ›</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }} />

            </ScrollView>
        </SafeAreaView>
    );
};

export default HowWorks;
