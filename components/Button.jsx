import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

function Button( { onPress , nome , color } ) {
    return (
        <Pressable
            onPress={ onPress }
            style={[style.button, { backgroundColor: color }]}
        ><Text> {nome} </Text></Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        borderRadius: 50,
        padding: 7,
        paddingHorizontal: 12,
    }
})

export default Button;