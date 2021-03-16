import { Card } from 'react-native-elements'
import { Text } from '@ui-kitten/components'
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
  MENTOR_REQ,
  MENTOR_SUCC,
  MENTOR_FAIL,
  MENTOR_LOAD_SCROLL,
} from '../../../action'

import {
  Searchbox,
  LoadingView,
  ModalFilterAdminPageUstadz,
} from '../../../components'

import { Images } from '../../../assets'
import { MentorAPI } from '../../../api'
import { Response } from '../../../utils'
import { styles } from './admin-instructor.style'

const AdminInstructor = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)
  const { loading, loadingScroll } = useSelector((state) => state.MentorReducer)

  const [count, setCount] = useState(0)
  const [states, setStates] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const fetchDataMentor = async ({ skip, take, filterString, sort, search }) => {
    try {
      dispatch({ type: MENTOR_REQ })
      const response = await MentorAPI.GetAllMentor(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
        dispatch({ type: MENTOR_SUCC })
      } else {
        dispatch({ type: MENTOR_FAIL })
      }
    } catch (err) {
      dispatch({ type: MENTOR_FAIL })
      return err
    }
  }

  const onDataStateChange = (event) => {
    setDataState({
      ...dataState,
      search : event,
    })
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchDataMentor(dataState)
    }, 500)
    return () => clearTimeout(delay)
  }, [dataState])

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataMentor(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: MENTOR_LOAD_SCROLL })
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
          color='white'
          size={30} />
      </View>
    ) : null
  }

  const CardMentor = (item, index) => {
    return(
      <View>
        <Card
          key={index}
          containerStyle={styles.cardInstructor}>
          <View style={styles.ViewInstructorInfo}>
            <Image source={Images.ImageProfileDefault} style={styles.ImgUstadz}/>
            <View style={{ flex : 1 }}>
              <Text style={styles.TxtTitleInstructor}>{item.Full_Name}</Text>
              <Text style={styles.email}>{item.email || 'example@gmail.com'}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AdminProfileInstructor', item)}>
            <Text style={styles.TxtButtonDetail}>Detail Profil</Text>
          </TouchableOpacity>
        </Card>

      </View>
    )
  }

  const NoMentor = () => {
    return(
      <View style={styles.containerNoInstructor}>
        <Images.IllustrationsNoInstructor.default />
        <Text style={styles.TxtNoData}>Oopss!</Text>
      </View>
    )
  }

  return (
    <>
      <ModalFilterAdminPageUstadz
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
      />
      <View style={styles.containerMain}>
        <ImageBackground
          source={Images.AdminBackground}
          style={styles.containerBackground}>
          <View style={styles.containerHeader}>
            <View
              style={{ flex : 1 }}>
              <Searchbox
                size='medium'
                style={styles.searchbox}
                placeholder={'Temukan pengajar'}
                onFocus={() => console.log('hello')}
                onChangeText={(e) => onDataStateChange(e)}
              />
            </View>
            <TouchableOpacity
              style={styles.iconFilter}
              onPress = {toggleModal}>
              <Images.Filter.default
                width={20}
                height={20}
              />
            </TouchableOpacity>
          </View>
          {loading &&  !loadingScroll ?
            <LoadingView color='white'/> :
            states.length == 0 ?
              <NoMentor/> :
              <FlatList
                data={states}
                style={{ width:'100%' }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                onEndReached={(e) => onLoadMore(e)}
                showsVerticalScrollIndicator ={false}
                contentContainerStyle={{ paddingBottom: 92 }}
                keyExtractor={(item, index) =>  index.toString()}
                renderItem={({ item, index }) => CardMentor(item, index)}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
              />
          }
        </ImageBackground>
      </View>
    </>
  )
}

export default AdminInstructor
