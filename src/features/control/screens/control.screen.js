import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Profil from '../../../../assets/images/profile.svg'
import Shape from '../../../../assets/images/shape.svg'
import Veri from '../../../../assets/images/veri.svg'
import Cont from '../../../../assets/images/co.svg'
import Ent from '../../../../assets/images/entretien.svg'
import Sec from '../../../../assets/images/securité.svg'
import StyledButton from '../../../components/StyledButton/button.component';

export const ControlScreen = (props) => {
  const ControlePapier = (props) => {
    props.navigation.navigate('Papier')
  }
  const Entretien = (props) => {
    props.navigation.navigate('Entretien')
  }
  const Securité = (props) => {
    props.navigation.navigate('Security')
  }
  const Verification = (props) => {
    props.navigation.navigate('Verification')
  }
  
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
            <Shape width={200} height={150} fill={"#00B0FF"} />
                <View onPress={() => ControlePapier(props)} style={styles.photo}>
                    <Profil style={styles.photo} width={100} height={100} fill={"#00B0FF"} />
                    <Text style={styles.user}>Redouane Kasmi</Text>
                </View>
            </View>

            <Text style={styles.title}>Suivi votre véhicule</Text>
         
            <View style={styles.box}>
                <TouchableOpacity onPress={() => ControlePapier(props)} style={styles.inner}>
                <Veri width={150} height={100} fill={"#00B0FF"} />
                    <Text style={styles.titles}>Controle papier</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => Entretien(props)} style={styles.inner}>
                <Ent width={100} height={100} fill={"#00B0FF"} /> 
                <Text style={styles.titles} >Entretien</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => Securité(props)} style={styles.inner}>
                <Sec width={100} height={100} fill={"red"} />
                <Text style={styles.titles}>Securité</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => Verification(props)} style={styles.inner}>
                <Cont width={150} height={100} fill={"#00B0FF"} />
                <Text style={styles.titles}>Vérification</Text>
                </TouchableOpacity>
            </View>
            <StyledButton 
                type="PRIMARY"
                text={"Commancer"}
                onPress={() => ControlePapier(props)}
            />
        </View>
        </ScrollView>
    )
}
