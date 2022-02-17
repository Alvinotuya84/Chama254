import { StatusBar } from "expo-status-bar";
import React, { useState,useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import { AxiosContext } from "../Context/AxiosContext";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  
} from "react-native";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import Colors from "../constants/Colors";
 
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const authContext = useContext(AuthContext);
  const {publicAxios} = useContext(AxiosContext);




  const onLogin = async () => {
    try {
      const response = await publicAxios.post('/login', {
        email,
        password,
      });

      const accessToken = response.data.token;

      authContext.setAuthState({
        accessToken,
        authenticated: true,
      });

      await AsyncStorage.setItem(
        'token',
        JSON.stringify({
          accessToken,
        }),
      );
    } catch (error) {
      if (error.response) {
        // There is an error response from the server
        // You can anticipate error.response.data here
        console.log(error.response.data)
    } else if (error.request) {
        // The request was made but no response was received
        // Error details are stored in error.reqeust
        console.log(error.request);
    } else {
        // Some other errors
        console.log( error.message);
    }

    }
  };








 const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/Chama254.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={Colors.light.standard}
          onChangeText={text => setEmail(text)}
          value={email}

        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={Colors.light.standard}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}

        />
      </View>
 
      <TouchableOpacity  
      onPress={()=>{
        navigation.navigate("ForgotPassword");
    }}>
        <Text style={styles.forgot_button}>Forgot Password?click here</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
      
      onPress={() => onLogin()}
      style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
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
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: scale(50),
    flex: 1,
    padding: scale(10),
    marginLeft: 20,
  },
 
  forgot_button: {
    height: scale(30),
    marginBottom: scale(30),
    fontWeight:'bold',
    color:Colors.light.background
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

  },

});