import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {getRandomInt} from '../commonjs/function';
import {useSelector} from 'react-redux';

const ShowDareOrTruth = ({route, navigation}) => {
  const [monText, setMonText] = useState('');
  const [playTime, setPlayTime] = useState([]);
  const dareOrTruthDatas = useSelector(state => state.dareOrTruth);
  console.log('dareOrTruthDatas', dareOrTruthDatas);
  const {id, type} = route.params;

  //  fonction retour
  const goBack = () => {
    navigation.goBack();
  };
  // récupérer les données dans firebase

  //tirage sans remise
  const tirageSansRemise = () => {
    //filtre en fonction du type
    let textData = playTime.filter(item => item.type == type);
    //filtre en fonction de l'id de la categorie
    textData = textData.filter(item => item.category == id);
    //recupération d'un élément du tableau textData
    const index = getRandomInt(0, textData.length);

    if (textData.length > 0) {
      setMonText(textData[index].title);
      const newPlayTime = textData.filter(item =>item.id != textData[index].id);
      console.log('newPlayTime',newPlayTime);
    } else {
      setMonText('nc');
    }
  };

  useEffect(() => {

    setPlayTime(dareOrTruthDatas);
    tirageSansRemise();
  }, []);

  return (
    <View>
      <Text>{monText}</Text>
      <Button onPress={goBack}>Retour</Button>
      <Button onPress={tirageSansRemise}>Next</Button>
    </View>
  );
};

export default ShowDareOrTruth;
