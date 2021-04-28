import axios from 'axios'
import { Config, Header } from '../config'

const GetAllClassTest = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/tests?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UpdateClassTest = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/test`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllClassTest, UpdateClassTest }