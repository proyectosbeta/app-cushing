import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import HomeScreen from '../screens/Home/Index';
import DescriptionScreen from '../screens/Description/Index';
import SymptomScreen from '../screens/Symptom/Index';
import SettingScreen from '../screens/Setting/Index';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {t} = useTranslation();

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
            title: t('navigate:home:title'),
          }}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={{
            title: t('navigate:description:title'),
          }}
        />
        <Stack.Screen
          name="Symptom"
          component={SymptomScreen}
          options={{
            title: t('navigate:symptom:title'),
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
};

export default StackNavigator;
