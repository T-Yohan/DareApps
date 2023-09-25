import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './redux/category';
import { addDareOrTruth } from './redux/dareOrTruth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DareOrTruth from './screens/DareOrTruth';
import Home from './screens/Home';
import ShowDareOrTruth from './screens/ShowDareOrTruth';
import { ActivityIndicator } from 'react-native-paper';
import { loadData } from './commonjs/function';



const Stack = createNativeStackNavigator();

const App = () => {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const loadDbApp = async () => {

    // const categories = await  firestore().collection('category').get() ;

    const categories = await loadData('category');
    // vérification des données 
    if (categories.length > 0) {
      // enregistrement des categories dans le store ; 
      dispatch(addCategory(categories));
    }
    const dareOrTruthDatas = await loadData('DareOrTruth');

    if (dareOrTruthDatas.length > 0) {
      // console.log('DareOrTruthDatas',dareOrTruthDatas);
      // enregistrement des categories dans le store ; 
      dispatch(addDareOrTruth(dareOrTruthDatas));
    }
    setTimeout(() => {

      setLoading(false)

    }, 3600);


  }

  // chargement de l'app
  useEffect(() => {

    loadDbApp();

    console.log('app load');

  }, [])

  return (
    <NavigationContainer>

      {loading ? <ActivityIndicator animating={true} /> :
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='DareOrTruth' component={DareOrTruth} />
          <Stack.Screen name='ShowDareOrTruth' component={ShowDareOrTruth} />
        </Stack.Navigator>}

    </NavigationContainer>
  )
}

export default App