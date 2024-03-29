import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Feather name="home" size={24} color="#0075FF" />
            ) : (
              <Feather name="home" size={24} color="#6C6C74" />
            );
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: 60,
          },
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <AntDesign name="contacts" size={24} color="#0075FF" />
            ) : (
              <AntDesign name="contacts" size={24} color="#6C6C74" />
            );
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: 60,
          },
        }}
      />

      <Tabs.Screen
        name="post"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="pluscircle"
              size={focused ? 42 : 42}
              color="black"
            />
          ),

          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: 60,
          },
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <AntDesign name="message1" size={24} color="#0075ff" />
            ) : (
              <AntDesign name="message1" size={24} color="#6c6c74" />
            );
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: 60,
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome6 name="user-circle" size={24} color="#0075ff" />
            ) : (
              <FontAwesome6 name="user-circle" size={24} color="#6c6c74" />
            );
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: 60,
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
