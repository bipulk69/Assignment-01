import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Redirect href="/(tabs)/home" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
