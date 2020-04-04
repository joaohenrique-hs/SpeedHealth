import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'/*'#0C1A25'*/,
    },
    pharmacy: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#fff',
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
    pharmacyImg: {
        padding: 12,
        paddingBottom: 30,
        alignItems: 'center',
    },
    pharmacyImage: {
        width: 100,
        height: 100,
    },
    pharmacyContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    pharmacyText: {
        fontSize: 15,
    },
    pharmacyContent1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pharmacyContent2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})