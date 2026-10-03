import { StyleSheet, Text, View } from "react-native";

type Props = {
  valor: string;
  operacio: string;
};

export default function PantallaCalculadora({ valor, operacio }: Props) {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.operacio}>{operacio || " "}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { padding: 12, marginBottom: 12 },
  operacio: { fontSize: 18, textAlign: "right" },
  valor: { fontSize: 32, textAlign: "right" },
});
