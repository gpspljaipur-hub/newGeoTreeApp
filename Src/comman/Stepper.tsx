import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from './Colors';
import FontsSize from './FontsSize';
import MarginHW from './MarginHW';
import ImageSize from './ImageSize';
import fonts from './fonts';
import Images from '../constants/images';

interface StepperProps {
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Tree' },
    { number: 2, label: 'Location' },
    { number: 3, label: 'Details' },
    { number: 4, label: 'Payment' },
  ];

  const getProgressStyle = () => {
    switch (currentStep) {
      case 1:
        return { width: 0 };
      case 2:
        return { right: '61.7%' };
      case 3:
        return { right: '38.3%' };
      case 4:
        return { right: '15%' };
      default:
        return { width: 0 };
    }
  };

  return (
    <View style={styles.stepperContainer}>
      <View style={styles.stepperLine} />
      <View style={[styles.stepperLineActive, getProgressStyle() as any]} />
      {steps.map((step) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;

        const itemStyle =
          step.number === 1
            ? [styles.stepItem, { marginLeft: -10 }]
            : step.number === 4
              ? [styles.stepItem, { marginRight: -6 }]
              : styles.stepItem;

        return (
          <View key={step.number} style={itemStyle}>
            <View
              style={[
                styles.stepCircle,
                isCompleted
                  ? styles.stepCircleCompleted
                  : isActive
                    ? styles.stepCircleActive
                    : styles.stepCircleInactive,
              ]}
            >
              {isCompleted ? (
                <Image
                  source={Images.check}
                  style={styles.stepCheckIcon}
                  resizeMode="contain"
                />
              ) : (
                <Text
                  style={[
                    styles.stepNumber,
                    !isActive && { color: '#8E9A93' }
                  ]}
                >
                  {step.number}
                </Text>
              )}
            </View>
            <Text
              style={[
                styles.stepLabel,
                isActive || isCompleted
                  ? styles.stepLabelActive
                  : styles.stepLabelInactive,
              ]}
            >
              {step.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MarginHW.PaddingW16,
    // marginVertical: MarginHW.MarginH10,
    position: 'relative',
  },
  stepperLine: {
    position: 'absolute',
    left: '15%',
    right: '15%',
    top: 10,
    height: 2,
    backgroundColor: '#E0E5E2',
    zIndex: 1,
  },
  stepperLineActive: {
    position: 'absolute',
    left: '15%',
    top: 10,
    height: 2,
    backgroundColor: Colors.tint,
    zIndex: 1.5,
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
    zIndex: 2,
  },
  stepCircle: {
    width: 18,
    height: 18,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: MarginHW.MarginH5,
  },
  stepCircleActive: {
    backgroundColor: Colors.tint,
  },
  stepCircleCompleted: {
    backgroundColor: Colors.tint,
  },
  stepCircleInactive: {
    backgroundColor: '#D1DCD6',
  },
  stepNumber: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size12,
    color: Colors.white,
  },
  stepCheckIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.white,
  },
  stepLabel: {
    fontFamily: fonts.OpenSans_Medium,
    fontSize: FontsSize.size10,
    textAlign: 'center',
  },
  stepLabelActive: {
    color: Colors.tint,
    fontFamily: fonts.OpenSans_Medium,
  },
  stepLabelInactive: {
    color: '#8E9A93',
  },
});

export default Stepper;
