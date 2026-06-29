import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import Images from '../../../constants/images';
import { styles } from './styles';
const PaymentSucessfulScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'PaymentSucessful'>>();
  const project = route.params?.project ?? {
    id: 'aravali',
    name: 'Aravalli Restoration Project',
    location: 'Rajasthan',
    badge: 'Restoration',
    desc: 'Restoring degraded forest land and reviving native biodiversity in Aravalli ranges.',
    planted: 18460,
    goal: 50000,
    daysLeft: 65,
    ngoPartner: 'Prakriti Foundation',
    image: Images.project_aravalli,
  };

  const selectedLevel = route.params?.selectedLevel ?? {
    id: 'green_supporter',
    name: 'Green Supporter',
    amount: 500,
    amountText: '₹500',
    desc: 'Helps plant approximately 10 Trees',
    badge: 'Good start!',
  };

  const transactionId = route.params?.transactionId ?? 'GTSP2405179842';
  const dateTime = route.params?.dateTime ?? '17 May 2024, 11:42 AM';

  // Compute metrics based on level/amount
  const treesCount = selectedLevel.amount === 2000 ? 50 : selectedLevel.amount === 5000 ? 125 : 10;
  const co2Offset = selectedLevel.amount === 2000 ? '1.25 Tons' : selectedLevel.amount === 5000 ? '3.12 Tons' : '0.25 Tons';
  const progressPercent = Math.round((project.planted / project.goal) * 100);
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Top Success Banner with Image Background */}
        <ImageBackground
          source={Images.Sponser1bg}
          style={styles.heroContainer}
          imageStyle={styles.heroBgImg}
          resizeMode="stretch"
        >
          <View style={styles.headerContent}>
            <View style={styles.checkCircle}>
              <Image source={Images.check} style={styles.checkIcon} resizeMode="contain" />
            </View>
            <Text style={styles.successTitle}>Payment Successful!</Text>
            <Text style={styles.successSubtitle}>Thank you for supporting {'\n'}a greener tomorrow.</Text>
            {/* Impact Shield Banner */}
            <View style={styles.impactCard}>
              <Image source={Images.shield} style={styles.impactShieldIcon} resizeMode="contain" />
              <Text style={styles.impactText}>
                Your contribution has been received and your impact journey has begun.
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* Transaction Details & Security Info Card */}
        <View style={styles.card}>
          <View style={styles.transactionRow}>
            <Text style={styles.transactionLabel}>Transaction ID</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.transactionValue}>{transactionId}</Text>
              <TouchableOpacity style={styles.copyButton} activeOpacity={0.7}>
                <Image source={Images.copy} style={styles.copyIcon} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.transactionRow}>
            <Text style={styles.transactionLabel}>Date & Time</Text>
            <Text style={styles.transactionValue}>{dateTime}</Text>
          </View>

          <View style={styles.transactionRow}>
            <Text style={styles.transactionLabel}>Amount Paid</Text>
            <Text style={styles.amountValue}>{selectedLevel.amountText}</Text>
          </View>

          <View style={styles.divider} />

          {/* Secure Badge & Receipt Download */}
          <View style={styles.secureBannerRow}>
            <View style={styles.secureTextContainer}>
              <Image source={Images.shield} style={styles.secureShieldIcon} resizeMode="contain" />
              <View style={styles.secureTextCol}>
                <Text style={styles.secureBoldText}>This payment is secure and encrypted.</Text>
                <Text style={styles.secureDescText}>You will receive an email confirmation and receipt shortly.</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.downloadButton} activeOpacity={0.8}>
              <Image source={Images.download} style={{ width: 14, height: 14, tintColor: '#1A6836', marginRight: 6 }} resizeMode="contain" />
              <Text style={styles.downloadText}>Download Receipt</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contribution Summary Section */}
        <Text style={styles.sectionTitle}>Your Contribution Summary</Text>
        <View style={styles.card}>
          <View style={styles.projectCard}>
            <Image source={project.image || Images.project_aravalli} style={styles.projectImg} resizeMode="cover" />
            <View style={styles.projectInfo}>
              <View style={styles.projectTitleRow}>
                <Text style={styles.projectTitle}>{project.name}</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{project.badge}</Text>
                </View>
              </View>
              <View style={styles.locationRow}>
                <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" />
                <Text style={styles.locationText}>{project.location}</Text>
              </View>
              <Text style={styles.projectDesc} numberOfLines={2}>{project.desc}</Text>
            </View>
          </View>

          {/* Project Plant Progress */}
          <View style={styles.progressWrapper}>
            <View style={styles.progressLabelRow}>
              <Text style={styles.progressLabel}>
                {project.planted.toLocaleString()} <Text style={styles.progressLabelNormal}>/ {project.goal.toLocaleString()} Trees Planted</Text>
              </Text>
              <Text style={styles.progressPercent}>{progressPercent}%</Text>
            </View>
            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
            </View>
          </View>

          {/* Supported Features Grid */}
          <View style={styles.featuresRow}>
            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Image source={Images.plant || Images.treeIcon} style={styles.featureIcon} resizeMode="contain" />
              </View>
              <Text style={styles.featureValue}>{treesCount}</Text>
              <Text style={styles.featureLabel}>Approx. Trees Supported</Text>
            </View>
            <View style={styles.featureDivider} />

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Image source={Images.co2Cloud} style={styles.featureIcon} resizeMode="contain" />
              </View>
              <Text style={styles.featureValue}>{co2Offset}</Text>
              <Text style={styles.featureLabel}>CO₂ Offset (Approx.)</Text>
            </View>
            <View style={styles.featureDivider} />

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Image source={Images.camera} style={styles.featureIcon} resizeMode="contain" />
              </View>
              <Text style={styles.featureValue}>Monthly</Text>
              <Text style={styles.featureLabel}>Progress Updates</Text>
            </View>
            <View style={styles.featureDivider} />

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Image source={Images.certificate} style={styles.featureIcon} resizeMode="contain" />
              </View>
              <Text style={styles.featureLabel}>Digital Certificate of Sponsorship</Text>
            </View>
            <View style={styles.featureDivider} />

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Image source={Images.location} style={styles.featureIcon} resizeMode="contain" />
              </View>
              <Text style={styles.featureLabel}>GPS Verified Project Location</Text>
            </View>
          </View>
        </View>

        {/* What Happens Next Section */}
        <Text style={styles.sectionTitle}>What Happens Next?</Text>
        <View style={styles.card}>
          <View style={styles.timelineContainer}>
            {/* Dashed connector line */}
            <View style={styles.timelineLine} />

            <View style={styles.timelineStep}>
              <View style={[styles.timelineBadge, styles.timelineBadgeActive]}>
                <Image source={Images.plant || Images.treeIcon} style={[styles.timelineBadgeIcon, styles.timelineBadgeIconActive]} resizeMode="contain" />
              </View>
              <Text style={[styles.timelineStepTitle, styles.timelineStepTitleActive]}>Contribution Received</Text>
              <Text style={styles.timelineStepDesc}>Thank you! Your support has been recorded.</Text>
            </View>

            <View style={styles.timelineStep}>
              <View style={styles.timelineBadge}>
                <Image source={Images.camera} style={styles.timelineBadgeIcon} resizeMode="contain" />
              </View>
              <Text style={styles.timelineStepTitle}>Project Updates</Text>
              <Text style={styles.timelineStepDesc}>You will receive regular photos and updates.</Text>
            </View>

            <View style={styles.timelineStep}>
              <View style={styles.timelineBadge}>
                <Image source={Images.impact || Images.chooseTree} style={styles.timelineBadgeIcon} resizeMode="contain" />
              </View>
              <Text style={styles.timelineStepTitle}>Track Impact</Text>
              <Text style={styles.timelineStepDesc}>Monitor the progress and impact of your support.</Text>
            </View>

            <View style={styles.timelineStep}>
              <View style={styles.timelineBadge}>
                <Image source={Images.certificate} style={styles.timelineBadgeIcon} resizeMode="contain" />
              </View>
              <Text style={styles.timelineStepTitle}>Certificate</Text>
              <Text style={styles.timelineStepDesc}>You will receive a digital certificate of sponsorship.</Text>
            </View>
          </View>
        </View>

        {/* Changemaker banner */}
        <View style={styles.changemakerBanner}>
          <Image source={Images.leaf} style={styles.changemakerIcon} resizeMode="contain" />
          <View style={styles.changemakerTextCol}>
            <Text style={styles.changemakerBold}>You are now a changemaker!</Text>
            <Text style={styles.changemakerDesc}>Together, we are restoring nature and building a better planet for future generations.</Text>
          </View>
        </View>

        {/* Track impact & share banner (Dark) */}
        <View style={styles.darkBanner}>
          <View style={styles.darkBannerRow}>
            <View style={styles.darkBannerLeft}>
              <Text style={styles.darkBannerTitle}>Track your impact anytime</Text>
              <Text style={styles.darkBannerText}>
                Visit your dashboard to see real-time updates and the difference you are making.
              </Text>
              <TouchableOpacity style={styles.dashboardButton} activeOpacity={0.8}>
                <Text style={styles.dashboardButtonText}>Go to My Dashboard</Text>
                <Text style={styles.dashboardButtonArrow}>→</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.darkBannerDivider} />

            <View style={styles.darkBannerRight}>
              <Text style={styles.darkBannerTitle}>Share your impact</Text>
              <Text style={styles.darkBannerText}>
                Inspire your friends and family to join the green movement.
              </Text>

              <View style={styles.socialIconsRow}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image source={Images.whatsapp} style={{ width: 30, height: 30 }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image source={Images.facebook} style={{ width: 30, height: 30 }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image source={Images.twitter} style={{ width: 30, height: 30 }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image source={Images.linkedin} style={{ width: 30, height: 30 }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image source={Images.link} style={{ width: 30, height: 30 }} resizeMode="contain" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentSucessfulScreen;
