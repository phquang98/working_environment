import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  // this should show error color literal by using #white
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// this should show error unexpected var, use let or const instead
// also show warn asd is assigned but never used
var asd = 1;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>It works! Yesssssssss</Text>
    </View>
  );
}
