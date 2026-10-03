import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};

export default function BotoCalculadora({ text, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.boto}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boto: { flex: 1, backgroundColor: "#3d3d3d", padding: 14 },
  text: { textAlign: "center", color: "#ffffff", fontSize: 22 },
});
