import React, { useState } from 'react'
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'

import { Images, Color } from '../../assets'
import { Card } from 'react-native-elements'
import { styles } from './transaction.style'

const Transaction = () => {
  const [available, setAvailable] = useState(false)

  const state = [
    {
      invoice_number: 'BLJ-RIAH001',
      status: 'failed',
      class_title:
        'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
      created_date: new Date(),
    },
    {
      invoice_number: 'BLJ-RIAH002',
      status: 'success',
      class_title:
        'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
      created_date: new Date(),
    },
    {
      invoice_number: 'BLJ-RIAH003',
      status: 'waiting for payment',
      class_title:
        'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
      created_date: new Date(),
    },
    {
      invoice_number: 'BLJ-RIAH004',
      status: 'success',
      class_title:
        'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
      created_date: new Date(),
    },
  ]

  const NoTransaction = () => {
    return (
      <View style={styles.containerNoTransaction}>
        <Images.NoTransaction.default />
        <Text style={styles.textFirstLine}>
          Belum ada <Text style={styles.textBold}>Transaksi</Text> yang
        </Text>
        <Text style={styles.textSecondLine}>anda lakukan saat ini</Text>
      </View>
    )
  }

  const TransactionList = () => {
    return (
      <FlatList
        data={state}
        style={styles.containerScrollView}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => TransactionCard(item, index)}
      />
    )
  }

  const TransactionCard = (item, index) => {
    let ribbon, icon, status, color
    switch (item.status) {
      case 'success':
        status = 'Completed'
        color = Color.textSuccess
        icon = Images.IconComplete
        ribbon = Images.RibbonComplete
        break
      case 'failed':
        status = 'Failed'
        color = Color.textFailed
        icon = Images.IconFailed
        ribbon = Images.RibbonFailed
        break
      case 'waiting for payment':
        status = 'Waiting for Payment'
        color = Color.textPending
        icon = Images.IconPending
        ribbon = Images.RibbonPending
        break
      default:
        status = 'Waiting for Payment'
        color = Color.textPending
        icon = Images.IconPending
        ribbon = Images.RibbonPending
        break
    }
    return (
      <View key={index}>
        <LinearGradient
          end={{ x: 1, y: 1 }}
          start={{ x: 0, y: 1 }}
          colors={['#7a3296', '#843ca0', '#9650b2']}
          style={styles.bgTransactionTransparent}>
          <View style={styles.flexRow}>
            <icon.default style={styles.iconStatus} />
            <Card.Title style={{ ...styles.textCardStatus, color: color }}>
              {status}
            </Card.Title>
            <ribbon.default style={styles.ribbonComplete} />
          </View>
          <Text style={styles.textInvoice}>
            No. Invoice:{' '}
            <Text style={styles.textBold}>{item.invoice_number}</Text>
          </Text>
          <Text style={styles.textDesc}>{item.class_title}</Text>
          <Text style={styles.textDate}>
            Tanggal Transaksi: {moment(item.created_date).format('DD MMM YYYY')}
          </Text>
        </LinearGradient>
      </View>
    )
  }

  return (
    <View style={styles.bgHeader}>
      <View style={styles.containerHeader}>
        <Text style={styles.titleHeader}>Transaksi</Text>
        <TouchableOpacity
          onPress={() => {
            setAvailable(!available)
          }}>
          <Images.Filter.default
            width={40}
            height={40}
            style={styles.iconFilter}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={Images.TransactionBGPNG}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 30 }}>
        {available ? <NoTransaction /> : <TransactionList />}
      </ImageBackground>
    </View>
  )
}

export default Transaction
