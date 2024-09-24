import { Text, View, FlatList, Pressable, Image, StyleSheet } from "react-native";
import Bar from "../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";


const iFome = () => {
    const [carrinho, setCarrinho] = useState(0)
    const [cardapio, setCardapio] = useState([
        {
            id: '1',
            nome: 'Pizza de Calabresa',
            provedor: 'Pizzaria do Zé',
            valor: 57.90,
            quantidade: 0,
            imagem: 'https://sgnh.com.br/wp-content/uploads/2021/07/pizza_calabresa.png',
            descricao: 'Pizza de Calabresa tamanho médio com 6 fatias.'
        },
        {
            id: '2',
            nome: 'Hambúrger de Cheddar',
            provedor: 'Caliu Lanches',
            valor: 22.50,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXV7tWV/200/200/original?country=br',
            descricao: 'Hambúrger com 1 fatia de carne bovina, queijo cheddar, tomate, picles e cebola.'
        },
    ]);

    const alterarQuantidade = (id, tipo) =>{
        setCardapio(prevCardapio =>
            prevCardapio.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantidade:
                            tipo === 'incrementar' ? item.quantidade + 1 : item.quantidade > 0 ? item.quantidade - 1 : 0,
                    }
                    : item
            ),
            console.log(cardapio)
        );
    }

    return (
        <>
            <Bar
                icon={<Entypo name="home" size={24} color="white" />}
                href={'/'}
                Titulo={'iFome'}
                cor={'#E11515'}
            />
            <View style={styles.container}>
                <Text>{carrinho} itens</Text>
                <FlatList
                    data={cardapio}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image
                                style={styles.foto}
                                source={{ uri: item.imagem }}
                            />
                            <View style={styles.info}>
                                <Text style={styles.titulo}>{item.nome}</Text>
                                <Text style={styles.subtitulo}>{item.provedor}</Text>
                                <Text style={styles.p}>{item.descricao}</Text>
                                <Text style={styles.valor}>R${item.valor.toFixed(2).replace('.', ',')} </Text>
                                <View style={styles.qtdContainer}>
                                    <Pressable onPress={() => alterarQuantidade(item.id, 'decrementar')}>
                                        <Text style={styles.qtdbox}>-</Text>
                                        </Pressable>
                                    <Text style={styles.qtdbox}>{item.quantidade}</Text>
                                    <Pressable onPress={() => alterarQuantidade(item.id, 'incrementar')}>
                                        <Text style={styles.qtdbox}>+</Text>
                                        </Pressable>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
    },
    info: {
        width: 240
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
    },
    subtitulo: {
        color: 'gray',
    },
    valor: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    p: {
        fontSize: 12,
        fontWeight: 'thin'
    },
    qtdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
    },
    qtdbox: {
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 4,
        color: 'black',
    },
})

export default iFome;