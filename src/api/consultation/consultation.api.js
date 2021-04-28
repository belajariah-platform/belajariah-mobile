import axios from 'axios'
import { Config, Header } from '../config'

const GetAllConsultation = async (skip, take, filters, sort, search) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultations?skip=${skip}&take=${take}&filter=${filters}&order=id|${sort}&search=${search}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllConsultationUser = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation/user?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllConsultationMentor = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation/mentor?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllConsultationLimit = async (skip, take, filters) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation/limit?skip=${skip}&take=${take}&filter=${filters}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllConsultationSpamUser = async () =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation/spam_user`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetAllConsultationSpamMentor = async () =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation/spam_mentor`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const InsertConsultation = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.post(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UpdateConsultation = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ReadConsultation = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation/read`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ConfirmConsultation = async (formData) => {
  try {
    const headers = await Header()
    const response = await axios.put(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/consultation/confirm`,
      formData,
      headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default {
  GetAllConsultation,
  GetAllConsultationLimit,
  GetAllConsultationMentor,
  GetAllConsultationUser,
  GetAllConsultationSpamUser,
  GetAllConsultationSpamMentor,
  InsertConsultation,
  UpdateConsultation,
  ReadConsultation,
  ConfirmConsultation,
}