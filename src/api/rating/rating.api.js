import axios from 'axios'
import { Config, Header } from '../config'

const GetAllRating = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/rating_class?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const InsertRatingClass = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.post(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/rating_class`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

const InsertRatingMentor = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.post(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/rating_mentor`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllRatingQuran = async (skip, take, filters) =>  {
  try {
    const response = await axios.post(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/rating`,
    {
      Action:"GET_ALL_RATING_CLASS_QURAN",
        query: {
          filters: filters,
          orders: [
            {
              "field": "id",
              "dir": "desc"
            }
          ],
          skip: skip,
          take: take
        }
    },
    Header())
    return response
  } catch (error) {
    return error
  }
}

const InsertRatingQuran = async (formData) =>  {
  try {
    const response = await axios.post(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/rating `,
    {
      "Action":"GIVE_RATING_CLASS_QURAN",
      "data": formData
    },
    Header())
    return response
  } catch (error) {
    return error
  }
}

export default {
  GetAllRating,
  InsertRatingClass,
  InsertRatingMentor,
  GetAllRatingQuran,
  InsertRatingQuran,
}