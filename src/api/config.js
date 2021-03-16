import AsyncStorage from '@react-native-community/async-storage'

import {
  MAIN_SERVICE_ENDPOINT,
  QURAN_SERVICE_ENDPOINT,
  BELAJARIAH_SERVICE_ENDPOINT,
  ATTACHMENT_SERVICE_ENDPOINT,
} from '@env'

const Config = {
  QURAN_SERVICE_ENDPOINT,
  MAIN_SERVICE_ENDPOINT,
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

export { Config, Header }
