
import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import StyledButton from "../../../components/StyledButton/button.component";
import Car from '.././../../../assets/images/car.svg'
import Shape from '.././../../../assets/images/hiring.svg'
import Noti from '.././../../../assets/images/shape.svg'

import styles from './styles';


const NavigateToRegister = props => {
  props.navigation.navigate('Register')
}

export const HomeScreen = props => {
  // const tabBarheight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={styles.carContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Noti width={200} height={150} fill={"#00B0FF"} />
          <Shape width={150} height={150} fill={"#00B0FF"} />
        </View>

        <View style={styles.car}>
          <Car  width={300} height={300} fill={"#00B0FF"} />
        </View>

        <View style={styles.titles}>
          <Text style={styles.title}>vérifier et suivi votre véhicule</Text>
          <Text style={styles.subtitle}>Verifier votre Carnet d’entretien voiture et Suivi le contrôle technique, journal de bord, réparations et piéces de rechange Automobile </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton 
            type="PRIMARY"
            text={"commancer"}
            onPress={() => NavigateToRegister(props)}
          />
        </View>      
      </ScrollView>
    </SafeAreaView>
  );
};