/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
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
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/Cushing.jpg')}
        />
        <Text style={styles.text}>{t('common:description:description')}</Text>
      </View>

  );
};

export default DescriptionScreen;
