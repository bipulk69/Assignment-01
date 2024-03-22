import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <>
      <Redirect href="/(tabs)/home" />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
