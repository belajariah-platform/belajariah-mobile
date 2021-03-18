import React from 'react'
import {  Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView } from 'react-native'

import { Images } from '../../assets'
import { ButtonGradient } from '../../components'
import styles from './transaction-confirm.style'

const TransactionConfirm = () => {
  const navigation = useNavigation()

  const classData = {
    note: 'Terima Kasih, Bukti pembayaran anda sedang kami proses untuk dilakukan verifikasi|Kami akan mengirim email jika bukti pembayaran anda telah diverifikasi untuk mengakses kelas anda',
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
          <Images.IconCompletePurple.default />
        </View>
        <View style={styles.viewDesc}>
          <Text style={styles.viewTxtDesc}>{classData.note.split('|')[0]}.
            <Text style={styles.viewTxtDescBold}> {classData.note.split('|')[1]}
            </Text></Text>
        </View>
      </View>
    )
  }

  const ButtonFinish = () => {
    return (
      <View style={styles.viewButtonFinish}>
        <ButtonGradient
          title='Selesai'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={() => navigation.navigate('Pembayaran')}
        />
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
