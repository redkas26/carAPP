import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      header: {
        position: "absolute",
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: '8%',
      },
      
      car: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        marginTop: '30%',
      },
      titles: {
        marginTop: '100%',
        width: '100%',
        alignItems: 'center',
        
      },
      title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: '10%',
      },
      subtitle: {
        fontSize: 20,
        marginTop: '5%',
        textAlign: 'center',
        color: '#5c5e62',
      },
      buttonsContainer: {
        marginTop: 20,
        width: '100%',
      }
});

export default styles;


