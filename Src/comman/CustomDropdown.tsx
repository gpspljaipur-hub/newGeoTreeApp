import { FlatList, Image, Modal, Platform, StyleSheet, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import Images from "../constants/images";
import { Colors } from "./Colors";
import fonts from "./fonts";
import FontsSize from "./FontsSize";
import MarginHW from "./MarginHW";
import String from "./String";

const CustomDropdown = ({
    plantModalVisible,
    selectedPlant,
    PlantModalVisibleclose,

}: any) => {
    return (
        <>
            <View style={styles.plantModalOverlay}>
                <View style={styles.modalContent}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.title}>{String.PlantNameLabel} </Text>
                        <Text style={styles.titleName} >: {selectedPlant?.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.title}>{String.ScientificNameLabel} </Text>
                        <Text style={styles.titleName} >: {selectedPlant?.scientific_name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.title}>{String.CO2AbsorptionLabel} </Text>
                        <Text style={styles.titleName} >: {selectedPlant?.co2_absorption}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.title}>{String.MaturityLabel} </Text>
                        <Text style={styles.titleName} >: {selectedPlant?.maturity_period}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>{String.TreeHeightLabel} </Text>
                        <Text>: </Text>
                        {selectedPlant?.variations?.map((v: any, index: number) => (
                            <Text
                                key={`height-${v?.height ?? 'item'}-${index}`}
                                style={styles.titleName}
                            >
                                {v.height} ,
                            </Text>
                        ))}

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={[styles.title,]}>{String.RateLabel}</Text>
                        <Text>: </Text>
                        {selectedPlant?.variations?.map((v: any, index: number) => (
                            <Text
                                key={`price-${v?.price ?? 'item'}-${index}`}
                                style={styles.titleName}
                            >
                                ₹{v.price} ,
                            </Text>
                        ))}
                    </View>

                    <TouchableOpacity style={styles.closeButton} onPress={() => PlantModalVisibleclose()}>
                        <Text style={styles.closeButtonText}>{String.Close}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>

    );
};

export default CustomDropdown;
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: MarginHW.MarginW16,
    },
    plantModalOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0.1,
        shadowRadius: 10,
        elevation: 8,
    },
    title: {
        width: 120,
        fontSize: FontsSize.size14,
        fontFamily: fonts.Lexend_ExtraBold,
        marginBottom: MarginHW.MarginH10,
    },
    titleName: {

        fontSize: FontsSize.size14,
        fontFamily: fonts.Lexend_Medium,
        marginBottom: MarginHW.MarginH10,
    },
    dropdownContainer: {
        height: 48,
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: '#458A5D',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    dropdownText: {
        color: '#FFF',
        fontSize: FontsSize.size16,
        fontFamily: fonts.Lexend_Medium,
    },

    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    arrowImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.secondary_button,
        borderRadius: 5,
        alignSelf: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: FontsSize.size16,
        fontFamily: fonts.Lexend_Medium,
    },
});



