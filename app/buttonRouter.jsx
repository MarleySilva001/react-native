import { Link } from "expo-router";
import { Text, Pressable, StyleSheet } from "react-native";

const ButtonR = ({ text }) => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        color: '#fff',
        backgroundColor: '#00BF66',
        width: 300,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        marginTop: 10
    },
    text: {
        width: '100%'
    }
})

export default ButtonR