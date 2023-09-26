import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Category from './Category';
import Players from './Players';
import ShowTruthOrDare from './ShowTruthOrDare';
import TruthOrDare from './TruthOrDare';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="TruthOrDare" component={TruthOrDare} />
        <Stack.Screen name="ShowTruthOrDare" component={ShowTruthOrDare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
