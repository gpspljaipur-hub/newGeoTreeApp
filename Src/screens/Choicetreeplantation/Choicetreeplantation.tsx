import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    TextInput,
    ImageBackground,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import String from '../../comman/String';
import { Colors } from '../../comman/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { PROJECTS_DATA } from '../Statewise/StatewiseScreen';

const ChoicetreeplantationScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'Choicetreeplantation'>>();

    const stateName = route.params?.stateName || 'Rajasthan';
    const stateData = PROJECTS_DATA[stateName] || PROJECTS_DATA['Rajasthan'];

    // Map projects list dynamically to match PROJECTS_DATA
    const projects = stateData.locations.map((loc, idx) => ({
        id: loc.id,
        title: loc.name,
        location: loc.city,
        desc: loc.description,
        treesPlanted: `${loc.treesPlanted} Trees Planted`,
        image: loc.image,
        tag: idx === 0 ? 'BEST MATCH' : idx === 1 ? 'TRENDING' : 'POPULAR',
    }));

    // Quantities data based on mockup
    const quantities = [
        { id: '1', title: '1 Tree', price: 199, co2: 22, hasDiscount: false, discountText: '', image: Images.one_tree_plant },
        { id: '5', title: '5 Trees', price: 995, co2: 110, hasDiscount: true, discountText: '5% OFF', image: Images.five_trees_plant },
        { id: '10', title: '10 Trees', price: 1890, co2: 220, hasDiscount: true, discountText: '5% OFF', image: Images.ten_trees_plant },
        { id: '25', title: '25 Trees', price: 4500, co2: 550, hasDiscount: true, discountText: '10% OFF', image: Images.twenty_five_trees_plant },
    ];

    // Selection states
    const [selectedQtyId, setSelectedQtyId] = useState('10');
    const [selectedProjId, setSelectedProjId] = useState(route.params?.selectedProjId || (projects[0]?.id || 'rajasthan-1'));
    const [customQtyText, setCustomQtyText] = useState('');
    const [isCustomActive, setIsCustomActive] = useState(false);

    useEffect(() => {
        if (route.params?.selectedProjId) {
            setSelectedProjId(route.params.selectedProjId);
        } else if (projects.length > 0) {
            setSelectedProjId(projects[0].id);
        }
    }, [route.params?.selectedProjId, route.params?.stateName]);

    // Derive final values based on selections
    const getSelectedDetails = () => {
        if (isCustomActive) {
            const qtyNum = parseInt(customQtyText, 10) || 0;
            return {
                qty: qtyNum,
                price: qtyNum * 190, // bulk custom discount price
                co2: qtyNum * 22,
            };
        }
        const current = quantities.find(q => q.id === selectedQtyId) || quantities[2];
        return {
            qty: parseInt(current.id, 10),
            price: current.price,
            co2: current.co2,
        };
    };

    const { qty, price, co2 } = getSelectedDetails();

    const handleQtySelect = (id: string) => {
        setIsCustomActive(false);
        setSelectedQtyId(id);
    };

    const handleCustomActivate = () => {
        setIsCustomActive(true);
        setSelectedQtyId('');
    };

    const handleProceed = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Navigation Row & Stepper Indicator */}
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                </TouchableOpacity>

                {/* Stepper indicator */}
                <View style={styles.stepperContainer}>
                    <View style={styles.stepItem}>
                        <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                            <Image source={Images.geolocation} style={styles.stepIconCompleted} resizeMode="contain" />
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>State</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                            <Image source={Images.projectIcon} style={styles.stepIconCompleted} resizeMode="contain" />
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>Project</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View style={[styles.stepCircle, styles.stepCircleActive]}>
                            <Image source={Images.treeIcon} style={[styles.stepIcon, styles.stepIconActive]} resizeMode="contain" />
                        </View>
                        <Text style={[styles.stepLabel, styles.stepLabelActive]}>Tree</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View style={styles.stepCircle}>
                            <Image source={Images.profile} style={styles.stepIcon} resizeMode="contain" />
                        </View>
                        <Text style={styles.stepLabel}>Dedication</Text>
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
                {/* Hero Banner nature view with overlays */}
                <ImageBackground source={Images.detailbg} style={styles.heroSection} resizeMode="cover">
                    <View
                        style={styles.heroOverlay}
                    >
                        <View style={styles.heroTextContainer}>
                            <Text style={styles.heroTitle}>Great Choice! 🍃</Text>
                            <Text style={styles.heroName}>Neem Tree</Text>
                            <Text style={styles.heroSubtitle}>
                                You're about to plant a native tree that creates a real impact.
                            </Text>
                        </View>

                        {/* Badges pills inside hero banner */}
                        <View style={styles.heroPillsContainer}>
                            <View style={styles.attributesCard}>
                                <View style={styles.attributeItem}>
                                    <Image source={Images.location} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>Native to</Text>
                                        <Text style={styles.attributeValText}>{stateName}</Text>
                                    </View>
                                </View>
                                <View style={styles.verticalDivider} />
                                <View style={styles.attributeItem}>
                                    <Image source={Images.Emission} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>High CO₂</Text>
                                        <Text style={styles.attributeValText}>Absorption</Text>
                                    </View>
                                </View>
                                <View style={styles.verticalDivider} />
                                <View style={styles.attributeItem}>
                                    <Image source={Images.leaf} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>Drought</Text>
                                        <Text style={styles.attributeValText}>Resistant</Text>
                                    </View>
                                </View>
                                <View style={styles.verticalDivider} />
                                <View style={styles.attributeItem}>
                                    <Image source={Images.treeIcon} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>Long</Text>
                                        <Text style={styles.attributeValText}>Lifespan</Text>
                                    </View>
                                </View>
                            </View>

                            {/* GPS Verified shield pill */}
                            <View style={styles.gpsBadge}>
                                <Image source={Images.verified} style={styles.gpsIcon} resizeMode="contain" />
                                <View style={styles.gpsTextWrapper}>
                                    <Text style={styles.gpsText}>GPS</Text>
                                    <Text style={styles.gpsText}>VERIFIED</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Quantity Selection Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>How many trees would you like to plant? 🍃</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quantityList}>
                        {quantities.map(item => {
                            const isActive = selectedQtyId === item.id && !isCustomActive;
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[styles.quantityCard, isActive && styles.quantityCardActive]}
                                    onPress={() => handleQtySelect(item.id)}
                                    activeOpacity={0.8}
                                >
                                    {isActive && (
                                        <View style={styles.checkmarkBadge}>
                                            <Text style={styles.checkmarkText}>✓</Text>
                                        </View>
                                    )}
                                    <Image source={item.image} style={styles.quantityIcon} resizeMode="contain" />
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.quantityTitle, isActive && styles.quantityTitleActive]}>{item.title}</Text>
                                        <Text style={styles.priceText}>₹{item.price}</Text>
                                        {item.hasDiscount && (
                                            <View style={[styles.discountBadge, isActive && styles.discountBadgeActive]}>
                                                <Text style={[styles.discountText, isActive && styles.discountTextActive]}>{item.discountText}</Text>
                                            </View>
                                        )}
                                    </View>
                                    <Text style={[styles.co2Text, isActive && styles.co2TextActive]}>{item.co2} KG CO₂ / Year</Text>
                                </TouchableOpacity>
                            );
                        })}

                        {/* Custom Quantity Option */}
                        <TouchableOpacity
                            style={[styles.quantityCard, isCustomActive && styles.quantityCardActive]}
                            onPress={handleCustomActivate}
                            activeOpacity={0.8}
                        >
                            {isCustomActive && (
                                <View style={styles.checkmarkBadge}>
                                    <Text style={styles.checkmarkText}>✓</Text>
                                </View>
                            )}
                            <View style={styles.customIconContainer}>
                                <Image source={Images.edit} style={[styles.customEditIcon, { tintColor: isCustomActive ? Colors.legacyGreen : '#9CA3AF' }]} resizeMode="contain" />
                            </View>

                            {isCustomActive ? (
                                <View style={styles.customInputContainer}>
                                    <TextInput
                                        style={styles.customTextInput}
                                        placeholder="Enter Qty"
                                        placeholderTextColor="#9CA3AF"
                                        keyboardType="number-pad"
                                        value={customQtyText}
                                        onChangeText={setCustomQtyText}
                                        maxLength={4}
                                    />
                                </View>
                            ) : (
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.quantityTitle}>Custom</Text>
                                    <Text style={{ fontSize: 8, color: '#6B7280', marginTop: 2, textAlign: 'center' }}>Plant more trees</Text>
                                    <View style={styles.customChooseBtn}>
                                        <Text style={styles.customChooseBtnText}>Choose</Text>
                                    </View>
                                </View>
                            )}
                            <Text style={[styles.co2Text, isCustomActive && styles.co2TextActive]}>
                                {customQtyText ? `${parseInt(customQtyText, 10) * 22} KG` : '--'} CO₂ / Year
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

                    {/* More trees more impact alert banner */}
                    <View style={styles.infoStrip}>
                        <Image source={Images.leaf} style={[styles.infoStripIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                        <Text style={styles.infoStripText}>
                            More trees, bigger impact! Plant in bulk and contribute to a greener tomorrow.
                        </Text>
                    </View>
                </View>

                {/* Project Selection Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Where would you like to plant? 🍃</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.viewAllLink}>View All Projects →</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.projectsList}>
                        {projects.map(project => {
                            const isSelected = selectedProjId === project.id;
                            return (
                                <TouchableOpacity
                                    key={project.id}
                                    style={[styles.projectCard, isSelected && styles.projectCardActive]}
                                    onPress={() => setSelectedProjId(project.id)}
                                    activeOpacity={0.9}
                                >
                                    <View style={styles.projectImageContainer}>
                                        <Image source={project.image} style={styles.projectImage} resizeMode="cover" />
                                        <View style={styles.projectTag}>
                                            <Text style={project.tag === 'BEST MATCH' ? styles.projectTagText : [styles.projectTagText, { color: '#FFFFFF' }]}>
                                                {project.tag}
                                            </Text>
                                        </View>
                                        <View style={[styles.projectSelector, isSelected && styles.projectSelectorSelected]}>
                                            {isSelected && <Text style={{ color: '#FFFFFF', fontSize: 8, fontWeight: 'bold' }}>✓</Text>}
                                        </View>
                                    </View>

                                    <View style={project.id === 'aravalli' ? [styles.projectContent, { minHeight: 110 }] : styles.projectContent}>
                                        <View style={styles.projectTitleRow}>
                                            <Text style={styles.projectTitle}>{project.title}</Text>
                                        </View>
                                        <View style={styles.projectLocationRow}>
                                            <Image source={Images.location} style={styles.projectLocIcon} resizeMode="contain" />
                                            <Text style={styles.projectLocation}>{project.location}</Text>
                                        </View>
                                        <Text style={styles.projectDesc}>{project.desc}</Text>
                                        <View style={styles.projectFooter}>
                                            <View style={styles.plantedCountRow}>
                                                <Image source={Images.treeIcon} style={styles.plantedIcon} resizeMode="contain" />
                                                <Text style={styles.plantedText}>{project.treesPlanted}</Text>
                                            </View>
                                            {isSelected && (
                                                <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: Colors.legacyGreen, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: '#FFFFFF', fontSize: 8, fontWeight: 'bold' }}>✓</Text>
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* Impact summary grid details */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Your Impact for This Planting 🍃</Text>

                    <View style={styles.impactCardContainer}>
                        <View style={styles.impactCol}>
                            <Image source={Images.treeIcon} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>{qty} Trees</Text>
                            <Text style={styles.impactLabel}>You are planting</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.Emission} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>{co2} KG</Text>
                            <Text style={styles.impactLabel}>CO₂ offset / year</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.bubbletree} style={[styles.impactIcon, { tintColor: '#3B82F6' }]} resizeMode="contain" />
                            <Text style={styles.impactValue}>Water & Soil</Text>
                            <Text style={styles.impactLabel}>Conservation</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.group} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>Supports</Text>
                            <Text style={styles.impactLabel}>Biodiversity</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.shield} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>3 Years</Text>
                            <Text style={styles.impactLabel}>Monitoring</Text>
                        </View>
                    </View>
                </View>

                {/* Trust points banner details */}
                <View style={styles.sectionContainer}>
                    <View style={styles.trustBanner}>
                        <View style={styles.trustCol}>
                            <View style={styles.trustIconBg}>
                                <Image source={Images.verified} style={styles.trustIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.trustTextCol}>
                                <Text style={styles.trustTitle}>100% Verified & Transparent</Text>
                                <Text numberOfLines={2} style={styles.trustDesc}>Every tree is GPS tagged, monitored for 3 years and you get regular updates.</Text>
                            </View>
                        </View>
                        <View style={styles.trustDivider} />
                        <View style={styles.trustCol}>
                            <View style={styles.trustIconBg}>
                                <Image source={Images.lock} style={styles.trustIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.trustTextCol}>
                                <Text style={styles.trustTitle}>Secure Payment</Text>
                                <Text style={styles.trustDesc}>Your payment is safe & encrypted</Text>
                            </View>
                        </View>
                        <View style={styles.trustDivider} />
                        <View style={styles.trustCol}>
                            <View style={styles.trustIconBg}>
                                <Image source={Images.group} style={styles.trustIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.trustTextCol}>
                                <Text style={styles.trustTitle}>Trusted by 50K+</Text>
                                <Text style={styles.trustDesc}>Planters across India</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Proceeds buttons to the dedication screen */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.actionButton} onPress={handleProceed} activeOpacity={0.95}>
                        <LinearGradient
                            colors={['#1E6B46', '#2F9E67']}
                            style={styles.gradientBtn}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.actionBtnText}>Proceed to Dedication</Text>
                            <Text style={styles.actionBtnArrow}>→</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* Bottom lock indicator row */}
                    <View style={styles.secureTextRow}>
                        <Text style={styles.secureIcon}>🔒</Text>
                        <Text style={styles.secureText}>Secure • Transparent • Trusted by 50K+ Planters</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ChoicetreeplantationScreen;
