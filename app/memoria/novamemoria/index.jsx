import { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import Bar from "../../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker'
import { View } from "react-native";
import { Link } from "expo-router";


const NewMemory = () => {
    const [formData, setFormData] = useState({
        Titulo: '',
        Ano: '',
        Localizacao: '',
        Descricao: '',
        Img: ''
    })
    const [image, setImage] = useState('')

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            handleChangeInput('Img',result.assets[0].uri)
            console.log(result.assets[0].uri)
        }
    }

    const handleChangeInput = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const storeData = async (value) => {
        try {
            
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('memoria', jsonValue);
            console.log(AsyncStorage.getItem('memoria'))
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <Bar
                Titulo={'Adicionar Memória'}
                href={'/memoria'}
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                cor={'#6600FF'}
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Titulo"
                        value={formData.Titulo}
                        onChangeText={(value) => handleChangeInput( 'Titulo', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Ano"
                        value={formData.Ano}
                        onChangeText={(value) => handleChangeInput( 'Ano', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Localizacao"
                        value={formData.Localizacao}
                        onChangeText={(value) => handleChangeInput( 'Localizacao', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Descricao"
                        value={formData.Descricao}
                        onChangeText={(value) => handleChangeInput( 'Descricao', value)}
                        style={styles.input}
                    />
                    <Pressable
                        style={styles.btnimg}
                        onPress={pickImage}
                    >
                        <FontAwesome name="photo" size={24} color="#6600FF" />
                        <Text style={styles.pimg}>Adicionar foto</Text>
                    </Pressable>
                    {image && <Image style={styles.foto} source={{ uri: image }} />}
                </View>
                <Link href={'/memoria'}>
                <Pressable style={styles.btn} onPress={() => storeData(formData)}>
                    <Text style={styles.p}>Adicionar</Text>
                </Pressable>
                </Link>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },
    form: {
        width: 340,
        minHeight: '50vh',
    },
    input: {
        height: 24,
        padding: 6,
        marginBottom: 10,
        backgroundColor: '#e8e8e8',
        fontSize: 16
    },
    btnimg: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    foto: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    btn: {
        backgroundColor: '#6600FF',
        width: 340,
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    p: {
        color: 'white',
        fontSize: 16,
    },
    pimg: {
        color: '#6600FF',
    }
})

export default NewMemory