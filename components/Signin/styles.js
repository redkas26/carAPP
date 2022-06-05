import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      container: {
        width: '100%',
        padding: 10,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '5%'
        
      },
      logo: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: '5%',
      },
      // input: {
      //   alignItems: 'center',
      //   backgroundColor: 'white',
      //   borderColor: '#dddddd',
      //   position: 'absolute',
      //   width: '100%',
      //   marginTop: '50%',
      //   borderRadius: 50,
      // },
      // title: {
      //   fontSize: 35,
      //   textAlign: 'center',
      //   fontWeight: '500',
      // },
      // subtitle: {
      //   fontSize: 20,
      //   marginTop: '5%',
      //   textAlign: 'center',
      //   color: '#5c5e62',
      // },
      // image: {
      //   width: '100%',
      //   height: '100%',
      //   resizeMode: 'cover',
      //   position: 'absolute',
      // },
      // buttonsContainer: {
      //   position: "absolute",
      //   bottom: 50,
      //   width: '100%'
      // }
});

export default styles;


