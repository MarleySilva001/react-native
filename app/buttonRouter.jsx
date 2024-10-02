import { Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

const ButtonR = ({ text, href }) => {
    return (
        <Link href={href}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00BF66',
        width: 300,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        width: '100%',
    },
});

export default ButtonR;