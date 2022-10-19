import React from "react";
import { View, Text, StyleSheet } from "react-native";
const App=()=>{
  return (
    <View>
      <Text style={styles.eleHead}>Hello World</Text>
      <Text>Hello World. Test for something</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
  eleHead:{color:'white', fontSize:22, textAlign:'center', fontWeight: 'bolder', backgroundColor:'#bf00ff', padding:25},
  eleText:{},

});
export default App;