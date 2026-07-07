import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Images from '../../constants/images';
import String from '../../comman/String';
import { Colors } from '../../comman/Colors';
import MarginHW from '../../comman/MarginHW';
import FontsSize from '../../comman/FontsSize';
import fonts from '../../comman/fonts';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import Config from '../../comman/Config';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Reducers/Userslice';
import { handleNavigation } from '../../navigation/RootNavigator';
import { RootState } from '../../redux/Store/Store';
import LinearGradient from 'react-native-linear-gradient';

const SettingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const [pushEnabled, setPushEnabled] = React.useState(true);

  const handleLogout = () => {
    Alert.alert(
      String.Logout,
      String.logout_sure,
      [
        { text: String.Cancel, style: 'cancel' },
        {
          text: String.Logout,
          style: 'destructive',
          onPress: async () => {
            await AsyncStorageHelper.setData(Config.TOKEN, '');
            dispatch(logout());
            handleNavigation({ type: 'setRoot', page: 'Home', navigation });
          },
        },
      ]
    );
  };

  const handleLogin = () => {
    handleNavigation({ type: 'setRoot', page: 'SignIn', navigation });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Profile Card Header */}
        <LinearGradient
          colors={['#27702d', '#27702d', '#68a212']}
          style={styles.profileHeader}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          {navigation.canGoBack() && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => handleNavigation({ type: 'pop', navigation })}
              activeOpacity={0.7}
            >
              <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
            </TouchableOpacity>
          )}
          <View style={styles.avatarWrapper}>
            <Image source={Images.profile} style={styles.avatar} resizeMode="cover" />
          </View>
          <Text style={styles.profilePhone}>{user?.mobile ? `+91 ${user.mobile}` : String.UserProfile}</Text>
          <Text style={styles.profileId}>ID: {user?._id || String.NotAvailable}</Text>
        </LinearGradient>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{String.AccountDetails}</Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>{String.MobileNumber}</Text>
              <Text style={styles.value}>{user?.mobile ? `+91 ${user.mobile}` : String.NotAvailableText}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.row}>
              <Text style={styles.label}>{String.AccountStatus}</Text>
              <Text style={[styles.value, styles.verifiedText]}>
                {user?.number_verified ? String.Verified : String.Unverified}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.row}>
              <Text style={styles.label}>{String.GreenWalletAmount}</Text>
              <Text style={styles.value}>₹{user?.amount ?? '0'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{String.Preferences}</Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>{String.PushNotifications}</Text>
              <Switch
                value={pushEnabled}
                onValueChange={setPushEnabled}
                trackColor={{ false: Colors.switchInactiveBg, true: '#2F9E67' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{String.SupportLegal}</Text>

          <View style={styles.card}>
            <TouchableOpacity style={styles.clickableRow} activeOpacity={0.7}>
              <Text style={styles.clickableLabel}>{String.Otp_TermsAndConditions}</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.clickableRow} activeOpacity={0.7}>
              <Text style={styles.clickableLabel}>{String.PrivacyPolicy}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {isAuthenticated ? (
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
            <Text style={styles.logoutButtonText}>{String.LogOut}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.loginButtonText}>{String.LoginButton}</Text>
          </TouchableOpacity>
        )}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFB',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileHeader: {
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  backIcon: {
    width: 16,
    height: 16,
    tintColor: '#FFFFFF',
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  avatar: {
    width: 60,
    height: 60,
    tintColor: '#FFFFFF',
  },
  profilePhone: {
    fontSize: FontsSize.size18,
    fontFamily: fonts.OpenSans_Bold,
    color: '#FFFFFF',
  },
  profileId: {
    fontSize: FontsSize.size11,
    fontFamily: fonts.OpenSans_Regular,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: MarginHW.PaddingW16,
  },
  sectionTitle: {
    fontSize: FontsSize.size12,
    fontFamily: fonts.OpenSans_Bold,
    color: '#22391f',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7ECE8',
    paddingHorizontal: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  clickableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  label: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Medium,
    color: '#111827',
  },
  clickableLabel: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Medium,
    color: '#111827',
  },
  value: {
    fontSize: FontsSize.size13,
    fontFamily: fonts.OpenSans_Bold,
    color: '#5B665F',
  },
  verifiedText: {
    color: '#2F9E67',
  },
  arrow: {
    fontSize: 16,
    color: '#8E9A93',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#E7ECE8',
  },
  logoutButton: {
    marginHorizontal: MarginHW.MarginW16,
    marginTop: 30,
    height: 50,
    backgroundColor: '#D32F2F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: FontsSize.size15,
    fontFamily: fonts.OpenSans_Bold,
  },
  loginButton: {
    marginHorizontal: MarginHW.MarginW16,
    marginTop: 30,
    height: 50,
    backgroundColor: '#2F9E67',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: FontsSize.size15,
    fontFamily: fonts.OpenSans_Bold,
  },
});

export default SettingScreen;
