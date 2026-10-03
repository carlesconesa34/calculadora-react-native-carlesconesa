import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BotoCalculadora from "./src/components/BotoCalculadora";
import PantallaCalculadora from "./src/components/PantallaCalculadora";
import { aplicaTecla, estatInicial } from "./src/logica/calculadora";

const files = [
  ["AC", "±", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "⌫", "="],
];

export default function App() {
  const [estat, setEstat] = useState(estatInicial);

  function premTecla(tecla: string) {
    setEstat((anterior) => aplicaTecla(anterior, tecla));
  }

  const operacio =
    estat.operador !== null
      ? String(estat.anterior) + " " + estat.operador
      : "";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.arrel}>
        <View style={styles.contingut}>
          <View style={styles.calculadora}>
            <Text style={styles.titol}>Calculadora</Text>
            <PantallaCalculadora valor={estat.pantalla} operacio={operacio} />
            {files.map((fila, index) => (
              <View key={index} style={styles.fila}>
                {fila.map((tecla) => (
                  <BotoCalculadora
                    key={tecla}
                    text={tecla}
                    onPress={() => premTecla(tecla)}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  arrel: { flex: 1, backgroundColor: "#ffffff" },
  contingut: { flex: 1, justifyContent: "center", padding: 20 },
  calculadora: { width: "100%" },
  titol: { fontSize: 24, marginBottom: 16 },
  fila: { flexDirection: "row", gap: 8, marginBottom: 8 },
});
