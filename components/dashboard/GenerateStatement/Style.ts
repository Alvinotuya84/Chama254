import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../../constants/Colors";
export const styles=StyleSheet.create({
    tableHeader:{
        backgroundColor:Colors.light.background,
        borderBottomColor:Colors.light.background
    },
    title:{
        color:'white',
        fontSize:scale(12),
        overflow:'visible',
        fontWeight:'bold',
        
    },dataText:{
        fontSize:scale(10),
        color:'black'
    }

})