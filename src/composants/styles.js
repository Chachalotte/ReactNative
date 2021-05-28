import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
    },
    button: {
        color: "#65abf6",
        fontSize: 20,
    },
    text: {
        fontSize: 20,
    },
    footer: {
        width: '100%',
        position: 'absolute',
        left:0,
        bottom:0,
        right:0,    
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        
    },
    header: {
        backgroundColor: 'black',
        width: '100%',
        color: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
