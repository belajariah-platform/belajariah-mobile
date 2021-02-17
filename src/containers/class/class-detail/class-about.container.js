import React from 'react'
import { List } from 'react-native-paper'
import { Card } from 'react-native-elements'
import { ScrollView, View, Text } from 'react-native'

import styles from './class-about.style'
import { Images } from '../../../assets'
import { TextView } from '../../../components'
import { TimeConvertToHour } from '../../../utils'

const ClassAbout = () => {
  const state = {
    rating : 4.7,
    duration : 144,
    total_topic : 48,
    total_user : 1500,
    title : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
    description : 'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit, lorem veriseyum not beijer sit amet tesset lorem ipsum berusit|lorem veriseyum not beijer sit amet tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit',
    topics: [
      {
        title: 'Huruf Hijaiyah, Makhraj dan shifathul huruf',
        subtopic: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 10 },
          { subtitle: 'Dasar Makhraj', video_duration : 8 },
          { subtitle : 'Shifathul Huruf', video_duration : 12 }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://www.belajariah.com/document-assets/file.pdf'
      },
      {
        title: 'Harokat',
        subtopic: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 4 },
          { subtitle: 'Dasar Makhraj', video_duration : 5 },
          { subtitle : 'Shifathul Huruf', video_duration : 2 }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf'
      },
      {
        title: 'Tajwid',
        subtopic: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 7 },
          { subtitle: 'Dasar Makhraj', video_duration : 10 },
          { subtitle : 'Shifathul Huruf', video_duration : 3 }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf'
      },
      {
        title: 'Mad',
        subtopic: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 7 },
          { subtitle: 'Dasar Makhraj', video_duration : 7 },
          { subtitle : 'Shifathul Huruf', video_duration : 7 }],
      },
    ],
  }

  const BenefitCategory = [
    { value : 'Akses video|video' },
    { value : 'Ringkasan materi|document' },
    { value : 'Akses konsultasi|consultation' },
    { value : 'Webinar|webinar' },
    { value : 'Akses grub chat khusus|group' },
    { value : 'Sertifikat dan hasil evaluasi belajar|sertificate' },
  ]

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
    return (
      <Card containerStyle={styles.containerDesc}>
        <Text style={styles.textBold}>Deskripsi</Text>
        <TextView
          component={
            <Text style={styles.textRegularParaf}>
              {handleSplitString(state.description)}
            </Text>
          }
        />
      </Card>
    )
  }

  const Topics = () => {
    return (
      <Card containerStyle={styles.containerTopics}>
        <View style={styles.containerTopicsTitle}>
          <Text style={styles.textBold}>Video yang dibahas</Text>
          <View style={styles.flexTopicInfo}>
            <Text style={styles.textRegular}>
              <Text style={styles.textRegular}>{state.total_topic}</Text> Video
            </Text>
            <Text style={styles.textRegular}>
              {TimeConvertToHour(state.duration)}
            </Text>
          </View>
        </View>
        <View style={styles.containerList}>
          {state.topics.map((topic, index) => {
            return (
              <List.Accordion key={index} title={topic.title} titleStyle={styles.textRegular} style={styles.containerAccordion}>
                {topic.subtopic.map((item, index) => {
                  const no = index + 1
                  const name = no + '. ' + item.subtitle
                  return <List.Item key={index} title={name} titleStyle={styles.textRegular} style={styles.containerItem} />
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
          const stringSplit = val.value.split('|')[1]
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
                  {val.value.split('|')[0]}
                  {/* <Text style={styles.textBoldRed}>
                    {stringSplit == 'video' ? ' (Unlimited)' :
                      stringSplit == 'consultation' || stringSplit == 'webinar' ? ' (Limited)' :''}
                  </Text> */}
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
      <Desc />
      <Topics />
      <Benefits />
    </ScrollView>
  )
}

export default ClassAbout
