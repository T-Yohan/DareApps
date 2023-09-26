import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const StartGame = () => {
  const navigation = useNavigation();
  const {players} = useSelector(state => state.player);
  const start = () => {
    navigation.navigate('Category');
  };

  // console.log('players',players.length);

  return (
    <View>
      <Button mode="outlined" disabled={!(players.length >= 1)} onPress={start} >
        lancer la partie
      </Button>
    </View>
  );
};

export default StartGame;
