import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../comman/Colors';
import FontsSize from '../../comman/FontsSize';
import MarginHW from '../../comman/MarginHW';
import fonts from '../../comman/fonts';

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
    paddingHorizontal: 16,
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
    marginRight: 8,
  },
  headerTitleText: {
    fontSize: 18,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
  },
  headerSubtitleText: {
    fontSize: 7,
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
    marginLeft: 10,
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
    paddingHorizontal: 16,
    marginVertical: 14,
  },
  greetingTextSection: {
    flex: 1,
  },
  greetingSub: {
    fontSize: 13,
    fontFamily: fonts.OpenSans_Medium,
    color: '#22391f',
  },
  greetingMain: {
    fontSize: 26,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    lineHeight: 32,
    marginTop: 4,
  },
  greetingDesc: {
    fontSize: 11,
    fontFamily: fonts.OpenSans_Regular,
    color: '#8E9A93',
    marginTop: 6,
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
    marginHorizontal: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 2,
  },
  impactTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  impactCardTitle: {
    fontSize: 12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    letterSpacing: 0.5,
  },
  leafIcon: {
    fontSize: 12,
    marginLeft: 6,
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
    marginBottom: 8,
  },
  statIcon: {
    width: 18,
    height: 18,
  },
  statValue: {
    fontSize: 15,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  statLabel: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
    marginTop: 2,
    textAlign: 'center',
  },
  statSubtext: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Bold,
    marginTop: 4,
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
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 12,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    letterSpacing: 0.5,
  },
  viewAllText: {
    fontSize: 11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#2F9E67',
  },

  // Journey Cards
  journeyList: {
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 1,
  },
  journeyCard: {
    backgroundColor: Colors.listBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    width: 130,
    padding: 10,
    marginRight: 10,
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
    fontSize: 11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
    lineHeight: 14,
  },
  journeyCardSubtitle: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
    marginTop: 2,
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
    marginTop: 4,
  },
  journeyArrow: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  // My Trees Screen
  myTreeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    marginHorizontal: 16,
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 5,
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
    fontSize: 8,
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
    fontSize: 13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  editIconImage: {
    width: 12,
    height: 12,
    marginLeft: 6,
    tintColor: Colors.legacyGreen,
  },
  myTreeLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  smallLocationIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  myTreeLocation: {
    fontSize: 10,
    fontFamily: fonts.OpenSans_Medium,
    color: '#5B665F',
  },
  myTreeBadgesRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  treeBadgeOutline: {
    borderWidth: 1,
    borderColor: '#EEF5EE',
    backgroundColor: '#EEF5EE',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 6,
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
    fontSize: 8,
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
    fontSize: 9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
  },
  myTreeStatVal: {
    fontSize: 11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    marginTop: 2,
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
    marginRight: 10,
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
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  selectedBadgeText: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  stateCardContent: {
    padding: 8,
  },
  stateCardName: {
    fontSize: 11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  stateCardNameSelected: {
    color: Colors.legacyGreen,
  },
  stateCardTrees: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Medium,
    color: Colors.legacyGreen,
    marginTop: 2,
  },

  // Banner Section
  bannerContainer: {
    marginHorizontal: 16,
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
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
    paddingHorizontal: 14,
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
    marginRight: 10,
  },
  bannerPinIcon: {
    width: 16,
    height: 16,
  },
  bannerTextWrapper: {
    flex: 1,
  },
  bannerStateName: {
    fontSize: 13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  bannerStateDesc: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#ECEFEF',
    marginTop: 2,
    lineHeight: 12,
  },
  exploreBtn: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exploreBtnText: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
    marginRight: 4,
  },
  exploreBtnArrow: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // Community Section
  communityContainer: {
    backgroundColor: Colors.listBg,
    borderRadius: 8,
    marginHorizontal: 16,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  communityStatItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  communityIconBg: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E6EFEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  communityIcon: {
    width: 14,
    height: 14,
  },
  communityTextCol: {
    justifyContent: 'center',
  },
  communityVal: {
    fontSize: 11,
    fontFamily: fonts.OpenSans_Bold,
    color: '#111827',
  },
  communityLabel: {
    fontSize: 7,
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
    marginHorizontal: 16,
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
    marginRight: 10,
  },
  challengeMedalImage: {
    width: 28,
    height: 28,
  },
  challengeTextWrapper: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  challengeSubtitle: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#AAB4AD',
    marginTop: 2,
    lineHeight: 12,
  },
  challengeProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  progressBarContainer: {
    flex: 1,
    marginRight: 16,
  },
  progressBarLabel: {
    fontSize: 8,
    fontFamily: fonts.OpenSans_Bold,
    color: '#AAB4AD',
    textTransform: 'uppercase',
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 3,
    marginTop: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2F9E67',
    borderRadius: 3,
  },
  progressCount: {
    fontSize: 9,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
    marginTop: 4,
  },
  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  coinIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  coinVal: {
    fontSize: 10,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  coinLabel: {
    fontSize: 7,
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
    fontSize: 9,
    fontFamily: fonts.OpenSans_Medium,
    color: '#8E9A93',
    marginTop: 4,
  },
  navTextActive: {
    color: '#2F9E67',
    fontFamily: fonts.OpenSans_Bold,
  },
});
