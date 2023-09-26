import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {resetPlayer} from '../../redux/player';
const ResetPlayer = () => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(resetPlayer());
  };
  return (
    <View>
      <Text>ResetPlayer</Text>
      <Button onPress={reset}>vider la liste</Button>
    </View>
  );
};

export default ResetPlayer;
