import axios from 'axios'
import { Config, Header } from '../config'

const GetAllStory = async (skip, take, filters) =>  {
  try {
    // const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/stories?skip=${skip}&take=${take}&filter=${filters}`,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllStory }