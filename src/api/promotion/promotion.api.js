import axios from 'axios'
import { Config, Header } from '../config'

const GetAllPromotion = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/promotions?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetPromotion = async (code) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/promotion/${code}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllPromotion, GetPromotion }