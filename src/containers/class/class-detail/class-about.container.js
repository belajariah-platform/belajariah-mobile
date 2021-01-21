import React from 'react'
import { List } from 'react-native-paper'
import { Card } from 'react-native-elements'
import { ScrollView, View, Text } from 'react-native'

import styles from './class-about.style'
import { Images } from '../../../assets'
import { TextView } from '../../../components'

const ClassAbout = () => {
  const dataClass = {
    description:
      'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit, lorem veriseyum not beijer sit amet tesset lorem ipsum berusit|lorem veriseyum not beijer sit amet tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit',
    topicCount: 5,
    materialCount: 12,
    duration: '02:12:00',
    topics: [
      {
        title: 'Huruf Hijaiyah, Makhraj dan shifathul huruf',
        materials: ['Dasar Hijaiyah', 'Dasar Makhraj', 'Shifathul Huruf'],
      },
      {
        title: 'Harokat',
        materials: ['Dasar Harokat', 'Harokat Lanjutan'],
      },
      {
        title: 'Tajwid',
        materials: ['Qolqolah', 'Ikhfa', 'Iqlab', 'Idgham'],
      },
      {
        title: 'Mad',
        materials: ['Dasar-dasar Mad'],
      },
      {
        title: 'Tahsinul Qur\'an',
        materials: ['Dasar-dasar Tahsinul Qur\'an'],
      },
    ],
    options: {
      price: 'Rp199.000',
      consult: 8,
      webinar: 1,
    },
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
              {handleSplitString(dataClass.description)}
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
          <Text style={styles.textBold}>Topik yang dibahas</Text>
          <View style={styles.flexTopicInfo}>
            <Text style={styles.textRegular}>
              <Text style={styles.textRegular}>{dataClass.topicCount}</Text> Topik,
              <Text style={styles.textRegular}>{dataClass.materialCount}</Text> Materi
            </Text>
            <Text style={styles.textRegular}>
              <Text style={styles.textRegular}>{dataClass.duration.substring(0, 2)}</Text> Jam,
              <Text style={styles.textRegular}>{dataClass.duration.substring(3, 5)}</Text> Menit
            </Text>
          </View>
        </View>
        <View style={styles.containerList}>
          {dataClass.topics.map((topic, index) => {
            return (
              <List.Accordion key={index} title={topic.title} titleStyle={styles.textRegular} style={styles.containerAccordion}>
                {topic.materials.map((material, index) => {
                  const no = index + 1
                  const name = no + '. ' + material
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
                  <Text style={styles.textBoldRed}>
                    {stringSplit == 'video' ? ' (Unlimited)' :
                      stringSplit == 'consultation' || stringSplit == 'webinar' ? ' (Limited)' :''}
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
      <Desc />
      <Topics />
      <Benefits />
    </ScrollView>
  )
}

export default ClassAbout
