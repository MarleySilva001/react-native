import { ScrollView, StyleSheet, Text, View, Pressable, Image, FlatList } from "react-native"
import { Link } from "expo-router"
import ButtonR from "../buttonRouter"
import Bar from "../../components/Bar"
import { MdHome } from "react-icons/md"

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
                icon={<MdHome />}
                href={'/'}
                Titulo={'Sobre Mim'}
            />
            <View style={styles.container}>
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
                            <ButtonR
                                href={item.href}
                                text={item.nome}
                            />
                        )}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 22
    },
    foto: {
        width: 180,
        height: 180,
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
    }
})

export default sobreMim