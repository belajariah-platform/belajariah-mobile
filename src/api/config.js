import { store } from '../store'
import { QURAN_SERVICE_ENDPOINT } from '@env'

const Config = {
  QURAN_SERVICE_ENDPOINT,
}

const Header = () => {
  const config = {}
  const token = store.getState().userData.token
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` }
  }
  return config
}


export { Config, Header }