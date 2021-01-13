import React from 'react'
import { List } from 'react-native-paper'
import { Card } from 'react-native-elements'
import { ScrollView, View, Text } from 'react-native'

import styles from './class-about.style'
import { Images } from '../../../assets'

const ClassAbout = () => {
  const dataClass = {
    description:
      'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit.',
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

  const Desc = () => {
    return (
      <Card containerStyle={styles.containerDesc}>
        <Card.Title style={styles.textBold}>Deskripsi</Card.Title>
        <Text style={styles.textRegular}>{dataClass.description} </Text>
      </Card>
    )
  }

  const Topics = () => {
    return (
      <Card containerStyle={styles.containerTopics}>
        <View style={styles.containerTopicsTitle}>
          <Card.Title style={styles.textBold}>Topik yang dibahas</Card.Title>
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

        <View style={styles.flexBenefits}>
          <Images.AccessVideo.default width={36} height={36} style={styles.iconVideo} />
          <Text style={styles.textBold}>
            Akses Video <Text style={styles.textBoldRed}>(Unlimited)</Text>
          </Text>
        </View>

        <View style={styles.flexBenefits}>
          <Images.Document.default width={28} height={28} style={styles.iconDocs} />
          <Text style={styles.textBold}>Ringkasan Materi</Text>
        </View>

        <View style={styles.flexBenefits}>
          <Images.Consultation.default width={26} height={26} style={styles.iconConsultation} />
          <Text style={styles.textBold}>
            {`Akses Konsultasi ${dataClass.options.consult}x `}
            <Text style={styles.textBoldRed}>(Limited)</Text>
          </Text>
        </View>

        <View style={styles.flexBenefits}>
          <Images.Webinar.default width={28} height={28} style={styles.iconWebinar} />
          <Text style={styles.textBold}>
            {`Webinar ${dataClass.options.webinar}x `}
            <Text style={styles.textBoldRed}>(Limited)</Text>
          </Text>
        </View>

        <View style={styles.flexBenefits}>
          <Images.AccessGroupChat.default width={24} height={24} style={styles.iconChatGroup} />
          <Text style={styles.textBold}>Akses grup chat khusus</Text>
        </View>

        <View style={styles.flexBenefits}>
          <Images.Certificate.default width={28} height={28} style={styles.iconCertificate} />
          <Text style={styles.textBold}>Sertifikat dan hasil evaluasi belajar</Text>
        </View>
      </Card>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Desc />
      <Topics />
      <Benefits />
    </ScrollView>
  )
}

export default ClassAbout
