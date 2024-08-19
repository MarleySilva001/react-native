import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import { useState } from 'react';
import Input from './textInput';

function Index() {
    const [conta, setConta] = useState(7320.92)
    const [valor, setValor] = useState('')

    const Transacao = (tipo) => {
        const Valor = parseFloat(valor.replace(',','.'))
        switch (tipo) {
            case 'saque':
                if (Valor > conta) {
        
                    alert('saldo indisponível')
                }else{
                const multa = (conta - Valor) * 0.025
                setConta(conta - Valor - multa)
            }
                break;

            case 'deposito':
                const bonus = Valor * 0.01
                setConta(conta + Valor + bonus)
                break;
        
            default:
                break;
        }
        setValor('')
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/santanderLogo.png')}
            />
            <Text style={styles.titulo}>SALDO ATUAL NA CONTA</Text>
            <Text style={styles.conta}>R${conta.toFixed(2).replace('.',',')}</Text>
            <Text style={styles.p}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
            <Input
                value={valor}
                onChangeNumber={setValor}
            />
            <Button
                title={'SACAR'}
                onPress={() => { Transacao('saque') }}
            />
            <Button
                title={'DEPOSITO'}
                onPress={() => { Transacao('deposito') }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 14
    },
    logo: {
        width: '80%',
        height: '15%'
    },
    titulo: {
        color: '#919191',
        fontSize: 18,
    },
    conta: {
        fontWeight: 'bold',
        fontSize: 36,
    },
    p: {
        textAlign: 'center',
    },
})
export default Index;