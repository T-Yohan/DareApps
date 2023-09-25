import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const ItemCategory = ({data }) => {

  const navigation = useNavigation() ;

  

  const goto = () => { 

      navigation.navigate('DareOrTruth',{id : data.id})

   }



  return (

      <Button onPress={goto} >{data.name}</Button>
  )
}

export default ItemCategory