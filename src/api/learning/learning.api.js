import axios from 'axios'
import { Config, Header } from '../config'

const GetAllLearning = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/learnings?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}


const GetAllLearningQuran = async (code) =>  {
  try {
    const headers = await Header()
    const response = await axios.post(
    `${Config.BELAJARIAH_SERVICE_ENDPOINT}/learning`,
    {
      Action:"GET_ALL_LEARNING_QURAN",
      query: {
            filters: [{"field": "class_code", "type": "text", "value": `${code}`}],
            orders: [{"field": "id", "dir": "asc"}],
            skip: 0,
            take: 100
        }
    },
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllLearning, GetAllLearningQuran }