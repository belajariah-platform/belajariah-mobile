import axios from 'axios'
import { Config, Header } from '../config'

const GetAllUserClass = async (skip, take, filters, sort) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class?skip=${skip}&take=${take}&filter=${filters}&order=id|${sort}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UpdateProgressUserClass = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class/progress`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllUserClass, UpdateProgressUserClass }