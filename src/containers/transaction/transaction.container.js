import 'moment/locale/id'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import {
  Text,
  View,
  FlatList,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import {
  TRANSACT_USER_LIST_FAIL,
  TRANSACT_USER_LIST_SUCC,
  TRANSACT_USER_LOAD_SCROLL,
} from '../../action'
import {
  LoadingView,
  ModalNoConnection,
  ModalFilterUserTransaction,
} from '../../components'

import { Response } from '../../utils'
import { Images, Color } from '../../assets'
import { Card } from 'react-native-elements'
import { styles } from './transaction.style'
import { PaymentAPI, EnumAPI } from '../../api'

const Transaction = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [stateCategory, setStateCategory] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataStateCategory] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })
  const [dataState, setDataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]',  sort : 'DESC' })

  const toggleModal = () => setModalVisible(!modalVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const { loadingScroll } = useSelector((state) => state.TransactionReducer)

  const retryConnection = () => {
    fetchDataTransaction(dataState)
    fetchDataClassCategory(dataStateCategory)
    setconnectStatus(!connectStatus)
  }

  const fetchDataTransaction = async ({ skip, take, filterString, sort }) => {
    try {
      setLoading(true)
      const response = await PaymentAPI.GetAllPaymentByUserID(skip, take, filterString, sort)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        // console.log(state)
        setCount(response.data.count)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
      dispatch({ type: TRANSACT_USER_LIST_SUCC })
    } catch (err) {
      setLoading(false)
      dispatch({ type: TRANSACT_USER_LIST_FAIL })
      return err
    }
  }

  const fetchDataClassCategory = async ({ skip, take, filterString }) => {
    try {
      filterString='[{"type": "text", "field" : "type", "value": "payment_type"}]'
      const response = await EnumAPI.GetAllEnum(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateCategory(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      return err
    }
  }

  const onDataStateChange = (sort, filter) => {
    setDataState({
      ...dataState,
      sort : sort,
      filterString : filter
    })
  }

  useEffect(() => {
    fetchDataTransaction(dataState)
  }, [dataState])

  useEffect(() => {
    fetchDataClassCategory(dataStateCategory)
  }, [])

  // const getAllTransaction = async () => {
  //   setResult([])
  //   try {
  //     const responses = await order_id.map((code) => {
  //       return PaymentAPI.getTransaction(code)
  //     })
  //     Promise.all(responses).then( response => {
  //       response.map((data) => {
  //         console.log(data)

  //         let code, option

  //         switch(data.payment_type) {
  //         case 'bank_transfer' :
  //           code = data.va_numbers[0].va_number
  //           option = data.va_numbers[0].bank
  //           break
  //         case 'cstore' :
  //           code = data.payment_code
  //           option = data.store
  //           break
  //         default :
  //           code = 'none'
  //           option = 'none'
  //         }

  //         setResult(s=> [ ...s, {
  //           gateway_code : code,
  //           gateway_option : option,
  //           price : data.gross_amount,
  //           invoice_number : data.order_id,
  //           status : data.transaction_status,
  //           gateway_type : data.payment_type,
  //           created_date : data.transaction_time,
  //           class_title : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan'
  //         } ])
  //       })
  //     })
  //   } catch (error) {
  //     alert('fetch data error')
  //   }
  // }

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataTransaction(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: TRANSACT_USER_LOAD_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingScroll ? (
      <View style={styles.indicatorContainer}>
        <LoadingView
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


  const TransactionCard = (item, index) => {
    let ribbon, icon, status, color
    switch (item.Payment_Type.split('|')[0]) {
    case 'Completed':
      status = item.Payment_Type.split('|')[2]
      color = Color.textSuccess
      icon = Images.IconComplete
      ribbon = Images.RibbonComplete
      break
    case 'Failed':
      status = item.Payment_Type.split('|')[2]
      color = Color.textFailed
      icon = Images.IconFailed
      ribbon = Images.RibbonFailed
      break
    case 'WaitingForPayment':
      status = item.Status_Payment == 'Waiting for Payment' ? 'Menunggu Upload Bukti' : 'Sedang Diverifikasi'
      color = Color.textPending
      icon = Images.IconPending
      ribbon = Images.RibbonPending
      break
    default:
      status = item.Payment_Type.split('|')[2]
      color = Color.textPending
      icon = Images.IconPending
      ribbon = Images.RibbonPending
      break
    }

    return (
      <View key={index}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('TransactionInfo', item)}
          disabled={item.Status_Payment == 'Waiting for Payment' ? false : true}
          // onPress={() => {
          //   console.log(item)
          //   const Item = {}
          //   Item.Create_Invoice = false
          //   Item.Gateway_Type = item.gateway_type
          //   Item.Gateway_Price = item.price
          //   Item.Created_Date = item.created_date
          //   Item.Gateway_Code = item.gateway_code
          //   Item.Gateway_Option = item.gateway_option
          //   navigation.navigate('TransactionInfo', Item)
          // }}
          // disabled={item.status == 'pending' ? false : true}
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
              <Text style={styles.textBold}>{item.Invoice_Number}</Text>
              {/* <Text style={styles.textBold}>{result.length > 0 && (
                result[index] != undefined && (
                  result[index].invoice_number
                )
              )} </Text> */}
            </Text>
            <Text style={styles.textDesc}>{item.Class_Name}</Text>
            <Text style={styles.textDate}>
            Tanggal Transaksi: {moment(item.Created_Date).format('DD MMM YYYY HH:mm:ss')}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <ModalFilterUserTransaction
        state={stateCategory}
        submit={onDataStateChange}
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
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
          {loading && !loadingScroll ?
            <LoadingView
              color ='white'
              loadingStyle={{ marginTop : -100 }}
            /> :
            state.length == 0 ?
              <NoTransaction /> :
              <FlatList
                data={state}
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
          }
        </ImageBackground>
      </View>
    </>
  )
}

export default Transaction
