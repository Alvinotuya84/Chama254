import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React,{useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { screens } from '../routenavigations';
//component imports
import LoginScreen from './LoginScreen';

//end of component imports

const MoreScreen = () => {
  const TopTab=createMaterialTopTabNavigator();
  const navigation=useNavigation();


  return (
      <ScrollView style={styles.main}>

            <TouchableOpacity onPress={()=>{
            navigation.navigate("LoginScreen");
          }} style={styles.signOut}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          <View style={styles.navigationContainer}>
            <Text style={styles.title}>Settings</Text>
                <TouchableOpacity style={styles.navigate}>
                  <Text style={styles.navigateText}>Account Details</Text>
                  <AntDesign
                  name='arrowright'
                  color={Colors.light.standard}
                  size={scale(24)}           
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigate}>
                  <Text style={styles.navigateText}>Notifications</Text>
                  <AntDesign
                  name='arrowright'
                  color={Colors.light.standard}
                  size={scale(24)}
                  
                  />
                </TouchableOpacity>

          </View>
          <View style={styles.navigationContainer}>
            <Text style={styles.title}>Navigation</Text>
            {
              screens.map((item,id)=>(
                <TouchableOpacity onPress={()=>{
                  navigation.navigate(item.name);
                }} style={styles.navigate}
                
                key={id}>
                <Text style={styles.navigateText}>{item.name}</Text>
                <MaterialCommunityIcons
                name='arrow-right-bold-box'
                color={Colors.light.standard}
                size={24}
                
                />
              </TouchableOpacity>

              ))
            }




          </View>


      </ScrollView>
 


  )
}

export default MoreScreen

const styles = StyleSheet.create({
  main:{
    flex:1,
    padding:scale(10)

  },

  signOutText:{
    color:'white',
    fontWeight:'bold',
    fontSize:scale(15)

  },
  signOut:{
    backgroundColor:"#ba848a",
    alignItems:'center',
    width:'100%',
    borderRadius:scale(20),
    padding:10,
    marginTop:scale(10),
    
  },
  navigationContainer:{
    paddingTop:scale(20),
    paddingBottom:scale(30),

    


  },
  navigate:{
    backgroundColor:Colors.light.background,
    alignItems:'center',
    width:'100%',
    borderRadius:scale(10),
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:scale(10)
    



  },
  navigateText:{
    color:'white',
    fontWeight:'bold'
  },
  title:{
    fontWeight:'bold',
    fontSize:17,
    paddingBottom:scale(15),
  }


})