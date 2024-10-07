import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";

export default camera = () => {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [facing, setFacing] = useState('back')

    if (!permissao) {
        return (
            <View></View>
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

    const salvarFoto = () => {
        MediaLibrary.saveToLibraryAsync(foto.uri)
    }

    return (
        <View style={styles.container}>
            {foto ?
                <View style={styles.container}>
                    <Button title='Descatar foto' onPress={() => setFoto(null)} />
                    <Button title='salvar na galeria' onPress={salvarFoto} />
                    <Image
                        source={{ uri: foto.uri }}
                        style={styles.foto}
                    />
                </View>
                :
                <CameraView
                    facing={facing}
                    style={styles.camera}
                    ref={cameraRef}
                >
                    <Button title='tirar foto' onPress={tirarFoto} />
                    <Button title='trocar camera' onPress={trocaCamera} />
                </CameraView>
            }
        </View>
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
        flex: 1
    },
    foto: {
        height: '100%',
        width: '100%'
    }
}) 