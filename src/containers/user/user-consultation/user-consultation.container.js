import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { Response } from '../../../utils'
import { Images } from '../../../assets'
import { UserClassAPI } from '../../../api'
import { LoadingView } from '../../../components'

import styles from './user-consultation.style'

const Consultation = () => {
  const navigation = useNavigation()

  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]',  sort : 'ASC' })


  const fetchDataUserClass = async ({ skip, take, filterString, sort }) => {
    try {
      setLoading(true)
      const response = await UserClassAPI.GetAllUserClass(skip, take, filterString, sort)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataUserClass(dataState)
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
          onPress={() => navigation.navigate('ConsultationDetail', item)}
        >
          <Image source={image}
            style={styles.cardCategory}/>
          {item.new_message > 0 && (
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
          <Text>Belum ada pesan</Text>
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
    </View>
  )
}

export default Consultation
