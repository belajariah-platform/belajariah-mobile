import {
  CONSUL_ALL_REQ,
  CONSUL_ALL_SUCC,
  CONSUL_ALL_FAIL,
  CONSUL_ALL_SCROLL,
  CONSUL_ACCEPT_REQ,
  CONSUL_ACCEPT_SUCC,
  CONSUL_ACCEPT_FAIL,
  CONSUL_ACCEPT_SCROLL,
  CONSUL_DECLINE_REQ,
  CONSUL_DECLINE_SUCC,
  CONSUL_DECLINE_FAIL,
  CONSUL_DECLINE_SCROLL,
  CONSUL_MENTOR_LIST_REQ,
  CONSUL_MENTOR_LIST_SUCC,
  CONSUL_MENTOR_LIST_FAIL,
  CONSUL_MENTOR_LOAD_SCROLL,
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

const ConsultationReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case CONSUL_MENTOR_LIST_REQ:
    return {
      ...state,
      loading: true,
    }
  case CONSUL_MENTOR_LOAD_SCROLL:
    return {
      ...state,
      loadingScroll: true,
    }
  case CONSUL_MENTOR_LIST_SUCC:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  case CONSUL_MENTOR_LIST_FAIL:
    return {
      ...state,
      loading: false,
      loadingScroll : false
    }
  default:
    return state
  }
}

const ConsultationAllReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case CONSUL_ALL_REQ:
    return {
      ...state,
      loadingAll: true,
    }
  case CONSUL_ALL_SCROLL:
    return {
      ...state,
      loadingAllScroll: true,
    }
  case CONSUL_ALL_SUCC:
    return {
      ...state,
      loadingAll: false,
      loadingAllScroll : false
    }
  case CONSUL_ALL_FAIL:
    return {
      ...state,
      loadingAll: false,
      loadingAllScroll : false
    }
  default:
    return state
  }
}

const ConsultationAcceptReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case CONSUL_ACCEPT_REQ:
    return {
      ...state,
      loadingAccept: true,
    }
  case CONSUL_ACCEPT_SCROLL:
    return {
      ...state,
      loadingAcceptScroll: true,
    }
  case CONSUL_ACCEPT_SUCC:
    return {
      ...state,
      loadingAccept: false,
      loadingAcceptScroll : false
    }
  case CONSUL_ACCEPT_FAIL:
    return {
      ...state,
      loadingAccept: false,
      loadingAcceptScroll : false
    }
  default:
    return state
  }
}

const ConsultationDeclineReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case CONSUL_DECLINE_REQ:
    return {
      ...state,
      loadingDecline: true,
    }
  case CONSUL_DECLINE_SCROLL:
    return {
      ...state,
      loadingDeclineScroll: true,
    }
  case CONSUL_DECLINE_SUCC:
    return {
      ...state,
      loadingDecline: false,
      loadingDeclineScroll : false
    }
  case CONSUL_DECLINE_FAIL:
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
  ConsultationReducer,
  ConsultationAllReducer,
  ConsultationAcceptReducer,
  ConsultationDeclineReducer,
}
