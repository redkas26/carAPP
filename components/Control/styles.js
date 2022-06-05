import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    header: {
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      photo: {
          display: 'flex',
          alignItems: 'center',
          paddingTop: 15,
      },
      user: {
          margin:10,
          color: '#00B0FF',
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'bold',
      },
      
    box: {
        alignItems:'center',
        flexGrow:1,
        padding: 8,
        
    },
    inner: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '45%',
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 10
    },
    title: {
        width: '100%',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 220,
        color: '#000',
    },
    titles: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6C6A61',
        marginTop: 5
    },
    tab: {
        position:'absolute',
        width: '100%',
        bottom:0
    }

});

export default styles;