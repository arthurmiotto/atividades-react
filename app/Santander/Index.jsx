import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';

function Button({ onPress, title }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

function Input({ value, onChangeNumber }) {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeNumber}
            placeholder='0,00'
            keyboardType='numeric'
        />
    );
}

function Index() {
    const [conta, setConta] = useState(1000.00);
    const [valor, setValor] = useState('');

    const Transacao = (tipo) => {
        const Valor = parseFloat(valor.replace(',', '.'));
        switch (tipo) {
            case 'saque':
                if (Valor > conta) {
                    alert('saldo indisponível');
                } else {
                    const multa = (conta - Valor) * 0.025;
                    setConta(conta - Valor - multa);
                }
                break;

            case 'deposito':
                const bonus = Valor * 0.01;
                setConta(conta + Valor + bonus);
                break;

            default:
                break;
        }
        setValor('');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/santander.png')}
            />
            <Text style={styles.titulo}>SALDO NA CONTA</Text>
            <Text style={styles.conta}>R${conta.toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.p}>Digite o valor da operação bancária abaixo:</Text>
            <Input value={valor} onChangeNumber={setValor} />
            <Button title={'SACAR'} onPress={() => Transacao('saque')} />
            <Button title={'DEPOSITAR'} onPress={() => Transacao('deposito')} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 3,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        backgroundColor: '#EBEBEB',
        fontSize: 18,
        padding: 6,
        marginBottom: 12,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 14,
    },
    logo: {
        width: '20%',
        height: '40%',
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
});

export default Index;
