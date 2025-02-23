import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import { AppNavigation } from './navigation/AppNavigation';



const App = () => {

 
  return (
   
    <Provider store={store}>
      

      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </PersistGate>
     

    </Provider>
   
  );
};

export default App; 