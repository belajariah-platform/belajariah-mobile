import { combineReducers } from 'redux'

import UserReducer from './user'
import { QuranReducer, QuranDetailReducer } from './alquran'

export default combineReducers({
  UserReducer,
  QuranReducer,
  QuranDetailReducer,
})
