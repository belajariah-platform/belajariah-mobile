import axios from 'axios'
import { Config, Header } from '../config'

const GetAllCountryCode = async () =>  {
    try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/country_code`,
      {
        "Action":"GET_ALL_COUNTRY_CODE",
          "query": {
              "filters": [],
              "skip": 0,
              "orders": [
                      {
                          "field": "country",
                          "dir": "asc"
                      }
                  ],
              "take": 1000
          }
      },
      Header())
      return response
    } catch (error) {
      return error
    }
}

export default { GetAllCountryCode }