import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../../constants/Colors";
export const styles=StyleSheet.create({
    tableHeader:{
        backgroundColor:Colors.light.background
    },
    title:{
        color:'white',
        fontSize:scale(12),
        overflow:'visible',
        fontWeight:'bold',

        
    },dataText:{
        color:'black',
        paddingLeft:0
    },
    titleHolder:{
        borderWidth:scale(1),
        padding:10,
        borderColor:Colors.light.borderColor,

        width:scale(100)
    },
    dataTextHolder:{
        borderWidth:scale(1),
        borderColor:Colors.light.borderColor,
        width:"100%"

    }
})