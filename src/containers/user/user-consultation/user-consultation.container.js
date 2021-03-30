import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {
  LoadingView,
  ModalNoConnection,
} from '../../../components'
import {
  UserClassAPI,
  ConsultationAPI,
} from '../../../api'

import { Images } from '../../../assets'
import { Response } from '../../../utils'

import styles from './user-consultation.style'

const Consultation = () => {
  const navigation = useNavigation()

  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [stateNotif, setStateNotif] = useState([])
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState] = useState({ skip: 0, take: 10, filterString: '[]',  sort : 'ASC' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataUserClass(dataState)
    setconnectStatus(!connectStatus)
  }

  const fetchDataUserClass = async ({ skip, take, filterString, sort }) => {
    try {
      setLoading(true)
      const response = await UserClassAPI.GetAllUserClass(skip, take, filterString, sort)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  const fetchDataConsultation = async ({ skip, take, filterString, sort }) => {
    try {
      setLoading(true)
      filterString='[{"type": "bool", "field" : "is_read", "value": "false"}]'
      const response = await ConsultationAPI.GetAllConsultationLimit(skip, take, filterString, sort)
      if (response.status === Response.SUCCESS) {
        setStateNotif(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataUserClass(dataState)
    fetchDataConsultation(dataState)
  }, [dataState])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Pesan Suara</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const EmptyList = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoRecentTask.default style={{ marginTop: 12 }} />
      </View>
    )
  }


  const Content = (item, index) => {
    let image
    switch (item.Class_Initial) {
    case 'Bahasa Arab':
      image = Images.CardMsg1
      break
    case 'Tilawah':
      image = Images.CardMsg2
      break
    case 'Tahsin':
      image = Images.CardMsg3
      break
    case 'Fiqih Penyelenggaraan Jenazah':
      image = Images.CardMsg4
      break
    case 'Fiqih Ibadah':
      image = Images.CardMsg5
      break
    case 'Fiqih Pernikahan':
      image = Images.CardMsg6
      break
    }

    return(
      <View key={index}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ alignItems : 'center' }}
          onPress={() => navigation.navigate('ConsultationDetail',
            { classes : item, notif : stateNotif.length == 0 ? [] : stateNotif[0] })}
        >
          <Image source={image}
            style={styles.cardCategory}/>
          {stateNotif.length > 0 && (
            <Images.IconNotifInfo.default style={styles.notif}/>
          )}
          <View style={styles.containerCategory}>
            <Text style={styles.textCategory}>Kelas {item.Class_Initial}</Text>
          </View>
          <Text style={styles.textSeeMessage}>LIHAT PESAN</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      {loading ? <LoadingView/> :
        state.length == 0 ? (
          <EmptyList/>
        ) : (
          <FlatList
            data={state}
            numColumns={2}
            style={{ width:'100%' }}
            showsVerticalScrollIndicator ={false}
            contentContainerStyle={{ alignItems : 'center' }}
            keyExtractor={(item, index) =>  index.toString()}
            renderItem={({ item, index }) => Content(item, index)}
          />
        )}
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
    </View>
  )
}

export default Consultation
