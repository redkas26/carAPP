
// import React from 'react'
// import { Pressable, StyleSheet, View } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'


// import Notification from '../NavFooter/Notification';
// import Settings from '../NavFooter/Settings';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Accueil from '../NavFooter/Accueil';
// import HomeScreen from '../Home/HomeScreen';
// import Signin from '../Signin/Signin';


// const homeName = 'Home';
// const notifName = 'Notification';
// const settingsName = 'Settings';

// const Tab = createBottomTabNavigator();

// export default function Footer({}) {
  
//   return (
//       <Tab.Navigator 
//       initialRouteName={homeName}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           let rn = route.name;

//           if (rn === homeName) {
//             iconName = focused ? 'home' : 'home-outline';
//           }else if (rn === notifName) {
//             iconName = focused ? 'list' : 'list-outline';
//           }else if (rn === settingsName) {
//             iconName = focused ? 'settings' : 'settings-outline';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#00B0FF',

//       }}
//       >
//         <Tab.Screen name={homeName} component={Accueil}/>
//         <Tab.Screen name={notifName} component={Signin}/>
//         <Tab.Screen name={settingsName} component={Settings}/>

//       </Tab.Navigator>
//   )
// }



// const NavigateNotif = (props) => {
//   props.navigation.navigate('Notification')
// }
// const Footer=({onPress}) =>{

//   return (
    
//       <View style={styles.footer}>
//         <Pressable onPress={() => NavigateNotif(props)}>
//           <Ionicons name='notifications' size={32}  />
//         </Pressable> 
//         <Pressable onPress={onPress}>
//           <Ionicons name='person' size={32}  />
//         </Pressable> 
//         <Pressable onPress={onPress}>
//           <Ionicons name='share-social' size={32}  />
//         </Pressable>     
        
//     </View>
    
    
//   )
// }
// const styles = StyleSheet.create({
//   footer: {
//     position: 'absolute',
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       width: '100%',
//       height: '10%',
//       borderWidth: 1,
//       borderColor: '#ddd',
//       borderBottomWidth: 2,
//       shadowColor: '#000000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.9,
//       bottom: -10,
//   },
// }) 
