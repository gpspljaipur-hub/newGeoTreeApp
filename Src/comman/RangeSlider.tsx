// RangeSlider.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import FontsSize from './FontsSize';
import fonts from './fonts';

interface Props { title: string; ranges: any[]; value: number; onChange: (index: number) => void; thumbScale?: number; }

const RangeSlider: React.FC<Props> = ({ title, ranges, value, onChange, thumbScale = 1, }) => {
    const [sliderValue, setSliderValue] = useState(value);
    const [trackWidth, setTrackWidth] = useState(0);
    const maxValue = Math.max(ranges.length - 1, 0);
    const activeIndex = Math.round(sliderValue);

    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            <View
                style={styles.sliderContainer}
                onLayout={e => setTrackWidth(e.nativeEvent.layout.width)}
                onTouchEnd={e => {
                    if (!trackWidth || maxValue === 0) return;
                    const x = Math.max(0, Math.min(e.nativeEvent.locationX, trackWidth));
                    const snapped = Math.round((x / trackWidth) * maxValue);
                    setSliderValue(snapped);
                    onChange(snapped);
                }}
            >
                {/* slider track */}
                <View style={styles.trackWrap}>
                    <View style={styles.trackBg} />
                    <View style={[styles.trackFill, { width: `${maxValue === 0 ? 0 : (sliderValue / maxValue) * 100}%` }]} />
                </View>

                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={maxValue}
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    onSlidingComplete={raw => {
                        const snapped = Math.round(raw);
                        setSliderValue(snapped);
                        onChange(snapped);
                    }}
                    minimumTrackTintColor="transparent"
                    maximumTrackTintColor="transparent"
                    thumbTintColor="#fff"
                />
            </View>

            <View style={styles.labelsRow}>
                {ranges.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => { setSliderValue(index); onChange(index); }} activeOpacity={0.8}>
                        <Text style={[styles.stepLabel, activeIndex === index ? styles.stepLabelActive : styles.stepLabelInactive]}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    labelsRow: { flexDirection: 'row', justifyContent: 'space-between' },
    slider: { height: 20 },
    sliderContainer: { justifyContent: 'center', height: 20, marginTop: 5, marginBottom: 5 },
    stepLabel: { fontSize: FontsSize.size12 },
    stepLabelActive: { color: '#1E5A3C', fontFamily: fonts.Lexend_SemiBold },
    stepLabelInactive: { color: '#000', fontFamily: fonts.Lexend_Medium },
    title: { fontFamily: fonts.Lexend_SemiBold, fontSize: FontsSize.size14, marginBottom: 8 },
    trackBg: { width: '100%', height: 14, backgroundColor: '#E6ECE5', borderRadius: 7 },
    trackFill: { position: 'absolute', left: 0, height: 14, backgroundColor: '#1E5A3C', borderRadius: 7 },
    trackWrap: { position: 'absolute', width: '100%', height: 14 },
});

export default RangeSlider;
