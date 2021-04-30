import {
  TRANSACT_ALL_REQ,
  TRANSACT_ALL_SUCC,
  TRANSACT_ALL_FAIL,
  TRANSACT_ALL_SCROLL,
  TRANSACT_ACCEPT_REQ,
  TRANSACT_ACCEPT_SUCC,
  TRANSACT_ACCEPT_FAIL,
  TRANSACT_ACCEPT_SCROLL,
  TRANSACT_DECLINE_REQ,
  TRANSACT_DECLINE_SUCC,
  TRANSACT_DECLINE_FAIL,
  TRANSACT_DECLINE_SCROLL,
  TRANSACT_USER_LIST_REQ,
  TRANSACT_USER_LIST_SUCC,
  TRANSACT_USER_LIST_FAIL,
  TRANSACT_USER_LOAD_SCROLL,
} from '../../action'

const initialState = {
  loading: false,
  loadingScroll: false,
  loadingAccept: false,
  loadingAcceptScroll: false,
  loadingDecline: false,
  loadingDeclineScroll: false,
  loadingAll: false,
  loadingAllScroll: false,
}

const TransactionReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case TRANSACT_USER_LIST_REQ:
    return {
      ...state,
      loading: true,
    }
  case TRANSACT_USER_LOAD_SCROLL:
    return {
      ...state,
      loadingScroll: true,
    }
  case TRANSACT_USER_LIST_SUCC:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  case TRANSACT_USER_LIST_FAIL:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  default:
    return state
  }
}

const TransactionAllReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case TRANSACT_ALL_REQ:
    return {
      ...state,
      loadingAll: true,
    }
  case TRANSACT_ALL_SCROLL:
    return {
      ...state,
      loadingAllScroll: true,
    }
  case TRANSACT_ALL_SUCC:
    return {
      ...state,
      loadingAll: false,
      loadingAllScroll : false
    }
  case TRANSACT_ALL_FAIL:
    return {
      ...state,
      loadingAll: false,
      loadingAllScroll : false
    }
  default:
    return state
  }
}

const TransactionAcceptReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case TRANSACT_ACCEPT_REQ:
    return {
      ...state,
      loadingAccept: true,
    }
  case TRANSACT_ACCEPT_SCROLL:
    return {
      ...state,
      loadingAcceptScroll: true,
    }
  case TRANSACT_ACCEPT_SUCC:
    return {
      ...state,
      loadingAccept: false,
      loadingAcceptScroll : false
    }
  case TRANSACT_ACCEPT_FAIL:
    return {
      ...state,
      loadingAccept: false,
      loadingAcceptScroll : false
    }
  default:
    return state
  }
}

const TransactionDeclineReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case TRANSACT_DECLINE_REQ:
    return {
      ...state,
      loadingDecline: true,
    }
  case TRANSACT_DECLINE_SCROLL:
    return {
      ...state,
      loadingDeclineScroll: true,
    }
  case TRANSACT_DECLINE_SUCC:
    return {
      ...state,
      loadingDecline: false,
      loadingDeclineScroll : false
    }
  case TRANSACT_DECLINE_FAIL:
    return {
      ...state,
      loadingDecline: false,
      loadingDeclineScroll : false
    }
  default:
    return state
  }
}

export {
  TransactionReducer,
  TransactionAllReducer,
  TransactionAcceptReducer,
  TransactionDeclineReducer,
}
