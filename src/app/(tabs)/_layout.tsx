import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? "yellow" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About us",
          title: "About us",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          headerTitle: "User page",
          href: null,
        }}
      />
    </Tabs>
  );
};

export default Layout;
