import React from 'react'
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Text } from '@ui-kitten/components'
import { Images } from '../../../assets'
import { styles } from './instructor-dashboard.style'
import { Card } from 'react-native-elements'
import { Alert } from 'react-native'
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
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.InstructorDashboardBackground}
        style={styles.containerBackground}>
        <Images.LogoBelajariahInstructor.default style={styles.logo} />
        <View style={styles.containerFooter}>
          <Text style={styles.textTitle}>
            Bantu Koreksi bacaan user dan peroleh beneiftnya!
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
      </ImageBackground>
    </View>
  )
}

export default InstructorDashboard
