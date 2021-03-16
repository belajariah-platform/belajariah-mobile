import {
  USER_CLASS_LIST_REQ,
  USER_CLASS_LIST_FAIL,
  USER_CLASS_LIST_SUCC,
  USER_CLASS_LOAD_SCROLL
} from '../../action'

const initialState = {
  loading: false,
  loadingScroll: false,
}

const UserClassReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case USER_CLASS_LIST_REQ:
    return {
      ...state,
      loading: true,
    }
  case USER_CLASS_LOAD_SCROLL:
    return {
      ...state,
      loadingScroll: true,
    }
  case USER_CLASS_LIST_SUCC:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  case USER_CLASS_LIST_FAIL:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  default:
    return state
  }
}

export default UserClassReducer
