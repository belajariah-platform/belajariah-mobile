import React from 'react'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity } from 'react-native'

import { Images } from '../../assets'
import State from '../../json/setting.json'

import styles from './setting.style'

const ContactUs = () => {
  const navigation = useNavigation()

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Hubungi Kami</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Content = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return stringSplit.map((val, index) => {
        if (val.includes('phone:')) {
          return (
            <View style={styles.containerContactUs}>
              <Images.SMFacebook.default width={30} height={30}/>
              <Text key={index} style={styles.textParagraphContact}>
                {val.substring(6)}
              </Text>
            </View>
          )
        } else if (val.includes('ig:')) {
          return (
            <View style={styles.containerContactUs}>
              <Images.SMInstagram.default width={30} height={30}/>
              <Text key={index} style={styles.textParagraphContact}>
                {val.substring(3)}
              </Text>
            </View>
          )
        } else if (val.includes('fb:')) {
          return (
            <View style={styles.containerContactUs}>
              <Images.SMFacebook.default width={30} height={30}/>
              <Text key={index} style={styles.textParagraphContact}>
                {val.substring(3)}
              </Text>
            </View>
          )
        } else if (val.includes('web:')) {
          return (
            <View style={styles.containerContactUs}>
              <Images.SMWebsite.default width={30} height={30}/>
              <Text key={index} style={styles.textParagraphContact}>
                {val.substring(4)}
              </Text>
            </View>
          )
        } else if (val.includes('yt:')) {
          return (
            <View style={styles.containerContactUs}>
              <Images.SMYoutube.default width={30} height={30}/>
              <Text key={index} style={styles.textParagraphContact}>
                {val.substring(3)}
              </Text>
            </View>
          )
        } else {
          return (<Text key={index}
            style={{ ...styles.textSubtitleBold, marginBottom : 20 }}>
            {val}</Text>)
        }
      })
    }
    return(
      <View style={styles.containerSetting}>
        {/* <View style={styles.containerTopTitle}>
          <Text style={styles.title}>Hubungi Kami</Text>
        </View> */}
        <View style={styles.viewParagraph}>
          {handleSplitString(State[1].value)}
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

export default ContactUs
