import React from 'react'
import { Avatar } from 'react-native-paper'
import { Card } from 'react-native-elements'
import { ScrollView, View, Text } from 'react-native'

import { Images } from '../../../assets'
import styles from './class-instructor.style'

const ClassInstructor = () => {
  const Ustadz = {
    name: 'Ustadz Maulana Achmad Al-Hafidz, S. Ag',
    profile: 'Hafidz Al-Qur\'an dan Guru Tahsin & Tahfidz Ponpes Al-Qur\'an Al-Amien Perenduan, Rumah Tahfidz Palembang, SIT Al-Azhar Cairo Palembang.',
    desc:
      'Seorang Hafidz Al-Qur\'an 30 Juz sejak Usia 17 Tahun yang berpengalaman menjadi guru Tahfidz dan Tahsin selama 9 tahun di Pondok pesantren Tahfidz Al-Qur\'an Al-Amien Prenduan, Rumah Tahfidz Palembang Sekolah IT AL-Azhar Cairo Palembang. Sangat mengerti bagaimana cara mengajarkan membaca Al-Quean dari dasar maupun lanjutan kepada anak-anak, remaja, dewasa, bahkan tua.',
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card containerStyle={styles.card}>
        <View style={styles.higherCard}>
          <Card.Title style={styles.textTitle}>Tentang Instruktur</Card.Title>
          <View style={styles.flexRow}>
            <Avatar.Image source={Images.ImageUstadzMaulana} style={styles.avatar} />
            <View style={styles.flexColumn}>
              <Text style={styles.textName}>{Ustadz.name}</Text>
              <Text style={styles.textProfile}>{Ustadz.profile}</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerCard}>
          <Text style={styles.textDesc}>{Ustadz.desc}</Text>
        </View>
      </Card>
    </ScrollView>
  )
}

export default ClassInstructor
