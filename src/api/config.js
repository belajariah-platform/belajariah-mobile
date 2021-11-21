import { Base64 } from 'js-base64'
import AsyncStorage from '@react-native-community/async-storage'

import {
  ADMIN_CONTACT,
  GOOGLE_SCOPES,
  GOOGLE_CLIENT,
  PRIVACY_POLICY_URL,
  TERMS_CONDITIONS_URL,
  MAIN_SERVICE_ENDPOINT,
  QURAN_SERVICE_ENDPOINT,
  PAYMENT_GATEWAY_ENDPOINT,
  PAYMENT_GATEWAY_USERNAME,
  BELAJARIAH_SERVICE_ENDPOINT,
  ATTACHMENT_SERVICE_ENDPOINT,
} from '@env'

const Config = {
  ADMIN_CONTACT,
  GOOGLE_SCOPES,
  GOOGLE_CLIENT,
  PRIVACY_POLICY_URL,
  TERMS_CONDITIONS_URL,
  MAIN_SERVICE_ENDPOINT,
  QURAN_SERVICE_ENDPOINT,
  PAYMENT_GATEWAY_ENDPOINT,
  BELAJARIAH_SERVICE_ENDPOINT,
  ATTACHMENT_SERVICE_ENDPOINT,
}

const Header = async () => {
  try {
    const user = await AsyncStorage.getItem('user_info')
      ? JSON.parse(await AsyncStorage.getItem('user_info'))
      : null
    const token = await AsyncStorage.getItem('token')

    return {
      headers : {
        Email: Object.keys(user).length !== 0 ? user.Email : 'belajariah20@gmail.com',
        User: Object.keys(user).length !== 0 ? JSON.stringify(user) : '',
        'Token-Auth': token,
        'by-pass': true,
      }
    }
  } catch (error) {
    return error
  }
}

const HeaderPayment = {
  headers : {
    'Authorization' : 'Basic ' + Base64.encode(PAYMENT_GATEWAY_USERNAME + ':'),
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  }
}

export { Config, Header, HeaderPayment }
