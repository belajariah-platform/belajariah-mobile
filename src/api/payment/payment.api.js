import axios from 'axios'
import { Config, Header } from '../config'

const GetAllPayment = async (skip, take, filters, sort, search) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/payments?skip=${skip}&take=${take}&filter=${filters}&order=id|${sort}&search=${search}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllPaymentByUserID = async (skip, take, filters, sort) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/payment?skip=${skip}&take=${take}&filter=${filters}&order=id|${sort}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const InsertPayment = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.post(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/payment`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ConfirmPayment = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/payment/confirm`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UploadPayment = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/payment/upload`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default {
  GetAllPayment,
  GetAllPaymentByUserID,
  InsertPayment,
  ConfirmPayment,
  UploadPayment,
}