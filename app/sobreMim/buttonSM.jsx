import { Link } from "expo-router"
import { ScrollView, StyleSheet, Text, Pressable, View } from "react-native"

const ButtonSM = ({href, text}) => {
    return(
        <Link href={href}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>{text}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({

})

export default ButtonSM