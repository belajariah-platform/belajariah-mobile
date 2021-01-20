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

const InstructorDashboard = () => {
  const navigation = useNavigation()

  const Classes = [
    {
      name: 'Kelas Tahsin',
      taskCount: '1200',
      illustration: Images.InstructorCardTahsin,
    },
    {
      name: 'Kelas Tilawah',
      taskCount: '1200',
      illustration: Images.InstructorCardTilawah,
    },
  ]

  const Footer = () => {
    return (
      <View style={styles.containerFooter}>
        <Text style={styles.textTitle}>
          Bantu Koreksi bacaan user dan peroleh benefitnya!
        </Text>
        <Text style={styles.textSubTitle}>
          ayo bantu mereka koreksi bacaannya
        </Text>
        <ScrollView
          horizontal={true}
          style={styles.containerScrollView}
          contentContainerStyle={styles.contentScrollView}
          showsHorizontalScrollIndicator={false}>
          {Classes.map((item, index) => {
            return (
              <Card key={index} containerStyle={styles.containerCard}>
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
                      navigation.navigate('InstructorJob', { idClass: index })
                    }>
                    <Text style={styles.textBtnViewTask}>View Task</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </Card>
            )
          })}
        </ScrollView>
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
