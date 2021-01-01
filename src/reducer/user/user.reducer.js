import { SIGN_IN, SIGN_OUT } from '../../action'
const initialState = {
  token: '',
  isLogin: false,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
  case SIGN_IN:
    return {
      ...state,
      isLogin: true,
      ...action.payload,
    }
  case SIGN_OUT:
    return initialState
  default:
    return state
  }
}

export default UserReducer