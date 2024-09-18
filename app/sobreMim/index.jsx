import { ScrollView, StyleSheet, Text, View, Pressable, Image, FlatList } from "react-native"
import ButtonSM from "./buttonSM"
import { Link } from "expo-router"

const sobreMim = () => {
    const data = [
        {
            id: '1',
            nome: 'Desenhos',
            href: 'sobreMim/desenho'
        },
        {
            id: '2',
            nome: 'Musicas',
            href: 'sobreMim/musica'
        }
    ]
    return(
        <View style={styles.container}>
            <Text>HEADER</Text>
            <Image 
            style={styles.foto}
            source={require('../../assets/images/rio2016.png')}
            />
            <Text style={styles.h1}>Bem-Vindo(a) ao meu App</Text>
            <Text style={styles.p}>Olá sou um aluno da escola Sesi, estou cursando o terceiro ano do Ensino Médio integrado com o curso de Análise e Desenvolvimento de Sistemas. Nesse App pretendo mostra algumas coisas que eu gosto.</Text>
        <View>
            <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>(
                <ButtonSM 
                href={item.href}
                text={item.nome}
                />
            )}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
foto:{
    width: 200,
    height: 200,
    borderRadius: 50,
},
h1:{
    fontWeight: 'bold',
    fontSize: 34
},
p:{
    width:350
}
})

export default sobreMim