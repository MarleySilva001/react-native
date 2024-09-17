import { Link } from "expo-router";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const Rotas = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Link href="/Santander">
                <Pressable>
                    <Text>Banco Santander</Text>
                    </Pressable>
                </Link>
                <Link href="/calculadora 2.0">
                <Pressable>
                    <Text>calculadora 2</Text>
                    </Pressable>
                </Link>
                <Link href="/calculadora simples">
                <Pressable>
                    <Text>calculadora 1</Text>
                    </Pressable>
                </Link>
                <Link href="/pokemon">
                <Pressable>
                    <Text>pokemon</Text>
                    </Pressable>
                </Link>
                <Link href="/TaskHub">
                <Pressable>
                    <Text>TaskHub</Text>
                    </Pressable>
                </Link>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Rotas;