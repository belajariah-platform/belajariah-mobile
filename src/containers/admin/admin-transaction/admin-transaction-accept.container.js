import moment from 'moment'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  FlatList,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import {
  TRANSACT_ACCEPT_SUCC,
  TRANSACT_ACCEPT_REQ,
  TRANSACT_ACCEPT_FAIL,
  TRANSACT_ACCEPT_SCROLL,
} from '../../../action'
import {
  ImageView,
  ModalRepair,
  LoadingView,
} from '../../../components'

import { Images } from '../../../assets'
import { PaymentAPI } from '../../../api'
import { Response, FormatRupiah } from '../../../utils'

import { styles } from './admin-transaction.style'

const AdminTransactionAccept = ({ search }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { loadingAccept, loadingAcceptScroll } = useSelector((state) => state.TransactionAcceptReducer)

  const [count, setCount] = useState(0)
  const [states, setStates] = useState([])
  const [imagePath, setImagePath] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRepairVisible, setmodalRepairVisible] = useState(false)
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalRepair = () => setmodalRepairVisible(!modalRepairVisible)

  const fetchDataTransaction = async ({ skip, take, filterString, sort, search }) => {
    try {
      dispatch({ type: TRANSACT_ACCEPT_REQ })
      filterString='[{"type": "text", "field" : "status_payment", "value": "Completed"}]'
      const response = await PaymentAPI.GetAllPayment(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
        dispatch({ type: TRANSACT_ACCEPT_SUCC })
      } else {
        dispatch({ type: TRANSACT_ACCEPT_FAIL })
      }
    } catch (err) {
      dispatch({ type: TRANSACT_ACCEPT_FAIL })
      return err
    }
  }

  const onDataStateChange = (event) => {
    setDataState({
      ...dataState,
      search : event,
    })
  }

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataTransaction(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: TRANSACT_ACCEPT_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingAcceptScroll ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
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
    let icon
    item.Status_Class == 'In Progress' ?
      icon = Images.IconTransactProgress :
      icon = Images.IconTransactComplete

    let isDisable, proofName
    item.Image_Proof == '' ? (isDisable = true, proofName = 'Proof empty ...') :
      (isDisable = false, proofName = item.Image_Filename)

    return(
      <View key={index}>
        <Card containerStyle={styles.cardUser}>
          <icon.default style={styles.IconMini}
            width={40}
            height={40}
          />
          <View style={{ ...styles.ViewInstructorInfo, marginTop : -1 }}>
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
          <View style={styles.viewPriceTwo}>
            <View>
              <Text style={styles.TxtBank}>{item.Payment_Method}</Text>
              <Text style={styles.TxtHarga}>Rp{FormatRupiah(item.Total_Transfer)}</Text>
            </View>
            {/* <View>
              {item.Status_Class == 'In Progress' &&(
                <ButtonGradient
                  title='Perbaiki'
                  styles={styles.ButtonActionReject}
                  onPress = {toggleModalRepair}
                  colors={['#0bb091', '#16c4a4', '#0bb091']}
                />
              )}
            </View> */}
          </View>
        </Card>
      </View>
    )
  }

  const NoTransaction = () => {
    return(
      <View style={styles.containerNoTransaction}>
        <Images.IllustrationNoTransactionAccept.default />
        <Text style={styles.TxtNoTransaction}>Belum ada transaksi yang diterima saat ini</Text>
      </View>
    )
  }

  return (
    <View>
      <ModalRepair
        isVisible={modalRepairVisible}
        backdropPress={() => toggleModalRepair()}
        backButtonPress={() => toggleModalRepair()}
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
        {loadingAccept && !loadingAcceptScroll ?
          <LoadingView color='white'/> :
          states == 0 ?
            <NoTransaction />
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

AdminTransactionAccept.propTypes = {
  search : PropTypes.string,
}

export default AdminTransactionAccept