import axios from 'axios'
import { Config, Header } from '../config'

const UploaderFile = async (formData) => {
  try {
    console.log('response', formData)
    const headers = await Header()
    const response = await axios.post(
      `http://localhost:3001/upload`,
      formData,
      headers
    )
    console.log('res', response)
    return response
  } catch (error) {
      console.log(error)
    return error
  }
}

export default { UploaderFile }