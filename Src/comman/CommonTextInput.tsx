import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
} from 'react-native';
import { Colors } from './Colors';
import FontsSize from './FontsSize';
import fonts from './fonts';
import MarginHW from './MarginHW';

type Props = TextInputProps & {
  containerStyle?: any;
  countryCode?: string;
  errorMsg?: string;
};

const CommonTextInput: React.FC<Props> = ({
  style,
  containerStyle,
  countryCode,
  errorMsg,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>

      <View style={[styles.inputContainer]}>
        {countryCode && (
          <>
            <Text style={styles.countryCode}>{countryCode}</Text>
            <View style={styles.divider} />
          </>
        )}


        <RNTextInput
          style={[styles.input, countryCode && styles.inputWithCode, style]}
          placeholderTextColor={Colors.ApptextColor}
          cursorColor={Colors.ApptextColor}
          {...rest}
        />
      </View>
      {errorMsg ? (
        <Text style={styles.errorText}>
          {errorMsg}
        </Text>
      ) : null}
    </View>
  );
};

export default CommonTextInput;


const styles = StyleSheet.create({
  container: { alignItems: 'center', top: MarginHW.MarginH10, },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E1EACE', borderRadius: 8, },
  errorText: { fontFamily: fonts.Lexend_Regular, color: '#E44746', fontSize: FontsSize.size12, top: 4 },
  countryCode: { color: Colors.ApptextColor, fontSize: FontsSize.size16, fontFamily: fonts.Lexend_Medium, marginHorizontal: MarginHW.MarginW12, },
  inputWithCode: {},
  divider: { width: 2, height: 24, backgroundColor: Colors.ApptextColor, },
  input: { height: 50, borderTopRightRadius: 8, borderBottomRightRadius: 8, flex: 1, paddingHorizontal: MarginHW.MarginW12, fontSize: FontsSize.size16, fontFamily: fonts.Lexend_Medium, color: Colors.ApptextColor, textAlignVertical: 'center' },
});
