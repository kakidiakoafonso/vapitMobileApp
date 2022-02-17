// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TourFirst from '../views/TourFirst/TourFirst';
import TourSecond from '../views/TourSecond/TourSecond';
import TourTird from '../views/TourTird/TourTird';
import SelectCidade from '../views/SelectCidade/SelectCidade';
import Cidades from '../views/Cidades/Cidades';
import Home from '../views/Home/Home';

import { FontAwesome,AntDesign } from '@expo/vector-icons';
import { BackButton, Box, Logo } from './styled';
import Linhas from '../views/Linhas/Linhas';
import { cores } from '../config/constants';
import { useNavigation } from '@react-navigation/native';
import Paradas from '../views/Paradas/Paradas';
import Horario from '../views/Horario/Horario';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Route() 
{
  const nav = useNavigation()
  return (
      <Stack.Navigator initialRouteName='Horario'
        screenOptions={{headerShown:false,
        headerLeft:()=>
        <BackButton activeOpacity={0.7} onPress={()=>nav.goBack()}>
            <AntDesign name="arrowleft" size={24} color={cores.white} />
        </BackButton>,        
        headerRight:()=>
        <Logo source={require('../assets/images/Logo-White.png')}/>,
        headerStyle:{backgroundColor:cores.purple80},
        headerTitleStyle:{color:cores.white}       
      }}>
        <Stack.Screen name="TourFirst" component={TourFirst} />
        <Stack.Screen name="TourSecond" component={TourSecond} />
        <Stack.Screen name="TourTird" component={TourTird} />
        <Stack.Screen name="SelectCidade" component={SelectCidade} />
        <Stack.Screen name="Cidades" component={Cidades} />
        <Stack.Screen name="Paradas" component={Paradas} options={{headerShown:true,title:"Paradas das linhas"}}/>
        <Stack.Screen name="Horario" component={Horario} options={{headerShown:true,title:"Grades de Horários"}}/>
        <Stack.Screen name="Tab" component={TabRoute} />
      </Stack.Navigator>
  );
}

function TabRoute()
{
  const nav = useNavigation()
  return (
      <Tab.Navigator screenOptions={{headerShown:true,
        headerLeft:()=>
        <BackButton activeOpacity={0.7} onPress={()=>nav.goBack()}>
            <AntDesign name="arrowleft" size={24} color={cores.white} />
        </BackButton>,
        headerRight:()=>
        <Logo source={require('../assets/images/Logo-White.png')}/>,
        headerStyle:{backgroundColor:cores.purple80},
        headerTitleStyle:{color:cores.white}      
      }}>
        <Tab.Screen name="Home" component={Home} 
          options={{
            title:"",
            tabBarIcon:()=>
            <Box>
              <FontAwesome name="home" size={24} color="black" />
            </Box>,
            headerShown:false
          }}
        />
        <Tab.Screen name="Linhas" component={Linhas} options={{
          title:"Linhas de Ônibus"
        }} />
      </Tab.Navigator>
  );
}

export default Route;