import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function About() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>About us</Text>
      <Link href="/users/1">
        <Text className="underline">User 1 Details</Text>
      </Link>
      <Pressable onPress={() => router.push("/users/2")}>
        <Text className="underline">User 2 Details</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "users/[id]",
            params: { id: 3 },
          })
        }
      >
        <Text className="underline">User 3 Details</Text>
      </Pressable>
    </View>
  );
}
