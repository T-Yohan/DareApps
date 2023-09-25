import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemCategory from '../component/ItemCategory'
import { useSelector } from 'react-redux'
import Empty from '../component/Empty'

const Home = () => {

    // lecture des categories dans le store
    const categories = useSelector(state=>state.category) ;

    
  return (
    <View>
        <FlatList 
                data={categories}
                renderItem={({item}) => <ItemCategory  data={item} />}
                keyExtractor={item => item.id} 
                ListEmptyComponent={<Empty />}

                
        
        />
    </View>
  )
}

export default Home