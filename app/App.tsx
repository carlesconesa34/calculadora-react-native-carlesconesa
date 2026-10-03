import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
      {files.map((fila, index) => (
      <View key={index} style={styles.fila}>
        {fila.map((tecla) => (
          <Pressable
            key={tecla}
            onPress={() => premTecla(tecla)}
            style={{ flex: 1, backgroundColor: '#dddddd', padding: 14 }}
          >
            <Text style={{ textAlign: 'center', fontSize: 22 }}>{tecla}</Text>
          </Pressable>
        ))}
      </View>
))}
    </View>
  );
}

const styles = StyleSheet.create({
  fila: { flexDirection: 'row', gap: 8, marginBottom: 8 },
});