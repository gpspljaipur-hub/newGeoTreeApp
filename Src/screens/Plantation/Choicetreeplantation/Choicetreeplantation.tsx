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
import { RootStackParamList } from '../../../navigation/RootNavigator';
import Images from '../../../constants/images';
import String from '../../../comman/String';
import { Colors } from '../../../comman/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { PROJECTS_DATA } from '../../State/Statewise/StatewiseScreen';

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
        { id: '1', title: String.DedicateTree_TreeVal.replace('{{count}}', '1'), price: 199, co2: 22, hasDiscount: false, discountText: '', image: Images.one_tree_plant },
        { id: '5', title: String.DedicateTree_TreesVal.replace('{{count}}', '5'), price: 995, co2: 110, hasDiscount: true, discountText: String.ChooseTree_CategoryNative === 'स्वदेशी' ? '5% छूट' : '5% OFF', image: Images.five_trees_plant },
        { id: '10', title: String.DedicateTree_TreesVal.replace('{{count}}', '10'), price: 1890, co2: 220, hasDiscount: true, discountText: String.ChooseTree_CategoryNative === 'स्वदेशी' ? '5% छूट' : '5% OFF', image: Images.ten_trees_plant },
        { id: '25', title: String.DedicateTree_TreesVal.replace('{{count}}', '25'), price: 4500, co2: 550, hasDiscount: true, discountText: String.ChooseTree_CategoryNative === 'स्वदेशी' ? '10% छूट' : '10% OFF', image: Images.twenty_five_trees_plant },
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
        navigation.navigate('DedicatePlantation', {
            qty,
            co2,
            projectName: projects.find(p => p.id === selectedProjId)?.title || 'Aravalli Restoration Project',
            stateName,
            treeName: 'Neem Tree',
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Navigation Row & Stepper Indicator */}

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Hero Banner nature view with overlays */}
                <ImageBackground source={Images.detailbg} style={styles.heroSection} resizeMode="cover">
                    <View style={styles.headerRow}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>

                        {/* Stepper indicator */}
                        <View style={styles.stepperContainer}>
                            <View style={styles.stepperLine} />
                            <View style={styles.stepperLineActive} />
                            <View style={styles.stepItem}>
                                <View style={[styles.stepCircle, styles.stepCircleActive]}>
                                    <Image source={Images.geolocation} style={[styles.stepIcon, styles.stepIconActive]} resizeMode="contain" />
                                </View>
                                <Text style={[styles.stepLabel, styles.stepLabelActive]}>{String.ChoiceTree_StepState}</Text>
                            </View>
                            <View style={styles.stepItem}>
                                <View style={[styles.stepCircle, styles.stepCircleActive]}>
                                    <Image source={Images.projectIcon} style={[styles.stepIcon, styles.stepIconActive]} resizeMode="contain" />
                                </View>
                                <Text style={[styles.stepLabel, styles.stepLabelActive]}>{String.ChoiceTree_StepProject}</Text>
                            </View>
                            <View style={styles.stepItem}>
                                <View style={[styles.stepCircle, styles.stepCircleActive]}>
                                    <Image source={Images.treeIcon} style={[styles.stepIcon, styles.stepIconActive]} resizeMode="contain" />
                                </View>
                                <Text style={[styles.stepLabel, styles.stepLabelActive]}>{String.ChoiceTree_StepTree}</Text>
                            </View>
                            <View style={styles.stepItem}>
                                <View style={styles.stepCircle}>
                                    <Image source={Images.profile} style={styles.stepIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.stepLabel}>{String.ChoiceTree_StepDedication}</Text>
                            </View>
                            <View style={styles.stepItem}>
                                <View style={styles.stepCircle}>
                                    <Image source={Images.lock} style={styles.stepIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.stepLabel}>{String.ChoiceTree_StepPayment}</Text>
                            </View>
                        </View>
                    </View>


                    <View
                        style={styles.heroOverlay}
                    >
                        <View style={styles.heroTextContainer}>
                            <Text style={styles.heroTitle}>{String.ChoiceTree_HeroTitle}</Text>
                            <Text style={styles.heroName}>{String.ChooseTree_TreeNeemName} {String.Dashboard_TreeLabel}</Text>
                            <Text style={styles.heroSubtitle}>
                                {String.ChoiceTree_HeroSubtitle}
                            </Text>
                        </View>

                        {/* Badges pills inside hero banner */}
                        <View style={styles.heroPillsContainer}>
                            <View style={styles.attributesCard}>
                                <View style={styles.attributeItem}>
                                    <Image source={Images.location} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>{String.ChoiceTree_NativeTo}</Text>
                                        <Text style={styles.attributeValText}>{stateName}</Text>
                                    </View>
                                </View>
                                <View style={styles.verticalDivider} />
                                <View style={styles.attributeItem}>
                                    <Image source={Images.Emission} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>{String.ChoiceTree_HighCO2}</Text>
                                        <Text style={styles.attributeValText}>{String.ChoiceTree_Absorption}</Text>
                                    </View>
                                </View>
                                <View style={styles.verticalDivider} />
                                <View style={styles.attributeItem}>
                                    <Image source={Images.leaf} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>{String.ChoiceTree_Drought}</Text>
                                        <Text style={styles.attributeValText}>{String.ChoiceTree_Resistant}</Text>
                                    </View>
                                </View>
                                <View style={styles.verticalDivider} />
                                <View style={styles.attributeItem}>
                                    <Image source={Images.treeIcon} style={styles.pillIcon} resizeMode="contain" />
                                    <View style={styles.attributeTextWrapper}>
                                        <Text style={styles.attributeLabelText}>{String.ChoiceTree_Long}</Text>
                                        <Text style={styles.attributeValText}>{String.ChoiceTree_Lifespan}</Text>
                                    </View>
                                </View>
                            </View>

                            {/* GPS Verified shield pill */}
                            <View style={styles.gpsBadge}>
                                <Image source={Images.verified} style={styles.gpsIcon} resizeMode="contain" />
                                <View style={styles.gpsTextWrapper}>
                                    <Text style={styles.gpsText}>{String.AppOpening_GPSTracked.split('\n')[0]}</Text>
                                    <Text style={styles.gpsText}>{String.AppOpening_GPSTracked.split('\n')[1]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                {/* Quantity Selection Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>{String.ChoiceTree_QtyTitle}</Text>
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
                                    <Text style={[styles.co2Text, isActive && styles.co2TextActive]}>
                                        {String.ChoiceTree_Co2Year.replace('{{count}}', item.co2.toString())}
                                    </Text>
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
                                        placeholder={String.ChoiceTree_EnterQty}
                                        placeholderTextColor="#9CA3AF"
                                        keyboardType="number-pad"
                                        value={customQtyText}
                                        onChangeText={setCustomQtyText}
                                        maxLength={4}
                                    />
                                </View>
                            ) : (
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.quantityTitle}>{String.ChoiceTree_Custom}</Text>
                                    <Text style={{ fontSize: 8, color: '#6B7280', marginTop: 2, textAlign: 'center' }}>{String.ChoiceTree_PlantMore}</Text>
                                    <View style={styles.customChooseBtn}>
                                        <Text style={styles.customChooseBtnText}>{String.ChoiceTree_Choose}</Text>
                                    </View>
                                </View>
                            )}
                            <Text style={[styles.co2Text, isCustomActive && styles.co2TextActive]}>
                                {customQtyText ? String.ChoiceTree_Co2Year.replace('{{count}}', (parseInt(customQtyText, 10) * 22).toString()) : '--'} / Year
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

                    {/* More trees more impact alert banner */}
                    <View style={styles.infoStrip}>
                        <Image source={Images.leaf} style={[styles.infoStripIcon, { tintColor: '#1E6B46' }]} resizeMode="contain" />
                        <Text style={styles.infoStripText}>
                            {String.ChoiceTree_MoreImpact}
                        </Text>
                    </View>
                </View>

                {/* Project Selection Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>{String.ChoiceTree_WherePlant}</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.viewAllLink}>{String.ChoiceTree_ViewAllProjects}</Text>
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
                                                {project.tag === 'BEST MATCH' ? String.WhichTree_BestMatch : project.tag === 'TRENDING' ? String.PlantationJourney_BadgeTrending : String.State_Popular}
                                            </Text>
                                        </View>
                                        <View style={[styles.projectSelector, isSelected && styles.projectSelectorSelected]}>
                                            {isSelected && <Text style={{ color: '#FFFFFF', fontSize: 8, fontWeight: 'bold' }}>✓</Text>}
                                        </View>
                                    </View>

                                    <View style={styles.projectContent}>
                                        <View style={styles.projectTitleRow}>
                                            <Text style={styles.projectTitle}>{project.title}</Text>
                                        </View>
                                        <View style={styles.projectLocationRow}>
                                            <Image source={Images.geolocation} style={styles.projectLocIcon} resizeMode="contain" />
                                            <Text style={styles.projectLocation}>{project.location}</Text>
                                        </View>
                                        <Text style={styles.projectDesc}>{project.desc}</Text>
                                        <View style={styles.projectFooter}>
                                            <View style={styles.plantedCountRow}>
                                                <Image source={Images.treeIcon} style={styles.plantedIcon} resizeMode="contain" />
                                                <Text style={styles.plantedText}>{String.ChoiceTree_Planted.replace('{{count}}', project.treesPlanted.split(' ')[0])}</Text>
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
                    <Text style={styles.sectionTitle}>{String.ChoiceTree_YourImpact}</Text>

                    <View style={styles.impactCardContainer}>
                        <View style={styles.impactCol}>
                            <Image source={Images.treeIcon} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>{qty === 1 ? String.DedicateTree_TreeVal.replace('{{count}}', qty.toString()) : String.DedicateTree_TreesVal.replace('{{count}}', qty.toString())}</Text>
                            <Text style={styles.impactLabel}>{String.ChoiceTree_YouArePlanting}</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.Emission} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>{co2} KG</Text>
                            <Text style={styles.impactLabel}>{String.ChoiceTree_Co2OffsetYear}</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.bubbletree} style={[styles.impactIcon, { tintColor: '#3B82F6' }]} resizeMode="contain" />
                            <Text style={styles.impactValue}>{String.ChoiceTree_WaterSoil}</Text>
                            <Text style={styles.impactLabel}>{String.ChoiceTree_Conservation}</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.group} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>{String.ChoiceTree_Supports}</Text>
                            <Text style={styles.impactLabel}>{String.ChoiceTree_Biodiversity}</Text>
                        </View>
                        <View style={styles.impactDivider} />
                        <View style={styles.impactCol}>
                            <Image source={Images.shield} style={styles.impactIcon} resizeMode="contain" />
                            <Text style={styles.impactValue}>{String.ChoiceTree_MonitoringVal}</Text>
                            <Text style={styles.impactLabel}>{String.ChoiceTree_Monitoring}</Text>
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
                                <Text style={styles.trustTitle}>{String.ChoiceTree_VerifiedTransparent}</Text>
                                <Text numberOfLines={2} style={styles.trustDesc}>{String.ChoiceTree_VerifiedDesc}</Text>
                            </View>
                        </View>
                        <View style={styles.trustDivider} />
                        <View style={styles.trustCol}>
                            <View style={styles.trustIconBg}>
                                <Image source={Images.lock} style={styles.trustIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.trustTextCol}>
                                <Text style={styles.trustTitle}>{String.ChoiceTree_SecurePayment}</Text>
                                <Text style={styles.trustDesc}>{String.ChoiceTree_SecureDesc}</Text>
                            </View>
                        </View>
                        <View style={styles.trustDivider} />
                        <View style={styles.trustCol}>
                            <View style={styles.trustIconBg}>
                                <Image source={Images.group} style={styles.trustIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.trustTextCol}>
                                <Text style={styles.trustTitle}>{String.ChoiceTree_TrustedBy}</Text>
                                <Text style={styles.trustDesc}>{String.ChoiceTree_PlantersAcross}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Proceeds buttons to the dedication screen */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.actionButton} onPress={handleProceed} activeOpacity={0.95}>
                        <LinearGradient
                            colors={['#024e18', '#024e18']}
                            style={styles.gradientBtn}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.actionBtnText}>{String.ChoiceTree_ProceedBtn}</Text>
                            <Text style={styles.actionBtnArrow}>→</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* Bottom lock indicator row */}
                    <View style={styles.secureTextRow}>
                        <Text style={styles.secureIcon}>🔒</Text>
                        <Text style={styles.secureText}>{String.ChoiceTree_SecureNote}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChoicetreeplantationScreen;
