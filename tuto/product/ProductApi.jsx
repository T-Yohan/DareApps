import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardProduct from './component/CardProduct';
import {ActivityIndicator, Button} from 'react-native-paper';

const ProductApi = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    // const [skip,setSkip] =useState(0);

    const init = async() => { 
        console.log("init");
        const res = await fetch('https://dummyjson.com/products?limit=2&skip=0');
        const ProductsData = await res.json();
        console.log(ProductsData);
        setProducts(ProductsData.products);
        setLoading(false);
    }
const more = async() => { 

    console.log('more');
    setLoadingMore(true);

    const nextSkip = products.length +1 ;

    const res = await fetch('https://dummyjson.com/products?limit=2&skip='+nextSkip);
    const ProductsData = await res.json();
    const moreProducts = ProductsData.products ;
    const newProducts = [...products,...moreProducts]

    setProducts(newProducts);
    console.log(ProductsData);
    setLoadingMore(false);
 }
useEffect(()=>{
    init();
},[]);


    return (
    <View>
        <Text>ProductApi</Text>
{ loading ? <ActivityIndicator size={20} animating={true} /> :
        <FlatList
        data={products}
        renderItem={({item}) => <CardProduct product={item} />}
        keyExtractor={item => item.id}
        numColumns={'2'}
        ListFooterComponent={loadingMore ? <ActivityIndicator animating={true}/> : <Button>More</Button>}
        onEndReached={more}
        onEndReachedThreshold={0.3}
        />}
    </View>
    );
};

export default ProductApi;
