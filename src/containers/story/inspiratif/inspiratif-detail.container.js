import React, {useState, useEffect} from 'react'
import moment from 'moment'
import { Text } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, Image, ToastAndroid } from 'react-native'

import {ModalNoConnection} from '../../../components'
import { Images } from '../../../assets'
import styles from './inspiratif-detail.style'
import NetInfo from '@react-native-community/netinfo'
import NoConnectionScreen from './noConnectionScreen'

const InspiratifStoryDetail = () => {
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const route = useRoute()
  const [connectStatus, setconnectStatus] = useState(false)
    
  const navigation = useNavigation()

  const { storyIndex } = route.params ?? {}

  useEffect(() => {
    NetInfo.fetch().then(res=>{
      setconnectStatus(res.isConnected)
  })
  }, [])

  const state = [
    {
      Images : Images.ImgHeadingBacaanInspiratif,
      Title: 'Jadi Sukses, Belajar dari Sandiaga Uno',
      Created_Date: new Date(),
      Writer: 'Rico Febriansyah',
      Source: 'Sandiaga Salahuddin Uno./instagram.com/@sandiuno',
      description : 'Pastinya sobat belajariah tahu dengan tokoh inspiratif kita satu ini yaitu Sandiaga Uno|Ia merupakan seorang pengusaha sukses dan juga politikus serta calon Presiden Republik Indonesia. yang bergandengan dengan Prabowo Subianto di pemilihan presiden tahun 2019 lalu|<Img>hello.png|Namun dibalik kesuksesannya itu, beliau yang akrab disapa Bang Sandi ini telah mengalami pahit getirnya kehidupan sebelum menjadi pengusaha hebat|Di salah satu media, bang Sandi menceritakan pengalamannya yang pernah di PHK oleh perusahaan tempatnya bekerja|Akan tetapi, ada hal menarik yang banyak orang lain tidak ketahui dari beliau yaitu bahwa bang Sandi merupakan sosok yang rutin mengerjakan sholat Dhuha dalam hidupnya bahkan sebisa mungkin beliau tidak meninggalkan sholat Dhuha dalam satu hari loh|Luar biasa bukan, bang Sandi pernah bercerita bahwa salah satu kunci suksesnya di dunia bisnis adalah sholat Dhuha|Tentunya bang Sandi memotivas kita ya sobat Belajariah untuk sholat Dhuha disamping kesibukan kita bekerja untuk mencari rezeki',
    },
    {
      Images : Images.ImgHeadingBacaanInspiratif,
      Title: 'Jadi Sukses, Belajar dari Sandiaga Duo',
      Created_Date: new Date(),
      Writer: 'Rico Febriansyah',
      Source: 'Sandiaga Salahuddin Uno./instagram.com/@sandiuno',
      description : 'Pastinya sobat belajariah tahu dengan tokoh inspiratif kita satu ini yaitu Sandiaga Uno|Ia merupakan seorang pengusaha sukses dan juga politikus serta calon Presiden Republik Indonesia. yang bergandengan dengan Prabowo Subianto di pemilihan presiden tahun 2019 lalu|<Img>hello.png|Namun dibalik kesuksesannya itu, beliau yang akrab disapa Bang Sandi ini telah mengalami pahit getirnya kehidupan sebelum menjadi pengusaha hebat|Di salah satu media, bang Sandi menceritakan pengalamannya yang pernah di PHK oleh perusahaan tempatnya bekerja|Akan tetapi, ada hal menarik yang banyak orang lain tidak ketahui dari beliau yaitu bahwa bang Sandi merupakan sosok yang rutin mengerjakan sholat Dhuha dalam hidupnya bahkan sebisa mungkin beliau tidak meninggalkan sholat Dhuha dalam satu hari loh|Luar biasa bukan, bang Sandi pernah bercerita bahwa salah satu kunci suksesnya di dunia bisnis adalah sholat Dhuha|Tentunya bang Sandi memotivas kita ya sobat Belajariah untuk sholat Dhuha disamping kesibukan kita bekerja untuk mencari rezeki',
    },
    {
      Images : Images.ImgHeadingBacaanInspiratif,
      Title: 'Jadi Sukses, Belajar dari Sandiaga Trowa',
      Created_Date: new Date(),
      Writer: 'Rico Febriansyah',
      Source: 'Sandiaga Salahuddin Uno./instagram.com/@sandiuno',
      description : 'Pastinya sobat belajariah tahu dengan tokoh inspiratif kita satu ini yaitu Sandiaga Uno|Ia merupakan seorang pengusaha sukses dan juga politikus serta calon Presiden Republik Indonesia. yang bergandengan dengan Prabowo Subianto di pemilihan presiden tahun 2019 lalu|<Img>hello.png|Namun dibalik kesuksesannya itu, beliau yang akrab disapa Bang Sandi ini telah mengalami pahit getirnya kehidupan sebelum menjadi pengusaha hebat|Di salah satu media, bang Sandi menceritakan pengalamannya yang pernah di PHK oleh perusahaan tempatnya bekerja|Akan tetapi, ada hal menarik yang banyak orang lain tidak ketahui dari beliau yaitu bahwa bang Sandi merupakan sosok yang rutin mengerjakan sholat Dhuha dalam hidupnya bahkan sebisa mungkin beliau tidak meninggalkan sholat Dhuha dalam satu hari loh|Luar biasa bukan, bang Sandi pernah bercerita bahwa salah satu kunci suksesnya di dunia bisnis adalah sholat Dhuha|Tentunya bang Sandi memotivas kita ya sobat Belajariah untuk sholat Dhuha disamping kesibukan kita bekerja untuk mencari rezeki',
    },
    {
      Images : Images.ImgHeadingBacaanInspiratif,
      Title: 'Jadi Sukses, Belajar dari Sandiaga Quatre',
      Created_Date: new Date(),
      Writer: 'Rico Febriansyah',
      Source: 'Sandiaga Salahuddin Uno./instagram.com/@sandiuno',
      description : 'Pastinya sobat belajariah tahu dengan tokoh inspiratif kita satu ini yaitu Sandiaga Uno|Ia merupakan seorang pengusaha sukses dan juga politikus serta calon Presiden Republik Indonesia. yang bergandengan dengan Prabowo Subianto di pemilihan presiden tahun 2019 lalu|<Img>hello.png|Namun dibalik kesuksesannya itu, beliau yang akrab disapa Bang Sandi ini telah mengalami pahit getirnya kehidupan sebelum menjadi pengusaha hebat|Di salah satu media, bang Sandi menceritakan pengalamannya yang pernah di PHK oleh perusahaan tempatnya bekerja|Akan tetapi, ada hal menarik yang banyak orang lain tidak ketahui dari beliau yaitu bahwa bang Sandi merupakan sosok yang rutin mengerjakan sholat Dhuha dalam hidupnya bahkan sebisa mungkin beliau tidak meninggalkan sholat Dhuha dalam satu hari loh|Luar biasa bukan, bang Sandi pernah bercerita bahwa salah satu kunci suksesnya di dunia bisnis adalah sholat Dhuha|Tentunya bang Sandi memotivas kita ya sobat Belajariah untuk sholat Dhuha disamping kesibukan kita bekerja untuk mencari rezeki',
    }
  ]

  const copyToClipboard = async (account) => {
    await Clipboard.setString(account)
    await ToastAndroid.show('Sumber disalin', ToastAndroid.SHORT)
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Bacaan Inspiratif</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Inspiratif = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return stringSplit.map((val, index) => {
        if (val.includes('<Img>')) {
          return (
            <Image key={index}
              style={styles.ImgBody}
              source={Images.SandiagaUnoImg}/>
          )
        } else {
          return (
            <Text key={index} style={styles.Txtbacaan}>
              {val}.
            </Text>
          )}})
    }
    return(
      <View style={styles.containerInspiratif}>
        <View style={styles.containerTopTitle}>
          <View>
            <Text style={styles.TitleBacaan}>{state[storyIndex].Title}</Text>
            <Text style={styles.TxtTime}>
              {moment(state[storyIndex].Created_Date).format('dddd, DD MMMM YYYY')}
            </Text>
          </View>
        </View>
        <View>
          <Image source={Images.ImgHeadingBacaanInspiratif} style={styles.ImgHeading}/>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.TouchText}
            onPress={() => copyToClipboard(state[storyIndex].Source)}>
            <Text style={styles.TxtSourceImg}>Source : {state[storyIndex].Source}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerWriter}>
          <Text style={styles.TxtWriter}>Oleh:</Text>
          <Text style={styles.TxtWriter}>{state[storyIndex].Writer}</Text>
        </View>
        <View style={styles.ViewParagraf}>
          {handleSplitString(state[storyIndex].description)}
        </View>
      </View>
    )
  }
  return (
      <View style={styles.containerMain}>
        <ModalNoConnection 
          isVisible={!connectStatus}
          backdropPress={togglemodalNoConnection}/> 
        <Header />
        <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
          <Inspiratif />
        </ScrollView>
      </View>
  )
}

export default InspiratifStoryDetail