import Swiper from 'react-native-swiper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
// import { useIsFocused } from '@react-navigation/core'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  // BackHandler,
  // ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import {
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { ClassAPI, } from '../../../api'
import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { styles } from './instructor-dashboard.style'

const InstructorDashboard = () => {
  // const isFocused = useIsFocused()
  const navigation = useNavigation()
  const [state, setState] = useState([])
  // const [exitApp, setExitApp] = useState(0)
  const [loading, setLoading] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataClass(dataState)
    setconnectStatus(!connectStatus)
  }

  const fetchDataClass = async ({ skip, take, filterString }) => {
    try {
      setLoading(true)
      const response = await ClassAPI.GetAllClass(skip, take, filterString)
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

  useEffect(() => {
    fetchDataClass(dataState)
  }, [])

  // const ClassesGrouping = state.reduce(function (rows, key, index) {
  //   return (
  //     (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
  //     rows
  //   )
  // }, [])

  const Footer = () => {
    return (
      <View style={styles.containerFooter}>
        <Text style={styles.textTitle}>
         Bantu jawab pertanyaan atau koreksi bacaan santri dan peroleh manfaatnya!
        </Text>
        <Text style={styles.textSubTitle}>
          ayo bantu mereka koreksi bacaannya
        </Text>
        {loading ? <LoadingView/> : (
          <Swiper
            containerStyle={styles.contentSwiper}
            activeDotStyle={styles.activeDot}
            dot={false}
            loop={false}>
            {state.map((item, classgroupIndex) => {
              return item.Class_Initial && (
                <View key={classgroupIndex} style={styles.containerRowView}>
                  {/* {ClassesGrouping[0].map((item, classIndex) => {
                    return ( */}
                  <Card
                    key={classgroupIndex}
                    containerStyle={styles.containerCard}>
                    <ImageBackground
                      source={Images.InstructorCardTahsin}
                      style={styles.cardBackground}
                      imageStyle={styles.illustration}>
                      <Text style={styles.textClassName}>Kelas {item.Class_Initial}</Text>
                      <Text style={styles.textTaskCount}>
                        {`${100} Tugas Tersedia`}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('InstructorJob', item)}>
                        <Text style={styles.textBtnViewTask}>Lihat Tugas</Text>
                      </TouchableOpacity>
                    </ImageBackground>
                  </Card>
                  {/* )
                  })} */}
                </View>
              )
            })}
          </Swiper>
        )}
      </View>
    )
  }

  // useEffect(() => {
  //   const backAction = () => {
  //     setTimeout(() => {
  //       setExitApp(0)
  //     }, 2000)

  //     if(exitApp == 0) {
  //       ToastAndroid.showWithGravityAndOffset('Tekan sekali lagi untuk keluar', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 200)
  //       setExitApp(1)
  //     }

  //     if(exitApp == 1) {
  //       BackHandler.exitApp()
  //     }
  //     return true
  //   }

  //   if(isFocused) {
  //     const backHandler = BackHandler.addEventListener(
  //       'hardwareBackPress',
  //       backAction
  //     )
  //     return () => backHandler.remove()
  //   }
  // }, [exitApp])

  return (
    <View style={styles.container}>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <ImageBackground
        source={Images.InstructorDashboardBackground}
        style={styles.containerBackground}>
        <Images.LogoBelajariahInstructor.default style={styles.logo} />
        <Footer />
      </ImageBackground>
    </View>
  )
}

export default InstructorDashboard
