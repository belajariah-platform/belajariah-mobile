import moment from 'moment'
import PropTypes from 'prop-types'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

import {
  CONSUL_ACCEPT_REQ,
  CONSUL_ACCEPT_SUCC,
  CONSUL_ACCEPT_FAIL,
  CONSUL_ACCEPT_SCROLL,
} from '../../../action'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { ConsultationAPI } from '../../../api'
import { LoadingView } from '../../../components'
import { TimeConvert, TimerObj } from '../../../utils'

import { styles } from './admin-user.style'

const AdminUserAccept = ({ search }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { loadingAccept, loadingAcceptScroll } = useSelector((state) => state.ConsultationAcceptReducer)

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] =  useState(0)
  const [msgSelected, setMsgSelected] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [optionSelected, setOptionSelected] = useState({})

  const [count, setCount] = useState(0)
  const [states, setStates] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const fetchDataConsultation = async ({ skip, take, filterString, sort, search }) => {
    try {
      dispatch({ type: CONSUL_ACCEPT_REQ })
      const response = await ConsultationAPI.GetAllConsultation(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
        dispatch({ type: CONSUL_ACCEPT_SUCC })
      } else {
        dispatch({ type: CONSUL_ACCEPT_FAIL })
      }
    } catch (err) {
      dispatch({ type: CONSUL_ACCEPT_FAIL })
      return err
    }
  }

  const onDataStateChange = (event) => {
    const delay = setTimeout(() => {
      setDataState({
        ...dataState,
        search : event,
      })
    }, 500)
    return () => clearTimeout(delay)
  }

  const handlePlayList = (item) => {
    msgSelected.forEach((val, i) => {
      if (val.ID == item.ID) {
        let isPlay = [...msgSelected]
        isPlay[i] = { ...val, Is_Play :
        optionSelected.ID == val.ID &&
        optionSelected.Is_Play  ? false : true
        }
        setMinutes(TimerObj(val.voice_duration).minute)
        setSeconds(TimerObj(val.voice_duration).second)
        setOptionSelected(isPlay[i])
      }
    })
  }

  const onRefreshing = () => {
    setRefreshing(true)
    setMsgSelected(states)
    setOptionSelected({})
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: CONSUL_ACCEPT_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (optionSelected.Is_Play) {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setOptionSelected({
              ...optionSelected,
              Is_Play : false
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
    onDataStateChange(search)
    if (search.length > 0 ) {
      setOptionSelected({
        ...optionSelected,
        Is_Play : false
      })
    }
  }, [search])

  useEffect(() => {
    setOptionSelected({})
    setMsgSelected(states)
    fetchDataConsultation(dataState)
  }, [dataState])

  const renderFooter = () => {
    return loadingAcceptScroll ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          color='white'
          size={30} />
      </View>
    ) : null
  }

  const CardUser = (item, index) => {
    let icon
    optionSelected.Is_Play &&
    optionSelected.ID == item.ID ?
      (icon = Images.IconPause) :
      (icon =  Images.IconPlay)

    return(
      <View key={index}>
        <Card containerStyle={styles.cardUser}>
          <View style={styles.ViewInstructorInfo}>
            <Image
              style={styles.avatarUser}
              source={item.User_Image == '' ?
                Images.ImageProfileDefault  : { uri :item.User_Image }}
            />
            <TouchableOpacity
              style={{ flex : 1 }}
              activeOpacity={0.5}
              onPress={()=> navigation.navigate('AdminProfileAll', item)}
            >
              <Text style={styles.textUsername}>{item.User_Name}</Text>
              <Text style={styles.TxtTimeTitle}>
                {moment(item.Created_Date).format('h:mm A')} ({moment(item.Created_Date).format('L')})
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
                {optionSelected.Is_Play && optionSelected.ID == item.ID ? (
                  `${minutes}:${seconds < 10 ?
                    `0${seconds}` : seconds}`
                ) : (
                  TimeConvert(item.Recording_Duration)
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
            <List.Accordion
              title='Deskripsi konsultasi'
              titleStyle={styles.textRegular}
              style={styles.containerAccordion}>
              <View>
                <Text
                  style={styles.description}>
                  {item.Description}
                </Text>
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
        {loadingAccept && !loadingAcceptScroll ?
          <LoadingView color = 'white'/> :
          states == 0 ?
            <NoUser/>
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

AdminUserAccept.propTypes = {
  search : PropTypes.string,
}

export default AdminUserAccept