import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { CiUser, CiLock, CiMail } from "react-icons/ci";
import Input from "./Input";

const App = () => {
    const [formData, setFormData] = useState({
        usuario:'',
        email:'',
        senha:'',
    })

    const handleInputChange = (name,value) => {
        setFormData ({
            ...formData,
            [name]: value
        })
    }

    const handleButton = () => {
        fetch('https://taskhub-s37f.onrender.com/auth/signup',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.usuario,
                    email: formData.email,
                    password: formData.senha
                })
            })
            .then(response => response.json())
            .then(data => { 
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Task Hub</Text>
            <Text>Crie seu usuario enviando Nome, email e password</Text>
            <Text style={styles.secondTitle}>Sign Up</Text>
            <View style={styles.inputList}>
                <Input
                    nome={'usuario'}
                    value={formData.usuario}
                    onChangeText={(value) => handleInputChange('usuario', value)}
                />
                <Input
                    nome={'email'}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                />
                <Input
                    nome={'senha'}
                    value={formData.senha}
                    onChangeText={(value) => handleInputChange('senha', value)}
                />
            </View>
            <Pressable style={styles.button}
            onPress={handleButton}
            >
                <Text style={{color: "white", fontWeight: 'medium'}}> Cadastrar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    mainTitle: {
        fontWeight: '900',
        fontSize: 42
    },
    secondTitle: {
        fontWeight: '760',
        fontSize: 24
    },
    inputList: {
        gap: 12,
    },
    button: {
        backgroundColor: '#3A7CFF',
        paddingHorizontal: 90,
        paddingVertical: 6,
        borderRadius: 8,
        marginVertical: 10
    }
})

export default App;