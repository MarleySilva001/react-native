import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import { Picker } from "@react-native-picker/picker";
import Bar from "../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from "expo-linear-gradient";

const Pokemon = () => {

    const [pokemon, setPokemon] = useState('')
    const [tipo, setTipo] = useState('')
    const [listaPokemon, setListaPokemon] = useState([])
    const [listaTipo, setListaTipo] = useState([])
    const [pokemonFiltrado, setPokemonFiltrado] = useState([])
    const [sprite, setSprite] = useState('')

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
            .then((resposta) => resposta.json())
            .then((dados) => setListaPokemon(dados.results))
            .catch(() => console.log('Aconteceu um erro ao buscar os pokémons.'));
    }, []);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type?limit=20000')
            .then(resposta => resposta.json())
            .then(dados => setListaTipo(dados.results))
            .catch()
    }, [])
    useEffect(() => {
        if (tipo) {
            fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
                .then((resposta) => resposta.json())
                .then((dados) => {
                    const pokemonsFiltrados = dados.pokemon.map((p) => p.pokemon);
                    setPokemonFiltrado(pokemonsFiltrados);
                })
                .catch(() => console.log('Ocorreu um erro ao buscar os pokémons por tipo.'));
        } else {
            setPokemonFiltrado(listaPokemon);
        }
    }, [tipo, listaPokemon]);

    useEffect(() => {
        if (pokemon) {
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((resposta) => resposta.json())
            .then((dados) => setSprite(dados.sprites.front_default)) 
            .catch(() => console.log('Ocorreu um erro ao buscar a sprite do pokémon.'));
        } else {
          setSprite(''); 
        }
      }, [pokemon]);

    return (
        <>
        <Bar 
        icon={<Entypo name="home" size={24} color="white" />}
        Titulo={<Image
            style={styles.foto} 
            source={require('../../assets/images/pokemon.png')}
        />}
        href={'/'}
        cor={'#EE2000'}
        />
            <View style={styles.container}>
            <LinearGradient 
            style={styles.background}
            colors={['white','white','#E5F7FF','#CBF4FF','#89E4FF','#50B9FF']}
            />
                <View style={styles.pickerView}> 
                    <Text style={styles.ptype}>Selecione o tipo</Text>
                    <Picker
                        selectedValue={tipo}
                        onValueChange={(item) => setTipo(item)}
                    >
                        <Picker.Item label='Selecione um tipo' />
                        {listaTipo.map((item, index) => (
                            <Picker.Item key={index} label={item.name} value={item.name} />

                        ))}

                    </Picker>
                    {tipo ?
                        <>
                            <View>
                                <Text style={styles.ptype}>Selecione o pokemon</Text>
                                <Picker
                                    selectedValue={pokemon}
                                    onValueChange={(item) => setPokemon(item)}
                                >
                                    <Picker.Item label='Selecione um pokemon' />
                                    {pokemonFiltrado.map((item, index) => (
                                        <Picker.Item key={index} label={item.name} value={item.name} />

                                    ))}

                                </Picker>
        
                                {sprite ? (
        <View>
          <Image source={{ uri: sprite }} style={{ width: 300, height: 300, marginTop: 30, }} />
        </View>
      ) : null}
                            </View>
                        </>
                        : ''}
                </View>
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    foto: {
        width: 120,
        height: 40,
    },
    pickerView: {
        justifyContent: 'flex-start',
        minHeight: 500
    },
    ptype: {
        width: 300,
        marginBottom: 3,
        textAlign: 'center',
        fontWeight: '100',
        fontSize: 18,
    }
})

export default Pokemon;