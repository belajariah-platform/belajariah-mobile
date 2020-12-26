import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'
import rootReducers from './Reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
export const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
export const persistor = persistStore(store)
