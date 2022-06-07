import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';

const Button = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={[
                    styles.container,
                    styles[`container_${type}`],
                    bgColor ? {backgroundColor: bgColor} : {},
                ]}>
                <Text 
                    style={[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {},
                ]}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

export default Button;
