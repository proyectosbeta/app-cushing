import React from 'react';
// import RootNavigator from './app/navigation/RootNavigator';
import StackNavigator from './app/navigation/StackNavigator';
import './app/constants/IMLocalize';

function App(): JSX.Element {
  // return <RootNavigator />;
  return <StackNavigator />;
}

export default App;
