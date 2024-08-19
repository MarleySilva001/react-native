import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';


function Button({onPress, title}) {
    return (
       <Pressable 
       style={styles.button}
       onPress={onPress}
       ><Text style={styles.text}>{title}</Text></Pressable>
    );
}

const styles = StyleSheet.create({
    button : {
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: 'red',
        width:'100%',
        paddingVertical: 10,
        borderRadius: 3,
    },
    text: {
        color: 'white',
        fontSize: 16,
    }
})

export default Button;