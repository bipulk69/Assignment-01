import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";

const index = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
  };

  const toggleCheckbox2 = () => {
    setIsChecked2(!isChecked2);
  };

  const toggleCheckbox3 = () => {
    setIsChecked3(!isChecked3);
  };

  const AssignmentItem = ({
    isChecked,
    toggleCheckbox,
    title,
    subject,
    date,
  }) => {
    return (
      <View
        style={{
          backgroundColor: isChecked ? "#FFF1EC" : "#FFF1EC",
          borderRadius: 10,
          height: 160,
          width: 144,
          marginHorizontal: 5,
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: isChecked ? "#007AFF" : "white",
            borderWidth: 1,
            borderColor: isChecked ? "#007AFF" : "#AAA",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
          onPress={toggleCheckbox}
        >
          {/* Round Checkbox */}
          {isChecked && (
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: "#0075FF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="check" size={16} color="#FFFFFF" />
            </View>
          )}
        </TouchableOpacity>

        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{title}</Text>

        <Text
          style={{
            fontSize: 10,
            color: "#6C6C74",
            marginTop: "auto",
          }}
        >
          {subject} / {date}
        </Text>
      </View>
    );
  };
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
            }}
          >
            <View
              style={{
                height: 48,
                width: 48,
                marginRight: 10,
                borderWidth: 1,
                borderColor: "#e0e0e0",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
              }}
            >
              <Image
                source={require("../../../assets/profile.png")}
                style={{
                  width: 32,
                  height: 32,
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
          {/* Notice Board */}
          <View
            style={{
              padding: 10,

              justifyContent: "space-between",
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Notice Board
              </Text>
              <Pressable>
                <AntDesign name="arrowright" size={24} color="black" />
              </Pressable>
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
          </View>

          {/* Attendance */}
          <View
            style={{
              padding: 10,
              justifyContent: "space-between",
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Attendance
              </Text>
              <Pressable>
                <AntDesign name="arrowright" size={24} color="black" />
              </Pressable>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 15,
                }}
              >
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
                  <Text style={{ fontSize: 23, color: "#FF0000" }}>23</Text>
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
            </View>
          </View>

          {/* Assignments */}
          <View
            style={{
              padding: 10,
              justifyContent: "space-between",
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Assignments
              </Text>
              <Pressable>
                <AntDesign name="arrowright" size={24} color="black" />
              </Pressable>
            </View>

            <View>
              <ScrollView horizontal>
                <View style={{ flexDirection: "row" }}>
                  {/* Assignment 1 */}
                  <AssignmentItem
                    isChecked={isChecked1}
                    toggleCheckbox={toggleCheckbox1}
                    title="Exercise Trigonometry 1st topic"
                    subject="Maths"
                    date="Today"
                  />

                  {/* Assignment 2 */}
                  <AssignmentItem
                    isChecked={isChecked2}
                    toggleCheckbox={toggleCheckbox2}
                    title="Hindi writing 3 pages"
                    subject="Hindi"
                    date="Yesterday"
                  />

                  {/* Assignment 3 */}
                  <AssignmentItem
                    isChecked={isChecked3}
                    toggleCheckbox={toggleCheckbox3}
                    title="Test for History first session"
                    subject="History"
                    date="Yesterday"
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Fees */}
          <View
            style={{
              padding: 10,
              justifyContent: "space-between",
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Fees</Text>
              <Pressable>
                <AntDesign name="arrowright" size={24} color="black" />
              </Pressable>
            </View>
            <View>
              <ScrollView horizontal>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 15,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      borderColor: "#EAECF0",
                      borderWidth: 1,
                      width: 139,
                      marginHorizontal: 5,
                      padding: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6C6C74",
                        fontWeight: "500",
                        marginBottom: 5,
                      }}
                    >
                      6 May 2024
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6C6C74",
                        marginBottom: 5,
                      }}
                    >
                      School fees for January
                    </Text>

                    <Text
                      style={{ fontSize: 22, color: "#031639", marginTop: 5 }}
                    >
                      Rs. 14, 500
                    </Text>
                  </View>

                  <View
                    style={{
                      borderRadius: 10,
                      borderColor: "#EAECF0",
                      borderWidth: 1,
                      width: 139,
                      marginHorizontal: 5,
                      padding: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6C6C74",
                        fontWeight: "500",
                        marginBottom: 5,
                      }}
                    >
                      6 May 2024
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6C6C74",
                        marginBottom: 5,
                      }}
                    >
                      School fees for January
                    </Text>

                    <Text
                      style={{ fontSize: 22, color: "#031639", marginTop: 5 }}
                    >
                      Rs. 14, 500
                    </Text>
                  </View>

                  <View
                    style={{
                      borderRadius: 10,
                      borderColor: "#EAECF0",
                      borderWidth: 1,
                      width: 139,
                      marginHorizontal: 5,
                      padding: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6C6C74",
                        fontWeight: "500",
                        marginBottom: 5,
                      }}
                    >
                      6 May 2024
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6C6C74",
                        marginBottom: 5,
                      }}
                    >
                      School fees for January
                    </Text>

                    <Text
                      style={{ fontSize: 22, color: "#031639", marginTop: 5 }}
                    >
                      Rs. 14, 500
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default index;
