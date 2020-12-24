import axios from 'axios'
import { store } from '../../redux/store'

const API_URL = 'http//:localhost:8001'

const getConfig = () => {
  const config = {}
  const token = store.getState().userData.token
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` }
  }
  return config
}

export const GetData = async (dataUrl) => {
  try {
    const url = API_URL + '/' + dataUrl
    const response = await axios.get(url, getConfig())
    return response
  } catch (err) {
    throw err
  }
}

export const PostData = async (dataUrl, formData) => {
  try {
    console.log(dataUrl, formData)
    const url = API_URL + '/' + dataUrl
    const response = await axios.post(url, formData, getConfig())
    return response
  } catch (err) {
    throw err
  }
}

export const PutData = async (dataUrl, formData) => {
  try {
    // checkConnection();
    const url = API_URL + '/' + dataUrl
    const response = await axios.patch(url, formData, getConfig())
    return response
  } catch (err) {
    throw err
  }
}

export const DeleteData = async dataUrl => {
  try {
    // checkConnection();
    const url = API_URL + '/' + dataUrl
    const response = await axios.delete(url, getConfig())
    return response
  } catch (err) {
    throw err
  }
}
