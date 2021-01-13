import React, { useState } from 'react'
import {
  Text,
  View,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../assets'
import { Card } from 'react-native-elements'
import { styles } from './transaction.style'
import { useRoute } from '@react-navigation/native'

const Transaction = () => {
  const route = useRoute()
  let { status } = route.params ?? {}

  const [transactionData, setTransactionData] = useState([])
  const [count, setCount] = useState(0)

  const newTransaction = () => {
    status == undefined
      ? Alert.alert('No Props Passed', 'Can\'t add new transaction data')
      : (Alert.alert(`Props passed, status : ${status}`),
      transactionData.push({
        status: status,
        invoice: 'BLJ-RIAH001',
        desc: 'Belajar Al\'Quran dari dasar dengan metode yang mudah dan menyenangkan',
        date: getDate(),
        time: getTime(),
      }),
      setCount(count + 1))
  }

  const NoTransaction = () => {
    return (
      <View style={styles.containerNoTransaction}>
        {/* <Image source={Images.TransactionBGPNG} style={styles.bgNoTransaction} /> */}
        <View style={styles.bgNoTransactionTransparent} />
        <Images.NoTransaction.default style={styles.iconNoTransaction} />
        <Text style={styles.textFirstLine}>
          Belum ada <Text style={styles.textBold}>Transaksi</Text> yang
        </Text>
        <Text style={styles.textSecondLine}>anda lakukan saat ini</Text>
      </View>
    )
  }

  const TransactionList = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.containerScrollView}>
        {transactionData.map((data, index) => {
          return <TransactionCard key={index} {...data} />
        })}
      </ScrollView>
    )
  }

  const TransactionCard = (props) => {
    switch (props.status) {
    case 'Complete':
      return (
        <View >
          <Card containerStyle={styles.bgTransactionTransparent}>
            <View style={styles.flexRow}>
              <Images.IconComplete.default style={styles.iconComplete} />
              <Card.Title style={styles.textCardSuccess}>{props.status}</Card.Title>
              <Images.RibbonComplete.default style={styles.ribbonComplete} />
            </View>
            <Text style={styles.textInvoice}>
                No. Invoice: <Text style={styles.textBold}>{props.invoice}</Text>
            </Text>
            <Text style={styles.textDesc}>{props.desc}</Text>
            <Text style={styles.textDate}>
                Tanggal Transaksi: {props.date} {props.time}
            </Text>
          </Card>
        </View>
      )
    case 'Pending':
      return (
        <View>
          <Card containerStyle={styles.bgTransactionTransparent}>
            <Card.Title style={styles.textCardPending}>{props.status}</Card.Title>
            <Text style={styles.textInvoice}>
                No. Invoice: <Text style={styles.textBold}>{props.invoice}</Text>
            </Text>
            <Text style={styles.textDesc}>{props.desc}</Text>
            <Text style={styles.textDate}>
                Tanggal Transaksi: {props.date} {props.time}
            </Text>
          </Card>
        </View>
      )
    case 'Failed':
      return (
        <View>
          <Card containerStyle={styles.bgTransactionTransparent}>
            <View style={styles.flexRow}>
              <Images.IconFailed.default style={styles.iconFailed} />
              <Card.Title style={styles.textCardFailed}>{props.status}</Card.Title>
              <Images.RibbonFailed.default style={styles.ribbonFailed} />
            </View>
            <Text style={styles.textInvoice}>
                No. Invoice: <Text style={styles.textBold}>{props.invoice}</Text>
            </Text>
            <Text style={styles.textDesc}>{props.desc}</Text>
            <Text style={styles.textDate}>
                Tanggal Transaksi: {props.date} {props.time}
            </Text>
          </Card>
        </View>
      )
    default:
      return Alert.alert('Check Again')
    }
  }

  return (
    <View style={styles.bgHeader}>
      <View style={styles.containerHeader}>
        <Text style={styles.titleHeader}>Transaksi</Text>
        <TouchableOpacity
          onPress={() => {
            newTransaction()
          }}>
          <Images.Filter.default width={40} height={40} style={styles.iconFilter} />
        </TouchableOpacity>
      </View>
      <Image source={Images.TransactionBGPNG} style={styles.bgNoTransaction} />
      {count === 0 ? <NoTransaction /> : <TransactionList />}
    </View>
  )
}

const getDate = () => {
  const date = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()

  return date + '/' + month + '/' + year
}

const getTime = () => {
  var hours = new Date().getHours()
  var min = new Date().getMinutes()

  return hours + ':' + min
}

export default Transaction
