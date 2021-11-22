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
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
import { FormatRupiah } from '../../../utils'
import { ButtonGradient } from '../../../components'

import styles from './transaction-info.style'

const TransactionInfoQuran = (props) => {
    const navigation = useNavigation()
    const item = props.route.params
    const data = props.route.params

    const classData = {
        firstNote: 'Dicek dalam 24 jam setelah bukti pembayaran telah diupload. diwajibkan untuk membayar sesuai total pembayaran (termasuk kode unik) sebelum batas waktu berakhir yang telah ditentukan.',
        secondNote: 'Gunakan ATM / iBanking / mBanking setor tunai untuk transfer ke rekening di bawah :',
        thirdNote: 'Silahkan upload bukti transfer sebelum ',
        fourthNote: 'Demi Keamanan Transaksi, Mohon untuk tidak membagikan bukti ataupun konfirmasi pembayaran anda kepada siapapun, kecuali Contact Person Belajariah',
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

    const copyToClipboard = async (account, desc) => {
        await Clipboard.setString(account)
        await ToastAndroid.show(`${desc} disalin`, ToastAndroid.SHORT)
    }

    const PaymentMethod = () => {
        // console.log(item)
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
              onPress={() => navigation.navigate('TransactionUploadQuran', {item : item, DataTransaction : data})}
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
            </ScrollView>
            <PaymentButton />
        </View>
    )
}

TransactionInfoQuran.propTypes = {
    route: PropTypes.object,
}

export default TransactionInfoQuran