import axios from 'axios'
import { Response } from '../../utils'
import { Config, Header } from '../config'
import { USER_CLASS_DETAIL_REQ } from '../../action'

const GetAllUserClass = async (skip, take, filters, sort) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class?skip=${skip}&take=${take}&filter=${filters}&order=id|${sort}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetUserClass = (code) => async dispatch => {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class/detail/${code}`,
    headers
    )
    if (response.status == Response.SUCCESS) {
      await dispatch({
        type: USER_CLASS_DETAIL_REQ,
        payload: response.data.result,
      })
    }
    return response
  } catch (err) {
    return err
  }
}

const GetAllUserClassQuran = async (filter) =>  {
  try {
    const headers = await Header()
    const response = await axios.post(
    `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class`,
    {
      Action:"GET_ALL_USER_CLASS_QURAN",
      query: {
            filters: filter,
            orders: [{"field": "id", "dir": "desc"}],
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

const GetAllUserClassQuranDetail = async (skip, take, filter) =>  {
  try {
    const headers = await Header()
    const response = await axios.post(
    `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class`,
    {
      Action:"GET_ALL_USER_CLASS_DETAIL_QURAN",
      query: {
            filters: filter,
            orders: [{"field": "id", "dir": "desc"}],
            skip: skip,
            take: take
        }
    },
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllUserClassQuranSchedule = async (filter) =>  {
  try {
    const headers = await Header()
    const response = await axios.post(
    `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class`,
    {
      Action:"GET_ALL_USER_CLASS_SCHEDULE_QURAN",
      query: {
            filters: filter,
            orders: [{"field": "sequence", "dir": "asc"}],
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

const InsertUserClassQuranSchedule = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.post(
    `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class`,
    {
      Action:"INSERT_USER_CLASS_QURAN_SCHEDULE",
      data: formData
    },
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UpdateUserClassQuranSchedule = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.post(
    `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class`,
    {
      Action:"UPDATE_USER_CLASS_QURAN_SCHEDULE",
      data: formData
    },
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UpdateProgressUserClassQuran = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.post(
    `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class`,
    {
      Action:"UPDATE_USER_CLASS_QURAN_PROGRESS",
      data: formData
    },
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { 
  GetUserClass, 
  GetAllUserClass, 
  GetAllUserClassQuran,
  GetAllUserClassQuranDetail,
  GetAllUserClassQuranSchedule,
  InsertUserClassQuranSchedule,
  UpdateUserClassQuranSchedule,
  UpdateProgressUserClassQuran, 
 }