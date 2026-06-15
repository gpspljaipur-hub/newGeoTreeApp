import React, { useMemo, useCallback } from 'react'
import { StyleSheet, Keyboard, TouchableOpacity, ActivityIndicator, View, Text, Image, ImageSourcePropType, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from './Colors'
import fonts from './fonts'
import FontsSize from './FontsSize'
import MarginHW from './MarginHW'
import String from './String'
import Images from '../constants/images'
import ImageSize from './ImageSize'
import HWSize from './HWSize'
import LinearGradient from 'react-native-linear-gradient'

type LoaderButtonProps = {
    iswidth?: boolean
    iswidthNumber?: number
    isBigbotton?: boolean
    bigColor?: string
    textcolor?: string
    fontsF?: string
    disabled?: boolean
    loader?: boolean
    image?: ImageSourcePropType
    title?: string
    black?: boolean
    tintColor?: boolean
    Onclick?: () => void
    isGradient?: boolean
    gradientColors?: string[]
    showArrow?: boolean
    containerStyle?: StyleProp<ViewStyle>
    gradientStyle?: StyleProp<ViewStyle>
    buttonTextStyle?: StyleProp<TextStyle>
}

const Loader_button: React.FC<LoaderButtonProps> = props => {
    const buttonStyles = useMemo(
        () => ({
            width: props.iswidth ? props.iswidthNumber : wp('80%'),
            backgroundColor: props.isBigbotton ? props.bigColor : !props.disabled ? 'black' : 'grey',
            borderRadius: 10
        }),
        [props.iswidth, props.iswidthNumber, props.isBigbotton, props.bigColor, props.disabled]
    )

    const handlePress = useCallback(() => {
        Keyboard.dismiss()
        if (props.Onclick) props.Onclick()
    }, [props.Onclick])

    const renderContent = () => {
        if (props.loader) {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="small" color={props.textcolor ? props.textcolor : '#fff'} />
                    <Text style={[styles.Wait_Text, { color: props.textcolor ? props.textcolor : '#fff' }]}>{String.Loading}</Text>
                </View>
            )
        }

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {props.image && <Image source={props.image} resizeMode={'contain'} style={[styles.imageStyle, { tintColor: '#fff' }]} />}
                <Text style={[{ fontSize: FontsSize.size18, color: props.textcolor || '#fff', fontFamily: props.fontsF || fonts.OpenSans_Bold }, props.buttonTextStyle]}>{props.title}</Text>
                {props.showArrow && (
                    <View style={styles.arrowContainer}>
                        <View style={styles.arrowLine} />
                        <View style={styles.arrowHead} />
                    </View>
                )}
            </View>
        )
    }

    if (props.isGradient) {
        return (
            <TouchableOpacity
                disabled={!!(props.loader || props.disabled)}
                onPress={handlePress}
                activeOpacity={0.85}
                style={[styles.gradientButtonContainer, props.disabled && { opacity: 0.5 }, props.containerStyle]}
            >
                <LinearGradient
                    colors={props.gradientColors || ['#9eb657', '#77a958', '#38915d', '#238563']}
                    style={[styles.gradientStyle, props.gradientStyle]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    {renderContent()}
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity
            disabled={!!(props.loader || props.disabled)}
            onPress={handlePress}
            style={[styles.Buttonview, buttonStyles, props.disabled && { opacity: 0.5 }, props.containerStyle]}
        >
            {renderContent()}
        </TouchableOpacity>
    )
}

export default Loader_button

const styles = StyleSheet.create({
    Buttonview: { height: MarginHW.MarginH35, marginVertical: MarginHW.MarginH5, alignItems: 'center', justifyContent: 'center', transform: [{ scale: 1 }] },
    ButtonBlackview: { borderWidth: 0.5, padding: 10, height: MarginHW.MarginH55, marginVertical: MarginHW.MarginH5, alignItems: 'center', justifyContent: 'center', transform: [{ scale: 1 }] },
    imageStyle: { width: 20, height: 20, marginBottom: MarginHW.MarginH5, marginRight: MarginHW.MarginW10 },
    ButtonText: { fontSize: FontsSize.size18 },
    ButtonBlackText: { color: '#000', fontFamily: fonts.OpenSans_Bold, fontSize: FontsSize.size18 },
    Size_ButtonText: { color: Colors.btnBg, fontFamily: fonts.OpenSans_ExtraBold, fontSize: FontsSize.size18 },
    Wait_Text: { fontFamily: fonts.OpenSans_ExtraBold, fontSize: FontsSize.size12, marginLeft: 8 },
    LeftArrow: { height: 24, width: 24 },
    LeftView: { position: 'absolute', right: 20, top: 0, bottom: 0, justifyContent: 'center' },

    // Gradient styles matching AppOpening Screen
    gradientButtonContainer: {
        marginHorizontal: MarginHW.MarginW24,
        shadowColor: Colors.btnShadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    gradientStyle: {
        height: HWSize.H_Height45,
        borderRadius: FontsSize.size12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowContainer: {
        width: ImageSize.ImageW24,
        height: ImageSize.ImageH24,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: MarginHW.MarginW10,
    },
    arrowLine: {
        width: ImageSize.ImageW14,
        height: 2.5,
        backgroundColor: Colors.white,
        position: 'absolute',
    },
    arrowHead: {
        width: ImageSize.ImageW9,
        height: ImageSize.ImageH9,
        borderTopWidth: 2.5,
        borderRightWidth: 2.5,
        borderColor: Colors.white,
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
        right: 4,
    },
})
