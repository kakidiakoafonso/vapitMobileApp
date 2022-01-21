// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TourFirst from '../views/TourFirst/TourFirst';
import TourSecond from '../views/TourSecond/TourSecond';
import TourTird from '../views/TourTird/TourTird';
import SelectCidade from '../views/SelectCidade/SelectCidade';
import Cidades from '../views/Cidades/Cidades';


const Stack = createNativeStackNavigator();

function Route() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="TourFirst" component={TourFirst} />
        <Stack.Screen name="TourSecond" component={TourSecond} />
        <Stack.Screen name="TourTird" component={TourTird} />
        <Stack.Screen name="SelectCidade" component={SelectCidade} />
        <Stack.Screen name="Cidades" component={Cidades} />
      </Stack.Navigator>
  );
}

export default Route;