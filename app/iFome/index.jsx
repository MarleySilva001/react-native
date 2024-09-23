import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import Bar from "../../components/Bar";
import { MdHome } from "react-icons/md";


const iFome = () => {
    const cardapio = [
        {
            id: '1',
            nome: 'Pizza',
            valor: '50,00',
            imagem: '',
        }
    ]

    return(
        <>
            <Bar
                icon={<MdHome />}
                href={'/'}
                Titulo={'iFome'}
                cor={'#E11515'}
            />
            <View>
                <FlatList 
                    data={cardapio}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View >
                            <Image 
                                source={{ uri: item.imagem }}
                            />
                            <Text >{item.nome}</Text>
                            <Text >{item.valor} </Text>
                        </View>
                    )}
                />
            </View>
            </>
    )
}

export default iFome;