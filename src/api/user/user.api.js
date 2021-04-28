import axios from 'axios'
import { GoogleSignin } from '@react-native-community/google-signin'

import { SIGN_OUT } from '../../action'
import { Config, Header } from '../config'

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

const GoogleSignIn = async (formData) => {
  try {
    console.log(Config.BELAJARIAH_SERVICE_ENDPOINT)
    const response = await axios.post(
      `${Config.BELAJARIAH_SERVICE_ENDPOINT}/google_login`,
      formData,
    )
    return response
  } catch (error) {
    return error
  }
}

const GoogeSignOut = async () => {
  try {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
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

const VerifyEmail = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/verify_email`,
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

const ChangePasswordPrivate = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/change_password_private`,
    formData,
    headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ChangePasswordPublic = async (formData) =>  {
  try {
    const headers = await Header()
    const response = await axios.put(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/change_password_public`,
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

const CheckEmail = async (email) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/check_email/${email}`,
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
  CheckEmail,
  GoogleSignIn,
  GoogeSignOut,
  UpdateProfile,
  VerifyEmail,
  VerifyAccount,
  ChangePasswordPublic,
  ChangePasswordPrivate,
  ResetVerification,
}