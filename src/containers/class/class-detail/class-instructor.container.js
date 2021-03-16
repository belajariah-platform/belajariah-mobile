import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'react-native-paper'
import { Card } from 'react-native-elements'
import { ScrollView, View, Text } from 'react-native'

import { Images } from '../../../assets'
import styles from './class-instructor.style'

const ClassInstructor = ({ params }) => {
  const handleSplitString = (value) => {
    const stringSplit = value.split('|')
    return (
      <>
        {stringSplit.map((val, index) => {
          return <Text key={index}>{val}.{'\n'}{'\n'}</Text>
        })}
      </>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card containerStyle={styles.card}>
        <View style={styles.higherCard}>
          <Text style={styles.textTitle}>Tentang Instruktur</Text>
          <View style={styles.flexRow}>
            <Avatar.Image
              source={  params.Instructor_Image ?
                { uri : params.Instructor_Image } : Images.ImageProfileDefault}
              style={styles.avatar}
            />
            <View style={styles.flexColumn}>
              <Text style={styles.textName}>{params.Instructor_Name}</Text>
              <Text style={styles.textProfile}>{params.Instructor_Biografi}</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerCard}>
          <Text style={styles.textDesc}>{handleSplitString(params.Instructor_Description)}</Text>
        </View>
      </Card>
    </ScrollView>
  )
}

ClassInstructor.propTypes = {
  params : PropTypes.object,
}

export default ClassInstructor
