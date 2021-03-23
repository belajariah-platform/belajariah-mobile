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

const UpdateProgressUserClass = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/user_class/progress`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllUserClass, GetUserClass, UpdateProgressUserClass }