import {
  MENTOR_REQ,
  MENTOR_SUCC,
  MENTOR_FAIL,
  MENTOR_LOAD_SCROLL,
} from '../../action'

const initialState = {
  loading: false,
  loadingScroll: false,
}

const MentorReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case MENTOR_REQ:
    return {
      ...state,
      loading: true,
    }
  case MENTOR_LOAD_SCROLL:
    return {
      ...state,
      loadingScroll: true,
    }
  case MENTOR_SUCC:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  case MENTOR_FAIL:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  default:
    return state
  }
}

export default MentorReducer
