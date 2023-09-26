import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


const TruthOrDare = ({navigation,route}) => {

  const {id} = route.params;


  return (
    <View>
      <Text>TruthOrDare</Text>
      <Button mode='contained' onPress={()=>navigation.navigate('ShowTruthOrDare',{id:id,type:'dare'})} >Action</Button>
      <Button mode='contained' onPress={()=>navigation.navigate('ShowTruthOrDare',{id:id,type:'truth'})} >Vérité</Button>
    </View>
  )
}

export default TruthOrDare