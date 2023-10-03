import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardProduct from './component/CardProduct';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';
import { stylesProduct } from './stylesProduct';
import { asc, desc, init } from '../redux/product';

const ProductStore = () => {
    const products = useSelector(state => state.product);
    //permet d'utiliser les fonctions dans le store
    const dispatch = useDispatch();
//fonction pour classer en ascendant
const ascProduct = () => { 
    console.log("asc");
    dispatch(asc());
}
//fonction pour classer en descendant
const descProduct = () => { 
    console.log("desc");
    dispatch(desc());
}
//fonction pour reinitialiser
const initProduct = () => { 
    console.log("init");
    dispatch(init());
}


    useEffect(() => {

        console.log('product load;');

    
    }, []);

  //   console.log('products', products);
    return (
    <View>
        <Text>ProductStore</Text>
        <View style={stylesProduct.contentButtonFilter}>
            <Button onPress={ascProduct}> Asc </Button>
            <Button onPress={descProduct}> Desc </Button>
            <Button onPress={initProduct}> Init </Button>
        </View>
        <FlatList
        data={products}
        renderItem={({item}) => <CardProduct product={item} />}
        keyExtractor={item => item.id}
        numColumns={'2'}
        />
    </View>
    );
};

export default ProductStore;