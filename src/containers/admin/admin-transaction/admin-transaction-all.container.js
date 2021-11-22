import moment from 'moment'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  FlatList,
  ToastAndroid,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import {
  Loader,
  ImageView,
  Searchbox,
  LoadingView,
  ModalRepair,
  ModalConfirm,
  ButtonGradient,
  ModalNoConnection,
} from '../../../components'
import {
  TRANSACT_ALL_REQ,
  TRANSACT_ALL_SUCC,
  TRANSACT_ALL_FAIL,
  TRANSACT_ALL_SCROLL,
} from '../../../action'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { FormatRupiah } from '../../../utils'
import { styles } from './admin-transaction.style'
import { PaymentAPI, ClassQuranAPI } from '../../../api'

const AdminTransactionAll = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [search, setSearch] = useState('')
  const { loadingAll, loadingAllScroll } = useSelector((state) => state.TransactionAllReducer)

  const [action, setAction] = useState('')
  const [dataObj, setDataObj] = useState({})
  const [remarks, setRemarks] = useState('')
  const [imagePath, setImagePath] = useState('')
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRepairVisible, setmodalRepairVisible] = useState(false)

  const [count, setCount] = useState(0)
  const [states, setStates] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const retryConnection = () => {
    fetchDataTransaction(dataState)
    setconnectStatus(!connectStatus)
  }

  const fetchDataTransaction = async ({ skip, take, filterString, sort, search }) => {
    try {
      dispatch({ type: TRANSACT_ALL_REQ })
      filterString='[{"type": "text", "field" : "status_payment", "value": "Has been Payment"}]'
      const response = await PaymentAPI.GetAllPayment(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      dispatch({ type: TRANSACT_ALL_SUCC })
    } catch (err) {
      dispatch({ type: TRANSACT_ALL_FAIL })
      return err
    }
  }

  const onDataStateChange = (event) => {
    setDataState({
      ...dataState,
      search : event,
    })
  }

  const toggleModal = (action, item) => {
    setDataObj(item)
    setAction(action)
    setModalVisible(!modalVisible)
  }

  const toggleModalRepair = (item) => {
    setDataObj(item)
    setmodalRepairVisible(!modalRepairVisible)
  }

  const handleSubmit = async (item) => {
    const values = {
      Remarks : '',
      ID : item.ID,
      Code : item.Code,
      Action : action,
      User_Code : item.User_Code,
      Class_Code : item.Class_Code,
      Package_Code : item.Package_Code,
      Total_Transfer : item.Total_Transfer,
      Status_Payment_Code : item.Status_Payment_Code,
      Payment_Method_Code : item.Payment_Method_Code,
    }
    console.log(values)

    if (item.Payment_Reference == 'General Payment') {
      try {
        setLoadingBtn(true)
        const response = await PaymentAPI.ConfirmPayment(values)
        if (!response.data.result) {
          ToastAndroid.show(`Errror ${response.data.error}`,
            ToastAndroid.SHORT)
        } else {
          setModalVisible(!modalVisible)
          fetchDataTransaction(dataState)
        }
        setLoadingBtn(false)
      } catch (error) {
        setLoadingBtn(false)
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
        return error
      }
    } else {
        try {
          setLoadingBtn(true)
          const response = await ClassQuranAPI.ConfirmPaymentQuran(values)
          console.log(response.data.message)
          if (response && response.data && response.data.message.result) {
            setModalVisible(!modalVisible)
            fetchDataTransaction(dataState)
          } else {
            ToastAndroid.show(`Gagal ${'mesubmit pembayaran'}`,
              ToastAndroid.SHORT)
          }
          setLoadingBtn(false)
        } catch (error) {
          setLoadingBtn(false)
          NetInfo.fetch().then(res => {
            setconnectStatus(!res.isConnected)
          })
          return error
        } 
      }
  }

  const handleRevised = async (item) => {
    const values = {
      ID : item.ID,
      Code : item.Code,
      Remarks : remarks,
      Action : 'Revised',
      User_Code : item.User_Code,
      Class_Code : item.Class_Code,
      Package_Code : item.Package_Code,
      Status_Payment_Code : item.Status_Payment_Code,
    }
    console.log(values)
   if (item.Payment_Reference == 'General Payment') {
      try {
        setLoadingBtn(true)
        const response = await PaymentAPI.ConfirmPayment(values)
        if (!response.data.result) {
          ToastAndroid.show(`Errror ${response.data.error}`,
            ToastAndroid.SHORT)
        } else {
          setModalVisible(!modalVisible)
          fetchDataTransaction(dataState)
        }
        setLoadingBtn(false)
      } catch (error) {
        setLoadingBtn(false)
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
        return error
      }
    } else {
        try {
          setLoadingBtn(true)
          const response = await ClassQuranAPI.ConfirmPaymentQuran(values)
          console.log(response)
          if (response && response.data && response.data.message.result) {
            setModalVisible(!modalVisible)
            fetchDataTransaction(dataState)
          } else {
            ToastAndroid.show(`Gagal ${'mesubmit pembayaran'}`,
              ToastAndroid.SHORT)
          }
          setLoadingBtn(false)
        } catch (error) {
          setLoadingBtn(false)
          NetInfo.fetch().then(res => {
            setconnectStatus(!res.isConnected)
          })
          return error
        } 
      }
  }

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataTransaction(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: TRANSACT_ALL_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingAllScroll ? (
      <View style={styles.indicatorContainer}>
        <LoadingView
          color='white'
          size={30} />
      </View>
    ) : null
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      onDataStateChange(search)
    }, 500)
    return () => clearTimeout(delay)
  }, [search])

  useEffect(() => {
    fetchDataTransaction(dataState)
  }, [dataState])

  const CardUser = (item, index) => {
    let isDisable, proofName
    item.Image_Proof == '' ? (isDisable = true, proofName = 'Proof empty ...') :
      (isDisable = false, proofName = item.Image_Filename)
    return(
      <View key={index}>
        <Card containerStyle={styles.cardUser}>
          <View style={styles.ViewInstructorInfo}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=> navigation.navigate('AdminProfileAll', item)}
            >
              <Text style={styles.textUsername}>{item.User_Name}</Text>
            </TouchableOpacity>
            <View style={styles.ViewTop}>
              <Text style={styles.TxtTimeTitle}>
                {moment(item.Created_Date).format('h:mm A')} ({moment(item.Created_Date).format('L')})
              </Text>
            </View>
            <Card.Divider style={styles.divider} />
            <Text style={styles.TxtInvoice}>{item.Invoice_Number}</Text>
          </View>
          <View style={styles.ViewLabel}>
            <Text style={styles.TxtLabel}>{item.Class_Initial}</Text>
          </View>
          <View style={styles.viewTxtClass}>
            <Text style={styles.TxtDescKelas}>{item.Class_Name}</Text>
          </View>
          <View style={styles.containerButtonAction}>
            <View style={styles.ViewButtonAction}>
              <TouchableOpacity
                disabled={isDisable}
                onPress={() => {
                  toggleModalFoto()
                  setImagePath(item.Image_Proof)
                }}
                style={{ flex : 1 }}>
                <View style={styles.viewFoto}>
                  <Images.IconGallery.default
                    width={20}
                    height={20}
                    style={{ marginRight: 5 }}/>
                  <Text>{proofName}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={isDisable}>
                <Images.IconUnduhanAdmin.default
                  width={30}
                  height={30}
                  style={{ marginRight: 5,  }}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ViewPrice}>
            <Text style={styles.TxtBank}>{item.Payment_Method}</Text>
            <Text style={styles.TxtHarga}>Rp{FormatRupiah(item.Total_Transfer)}</Text>
          </View>
          <View style={styles.ViewButtonActionVoice}>
            <ButtonGradient
              title='Tolak'
              styles={styles.ButtonAction}
              disabled={loadingBtn ? true : false}
              colors={['#d73c2c', '#ff6c5c', '#d73c2c']}
              onPress = {() => toggleModal('Rejected', item)}
            />
            <ButtonGradient
              title='Perbaiki'
              styles={styles.ButtonAction}
              disabled={loadingBtn ? true : false}
              colors={['#0bb091', '#16c4a4', '#0bb091']}
              onPress = {() => toggleModalRepair(item)}
            />
            <ButtonGradient
              title='Terima'
              styles={styles.ButtonAction}
              disabled={loadingBtn ? true : false}
              onPress = {() => toggleModal('Approved', item)}
            />
          </View>
        </Card>
      </View>
    )
  }

  const NoTransaction = () => {
    return(
      <View style={styles.containerNoTransaction}>
        <Images.IllustrationNoTransactionAll.default />
        <Text style={styles.TxtNoTransaction}>Belum ada transaksi!</Text>
      </View>
    )
  }

  return (
    <View>
      <Loader loading={loadingBtn}/>
      <ModalConfirm
        action={action}
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        submit={() => handleSubmit(dataObj)}
        backButtonPress={() => toggleModal()}
      />
      <ModalRepair
        isVisible={modalRepairVisible}
        onChangeText={(e) => setRemarks(e)}
        submit={() => handleRevised(dataObj)}
        backdropPress={() => toggleModalRepair()}
        backButtonPress={() => toggleModalRepair()}
      />
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <ImageView
        filepath={imagePath}
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        <View>
          <Searchbox
            size='medium'
            style={styles.searchbox}
            placeholder={'Temukan user'}
            onChangeText={(e) => setSearch(e)}
            onFocus={() => console.log('hello')}
          />
        </View>
        {loadingAll && !loadingAllScroll?
          <LoadingView color='white'/>  :
          states.length == 0 ?
            <NoTransaction/>
            :
            <FlatList
              data={states}
              style={{ width:'100%' }}
              onEndReachedThreshold={0.1}
              ListFooterComponent={renderFooter}
              onEndReached={(e) => onLoadMore(e)}
              showsVerticalScrollIndicator ={false}
              contentContainerStyle={{ paddingBottom: 25 }}
              keyExtractor={(item, index) =>  index.toString()}
              renderItem={({ item, index }) => CardUser(item, index)}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}/>
        }

      </ImageBackground>
    </View>
  )
}

AdminTransactionAll.propTypes = {
  search: PropTypes.string,
}

export default AdminTransactionAll