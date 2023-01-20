/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Menu from '../../components/Menu';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  image: {
    width: 300,
    resizeMode: 'center',
    height: 300,
  },
});

// eslint-disable-next-line no-unused-vars
const HomeScreen = props => {
  global.currentScreenIndex = 'Home';
  const {navigation} = props;

  return (
      <View style={styles.view}>
        <Text style={styles.title}>Cushing</Text>
        <Menu navigation={{navigation}} />
      </View>
  );
};

export default HomeScreen;
