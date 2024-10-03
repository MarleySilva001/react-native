import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import ButtonR from "./buttonRouter";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const Rotas = () => {

    const data = [
        { id: '1', href: "/Santander", text: "Santander", img: '../assets/images/santander.png' },
        { id: '2', href: "/calculadora 2.0", text: "calculadora 2", img: '../assets/images/marley.jpg' },
        { id: '3', href: "/calculadora simples", text: "calculadora 1", img: '../assets/images/marley.jpg' },
        { id: '4', href: "/pokemon", text: "pokemon" , img: '../assets/images/pokeball.png'},
        { id: '5', href: "/TaskHub", text: "Task Hub", img: '../assets/images/taskhub.png' },
        { id: '6', href: "/lista-tarefa", text: "Lista Tarefa", img: '../assets/images/listatarefa.png' },
        { id: '7', href: "/splashScreen", text: "Splash Screen", img: '../assets/images/marley.jpg' },
        { id: '8', href: "/sobreMim", text: "Sobre Mim", img: '../assets/images/marley.jpg' },
        { id: '9', href: "/iFome", text: "iFome", img: '../assets/images/ifome.png' },
        { id: '10', href: "/ImagePicker", text: "image Picker", img: '../assets/images/marley.jpg' },
        { id: '11', href: "/camera", text: "camera", img: '../assets/images/camera.png' },
    ];

    return (
        <View style={styles.container}>
             <LinearGradient
            colors={['#E9E9E9', 'aquamarine']}
            style={styles.background}
        />
            <View style={styles.liRotas}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    numColumns={4}
                    renderItem={({ item }) => (
                        <ButtonR text={item.text} href={item.href} source={{ uri: item.img}} />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    liRotas: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
    },
});

export default Rotas;
