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

          <View style={{ paddingTop: 5, paddingLeft: 5 }}>
            <ScrollView horizontal>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "#D4FFEA",
                    width: 160,
                    marginHorizontal: 5,
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <Image source={require("../../../assets/nboard1.png")} />
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          marginTop: 10,
                        }}
                      >
                        School is going for vacation in next week
                      </Text>

                      <Text
                        style={{
                          color: "#6C6C74",
                          fontSize: 10,
                          marginTop: 10,
                        }}
                      >
                        02 March 2020 10.00 AM
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#D4F5FF",
                    width: 160,
                    marginHorizontal: 5,
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <Image source={require("../../../assets/nboard2.png")} />
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          marginTop: 10,
                        }}
                      >
                        School is going for vacation in next week
                      </Text>

                      <Text
                        style={{
                          color: "#6C6C74",
                          fontSize: 10,
                          marginTop: 10,
                        }}
                      >
                        02 March 2020 10.00 AM
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#FFD4D4",
                    width: 160,
                    marginHorizontal: 5,
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <Image source={require("../../../assets/nboard3.png")} />
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          marginTop: 10,
                        }}
                      >
                        School is going for vacation in next week
                      </Text>

                      <Text
                        style={{
                          color: "#6C6C74",
                          fontSize: 10,
                          marginTop: 10,
                        }}
                      >
                        02 March 2020 10.00 AM
                      </Text>
                    </View>
                  </View>
                </View>
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
                    borderRadius: 10,
                    borderColor: "#EAECF0",
                    borderWidth: 1,
                    width: 105,
                    marginHorizontal: 5,
                    padding: 10,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 23, color: "#12B264" }}>23</Text>
                  <Text style={{ fontSize: 10, color: "#12B264" }}>
                    Present
                  </Text>
                </View>

                <View
                  style={{
                    borderRadius: 10,
                    borderColor: "#EAECF0",
                    borderWidth: 1,
                    width: 105,
                    marginHorizontal: 5,
                    padding: 10,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 23, color: "FF0000" }}>23</Text>
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>Absent</Text>
                </View>

                <View
                  style={{
                    borderRadius: 10,
                    borderColor: "#EAECF0",
                    borderWidth: 1,
                    width: 105,
                    marginHorizontal: 5,
                    padding: 10,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 23, color: "#0075FF" }}>23</Text>
                  <Text style={{ fontSize: 10, color: "#0075FF" }}>
                    Holiday
                  </Text>
                </View>
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
