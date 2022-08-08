/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  background: {
    with: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
  image: {
    width: 300,
    resizeMode: 'center',
    height: 300,
  },
});

// eslint-disable-next-line no-unused-vars
const DescriptionScreen = props => {
  const {t} = useTranslation();

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/Cushing.jpg')}
        />
        <Text style={styles.text}>{t('navigate:description')}</Text>
      </View>
    </ImageBackground>
  );
};

export default DescriptionScreen;
