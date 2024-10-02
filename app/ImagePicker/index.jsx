import { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import Bar from "../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker'



export default function ImagePickerTest() {
    const [image, setImage] = useState('');

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
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/'}
                Titulo={'Image Picker'}
                cor={'#00BF66'}
            />
        <View style={styles.container}>
            <Button title="Pick a Image" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        </>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        objectFit: 'cover',
        width: 300,
        height: 300
    }
})