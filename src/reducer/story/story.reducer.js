import {
  STORY_LIST_REQ,
  STORY_LIST_SUCC,
  STORY_LIST_FAIL,
  STORY_LOAD_SCROLL,
} from '../../action'

const initialState = {
  loading: false,
  loadingScroll: false,
}

const StoryReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case STORY_LIST_REQ:
    return {
      ...state,
      loading: true,
    }
  case STORY_LOAD_SCROLL:
    return {
      ...state,
      loadingScroll: true,
    }
  case STORY_LIST_SUCC:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  case STORY_LIST_FAIL:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  default:
    return state
  }
}

export default StoryReducer
