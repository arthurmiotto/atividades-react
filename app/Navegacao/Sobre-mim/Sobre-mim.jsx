import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const SobreMim = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre Mim</Text>
      <Text style={styles.texto}>Tenho 17 anos.</Text>
      <Text style={styles.texto}>Sou desenvolvedor mobile iniciante</Text>
      <Text style={styles.texto}>Estudo na escola Sesi/sc</Text>
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

export default SobreMim;