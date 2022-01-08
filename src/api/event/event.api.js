import axios from 'axios'
import { Config, Header } from '../config'

const GetAllEvent = async (skip, take, filter) =>  {
    try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/event`,
      {
        "Action":"GET_ALL_EVENT",
        "query": {
              "filters": filter,
              "skip": skip,
              "take": take,
              "orders": []
          }
      },
      Header())
      return response
    } catch (error) {
      return error
    }
}

const InsertFormClassIntens = async (form) =>  {
  try {
    const headers = await Header()
    const response = await axios.post(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/event`,
    {
      "Action":"INSERT_FORM_CLASS_INTENS",
      "data": form,
    },
    headers)
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllEvent, InsertFormClassIntens }