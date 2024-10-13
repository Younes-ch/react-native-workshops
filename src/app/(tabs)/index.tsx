import { CounterButton } from "@/components/CounterButton";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <View className="flex-1">
      <View className="flex-1 bg-[#4285f4] justify-center items-center">
        <Text className="text-white">Session #2</Text>
      </View>
      <View className="flex-1 bg-[#ea433a] justify-center items-center">
        <Text className="text-white">Setup Nativewind + Expo Router</Text>
        <Link href="/about">
          <Text className="text-white underline">About us</Text>
        </Link>
      </View>
      <View className="flex-1 bg-[#fbbc04] justify-center items-center">
        <Text className="text-white">You clicked {count} times!</Text>
      </View>
      <View className="flex-1 bg-[#34a853] justify-center items-center">
        <View className="flex-row gap-4 px-2">
          <CounterButton
            title="Increment"
            onPress={() => setCount(count + 1)}
          />
          <CounterButton
            title="Decrement"
            onPress={() => setCount(count - 1)}
          />
          <CounterButton title="Reset" onPress={() => setCount(0)} />
        </View>
      </View>
    </View>
  );
}
