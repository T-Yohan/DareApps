import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { dataProducts } from '../data'
import CardProduct from './component/CardProduct';
import styles from '../category/styles';
import { stylesProduct } from './stylesProduct';
const ProductData = () => {

    return (
    <View style={stylesProduct.container}>
    <FlatList
    data = {dataProducts}
    renderItem={({item})=><CardProduct product={item}/>}
    keyExtractor={item=>item.id}
    numColumns={2}
    />
    </View>
    )
}

export default ProductData