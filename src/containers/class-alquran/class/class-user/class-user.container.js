import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useDispatch, useSelector } from 'react-redux'
import {
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
  ImageBackground,
} from 'react-native'

import {
  USER_CLASS_LIST_SUCC,
  USER_CLASS_LIST_FAIL,
  USER_CLASS_LOAD_SCROLL,
} from '../../../../action'

import {
  LoadingView,
  ButtonGradient,
  ModalNoConnection,
} from '../../../../components'
import { Images } from '../../../../assets'
import { Response } from '../../../../utils'
import { UserClassAPI } from '../../../../api'

import { styles } from '../class-user/class-user.style'


const ClassUserQuran = (props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [intervals, setIntervals] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [dataStateCategory] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })
  const [dataState, setDataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]',  sort : 'DESC' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const { loadingScroll } = useSelector((state) => state.UserClassReducer)

  const retryConnection = () => {
    setLoading(true)
    fetchDataUserClass(dataState)
    fetchDataClassCategory(dataStateCategory)
    setconnectStatus(!connectStatus)
  }

  const fetchDataUserClass = async () => {
    try {
        const response = await UserClassAPI.GetAllUserClassQuran([])
      if (response.status === Response.SUCCESS) {
        setState(response?.data?.message?.data ?? [])
        setCount(response?.data?.count ?? 0)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
      dispatch({ type: USER_CLASS_LIST_SUCC })
    } catch (err) {
      setLoading(false)
      dispatch({ type: USER_CLASS_LIST_FAIL })
      return err
    }
  }

  useEffect(() => {
    if (intervals) {
      setLoading(true)
      fetchDataUserClass(dataState)
      setIntervals(false)
    } else {
      const intervalId = setInterval(() => {
        fetchDataUserClass(dataState)
      }, 5000)
      return () => clearInterval(intervalId)
    }
  }, [dataState])

  const onRefreshing = () => {
    setLoading(true)
    setRefreshing(true)
    fetchDataUserClass(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: USER_CLASS_LOAD_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingScroll ? (
      <View style={styles.indicatorContainer}>
        <LoadingView
          color='white'
          size={30} />
      </View>
    ) : null
  }

  const DataEmpty = () =>{
    return (
        <View style={styles.containerViewClass}>
            <Images.IconClassEmpty.default/>
            <Text style={styles.containerTextClass}>Oops!</Text>
            <Text style={styles.containerChildTextClass}>Saat ini tidak ada kelas</Text>
            <Text style={styles.containerChildTextClass}>yang anda ikuti, <Text style={styles.containerChildTextClass2}>Yuk gabung</Text></Text>
            <Text style={styles.containerChildTextClass2}>kelas sekarang juga</Text>
       </View>
    )
  }

  const DataClass = () => {
      return (
         <FlatList
            data={state}
            style={{ width:'90%' }}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            onEndReached={(e) => onLoadMore(e)}
            showsVerticalScrollIndicator ={false}
            contentContainerStyle={{ paddingBottom: 122, paddingTop: 20 }}
            keyExtractor={(item, index) =>  index.toString()}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
            renderItem={({ item, index }) => (
                <View key={index} style={{marginVertical : 20}}>
                    <View style={{ bottom: 20 }}>
                      <ImageBackground
                        source={Images.BgClassLearning}
                        imageStyle={{ borderRadius: 20 }}
                        style={styles.imageBackgroundCard}
                      >
                        <View style={styles.containerIconProgress}>
                          <Image
                            source={item.Class_Image == '' ?
                              Images.ImgDefault5  : { uri : item.class_image }}
                            style={styles.ImageClass}/>
                            <View style={{ marginLeft: 10, }}>
                              <Text style={styles.TextClass}>{item.class_name}</Text>
                              <ButtonGradient
                                styles={styles.ButtonClass}
                                textStyle={styles.textButton}
                                title={'Lihat Pengajar'}
                                onPress = {() => {
                                    let codes = item.class_code
                                    props.navigation.navigate('ClassUserQuranDetail', 
                                    { DetailClass : { ...item, code : codes}, UserClass : state})}}/>
                            </View>
                        </View>
                        <View style={[styles.containerIconProgress, styles.customIconProgress]}>
                        </View>
                      </ImageBackground>
                    </View>
                </View>
            )}
        />
      )
  }

  return (
    <>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <View style={styles.containerView}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerTextHeader}>Kelas Saya</Text>
        </View>
        <ImageBackground
          source={Images.BgClassUser}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 30 }}
        >
          {loading && !loadingScroll ?
            <LoadingView
              color ='white'
              loadingStyle={{ marginTop : -100 }}
            /> :
            state.length == 0 ? (
             <DataEmpty/>
            ) : (
             <DataClass/>    
            )}
        </ImageBackground>
      </View>
    </>
  )
}

ClassUserQuran.propTypes = {
  navigation: PropTypes.object,
}


export default ClassUserQuran
