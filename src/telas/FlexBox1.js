import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexBox1 = (props) => {
 
  return (               
    <View style={[{      
      flexDirection: "row", //por default ela é "row"
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