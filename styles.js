import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    label: {
        marginVertical: 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 15
    },

    input: {
        margin: 1,
        padding: 10,
        borderColor: 'darkgrey',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },

    container: {
        margin: 5,
        padding: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 10, // Adjust the value to control the roundness of corners
    },

    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    buttonStyle: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        height: 'auto',
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
        padding: 10
    },

    listStyle: {
        marginBottom: 70,
        borderColor: 'lightgrey',
        borderRadius: 10
    },

    sectionHeaderStyle: {
        fontSize: 25,
        margin: 15,
        fontWeight: 'bold'
    },

    headerStyle: {
        height: 50,
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default styles;
