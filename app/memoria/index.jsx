import { SafeAreaView, StyleSheet, View, FlatList, Pressable, Text } from "react-native"
import Bar from "../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "expo-router";

const Memoria = () => {
    return (
        <>
            <Bar
                Titulo={'Memória'}
                href={'/'}
                icon={<Entypo name="home" size={24} color="white" />}
                cor={'#6600FF'}
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.flatlist}>
                <FlatList />
                </View>
                <Link href={'/memoria/novamemoria'}>
                    <Pressable style={styles.btnnew}>
                        <View style={styles.centro}>
                        <Entypo name="plus" size={62} color="black" />
                        <Text>Criar uma nova memoria</Text>
                        </View>
                    </Pressable>
                </Link>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    flatlist:{
        minHeight:'5vh',
        maxHeight: '80vh',
    },
    btnnew: {
        width: 290,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1DEE4',
        borderRadius: 8,
    }, 
    centro: {
        alignItems: 'center',
    }
})

export default Memoria