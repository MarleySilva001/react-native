import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Bar from "../../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";
import { useContext } from "react";
import { DetalheContext } from "../../../scripts/sobreMimContext";

const Musica = () => {
    const {albuns} = useContext(DetalheContext)
    return (
        <>
            <Bar 
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/sobreMim'}
                Titulo={'Música'}
                cor={'#00BF66'}
            />
            <View style={styles.container}>
                <FlatList 
                    data={albuns}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Link href={`/sobreMim/musica/${item.id}`}>
                        <View style={styles.albumContainer}>
                            <Image 
                                style={styles.foto}
                                source={{ uri: item.capa }}
                            />
                            <Text style={styles.albumNome}>{item.nome}({item.ano})</Text>
                            <Text style={styles.albumInfo}>{item.autor} </Text>
                        </View>
                        </Link>
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    albumContainer: {
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
    foto: {
        width: 300,
        height: 300,
        borderRadius: 8,
    },
    albumNome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center'
    },
    albumInfo: {
        fontSize: 14,
        color: '#555',
    },
});

export default Musica;
