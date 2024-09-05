import React,{ useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker";

const Pokemon = () => {

    const [pokemon,setPokemon] = useState('')
    const [listaPokemon, setListaPokemon] = useState([])

    // const lista_pokemons = [
    //     {nome:'Charizard', id:1, url:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png'},
    //     {nome:'Blastoise', id:2},
    //     {nome:'Venosaur', id:3},
    // ]

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(resposta => resposta.json())
        .then(dados => setListaPokemon(dados.results))
        .catch()
    },[])

    return(
        <View>
            <Text>Selecione</Text>
            <Picker
            selectedValue={pokemon}
            onValueChange={(item) => setPokemon(item)}
            >
                <Picker.Item label= 'Selecione um pokemon' />
                {listaPokemon.map((item, index) => (
                    <Picker.Item key={index} label={item.name}  value={item.name}/>
                    
                ))}

            </Picker>
            {pokemon?<Text>Você selecionou o {pokemon}</Text>: ''}
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Pokemon;