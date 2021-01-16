import React, { useState } from 'react'
import { View, ScrollView, Alert, TouchableOpacity} from 'react-native'
import { Icon, Text } from '@ui-kitten/components'
import Images from '../../assets/images'
import styles from './transaction-info.style'
import { Card } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'
import { FormatRupiah } from '../../utils'
import { useNavigation, useRoute } from '@react-navigation/native'


const TransactionInfo = () => {
    const navigation = useNavigation()
    const route = useRoute()

    let { discountedPrice } = route.params ?? {}
  
    const [code, setCode] = useState('')
  
    const classData = {
      quote: 'Dicek dalam 24 jam setelah bukti pembayaran talh diupload. diwajibkan untuk membayar sesuai total pembayaran (termasuk kode unik) sebelum batas waktu berakhir yang telah ditentukan.',
      noteOne: 'Gunakan ATM / iBanking / mBanking setor tunai untuk transfer ke rekening di bawah :',
      noteTwo: 'Silahkan upload bukti transfer sebelum 1x-0x-2xxx',
      noteThree: 'Demi Keamanan Transaksi, Mohon untuk tidak membagikan bukti ataupun konfirmasi pembayaran anda kepada siapapun',
      price: discountedPrice,
      voucher: code,
    }
  
    const [gateway, setGateway] = React.useState('ovo')
  
    const handleVoucher = (code) => {
      let discountedPrice = ''
      switch (code) {
      case 'NEWMEMBER':
        discountedPrice = (classData.price - (classData.price * 30/100))
        return (
          <View style={styles.flexRow}>
            <Text style={styles.textLineThroughPrice}>IDR {FormatRupiah(classData.price)}</Text>
            <Text style={styles.textPrice}>IDR {FormatRupiah(discountedPrice)}</Text>
          </View>
        )
      default:
        return <Text style={styles.textPrice}>IDR {FormatRupiah(classData.price)}</Text>
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
  
    const PaymentMethod = () => {
      return (
          <View style={styles.containerMethod}>
            <View style={styles.cardMethods}>
              <View style={styles.viewIconBank}>
                <Images.IconBankBNISyariah.default/>
              </View>
              <View style={styles.viewDetailBank}>
                <View>
                  <Text>No. Rekening : 000-1234567</Text>
                  <Text>Cabang : Palembang</Text>
                  <Text>Nama Rekening : Belajariah</Text>
                  <Text>Indonesia</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => copyToClipboard()}>
                    <Text style={styles.TxtButtonSalin}>SALIN</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.viewNoteTwo}>
                <Text style={styles.txtViewNote}>2</Text>
                <Text>{classData.noteTwo}</Text>
              </View>
              <View style={styles.viewNoteThree}>
                <Text style={styles.txtViewNote}>3</Text>
                <Text>{classData.noteThree}</Text>
              </View>
            </View>
          </View>  
      )
    }

    const PaymentButton = () => {
      return (
        <View>
          <TouchableOpacity style={styles.btnBuyClass} onPress={()=> {navigation.navigate('TransactionConfirm')}}>
            <Text style={styles.textBuyClass}>Upload bukti transfer sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBuyClassTwo} >
            <Text style={styles.textBuyClassTwo}>Upload bukti transfer nanti</Text>
          </TouchableOpacity>
        </View>
      )
    }
  
    const PaymentCheckout = () => {
      return (
        <View style={styles.containerPrice}>
          <View style={styles.flexColumn}>
            <Text style={styles.textTotalPrice}>Total Pembayaran</Text>
            {handleVoucher(classData.voucher)}
            <View style={styles.viewTextTotalPayment}>
                <Text style={styles.TxtPayment}>Bayar Pesanan anda sesuai diatas ya</Text>
            </View>
            <Text style={styles.TxtKeterangan}>{classData.quote}</Text>
            <Card.Divider style={styles.divider} />
            <View style={styles.viewNoteOne}>
                <Text style={styles.txtViewNoteOne}>1</Text>
                <Text>{classData.noteOne}</Text>
            </View>
          </View>
        </View>
      )
    }
  
    const ThreeButtonAlert = () =>
      Alert.alert(
        'Konfirmasi Pembayaran',
        `Bayar dengan ${gateway}?`,
        [
          {
            text: 'Nanti saja',
            onPress: () => {
              navigation.navigate('Transaction', { status: 'Pending' })
            },
          },
          {
            text: 'Nggak jadi',
            onPress: () => {
              navigation.navigate('Transaction', { status: 'Failed' })
            },
          },
          {
            text: 'Bayar',
            onPress: () => {
              navigation.navigate('Transaction', { status: 'Complete' })
            },
          },
        ],
        { cancelable: false },
      )
  
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