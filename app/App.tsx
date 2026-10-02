import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.contenidor}>
        <Text style={styles.titol}>La meva calculadora</Text>
        <Text style={styles.text}>Comencem amb React Native!</Text>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0b1220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titol: { color: '#5eead4', fontSize: 28, fontWeight: 'bold' },
  text: { color: '#f8fafc', fontSize: 16, marginTop: 12 },
});