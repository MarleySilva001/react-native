import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button, Pressable, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";

export default camera = () => {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [facing, setFacing] = useState('back')

    if (!permissao) {
        return (
            <View />
        )
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.TextPermission} >Você precisa concender a permissão para usar a camera</Text>
                <Button
                    title='pedir permissao' onPress={pedirPermissao} />
            </View>
        )
    }

    const tirarFoto = async () => {
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 0.0000000000000000000000001,
            base64: true
        })
        setFoto(fotoBase64)
    }

    const trocaCamera = () => {
        setFacing(facing == 'back' ? 'front' : 'back')
    }

    const salvarFoto = async () => {
        try {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
            alert('Foto salva na galeria!');
        } catch (error) {
            console.error("Erro ao salvar a foto: ", error);
            alert('Erro ao salvar a foto.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {foto ?
                <SafeAreaView style={styles.container}>
                    <Button title='Descatar foto' onPress={() => setFoto(null)} />
                    <Button title='salvar na galeria' onPress={salvarFoto} />
                    <Image
                        source={{ uri: foto.uri }}
                        style={styles.foto}
                    />
                </SafeAreaView>
                :
                <CameraView
                    facing={facing}
                    style={styles.camera}
                    ref={cameraRef}
                >
                    <SafeAreaView>
                    <Pressable
                    onPress={tirarFoto}
                    style={styles.btn}
                    >
                        <Ionicons name="camera" size={44} color="black" />
                    </Pressable>
                    <Pressable
                    onPress={trocaCamera}
                    style={styles.btn}
                    >
                        <Ionicons name="camera-reverse-sharp" size={44} color="black" />
                    </Pressable>
                    
                    </SafeAreaView>
                </CameraView>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    TextPermission: {
        textAlign: 'center',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    foto: {
        height: '100%',
        width: '100%'
    }, 
    btn:{
        backgroundColor: 'white',
        width:66,
        height: 66,
        alignItems: 'center',
        justifyContent:"center",
        borderRadius: 50,
    }
}) 