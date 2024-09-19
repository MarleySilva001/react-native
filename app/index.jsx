import { View, StyleSheet, FlatList } from "react-native";
import ButtonR from "./buttonRouter";

const Rotas = () => {

    const data =  [
        {
            id: '1', href: "/Santander" , text:"banco santander"
        },
        {
            id: '2', href:"/calculadora 2.0",  text:"calculadora 2"
        },
        {
            id: '3', href:"/calculadora simples",  text:"calculadora 1"
        },
        {
            id: '4', href:"/pokemon",  text:"pokemon"
        },
        {
            id: '5', href:"/TaskHub",  text:"Task Hub"
        },
        {
            id: '6', href:"/lista-tarefa",  text:"Lista Tarefa"
        },
        {
            id: '7', href:"/splashScreen",  text:"Splash Screen"
        },
        {
            id: '8', href:"/sobreMim",  text:"Sobre Mim"
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.liRotas}>
            <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>(
                <ButtonR 
               href={item.href}
               text={item.text}
               />
            )}
            />
               
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    liRotas: {
        flex: 1,
        width: '100%',
        gap: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
});

export default Rotas;