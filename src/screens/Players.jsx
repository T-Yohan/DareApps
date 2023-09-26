import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles';
import ItemPlayer from '../component/player/ItemPlayer';
import EmptyPlayer from '../component/player/EmptyPlayer';
import AddPlayer from '../component/player/AddPlayer';
import ResetPlayer from '../component/player/ResetPlayer';
import StartGame from '../component/buttonGame/StartGame';
const Players = () => {
  const {players} = useSelector(state=>state.player);//recupération de la liste des users dans le store

  return (
    <View style={styles.container}>
  <FlatList
  data={players}
  renderItem={({item})=><ItemPlayer player={item}/>}
  keyExtractor={item=>item.id}
  ListEmptyComponent={EmptyPlayer}//composant de liste vide
  ListHeaderComponent={AddPlayer}//composant pour ajouter des joueurs
  />
  <StartGame/>
  <ResetPlayer/>
    </View>
  )
}

export default Players