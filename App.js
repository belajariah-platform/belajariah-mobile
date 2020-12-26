<<<<<<< HEAD
import React from 'react';
import {Provider} from 'react-redux';
import * as eva from '@eva-design/eva';
import {default as theme} from './theme.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as mapping} from './mapping.json';
import {PersistGate} from 'redux-persist/integration/react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

import Routes from './src/navigations';
import {store, persistor} from './src/Redux/store';
=======
import React from 'react'
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva'
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { default as mapping } from './mapping.json'
import { PersistGate } from 'redux-persist/integration/react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'

import Routes from './src/navigations'
import { store, persistor } from './src/Redux/store'
>>>>>>> e1fe67e3ee073d77306753e0545e124b19481e2c

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
<<<<<<< HEAD
        theme={{...eva.light, ...theme}}
=======
        theme={{ ...eva.light, ...theme }}
>>>>>>> e1fe67e3ee073d77306753e0545e124b19481e2c
        customMapping={mapping}>
        <Routes />
      </ApplicationProvider>
    </PersistGate>
  </Provider>
<<<<<<< HEAD
);
export default App;
=======
)
export default App
>>>>>>> e1fe67e3ee073d77306753e0545e124b19481e2c
