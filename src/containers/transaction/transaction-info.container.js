import React from 'react'
import moment from 'moment'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'

import { Images } from '../../assets'
import { FormatRupiah } from '../../utils'
import styles from './transaction-info.style'
import { ButtonGradient } from '../../components'

const TransactionInfo = () => {
  const navigation = useNavigation()

  const classData = {
    account : '000-1234567',
    quote: 'Dicek dalam 24 jam setelah bukti pembayaran talh diupload. diwajibkan untuk membayar sesuai total pembayaran (termasuk kode unik) sebelum batas waktu berakhir yang telah ditentukan.',
    noteOne: 'Gunakan ATM / iBanking / mBanking setor tunai untuk transfer ke rekening di bawah :',
    noteTwo: 'Silahkan upload bukti transfer sebelum ',
    noteThree: 'Demi Keamanan Transaksi, Mohon untuk tidak membagikan bukti ataupun konfirmasi pembayaran anda kepada siapapun',
    price: 199000,
    Created_Date: new Date(),
  }


  const copyToClipboard = async (account) => {
    await Clipboard.setString(account)
    await ToastAndroid.show('Nomor rekening disalin', ToastAndroid.SHORT)
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

  const PaymentMethod = () => {
    return (
      <View style={styles.containerMethod}>
        <View style={styles.cardMethods}>
          <View style={styles.viewIconBank}>
            <Images.IconBankBNISyariah.default/>
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
              <Text style={styles.textSmall}>{classData.noteTwo}<Text style={styles.textSmall}>{moment(classData.Created_Date).format('dddd, DD MMMM YYYY')}</Text></Text>
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
            <Text style={styles.textPrice}>IDR {FormatRupiah(classData.price)}</Text>
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

export default TransactionInfo