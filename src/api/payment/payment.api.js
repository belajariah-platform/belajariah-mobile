import axios from 'axios'
import { Config, CheckoutConfig } from '../config'

const chargeBankVA = async (data) => {
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
    const response = await axios.post(`${Config.PAYMENT_GATEWAY_ENDPOINT}/charge`, body, CheckoutConfig)
    return response.data
  } catch (error) {
    return error
  }
}

const chargeCStore = async (data) => {
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
    const response = await axios.post(`${Config.PAYMENT_GATEWAY_ENDPOINT}/charge`, body, CheckoutConfig)
    return response.data
  } catch (error) {
    return error
  }
}

const chargeBankTransfer = async (data) => {
  //transfer ke rekening bank, tidak memakai Midtrans
  console.log('hello transfer rekening')
  console.log(data)
  const response = {
    status_code : 201
  }
  return response
}

const getTransaction = async (order_id) => {
  try {
    const response = await axios.get(`${Config.PAYMENT_GATEWAY_ENDPOINT}/${order_id}/status`, CheckoutConfig)
    return response.data
  } catch (error) {
    return error
  }
}

export default { chargeBankVA, chargeCStore, chargeBankTransfer, getTransaction }