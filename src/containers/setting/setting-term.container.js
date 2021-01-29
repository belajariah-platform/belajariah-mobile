import React from 'react'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity } from 'react-native'

import { Images } from '../../assets'
import State from '../../json/setting.json'

import styles from './setting.style'

const TermCondition = () => {
  const navigation = useNavigation()

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Syarat & Ketentuan</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Content = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return stringSplit.map((val, index) => {
        if (val.includes('h1:')) {
          return (<Text key={index} style={styles.textTitleBold}>{val.substring(3)}.</Text>)
        } else if (val.includes('num:')) {
          return (<Text key={index} style={styles.textSubpoint}>{val.substring(4)}.</Text>)
        } else if (val.includes('subnums:')) {
          return (<Text key={index} style={{ ...styles.textSubpoint, marginLeft:28 }}>{val.substring(8)}.</Text>)
        } else if (val.includes('subnum2:')) {
          return (<Text key={index} style={{ ...styles.textSubpoint, marginLeft:40 }}>{val.substring(8)}.</Text>)
        } else if (val.includes('subnum3:')) {
          return (<Text key={index} style={{ ...styles.textSubpoint, marginLeft:56 }}>{val.substring(8)}.</Text>)
        } else {
          return (<Text key={index} style={styles.textParagraph}>{val}.</Text>)
        }
      })
    }
    return(
      <View style={styles.containerSetting}>
        <View style={styles.containerTopTitle}>
          <Text style={styles.title}>Syarat & Ketentuan</Text>
        </View>
        <View style={styles.viewParagraph}>
          {handleSplitString(State[3].value)}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView
        style={styles.containerScrollView}
        showsVerticalScrollIndicator={false}>
        <Content />
      </ScrollView>
    </View>
  )
}

export default TermCondition
