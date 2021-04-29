import AsyncStorage from '@react-native-community/async-storage'
import { SIGN_IN, SIGN_OUT, USER_INFO } from '../../action'

const initialState = {
  token: '',
  userInfo : {},
  isLogin: false,
  loginType : '',
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
  case SIGN_IN:
    setToAsyncStorage(action.user, action.token)
    return {
      ...state,
      isLogin: true,
      token : action.token,
      userInfo : action.user,
      loginType : action.loginType,
    }
  case SIGN_OUT:
    clearAsyncStorage()
    return {
      ...initialState
    }
  case USER_INFO:
    return {
      ...state,
      userInfo : action.user,
    }
  default:
    return state
  }
}

const setToAsyncStorage = async (payload, token) => {
  await AsyncStorage.setItem('token', token)
  await AsyncStorage.setItem('user_info', JSON.stringify(payload))
}

const clearAsyncStorage = async () => {
  await AsyncStorage.clear()
}

export default UserReducer