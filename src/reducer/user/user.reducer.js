import { SIGN_IN, SIGN_OUT } from '../../action'
const initialState = {
  token: '',
  userInfo : {},
  isLogin: false,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
  case SIGN_IN:
    return {
      ...state,
      isLogin: true,
      userInfo : action.payload,
    }
  case SIGN_OUT:
    return initialState
  default:
    return state
  }
}

export default UserReducer