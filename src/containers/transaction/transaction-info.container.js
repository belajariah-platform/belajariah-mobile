import React from 'react'
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

const TransactionInfo = (props) => {
  const navigation = useNavigation()
  const item = props.route.params

  const classData = {
    firstNote: 'Dicek dalam 24 jam setelah bukti pembayaran telah diupload. diwajibkan untuk membayar sesuai total pembayaran (termasuk kode unik) sebelum batas waktu berakhir yang telah ditentukan.',
    secondNote: 'Gunakan ATM / iBanking / mBanking setor tunai untuk transfer ke rekening di bawah :',
    thirdNote: 'Silahkan upload bukti transfer sebelum ',
    fourthNote: 'Demi Keamanan Transaksi, Mohon untuk tidak membagikan bukti ataupun konfirmasi pembayaran anda kepada siapapun',
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
  // console.log('ok', item)
  const PaymentMethod = () => {
    let icon
    item.Payment_Method == 'Ovo' ? icon = Images.LogoOVO :
      item.Payment_Method == 'Go-pay' ? icon = Images.LogoGopay :
        item.Payment_Method == 'BSI' ? icon = Images.LogoBankBSI :
          item.Payment_Method == 'BCA' ? icon = Images.LogoBankBCA :
            item.Payment_Method == 'BRI' ? icon = Images.LogoBankBRI :
              item.Payment_Method == 'Mandiri' ? icon = Images.LogoBankMandiri :
                item.Payment_Method == 'Indomaret' ? icon = Images.LogoIndomaret :
                  item.Payment_Method == 'Alfamart' ? icon = Images.LogoAlfamart :
                    icon = Images.LogoBankBSI

    return (
      <View style={styles.containerMethod}>
        <View style={styles.cardMethods}>
          <View style={styles.viewIconBank}>
            <icon.default width={50} height={35}/>
          </View>
          <View style={styles.viewDetailBank}>
            <View>
              <Text style={styles.textSmall}>No. Rekening : {item.Account_Name}</Text>
              <Text style={styles.textSmall}>Nama Rekening : {item.Account_Number}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => copyToClipboard(item.Account_Number)}>
                <Text style={styles.TxtButtonSalin}>SALIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewMethod}>
            <View style={styles.viewNoteTwo}>
              <Text style={styles.txtViewNoteOne}>2</Text>
              <Text style={styles.textSmall}>{classData.thirdNote}<Text style={styles.textSmall}>{moment(item.Expired_Date).format('dddd, DD MMMM YYYY')}</Text></Text>
            </View>
            <View style={styles.viewNoteTwo}>
              <Text style={styles.txtViewNoteOne}>3</Text>
              <Text style={styles.textSmall}>{classData.fourthNote}</Text>
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