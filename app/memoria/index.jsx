import { SafeAreaView, StyleSheet, View, FlatList, Pressable, Text, Image, ScrollView } from "react-native"
import Bar from "../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "expo-router";
import { useEffect, useState } from "react";

const Memoria = () => {
    const [memorias, setMemorias] = useState(null)

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('memoria');
            console.log(jsonValue != null ? JSON.parse(jsonValue) : null)
            setMemorias(JSON.parse(jsonValue))
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Bar
                Titulo={'Memória'}
                href={'/'}
                icon={<Entypo name="home" size={24} color="white" />}
                cor={'#6600FF'}
            />
            <SafeAreaView style={styles.container}>
                    
                        <Pressable style={styles.btnnew}>
                            <Link href={'/memoria/novamemoria'}>
                            <View style={styles.centro}>
                                <Entypo name="plus" size={34} color="white" />
                            </View>  
                            </Link>
                        </Pressable>
                  
                {memorias ? <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                    {memorias.map((memoria, index) => (


                        <View style={styles.card} key={index}>
                            <Image
                                style={styles.img}
                                source={{ uri: memoria.Img }}
                            />
                            <Text style={styles.h1}>{memoria.Titulo}</Text>
                            <Text style={styles.p}>{memoria.Descricao}</Text>
                            <View >
                                <View style={styles.extraBox}>
                                    <FontAwesome name="map-marker" size={14} color='#6600FF' />
                                    <Text style={styles.extra}>{memoria.Localizacao}</Text>
                                </View>
                                <View style={styles.extraBox}>
                                    <Entypo name="calendar" size={12} color='#6600FF' />
                                    <Text style={styles.extra}>{memoria.Ano}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView> : <View></View>}


            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    list: {
        padding: 10,
        minHeight: '20vh',
        maxHeight: '100vh',
        marginVertical: 14
    },
    btnnew: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6600FF',
        borderRadius: 50,
        marginVertical: 10,
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1
    },
    centro: {
        alignItems: 'center',
    },
    img: {
        width: 300,
        height: 300,
        position: 'relative',
        borderRadius: 8,
        resizeMode: 'contain'
    },
    card: {
        backgroundColor: '#F9F9F9',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        borderRadius: 6,
        gap: 6,
        marginBottom: 10,
    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 300
    },
    p: {
        fontSize: 13,
        width: 300
    },
    extra: {
        fontSize: 12,
        color: '#6600FF',
        width: 300,
    },
    extraBox: {
        flexDirection: 'row',
        gap: 8
    }
})

export default Memoria