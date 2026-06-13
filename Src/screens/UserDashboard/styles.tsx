import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../comman/Colors';
import FontsSize from '../../comman/FontsSize';
import fonts from '../../comman/fonts';
import MarginHW from '../../comman/MarginHW';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  heroImage: {
    flex: 1,
    height: Dimensions.get('screen').height / 3.3,

  },
  scrollContent: {
    paddingBottom: 0, // Room for bottom nav bar
  },

  // Header
  header: {

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingH16,
    marginVertical: 20,

  },
  headerLeft: {
    position: 'absolute',
    top: -50,
    left: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 150,
    height: 150,
    marginRight: MarginHW.MarginW8,
  },
  headerTitleText: {
    fontSize: FontsSize.size18,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
  },
  headerSubtitleText: {
    fontSize: FontsSize.size7,
    fontFamily: fonts.OpenSans_Bold,
    color: '#8E9A93',
    letterSpacing: 0.8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'flex-end'

  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: MarginHW.MarginW10,
    borderWidth: 1,
    borderColor: '#ECEFEF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconImg: {
    width: 16,
    height: 16,
    tintColor: '#111827',
  },

  // Greeting
  greetingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingH16,
    marginVertical: 14,
  },
  greetingTextSection: {
    flex: 1,
  },
  greetingSub: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Medium,
    color: '#22391f',
  },
  greetingMain: {
    fontSize: FontsSize.size26,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    lineHeight: 32,
    marginTop: MarginHW.MarginH4,
  },
  greetingDesc: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Regular,
    color: '#8E9A93',
    marginTop: MarginHW.MarginH6,
    lineHeight: 16,
  },
  greenText: {
    color: '#2F9E67',
    fontFamily: fonts.OpenSans_Medium,
  },
  bubbleContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleImage: {
    width: '100%',
    height: '100%',
  },

  // Your Green Impact Card
  impactCard: {

    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: MarginHW.MarginW10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: MarginHW.MarginH2,
  },
  impactTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH10,
  },
  impactCardTitle: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    letterSpacing: 0.5,
  },
  leafIcon: {
    fontSize: FontsSize.size12,
    marginLeft: MarginHW.MarginW6,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH8,
  },
  statIcon: {
    width: 18,
    height: 18,
  },
  statValue: {
    fontSize: FontsSize.size15,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  statLabel: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
    marginTop: MarginHW.MarginH2,
    textAlign: 'center',
  },
  statSubtext: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Bold,
    marginTop: MarginHW.MarginH4,
    textAlign: 'center',
  },
  statSubtextGreen: {
    color: '#2F9E67',
  },
  statSubtextMuted: {
    color: '#8E9A93',
    fontFamily: fonts.OpenSans_Medium,
  },
  statDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#E7ECE8',
    alignSelf: 'center',
  },

  // Sections
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingW16,
    marginTop: MarginHW.MarginH10,
    marginBottom: MarginHW.MarginH12,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    letterSpacing: 0.5,
  },
  viewAllText: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#2F9E67',
  },

  // Journey Cards
  journeyList: {
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: MarginHW.MarginH1,
  },
  journeyCard: {
    backgroundColor: Colors.listBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    width: 130,
    padding: 10,
    marginRight: MarginHW.MarginW10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
    justifyContent: 'space-between',

  },
  journeyImageContainer: {
    width: '100%',
    height: 70,
    alignItems: 'center'

  },
  journeyImage: {
    width: '90%',
    height: '90%',
  },
  journeyContent: {
    flex: 1,
  },
  journeyCardTitle: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
    lineHeight: 14,
  },
  journeyCardSubtitle: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
    marginTop: MarginHW.MarginH2,
    lineHeight: 10,
  },
  journeyArrowCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1E6B46',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: MarginHW.MarginH4,
  },
  journeyArrow: {
    color: '#FFFFFF',
    fontSize: FontsSize.size11,
    fontWeight: 'bold',
  },

  // My Trees Screen
  myTreeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    marginHorizontal: MarginHW.MarginW16,
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: MarginHW.MarginH5,
  },
  myTreeTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myTreeImageWrapper: {
    width: 75,
    height: 75,
    borderRadius: 10,
    overflow: 'hidden',
  },
  myTreeImage: {
    width: '100%',
    height: '100%',
  },
  liveBadge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2F9E67',
    marginRight: 4,
  },
  liveBadgeText: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Bold,
    color: '#2F9E67',
  },
  myTreeInfo: {
    flex: 1,
    paddingLeft: 12,
  },
  myTreeTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myTreeTitle: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  editIconImage: {
    width: 12,
    height: 12,
    marginLeft: MarginHW.MarginW6,
    tintColor: Colors.legacyGreen,
  },
  myTreeLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: MarginHW.MarginH4,
  },
  smallLocationIcon: {
    width: 10,
    height: 10,
    marginRight: MarginHW.MarginW4,
  },
  myTreeLocation: {
    fontSize: FontsSize.size10,
    fontFamily: fonts.OpenSans_Medium,
    color: '#5B665F',
  },
  myTreeBadgesRow: {
    flexDirection: 'row',
    marginTop: MarginHW.MarginH8,
  },
  treeBadgeOutline: {
    borderWidth: 1,
    borderColor: '#EEF5EE',
    backgroundColor: '#EEF5EE',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: MarginHW.MarginW6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeLocationIcon: {
    width: 10,
    height: 10,
    marginRight: 3,
    tintColor: Colors.legacyGreen
  },
  treeBadgeText: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Bold,
    color: Colors.legacyGreen,
  },
  treeCardArrow: {
    paddingLeft: 6,
  },
  chevronRight: {
    fontSize: 16,
    color: '#8E9A93',
  },
  myTreeHorizontalDivider: {
    height: 1,
    backgroundColor: '#E7ECE8',
    marginVertical: 12,
  },
  myTreeStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myTreeStatCol: {
    flex: 1,
    alignItems: 'center',
  },
  myTreeStatDivider: {
    width: 1,
    height: 25,
    backgroundColor: '#E7ECE8',
  },
  myTreeStatLabel: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
  },
  myTreeStatVal: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    marginTop: MarginHW.MarginH2,
  },

  // State Selector
  stateList: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 16,
  },
  stateCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    width: 115,
    marginRight: MarginHW.MarginW10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
    overflow: 'hidden',
  },
  stateCardSelected: {
    borderColor: '#2F9E67',
    borderWidth: 1.5,
  },
  stateCardImageWrapper: {
    width: '100%',
    height: 70,
  },
  stateCardImage: {
    width: '100%',
    height: '100%',
  },
  selectedBadge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: Colors.legacyGreen,
    borderRadius: 4,
    paddingHorizontal: MarginHW.PaddingW6,
    paddingVertical: 2,
  },
  selectedBadgeText: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  stateCardContent: {
    padding: 8,
  },
  stateCardName: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  stateCardNameSelected: {
    color: Colors.legacyGreen,
  },
  stateCardTrees: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Medium,
    color: Colors.legacyGreen,
    marginTop: MarginHW.MarginH2,
  },

  // Banner Section
  bannerContainer: {
    marginHorizontal: MarginHW.MarginW16,
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: MarginHW.MarginH20,
    borderWidth: 1,
    borderColor: '#E7ECE8',
  },
  bannerBgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  bannerInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW14,
  },
  bannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bannerPinWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW10,
  },
  bannerPinIcon: {
    width: 16,
    height: 16,
  },
  bannerTextWrapper: {
    flex: 1,
  },
  bannerStateName: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  bannerStateDesc: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#ECEFEF',
    marginTop: MarginHW.MarginH2,
    lineHeight: 12,
  },
  exploreBtn: {
    borderRadius: 8,
    paddingHorizontal: MarginHW.PaddingW10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exploreBtnText: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
    marginRight: MarginHW.MarginW4,
  },
  exploreBtnArrow: {
    fontSize: FontsSize.size10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // Community Section
  communityContainer: {
    backgroundColor: Colors.listBg,
    borderRadius: 8,
    marginHorizontal: MarginHW.MarginW16,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: MarginHW.MarginH20,
  },
  communityStatItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: MarginHW.PaddingW6,
  },
  communityIconBg: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E6EFEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW6,
  },
  communityIcon: {
    width: 14,
    height: 14,
  },
  communityTextCol: {
    justifyContent: 'center',
  },
  communityVal: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  communityLabel: {
    fontSize: FontsSize.size7,
    fontFamily: fonts.OpenSans_Medium,
    color: '#000',
  },
  communityDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#E7ECE8',
    position: 'absolute',
    right: 0,
  },

  // Monthly Challenge Card
  challengeCard: {
    backgroundColor: Colors.bgColor,
    borderRadius: 14,
    marginHorizontal: MarginHW.MarginW16,
    padding: 14,

    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  challengeContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  challengeMedalWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW10,
  },
  challengeMedalImage: {
    width: 28,
    height: 28,
  },
  challengeTextWrapper: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  challengeSubtitle: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#AAB4AD',
    marginTop: MarginHW.MarginH2,
    lineHeight: 12,
  },
  challengeProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: MarginHW.MarginH14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  progressBarContainer: {
    flex: 1,
    marginRight: MarginHW.MarginW16,
  },
  progressBarLabel: {
    fontSize: FontsSize.size8,
    fontFamily: fonts.OpenSans_Bold,
    color: '#AAB4AD',
    textTransform: 'uppercase',
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 3,
    marginTop: MarginHW.MarginH4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2F9E67',
    borderRadius: 3,
  },
  progressCount: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
    marginTop: MarginHW.MarginH4,
  },
  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    paddingHorizontal: MarginHW.PaddingW8,
    paddingVertical: 4,
  },
  coinIcon: {
    fontSize: FontsSize.size16,
    marginRight: MarginHW.MarginW6,
  },
  coinVal: {
    fontSize: FontsSize.size10,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  coinLabel: {
    fontSize: FontsSize.size7,
    fontFamily: fonts.OpenSans_Medium,
    color: '#AAB4AD',
  },

  // Bottom Navigation
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ECEFEF',
    paddingBottom: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    width: 22,
    height: 22,
    tintColor: '#8E9A93',
  },
  navIconActive: {
    tintColor: '#2F9E67',
  },
  navText: {
    fontSize: FontsSize.size9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
    marginTop: MarginHW.MarginH4,
  },
  navTextActive: {
    color: '#2F9E67',
    fontFamily: fonts.OpenSans_Bold,
  },
});
