import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import reducer from '../reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
const persistor = persistStore(store)

export  { store, persistor }