import moment from 'moment'
import 'moment/locale/id'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import {
  Text,
  View,
  FlatList,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { Images, Color } from '../../assets'
import { Card } from 'react-native-elements'
import { styles } from './transaction.style'
import { ModalFilterUserTransaction } from '../../components'
import { PaymentAPI } from '../../api'

const Transaction = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)

  const order_id = [
    'BLJ-Tahsin-0402202164004', //alfamart
    'BLJ-Tahsin-0326202132147', //bca
    'BLJ-Tahsin-0331202115633', //bni
    'BLJ-Tahsin-0326202141543', //bri
    'BLJ-Tahsin-0331202115648', //indomaret
  ]

  const [result, setResult] = useState([])

  const getAllTransaction = async () => {
    setResult([])
    try {
      const responses = await order_id.map((code) => {
        return PaymentAPI.getTransaction(code)
      })
      Promise.all(responses).then( response => {
        response.map((data) => {
          console.log(data)

          let code, option

          switch(data.payment_type) {
          case 'bank_transfer' :
            code = data.va_numbers[0].va_number
            option = data.va_numbers[0].bank
            break
          case 'cstore' :
            code = data.payment_code
            option = data.store
            break
          default :
            code = 'none'
            option = 'none'
          }

          setResult(s=> [ ...s, {
            gateway_code : code,
            gateway_option : option,
            price : data.gross_amount,
            invoice_number : data.order_id,
            status : data.transaction_status,
            gateway_type : data.payment_type,
            created_date : data.transaction_time,
            class_title : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan'
          } ])
        })
      })
    } catch (error) {
      alert('fetch data error')
    }
  }

  const onRefreshing = () => {
    setRefreshing(true)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (e.distanceFromEnd >= 0) {
      setLoading(true)
    }
  }

  const renderFooter = () => {
    return loading ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          color='white'
          size={30} />
      </View>
    ) : null
  }

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
        data={result}
        onEndReachedThreshold={0.1}
        style={styles.containerScrollView}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        onEndReached={(e) => onLoadMore(e)}
        contentContainerStyle={{ paddingBottom: 122 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => TransactionCard(item, index)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
      />
    )
  }

  const TransactionCard = (item, index) => {
    let ribbon, icon, status, color
    console.log(item)
    switch (item.status) {
    case 'settlement':
      status = 'Lunas'
      color = Color.textSuccess
      icon = Images.IconComplete
      ribbon = Images.RibbonComplete
      break
    case 'pending':
      status = 'Waiting for Payment'
      color = Color.textPending
      icon = Images.IconPending
      ribbon = Images.RibbonPending
      break
    default:
      status = 'Gagal'
      color = Color.textFailed
      icon = Images.IconFailed
      ribbon = Images.RibbonFailed
      break
    }
    return (
      <View key={index}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            console.log(item)
            const Item = {}
            Item.Create_Invoice = false
            Item.Gateway_Type = item.gateway_type
            Item.Gateway_Price = item.price
            Item.Created_Date = item.created_date
            Item.Gateway_Code = item.gateway_code
            Item.Gateway_Option = item.gateway_option
            navigation.navigate('TransactionInfo', Item)
          }}
          disabled={item.status == 'pending' ? false : true}
        >
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
              <Text style={styles.textBold}>{result.length > 0 && (
                result[index] != undefined && (
                  result[index].invoice_number
                )
              )} </Text>
            </Text>
            <Text style={styles.textDesc}>{item.class_title}</Text>
            <Text style={styles.textDate}>
            Tanggal Transaksi: {moment(item.created_date).format('DD MMM YYYY HH:mm:ss')}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }

  useEffect(() => {
    getAllTransaction()
  }, [])

  return (
    <>
      <ModalFilterUserTransaction
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <View style={styles.bgHeader}>
        <View style={styles.containerHeader}>
          <Text style={styles.titleHeader}>Transaksi</Text>
          <TouchableOpacity
            style={styles.containerFilter}
            onPress = {toggleModal}>
            <Images.Filter.default
              width={20}
              height={20}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={Images.TransactionBGPNG}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 30 }}>
          { result.length > 0 ? <TransactionList /> : <NoTransaction /> }
        </ImageBackground>
      </View>
    </>
  )
}

export default Transaction
