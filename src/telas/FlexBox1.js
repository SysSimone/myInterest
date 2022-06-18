import React from "react";
import { StyleSheet, View } from "react-native";

const FlexBox1 = () => {

  return (
    <View style={styles.container}>
      <View style={{ flex: 5, backgroundColor: "yellow" }} />
      <View style={{ flex: 5, backgroundColor: "red" }} />
      <View style={{ flex: 5, backgroundColor: "darkorange" }} />
      <View style={{ flex: 5, backgroundColor: "green" }} />
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: "row",
    backgroundColor: "#8fbc8f"
  },
});

export default FlexBox1;