/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function SymptomScreen() {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>{t('navigate:symptom:title')}</Text>
      <Text>{t('navigate:symptom:description')}</Text>
    </View>
  );
}
