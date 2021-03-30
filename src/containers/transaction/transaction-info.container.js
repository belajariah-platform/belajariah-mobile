import React, { useState } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'

import { Images } from '../../assets'
import { FormatRupiah } from '../../utils'
import styles from './transaction-info.style'
import { ButtonGradient } from '../../components'
import { PaymentAPI } from '../../api'
import { useEffect } from 'react'
import { Response } from '../../utils'

const TransactionInfo = (props) => {
  const paymentDetail = props.route.params
  const navigation = useNavigation()

  const [va_number, setVA_number] = useState(0)

  const classData = {
    gateway_type : paymentDetail.Gateway_Type,
    gateway_option : paymentDetail.Gateway_Option,
    account : '0123456789',
    quote: 'Dicek dalam 24 jam setelah bukti pembayaran telah diupload. diwajibkan untuk membayar sesuai total pembayaran (termasuk kode unik) sebelum batas waktu berakhir yang telah ditentukan.',
    noteOne: 'Gunakan ATM / iBanking / mBanking setor tunai untuk transfer ke rekening di bawah :',
    noteTwo: 'Silahkan upload bukti transfer sebelum ',
    noteThree: 'Demi Keamanan Transaksi, Mohon untuk tidak membagikan bukti ataupun konfirmasi pembayaran anda kepada siapapun',
    price: paymentDetail.Gateway_Price,
    Created_Date: moment().locale('id').format('Do MMMM YYYY'),
    Created_DateTime : moment().locale('id').format('MMDDYYYYhmmss')
  }

  const data = {
    option : classData.gateway_option,
    customer_details: {
      email: 'belajariah20@gmail.com',
      first_name: 'Belajariah',
      last_name: '',
      phone: '+6281234567890'
    },
    transaction_details : {
      gross_amount : paymentDetail.Gateway_Price,
      order_id : 'BLJ-Tahsin-' + classData.Created_DateTime
    },
    item_details : {
      id : 'tahsin',
      price : paymentDetail.Gateway_Price,
      quantity : 1,
      name : 'Kelas Tahsin'
    },
    free_text : 'Pembayaran Kelas Tahsin pada aplikasi Belajariah'
  }

  const copyToClipboard = async (account) => {
    await Clipboard.setString(account)
    await ToastAndroid.show('Nomor rekening disalin', ToastAndroid.SHORT)
  }

  const getInvoice = () => {
    classData.VA_Number = paymentDetail.VA_Number
    classData.Created_Date = paymentDetail.Created_Date
  }

  const chargePayment = async () => {
    try {
      let response
      switch(classData.gateway_type) {
      case ('bank_transfer') :
        response = await PaymentAPI.chargeBankVA(data)
        break
      case ('cstore') :
        response = await PaymentAPI.chargeCStore(data)
        break
      case ('manual_transfer') :
        response = await PaymentAPI.chargeBankTransfer(data)
        break
      }

      if (response.status_code == Response.CREATED) {
        console.log(response)
        switch(classData.gateway_type) {
        case ('bank_transfer') :
          alert(`charge berhasil, va_number: ${response.va_numbers[0].va_number}`)
          setVA_number(response.va_numbers[0].va_number)
          break
        case ('cstore') :
          alert(`charge berhasil, kode: ${response.payment_code}`)
          setVA_number(response.payment_code)
          break
        case ('manual_transfer') :
          alert('charge berhasil, no rekening: ')
          break
        }
      } else {
        console.log(response)
        alert(`charge ditolak, status_code ${response.status_code} \nexpected status code : 201 (create charge)`)
      }
    } catch (err) {
      alert('charge gagal')
      return err
    }
  }

  useEffect(() => {
    paymentDetail.Gateway_Create ? (
      chargePayment()
    ) : (
      getInvoice()
    )
    console.log(paymentDetail)
  }, [])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Info Pembayaran</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const PaymentMethod = () => {
    return (
      <View style={styles.containerMethod}>
        <View style={styles.cardMethods}>
          <View style={styles.viewIconBank}>
            <Images.IconBankBNISyariah.default/>
            <Text style={styles.textSmall}>Tipe Pembayaran : {classData.gateway_type}</Text>
            <Text style={styles.textSmall}>Opsi Pembayaran : {paymentDetail.Gateway_Option}</Text>
            {
              classData.gateway_type === 'bank_transfer' ? (
                <Text style={styles.textSmall}>Virtual Account Number : {paymentDetail.Gateway_Create ? va_number : paymentDetail.Gateway_Code}</Text>
              ) : (
                classData.gateway_type === 'cstore' ? (
                  <Text style={styles.textSmall}>Kode Pembayaran : {paymentDetail.Gateway_Create ? va_number : paymentDetail.Gateway_Code}</Text>
                ) : (
                  classData.gateway_type === 'manual_transfer' && (
                    <>
                      <Text style={styles.textSmall}>No. Rekening : {classData.gateway_type}</Text>
                      <Text style={styles.textSmall}>Nama Rekening : Belajariah</Text>
                    </>
                  )
                )
              )
            }
          </View>
          <View style={styles.viewDetailBank}>
            <View>
              <Text style={styles.textSmall}>No. Rekening : {classData.account}</Text>
              <Text style={styles.textSmall}>Nama Rekening : Belajariah</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => copyToClipboard(classData.account)}>
                <Text style={styles.TxtButtonSalin}>SALIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewMethod}>
            <View style={styles.viewNoteTwo}>
              <Text style={styles.txtViewNoteOne}>2</Text>
              <Text style={styles.textSmall}>{classData.noteTwo}<Text style={styles.textSmall}>{classData.Created_Date}</Text></Text>
            </View>
            <View style={styles.viewNoteTwo}>
              <Text style={styles.txtViewNoteOne}>3</Text>
              <Text style={styles.textSmall}>{classData.noteThree}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const PaymentButton = () => {
    return (
      <View>
        <ButtonGradient
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          title='Upload bukti transfer sekarang'
          onPress={()=> {navigation.navigate('TransactionUpload')}}
        />
        <TouchableOpacity style={styles.btnBuyClassTwo}
          onPress={()=> {navigation.navigate('Pembayaran')}}>
          <Text style={styles.textBuyClassTwo}>Upload bukti OK transfer nanti</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const PaymentCheckout = () => {
    return (
      <View style={styles.containerPrice}>
        <View style={styles.flexColumn}>
          <View style={styles.margins}>
            <Text style={styles.textTotalPrice}>Total Pembayaran</Text>
            <Text style={styles.textPrice}>Rp{FormatRupiah(classData.price)}</Text>
          </View>
          <View style={styles.viewTextTotalPayment}>
            <Text style={styles.txtPayment}>Bayar Pesanan anda sesuai diatas</Text>
          </View>
          <Text style={[styles.txtNotes, styles.margins]}>{classData.quote}</Text>
          <View style={styles.margins}>
            <Card.Divider style={styles.divider} />
          </View>
          <View style={styles.viewNoteOne}>
            <Text style={styles.txtViewNoteOne}>1</Text>
            <Text style={styles.textSmall}>{classData.noteOne}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
        <PaymentCheckout />
        <PaymentMethod />
        <PaymentButton />
      </ScrollView>
    </View>
  )
}

TransactionInfo.propTypes = {
  route: PropTypes.object,
}

export default TransactionInfo