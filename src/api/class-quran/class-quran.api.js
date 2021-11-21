import axios from 'axios'
import { Config, Header } from '../config'

const GetAllClass = async (skip, take, filters) =>  {
    try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/class`,
      {
        "Action":"GET_ALL_CLASS_QURAN",
          "query": {
              "filters": filters,
              "skip": 0,
              "orders": [
                      {
                          "field": "id",
                          "dir": "asc"
                      }
                  ],
              "take": 100
          }
      },
      Header())
      return response
    } catch (error) {
      return error
    }
}

const GetAllMentor = async (skip, take, filters) =>  {
    try {
      const headers = await Header()
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/class?skip=${skip}&take=${take}&filter=${filters}`,
      headers
      )
      return response
    } catch (error) {
      return error
    }
}

export default {
    GetAllClass,
    GetAllMentor,
}