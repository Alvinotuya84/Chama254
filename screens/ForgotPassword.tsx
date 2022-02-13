import { StatusBar } from "expo-status-bar";
import { scale } from "react-native-size-matters";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

 
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/Chama254.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 

 

 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Submit Email</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: scale(40),
  },
 
  inputView: {
    backgroundColor: "#ff8796",
    borderRadius: scale(30),
    width: "70%",
    height: scale(45),
    marginBottom: scale(20),
 
    alignItems: "center",
  },
 
  TextInput: {
    height: scale(50),
    flex: 1,
    padding: scale(10),
    marginLeft: scale(20),
  },
 

  loginBtn: {
    width: "70%",
    borderRadius: scale(25),
    height: scale(45),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(40),
    backgroundColor: Colors.light.background,
  },
  loginText:{
      color:'white',
      fontWeight:'bold'

  }
});