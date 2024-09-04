import { TextInput, View, Text, StyleSheet } from "react-native"


const Input = ({nome, value, onChangeText, placeholder}) => {
    return (
        <View>
            <Text style={styles.label}>{nome}</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            required
        />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#f5f5f5',
        width: 240,
        padding: 6,
        paddingLeft: 8,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 14
    },
    label: {
        fontSize:14,
        fontWeight:500
        }
})

export default Input;