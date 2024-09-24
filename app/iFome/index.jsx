import { Text, View, FlatList, Pressable, Image, StyleSheet } from "react-native";
import Bar from "../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { Link } from "expo-router";

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
            nome: 'Cheesebúrger',
            provedor: 'Caliu Lanches',
            valor: 22.50,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXV7tWV/200/200/original?country=br',
            descricao: 'Hambúrger com 1 fatia de carne bovina, queijo cheddar, tomate, picles e cebola.'
        },
        {
            id: '3',
            nome: 'Duplobúrger',
            provedor: 'Caliu Lanches',
            valor: 31.50,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXjtUHf/200/200/original?country=br',
            descricao: 'Hambúrger com 1 fatia de carne bovina, queijo cheddar, tomate, picles, cebola, alface e molho.'
        },
        {
            id: '4',
            nome: 'Esfiha de Carne',
            provedor: 'Murad Foods',
            valor: 4.20,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXV7tWV/200/200/original?country=br',
            descricao: 'Esfiha de Carne redonda aberta. Por unidade'
        },
        {
            id: '5',
            nome: 'Pastel de Frango',
            provedor: 'Fritos do Pedroca',
            valor: 19.90,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXV7tWV/200/200/original?country=br',
            descricao: 'Pastel de Frango com requeijão.'
        },
        {
            id: '6',
            nome: 'Milkshake de Morango',
            provedor: 'MickeyShakes',
            valor: 14.50,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kJX8kVfQ/200/200/original?country=br',
            descricao: 'Sorvete de Morango batido com leite e calda de morango. 300ml'
        },
        {
            id: '7',
            nome: 'Coca-Cola',
            provedor: 'Bebidas do Theago',
            valor: 5.00,
            quantidade: 0,
            imagem: 'https://www.imagensempng.com.br/wp-content/uploads/2022/01/2442.png',
            descricao: 'Lata de Coca-Cola. 500ml'
        },
        {
            id: '8',
            nome: 'Fanta Laranja',
            provedor: 'Bebidas do Theago',
            valor: 5.00,
            quantidade: 0,
            imagem: 'https://sudoestedistribuidora.com.br/wp-content/uploads/2023/02/REFRIGERANTE-FANTA-LARANJA-LATA-350ML.png',
            descricao: 'Lata de Fanta Laranja. 500ml'
        },
    ]);

    const alterarQuantidade = (id, tipo) => {
        setCardapio(prevCardapio => {
            const updatedCardapio = prevCardapio.map(item => {
                if (item.id === id) {
                    const novaQuantidade = tipo === 'incrementar' ? item.quantidade + 1 : item.quantidade > 0 ? item.quantidade - 1 : 0;
                    return { ...item, quantidade: novaQuantidade };
                }
                return item;
            });
            const totalItens = updatedCardapio.reduce((total, item) => total + item.quantidade, 0);
            setCarrinho(totalItens);
            return updatedCardapio;
        });
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
                <View style={styles.littleCar}>
                    <Link href={'iFome/carrinho'}>
                        <Pressable style={styles.littleCar}>
                            <AntDesign name="shoppingcart" size={24} color="#E11515" />
                            <Text style={{ marginLeft: 4 }}>{carrinho} itens</Text>
                        </Pressable>
                    </Link>
                </View>
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
                                <View>
                                    <Text style={styles.titulo}>{item.nome}</Text>
                                    <Text style={styles.subtitulo}>{item.provedor}</Text>
                                </View>
                                <Text style={styles.p}>{item.descricao}</Text>
                                <View style={styles.bottomInfo}>
                                    <Text style={styles.valor}>R${item.valor.toFixed(2).replace('.', ',')} </Text>
                                    <View style={styles.qtdContainer}>
                                        <Pressable onPress={() => alterarQuantidade(item.id, 'decrementar')}>
                                            <Entypo name="minus" size={20} color="red" />
                                        </Pressable>
                                        <Text style={styles.qtdbox}>{item.quantidade}</Text>
                                        <Pressable onPress={() => alterarQuantidade(item.id, 'incrementar')}>
                                            <Entypo name="plus" size={20} color="red" />
                                        </Pressable>
                                    </View>
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
        backgroundColor: '#f9f9f9',
    },
    foto: {
        width: 100,
        height: 100,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginVertical: 3,
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        elevation: 1,
        shadowOpacity: 0.18,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 2,
        }
    },
    info: {
        width: 220,
        gap: 4
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18,
    },
    subtitulo: {
        fontSize: 13,
        color: 'gray',
    },
    valor: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    p: {
        fontSize: 11,
        minHeight:26,
        fontWeight: 'thin'
    },
    qtdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 8,
        borderWidth: 2,
        justifyContent: 'center',
        width: 80,
    },
    qtdbox: {
        fontSize: 14,
        fontWeight: 600,
        paddingHorizontal: 12,
        color: 'black',
        textAlign: 'center',
    },
    littleCar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 3,
        paddingHorizontal: 12,
    },
    bottomInfo:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default iFome;