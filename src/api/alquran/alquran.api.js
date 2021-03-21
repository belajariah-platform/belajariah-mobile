import axios from 'axios'
import { Config } from '../config'

const GetAllQuran = async () =>  {
  try {
    const response = await axios.get(`${Config.QURAN_SERVICE_ENDPOINT}/surah`)
    return response
  } catch (error) {
    return error
  }
}

const GetDetailQuran = async ({ id })  => {
  try {
    const response = await axios.get(`${Config.QURAN_SERVICE_ENDPOINT}/surah/${id}`)
    return response
  } catch (error) {
    
    return error
  }
}

export default { GetAllQuran, GetDetailQuran }