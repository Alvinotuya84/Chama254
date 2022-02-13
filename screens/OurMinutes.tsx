import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react';
import { scale } from 'react-native-size-matters';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
//component imports
import MyNetAmount from '../components/dashboard/MynetAmount';
import QuickSummary from '../components/dashboard/QuickSummary';
import GenerateStatement from '../components/dashboard/GenerateStatement';
//end of component imports

const OurMinutes = () => {
  const TopTab=createMaterialTopTabNavigator();

  return (
    <NavigationContainer independent={true}
    
    >
    <TopTab.Navigator
      initialRouteName='QuickSummary'
      screenOptions={{
        tabBarShowIcon:true,
        tabBarLabelStyle:{
          fontSize:scale(10),
          fontWeight:'bold',
          
          
        }
        ,
        tabBarIndicatorStyle:{
          backgroundColor:Colors.light.background
        }



      }}

>
      <TopTab.Screen  name="QuickSummary" component={QuickSummary} />
      <TopTab.Screen name="MyNetAmount" component={MyNetAmount} />
      <TopTab.Screen name="Generate Statement" component={GenerateStatement} />

    </TopTab.Navigator>
  </NavigationContainer>

  )
}

export default OurMinutes

const styles = StyleSheet.create({

  container:{
    flex:1
  }
})