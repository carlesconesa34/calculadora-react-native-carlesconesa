import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [pantalla, setPantalla] = useState('0');

  function premTecla(tecla: string) {
  setPantalla((valorActual) => {
    if (valorActual === '0') return tecla;
    return valorActual + tecla;
  });
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