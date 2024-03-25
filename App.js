import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


function BoxResultado(props) {
  return (
    <View style={styles.resultado}>
      <Text>IMC = {props.imc}</Text>
      <Text>{props.mensagemIMC}</Text>
    </View>
  );
}


export default function App() {

  const [peso, mudaPeso] = useState('');
  const [altura, mudaAltura] = useState('');
  const [IMC, setIMC] = useState(0);

  function CalcularIMC() {
    return setIMC((parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2));
  }

  function MensagemIMC() {
    let msg = '';
    if (IMC == 0) {
      msg = 'Digite os valores e aperte em calcular para obter o imc'
    } else if (IMC < 18.5) {
      msg = 'Você está abaixo do peso';
    } else if (IMC > 18.5 && IMC < 24.9) {
      msg = 'Você está com o peso ideal';
    } else if (IMC > 24.9 && IMC < 29.9) {
      msg = 'Você está com sobrepeso';
    } else {
      msg = 'Você está com obesidade'
    }
    return msg;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.textoGrande, { marginBottom: 15 }]}>Bem vindo ao app para verificar imc !</Text>
      <Text style={styles.textoMedio}>Digite o peso :</Text>
      <TextInput style={styles.input} placeholder='Peso...' keyboardType='numeric' onChangeText={texto => mudaPeso(texto)}></TextInput>
      <Text style={styles.textoMedio}>Digite a altura :</Text>
      <TextInput style={styles.input} placeholder='Altura...' keyboardType='numeric' onChangeText={text => mudaAltura(text)}></TextInput>
      <TouchableOpacity style={styles.botao} onPress={CalcularIMC}>
        <Text style={[styles.textoMedio, { color: '#91d9fa' }]}>Calcular IMC</Text>
      </TouchableOpacity>
      <BoxResultado imc={IMC} mensagemIMC={MensagemIMC()}></BoxResultado>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91d9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoGrande: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  textoMedio: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    marginTop: 15,
    marginBottom: 15
  },
  botao: {
    marginTop: 30,
    marginBottom: 30,
    display: 'flex',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#000',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white'
  },
  resultado: {
    backgroundColor: 'white',
    padding: 30
  }
});
