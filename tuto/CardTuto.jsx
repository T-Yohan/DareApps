import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const CardTuto = ({title}) => {
  return (
        <Card>
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  )
}

export default CardTuto