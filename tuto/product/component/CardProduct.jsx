import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { stylesProduct } from '../stylesProduct';

const CardProduct = ({product}) => {
  return (
    <Card style={stylesProduct.CardProduct} mode='contained' contentStyle={stylesProduct.CardContent}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Text style={stylesProduct.CardTitle} variant="titleLarge">{product.title}</Text>
      <Text style={stylesProduct.CardPrice} variant="bodyMedium">{product.price}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: product.thumbnail }} />
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
);

}

export default CardProduct