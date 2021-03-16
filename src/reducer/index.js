import { combineReducers } from 'redux'

import UserReducer from './user'
import StoryReducer from './story'
import MentorReducer from './mentor'
import UserClassReducer from './user-class'
import { QuranReducer, QuranDetailReducer } from './alquran'
import {
  TransactionReducer,
  TransactionAllReducer,
  TransactionAcceptReducer,
  TransactionDeclineReducer,
} from './transaction'
import {
  ConsultationReducer,
  ConsultationAllReducer,
  ConsultationAcceptReducer,
  ConsultationDeclineReducer,
} from './consultation'

export default combineReducers({
  UserReducer,
  QuranReducer,
  StoryReducer,
  MentorReducer,
  UserClassReducer,
  QuranDetailReducer,
  ConsultationReducer,
  ConsultationAllReducer,
  TransactionReducer,
  TransactionAllReducer,
  TransactionAcceptReducer,
  TransactionDeclineReducer,
  ConsultationAcceptReducer,
  ConsultationDeclineReducer,
})
