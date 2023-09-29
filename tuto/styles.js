import { StyleSheet } from "react-native";


export const stylesTuto = StyleSheet.create({
    contentFlex:{
        // flex:1,
        // paddingTop:10,
        // paddingBottom:10,
        paddingVertical:10,
        flexDirection:"row",
        backgroundColor:"red",
        justifyContent:"space-around",
        // alignItems:"", 
        
    },
    box1:{
        backgroundColor:"#fff",
        height: 50,
        width:50,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        // borderRadius:25 ,
    },
    box2:{
        backgroundColor:"#fff",
        height: 50,
        width:200,
        justifyContent:"center",
        alignItems:"center",
        // borderBottomStartRadius:20,
        // borderTopRightRadius:20,
    },
    box3:{
        backgroundColor:"#fff",
        height: 50,
        width:50,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
    },
    textBox2:{
        fontWeight:"bold",
        fontSize:32,
        color:"#000",
    },
    contentSearch:{
        paddingHorizontal:20,
        paddingVertical:10,
    },
})
