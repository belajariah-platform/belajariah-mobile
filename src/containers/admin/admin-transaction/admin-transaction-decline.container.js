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
  ImageView,
  ModalRepair,
  LoadingView,
  ModalConfirm,
  ButtonGradient,
  ModalNoConnection,
} from '../../../components'
import {
  TRANSACT_DECLINE_REQ,
  TRANSACT_DECLINE_SUCC,
  TRANSACT_DECLINE_FAIL,
  TRANSACT_DECLINE_SCROLL,
} from '../../../action'

import { Response } from '../../../utils'
import { PaymentAPI } from '../../../api'
import { Images } from '../../../assets'
import { FormatRupiah } from '../../../utils'
import { styles } from './admin-transaction.style'

const AdminTransactionDecline = ({ search }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { loadingDecline, loadingDeclineScroll } = useSelector((state) => state.TransactionDeclineReducer)

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
      dispatch({ type: TRANSACT_DECLINE_REQ })
      const response = await PaymentAPI.GetAllPaymentReject(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      dispatch({ type: TRANSACT_DECLINE_SUCC })
    } catch (err) {
      dispatch({ type: TRANSACT_DECLINE_FAIL })
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

  const handleRevised = async (item) => {
    const values = {
      ID : item.ID,
      Remarks : remarks,
      Action : 'Revised',
      User_Code : item.User_Code,
      Class_Code : item.Class_Code,
      Package_Code : item.Package_Code,
      Status_Payment_Code : item.Status_Payment_Code,
    }

    try {
      setLoadingBtn(true)
      const response = await PaymentAPI.ConfirmPayment(values)
      if (!response.data.result) {
        ToastAndroid.show(`Errror ${response.data.error}`,
          ToastAndroid.SHORT)
        setLoadingBtn(false)
      } else {
        setLoadingBtn(false)
        fetchDataTransaction(dataState)
      }
    } catch (error) {
      setLoadingBtn(false)
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return error
    }
  }

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataTransaction(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: TRANSACT_DECLINE_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingDeclineScroll ? (
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
        <Card containerStyle={styles.cardUserOpacity}>
          <View style={styles.ViewInstructorInfo}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=> navigation.navigate('AdminProfileAll', item)}
            >
              <Text style={{ ...styles.textUsername, opacity : 0.5 }}>{item.User_Name}</Text>
            </TouchableOpacity>
            <View style={{ ...styles.ViewTop, opacity : 0.5 }}>
              <Text style={styles.TxtTimeTitle}>
                {moment(item.Created_Date).format('h:mm A')} ({moment(item.Created_Date).format('L')})
              </Text>
            </View>
            <Card.Divider style={styles.divider} />
            <Text style={styles.TxtInvoice}>{item.Invoice_Number}</Text>
          </View>
          <View style={{ ...styles.ViewLabel, opacity : 0.5 }}>
            <Text style={styles.TxtLabel}>{item.Class_Initial}</Text>
          </View>
          <View style={{ ...styles.viewTxtClass, opacity : 0.5 }}>
            <Text style={styles.TxtDescKelas}>{item.Class_Name}</Text>
          </View>
          <View style={{ ...styles.containerButtonAction, opacity : 0.5 }}>
            <View style={styles.ViewButtonAction}>
              <TouchableOpacity
                disabled={isDisable}
                style={{ flex : 1 }}
                onPress={() => {
                  toggleModalFoto()
                  setImagePath(item.Image_Proof)
                }}>
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
          <View style={{ ...styles.ViewPrice, opacity : 0.5 }}>
            <Text style={styles.TxtBank}>{item.Payment_Method}</Text>
            <Text style={styles.TxtHarga}>Rp{FormatRupiah(item.Total_Transfer)}</Text>
          </View>
          <View style={styles.ViewButtonReject}>
            {item.Status_Payment == 'Failed' ?
              <ButtonGradient
                title='Perbaiki'
                styles={styles.ButtonAction}
                disabled={loadingBtn ? true : false}
                colors={['#0bb091', '#16c4a4', '#0bb091']}
                onPress = {() => toggleModalRepair(item)}
              /> :
              <ButtonGradient
                title='Batalkan'
                styles={styles.ButtonActionReject}
                disabled={loadingBtn ? true : false}
                colors={['#d73c2c', '#ff6c5c', '#d73c2c']}
                onPress = {() => toggleModal('Revised', item)}
              />
            }
          </View>
        </Card>
      </View>
    )
  }

  const NoTransaction = () => {
    return(
      <View style={styles.containerNoTransaction}>
        <Images.IllustrationNoTransactionReject.default />
        <Text style={styles.TxtNoTransaction}>
          Belum ada transaksi yang ditolak saat ini
        </Text>
      </View>
    )
  }

  return (
    <View>
      <ModalConfirm
        action={action}
        isVisible={modalVisible}
        submit={() => handleRevised(dataObj)}
        backdropPress={() => toggleModal()}
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
        {loadingDecline && !loadingDeclineScroll ?
          <LoadingView color='white'/> :
          states == 0 ?
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

AdminTransactionDecline.propTypes = {
  search: PropTypes.string,
}

export default AdminTransactionDecline