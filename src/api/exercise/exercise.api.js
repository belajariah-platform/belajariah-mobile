import axios from 'axios'
import { Config, Header } from '../config'

const GetAllExercise = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/exercises?skip=${skip}&take=${take}&filter=${filters}`,
    headers,
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllExerciseReading = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/exercise_reading?skip=${skip}&take=${take}&filter=${filters}`,
    headers,
    )
    return response
  } catch (error) {
    return error
  }
}

const InsertExerciseReading = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_exercise_reading`,
    formData,
    headers,
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllExercise, GetAllExerciseReading, InsertExerciseReading }