import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Picker } from 'react-native';

const cartas = [
  { id: 'MAG', nome: 'Mago Negro', poder: 2500, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgElLgD1x-P5lUVOs6DGGLwOg2g5TEJ_jkyYMhPgCYuogexhoodm0wrfXK9M_JFb95mB9FHj_5oaFy90w5H_Mz6u8YMxARHMGYvUIEuM1r5p4fkCa6XQTPMcSxyGcjA78y_URdaSZO9TqTDsHTWIER_9VCkfz3xq8RbXSjXOMFsTTv2x5PXmuydquG7kQ/w440-h640/Mago%20Negro.png' },
  { id: 'EXO', nome: 'Exódia', poder: 8000, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuQOeRhdyHWYbQHMVoXiA82v9ecwVC9f-hhdrlkU7WfdLz2zT9ODNHMgObmTUhNArBLbaIVgDbIXSZrWHMhlUrIsNVXHyUMggWTUR1YPpZJJ5P_HyMvR8WoQrBwcJqqJFrSWWz6tiNNAt5NzMJYPh14moJtJUzxTLBI0vE9JAx18eWNDV9_a0_SA5raQ/w440-h640/1.png' },
  { id: 'REI', nome: 'Rei Caveira', poder: 3500, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBH55gRcknhfXRseqKRPHstsZtrSSw6iO_2t391HAAjBHIQBWZjSllABMGDtg69BsFSa09VmgFuMj5spmIe5T2tFCm5CXPz-oa5XWr0N6F8_6UngjN8QOM-oSwzHljw66P8t0y__IxiFj6ynt4JVX37pT8_zJb5vv-fPVy4VQtAViNJRtXzgRxAZxtVQ/w440-h640/Rei%20Caveira.png' },
  { id: 'DRA', nome: 'Dragão Bebê', poder: 1000, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_KPxiY4waZHV0nmdm-iVE9IVCfQIANuLcufOI8-t6Ju9ymw_0ZuqYFF83f5_HtUDJ3jEH72QLyi1r9mNTJS-PuhdtrDttQ86DIKtb6HfIKpQJ2GRSzDYL7laQANi1rDavkjDh9RePobPg/w440-h640/BEBEDRAS.png' },
];

const App = () => {
  const [carta1, setCarta1] = useState(cartas[0]);
  const [carta2, setCarta2] = useState(cartas[1]);
  const [resultado, setResultado] = useState('');

  const duel = () => {
    if (carta1.poder > carta2.poder) {
      setResultado(`${carta1.nome} vence com ${carta1.poder} pontos!`);
    } else if (carta2.poder > carta1.poder) {
      setResultado(`${carta2.nome} vence com ${carta2.poder} pontos!`);
    } else {
      setResultado('Empate!');
    }
  };

  const clearInputs = () => {
    setCarta1(cartas[0]);
    setCarta2(cartas[1]);
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Cartas Yu-Gi-Oh</Text>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Escolha a Carta A:</Text>
        <Picker
          selectedValue={carta1.id}
          style={styles.picker}
          onValueChange={(itemValue) => setCarta1(cartas.find(carta => carta.id === itemValue))}
        >
          {cartas.map(carta => (
            <Picker.Item key={carta.id} label={carta.nome} value={carta.id} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Escolha a Carta B:</Text>
        <Picker
          selectedValue={carta2.id}
          style={styles.picker}
          onValueChange={(itemValue) => setCarta2(cartas.find(carta => carta.id === itemValue))}
        >
          {cartas.map(carta => (
            <Picker.Item key={carta.id} label={carta.nome} value={carta.id} />
          ))}
        </Picker>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardName}>{carta1.nome}</Text>
          <Image source={{ uri: carta1.imagem }} style={styles.cardImage} />
          <Text style={styles.cardPower}>Pontos de Poder: {carta1.poder}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardName}>{carta2.nome}</Text>
          <Image source={{ uri: carta2.imagem }} style={styles.cardImage} />
          <Text style={styles.cardPower}>Pontos de Poder: {carta2.poder}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={duel}>
          <Text style={styles.buttonText}>Duelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#003300'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFF00' 
  },
  pickerContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#FFFF00'
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000000'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20
  },
  card: {
    width: '45%',
    alignItems: 'center',
    backgroundColor: '#009900', 
    padding: 20,
    borderRadius: 10,
  },
  cardName: {
    fontSize: 20,
    color: '#FFFFFF' 
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  cardPower: {
    fontSize: 18,
    color: '#FFFF00' 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#006600', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF' 
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
    color: '#FFFF00' 
  }
});

export default App;
