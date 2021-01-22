import React from 'react'
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Images } from '../../../assets'
import { Card } from 'react-native-elements'
import { Text } from '@ui-kitten/components'
import { styles } from './instructor-dashboard.style'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

const InstructorDashboard = () => {
  const navigation = useNavigation()

  const Classes = [
    {
      id: 0,
      name: 'Kelas Tahsin',
      taskCount: '1200',
      illustration: Images.InstructorCardTahsin,
    },
    {
      id: 1,
      name: 'Kelas Tilawah',
      taskCount: '1200',
      illustration: Images.InstructorCardTilawah,
    },
    {
      id: 2,
      name: 'Kelas Dummy 1',
      taskCount: '7',
      illustration: Images.InstructorCardTahsin,
    },
    {
      id: 3,
      name: 'Kelas Dummy 2',
      taskCount: '84',
      illustration: Images.InstructorCardTilawah,
    },
    {
      id: 4,
      name: 'Kelas Dummy 3',
      taskCount: '196',
      illustration: Images.InstructorCardTahsin,
    },
  ]

  //Grouping array menjadi 2 item kelas di setiap index array
  const ClassesGrouping = Classes.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    )
  }, [])

  const Footer = () => {
    return (
      <View style={styles.containerFooter}>
        <Text style={styles.textTitle}>
          Bantu Koreksi bacaan user dan peroleh benefitnya!
        </Text>
        <Text style={styles.textSubTitle}>
          ayo bantu mereka koreksi bacaannya
        </Text>
        <Swiper
          containerStyle={styles.contentSwiper}
          activeDotStyle={styles.activeDot}
          loop={false}>
          {ClassesGrouping.map((classes, classgroupIndex) => {
            return (
              <View key={classgroupIndex} style={styles.containerRowView}>
                {classes.map((item, classIndex) => {
                  return (
                    <Card
                      key={classIndex}
                      containerStyle={styles.containerCard}>
                      <ImageBackground
                        source={item.illustration}
                        style={styles.cardBackground}
                        imageStyle={styles.illustration}>
                        <Text style={styles.textClassName}>{item.name}</Text>
                        <Text
                          style={
                            styles.textTaskCount
                          }>{`${item.taskCount} Task available`}</Text>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('InstructorJob', {
                              idClass: item.id,
                            })
                          }>
                          <Text style={styles.textBtnViewTask}>View Task</Text>
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
