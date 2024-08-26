import React from 'react';
import { Image, Modal, StyleSheet, Text, View, Pressable } from 'react-native';
import Button from './Button';
import { useState } from 'react';
import Input from './textInput';

function Index() {
    const [conta, setConta] = useState(7320.92)
    const [valor, setValor] = useState('0')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [type, setType] = useState('')

    const handleButton = (tipo) => {
        const Valor = parseFloat(valor.replace(',', '.'))
        if (Valor > conta && tipo === 'saque') {
            alert('saldo indisponível')
        }
        else {
            setIsModalOpen(true)
            setType(tipo)
            return
        }
    }
    const handleConfirm = () => {
        setConfirm(true)
        Transacao(type)
    }
    const Transacao = (tipo) => {
        const Valor = parseFloat(valor.replace(',', '.'))
        switch (tipo) {
            case 'saque':
                const multa = (conta - Valor) * 0.025
                setConta(conta - Valor - multa)
                break;

            case 'deposito':
                const bonus = Valor * 0.01
                setConta(conta + Valor + bonus)
                break;

            default:
                break;
        }
        setValor('0')
        setIsModalOpen(!isModalOpen)
    }

    const valorFinal = () => {
        const Valor = parseFloat(valor.replace(',', '.'));
        if (type === 'saque') {
            return conta - Valor - (conta - Valor) * 0.025;
        }
        if (type === 'deposito') {
            return conta + Valor + Valor * 0.01;
        }
        return conta;
    };


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/santanderLogo.png')}
            />
            <Text style={styles.titulo}>SALDO ATUAL NA CONTA</Text>
            <Text style={styles.conta}>R${conta.toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.p}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
            <Input
                value={valor}
                onChangeNumber={setValor}
            />
            <Button
                title={'SACAR'}
                onPress={() => { handleButton('saque') }}
            />
            <Button
                title={'DEPOSITO'}
                onPress={() => { handleButton('deposito') }}
            />
            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => {
                    setIsModalOpen(!isModalOpen)
                }}
            >
                <View style={styles.center}>
                    <View style={styles.modalBody}>
                        <View style={styles.end}>
                            <Pressable
                                style={styles.closeBnt}
                                onPress={() => setIsModalOpen(!isModalOpen)}
                            ><Text>X</Text></Pressable>
                        </View>
                        <View style={styles.center}>
                            <Text style={styles.p}>
                                Tem certeza que deseja realizar essa operação?
                            </Text>
                            <View style={styles.column}>
                                <Text>valor Atual:R${conta.toFixed(2).replace('.',',')}</Text>
                                <Text>valor Final:R${valorFinal().toFixed(2).replace('.',',')}</Text>
                            </View>
                            <View style={styles.confirm}>
                                <Pressable
                                    style={styles.confirmBnt}
                                    onPress={() => handleConfirm()}
                                ><Text>confirmar</Text></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
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
        width: '90%',
        height: '10%'
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
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBody: {
        backgroundColor: 'white',
        width: '84%',
        minHeight:200,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
    },
    end: {
        alignItems: 'flex-end',
        marginBottom: 8,
    },
    closeBnt: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20
    },
    column: {
        flexDirection: 'column',
        paddingVertical: 14
    },
    confirm: {
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        width: '100%',
        paddingVertical: 6,
        borderRadius: 4,
    },
    confirmBnt: {
        width: '100%',
        alignItems: 'center'
    }
})
export default Index;