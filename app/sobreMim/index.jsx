import { ScrollView, StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView } from "react-native"
import { Link } from "expo-router"
import ButtonR from "../buttonRouter"
import Bar from "../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';

const sobreMim = () => {
    const data = [
        {
            id: '1',
            nome: 'Livros',
            href: 'sobreMim/livro'
        },
        {
            id: '2',
            nome: 'Musicas',
            href: 'sobreMim/musica'
        }
    ]
    return (
        <>
            <Bar
                icon={<Entypo name="home" size={24} color="white" />}
                href={'/'}
                Titulo={'Sobre Mim'}
                cor={'#00BF66'}
            />
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.foto} 
                    source={require('../../assets/images/marley.jpg')}
                />
                <View style={styles.textos}>
                    <Text style={styles.h1}>Bem-Vindo(a) ao meu App</Text>
                    <Text style={styles.p}>Olá sou um aluno da escola Sesi, estou cursando o terceiro ano do Ensino Médio integrado com o curso de Análise e Desenvolvimento de Sistemas. Nesse App pretendo mostra algumas coisas que eu gosto.</Text>
                </View>
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Link href={item.href}>
                            <Pressable style={styles.button}>
                                <Text style={styles.text}>{item.nome}</Text>
                            </Pressable>
                            </Link>
                        )}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 22,
        marginTop: 30,
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1,
    },
    textos: {
        alignItems: 'center'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 28,
        marginVertical: 6
    },
    p: {
        width: 300,
        textAlign: 'justify'
    },
    button: {
        width: 280,
        padding: 10,
        margin: 0,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BF66'
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        width: '100%',
    },
})

export default sobreMim