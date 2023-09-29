import {View, Text} from 'react-native';
import React from 'react';
import {stylesTuto} from './styles';
import { Searchbar } from 'react-native-paper';
const Recherche = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
    <View style={stylesTuto.contentSearch}>
        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
    />
    </View>
);
};

export default Recherche;
