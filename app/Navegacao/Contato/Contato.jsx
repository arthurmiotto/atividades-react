import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const contato = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Me contrate</Text>
      <Text style={styles.texto}>Aqui abaixo está meu e-mail para contato 👇</Text>
      <Text style={styles.texto}>arthur_miotto@estudante.sesisenai.org.br</Text>
      <Link href="/Navegacao" asChild>
        <Text style={styles.link}>Voltar para a tela inicial</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  texto: {
    fontSize: 18,
    marginVertical: 3,
  },
  link: {
    color: '#007BFF',
    marginTop: 20,
  },
});

export default contato;
