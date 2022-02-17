import React from 'react';
import Colors from '../constants/Colors';
import {ActivityIndicator, StyleSheet, View,Image} from 'react-native';
import { scale } from 'react-native-size-matters';

const Spinner = () => (
  <View style={styles.container}>
        <Image
        source={require('../assets/images/Chama254.png')}
        style={styles.ImageBackground}  
        />
  </View>


);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBackground:{
  }
});

export default Spinner;