import axios from 'axios'
import { Config, Header } from '../config'

const GetACCDetail = async (skip, take, filters) =>  {
    try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/coaching_program`,
      {
        "Action":"GET_ALL_MASTER_COACHING_PROGRAM",
          "query": {
              "filters": [],
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

const InsertFormACC = async (formData) =>  {
    try {
      const response = await axios.post(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/coaching_program`,
      {
        "Action":"INSERT_COACHING_PROGRAM",
        "data": formData
      },
      Header())
      return response
    } catch (error) {
      return error
    }
}

const ConfirmFormACC = async (formData) =>  {
  try {
    // console.log(formData)
    const response = await axios.post(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/coaching_program`,
    {
      "Action":"CONFIRM_COACHING_PROGRAM",
      "data": formData
    },
    Header())
    return response
  } catch (error) {
    return error
  }
}

export default {
    GetACCDetail,
    InsertFormACC,
    ConfirmFormACC,
}