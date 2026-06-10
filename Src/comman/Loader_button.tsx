import React, { useMemo, useCallback } from 'react'
import { StyleSheet, Keyboard, TouchableOpacity, ActivityIndicator, View, Text, Image, ImageSourcePropType } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from './Colors'
import fonts from './fonts'
import FontsSize from './FontsSize'
import MarginHW from './MarginHW'
import String from './String'
import Images from '../constants/images'

type LoaderButtonProps = {
    iswidth?: boolean
    iswidthNumber?: number
    isBigbotton?: boolean
    bigColor?: string
    textcolor?: string
    fontsF?: string
    disabled?: boolean
    loader?: boolean
    leftArrow: boolean
    image?: ImageSourcePropType
    title?: string
    black?: boolean
    tintColor?: boolean
    Onclick?: () => void
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

    const textStyle = useMemo(() => (props.iswidth ? styles.Size_ButtonText : styles.ButtonText), [props.iswidth])

    const buttonTextColor = useMemo(() => (props.black ? styles.ButtonBlackText : styles.ButtonText), [props.black])

    const handlePress = useCallback(() => {
        Keyboard.dismiss()
        if (props.Onclick) props.Onclick()
    }, [props.Onclick])

    return (
        <TouchableOpacity disabled={!!(props.loader || props.disabled)} onPress={handlePress} style={[styles.Buttonview, buttonStyles]}>
            {!props.loader ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {props.image && <Image source={props.image} resizeMode={'contain'} style={[styles.imageStyle, { tintColor: '#fff' }]} />}
                    <Text style={[{ fontSize: FontsSize.size18, color: props.textcolor, fontFamily: props.fontsF, }]}>{props.title}</Text>
                </View>
            ) : (
                <View >
                    <ActivityIndicator size="small" color={props.textcolor ? props.textcolor : '#fff'} />
                    <Text style={[styles.Wait_Text, { color: props.textcolor ? props.textcolor : '#fff' }]}>{String.Loading}</Text>
                </View>
            )}


        </TouchableOpacity>
    )
}

export default Loader_button

const styles = StyleSheet.create({
    Buttonview: { height: MarginHW.MarginH40, marginVertical: MarginHW.MarginH5, alignItems: 'center', justifyContent: 'center', transform: [{ scale: 1 }] },
    ButtonBlackview: { borderWidth: 0.5, padding: 10, height: MarginHW.MarginH55, marginVertical: MarginHW.MarginH5, alignItems: 'center', justifyContent: 'center', transform: [{ scale: 1 }] },
    imageStyle: { width: 20, height: 20, marginBottom: MarginHW.MarginH5, marginRight: MarginHW.MarginW10 },
    ButtonText: { fontSize: FontsSize.size18 },
    ButtonBlackText: { color: '#000', fontFamily: fonts.OpenSans_Bold, fontSize: FontsSize.size18 },
    Size_ButtonText: { color: Colors.text, fontFamily: fonts.OpenSans_ExtraBold, fontSize: FontsSize.size18 },
    Wait_Text: { fontFamily: fonts.OpenSans_ExtraBold, fontSize: FontsSize.size12 },
    LeftArrow: { height: 24, width: 24 },
    LeftView: { position: 'absolute', right: 20, top: 0, bottom: 0, justifyContent: 'center' }

})
