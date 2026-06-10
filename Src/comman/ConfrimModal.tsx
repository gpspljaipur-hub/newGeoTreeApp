import { Modal, Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MarginHW from './MarginHW';
import fonts from './fonts';
import FontsSize from './FontsSize';
import String from './String';

const ConfrimModal = ({
    tiltle,
    SureText,
    showModal,
    setShowModal,
    remove,
    selectedId,
    Islogout
}: any) => {
    return (

        <Modal
            visible={showModal}
            transparent
            animationType="slide"
            presentationStyle="overFullScreen"
            statusBarTranslucent
            onRequestClose={() => setShowModal(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>

                    <Text style={styles.modalTitle}>{tiltle}</Text>
                    <Text style={styles.modalText}>{SureText} </Text>

                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={styles.cancelBtn}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={styles.cancelText}>{String.Cancel}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.deleteBtn}
                            onPress={() => {
                                remove(selectedId);
                                setShowModal(false);
                            }}
                        >
                            <Text style={styles.deleteText}>{Islogout ? String.Logout : String.Delete}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>

    )
}
export default ConfrimModal;


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: MarginHW.MarginW16,
    },
    modalContainer: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: MarginHW.MarginW10,
        paddingVertical: MarginHW.MarginH20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0.1,
        shadowRadius: 10,
        elevation: 8,
    },
    modalTitle: { fontSize: FontsSize.size18, fontFamily: fonts.Lexend_SemiBold, marginBottom: 10, },
    modalText: { fontSize: FontsSize.size16, fontFamily: fonts.Lexend_Medium, color: '#555', marginBottom: 20, },
    modalButtons: { flexDirection: 'row', justifyContent: 'flex-end', },
    cancelBtn: { backgroundColor: '#E53935', marginRight: 10, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 6, },
    deleteBtn: { backgroundColor: '#2E7D4F', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 6, },
    deleteText: { color: '#fff', fontSize: FontsSize.size14, fontFamily: fonts.Lexend_Medium },
    cancelText: { fontSize: FontsSize.size14, color: '#fff', fontFamily: fonts.Lexend_Medium }
});
