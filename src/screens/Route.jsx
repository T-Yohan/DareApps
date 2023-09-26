import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Category from './Category';
import Players from './Players';
import ShowTruthOrDare from './ShowTruthOrDare';
import TruthOrDare from './TruthOrDare';
import { ActivityIndicator, Modal, PaperProvider } from 'react-native-paper';
import styles from '../../styles';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Route = () => {
  const loading = useSelector(state=>state.loading);
  return (
    <PaperProvider>
          <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="TruthOrDare" component={TruthOrDare} />
        <Stack.Screen name="ShowTruthOrDare" component={ShowTruthOrDare} />
      </Stack.Navigator>
      <Modal visible={loading} contentContainerStyle={styles.modal}>
      <ActivityIndicator animating={true} size={60}  />
      </Modal>
    </NavigationContainer>
    </PaperProvider>

  );
};

export default Route;
