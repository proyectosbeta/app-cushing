/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 15,
  },
});

const SymptomScreen = () => {
  const {t} = useTranslation();
  const items = t('navigate:symptom:items', {returnObjects: true});

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{t('navigate:symptom:title')}</Text>
      {items.map((item, index) => {
        return (
          <View key={index}>
            <Text style={styles.item}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default SymptomScreen;
