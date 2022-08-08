import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/Index';
import DescriptionScreen from '../screens/Description/Index';
import SymptomScreen from '../screens/Symptom/Index';
import SettingScreen from '../screens/Setting/Index';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={{
            title: 'Description',
          }}
        />
        <Stack.Screen
          name="Symptom"
          component={SymptomScreen}
          options={{
            title: 'Symptom',
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: 'Setting',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
