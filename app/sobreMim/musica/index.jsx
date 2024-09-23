import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Bar from "../../../components/Bar";
import { MdArrowBack } from "react-icons/md";

const Musica = () => {
    const albuns = [
        {
            id: '1',
            nome: 'Rodeo',
            autor: 'Travis Scott',
            ano: 2015,
            capa: 'https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg',
        },
        {
            id: '2',
            nome: 'Astroworld',
            autor: 'Travis Scott',
            ano: 2018,
            capa: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg',
        },
        {
            id: '3',
            nome: 'Whole Lotta Red',
            autor: 'Playboi Carti',
            ano: 2020,
            capa: 'https://upload.wikimedia.org/wikipedia/pt/6/6c/Playboi_Carti_-_Whole_Lotta_Red.png',
        },
        {
            id: '4',
            nome: 'Man on the Moon II: The Legend of Mr. Rager',
            autor: 'Kid Cudi',
            ano: 2010,
            capa: 'https://i.scdn.co/image/ab67616d0000b27359e842b6a3566a141f27f815',
        },
    ];

    return (
        <>
            <Bar 
                icon={<MdArrowBack />}
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
                        <View style={styles.albumContainer}>
                            <Image 
                                style={styles.foto}
                                source={{ uri: item.capa }}
                            />
                            <Text style={styles.albumNome}>{item.nome}({item.ano})</Text>
                            <Text style={styles.albumInfo}>{item.autor} </Text>
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
        padding: 16,
        backgroundColor: '#f9f9f9', 
    },
    albumContainer: {
        marginBottom: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        elevation: 2, 
        shadowOpacity: 0.1,
        shadowRadius: 5,
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
    },
    albumInfo: {
        fontSize: 14,
        color: '#555',
    },
});

export default Musica;
