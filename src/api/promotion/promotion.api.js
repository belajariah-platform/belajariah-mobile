import axios from 'axios'
import { Config, Header } from '../config'

const GetAllPromotionHeader = async (filters) =>  {
    try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/promotion`,
      {
        "Action":"GET_ALL_PROMOTION_HEADER",
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

const GetAllPromotion = async (data) =>  {
    try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/promotion`,
      {
        "Action":"GET_ALL_PROMOTION",
          "data": data
      },
      Header())
      return response
    } catch (error) {
      return error
    }
}

const ClaimPromotion = async (data) =>  {
  try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/promotion`,
      {
        "Action":"CLAIM_PROMOTION",
        "data": data
      },
      Header())
      return response
    } catch (error) {
      return error
    }
}

export default { GetAllPromotionHeader, GetAllPromotion, ClaimPromotion }