import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    StatusBar,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from '../../../../constants/images';
import fonts from '../../../../comman/fonts';
import { styles } from './Styles';

const ElectricityEmission = () => {
    const navigation = useNavigation();

    // Placeholder data (normally comes from route params or context)
    const annualTons = "1.24";
    const treesRequired = "57";
    const offsetCost = "1,425";

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                {/* Hero Banner Section */}
                <ImageBackground
                    source={Images.electricity_cat}
                    style={styles.heroImageBg}
                    resizeMode="cover"
                >
                    <View style={styles.headerRow}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.7}
                        >
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.heroTextContainer}>
                        <Text style={styles.heroTitle}>Electricity Emission Calculation ⚡</Text>
                        <Text style={styles.heroSubtitle}>
                            Here's how we calculated your electricity-related carbon emissions.
                        </Text>
                    </View>
                </ImageBackground>

                {/* Top Stats Strip */}
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsContainer}> */}
                <View style={styles.statsCard}>
                    {/* Emissions */}
                    <View style={styles.statBox}>
                        <View style={styles.statIconCircle}>
                            <Image source={Images.co2Cloud} style={[styles.statIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Annual Electricity</Text>
                            <Text style={styles.statValue}>{annualTons}</Text>
                            <Text style={styles.statDesc}>Tons CO₂ / Year</Text>
                        </View>
                    </View>


                    {/* Trees */}
                    <View style={styles.statBox}>
                        <View style={styles.statIconCircle}>
                            <Image source={Images.treeIcon} style={styles.statIcon} resizeMode="contain" />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Trees Offset </Text>
                            <Text style={styles.statValue}>{treesRequired}</Text>
                            <Text style={styles.statDesc}>Trees</Text>
                        </View>
                    </View>


                    {/* Cost */}
                    <View style={styles.statBox}>
                        <View style={styles.statIconCircle}>
                            <Image source={Images.leaf} style={[styles.statIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Offset Cost (Est.)</Text>
                            <Text style={styles.statValue}>₹{offsetCost}</Text>
                            <Text style={styles.statDesc}>For {treesRequired} Trees</Text>
                        </View>
                    </View>


                    {/* Impact */}
                    {/* <View style={styles.statBox}>
                        <View style={styles.statIconCircle}>
                            <Image source={Images.electricity_source_grid} style={[styles.statIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Your Impact</Text>
                            <View style={styles.impactTag}>
                                <Text style={styles.impactTagText}>Lower Than</Text>
                                <Text style={styles.impactTagText}>Average</Text>
                            </View>
                        </View>
                    </View> */}
                </View>
                {/* </ScrollView> */}

                {/* Main Content Body */}
                <View style={styles.contentContainer}>

                    {/* Calculation Breakdown */}
                    <Text style={styles.sectionTitle}>Calculation Breakdown</Text>

                    <View style={styles.tableContainer}>
                        {/* Header */}
                        <View style={styles.tableHeaderRow}>
                            <Text style={[styles.tableHeaderCell, styles.col1, { justifyContent: 'flex-start', alignItems: 'center' }]}>Parameter</Text>
                            <Text style={[styles.tableHeaderCell, styles.col2]}>Your Input</Text>
                            <Text style={[styles.tableHeaderCell, styles.col3]}>Emission Factor (kg CO₂/kWh)</Text>
                            <Text style={[styles.tableHeaderCell, styles.col4]}>Annual Consumption (kWh)</Text>
                            <Text style={[styles.tableHeaderCell, styles.col5]}>Annual Impact(kg CO₂)</Text>
                        </View>

                        {/* Rows */}
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellMain, styles.col1]}>
                                <Image source={Images.electricity_icon_bill_check} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text numberOfLines={1} style={styles.tableCellTextMain}>Monthly Electricity Bill</Text>
                            </View>
                            <Text style={[styles.tableCell, styles.col2, { color: '#111827', fontFamily: fonts.OpenSans_SemiBold }]}>₹2,500</Text>
                            <Text style={[styles.tableCell, styles.col3]}>-</Text>
                            <Text style={[styles.tableCell, styles.col4, { color: '#111827', fontFamily: fonts.OpenSans_SemiBold }]}>375 kWh</Text>
                            <Text style={[styles.tableCell, styles.col5, { color: '#111827', fontFamily: fonts.OpenSans_SemiBold }]}>612 kg</Text>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellMain, styles.col1]}>
                                <Image source={Images.electricity_source_grid} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text numberOfLines={1} style={styles.tableCellTextMain}>Electricity Source</Text>
                            </View>
                            <Text style={[styles.tableCell, styles.col2, { color: '#111827' }]}>Grid Electricity</Text>
                            <Text style={[styles.tableCell, styles.col3, { color: '#111827' }]}>0.82</Text>
                            <Text style={[styles.tableCell, styles.col4, { color: '#111827' }]}>375 kWh</Text>
                            <Text style={[styles.tableCell, styles.col5, { color: '#111827', fontFamily: fonts.OpenSans_SemiBold }]}>307.5 kg</Text>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellMain, styles.col1]}>
                                <Image source={Images.electricity_home_house} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text numberOfLines={1} style={styles.tableCellTextMain}>Home Type</Text>
                            </View>
                            <Text style={[styles.tableCell, styles.col2, { color: '#111827' }]}>Apartment</Text>
                            <Text style={[styles.tableCell, styles.col3]}>-</Text>
                            <Text style={[styles.tableCell, styles.col4]}>Adjustment</Text>
                            <Text style={[styles.tableCell, styles.col5, { color: '#0A5F35', fontFamily: fonts.OpenSans_Bold }]}>-76.5 kg</Text>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellMain, styles.col1]}>
                                <Image source={Images.electricity_icon_residents} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text numberOfLines={1} style={styles.tableCellTextMain}>Number of Residents</Text>
                            </View>
                            <Text style={[styles.tableCell, styles.col2, { color: '#111827' }]}>3</Text>
                            <Text style={[styles.tableCell, styles.col3]}>-</Text>
                            <Text style={[styles.tableCell, styles.col4]}>Adjustment</Text>
                            <Text style={[styles.tableCell, styles.col5, { color: '#0A5F35', fontFamily: fonts.OpenSans_Bold }]}>-45 kg</Text>
                        </View>

                        <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
                            <View style={[styles.tableCellMain, styles.col1]}>
                                <Image source={Images.leaf} style={styles.tableCellIcon} resizeMode="contain" />
                                <Text numberOfLines={1} style={styles.tableCellTextMain}>Energy Efficient</Text>
                            </View>
                            <Text style={[styles.tableCell, styles.col2, { color: '#111827' }]}>Yes (4 selected)</Text>
                            <Text style={[styles.tableCell, styles.col3]}>-</Text>
                            <Text style={[styles.tableCell, styles.col4]}>Adjustment</Text>
                            <Text style={[styles.tableCell, styles.col5, { color: '#0A5F35', fontFamily: fonts.OpenSans_Bold }]}>-84 kg</Text>
                        </View>

                        {/* Footer Total */}
                        <View style={styles.tableFooterRow}>
                            <View style={styles.tableFooterLeft}>
                                {/* <View style={styles.tableFooterIconCircle}>
                                    <Image source={Images.leaf} style={styles.tableFooterIcon} resizeMode="contain" />
                                </View> */}
                                <Text style={styles.tableFooterTitle}>Total Annual Electricity Emissions</Text>
                            </View>
                            <View style={styles.tableFooterValueContainer}>
                                <Text style={styles.tableFooterValue}>1,240 kg CO₂</Text>
                                <Text style={styles.tableFooterValueSub}>= 1.24 Tons CO₂</Text>
                            </View>
                        </View>
                    </View>

                    {/* Insights Section */}
                    <View style={styles.insightsRow}>
                        <View style={styles.insightCard}>
                            <Text style={styles.insightCardTitle}>Where does your electricity footprint come from?</Text>
                            <View style={styles.pieContentRow}>
                                <View style={styles.pieChartPlaceholder}>
                                    {/* Using a visual pseudo-pie chart layout since no SVG library */}
                                    <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#3B82F6', overflow: 'hidden' }}>
                                        <View style={{ position: 'absolute', width: 80, height: 80, backgroundColor: '#10B981', transform: [{ rotate: '45deg' }], left: -16, top: 16 }} />
                                        <View style={{ position: 'absolute', width: 80, height: 80, backgroundColor: '#F59E0B', transform: [{ rotate: '-60deg' }], left: -24, top: -16 }} />
                                        <View style={{ position: 'absolute', width: 40, height: 40, backgroundColor: '#FFFFFF', borderRadius: 20, left: 20, top: 20 }} />
                                    </View>
                                </View>

                                <View style={styles.pieLegendContainer}>
                                    <View style={styles.pieLegendItem}>
                                        <View style={styles.pieLegendLeft}>
                                            <View style={[styles.pieColorDot, { backgroundColor: '#3B82F6' }]} />
                                            <Text style={styles.pieLegendText}>Appliances & Devices</Text>
                                        </View>
                                        <Text style={styles.pieLegendValue}>40%</Text>
                                    </View>
                                    <View style={styles.pieLegendItem}>
                                        <View style={styles.pieLegendLeft}>
                                            <View style={[styles.pieColorDot, { backgroundColor: '#10B981' }]} />
                                            <Text style={styles.pieLegendText}>Cooling (AC/Fan)</Text>
                                        </View>
                                        <Text style={styles.pieLegendValue}>30%</Text>
                                    </View>
                                    <View style={styles.pieLegendItem}>
                                        <View style={styles.pieLegendLeft}>
                                            <View style={[styles.pieColorDot, { backgroundColor: '#F59E0B' }]} />
                                            <Text style={styles.pieLegendText}>Lighting</Text>
                                        </View>
                                        <Text style={styles.pieLegendValue}>15%</Text>
                                    </View>
                                    <View style={styles.pieLegendItem}>
                                        <View style={styles.pieLegendLeft}>
                                            <View style={[styles.pieColorDot, { backgroundColor: '#8B5CF6' }]} />
                                            <Text style={styles.pieLegendText}>Water Heating</Text>
                                        </View>
                                        <Text style={styles.pieLegendValue}>10%</Text>
                                    </View>
                                    <View style={styles.pieLegendItem}>
                                        <View style={styles.pieLegendLeft}>
                                            <View style={[styles.pieColorDot, { backgroundColor: '#14B8A6' }]} />
                                            <Text style={styles.pieLegendText}>Other Usage</Text>
                                        </View>
                                        <Text style={styles.pieLegendValue}>5%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.insightsRow}>
                        <View style={styles.insightCard}>
                            <Text style={styles.insightCardTitle}>Compared to average Indian household</Text>

                            <View style={styles.barCompareRow}>
                                <View style={styles.barIconCircle}>
                                    <Image source={Images.food_icon_bar_chart_circle} style={{ width: 20, height: 20, }} resizeMode='cover' />
                                </View>
                                <View style={styles.barCompareTextCol}>
                                    <Text style={styles.barCompareTextTop}>Your electricity footprint is</Text>
                                    <Text style={styles.barCompareValue}>18% Lower</Text>
                                    <Text style={styles.barCompareTextBottom}>than the average household.</Text>
                                </View>
                            </View>

                            <View style={styles.barChartPlaceholder}>
                                <View style={styles.progressTrack}>
                                    <View style={styles.progressLower} />
                                    <View style={styles.progressAverage} />
                                    <View style={styles.progressHigher} />

                                    {/* Average middle dashed line */}
                                    <View style={{ position: 'absolute', left: '50%', top: -2, bottom: -2, width: 1, backgroundColor: '#111827', opacity: 0.3 }} />
                                </View>
                                {/* Progress Marker positioned near "Lower" */}
                                <View style={[styles.progressMarkerContainer, { left: '15%' }]}>
                                    <View style={styles.progressMarker} />
                                    <View style={styles.progressMarkerLine} />
                                </View>
                                <View style={styles.progressLabelsRow}>
                                    <Text style={styles.progressLabel}>Lower</Text>
                                    <Text style={styles.progressLabel}>Average</Text>
                                    <Text style={styles.progressLabel}>Higher</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Action Cards */}
                    <View style={styles.actionCardsContainer}>
                        <View style={styles.actionCardSection}>
                            <View style={[styles.actionIconCircle, { backgroundColor: '#EAF6EC' }]}>
                                <Image source={Images.electricity_feature_led} style={styles.actionIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.actionTextCol}>
                                <Text style={styles.actionTitle}>Smart Tip</Text>
                                <Text style={styles.actionDesc}>Switching to solar can reduce your electricity emissions by up to <Text style={{ fontFamily: fonts.OpenSans_Bold }}>80%</Text>.</Text>
                            </View>
                        </View>

                        <View style={styles.actionDivider} />

                        <View style={styles.actionCardSection}>
                            <View style={[styles.actionIconCircle, { backgroundColor: '#EAF6EC' }]}>
                                <Image source={Images.treeIcon} style={[styles.actionIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                            </View>
                            <View style={styles.actionTextCol}>
                                <Text style={styles.actionTitle}>Offset Your Impact</Text>
                                <Text style={styles.actionDesc}>Plant <Text style={{ fontFamily: fonts.OpenSans_Bold, color: '#0A5F35' }}>57 Trees</Text> and offset 100% of your annual electricity emissions.</Text>
                            </View>

                            {/* The next arrow */}

                        </View>
                    </View>

                    {/* Footer Features */}
                    <View style={styles.footerInfoRow}>
                        <View style={styles.footerInfoItem}>
                            <View style={styles.footerIconWrapper}>
                                <Image source={Images.earth} style={[styles.footerInfoIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                            </View>
                            <View style={styles.footerInfoTextCol}>
                                <Text style={styles.footerInfoValue}>57 Trees</Text>
                                <Text style={styles.footerInfoLabel}>To be planted</Text>
                            </View>
                        </View>

                        <View style={styles.footerDivider} />

                        <View style={styles.footerInfoItem}>
                            <View style={styles.footerIconWrapper}>
                                <Image source={Images.co2Cloud} style={[styles.footerInfoIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                            </View>
                            <View style={styles.footerInfoTextCol}>
                                <Text style={styles.footerInfoValue}>1.24 Tons CO₂</Text>
                                <Text style={styles.footerInfoLabel}>To be offset</Text>
                            </View>
                        </View>

                        <View style={styles.footerDivider} />

                        <View style={styles.footerInfoItem}>
                            <View style={styles.footerIconWrapper}>
                                <Image source={Images.shield} style={[styles.footerInfoIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                            </View>
                            <View style={styles.footerInfoTextCol}>
                                <Text style={styles.footerInfoValue}>GPS Verified</Text>
                                <Text style={styles.footerInfoLabel}>Plantation</Text>
                            </View>
                        </View>

                        <View style={styles.footerDivider} />

                        <View style={styles.footerInfoItem}>
                            <View style={styles.footerIconWrapper}>
                                <Image source={Images.certificate} style={[styles.footerInfoIcon, { tintColor: '#0A5F35' }]} resizeMode="contain" />
                            </View>
                            <View style={styles.footerInfoTextCol}>
                                <Text style={styles.footerInfoValue}>Digital</Text>
                                <Text style={styles.footerInfoLabel}>Certificate</Text>
                            </View>
                        </View>
                    </View>

                    {/* CTA Button */}
                    <TouchableOpacity
                        style={styles.ctaButton}
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.ctaButtonText}>Back to Electricity Assessment</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ElectricityEmission;
