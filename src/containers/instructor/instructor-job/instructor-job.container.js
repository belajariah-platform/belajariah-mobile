import moment from 'moment'
import PropTypes from 'prop-types'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import { Avatar, Card } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import {
  ButtonGradient,
  ModalFilterUstadz,
} from '../../../components'
import {
  CONSUL_MENTOR_LIST_REQ,
  CONSUL_MENTOR_LIST_FAIL,
  CONSUL_MENTOR_LIST_SUCC,
  CONSUL_MENTOR_LOAD_SCROLL,
} from '../../../action'

import { Response } from '../../../utils'
import { Images, Color } from '../../../assets'
import { LoadingView, ImageView } from '../../../components'
import { ConsultationAPI, EnumAPI } from '../../../api'

import { styles } from './instructor-job.style'

const InstructorJob = ({ route }) => {
  const item = route.params
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)
  const [stateCategory, setStateCategory] = useState([])
  const [dataStateCategory] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]', sort : 'DESC', search : '' })

  const { loading, loadingScroll } = useSelector((state) => state.ConsultationReducer)

  const fetchDataConsultation = async ({ skip, take, filterString, sort, search }) => {
    try {
      dispatch({ type: CONSUL_MENTOR_LIST_REQ })
      filterString='[{"type": "text", "field" : "status", "value": "Approved"}]'
      const response = await ConsultationAPI.GetAllConsultation(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
        dispatch({ type: CONSUL_MENTOR_LIST_SUCC })
      } else {
        dispatch({ type: CONSUL_MENTOR_LIST_FAIL })
      }
    } catch (err) {
      dispatch({ type: CONSUL_MENTOR_LIST_FAIL })
      return err
    }
  }

  const fetchDataClassCategory = async ({ skip, take, filterString }) => {
    try {
      filterString='[{"type": "text", "field" : "type", "value": "class_type"}]'
      const response = await EnumAPI.GetAllEnum(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateCategory(response.data.data)
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
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)

  useEffect(() => {
    fetchDataConsultation(dataState)
  }, [dataState])

  useEffect(() => {
    fetchDataClassCategory(dataStateCategory)
  }, [])

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: CONSUL_MENTOR_LOAD_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingScroll ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          color={Color.purpleButton}
          size={30} />
      </View>
    ) : null
  }

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataConsultation(dataState)
    setRefreshing(false)
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBackBlack.default/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Kelas {item.Class_Initial}</Text>
        <TouchableOpacity onPress = {toggleModal}>
          <Images.IconFilterBlack.default width={18}/>
        </TouchableOpacity>
      </View>
    )
  }

  const CardList = (items, index) => {
    return (
      <Card key={index} containerStyle={styles.containerCard}>
        <View>
          <View style={styles.flexRow}>
            <Avatar
              source={ Images.ImageProfileDefault}
              containerStyle={styles.avatarUser}
            />
            <View style={styles.containerNameSound}>
              <Text style={styles.textUsername}>{items.User_Name}</Text>
              <Text style={styles.textTime}>
                {moment(items.Modified_Date).fromNow()}
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity>
              <Images.IconPlayVoiceBlack.default
                width={24}
                height={24}
                style={styles.iconPlayVoice}
              />
            </TouchableOpacity>
            <Text style={styles.textSound}>{items.Recording_Name}</Text>
            <Text style={styles.textSoundDuration}>
              {items.Recording_Duration}
            </Text>
          </View>
          <List.Accordion
            title='Deskripsi konsultasi'
            titleStyle={styles.textAccordionTitle}
            style={styles.containerAccordion}>
            <Text style={styles.textDesc}>{items.Description}</Text>
          </List.Accordion>

          <ButtonGradient
            title='Ambil'
            styles={styles.btnApply}
            onPress={() => {
              Alert.alert(
                'Accept Job, Pop Card, and go to InstructorTask',
              )
              navigation.navigate('InstructorTask')
            }}
          />
        </View>
      </Card>
    )
  }

  const EmptyList = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoTaskAvailable.default style={{ marginTop: '4%' }} />
        <Text style={styles.textNoTaskTitle}>Maaf!</Text>
        <Text style={styles.textNoTask}>Saat ini belum ada <Text style={styles.textHeader}>task</Text> yang tersediah yah</Text>
      </View>
    )
  }

  return (
    <>
      <ModalFilterUstadz
        state={stateCategory}
        submit={onDataStateChange}
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <ImageView
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />
      <View style={styles.container}>
        <Header />
        {loading && !loadingScroll ?
          <LoadingView/> :
          state.length == 0 ?
            <EmptyList/> :
            <FlatList
              data={state}
              onEndReachedThreshold={0.1}
              style={styles.containerScrollView}
              ListFooterComponent={renderFooter}
              onEndReached={(e) => onLoadMore(e)}
              showsVerticalScrollIndicator ={false}
              contentContainerStyle={{ paddingBottom: 25 }}
              keyExtractor={(item, index) =>  index.toString()}
              renderItem={({ item, index }) => CardList(item, index)}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
            />
        }
      </View>
    </>
  )
}

InstructorJob.propTypes = {
  route: PropTypes.object,
}

export default InstructorJob
