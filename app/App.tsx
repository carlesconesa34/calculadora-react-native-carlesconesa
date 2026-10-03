import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const files = [
  ["AC", "±", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "⌫", "="],
];

export default function App() {
  const [pantalla, setPantalla] = useState("0");

  function premTecla(tecla: string) {
    if (tecla === "AC") {
      setPantalla("0");
      return;
    }

    if ("0123456789".includes(tecla) && tecla.length === 1) {
      setPantalla((valorActual) => {
        if (valorActual === "0") return tecla;
        return valorActual + tecla;
      });
      return;
    }

    if (tecla === ".") {
      setPantalla((valorActual) => {
        if (valorActual.includes(".")) return valorActual;
        return valorActual + ".";
      });
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.arrel}>
        <View style={styles.contingut}>
          <View style={styles.calculadora}>
            <Text style={styles.titol}>Calculadora</Text>
            <Text
              style={{ fontSize: 32, textAlign: "right", marginBottom: 12 }}
            >
              {pantalla}
            </Text>
            {files.map((fila, index) => (
              <View key={index} style={styles.fila}>
                {fila.map((tecla) => (
                  <Pressable
                    key={tecla}
                    onPress={() => premTecla(tecla)}
                    style={{ flex: 1, backgroundColor: "#dddddd", padding: 14 }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 22 }}>
                      {tecla}
                    </Text>
                  </Pressable>
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
