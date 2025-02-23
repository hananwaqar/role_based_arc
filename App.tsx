import React from 'react';

import { MainApp } from './src/MainApp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return <GestureHandlerRootView style={{flex: 1}}>
     <MainApp />
      </GestureHandlerRootView>
};

export default App;
