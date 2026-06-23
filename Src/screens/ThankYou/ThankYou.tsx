import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { handleNavigation, RootStackParamList } from '../../navigation/RootNavigator';
import { styles } from './styles';
import Images from '../../constants/images';
import PlantHeader from '../../comman/PlantHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store/Store';

const ThankYouScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);


  const handleTrackTree = () => {
    navigation.navigate("MyTreeJourneyScreen")
  }
  const handlePlantAnother = () => {
    if (isAuthenticated) {
      handleNavigation({ type: 'setRoot', navigation, page: 'UserDashboard' })
    }
    else {
      handleNavigation({ type: 'setRoot', navigation, page: 'Home' })
    }
  }


  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

        {/* Header */}

        {/* Hero Section Container */}
        <ImageBackground
          source={Images.BgChoose}
          style={styles.heroImageBackground}
          resizeMode='cover'
        >
          <PlantHeader
            title=""
            backgroundColor='transparent'
          />
          {/* Hero Content */}
          <View style={styles.heroContent}>
            <View style={styles.heroLeft}>
              <Text style={styles.heroTitle}>
                Tree Successfully{'\n'}
                <Text style={styles.highlightGreen}>Reserved!</Text>
              </Text>
              <Text numberOfLines={2} style={styles.heroSubtitle}>
                Thank you for taking a step towards a greener tomorrow. Your tree plantation request has been confirmed.
              </Text>

              <View style={styles.heroLocationContainer}>
                <Image source={Images.location} style={styles.heroLocationIcon} resizeMode="contain" />
                <Text style={styles.heroLocationText}>
                  Your tree will be planted at{'\n'}
                  <Text style={{ color: '#0A1C14' }}>Aravali Green Belt, Jaipur</Text>
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={{ marginTop: -20, }}>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={Images.treeIcon} style={styles.cardHeaderIcon} resizeMode="contain" />
              <Text style={styles.cardHeaderTitle}>Your Tree Details</Text>
            </View>

            <View style={styles.gridRow}>
              {/* Tree ID */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.hastag} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel}>Tree ID</Text>
                <Text style={styles.gridValue} numberOfLines={1}>GT-2025-000145</Text>
              </View>

              <View style={styles.gridDivider} />

              {/* Species */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.leaf} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel}>Species</Text>
                <Text style={styles.gridValue} numberOfLines={1}>Neem Tree</Text>
              </View>

              <View style={styles.gridDivider} />

              {/* Location */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.geolocation} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel}>Location</Text>
                <Text style={styles.gridValue} numberOfLines={2}>Aravalli Green Belt, Jaipur, Rajasthan</Text>
              </View>

              <View style={styles.gridDivider} />

              {/* Planted By */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.profile} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel}>Planted By</Text>
                <Text style={styles.gridValue} numberOfLines={1}>You</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={Images.leaf1} style={styles.cardHeaderIcon} resizeMode="contain" />
              <Text style={styles.cardHeaderTitle}>Your Impact at a Glance</Text>
            </View>

            <View style={styles.gridRow}>
              {/* CO2 Absorption */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.Emission} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel} numberOfLines={2}>Expected Annual{"\n"}CO₂ Absorption</Text>
                <Text style={styles.gridValue}>22 KG / Year</Text>
              </View>

              <View style={styles.gridDivider} />

              {/* Lifetime Impact */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.globe} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel} numberOfLines={2}>Expected Lifetime{"\n"}Impact</Text>
                <Text style={styles.gridValue}>500+ KG CO₂</Text>
              </View>

              <View style={styles.gridDivider} />

              {/* Supports Biodiversity */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.group} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel} numberOfLines={2}>Supports{"\n"}Biodiversity</Text>
                <Image source={Images.check} style={styles.checkIconValue} resizeMode="contain" />
              </View>

              <View style={styles.gridDivider} />

              {/* GPS Tracking Enabled */}
              <View style={styles.gridCol}>
                <View style={styles.gridIconContainer}>
                  <Image source={Images.geolocation} style={styles.gridIcon} resizeMode="contain" />
                </View>
                <Text style={styles.gridLabel} numberOfLines={2}>GPS Tracking{"\n"}Enabled</Text>
                <Image source={Images.check} style={styles.checkIconValue} resizeMode="contain" />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.certificateSplit}>
              <View style={styles.certificateLeft}>
                {/* <View style={styles.certificateIconContainer}>
                  <Image source={Images.tree} style={styles.certificateIcon} resizeMode="contain" />
                </View> */}
                <Text style={styles.certificateTitle}>Digital Tree Certificate</Text>
                <Text style={styles.certificateSubtext}>
                  Available after plantation verification.
                </Text>
                <TouchableOpacity style={styles.certificateBtn} activeOpacity={0.7}>
                  <Text style={styles.certificateBtnText}>View Certificate Preview</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.certificateRight}>
                <Image
                  source={Images.SinginGeotree}
                  style={styles.certificateImage}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderTitle}>What Happens Next?</Text>
            </View>

            <View style={styles.timelineSplit}>
              <View style={styles.timelineContainer}>
                {/* Step 1: Payment Completed */}
                <View style={styles.timelineStep}>
                  <View style={styles.timelineIndicatorContainer}>
                    <View style={styles.timelineNodeCompleted}>
                      <View style={{ width: 6, height: 4, borderLeftWidth: 1.2, borderBottomWidth: 1.2, borderColor: '#FFFFFF', transform: [{ rotate: '-45deg' }], marginTop: -1 }} />
                    </View>
                    <View style={styles.timelineLine} />
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitleCompleted}>Payment Completed</Text>
                    <Text style={styles.timelineDesc}>12 May 2025, 10:30 AM</Text>
                  </View>
                </View>

                {/* Step 2: Plantation Scheduled */}
                <View style={styles.timelineStep}>
                  <View style={styles.timelineIndicatorContainer}>
                    <View style={styles.timelineNodeCompleted}>
                      <View style={{ width: 6, height: 4, borderLeftWidth: 1.2, borderBottomWidth: 1.2, borderColor: '#FFFFFF', transform: [{ rotate: '-45deg' }], marginTop: -1 }} />
                    </View>
                    <View style={styles.timelineLine} />
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitleCompleted}>Plantation Scheduled</Text>
                    <Text style={styles.timelineDesc} numberOfLines={1}>Your tree plantation is scheduled soon.</Text>
                  </View>
                </View>

                {/* Step 3: Tree Plantation */}
                <View style={styles.timelineStep}>
                  <View style={styles.timelineIndicatorContainer}>
                    <View style={styles.timelineNodeActiveBorder} />
                    <View style={styles.timelineLine} />
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>Tree Plantation</Text>
                    <Text style={styles.timelineDesc} numberOfLines={1}>Expected by 15 June 2026</Text>
                  </View>
                </View>

                {/* Step 4: GPS Verification */}
                <View style={styles.timelineStep}>
                  <View style={styles.timelineIndicatorContainer}>
                    <View style={styles.timelineNodeInactive} />
                    <View style={styles.timelineLine} />
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>GPS Verification</Text>
                    <Text style={styles.timelineDesc} numberOfLines={1}>We will verify the plantation location.</Text>
                  </View>
                </View>

                {/* Step 5: Growth Updates */}
                <View style={styles.timelineStep}>
                  <View style={styles.timelineIndicatorContainer}>
                    <View style={styles.timelineNodeInactive} />
                  </View>
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>Growth Updates</Text>
                    <Text style={styles.timelineDesc} numberOfLines={1}>You will receive regular updates on your tree.</Text>
                  </View>
                </View>
              </View>

              <View style={styles.timelineRight}>
                <Image source={Images.aravali_belt} style={styles.timelineRightImage} resizeMode="cover" />
                <Text style={styles.timelineRightText}>
                  You'll be able to track your tree's growth and impact in real-time.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bannerCard}>
          <View style={styles.bannerLeft}>
            <View style={styles.bannerShieldContainer}>
              <Image source={Images.shield} style={styles.bannerShieldIcon} resizeMode="contain" />
            </View>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerText}>Thank you for making an impact!</Text>
              <Text style={styles.bannerTextSecondary}>You are now a part of the movement towards a cleaner, greener planet.</Text>
            </View>
          </View>
          <Image source={Images.handtree} style={styles.bannerHandImage} resizeMode="cover" />
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.trackButton}
          onPress={handleTrackTree}
          activeOpacity={0.85}
        >
          <Text style={styles.trackButtonText}>Track My Tree</Text>
          {/* <Image
            source={Images.back}
            style={[styles.trackArrow, { transform: [{ rotate: '180deg' }] }]}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.plantAnotherButton}
          onPress={handlePlantAnother}
          activeOpacity={0.85}
        >
          <Image source={Images.notification} style={styles.plantAnotherIcon} resizeMode="contain" />
          <Text style={styles.plantAnotherText}>Plant Another Tree</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ThankYouScreen;
