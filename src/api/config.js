import { store } from '../store'
import { Base64 } from 'js-base64'
import {
  QURAN_SERVICE_ENDPOINT,
  PAYMENT_GATEWAY_ENDPOINT,
  PAYMENT_GATEWAY_USERNAME
} from '@env'

const Config = {
  QURAN_SERVICE_ENDPOINT,
  PAYMENT_GATEWAY_ENDPOINT,
}

const Header = () => {
  const config = {}
  const token = store.getState().userData.token
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` }
  }
  return config
}

const CheckoutConfig = {
  headers : {
    'Authorization' : 'Basic ' + Base64.encode(PAYMENT_GATEWAY_USERNAME + ':'),
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  }
}

export { Config, Header, CheckoutConfig }
