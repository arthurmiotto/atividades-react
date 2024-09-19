import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const telaInicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à minha página</Text>
      <Text style={styles.texto}>Meu nome é Arthur</Text>
      <Text style={styles.texto}>Estou aprendendo React Native!</Text>
      <Text style={styles.texto}>Clique nos botões para saber mais!</Text>
      <View style={styles.buttonContainer}>
        <Link href="/Navegacao/Sobre-mim/Sobre-mim">
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sobre mim</Text>
          </Pressable>
        </Link>
        <Link href="/Navegacao/Contato/Contato">
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contato</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  texto: {
    fontSize: 18,
    marginVertical: 2,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 20, 
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 15, 
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default telaInicio;
