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
  ImageView,
  LoadingView,
  ModalRepair,
  ModalConfirm,
  ButtonGradient,
} from '../../../components'
import {
  TRANSACT_ALL_REQ,
  TRANSACT_ALL_SUCC,
  TRANSACT_ALL_FAIL,
  TRANSACT_ALL_SCROLL,
} from '../../../action'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { PaymentAPI } from '../../../api'
import { FormatRupiah } from '../../../utils'
import { styles } from './admin-transaction.style'

const AdminTransactionAll = ({ search }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { loadingAll, loadingAllScroll } = useSelector((state) => state.TransactionAllReducer)

  const [action, setAction] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRepairVisible, setmodalRepairVisible] = useState(false)
  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalRepair = () => setmodalRepairVisible(!modalRepairVisible)

  const [count, setCount] = useState(0)
  const [states, setStates] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const fetchDataTransaction = async ({ skip, take, filterString, sort, search }) => {
    try {
      dispatch({ type: TRANSACT_ALL_REQ })
      // filterString='[{"type": "text", "field" : "status_payment", "value": "Has been Payment"}]'
      const response = await PaymentAPI.GetAllPayment(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
        dispatch({ type: TRANSACT_ALL_SUCC })
      } else {
        dispatch({ type: TRANSACT_ALL_FAIL })
      }
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

  const toggleModal = (e) => {
    setAction(e)
    setModalVisible(!modalVisible)
  }

  const handleSubmit = () => {
    if (action == 'approved') {
      console.log('approved')
    } else {
      console.log('rejected')
    }
  }

  const handleRevised = () => {
    console.log('Revised')
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
              <TouchableOpacity onPress={toggleModalFoto}>
                <View style={styles.viewFoto}>
                  <Images.IconGallery.default
                    width={20}
                    height={20}
                    style={{ marginRight: 5 }}/>
                  <Text>Screen_shoot787878xxx...</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
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
              colors={['#d73c2c', '#ff6c5c', '#d73c2c']}
              onPress = {() => toggleModal('rejected')}
            />
            <ButtonGradient
              title='Perbaiki'
              styles={styles.ButtonAction}
              colors={['#0bb091', '#16c4a4', '#0bb091']}
              onPress = {toggleModalRepair}
            />
            <ButtonGradient
              title='Terima'
              styles={styles.ButtonAction}
              onPress = {() => toggleModal('approved')}
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
      <ModalConfirm
        action={action}
        isVisible={modalVisible}
        submit={() => handleSubmit()}
        backdropPress={() => toggleModal()}
      />
      <ModalRepair
        submit={() => handleRevised()}
        isVisible={modalRepairVisible}
        backdropPress={() => toggleModalRepair()}
      />
      <ImageView
        isVisible={isModalFotoVisible}
        setVisible={() => toggleModalFoto()}
        filepath={'https://www.belajariah.com/img-assets/ImgHeadingBacaanInspiratif.png'}
      />
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
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