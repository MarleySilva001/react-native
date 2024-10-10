import { SafeAreaView, StyleSheet, View, FlatList, Pressable, Text, Image } from "react-native"
import Bar from "../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
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
                
                        <View style={styles.flatlist}>
                           <Text>{memoria.Titulo}</Text>
                           <Image 
                           style={styles.img}
                           source={{uri: memoria.Img}}
                           />
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
    }
})

export default Memoria