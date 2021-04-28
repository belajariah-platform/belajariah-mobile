import { store } from '../store'
import { Base64 } from 'js-base64'
import {
  GOOGLE_SCOPES,
  GOOGLE_CLIENT,
  QURAN_SERVICE_ENDPOINT,
  PAYMENT_GATEWAY_ENDPOINT,
  PAYMENT_GATEWAY_USERNAME,
  BELAJARIAH_SERVICE_ENDPOINT,
  ATTACHMENT_SERVICE_ENDPOINT,
} from '@env'

const Config = {
  GOOGLE_SCOPES,
  GOOGLE_CLIENT,
  QURAN_SERVICE_ENDPOINT,
  PAYMENT_GATEWAY_ENDPOINT,
  PAYMENT_GATEWAY_USERNAME,
  BELAJARIAH_SERVICE_ENDPOINT,
  ATTACHMENT_SERVICE_ENDPOINT,
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
