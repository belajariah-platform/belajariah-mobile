import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'

import RootNavigation from './App'
import { name as appName } from './app.json'
import { store, persistor } from './src/store'

const Application = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RootNavigation />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Application)