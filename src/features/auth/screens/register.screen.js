import React, {useState}from 'react'
import {useWindowDimensions, View, ScrollView } from 'react-native'
import Shape from '../../../../assets/images/hiring.svg'
import Noti from '../../../../assets/images/shape.svg'
import styles from './styles';
import Logo from '../../../../assets/images/logo.svg'
import StyledButton from '../../../components/StyledButton/button.component';
import Inputs from '../../../components/input/inputs.component';

export const RegisterScreen = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const SigninPresed = () => {
    props.navigation.navigate('Main');
    // console.warn('Sign in')
  }
  const ForgetPasswordPresed = () => {
    console.warn('Forget password')
  }
  const SigninWithGoogle = (props) => {
    props.navigation.navigate('Control')
  }

  return (
    <ScrollView style={styles.root}>
        <View style={styles.header}>
          <Noti width={200} height={150} fill={"#00B0FF"} />
          <Shape width={150} height={150} fill={"#00B0FF"} />
        </View>

        <View style={[styles.logo, {height: height * 0.3}]}>
            <Logo width={200} height={200} fill={"#00B0FF"} />
        </View>
        <View style={styles.container}>
          <Inputs 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
          />
          <Inputs 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry={true}
            />
        </View>
          <StyledButton 
            type="PRIMARY"
            text={"Login"}
            onPress={() => SigninPresed()}
          />
          <StyledButton 
            type="TERTIARY"
            text={"Mot de pass oublié"}
            onPress={() => ForgetPasswordPresed()}
          />
          <StyledButton 
            text={"Sign in with Facebook"}
            onPress={() => ForgetPasswordPresed()}
            bgColor= "#E7EAF4"
            fgColor="#4765A9"
          />
          <StyledButton 
            text={"Sign in with Google"}
            onPress={() => SigninWithGoogle(props)}
            bgColor= "#FAE9EA"
            fgColor="#DD4D44"
          />
    </ScrollView>
  )
}

