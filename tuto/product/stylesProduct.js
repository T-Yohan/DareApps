import { StyleSheet,Dimensions } from "react-native";
const width = Dimensions.get("window").width;
export const stylesProduct = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
    },
    CardContent:{
        backgroundColor:"lightgreen",
        borderRadius:10,
        width:(width-(10*2)-(5*4))/2,
    },
    CardProduct:{
        margin:5,
    },
    CardTitle: {
        fontSize:15,
        color:"green",
        fontWeight:"600"
    },
    CardPrice:{
        fontSize:14,
        color:"green",
        fontWeight:"300"
    }
})