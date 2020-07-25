import React from 'react';
import Routes from './src/Routes/MainNavigation';
import * as eva from '@eva-design/eva';
import {default as theme} from './theme.json';
import {default as mapping} from './mapping.json';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Redux/store';

function App(props) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider
            {...eva}
            theme={{...eva.light, ...theme}}
            customMapping={mapping}>
            <Routes />
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
export default App;
