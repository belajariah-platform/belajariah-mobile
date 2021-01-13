import {
  QURAN_LIST_REQ,
  QURAN_LIST_SUCC,
  QURAN_LIST_FAIL,
  QURAN_DETAIL_REQ,
  QURAN_DETAIL_SUCC,
  QURAN_DETAIL_FAIL
} from '../../action'

const initialState = {
  data: [],
  loading: false,
  dataDetail: [],
  loadingDetail: false,
}

const QuranReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case QURAN_LIST_REQ:
    return {
      ...state,
      loading: true,
    }
  case QURAN_LIST_SUCC:
    return {
      ...state,
      data: action.payload,
      loading: false,
    }
  case QURAN_LIST_FAIL:
    return {
      ...state,
      loading: false,
    }
  default:
    return state
  }
}

const QuranDetailReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case QURAN_DETAIL_REQ:
    return {
      ...state,
      loadingDetail: true,
    }
  case QURAN_DETAIL_SUCC:
    return {
      ...state,
      dataDetail: action.payload,
      loadingDetail: false,
    }
  case QURAN_DETAIL_FAIL:
    return {
      ...state,
      loadingDetail: false,
    }
  default:
    return state
  }
}

export { QuranReducer, QuranDetailReducer }
