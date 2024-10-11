import { View, Text, StatusBar, Button, StyleSheet } from "react-native";
import { Section } from "@/components/Section";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <Section backgroundColor="#4285f4">
        <Text style={{ color: "white" }}>Session #2</Text>
      </Section>
      <Section backgroundColor="#ea4335">
        <Text style={{ color: "white" }}>Setup Nativewind + Expo Router</Text>
      </Section>
      <Section backgroundColor="#fbbc04">
        <Text>You clicked {count} times!</Text>
      </Section>
      <Section backgroundColor="#34a853">
        <View style={styles.buttonsContainer}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
          <Button title="Reset" onPress={() => setCount(0)} />
        </View>
      </Section>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
