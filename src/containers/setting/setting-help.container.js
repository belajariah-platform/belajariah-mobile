import React from 'react'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native'

import { Images } from '../../assets'
import styles from './setting.style'

const Helps = () => {
  const navigation = useNavigation()

  const state = {
    Header_Title : 'Bantuan',
    Images : Images.ImgHeadingBacaanInspiratif,
    Title: 'Bantuan',
    description : 'Pastinya sobat belajariah tahu dengan tokoh inspiratif kita satu ini yaitu Sandiaga Uno|Ia merupakan seorang pengusaha sukses dan juga politikus serta calon Presiden Republik Indonesia. yang bergandengan dengan Prabowo Subianto di pemilihan presiden tahun 2019 lalu|Namun dibalik kesuksesannya itu, beliau yang akrab disapa Bang Sandi ini telah mengalami pahit getirnya kehidupan sebelum menjadi pengusaha hebat|Di salah satu media, bang Sandi menceritakan pengalamannya yang pernah di PHK oleh perusahaan tempatnya bekerja|Akan tetapi, ada hal menarik yang banyak orang lain tidak ketahui dari beliau yaitu bahwa bang Sandi merupakan sosok yang rutin mengerjakan sholat Dhuha dalam hidupnya bahkan sebisa mungkin beliau tidak meninggalkan sholat Dhuha dalam satu hari loh|Luar biasa bukan, bang Sandi pernah bercerita bahwa salah satu kunci suksesnya di dunia bisnis adalah sholat Dhuha|Tentunya bang Sandi memotivas kita ya sobat Belajariah untuk sholat Dhuha disamping kesibukan kita bekerja untuk mencari rezeki',
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>{state.Header_Title}</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Content = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return stringSplit.map((val, index) => {
        return (
          <Text key={index} style={styles.textParagraph}>
            {val}.
          </Text>
        )})
    }
    return(
      <View style={styles.containerSetting}>
        <View style={styles.containerTopTitle}>
          <Text style={styles.title}>{state.Title}</Text>
        </View>
        <View>
          <Image source={Images.ImgHeadingBacaanInspiratif} style={styles.imgHeading}/>
        </View>
        <View style={styles.viewParagraph}>
          {handleSplitString(state.description)}
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

export default Helps
