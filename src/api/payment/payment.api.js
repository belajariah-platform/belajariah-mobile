import axios from 'axios'
import { Config, Header, HeaderPayment } from '../config'

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

const GetAllPaymentReject = async (skip, take, filters, sort, search) =>  {
  try {
    const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_SERVICE_ENDPOINT}/payments_reject?skip=${skip}&take=${take}&filter=${filters}&order=id|${sort}&search=${search}`,
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
      ${Config.BELAJARIAH_SERVICE_ENDPOINT}/payment?skip=${skip}&take=${take}&filter=${filters}&order=modified_date|${sort}`,
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

const ChargeBankVA = async (data) => {
  const body = {
    'payment_type' : 'bank_transfer',
    'customer_details': {
      'email': data.customer_details.email,
      'first_name': data.customer_details.first_name,
      'last_name': data.customer_details.last_name,
      'phone': data.customer_details.phone
    },
    'transaction_details' : {
      'gross_amount' : data.transaction_details.gross_amount,
      'order_id' : data.transaction_details.order_id
    },
    'item_details' : {
      'id' : data.item_details.id,
      'price' : data.item_details.price,
      'quantity' : data.item_details.quantity,
      'name' : data.item_details.name
    },
    'bank_transfer' : {
      'bank' : data.option
      //bisa pakai va_number tertentu
      //va_number : '12345678'
    }
  }

  try {
    const response = await axios.post(`${Config.PAYMENT_GATEWAY_ENDPOINT}/charge`, body, HeaderPayment)
    return response.data
  } catch (error) {
    return error
  }
}

const ChargeCStore = async (data) => {
  const body = {
    'payment_type' : 'cstore',
    'customer_details': {
      'email': data.customer_details.email,
      'first_name': data.customer_details.first_name,
      'last_name': data.customer_details.last_name,
      'phone': data.customer_details.phone
    },
    'transaction_details' : {
      'gross_amount' : data.transaction_details.gross_amount,
      'order_id' : data.transaction_details.order_id
    },
    'item_details' : {
      'id' : data.item_details.id,
      'price' : data.item_details.price,
      'quantity' : data.item_details.quantity,
      'name' : data.item_details.name
    },
    'cstore' : {
      'store' : data.option
    }
  }

  data.code == 'indomaret' ? (
    body.cstore.message = data.free_text
  ) : (
    data.code == 'alfamart' && (
      body.cstore.alfamart_free_text_1 = data.free_text
    )
  )

  try {
    const response = await axios.post(`${Config.PAYMENT_GATEWAY_ENDPOINT}/charge`, body, HeaderPayment)
    return response.data
  } catch (error) {
    return error
  }
}

const ChargeBankTransfer = async () => {
  //transfer ke rekening bank, tidak memakai Midtrans
  const response = {
    status_code : 201
  }
  return response
}

const GetTransaction = async (order_id) => {
  try {
    const response = await axios.get(`${Config.PAYMENT_GATEWAY_ENDPOINT}/${order_id}/status`, HeaderPayment)
    return response.data
  } catch (error) {
    return error
  }
}

export default {
  InsertPayment,
  UploadPayment,
  ConfirmPayment,
  GetAllPayment,
  GetAllPaymentReject,
  GetAllPaymentByUserID,

  ChargeBankVA,
  ChargeCStore,
  GetTransaction,
  ChargeBankTransfer,
}