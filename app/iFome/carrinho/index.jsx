import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../scripts/appContext";
import { Text, FlatList, View, StyleSheet } from "react-native";
import Bar from "../../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from "react-native";

const Carrinho = () => {
    const { cardapio, carrinho, pedido, alterarQuantidade } = useContext(AppContext);

    return (
        <>
            <Bar
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/iFome'}
                Titulo={'Carrinho'}
                cor={'#E11515'}
            />

            <View style={styles.container}>
                {carrinho === 0 ? <><View style={styles.carcontainer}><AntDesign name="shoppingcart" size={48} color="black" /> <Text style={styles.vazio}>O Carrinho esta vazio</Text></View></> : ''}
                <View style={styles.flatlist}>
                <FlatList
                    data={cardapio.filter(item => item.quantidade > 0)}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.info}>
                                <View>
                                    <Text style={styles.titulo}>{item.nome}</Text>
                                    <Text style={styles.subtitulo}>{item.provedor}</Text>
                                </View>
                                <View style={styles.align}>
                                    <Text style={styles.valor}>R${(item.valor * item.quantidade).toFixed(2).replace('.', ',')}</Text>
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
                {carrinho !== 0 ?
                <>
                    <View style={styles.pedidocontainer}> 
                    <View >
                        <Text style={styles.ppedido}>Total do Pedido</Text>
                        <Text style={styles.pedido}>R${pedido.toFixed(2).replace('.', ',')}</Text>
                    </View>
                        <Pressable style={styles.btnfinalizar}>
                            <Text style={styles.pfinalizar}>Finalizar Compra</Text>
                        </Pressable>
                    </View>
                    </> : ''}

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        marginVertical: 5
    },
    carcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pedidocontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingTop: 10,
        paddingBottom: 56
    },
    vazio: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22
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
    flatlist:{

        minHeight:'40vh',
        maxHeight: '40vh',
    },
    info: {
        justifyContent: 'space-around',
        gap: 20,
        flexDirection: 'row'
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18,
        width: 200
    },
    subtitulo: {
        fontSize: 13,
        color: 'gray',
    },
    valor: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    align: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3
    },
    p: {
        fontSize: 11,
        minHeight: 26,
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
    bottomInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnfinalizar: {
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#E11515',
        paddingVertical: 8,
        width: 280,
    },
    pfinalizar:{
        fontSize: 16,
        textAlign: 'center',
        color: '#E11515',
        fontWeight: '400'
    },
    ppedido: {
        textAlign: 'center'
    },
    pedido:{
        fontSize: 32,
        fontWeight: 'bold'
    }
})


export default Carrinho;
