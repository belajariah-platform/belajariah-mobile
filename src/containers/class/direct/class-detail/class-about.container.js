import PropTypes from 'prop-types'
import { List } from 'react-native-paper'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import {
  View,
  Text,
  ScrollView,
} from 'react-native'
import {
  TextView,
  Buttons,
  ModalNoConnection,
} from '../../../../components'

import { Images } from '../../../../assets'
import { Response, DownloadFile } from '../../../../utils'
import { LearningAPI } from '../../../../api'
import { TimeConvertToHour } from '../../../../utils'

import styles from './class-about.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

const ClassAboutDirect = ({ params, packages }) => {
  const navigation = useNavigation()
  const [state, setState] = useState([])
  const [showMore, setShowMore] = useState(true)
  const [numberOfLines, setNumberOfLines] = useState(3)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState] = useState({ skip: 0, take: 1000, filter: [], filterString: '[]' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    setconnectStatus(!connectStatus)
    fetchDataLearning(dataState, params.Code)
  }

  const fetchDataLearning = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "class_code", "value": "${code}"}]`
      const response = await LearningAPI.GetAllLearning(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDataLearning(dataState, params.Code)
  }, [])

  const BenefitCategory = [
    { Value : 'Diajar oleh ustadz/ustadzah berkompeten & berpengalaman|ustadz' },
    { Value : 'Waktu belajar yang sesuai dengan waktu senggang anda|time' },
    // { Value : 'Akses konsultasi|consultation' },
    { Value : 'Belajar yang tidak terhalang jarak dan tempat karena belajar secara online melalui video call|online' },
    { Value : 'Proses belajar yang full praktek|praktek' },
    { Value : 'Bisa belajar meski memiliki jarak yang Jauh dengan ustadz/ustadzah|range' },
    { Value : 'Free buku Dirosa sebagai panduan belajar|ebook' },
    { Value : 'Metode belajar yang menyenangkan dan mudah dipahami|metode' },
    { Value : 'Terdapat Pembinaan Berkelanjutan|union' },
  ]

  // const Title = () => {
  //   const handleRating = (num) => {
  //     let rating = []
  //     for (let index = 1; index <= 5; index++) {
  //       num - index >= 0
  //         ? rating.push(<Images.Star.default />)
  //         : num - index < 0 && num - index > -1
  //           ? rating.push(<Images.StarHalf.default width={16} height={16} />)
  //           : rating.push(<Images.StarEmpty.default width={16} height={16} />)
  //     }

  //     return (
  //       <View style={styles.flexRating}>
  //         {rating.map((val, index) => {
  //           return <View key={index}>{val}</View>
  //         })}
  //       </View>
  //     )
  //   }

  //   return (
  //     <Card containerStyle={styles.containerDesc}>
  //       <Text style={styles.textBold}>Judul</Text>
  //       <Text style={styles.textRegularParaf}>
  //         {params.Class_Name}
  //       </Text>
  //       <View style={styles.flexRating}>
  //         <View>{params.Class_Rating != 0 && handleRating(params.Class_Rating)}</View>
  //         <Text style={styles.textRating}>{params.Class_Rating != 0 && params.Class_Rating.toFixed(1)}</Text>
  //       </View>
  //     </Card>
  //   )
  // }

  const Desc = () => {
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

    const handleShowMore = () => {
      setShowMore(!showMore)
      showMore ? setNumberOfLines(0) : setNumberOfLines(3)
    }

    return (
      <Card containerStyle={styles.containerDesc}>
        <Text style={styles.textBold}>Deskripsi<Text style={styles.TxtBoldDesc}> ({packages.Type})</Text></Text>
        <TextView
          showMore={showMore}
          onPress={handleShowMore}
          numberOfLines={numberOfLines}
          component={
            <Text style={styles.textRegularParaf}>
              {handleSplitString(params.Class_Description)}
            </Text>
          }
        />
      </Card>
    )
  }

  const Topics = () => {
    // const TextFree = ({ index }) => {
    //   return (
    //     index == 0 && (
    //       <Text style={styles.textFree}>Gratis</Text>
    //     )
    //   )
    // }
    // TextFree.propTypes = {
    //   index : PropTypes.number,
    // }

    return (
      <Card containerStyle={styles.containerTopics}>
        <View style={styles.containerTopicsTitle}>
          <Text style={styles.textBold}>Materi yang akan dipelajari</Text>
          <View style={styles.flexTopicInfo}>
            <Text style={styles.textRegular}>
              <Text style={styles.textRegular}>20 Materi, 20x Pertemuan Efektif</Text>
            </Text>
            {/* <Text style={styles.textRegular}>
              {TimeConvertToHour(params.Total_Video_Duration)}
            </Text> */}
          </View>
        </View>
        <View style={styles.containerList}>
          {state.map((topic, index) => {
            const no = 1
            const name = no + index + '. '
            return (
              <View key={index} style={styles.ViewItem}>
                <Text>{name}</Text>
                <Text style={styles.TxtListMateri}>{topic.Title}</Text>
              </View>
            )
          })}
        </View>
      </Card>
    )
  }

  const Benefits = () => {
    return (
      <Card containerStyle={styles.containerBenefits}>
        <Text style={styles.textBold}>Benefit yang didapat</Text>
        <Text style={styles.textRegular}>Dengan anda belajar ngaji dikelas Dirosa Belajariah maka akan mendapatkan segudang manfaat berikut ini?</Text>
        {BenefitCategory.map((val, index) => {
          let icon, size
          const stringSplit = val.Value.split('|')[1]
          stringSplit == 'ustadz' ? (icon = Images.IconUstadzGreen, size = 22) :
            stringSplit == 'time' ? (icon = Images.IconTimeGreen, size = 22) :
              stringSplit == 'online' ? (icon = Images.IconVideoGreen, size = 22) :
                stringSplit == 'praktek' ? (icon = Images.IconLearningGreen, size = 22) :
                  stringSplit == 'range' ? (icon = Images.IconRangeGreen, size = 22) :
                    stringSplit == 'ebook' ? (icon = Images.IconBookGreen, size = 22) :
                      stringSplit == 'union' ? (icon = Images.IconUnionGreen, size = 22) :
                        (icon = Images.IconMethodGreen, size = 22)
          return (
            <View key={index} >
              <View style={styles.flexBenefits}>
                <icon.default width={size} height={size}
                  style={{ ...styles.iconDocs,
                    marginLeft: stringSplit != 'video' ? 5 : 0 }}
                />
                <Text style={{ ...styles.textBoldCustom, top :4 }}>
                  {val.Value.split('|')[0]}
                  <Text style={styles.textBoldRed}>
                    {stringSplit == 'video' ? ' (Selamanya)' :
                      // stringSplit == 'consultation' || stringSplit == 'webinar' ? ' (Limited)' :
                      ''}
                  </Text>
                </Text>
              </View>
            </View>
          )
        } )}
      </Card>
    )
  }

  const EbookDownload = () => {
    return (
      <Card containerStyle={styles.ViewCardEbook}>
        <TouchableOpacity style={styles.ViewTouch}
          onPress={() =>  DownloadFile()}>
          <Images.IconDownloadDirosa.default 
            width={26}
            height={26}
          />
          <Text style={styles.TxtEbook}>Unduh Ebook Dirosa</Text>
        </TouchableOpacity>
      </Card>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      {/* <Title /> */}
      <Desc />
      <Topics />
      <Benefits />
      <EbookDownload />
    </ScrollView>
  )
}

ClassAboutDirect.propTypes = {
  params : PropTypes.object,
  packages : PropTypes.object,
}

export default ClassAboutDirect
