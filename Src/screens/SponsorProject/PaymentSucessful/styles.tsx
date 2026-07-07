import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '../../../comman/Colors';
import FontsSize from '../../../comman/FontsSize';
import fonts from '../../../comman/fonts';
import MarginHW from '../../../comman/MarginHW';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFB',
  },
  scrollContent: {
    paddingBottom: MarginHW.PaddingH24,
  },

  // Hero / Success Banner
  heroContainer: {
    width: '100%',
    paddingBottom: MarginHW.PaddingH16,
    position: 'relative',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  heroBgImg: {
    opacity: 0.95,
  },
  headerContent: {
    alignItems: 'flex-start',
    paddingHorizontal: MarginHW.PaddingW10,
    paddingTop: Platform.OS === 'ios' ? 35 : 15,
  },
  checkCircle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E2EFE5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.08,
    // shadowRadius: 6,
    // elevation: 3,
    marginTop: MarginHW.MarginH16,
    marginBottom: MarginHW.MarginH6,
  },
  checkIcon: {
    width: 15,
    height: 15,
    tintColor: '#1A6836',
  },
  successCheckCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E2EFE5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginTop: MarginHW.MarginH16,
    marginBottom: MarginHW.MarginH6,
  },
  successCheckIcon: {
    width: 25,
    height: 25,
    tintColor: '#1A6836',
  },
  successTitle: {
    fontSize: FontsSize.size24,
    fontFamily: fonts.OpenSans_Bold,
    color: '#0A1C14',
    textAlign: 'left',
    // marginTop: MarginHW.MarginH10,
    // marginBottom: MarginHW.MarginH2,
  },
  successSubtitle: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Regular,
    color: '#4B5563',
    textAlign: 'left',
    // marginBottom: MarginHW.MarginH8,
  },

  impactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(238, 245, 238, 0.9)',
    borderColor: '#D1E5D5',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: MarginHW.PaddingH10,
    paddingHorizontal: MarginHW.PaddingW10,
    width: '90%',
    alignSelf: 'flex-start',
    top: 15,
  },
  impactShieldIcon: {
    width: 20,
    height: 20,
    tintColor: '#1A6836',
    marginRight: MarginHW.MarginW10,
  },
  impactText: {
    flex: 1,
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Medium,
    color: '#1A3322',
    lineHeight: 16,
  },

  // Main Card Wrapper (white cards)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginHorizontal: MarginHW.MarginW10,
    // marginTop: MarginHW.MarginH10,
    padding: MarginHW.PaddingH12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EEF2F0',
  },

  // Transaction details row
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH10,
  },
  transactionLabel: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Regular,
    color: '#7C8A81',
  },
  transactionValue: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  copyButton: {
    marginLeft: MarginHW.MarginW4,
    padding: MarginHW.MarginH2,
  },
  copyIcon: {
    width: 14,
    height: 14,
    tintColor: '#1E6B46',
  },
  amountValue: {
    fontSize: FontsSize.size14,
    fontFamily: fonts.OpenSans_Bold,
    color: '#0F7F1B',
  },

  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: MarginHW.MarginH8,
    borderStyle: 'dashed',
  },

  // Secure payment status banner
  secureBannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  secureTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    marginRight: MarginHW.MarginW10,
  },
  secureShieldIcon: {
    width: 38,
    height: 38,
    top: 30,
    tintColor: '#1A6836',
    marginRight: MarginHW.MarginW8,
    marginTop: MarginHW.MarginH2,
  },
  secureTextCol: {
    flex: 1,
  },
  secureBoldText: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#1A3322',
  },
  secureDescText: {
    fontSize: FontsSize.size9_5,
    fontFamily: fonts.OpenSans_Regular,
    color: '#5B665F',
    marginTop: MarginHW.MarginH1,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D1DCD6',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: MarginHW.PaddingH8,
    paddingHorizontal: MarginHW.PaddingW10,
    backgroundColor: '#FFFFFF',
  },
  downloadText: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#1A6836',
  },

  sectionTitle: {
    fontSize: FontsSize.size14,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
    marginHorizontal: MarginHW.MarginW10,
    marginVertical: MarginHW.MarginH6,
  },
  projectCard: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: MarginHW.MarginH10,
  },
  projectImg: {
    width: 110,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#EAEAEA',
  },
  projectInfo: {
    flex: 1,
    marginLeft: MarginHW.MarginW10,
    justifyContent: 'space-between',
  },
  projectTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  projectTitle: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
    marginRight: MarginHW.MarginW6,
  },
  badge: {
    backgroundColor: '#E6EFE8',
    borderRadius: 10,
    paddingHorizontal: MarginHW.PaddingW8,
    paddingVertical: MarginHW.MarginH2,
  },
  badgeText: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Bold,
    color: '#1A6836',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: MarginHW.MarginH2,
  },
  locationIcon: {
    width: 12,
    height: 12,
    tintColor: '#5B665F',
    marginRight: MarginHW.MarginW4,
  },
  locationText: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Regular,
    color: '#5B665F',
  },
  projectDesc: {
    fontSize: FontsSize.size10,
    fontFamily: fonts.OpenSans_Regular,
    color: '#5B665F',
    lineHeight: 14,
    marginTop: MarginHW.MarginH4,
  },

  // Progress Bar
  progressWrapper: {
    marginTop: MarginHW.MarginH4,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH4,
  },
  progressLabel: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  progressLabelNormal: {
    fontFamily: fonts.OpenSans_Regular,
    color: '#5B665F',
  },
  progressPercent: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#0F7F1B',
  },
  progressBarTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EAEAEA',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2F9E67',
    borderRadius: 3,
  },

  // Features supported row
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: MarginHW.MarginH8,
    borderTopWidth: 1,
    borderTopColor: '#EFF2F0',
    paddingTop: MarginHW.PaddingH10,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingW4,
  },
  featureIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EFF5F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH6,
  },
  featureIcon: {
    width: 18,
    height: 18,
    tintColor: '#1A6836',
  },
  featureValue: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#1A6836',
    textAlign: 'center',
  },
  featureLabel: {
    fontSize: FontsSize.size8_5,
    fontFamily: fonts.OpenSans_Medium,
    color: '#6B7A70',
    textAlign: 'center',
    marginTop: MarginHW.MarginH2,
    lineHeight: 11,
  },
  featureDivider: {
    width: 1,
    backgroundColor: '#EFF2F0',
    marginVertical: MarginHW.MarginH4,
  },

  // What happens next timeline
  timelineContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    marginTop: MarginHW.MarginH6,
    paddingHorizontal: MarginHW.PaddingW4,
  },
  timelineLine: {
    position: 'absolute',
    top: 18,
    left: '12%',
    right: '12%',
    height: 1,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderStyle: 'dashed',
    zIndex: 0,
  },
  timelineStep: {
    flex: 1,
    alignItems: 'center',
    zIndex: 1,
  },
  timelineBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  timelineBadgeActive: {
    backgroundColor: '#EEF5EE',
    borderColor: '#2F9E67',
  },
  timelineBadgeIcon: {
    width: 16,
    height: 16,
    tintColor: '#5B665F',
  },
  timelineBadgeIconActive: {
    tintColor: '#1A6836',
  },
  timelineStepTitle: {
    fontSize: FontsSize.size9_5,
    fontFamily: fonts.OpenSans_Bold,
    color: '#5B665F',
    textAlign: 'center',
  },
  timelineStepTitleActive: {
    color: '#1A6836',
  },
  timelineStepDesc: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Regular,
    color: '#7C8A81',
    textAlign: 'center',
    marginTop: MarginHW.MarginH2,
    paddingHorizontal: MarginHW.PaddingW4,
    lineHeight: 11,
  },

  // Changemaker Banner
  changemakerBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F7F4',
    borderRadius: 10,
    borderColor: '#EAF1EC',
    borderWidth: 1,
    paddingVertical: MarginHW.PaddingH8,
    paddingHorizontal: MarginHW.PaddingW14,
    marginHorizontal: MarginHW.MarginW10,
    marginTop: MarginHW.MarginH10,
  },
  changemakerIcon: {
    width: 22,
    height: 22,
    tintColor: '#1A6836',
    marginRight: MarginHW.MarginW10,
  },
  changemakerTextCol: {
    flex: 1,
  },
  changemakerBold: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#1A6836',
  },
  changemakerDesc: {
    fontSize: FontsSize.size9_5,
    fontFamily: fonts.OpenSans_Regular,
    color: '#5B665F',
    marginTop: MarginHW.MarginH2,
  },

  // Dark Impact Banner
  darkBanner: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: MarginHW.MarginW10,
    marginTop: MarginHW.MarginH12,
    padding: MarginHW.PaddingH12,
    overflow: 'hidden',
  },
  darkBannerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  darkBannerLeft: {
    flex: 1.1,
    marginRight: MarginHW.MarginW4,
  },
  darkBannerDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: MarginHW.MarginW4,
  },
  darkBannerRight: {
    flex: 0.9,
    marginLeft: MarginHW.MarginW4,
  },
  darkBannerTitle: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
    marginBottom: MarginHW.MarginH4,
  },
  darkBannerText: {
    fontSize: FontsSize.size9_5,
    fontFamily: fonts.OpenSans_Regular,
    color: '#A9B4AD',
    lineHeight: 14,
    marginBottom: MarginHW.MarginH12,
  },
  dashboardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.legacyGreen,
    borderRadius: 6,
    paddingVertical: MarginHW.PaddingH8,
    paddingHorizontal: MarginHW.PaddingW10,
    alignSelf: 'flex-start',
    marginTop: MarginHW.MarginH4,
  },
  dashboardButtonText: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#fff',
    marginRight: MarginHW.MarginW6,
  },
  dashboardButtonArrow: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#0A1C14',
  },
  socialIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: MarginHW.MarginH4,
  },

  // Footer notes row
  footerNotesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MarginHW.MarginH12,
    paddingVertical: MarginHW.PaddingH6,
    backgroundColor: '#F9FAF6',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EFF2F0',
  },
  footerNoteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  footerNoteIcon: {
    width: 12,
    height: 12,
    tintColor: '#1A6836',
    marginRight: MarginHW.MarginW4,
  },
  footerNoteText: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#55665C',
  },
  footerNoteDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#D1DCD6',
  },
});
