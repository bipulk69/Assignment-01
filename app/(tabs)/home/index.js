import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";

const index = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderWidth: 1,
              borderColor: "#e0e0e0",
            }}
          >
            <View style={{ marginRight: 10 }}>
              <Image
                source={require("../../../assets/profile.png")}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                }}
              />
            </View>

            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Josh James
              </Text>
              <Text style={{ color: "gray", fontSize: 12 }}>Class - VII B</Text>
            </View>
          </View>
          <Pressable style={{ paddingRight: 10 }}>
            <Fontisto name="bell" size={24} color="black" />
          </Pressable>
        </View>

        <View
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#EAECF0",
            backgroundColor: "white",
            marginHorizontal: 15,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            Delhi Public School
          </Text>
          <Text style={{ fontSize: 10 }}>
            Sector 13, Noida, Uttar Pradesh, India - 110029
          </Text>
        </View>

        <ScrollView>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Notice Board
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>

          <View>
            <ScrollView horizontal>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "#D4FFEA",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>

                <View
                  style={{
                    backgroundColor: "red",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>

                <View
                  style={{
                    backgroundColor: "#D4FFEA",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>
              </View>
            </ScrollView>
          </View>

          {/* Attendance */}
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Attendance</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>

          <View>
            <ScrollView horizontal>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>

                <View
                  style={{
                    backgroundColor: "blue",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>

                <View
                  style={{
                    backgroundColor: "green",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Fees</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>

          <View>
            <ScrollView horizontal>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>

                <View
                  style={{
                    backgroundColor: "blue",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>

                <View
                  style={{
                    backgroundColor: "green",
                    height: 160,
                    width: 144,
                    marginHorizontal: 5,
                  }}
                ></View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default index;
