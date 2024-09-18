import { View, StyleSheet } from "react-native";
import ButtonR from "./buttonRouter";

const Rotas = () => {
    return (
        <View style={styles.container}>
            <View style={styles.liRotas}>
               <ButtonR 
               href={"/Santander"}
               text={"banco santander"}
               />
               <ButtonR 
               href={"/calculadora 2.0"}
               text={"calculadora 2"}
               />
               <ButtonR 
               href={"/calculadora simples"}
               text={"calculadora 1"}
               />
               <ButtonR 
               href={"/pokemon"}
               text={"pokemon"}
               />
               <ButtonR 
               href={"/TaskHub"}
               text={"Task Hub"}
               />
               <ButtonR 
               href={"/lista-tarefa"}
               text={"Lista Tarefa"}
               />
               <ButtonR 
               href={"/splashScreen"}
               text={"Splash Screen"}
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
});

export default Rotas;