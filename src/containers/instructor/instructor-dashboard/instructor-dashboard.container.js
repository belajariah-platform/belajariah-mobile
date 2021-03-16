import Swiper from 'react-native-swiper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { ClassAPI, } from '../../../api'
import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { styles } from './instructor-dashboard.style'

const InstructorDashboard = () => {
  const navigation = useNavigation()
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })

  const fetchDataClass = async ({ skip, take, filterString }) => {
    try {
      setLoading(true)
      const response = await ClassAPI.GetAllClass(skip, take, filterString)
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
    fetchDataClass(dataState)
  }, [])

  const ClassesGrouping = state.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    )
  }, [])

  const Footer = () => {
    return (
      <View style={styles.containerFooter}>
        <Text style={styles.textTitle}>
         Bantu jawab pertanyaan atau koreksi bacaan santri dan peroleh manfaatnya!
        </Text>
        <Text style={styles.textSubTitle}>
          ayo bantu mereka koreksi bacaannya
        </Text>
        <Swiper
          containerStyle={styles.contentSwiper}
          activeDotStyle={styles.activeDot}
          loop={false}>
          {state.map((classes, classgroupIndex) => {
            return (
              <View key={classgroupIndex} style={styles.containerRowView}>
                {ClassesGrouping[0].map((item, classIndex) => {
                  return (
                    <Card
                      key={classIndex}
                      containerStyle={styles.containerCard}>
                      <ImageBackground
                        source={Images.InstructorCardTahsin}
                        style={styles.cardBackground}
                        imageStyle={styles.illustration}>
                        <Text style={styles.textClassName}>Kelas {item.Class_Initial}</Text>
                        <Text
                          style={
                            styles.textTaskCount
                          }>{`${100} Tugas Tersedia`}</Text>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('InstructorJob', item)
                          }>
                          <Text style={styles.textBtnViewTask}>Lihat Tugas</Text>
                        </TouchableOpacity>
                      </ImageBackground>
                    </Card>
                  )
                })}
              </View>
            )
          })}
        </Swiper>
      </View>
    )
  }

  return (
    <View style={styles.container}>
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
