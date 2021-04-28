import React from 'react'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
import styles from './user-consultation.style'

const Consultation = () => {
  const navigation = useNavigation()

  const state = [
    { category : 'tahsin', new_message : 1 },
    { category : 'tilawah', new_message : 0 },
    { category : 'fiqih pernikahan', new_message : 0 },
    { category : 'fiqih ibadah', new_message : 0 },
    { category : 'bahasa arab', new_message : 0 },
    { category : 'fiqih penyelenggara jenazah', new_message : 0 },

  ]

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
    switch (item.category) {
    case 'bahasa arab':
      image = Images.CardMsg1
      break
    case 'tilawah':
      image = Images.CardMsg2
      break
    case 'fiqih ibadah':
      image = Images.CardMsg3
      break
    case 'fiqih penyelenggara jenazah':
      image = Images.CardMsg4
      break
    case 'tahsin':
      image = Images.CardMsg5
      break
    default:
      image = Images.CardMsg6
      break
    }
    return(
      <View key={index}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ alignItems : 'center' }}
          onPress={() => navigation.navigate('ConsultationDetail', item)}
        >
          <Image source={image}
            style={styles.cardCategory}/>
          {item.new_message > 0 && (
            <Images.IconNotifInfo.default style={styles.notif}/>
          )}
          <View style={styles.containerCategory}>
            <Text style={styles.textCategory}>Kelas {item.category}</Text>
          </View>
          <Text style={styles.textSeeMessage}>LIHAT PESAN</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <FlatList
        data={state}
        numColumns={2}
        style={{ width:'100%' }}
        showsVerticalScrollIndicator ={false}
        contentContainerStyle={{ alignItems : 'center' }}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => Content(item, index)}
      />
    </View>
  )
}

export default Consultation
