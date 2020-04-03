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
    itemHeaderText: {
        fontSize: 30,
        color: '#41dfad',
    },
    hr: {
        borderBottomColor: '#41dfad',
        borderBottomWidth: 1,
    },
    itemImg: {
        padding: 12,
        paddingBottom: 30,
        alignItems: 'center',
    },
    itemImage: {
        width: 200,
        height: 200,
    },
    itemContent: {
        flex: 1,
        justifyContent: 'space-around',
    },
    itemText: {
        fontSize: 22,
        textAlign: 'justify',
    },
    itemDescription: {
        fontSize: 16,
        color: '#818181',
    },
    values: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons: {
        marginTop: 30,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonBox: {
        flex: 1,
        padding: 5,
    },
    button: {
        backgroundColor: "#41dfad",
        borderRadius: 30,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        padding: 10,
    },
})