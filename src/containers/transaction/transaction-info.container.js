import 'moment/locale/id'
import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'

import {
  View,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../assets'
import { FormatRupiah } from '../../utils'
import { ButtonGradient } from '../../components'

import styles from './transaction-info.style'
import { Image } from 'react-native'

const TransactionInfo = (props) => {
  const navigation = useNavigation()
  const item = props.route.params

  const classData = {
    firstNote: 'Dicek dalam 24 jam setelah bukti pembayaran telah diupload. diwajibkan untuk membayar sesuai total pembayaran (termasuk kode unik) sebelum batas waktu berakhir yang telah ditentukan.',
    secondNote: 'Gunakan ATM / iBanking / mBanking setor tunai untuk transfer ke rekening di bawah :',
    thirdNote: 'Silahkan upload bukti transfer sebelum ',
    fourthNote: 'Demi Keamanan Transaksi, Mohon untuk tidak membagikan bukti ataupun konfirmasi pembayaran anda kepada siapapun, kecuali Contact Person Belajariah',
  }

  // const descriptions = {
  //   quoteVA : 'Dicek dalam waktu 10 menit setelah pembayaran berhasil dilakukan',
  //   quoteCStore : 'Dicek dalam waktu 10 menit setelah pembayaran berhasil dilakukan',
  //   quoteManualTransfer : 'Dicek dalam 24 jam setelah bukti pembayaran telah diupload. Diwajibkan untuk membayar sesuai total pembayaran sebelum batas waktu berakhir yang telah ditentukan.',
  //   noteOneVA : 'Gunakan ATM / iBanking / mBanking untuk transfer melalui nomor Virtual Account dibawah ini :',
  //   noteOneCstore : 'Datangi toko terdekat, lalu sampaikan kepada kasir untuk melakukan pembayaran aplikasi Belajariah, lalu beritahukan kode pembayaran dibawah ini',
  //   noteOneManualTransfer : 'Gunakan ATM / iBanking / mBanking untuk melakukan transfer ke rekening dibawah ini :',
  //   noteTwoVA : 'Silahkan lakukan pembayaran sebelum ',
  //   noteTwoCstore : 'Silahkan lakukan pembayaran sebelum ',
  //   noteTwoManualTransfer : 'Silahkan upload bukti transfer rekening sebelum ',
  //   noteThree : 'Demi keamanan transaksi, mohon untuk tidak membagikan bukti pembayaran anda kepada siapapun',
  // }

  // const [classData, setClassData] = useState({
  //   gateway_type : paymentDetail.Gateway_Type,
  //   gateway_option : paymentDetail.Gateway_Option,
  //   account : '',
  //   quote: '',
  //   noteOne: '',
  //   noteTwo: '',
  //   noteThree: '',
  //   price: paymentDetail.Gateway_Price,
  //   Created_Date: moment().locale('id').format('Do MMMM YYYY'),
  //   Created_DateTime : moment().locale('id').format('MMDDYYYYhmmss'),
  //   Expired_Date : ''
  // })

  // const data = {
  //   option : classData.gateway_option,
  //   customer_details: {
  //     email: 'belajariah20@gmail.com',
  //     first_name: 'Belajariah',
  //     last_name: '',
  //     phone: '+6281234567890'
  //   },
  //   transaction_details : {
  //     gross_amount : paymentDetail.Gateway_Price,
  //     order_id : 'BLJ-Tahsin-' + classData.Created_DateTime
  //   },
  //   item_details : {
  //     id : 'tahsin',
  //     price : paymentDetail.Gateway_Price,
  //     quantity : 1,
  //     name : 'Kelas Tahsin'
  //   },
  //   free_text : 'Pembayaran Kelas Tahsin pada aplikasi Belajariah'
  // }

  // const addClassData = () => {
  //   switch(classData.gateway_type) {
  //   case ('bank_transfer') :
  //     setClassData(s=> ({ ...s, quote : descriptions.quoteVA }))
  //     setClassData(s=> ({ ...s, noteOne : descriptions.noteOneVA }))
  //     setClassData(s=> ({ ...s, noteTwo : descriptions.noteTwoVA }))
  //     break
  //   case ('cstore') :
  //     setClassData(s=> ({ ...s, quote : descriptions.quoteCStore }))
  //     setClassData(s=> ({ ...s, noteOne : descriptions.noteOneCstore }))
  //     setClassData(s=> ({ ...s, noteTwo : descriptions.noteTwoCstore }))
  //     break
  //   case ('manual_transfer') :
  //     setClassData(s=> ({ ...s, quote : descriptions.quoteManualTransfer }))
  //     setClassData(s=> ({ ...s, noteOne : descriptions.noteOneManualTransfer }))
  //     setClassData(s=> ({ ...s, noteTwo : descriptions.noteTwoManualTransfer }))
  //     setClassData(s=> ({ ...s, noteThree : descriptions.noteThree }))
  //     break
  //   default :
  //     classData.quote = ''
  //   }
  // }

  // const getInvoice = () => {
  //   const expired_date = moment(paymentDetail.Created_Date, 'YYYY-MM-DD HH:mm:ss').add(1, 'day').locale('id').format('Do MMMM YYYY HH:mm:ss')

  //   setClassData(s => ({ ...s, Expired_Date : expired_date }))
  //   setClassData(s=> ({ ...s, account : paymentDetail.Gateway_Code }))
  // }

  // const chargePayment = async () => {
  //   try {
  //     let response
  //     switch(classData.gateway_type) {
  //     case ('bank_transfer') :
  //       response = await PaymentAPI.chargeBankVA(data)
  //       break
  //     case ('cstore') :
  //       response = await PaymentAPI.chargeCStore(data)
  //       break
  //     case ('manual_transfer') :
  //       response = await PaymentAPI.chargeBankTransfer(data)
  //       break
  //     }

  //     if (response.status_code == Response.CREATED) {
  //       let expired_date
  //       console.log(response)

  //       switch(classData.gateway_type) {
  //       case ('bank_transfer') :
  //         expired_date = moment(response.transaction_time, 'YYYY-MM-DD HH:mm:ss').add(1, 'day').locale('id').format('Do MMMM YYYY')
  //         setClassData(s => ({ ...s, Expired_Date : expired_date }))
  //         setClassData(s => ({ ...s, account : response.va_numbers[0].va_number }))
  //         break
  //       case ('cstore') :
  //         expired_date = moment(response.transaction_time, 'YYYY-MM-DD HH:mm:ss').add(1, 'day').locale('id').format('Do MMMM YYYY')
  //         setClassData(s => ({ ...s, Expired_Date : expired_date }))
  //         setClassData(s => ({ ...s, account : response.payment_code }))
  //         break
  //       case ('manual_transfer') :
  //         setClassData(s => ({ ...s, account : 'No. Rekening Bank BSI' }))
  //         break
  //       }
  //     } else {
  //       console.log(response)
  //       alert(`charge ditolak, status_code ${response.status_code} \nexpected status code : 201 (create charge)`)
  //     }
  //   } catch (err) {
  //     alert('charge gagal')
  //     return err
  //   }
  // }

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

  const copyToClipboard = async (account, desc) => {
    await Clipboard.setString(account)
    await ToastAndroid.show(`${desc} disalin`, ToastAndroid.SHORT)
  }

  const PaymentMethod = () => {
    console.log(item)
    let title
    item.Payment_Method_Type == 'cstore' ? title = 'Kode Pembayaran' :
      item.Payment_Method_Type == 'e_wallet' ? title = 'Kode Pembayaran' :
        item.Payment_Method_Type == 'manual_transfer' ? title = 'No. Rekening' :
          item.Payment_Method_Type == 'bank_transfer' ? title = 'No. Virtual Account' :
            title = 'No. Rekening'

    return (
      <View style={styles.containerMethod}>
        <View style={styles.cardMethods}>
          <View style={styles.viewIconBank}>
            <Image source={{ uri : item.Payment_Method_Image }} style={{ resizeMode: 'contain', width: 96, height: 40 }} />
          </View>
          <View style={styles.viewDetailBank}>
            <View>
              <Text style={styles.textSmall}>Nama Rekening : {item.Account_Name}</Text>
              <Text style={styles.textSmall}>{title} : {item.Account_Number}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => copyToClipboard(item.Account_Number, title)}>
                <Text style={styles.TxtButtonSalin}>SALIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewMethod}>
            <View style={styles.viewNoteTwo}>
              <Text style={styles.txtViewNoteOne}>2</Text>
              <View>
                <Text style={styles.textSmall}>{classData.thirdNote}</Text>
                <Text style={styles.textSmall}>{moment(item.Expired_Date).format('dddd, DD MMMM YYYY HH:mm')}</Text>
              </View>
            </View>
            <View style={styles.viewNoteTwo}>
              <Text style={styles.txtViewNoteOne}>3</Text>
              <Text style={styles.textSmall}>{classData.fourthNote}</Text>
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
      <View>
        <ButtonGradient
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          title='Upload bukti transfer sekarang'
          onPress={() => navigation.navigate('TransactionUpload', item)}
        />
        <TouchableOpacity style={styles.btnBuyClassTwo}
          onPress={() => navigation.navigate('Pembayaran')}>
          <Text style={styles.textBuyClassTwo}>Upload bukti transfer nanti</Text>
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
            <Text style={styles.textPrice}>Rp {FormatRupiah(item.Total_Transfer)}</Text>
          </View>
          <View style={styles.viewTextTotalPayment}>
            <Text style={styles.txtPayment}>Bayar Pesanan anda sesuai diatas</Text>
          </View>
          <Text style={[styles.txtNotes, styles.margins]}>{classData.firstNote}</Text>
          <View style={styles.margins}>
            <Card.Divider style={styles.divider} />
          </View>
          <View style={styles.viewNoteOne}>
            <Text style={styles.txtViewNoteOne}>1</Text>
            <Text style={styles.textSmall}>{classData.secondNote}</Text>
          </View>
        </View>
      </View>
    )
  }
  //     paymentDetail.Gateway_Type == 'manual_transfer' ? (
  //       <View>
  //         <ButtonGradient
  //           styles={styles.btnBuyClass}
  //           textStyle={styles.textBuyClass}
  //           title='Upload bukti transfer sekarang'
  //           onPress={()=> {navigation.navigate('TransactionUpload')}}
  //         />
  //         <TouchableOpacity style={styles.btnBuyClassTwo}
  //           onPress={()=> {navigation.navigate('Pembayaran')}}>
  //           <Text style={styles.textBuyClassTwo}>Upload bukti transfer nanti</Text>
  //         </TouchableOpacity>
  //       </View>
  //     ) : (
  //       <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
  //         <ButtonGradient
  //           styles={styles.btnBuyClass}
  //           textStyle={styles.textBuyClass}
  //           title='OK'
  //           onPress={()=> {navigation.navigate('Pembayaran')}}
  //         />
  //       </View>
  //     )
  //   )
  // }

  // useEffect(() => {
  //   paymentDetail.Gateway_Create ? (
  //     chargePayment(),
  //     addClassData()
  //   ) : (
  //     getInvoice(),
  //     addClassData()
  //   )
  // }, [])

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