import axios from 'axios'
import { Config, Header } from '../config'

const GetAllMentor = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/mentors?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetMentor = async (email) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/mentor/${email}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}


export default { GetAllMentor, GetMentor }