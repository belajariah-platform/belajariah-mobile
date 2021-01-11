import React from 'react'
import { ScrollView, View } from 'react-native'

import styles from './class-review.style'
import Images from '../../../assets/images'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'

const ClassReview = () => {
  const classData = {
    rating: 4.5,
    totalReview: 1258,
    reviews: [
      {
        id: 1,
        name: 'Jhon Smith',
        time: 'Hari ini',
        review: 'Thank you!.. sangat bermanfaat',
        rating: 4.5,
      },
      {
        id: 2,
        name: 'Jhonshon',
        time: '1 Minggu yang lalu',
        review: 'Pengajarnya sangat kompeten, materi yang di sampaikan mudah dipahami',
        rating: 4.5,
      },
      {
        id: 3,
        name: 'user17',
        time: '1 Bulan yang lalu',
        review: 'Very Recomended!!',
        rating: 4.5,
      },
      {
        id: 4,
        name: 'Noname',
        time: '1 Tahun yang lalu',
        review: 'Sangat cocok untuk kalian yang sibuk bekerja, tapi ingin belajar membaca al-qur\'an... Belajariah solusi buat kamu : ) ',
        rating: 4.5,
      },
    ],
  }

  const handleRating = (num) => {
    let rating = []
    const numRound = Math.round(num)
    for (let index = 1; index <= numRound; index++) {
      num - index == 0
        ? rating.push(<Images.Star.default />)
        : num - index < 0
          ? rating.push(<Images.StarHalf.default />)
          : rating.push(<Images.Star.default />)
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card containerStyle={styles.card}>
        <View style={styles.header}>
          <Card.Title style={styles.textBold}>Ulasan User</Card.Title>
          <View style={styles.flexRow}>
            <Text style={styles.rating}>4.5</Text>
            <Text style={styles.textBold}>{`Dari ${1258} Ulasan User`}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          {classData.reviews.map((review, index) => {
            return (
              <Card key={index} containerStyle={styles.cardReview}>
                <Card.Title style={styles.textBold}>
                  {review.name} | {review.time}
                </Card.Title>
                <Text style={styles.textRegular}>{review.review}</Text>
                <View>{handleRating(review.rating)}</View>
              </Card>
            )
          })}
        </View>
      </Card>
    </ScrollView>
  )
}

export default ClassReview
