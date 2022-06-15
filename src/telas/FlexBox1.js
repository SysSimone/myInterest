import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexBox1 = () => {
  return (
    <View style={[{      // FlexDiction como propriedade "collum" 
      flexDirection: "collum",
    }]}>
        <View style={{flex:4, backgroundColor:"yellow"}}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FlexBox1;