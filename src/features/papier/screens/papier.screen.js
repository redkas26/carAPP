import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import styles from './Styles'
import Shape from '../../../../assets/images/shape.svg'
import Veri from '../../../../assets/images/veri.svg'
import MyDatePicker from '../../../components/Control-papier/DatePiker'
import StyledButton from '../../..//components/StyledButton/button.component';

const NavigateToNxtPage = (props) => {
  props.navigation.navigate('Entretien')
}


export const PapierScreen = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
     
    };
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Shape width={200} height={150} fill={"#00B0FF"} />
          <Veri width={150} height={100} fill={"#00B0FF"} />
        </View>
        
      <View style= {styles.box}>
          <Text style={styles.title}> Controle Papier</Text>
            <View style={styles.titles}>
              <Text style={styles.text}>Marque</Text>
                <TextInput style={styles.line} placeholder='Marque'></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
            </View>

            <View style={styles.titles}>
                <Text>Modéle</Text>
                <TextInput placeholder='Modéle'></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
            </View>
            <View style={styles.titles}>
              <Text>Année</Text>
                <MyDatePicker />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
            </View>
            <View style={styles.titles}>
                <Text>Assurance</Text>
                <MyDatePicker />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
            </View>
            <View style={styles.titles}>
                <Text>Controle Technique</Text>
                <MyDatePicker />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
            </View>
            <View style={styles.titles}>
              <Text>Année</Text>
              <MyDatePicker />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#DDD'}} />
            </View>
        </View>
        <StyledButton 
                type="PRIMARY"
                text={"Valider"}
                onPress={() => NavigateToNxtPage(props)}
            />
    </View>
  )
}
