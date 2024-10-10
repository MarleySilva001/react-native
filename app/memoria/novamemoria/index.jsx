import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import Bar from "../../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker'
import { View } from "react-native";


const NewMemory = () => {
    const [image, setImage] = useState('')

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
      
    }

    return (
        <>
            <Bar
                Titulo={'Adicionar Memória'}
                href={'/memoria'}
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                cor={'#6600FF'}
            />
            <SafeAreaView style={styles.container}>
                <View>
                <TextInput 
                placeholder="Titulo"
                value=""
                style={styles.input}
                />
                <TextInput 
                placeholder="ano"
                value=""
                style={styles.input}
                />
                <TextInput 
                placeholder="localização"
                value=""
                style={styles.input}
                />
                <TextInput 
                placeholder="Descrição"
                value=""
                style={styles.input}
                />
                <Pressable
                onPress={pickImage}
                >
                <FontAwesome name="photo" size={24} color="black" />
                <Text>Adicionar foto</Text>
                </Pressable>
                </View>
                <Pressable>
                    <Text>Adiconar</Text>
                </Pressable>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
        flexDirection: 'column'
    }
})

export default NewMemory