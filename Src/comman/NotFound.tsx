import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Colors } from './Colors';
import fonts from './fonts';
import FontsSize from './FontsSize';
import String from './String';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NotFound = () => {
    return (
        <View style={styles.Buttonview}>
            <Text style={styles.Wait_Text}>{String.NoRecord}</Text>
        </View>
    )

}
export default NotFound
const styles = StyleSheet.create({
    Buttonview: { height: windowHeight / 3, justifyContent: 'center', alignItems: 'center' },
    ButtonText: { color: Colors.white, fontFamily: fonts.Lexend_Medium, fontSize: FontsSize.size18 },
    Wait_Text: { color: Colors.black, fontFamily: fonts.Lexend_Medium, fontSize: FontsSize.size18 },

})
