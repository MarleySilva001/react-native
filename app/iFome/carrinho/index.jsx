import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../scripts/appContext";
import { Text, FlatList, View, StyleSheet } from "react-native";
import Bar from "../../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import { Pressable } from "react-native";

const Carrinho = () => {
    const { cardapio, carrinho, alterarQuantidade } = useContext(AppContext);

    useEffect(() => {
        console.log("Carrinho atualizado:", cardapio);
    }, [cardapio, carrinho]);

    return (
        <>
            <Bar
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/iFome'}
                Titulo={'Carrinho'}
                cor={'#E11515'}
            />
            <View>
                <FlatList
                    data={cardapio.filter(item => item.quantidade > 0)} 
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.info}>
                                <Text style={styles.titulo}>{item.nome}</Text>
                                <Text style={styles.subtitulo}>{item.provedor}</Text>
                                <Text style={styles.valor}>R${item.valor.toFixed(2).replace('.', ',')}</Text>
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
                    )}
                />
            </View>
        </>
    );
};

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


export default Carrinho;
