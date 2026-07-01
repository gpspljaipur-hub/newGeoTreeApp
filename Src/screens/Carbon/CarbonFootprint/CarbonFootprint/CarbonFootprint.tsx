import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, ImageBackground } from 'react-native';
import styles from './Styles';
import Images from '../../../../constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';


const CarbonFootprint = ({ navigation }: any) => {
    const [selectedPlan, setSelectedPlan] = useState<number>(50);

    const plans = [
        { percentage: 25, title: 'Starter Impact', trees: 73, offset: '1.61', price: '₹525' },
        { percentage: 50, title: 'Green Impact', trees: 146, offset: '3.21', price: '₹1,050', isPopular: true },
        { percentage: 100, title: 'Carbon Neutral', trees: 292, offset: '6.42', price: '₹2,100' },
    ];

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <ImageBackground source={Images.Footprintbg} style={styles.mainBgImage} resizeMode='cover'>
                    {/* Top Navigation */}
                    <View style={styles.topNavRow}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    {/* Hero Section */}
                    <View style={styles.heroSection}>
                        <Text style={styles.heroTitleTop}>Offset Your</Text>
                        <Text style={styles.heroTitleBottom}>Carbon Footprint</Text>
                        <Text style={styles.heroSubtitle}>Choose how much of your emissions you want to offset by planting trees.</Text>

                        <View style={styles.emissionCard}>
                            <View style={styles.emissionIconCircle}>
                                <Image source={Images.co2Cloud} style={styles.emissionIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.emissionTextCol}>
                                <View style={styles.emissionLabelRow}>
                                    <Text style={styles.emissionLabel}>Your Total Annual Emissions</Text>
                                    <Image source={Images.notification} style={styles.emissionInfoIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.emissionValue}>6.42 <Text style={styles.emissionUnit}>Tons CO₂ / Year</Text></Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Plans Section */}
                <View style={[styles.sectionContainer]}>
                    <Text style={styles.sectionTitle}>Choose Your Offset Plan</Text>
                    <Text style={styles.sectionSubtitle}>Select the percentage of your emissions you want to offset.</Text>

                    <View style={styles.plansRow}>
                        {plans.map((plan, index) => {
                            const isSelected = selectedPlan === plan.percentage;
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.planCard, isSelected && styles.planCardSelected]}
                                    activeOpacity={0.8}
                                    onPress={() => setSelectedPlan(plan.percentage)}
                                >
                                    {plan.isPopular && (
                                        <View style={styles.mostPopularBadge}>
                                            <Image source={Images.star} style={styles.mostPopularIcon} resizeMode="contain" />
                                            <Text style={styles.mostPopularText}>Most Popular</Text>
                                        </View>
                                    )}

                                    {isSelected ? (
                                        <View style={styles.planRadioSelected}>
                                            <View style={styles.planRadioInner} />
                                        </View>
                                    ) : (
                                        <View style={styles.planRadioEmpty} />
                                    )}

                                    <View style={[styles.planCircleOuter, isSelected && { borderColor: '#0A5F35' }]}>
                                        <Text style={styles.planCircleText}>{plan.percentage}%</Text>
                                        {/* Simplified progress representation */}
                                        <View style={[styles.planCircleProgress, { borderRightColor: plan.percentage >= 50 ? '#0A5F35' : 'transparent', borderBottomColor: plan.percentage === 100 ? '#0A5F35' : 'transparent' }]} />
                                    </View>

                                    <Image source={Images.treeIcon} style={styles.planTreeIcon} resizeMode="contain" />

                                    <Text style={styles.planImpactName}>{plan.title}</Text>
                                    <Text style={styles.planTreeCount}>{plan.trees} <Text style={styles.planTreeUnit}>Trees</Text></Text>
                                    <Text style={styles.planOffsetAmount}>{plan.offset} Tons CO₂ Offset</Text>

                                    <View style={styles.planPriceDivider} />
                                    <Text style={styles.planPrice}>{plan.price}</Text>

                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Features Includes */}
                <View style={styles.sectionContainer}>
                    <View style={styles.featuresCard}>
                        <Text style={styles.featuresTitle}>Every Plan Includes</Text>
                        <View style={styles.featuresRow}>
                            <View style={styles.featureItem}>
                                <View style={styles.featureIconCircle}>
                                    <Image source={Images.shield} style={styles.featureIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.featureText}>GPS Verified{'\n'}Plantation</Text>
                            </View>

                            <View style={styles.featureDivider} />

                            <View style={styles.featureItem}>
                                <View style={styles.featureIconCircle}>
                                    <Image source={Images.certificate} style={styles.featureIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.featureText}>Digital Certificate of Plantation</Text>
                            </View>

                            <View style={styles.featureDivider} />

                            <View style={styles.featureItem}>
                                <View style={styles.featureIconCircle}>
                                    <Image source={Images.treeIcon} style={styles.featureIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.featureText}>Real-time Impact Tracking</Text>
                            </View>

                            <View style={styles.featureDivider} />

                            <View style={styles.featureItem}>
                                <View style={styles.featureIconCircle}>
                                    <Image source={Images.camera} style={styles.featureIcon} resizeMode="contain" />
                                </View>
                                <Text style={styles.featureText}>Photos & Updates of Your Trees</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Good To Know */}
                <View style={styles.goodToKnowCard}>
                    <View style={styles.goodToKnowContent}>
                        <View style={styles.goodToKnowHeader}>
                            <Text style={styles.goodToKnowTitle}>Good to know!</Text>
                        </View>
                        <Text style={styles.goodToKnowText}>1 mature tree absorbs ~22 kg of CO₂ per year.</Text>
                        <Text style={styles.goodToKnowText}>Your trees will grow and create impact for decades!</Text>
                    </View>
                    <Image source={Images.Offeset} style={styles.goodToKnowImage} resizeMode="contain" />
                </View>

                {/* What's Next */}
                <View style={{ marginHorizontal: 20, }}>
                    <Text style={styles.whatsNextTitle}>What's Next?</Text>

                </View>

                <View style={styles.whatsNextCard}>
                    <View style={styles.stepsRow}>
                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.treeIcon} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text style={styles.stepTitle}>Select Trees</Text>
                                <Text style={styles.stepDesc}>Choose the type of trees you want to plant</Text>
                            </View>
                        </View>

                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.heart} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text style={styles.stepTitle}>Dedicate</Text>
                                <Text numberOfLines={2} style={styles.stepDesc}>Dedicate your plantation to yourself or others</Text>
                            </View>
                        </View>

                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.creditcard} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text style={styles.stepTitle}>Make Payment</Text>
                                <Text style={styles.stepDesc}>Secure payment with multiple options</Text>
                            </View>
                        </View>

                        <View style={styles.stepItem}>
                            <View style={styles.stepIconCircle}>
                                <Image source={Images.location} style={styles.stepIcon} resizeMode="contain" />
                            </View>
                            <View style={styles.stepTextContainer}>
                                <Text numberOfLines={1} style={styles.stepTitle}>Track & See Impact</Text>
                                <Text style={styles.stepDesc}>Track your trees and see your real impact grow</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Footer CTA */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                        <Text style={styles.ctaButtonText}>Continue to Tree Selection</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.securePaymentRow}>
                        <Image source={Images.lock} style={styles.secureLockIcon} resizeMode="contain" />
                        <Text style={styles.secureText}>Secure Payment • 100% Safe & Trusted</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

export default CarbonFootprint;
