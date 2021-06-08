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
  ModalNoConnection,
} from '../../../components'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { LearningAPI } from '../../../api'
import { TimeConvertToHour } from '../../../utils'

import styles from './class-about.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

const ClassAbout = ({ params, packages }) => {
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
    { Value : 'Akses video|video' },
    { Value : 'Ringkasan materi|document' },
    { Value : 'Akses konsultasi|consultation' },
    { Value : 'Webinar|webinar' },
    { Value : 'Akses grub chat khusus|group' },
    { Value : 'Sertifikat dan hasil evaluasi belajar|sertificate' },
  ]

  const Title = () => {
    const handleRating = (num) => {
      let rating = []
      for (let index = 1; index <= 5; index++) {
        num - index >= 0
          ? rating.push(<Images.Star.default />)
          : num - index < 0 && num - index > -1
            ? rating.push(<Images.StarHalf.default />)
            : rating.push(<Images.StarEmpty.default />)
      }

      return (
        <View style={styles.flexRating}>
          {rating.map((val, index) => {
            return <View key={index}>{val}</View>
          })}
        </View>
      )
    }

    return (
      <Card containerStyle={styles.containerDesc}>
        <Text style={styles.textBold}>Judul</Text>
        <Text style={styles.textRegularParaf}>
          {params.Class_Name}
        </Text>
        <View style={styles.flexRating}>
          <View>{params.Class_Rating != 0 && handleRating(params.Class_Rating)}</View>
          <Text style={styles.textRating}>{params.Class_Rating != 0 && params.Class_Rating.toFixed(1)}</Text>
        </View>
      </Card>
    )
  }

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
        <Text style={styles.textBold}>Deskripsi</Text>
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
          <Text style={styles.textBold}>Topik yang dibahas</Text>
          <View style={styles.flexTopicInfo}>
            <Text style={styles.textRegular}>
              <Text style={styles.textRegular}>{params.Total_Video}</Text> Video
            </Text>
            <Text style={styles.textRegular}>
              {TimeConvertToHour(params.Total_Video_Duration)}
            </Text>
          </View>
        </View>
        <View style={styles.containerList}>
          {state.map((topic, index) => {
            return (
              <List.Accordion key={index} title={topic.Title} titleStyle={styles.textRegular} style={styles.containerAccordion}>
                {topic.SubTitles.map((item, subindex) => {
                  const no = subindex + 1
                  const name = no + '. ' + item.Sub_Title
                  // return (
                  //   index == 0 ? (
                  //     <TouchableOpacity
                  //       key={subindex}
                  //       onPress={() =>
                  //         navigation.navigate('ClassTrial', { item : item, classes : params, packages : packages })
                  //       }>
                  //       <List.Item title={name} titleStyle={styles.textRegular} style={styles.containerItem} />
                  //     </TouchableOpacity>
                  //   ) : (
                  //     <List.Item key={subindex} title={name} titleStyle={styles.textRegular} style={styles.containerItem} />
                  //   )
                  // )
                  return <List.Item key={subindex} title={name} titleStyle={styles.textRegular} style={styles.containerItem} />
                })}
              </List.Accordion>
            )
          })}
        </View>
      </Card>
    )
  }

  const Benefits = () => {
    return (
      <Card containerStyle={styles.containerBenefits}>
        <Text style={styles.textBold}>Benefit yang diperoleh</Text>
        <Text style={styles.textRegular}>Benefit apa saja yang akan diperoleh?</Text>
        {BenefitCategory.map((val, index) => {
          let icon, size
          const stringSplit = val.Value.split('|')[1]
          stringSplit == 'video' ? (icon = Images.AccessVideo, size = 30) :
            stringSplit == 'document' ? (icon = Images.Document, size = 23) :
              stringSplit == 'webinar' ? (icon = Images.Webinar, size = 23) :
                stringSplit == 'group' ? (icon = Images.AccessGroupChat, size = 21) :
                  stringSplit == 'consultation' ? (icon = Images.Consultation, size = 21) :
                    (icon = Images.Certificate, size = 23)
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
      <Title />
      <Desc />
      <Topics />
      <Benefits />
    </ScrollView>
  )
}

ClassAbout.propTypes = {
  params : PropTypes.object,
  packages : PropTypes.object,
}

export default ClassAbout
