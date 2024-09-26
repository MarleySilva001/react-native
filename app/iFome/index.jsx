import { Text, View, FlatList, Pressable, Image, StyleSheet } from "react-native";
import Bar from "../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useState } from "react";
import { Link } from "expo-router";
import { AppContext } from "../../scripts/appContext";

const iFome = () => {
    const {cardapio, setCardapio, carrinho, setCarrinho, alterarQuantidade} = useContext(AppContext)

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
                    <Link href={'iFome/carrinho'} style={styles.littleCar}>
                            <AntDesign name="shoppingcart" size={24} color="#E11515" />
                            <Text style={{ marginLeft: 4 }}>{carrinho} itens</Text>
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