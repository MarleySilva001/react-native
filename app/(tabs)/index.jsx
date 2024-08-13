import React, { useState } from "react";
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { evaluate } from "mathjs";



export default home = function () {
    const [textLog, setTextLog] = useState(' ');

    function handleButton(value) {
            setTextLog(textLog => textLog + value);
    }

    function calcular() {
        setTextLog(evaluate(textLog).toString())
    }

    const limparInput = function () {
        setTextLog(' ')
        
    }

    return (<View style={style.container}>
        <View style={style.calculadora}>
        <Text style={style.logBox} testID="pressable_console">{textLog}</Text>
            <View style={style.row}>
                <Button onPress={() => {handleButton('9')}} nome={9} color="white" />
                <Button onPress={() => {handleButton('8')}} nome={8} color="white" />
                <Button onPress={() => {handleButton('7')}} nome={7} color="white" />
                <Button onPress={() => {handleButton('+')}} nome={'+'} color="#14A9FF"/>
            </View>
            <View style={style.row}>
                <Button onPress={() => {handleButton('6')}} nome={6} color="white" />
                <Button onPress={() => {handleButton('5')}} nome={5} color="white" />
                <Button onPress={() => {handleButton('4')}} nome={4} color="white" />
                <Button onPress={() => {handleButton('-')}} nome={'-'} color="#14A9FF" />
            </View>
            <View style={style.row}>
                <Button onPress={() => {handleButton('3')}} nome={3} color="white" />
                <Button onPress={() => {handleButton('2')}} nome={2} color="white" />
                <Button onPress={() => {handleButton('1')}} nome={1} color="white" />
                <Button onPress={() => {handleButton('*')}} nome={'x'} color="#14A9FF" />
            </View>
            <View style={style.row}>
                <Button onPress={() => {calcular()}} nome={'='} color="#14A9FF" />
                <Button onPress={() => {handleButton('0')}} nome={0} color="white" />
                <Button onPress={() => {handleButton('.')}} nome={'.'} color="white" />
                <Button onPress={() => {handleButton('/')}} nome={'/'} color="#14A9FF" />
            </View>
            <Button onPress={() => {limparInput()}} nome={'Clear'} color="#14A9FF" />
            
           
        </View>

    </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
    },
    calculadora: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgb(233, 233, 233)' ,
        borderRadius: 8,
        shadowOffset: {
            width: 4,
            height: 4,
        },
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 14,
    },
    logBox: {
        padding: 12,
        paddingHorizontal: 30,
        margin: 10,
        borderWidth: 1.5,
        borderColor: '#b0b0b0',
        backgroundColor: '#f9f9f9',
        minWidth: 200,
        textAlign: 'right',
      },
})