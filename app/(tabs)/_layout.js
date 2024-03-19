import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            focused ? (
              <Feather name="home" size={24} color="#0075FF" />
            ) : (
              <Feather name="home" size={24} color="#6C6C74" />
            );
          },
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          tabBarLabel: "contacts",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            focused ? (
              <Feather name="home" size={24} color="#0075FF" />
            ) : (
              <Feather name="home" size={24} color="#6C6C74" />
            );
          },
        }}
      />

      <Tabs.Screen
        name="post"
        options={{
          tabBarLabel: "post",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            focused ? (
              <Feather name="home" size={24} color="#0075FF" />
            ) : (
              <Feather name="home" size={24} color="#6C6C74" />
            );
          },
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "inbox",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            focused ? (
              <Feather name="home" size={24} color="#0075FF" />
            ) : (
              <Feather name="home" size={24} color="#6C6C74" />
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            focused ? (
              <Feather name="home" size={24} color="#0075FF" />
            ) : (
              <Feather name="home" size={24} color="#6C6C74" />
            );
          },
        }}
      />
    </Tabs>
  );
}
