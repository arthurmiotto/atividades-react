import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable, TextInput, SafeAreaView } from "react-native";
import { Link } from 'expo-router'

const Data = [
  {
    id: '1',
    nome: 'Estudar',
    feito: false
  },
  {
    id: '2',
    nome: 'Tirar o lixo',
    feito: false
  },
  {
    id: '3',
    nome: 'Lavar a louça',
    feito: false
  },
  {
    id: '4',
    nome: 'Arrumar a cama',
    feito: false
  }
]

const Item = ({ item, onPress, onDelete }) => (
  <View style={styles.line}>
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: pressed ? '#e0e0e0' : '#ffffff', 
          elevation: pressed ? 5 : 0,
        }
      ]}
    >
      <Text style={{ textDecorationLine: item.feito ? 'line-through' : 'none', color: '#000000' }}>
        {item.nome}
      </Text>
    </Pressable>
    <Pressable onPress={onDelete} style={styles.deleteButton}>
      <Text style={styles.deleteText}>X</Text>
    </Pressable>
  </View>
);


const ListaTarefa = () => {
  const [data, setData] = useState(Data);
  const [novoItem, setNovoItem] = useState(''); 

  const adicionarTarefa = () => {
    if (novoItem.trim() !== '') {
      const novoId = (data.length + 1).toString(); 
      const novaTarefa = { id: novoId, nome: novoItem, feito: false };
      setData([...data, novaTarefa]);
      setNovoItem(''); 
    }
  }

  const concluirTarefa = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, feito: !item.feito } : item
    );
    setData(updatedData);
  };

  const excluirTarefa = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => concluirTarefa(item.id)}
      onDelete={() => excluirTarefa(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          value={novoItem}
          onChangeText={setNovoItem}
        />
        <Pressable 
          style={styles.inputbnt}
          onPress={adicionarTarefa} 
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', 
    padding: 12,
    backgroundColor: '#ffffff', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000', 
  },
  line: {
    flexDirection: 'row',
    marginBottom: 2.5,
    width: '100%',
    alignItems: 'center', 
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 8, 
    borderWidth: 1,
    borderColor: '#007BFF', 
    borderRadius: 5,
    marginRight: 8, 
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#007BFF', 
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#ffffff', 
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  inputbnt: {
    backgroundColor: '#007BFF', 
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  listContainer: {
    width: '100%', 
  },
});

export default ListaTarefa;
