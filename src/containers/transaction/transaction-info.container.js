import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/id'
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

  const descriptions = {
    quoteVA : 'Dicek dalam waktu 10 menit setelah pembayaran berhasil dilakukan',
    quoteCStore : 'Dicek dalam waktu 10 menit setelah pembayaran berhasil dilakukan',
    quoteManualTransfer : 'Dicek dalam 24 jam setelah bukti pembayaran telah diupload. Diwajibkan untuk membayar sesuai total pembayaran sebelum batas waktu berakhir yang telah ditentukan.',
    noteOneVA : 'Gunakan ATM / iBanking / mBanking untuk transfer melalui nomor Virtual Account dibawah ini :',
    noteOneCstore : 'Datangi toko terdekat, lalu sampaikan kepada kasir untuk melakukan pembayaran aplikasi Belajariah, lalu beritahukan kode pembayaran dibawah ini',
    noteOneManualTransfer : 'Gunakan ATM / iBanking / mBanking untuk melakukan transfer ke rekening dibawah ini :',
    noteTwoVA : 'Silahkan lakukan pembayaran sebelum ',
    noteTwoCstore : 'Silahkan lakukan pembayaran sebelum ',
    noteTwoManualTransfer : 'Silahkan upload bukti transfer rekening sebelum ',
    noteThree : 'Demi keamanan transaksi, mohon untuk tidak membagikan bukti pembayaran anda kepada siapapun',
  }

  const [classData, setClassData] = useState({
    gateway_type : paymentDetail.Gateway_Type,
    gateway_option : paymentDetail.Gateway_Option,
    account : '',
    quote: '',
    noteOne: '',
    noteTwo: '',
    noteThree: '',
    price: paymentDetail.Gateway_Price,
    Created_Date: moment().locale('id').format('Do MMMM YYYY'),
    Created_DateTime : moment().locale('id').format('MMDDYYYYhmmss'),
    Expired_Date : ''
  })

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

  const PaymentIcon = () => {
    switch(classData.gateway_option) {
    case 'bca' :
      return <Images.IconBankBCA.default width={80} height={80} />
    case 'bni' :
      return <Images.IconBankBNI.default width={80} height={80} />
    case 'bri' :
      return <Images.IconBankBRI.default width={80} height={80} />
    case 'bsi' :
      return <Images.IconBankBSI.default width={80} height={80} />
    case 'alfamart' :
      return <Images.IconStoreAlfamart.default width={80} height={80} />
    case 'indomaret' :
      return <Images.IconStoreIndomaret.default width={80} height={80} />
    }
  }

  const addClassData = () => {
    switch(classData.gateway_type) {
    case ('bank_transfer') :
      setClassData(s=> ({ ...s, quote : descriptions.quoteVA }))
      setClassData(s=> ({ ...s, noteOne : descriptions.noteOneVA }))
      setClassData(s=> ({ ...s, noteTwo : descriptions.noteTwoVA }))
      break
    case ('cstore') :
      setClassData(s=> ({ ...s, quote : descriptions.quoteCStore }))
      setClassData(s=> ({ ...s, noteOne : descriptions.noteOneCstore }))
      setClassData(s=> ({ ...s, noteTwo : descriptions.noteTwoCstore }))
      break
    case ('manual_transfer') :
      setClassData(s=> ({ ...s, quote : descriptions.quoteManualTransfer }))
      setClassData(s=> ({ ...s, noteOne : descriptions.noteOneManualTransfer }))
      setClassData(s=> ({ ...s, noteTwo : descriptions.noteTwoManualTransfer }))
      setClassData(s=> ({ ...s, noteThree : descriptions.noteThree }))
      break
    default :
      classData.quote = ''
    }
  }

  const copyToClipboard = async (account) => {
    let desc
    switch(classData.gateway_type) {
    case 'bank_transfer' :
      desc = 'No. Virtual Account disalin'
      break
    case 'cstore' :
      desc = 'Kode Pembayaran disalin'
      break
    case 'manual_transfer' :
      desc = 'No. Rekening disalin'
      break
    default :
      desc = 'Error'
    }
    await Clipboard.setString(account)
    await ToastAndroid.show(desc, ToastAndroid.SHORT)
  }

  const getInvoice = () => {
    const expired_date = moment(paymentDetail.Created_Date, 'YYYY-MM-DD HH:mm:ss').add(1, 'day').locale('id').format('Do MMMM YYYY HH:mm:ss')

    setClassData(s => ({ ...s, Expired_Date : expired_date }))
    setClassData(s=> ({ ...s, account : paymentDetail.Gateway_Code }))
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
        let expired_date
        console.log(response)

        switch(classData.gateway_type) {
        case ('bank_transfer') :
          expired_date = moment(response.transaction_time, 'YYYY-MM-DD HH:mm:ss').add(1, 'day').locale('id').format('Do MMMM YYYY')
          setClassData(s => ({ ...s, Expired_Date : expired_date }))
          setClassData(s => ({ ...s, account : response.va_numbers[0].va_number }))
          break
        case ('cstore') :
          expired_date = moment(response.transaction_time, 'YYYY-MM-DD HH:mm:ss').add(1, 'day').locale('id').format('Do MMMM YYYY')
          setClassData(s => ({ ...s, Expired_Date : expired_date }))
          setClassData(s => ({ ...s, account : response.payment_code }))
          break
        case ('manual_transfer') :
          setClassData(s => ({ ...s, account : 'No. Rekening Bank BSI' }))
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

  const PaymentMethod = () => {
    return (
      <View style={styles.containerMethod}>
        <View style={styles.cardMethods}>
          <View style={styles.viewIconBank}>
            <PaymentIcon />
          </View>
          <View style={styles.viewDetailBank}>
            <View>
              {classData.gateway_type == 'bank_transfer' ? (
                <>
                  <Text style={styles.textSmall}>No. Virtual Account : {classData.account}</Text>
                  <Text style={styles.textSmall}>Nama Rekening : Belajariah</Text>
                </>
              ) : (
                classData.gateway_type == 'cstore' ? (
                  <>
                    <Text style={styles.textSmall}>Kode Pembayaran : {classData.account}</Text>
                    <Text style={styles.textSmall}>Nama Pembayaran : Pembayaran Belajariah</Text>
                  </>
                ) : (
                  classData.gateway_type == 'manual_transfer' ? (
                    <>
                      <Text style={styles.textSmall}>No. Rekening : {classData.account}</Text>
                      <Text style={styles.textSmall}>Nama Rekening : Belajariah</Text>
                    </>
                  ) : (
                    <Text style={styles.textSmall}>No. Rekening : error</Text>
                  )
                )
              )}
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
              <Text style={styles.textSmall}>{classData.noteTwo}<Text style={styles.textSmall}>{classData.Expired_Date}</Text></Text>
            </View>
            {classData.gateway_type == 'manual_transfer' && (
              <View style={styles.viewNoteTwo}>
                <Text style={styles.txtViewNoteOne}>3</Text>
                <Text style={styles.textSmall}>{classData.noteThree}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    )
  }

  const PaymentButton = () => {
    return (
      paymentDetail.Gateway_Type == 'manual_transfer' ? (
        <View>
          <ButtonGradient
            styles={styles.btnBuyClass}
            textStyle={styles.textBuyClass}
            title='Upload bukti transfer sekarang'
            onPress={()=> {navigation.navigate('TransactionUpload')}}
          />
          <TouchableOpacity style={styles.btnBuyClassTwo}
            onPress={()=> {navigation.navigate('Pembayaran')}}>
            <Text style={styles.textBuyClassTwo}>Upload bukti transfer nanti</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
          <ButtonGradient
            styles={styles.btnBuyClass}
            textStyle={styles.textBuyClass}
            title='OK'
            onPress={()=> {navigation.navigate('Pembayaran')}}
          />
        </View>
      )
    )
  }

  useEffect(() => {
    paymentDetail.Gateway_Create ? (
      chargePayment(),
      addClassData()
    ) : (
      getInvoice(),
      addClassData()
    )
    console.log(paymentDetail)
  }, [])

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
        <PaymentCheckout />
        <PaymentMethod />
      </ScrollView>
      <PaymentButton />
    </View>
  )
}

TransactionInfo.propTypes = {
  route: PropTypes.object,
}

export default TransactionInfo