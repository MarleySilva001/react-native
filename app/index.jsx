import { View, StyleSheet, FlatList, Pressable, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const Rotas = () => {

    const data = [
        { id: '1', href: "/Santander", text: "Santander", img: require('../assets/images/santander.png') },
        { id: '2', href: "/calculadora 2.0", text: "calculadora 2", img: require('../assets/images/marley.jpg') },
        { id: '3', href: "/calculadora simples", text: "calculadora 1", img: require('../assets/images/marley.jpg') },
        { id: '4', href: "/pokemon", text: "pokemon", img: require('../assets/images/pokeball.png') },
        { id: '5', href: "/TaskHub", text: "Task Hub", img: require('../assets/images/taskhub.png') },
        { id: '6', href: "/lista-tarefa", text: "Lista Tarefa", img: require('../assets/images/listatarefa.png') },
        { id: '7', href: "/splashScreen", text: "Splash Screen", img: require('../assets/images/marley.jpg') },
        { id: '8', href: "/sobreMim", text: "Sobre Mim", img: require('../assets/images/marley.jpg') },
        { id: '9', href: "/iFome", text: "iFome", img: require('../assets/images/ifome.png') },
        { id: '10', href: "/ImagePicker", text: "image Picker", img: require('../assets/images/marley.jpg') },
        { id: '11', href: "/camera", text: "camera", img: require('../assets/images/camera.png') },
        { id: '12', href: "/scanQR", text: "Leitor QR", img: require('../assets/images/camera.png') },
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
                       <Link href={item.href}>
                       <Pressable style={styles.btn}>
                        <Image 
                        source={item.img}
                        style={styles.foto}
                        />
                        <Text style={styles.p}>{item.text}</Text>
                       </Pressable>
                       </Link>
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
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 75,
        maxWidth: 90,
        marginHorizontal: 2,
        paddingBottom: 22,
       
    },
    foto: {
        minWidth: 55,
        maxWidth: 65,
        minHeight: 55,
        maxHeight: 65,
        marginBottom: 5, 
        borderRadius: 3
    }, 
    p:{
        fontSize: 10
    },
});

export default Rotas;
