import React from 'react'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity } from 'react-native'

import { Images } from '../../assets'
import State from '../../json/setting.json'

import styles from './setting.style'

const PrivacyPolice = () => {
  const navigation = useNavigation()

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Kebijakan Privasi</Text>
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
        } else if (val.includes('h2:')) {
          return (<Text key={index} style={styles.textSubtitleBold}>{val.substring(3)}.</Text>)
        } else {
          return (<Text key={index} style={styles.textParagraph}>{val}.</Text>)
        }
      })
    }
    return(
      <View style={styles.containerSetting}>
        <View style={styles.containerTopTitle}>
          <Text style={styles.title}>Kebijakan Privasi</Text>
        </View>
        <View style={styles.viewParagraph}>
          {handleSplitString(State[2].value)}
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

export default PrivacyPolice
