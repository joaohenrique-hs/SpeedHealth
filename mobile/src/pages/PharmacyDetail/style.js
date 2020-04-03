import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pharmacyHeaderText: {
        fontSize: 30,
        color: '#41dfad',
    },
    hr: {
        padding: 7,
        borderBottomColor: '#41dfad',
        borderBottomWidth: 1,
    },
    pharmacyImg: {
        padding: 12,
        paddingBottom: 30,
        alignItems: 'center',
    },
    pharmacyImage: {
        width: 200,
        height: 200,
    },
})