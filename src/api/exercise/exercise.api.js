import axios from 'axios'
import { Config, Header } from '../config'

const GetAllExercise = async (skip, take, filters) =>  {
  try {
    const response = await axios.get(`
    ${Config.MAIN_SERVICE_ENDPOINT}/exercises?skip=${skip}&take=${take}&filter=${filters}`,
    Header(),
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllExerciseReading = async (skip, take, filters) =>  {
  try {
    const response = await axios.get(`
      ${Config.MAIN_SERVICE_ENDPOINT}/exercise_reading?skip=${skip}&take=${take}&filter=${filters}`,
    Header(),
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllExercise, GetAllExerciseReading }