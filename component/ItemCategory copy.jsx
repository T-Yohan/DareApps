
import React from 'react';
import { Button } from 'react-native-paper';

import style from '../styles';




const ItemCategory = ({data ,navigation } ) => {


    const gotoDareOrTruth = () => { 
            navigation.navigate("Dareortruth") ;
            
     }


  return (
    <Button  onPress={gotoDareOrTruth} contentStyle={style.item} labelStyle={style.title} > { data.name }</Button>

  )
}

export default ItemCategory

