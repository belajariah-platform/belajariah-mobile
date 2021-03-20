import axios from 'axios'
import { Config } from '../config'

const GetAllQuran = async () =>  {
  try {
    const response = await axios.get(`${Config.QURAN_SERVICE_ENDPOINT}/v1/surat`)
    return response
  } catch (error) {
    return error
  }
}

const GetDetailQuran = async ({ id, count })  => {
  try {
    const response = await axios.get(`${Config.QURAN_SERVICE_ENDPOINT}/v1/ayatweb/${id}/0/0/${count}`)
    return response
  } catch (error) {
    
    return error
  }
}

export default { GetAllQuran, GetDetailQuran }