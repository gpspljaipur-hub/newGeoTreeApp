import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from './Colors';
import MarginHW from './MarginHW';
import Images from '../constants/images';
import ImageSize from './ImageSize';
import fonts from './fonts';
import FontsSize from './FontsSize';

interface PlantHeaderProps {
  title?: string;
  onBack?: () => void;
  points?: string;
  backgroundColor?: string;
}

const PlantHeader: React.FC<PlantHeaderProps> = ({
  title = 'Plant Your First Tree',
  onBack,
  points = '1,250',
  backgroundColor,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.headerContainer, backgroundColor ? { backgroundColor } : null]}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Image
          source={Images.back}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.coinBadge}>
        <LinearGradient
          colors={['#FFE259', '#FFA751']}
          style={styles.coinIconContainer}
        >
          <Image
            source={Images.leaf}
            style={styles.coinIcon}
            resizeMode="contain"
          />
        </LinearGradient>
        <View style={styles.coinTextContainer}>
          <Text style={styles.coinAmount}>{points}</Text>
          <Text style={styles.coinLabel}>Green Points</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MarginHW.PaddingW16,
    paddingBottom: MarginHW.PaddingH10,
    backgroundColor: '#FAFBFB',
  },
  backButton: {

  },
  backIcon: {
    width: ImageSize.ImageW20,
    height: ImageSize.ImageH20,
    tintColor: Colors.black,
  },
  headerTitle: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size16,
    color: Colors.black,
  },
  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: MarginHW.PaddingW10,
    paddingVertical: MarginHW.PaddingH3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8EFEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  coinIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MarginHW.MarginW6,
  },
  coinIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.white,
  },
  coinTextContainer: {
    alignItems: 'flex-start',
  },
  coinAmount: {
    fontFamily: fonts.OpenSans_Bold,
    fontSize: FontsSize.size12,
    color: Colors.black,
    lineHeight: 14,
  },
  coinLabel: {
    fontFamily: fonts.OpenSans_Regular,
    fontSize: 8,
    color: Colors.bannerTextDesc,
    lineHeight: 10,
  },
});
