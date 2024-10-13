import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Users() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-white">User {id}</Text>
    </View>
  );
}
