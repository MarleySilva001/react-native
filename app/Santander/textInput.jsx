import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function Input({value, onChangeNumber}) {
    return (
        <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeNumber}
        placeholder='0,00'
        keyboardType='numeric'
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:'100%',
        backgroundColor: '#EBEBEB',
        fontSize:18,
        padding: 6,
        marginBottom: 12,
    }
})
export default Input;