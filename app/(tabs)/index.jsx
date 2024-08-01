import React from "react";
import { Text, View, TextInput, Button } from "react-native";


const style = function () {
    return ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        buttonList: {
            flexDirection: 'row',
            gap: 8,
        },
        button: {
            padding: 8, 12;
        }
    })
}

export default home = function () {
    return( <View style={style().container}>
    <View style={style().row}>
        <TextInput placeholder="1" keyboardType="numeric"></TextInput>
        <TextInput  placeholder="2" keyboardType="numeric"></TextInput>
        </View>
        <View style={style().buttonList}>
        <Button
  title="+"
  color="black"
  style={style().button}
/>
        <Button
  title="-"
  color="black"
  style={style().button}
/>
        <Button
  title="*"
  color="black"
  style={style().button}
/>
        <Button
  title="/"
  color="black"
  style={style().button}
/>
    </View>
    <Text>Resultado</Text>
    
    </View>
    )
}