import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";


const style = function () {
    return ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
        },
        buttonList: {
            flexDirection: 'row',
            gap: 8,
        },
        button: {
            padding: 1,
        },
        input: {
            width: 114,
            height: 36,
            borderWidth: 1,
            margin: 6,
            padding: 10,
        },
        titulo: {
            fontSize: 54
        }
    })
}

export default home = function () {
    const [number, onChargeNumber] = useState('');
    const [number2, onChargeNumber2] = useState('');
    const [resultado, setResultado] = useState('');

    const soma = function () {
        setResultado(Number(number) + Number(number2))
        onChargeNumber('')
        onChargeNumber2('')
        return true
    }
    const subtrai = function () {
        setResultado(Number(number) - Number(number2))
        onChargeNumber('')
        onChargeNumber2('')
        return true
    }
    const multiplica = function () {
        setResultado(Number(number) * Number(number2))
        onChargeNumber('')
        onChargeNumber2('')
        return true
    }
    const dividi = function () {
        setResultado(Number(number) / Number(number2))
        onChargeNumber('')
        onChargeNumber2('')
        return true
    }

    return (<View style={style().container}>
        <Text style={style().titulo}>Calculadora</Text>
        <View style={style().buttonList}>
            <TextInput
                onChangeText={onChargeNumber}
                value={number}
                placeholder=" insira o 1 num"
                keyboardType="numeric"
                style={style().input}
            />
            <TextInput
                onChangeText={onChargeNumber2}
                value={number2}
                placeholder=" insira o 2 num"
                keyboardType="numeric"
                style={style().input}
            />
        </View>
        <View style={style().buttonList}>
            <Button
                title="+"
                color="black"
                style={style().button}
                onPress={() => soma()}
            />
            <Button
                title="-"
                color="black"
                style={style().button}
                onPress={() => subtrai()}
            />
            <Button
                title="*"
                color="black"
                style={style().button}
                onPress={() => multiplica()}
            />
            <Button
                title="/"
                color="black"
                style={style().button}
                onPress={() => dividi()}
            />
        </View>
        <Text>Resultado: {resultado}</Text>

    </View>
    )
}