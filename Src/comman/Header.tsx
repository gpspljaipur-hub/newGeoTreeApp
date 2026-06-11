import React from 'react';
import {
    TextInput as RNTextInput,
    StyleSheet,
    TextInputProps,
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';
import { Colors } from './Colors';
import MarginHW from './MarginHW';
import Images from '../constants/images';
import HWSize from './HWSize';
import ImageSize from './ImageSize';
import { handleNavigation } from '../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';
type Props = TextInputProps & {
    containerStyle?: any;
    countryCode?: string; // ✅ NEW
    showBack?: boolean
    navigation?: any
    tintcolor?: string,
};

const Header: React.FC<Props> = ({
    style,
    containerStyle,
    countryCode,
    showBack,
    navigation: propNavigation,
    tintcolor = Colors.white,
    ...rest
}) => {
    const internalNavigation = useNavigation();
    const navigation = propNavigation || internalNavigation;
    return (
        <View style={{ zIndex: 10, elevation: 10, ...style }}>
            {showBack ?
                <View style={{ height: 40, marginTop: 30, left: 20, flexDirection: 'row', alignItems: 'center', ...containerStyle }}>
                    <TouchableOpacity hitSlop={{ top: 10, left: 10, bottom: 10, right: 10, }}
                        onPress={() => { handleNavigation({ type: 'pop', navigation }) }}
                    >
                        <Image
                            source={Images.back}
                            style={[styles.backIcon, { tintColor: tintcolor }]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                : (
                    <View style={styles.header}>
                        <Image
                            resizeMode="contain"
                            source={Images.logo}
                            style={styles.logo}
                        />
                        <View style={styles.headerIcons}>
                            <TouchableOpacity onPress={() => { handleNavigation({ type: 'push', navigation, page: 'Notification' }) }}>
                                <Image source={Images.notification} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { handleNavigation({ type: 'push', navigation, page: 'Setting' }) }}>
                                <Image source={Images.settings} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>)}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, },
    logo: { left: -MarginHW.MarginW14, height: MarginHW.MarginH35, width: HWSize.W_Width140, top: MarginHW.MarginW10 },
    headerIcons: { flexDirection: 'row', gap: 14, },
    icon: { width: ImageSize.ImageW22, height: ImageSize.ImageH22, top: MarginHW.MarginW10 },
    backIcon: {
        tintColor: Colors.white,
        width: ImageSize.ImageW22,
        height: ImageSize.ImageH22,
    },



});
