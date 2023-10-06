import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {Button, List, Text} from 'react-native-paper';
import styles from '../../styles';
import { Image, View } from 'react-native';

const ItemCategory = ({category}) => {
    const navigation = useNavigation();
//     return(
//     <List.Item
//     title={category.name}
//     onPress={()=>navigation.navigate('TruthOrDare',{id: category.id})}
//     />
// )

return (
    <View style={[
        styles.slide,
        {
            backgroundColor:category.color
        }
        ]}>
        <Text style={styles.slideTitle}>{category.name}</Text>
        <Text style={styles.slideText}>{category.description}</Text>
        {/* <Image source={{uri: category.image}} /> */}
        <Button icon="play" mode="contained" onPress={() => navigation.navigate('TruthOrDare',{id:category.id})}>
        Choisir
        </Button>
    </View>
);
};

export default ItemCategory;
