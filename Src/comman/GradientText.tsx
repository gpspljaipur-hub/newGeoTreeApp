import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  colors: string[];
  style?: StyleProp<TextStyle>;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const GradientText: React.FC<GradientTextProps> = ({
  colors,
  style,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  children,
  ...props
}) => {
  return (
    <MaskedView
      maskElement={
        <Text {...props} style={style}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
      >
        <Text {...props} style={[style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
