import moment from 'moment'
import PropTypes from 'prop-types'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  FlatList,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { Images } from '../../../assets'
import { TimeConvert, TimerObj } from '../../../utils'
import { styles } from './admin-user.style'

const AdminUserAccept = ({ search }) => {
  const [isEmpty] = useState(true)
  const navigation = useNavigation()
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] =  useState(0)
  const [loading, setLoading] = useState(false)
  const [msgSelected, setMsgSelected] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [optionSelected, setOptionSelected] = useState({})

  const state = [
    { id: 1, username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 74, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { id: 2, username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 10, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { id: 3, username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 60, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { id: 4, username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 60, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
  ]
  const handlePlayList = (item) => {
    msgSelected.forEach((val, i) => {
      if (val.id == item.id) {
        let isPlay = [...msgSelected]
        isPlay[i] = { ...val, is_play :
        optionSelected.id == val.id &&
        optionSelected.is_play  ? false : true
        }
        setMinutes(TimerObj(val.voice_duration).minute)
        setSeconds(TimerObj(val.voice_duration).second)
        setOptionSelected(isPlay[i])
      }
    })
  }

  const onRefreshing = () => {
    setRefreshing(true)
    setMsgSelected(state)
    setOptionSelected({})
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (e.distanceFromEnd >= 0) {
      setLoading(true)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (optionSelected.is_play) {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setOptionSelected({
              ...optionSelected,
              is_play : false
            })
            clearInterval(intervalId)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [seconds, minutes, optionSelected])

  useEffect(() => {
    if (search.length > 0 ) {
      setOptionSelected({
        ...optionSelected,
        is_play : false
      })
    }
  }, [search])

  useEffect(() => {
    setMsgSelected(state)
  }, [])

  const renderFooter = () => {
    return loading ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          color='white'
          size={30} />
      </View>
    ) : null
  }

  const CardUser = (item, index) => {
    let icon
    optionSelected.is_play &&
    optionSelected.id == item.id ?
      (icon = Images.IconPause) :
      (icon =  Images.IconPlay)

    return(
      <View key={index}>
        <Card containerStyle={styles.cardUser}>
          <View style={styles.ViewInstructorInfo}>
            <Image source={item.images} style={styles.avatarUser}/>
            <TouchableOpacity
              style={{ flex : 1 }}
              activeOpacity={0.5}
              onPress={()=> navigation.navigate('AdminProfileAll', item)}
            >
              <Text style={styles.textUsername}>{item.username}</Text>
              <Text style={styles.TxtTimeTitle}>
                {moment(new Date()).format('h:mm A')} ({moment(new Date()).format('L')})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.iconAccept}>
              <Images.IconAcceptStatus.default/>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButtonAction}>
            <View style={styles.ViewButtonAction}>
              <TouchableOpacity
                onPress={() => handlePlayList(item)}
              >
                <icon.default
                  width={20}
                  height={20}
                  style={{ marginRight: 5 }}/>
              </TouchableOpacity>
              <Images.GrafisVoice.default
                width={100}
                height={20}
                style={{ marginRight: 5 }}/>
              <Text style={styles.textDuration}>
                {optionSelected.is_play && optionSelected.id == item.id ? (
                  `${minutes}:${seconds < 10 ?
                    `0${seconds}` : seconds}`
                ) : (
                  TimeConvert(item.voice_duration)
                )}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ marginRight: 5 }}>
              <Images.IconDownloadVoice.default/>
            </TouchableOpacity>
          </View>
          <List.Section>
            <List.Accordion title='Deskripsi konsultasi' titleStyle={styles.textRegular} style={styles.containerAccordion}>
              <View>
                <Text style={styles.description}>{item.voice_description}</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </Card>
      </View>
    )
  }

  const NoUser = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoConsulAccept.default />
        <Text style={styles.TxtNoTask}>Saat ini belum ada aktivitas diterima nih</Text>
      </View>
    )
  }

  return(
    <View style={styles.containerMain}>
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        {isEmpty?
          <NoUser/>
          :
          <FlatList
            data={state}
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

AdminUserAccept.propTypes = {
  search : PropTypes.string,
}

export default AdminUserAccept