import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  LoadingView,
  VideoPlayer,
  ButtonGradient,
  ModalNoConnection,
} from '../../../components'
import {
  UserClassAPI,
} from '../../../api'

import { Images } from '../../../assets'
import { Response } from '../../../utils'

import styles from './user-consultation.style'
import { ScrollView } from 'react-native-gesture-handler'

const Consultation = () => {
  const navigation = useNavigation()

  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState] = useState({ skip: 0, take: 10, filterString: '[]',  sort : 'ASC' })

  const str = 'h1:Apa itu konsultasi bacaan?|p:Konsultasi bacaan adalah fitur yang bisa anda manfaatkan untuk bertanya seputar materi atau anda juga bisa meminta ustadz mengoreksi bacaanmu menggunakan Voice note atau pesan. Anda dapat menggunakan fitur konsultasi sesuai dengan yang telah diberikan, jika tidak digunakan dalam waktu yang telah diberikan maka akses konsultasi akan habis.|h1:Bagaimana cara menggunakan fitur voice note?|arr:img:https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/konsul1.png~Anda dapat menggunakan voice note, atau pesan atau keduanya secara bersamaan%img:https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/konsul2.png~Anda hanya bisa mengirim satu kali konsultasi sebelum ustadz membalas%img:https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/konsul3.png~Setiap anda mengirim voice note, atau pesan atau keduanya secara bersamaan terhitung satu kali%img:https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/konsul4.png~Apabila kesempatan konsultasi anda sudah habis, maka anda tidak bisa menggunakan fitur konsultasi lagi%img:https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/konsul5.png~Anda bisa menggunakan fitur konsultasi Kembali setelah memperpanjang masa langganan|h1:Video penggunaan konsultasi bacaan?|vid:https://www.belajariah.com/video_pembelajaran/TrailerMini.mp4'

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataUserClass(dataState)
    setconnectStatus(!connectStatus)
  }

  const fetchDataUserClass = async ({ skip, take, filterString, sort }) => {
    try {
      setLoading(true)
      filterString='[{"type": "text", "field" : "class_initial", "value": "Tahsin"}]'
      const response = await UserClassAPI.GetAllUserClass(skip, take, filterString, sort)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  // const fetchDataConsultation = async ({ skip, take, filterString, sort }) => {
  //   try {
  //     setLoading(true)
  //     filterString='[{"type": "bool", "field" : "is_read", "value": "false"}]'
  //     const response = await ConsultationAPI.GetAllConsultationLimit(skip, take, filterString, sort)
  //     if (response.status === Response.SUCCESS) {
  //       setStateNotif(response.data.data)
  //     } else {
  //       NetInfo.fetch().then(res => {
  //         setconnectStatus(!res.isConnected)
  //       })
  //     }
  //     setLoading(false)
  //   } catch (err) {
  //     setLoading(false)
  //     return err
  //   }
  // }

  useEffect(() => {
    fetchDataUserClass(dataState)
  }, [dataState])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Konsultasi Bacaan</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const EmptyList = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoRecentTask.default style={{ marginTop: 12 }} />
        <ButtonGradient
          title='Berlangganan Sekarang'
          styles={{ paddingHorizontal : 15 }}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    )
  }

  const Content = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return stringSplit.map((val, index) => {
        return (
          val.includes('h1:') ?
            <Text key={index} style={styles.textHeadline}>
              {'\n'}
              {val.substring(3).split(' ').slice(0, 2).join(' ')}
              <Text style={styles.textHeadlines}>
                {' '}{val.substring(3).split(' ').slice(2, 10).join(' ')}
              </Text>
              {'\n'}{'\n'}
            </Text> :
            val.includes('p:') ?
              <Text key={index} style={styles.textParagraphContact}>
                {val.substring(2)}{'\n'}
              </Text> :
              val.includes('arr:') ?
                val.substring(4).split('%').map((vals, indexs) => {
                  return (
                    <View key={indexs} style={{ flexDirection : 'row' }}>
                      <Image
                        style={styles.imageGuide}
                        source={{ uri : vals.substring(4).split('~')[0] }}
                      />
                      <View style={styles.textGuidePoint}>
                        <Text>{vals.substring(3).split('~')[1]}</Text>
                      </View>
                    </View>
                  )
                })
                :
                val.includes('vid:') ?
                  <VideoPlayer
                    key={index}
                    useSmallBar={true}
                    iconPlaySize = {36}
                    iconSkipSize = {40}
                    showBackButton={true}
                    videoStyle={styles.videoStyle}
                    videoLink={'https://www.belajariah.com/video_pembelajaran/TrailerMini.mp4'}
                    posterLink={'https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/banner-rvideos%282%29.png'}
                    style={styles.videoContainerStyle}
                    controllerStyle={styles.controllerStyle}
                    videoFullscreenStyle={styles.videoFullscreenStyle}
                    fullscreenStyle={styles.videoFullscreenContainerStyle}
                    onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
                    controllerFullscreenStyle={styles.controllerFullscreenStyle}
                  />
                  : <Text>Hello</Text>
        )})
    }

    return(
      <View style={{ marginHorizontal : 20, marginTop : -10, paddingBottom: 12 }}>
        <Text>
          {handleSplitString(str)}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      {loading ? <LoadingView/> :
        state.length == 0 ? (
          <EmptyList/>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollGuide}>
            {Content()}
          </ScrollView>
        )}
      <TouchableOpacity
        style={styles.floatingChat}
        onPress={() => navigation.navigate('ConsultationDetail', { classes : state[0] })}
      >
        <Images.FloatingBtn.default
          width={70}
          height={70}/>
      </TouchableOpacity>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
    </View>
  )
}

export default Consultation
