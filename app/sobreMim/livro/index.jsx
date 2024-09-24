import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Bar from "../../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';

const Livro = () => {
    const livros = [
        {
            id: '1',
            nome: 'Duna',
            autor: 'Frank Herbert',
            ano: 1965,
            capa: 'https://m.media-amazon.com/images/I/81zN7udGRUL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: '2',
            nome: 'O Iluminado',
            autor: 'Stephen King',
            ano: 1977,
            capa: 'https://m.media-amazon.com/images/I/8147kKLLvOL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: '3',
            nome: 'Jurassic Park',
            autor: 'Michael Crichton',
            ano: 1990,
            capa: 'https://m.media-amazon.com/images/I/61d8KnB-M1L._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: '4',
            nome: 'Caçadores de Trolls',
            autor: 'Guillermo del Toro e Daniel Kraus',
            ano: 2015,
            capa: 'https://m.media-amazon.com/images/I/A1hq2gtYe3L._SL1500_.jpg',
        },
    ];

    return (
        <>
            <Bar 
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/sobreMim'}
                Titulo={'livro'}
                cor={'#00BF66'}
            />
            <View style={styles.container}>
                <FlatList 
                    data={livros}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.livroContainer}>
                            <Image 
                                style={styles.foto}
                                source={{ uri: item.capa }}
                            />
                            <Text style={styles.livroNome}>{item.nome}({item.ano})</Text>
                            <Text style={styles.livroInfo}>{item.autor} </Text>
                        </View>
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
    },
    livroContainer: {
        marginVertical: 8,
        marginHorizontal:16,
        backgroundColor: 'white',
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
        width: 200,
        height: 300,
        borderRadius: 8,
    },
    livroNome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    livroInfo: {
        fontSize: 14,
        color: '#555',
    },
});

export default Livro;
