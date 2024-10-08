import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button, Pressable, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";

export default camera = () => {
    const [permissao, pedirPermissao] = useCameraPermissions()

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

    return (
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        },
});