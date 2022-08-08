import React from 'react';
// import RootNavigator from './app/navigation/RootNavigator';
import StackNavigator from './app/navigation/StackNavigator';
import './app/constants/IMLocalize';

const App: () => Node = () => {
  // return <RootNavigator />;
  return <StackNavigator />;
};

export default App;
