import axios from 'axios'
import { Config, Header } from '../config'
import { SIGN_OUT } from '../../action'

const SignIn = async (formData) => {
  try {
    const response = await axios.post(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/login`,
      formData,
    )
    return response
  } catch (error) {
    return error
  }
}

const SignOut = () => async dispatch => {
  await dispatch({
    type: SIGN_OUT,
  })
}

const SignUp = async (formData) =>  {
  try {
    console.log(Config.BELAJARIAH_SERVICE_ENDPOINT)
    const headers = await Header()
    const response = await axios.post(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/register`,
    formData,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const VerifyAccount = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/verify_account`,
    formData,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const VerifyPassword = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/verifiy_password`,
    formData,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ResetVerification = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/reset_verification`,
    formData,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ChangePassword = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/change_password`,
    formData,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const GetUser = async (email) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/user/${email}`,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UpdateProfile = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/user`,
    formData,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default {
  SignIn,
  SignOut,
  SignUp,
  GetUser,
  VerifyAccount,
  UpdateProfile,
  ChangePassword,
  VerifyPassword,
  ResetVerification,
}