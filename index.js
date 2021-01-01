import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage'

import RootNavigation from './App'
import reducer from './src/reducer'
import { name as appName } from './app.json'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
const persistor = persistStore(store)

const Application = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RootNavigation />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Application)
