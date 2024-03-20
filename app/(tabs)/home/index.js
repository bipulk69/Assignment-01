import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";

const index = () => {
  return (
    <View style={{ flex: 1, marginTop: 73, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <View style={{ height: 70, width: 70, backgroundColor: "white" }}>
            <Image
              source={require("../../../assets/profile.png")}
              style={{
                width: 30,
                height: 30,
                borderRadius: 18,
                marginRight: 10,
              }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Josh James</Text>
            <Text style={{ color: "gray", fontSize: 10 }}>Class - VII B</Text>
          </View>
        </View>
        <Pressable style={{ paddingRight: 10 }}>
          <Fontisto name="bell" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default index;
