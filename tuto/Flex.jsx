import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesTuto } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
const Flex = ({nom,prenom}) => {
    return (
        <View style={stylesTuto.contentFlex} >
            <View style={stylesTuto.box1}>
                <Icon name="menu" size={30} color="#900" />
            </View>
            <View style={stylesTuto.box2}>
                <Text style={stylesTuto.textBox2} > Home </Text>
            </View>
            <View style={stylesTuto.box3}>
            <Icon name="settings" size={30} color="#000" />
            </View>
        </View>
    )
}

export default Flex