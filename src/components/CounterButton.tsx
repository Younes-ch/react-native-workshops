import { View, Button } from "react-native";

interface CounterButtonProps {
  title: string;
  onPress: () => void;
}

export const CounterButton = ({ title, onPress }: CounterButtonProps) => {
  return (
    <View className="flex-1">
      <Button title={title} onPress={onPress} />
    </View>
  );
};
