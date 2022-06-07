import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
        flexGrow:1
    },
    header: {
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
      },
      box: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
        height: '60%',
        borderRadius: 20,
        backgroundColor: '#fff',
        marginTop: '50%',
        padding:18
        
      },
      title: {
        width: '100%',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    titles: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        margin: 10
    },
    text: {
        fontSize: 20,
        color: '#6C6A61',
        fontWeight: 'normal',
    },
})

export default styles