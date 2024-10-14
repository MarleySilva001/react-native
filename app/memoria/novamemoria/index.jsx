import { useEffect, useState } from "react";
import { View, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, Button } from "react-native";
import Bar from "../../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Link, useRouter } from "expo-router";


const NewMemory = () => {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [formData, setFormData] = useState({
        Titulo: '',
        Ano: '',
        Localizacao: '',
        Descricao: '',
        Img: ''
    })
    const [image, setImage] = useState('')
    const router = useRouter()

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            handleChangeInput('Img', result.assets[0].uri)
            console.log(result.assets[0].uri)
        }
    }
    
    const openCamera = () => {
        if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text >Você precisa concender a permissão para usar a camera</Text>
                <Button
                    title='pedir permissao' onPress={pedirPermissao} />
            </View>
        )
    }
    else{
        return(
            <CameraView>

            </CameraView>
        )
    }
    }

    const handleChangeInput = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const storeData = async (novaMemoria) => {
        if (novaMemoria.Ano === '' || novaMemoria.Titulo === '' || novaMemoria.Img === '' || novaMemoria.Descricao === '' || novaMemoria.Localizacao === '') {
            alert('preencha todos os campos')
        }
        else {
            try {
                const memoriaArmazenada = await AsyncStorage.getItem('memoria');
                const array = memoriaArmazenada ? JSON.parse(memoriaArmazenada) : [];
                array.push(novaMemoria)
                const jsonArray = JSON.stringify(array);
                await AsyncStorage.setItem('memoria', jsonArray);
                router.push('/memoria')
            } catch (e) {
                console.log(e)
            }
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
                        onChangeText={(value) => handleChangeInput('Titulo', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Ano"
                        value={formData.Ano}
                        onChangeText={(value) => handleChangeInput('Ano', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Localizacao"
                        value={formData.Localizacao}
                        onChangeText={(value) => handleChangeInput('Localizacao', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Descricao"
                        value={formData.Descricao}
                        onChangeText={(value) => handleChangeInput('Descricao', value)}
                        style={styles.input}
                    />
                    <View style={styles.btnsImgRow}>
                        <Pressable
                            style={styles.btnimg}
                            onPress={pickImage}
                        >
                            <FontAwesome name="photo" size={24} color="#6600FF" />
                            <Text style={styles.pimg}>Adicionar foto</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnimg}
                            onPress={openCamera}
                        >
                            <FontAwesome name="camera-retro" size={24} color="#6600FF" />
                            <Text style={styles.pimg}>Tirar foto</Text>
                        </Pressable>
                    </View>
                    {image && <Image style={styles.foto} source={{ uri: image }} />}
                </View>
                <Pressable style={styles.btn} onPress={() => storeData(formData)}>
                    <Text style={styles.p}>Adicionar</Text>
                </Pressable>
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
    btnsImgRow:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        marginLeft: 6
    }
})

export default NewMemory