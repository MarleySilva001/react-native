import { SafeAreaView, StyleSheet, View, FlatList, Pressable, Text, Image } from "react-native"
import Bar from "../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "expo-router";
import { useEffect, useState } from "react";

const Memoria = () => {
    const [memoria, setMemoria] = useState(null)

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('memoria');
           console.log(jsonValue != null ? JSON.parse(jsonValue) : null) 
          setMemoria(JSON.parse(jsonValue))
        } catch (e) {
          console.log(e)
        }
      };

      useEffect(() => {
        getData()
      },[])

    return (
        <>
            <Bar
                Titulo={'Memória'}
                href={'/'}
                icon={<Entypo name="home" size={24} color="white" />}
                cor={'#6600FF'}
            />
            <SafeAreaView style={styles.container}>
                {memoria ? <View style={styles.flatlist}>
                
                        <View style={styles.card}>
                           <Image 
                           style={styles.img}
                           source={{uri: memoria.Img}}
                           />
                           <Text style={styles.h1}>{memoria.Titulo}</Text>
                           <Text style={styles.p}>{memoria.Descricao}</Text>
                           <Text style={styles.extra}><FontAwesome name="map-marker" size={12} color='#6600FF' />{memoria.Localizacao}</Text>
                           <Text style={styles.extra}><Entypo name="calendar" size={12} color='#6600FF' />{memoria.Ano}</Text>
                        </View>
                    
                </View> : <View></View>}
                
                <Link href={'/memoria/novamemoria'}>
                <Pressable style={styles.btnnew}>
                        <View style={styles.centro}>
                        <Entypo name="plus" size={62} color="black" />
                        <Text>Criar uma nova memoria</Text>
                        </View>
                    </Pressable>
                    
                </Link>
                <Pressable style={styles.btnnew} onPress={()=> setMemoria(null)}>
                        <View style={styles.centro}>
                        <Entypo name="plus" size={62} color="black" />
                        <Text>Criar uma nova memoria</Text>
                        </View>
                    </Pressable>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    flatlist:{
        minHeight:'20vh',
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
    },
    img:{
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    card:{
        padding: 6,
        borderRadius: 6,
        gap: 6,
        marginBottom: 10,
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 2,
        }
    },
    h1:{
        fontSize: 18,
        fontWeight: 'bold',
        width: 300
    },
    p:{
        fontSize: 13,
        width: 300
    },
    extra:{
        fontSize: 12,
        color: '#6600FF',
        width: 300
    }
})

export default Memoria