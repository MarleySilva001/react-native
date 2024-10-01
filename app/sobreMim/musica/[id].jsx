import { Text, View, StyleSheet, Image } from "react-native"
import Bar from "../../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { DetalheContext } from "../../../scripts/sobreMimContext";

const musicaInfo = () => {
    const { id } = useLocalSearchParams();
    const { albuns } = useContext(DetalheContext)

    const album = albuns.find((item) => item.id === id);

    return (
        <>
            <Bar
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/sobreMim/musica'}
                Titulo={album.nome}
                cor={'#00BF66'}
            />
            <View style={styles.container}>
                <View style={styles.info}>
                <Image 
                style={styles.foto}
                source={{uri: album.capa}}
                />
                <Text style={styles.h1}>Opinião</Text>
                <Text style={styles.p}>{album.descricao}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    foto: {
        width: 300,
        height: 300,
        borderRadius: 8,
    },
    info: {
        width: '96%',
        marginVertical: 8,
        marginHorizontal:'2%',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        elevation: 2, 
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset:{
            width:1,
            height:2,
        }
    },
    h1: {
        width: 300,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 12
    },
    p: {
        width: 300,
        textAlign: 'justify'
    }
})

export default musicaInfo