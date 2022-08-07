/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  background: {
    with: '100%',
    height: '100%',
    backgroundColor: '#465f7e',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14,
  },
});

// eslint-disable-next-line no-unused-vars
function HomeScreen(props) {
  const {t} = useTranslation();

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.view}>
        <Text style={styles.title}>Cushing</Text>
        <Text style={styles.text}>{t('navigate:description')}</Text>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
