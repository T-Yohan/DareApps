import { View, Text } from 'react-native'
import React, { useEffect , useState} from 'react'
import { useSelector } from 'react-redux';
import NextPlayer from '../component/buttonGame/NextPlayer';
import { loadDataDareOrTruth } from '../commonjs/db';
import { getRandomIndex } from '../commonjs/function';

const ShowTruthOrDare = ({route}) => {

  const { id } = route.params;
  const [showtod, setshowtod] = useState();
  const{players,position} = useSelector(state=>state.player);
const loadDareOrTruth = async() => { 
  console.log("load");
  const dataTruthOrDare = await loadDataDareOrTruth(id);
  console.log('dataTruthOrDare',dataTruthOrDare);
  const index = getRandomIndex(0,dataTruthOrDare.length);
  console.log(index);
  setshowtod(dataTruthOrDare[index]);
}
useEffect(()=>{
  loadDareOrTruth();
},[])
  return (
    <View>
      <Text>{players[position].name}</Text>
      <Text> {showtod?.title} </Text>
      <NextPlayer id={id}/>
    </View>
  )
}

export default ShowTruthOrDare