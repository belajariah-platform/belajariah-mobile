import React, { useState } from 'react'
import { View, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { Icon, Text } from '@ui-kitten/components'
import Images from '../../assets/images'
import styles from './transaction-confirm.style'
import { useNavigation, useRoute } from '@react-navigation/native'
import TransactionInfo from './transaction-info.container'
import { FontSize } from '../../assets'

const TransactionConfirm = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const [code, setCode] = useState('')

  const classData = {
    note: 'Terima Kasih, Bukti pembayaran anda sedang kami proses untuk melakukan verifikasi.',
    noteBold: 'Kami akan mengirim email jika bukti pembayaran anda telah diverifikasi untuk mengakses kelas anda',
  
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <Text style={styles.textTitleWhite}>Konfirmasi Pembayaran</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const PaymentDetail = () => {
    return (
      <View style={styles.containerTitle}>
        <Text style={styles.textTitleBlack}>Bukti pembayaran anda Terkirim</Text>
        <View style={styles.viewImage}>
            <Images.IconCompleteTransaction.default />
        </View>
        <View style={styles.viewDesc}>
            <Text style={styles.viewTxtDesc}>{classData.note} <Text style={styles.viewTxtDescBold}>{classData.noteBold}</Text></Text>
        </View>
      </View>
    )
  }

  const ButtonFinish = () => {
    return (
      <View style={styles.viewButtonFinish}>
        <TouchableOpacity style={styles.btnBuyClass} onPress={()=> {navigation.navigate('')}}>
          <Text style={styles.textBuyClass}>Selesai</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
        <PaymentDetail />
        <ButtonFinish />
      </ScrollView>      
    </View>
  )
}

export default TransactionConfirm
