import { ColorValue, StyleSheet, Text, View } from "react-native";

interface SectionProps {
  backgroundColor: ColorValue;
  children?: React.ReactNode;
}

const Section = ({ backgroundColor, children }: SectionProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Section };
