import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker";

const Pokemon = () => {

    const [pokemon, setPokemon] = useState('')
    const [tipo, setTipo] = useState('')
    const [listaPokemon, setListaPokemon] = useState([])
    const [listaTipo, setListaTipo] = useState([])

    // const lista_pokemons = [
    //     {nome:'Charizard', id:1,
    //     {nome:'Blastoise', id:2},
    //     {nome:'Venosaur', id:3},
    // ]

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1500')
            .then(resposta => resposta.json())
            .then(dados => setListaPokemon(dados.results))
            .catch()
    }, [])
console.log(listaPokemon)
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type?limit=30')
            .then(resposta => resposta.json())
            .then(dados => setListaTipo(dados.results))
            .catch()
    }, [])

    return (
        <View>
            <View>
                <Text>Selecione o tipo</Text>
                <Picker
                    selectedValue={tipo}
                    onValueChange={(item) => setTipo(item)}
                >
                    <Picker.Item label='Selecione um tipo' />
                    {listaTipo.map((item, index) => (
                        <Picker.Item key={index} label={item.name} value={item.name} />

                    ))}

                </Picker>
                {tipo ? <Text>Você selecionou o {tipo}</Text> : ''}
            </View>
            <View>
                <Text>Selecione o pokemon</Text>
                <Picker
                    selectedValue={pokemon}
                    onValueChange={(item) => setPokemon(item)}
                >
                    <Picker.Item label='Selecione um pokemon' />
                    {listaPokemon.map((item, index) => (
                        <Picker.Item key={index} label={item.name} value={item.name} />

                    ))}

                </Picker>
                {pokemon ? <Text>Você selecionou o {pokemon}</Text> : ''}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Pokemon;