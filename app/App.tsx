import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const files = [
  ['AC', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '⌫', '='],
];

export default function App() {

  const [pantalla, setPantalla] = useState('0');

  function premTecla(tecla: string) {
  if (tecla === 'AC') {
    setPantalla('0');
    return;
  }

  if ('0123456789'.includes(tecla) && tecla.length === 1) {
    setPantalla((valorActual) => {
      if (valorActual === '0') return tecla;
      return valorActual + tecla;
    });
    return;
  }

  if (tecla === '.') {
    setPantalla((valorActual) => {
      if (valorActual.includes('.')) return valorActual;
      return valorActual + '.';
    });
  }
  }

  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Text>Calculadora</Text>
      <Text>{pantalla}</Text>
      <Pressable
        onPress={() => premTecla('7')}
        style={{ backgroundColor: '#dddddd', padding: 14 }}
      >
        <Text>7</Text>
      </Pressable>
    </View>
  );
}