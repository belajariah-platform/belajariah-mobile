import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    View,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'

import {
    Buttons,
} from '../../../../components'
import { Images, Color } from '../../../../assets'
import styles from './class-review-mentor.style'

const ClassReviewMentor = (props) => {
    const navigation = useNavigation()

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

    const Header = () => {
        return (
          <View style={styles.containerHeaderProfile}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Ulasan</Text>
              </View>
            </View>
            <View style={styles.semiBoxProfile} />
          </View>
        )
    }
    return (
        <>
        <View style={styles.containerMainProfile}>
            <Header />
            <ScrollView>
                <Card containerStyle={styles.card}>
                    <View style={styles.footer}>
                        <View style={styles.cardReview}>
                            <Text style={styles.textBoldCustom}>
                            Jhon Smith | Pertemuan 1
                            </Text>
                            <Text style={styles.textRegular}>Seru banget sumpah nggak boong</Text>
                            <View>{handleRating(4)}</View>
                        </View>
                    </View>
                    <Card.Divider style={styles.divider} />
                    <View style={styles.footer}>
                        <View style={styles.cardReview}>
                            <Text style={styles.textBoldCustom}>
                            Jhon Smith | Pertemuan 2
                            </Text>
                            <Text style={styles.textRegular}>Thank you : ),. sangat mudah dipahami dan bermanfaat</Text>
                            <View>{handleRating(5)}</View>
                        </View>
                    </View>
                </Card>
            </ScrollView>
        </View> 
        </>
    )
}

ClassReviewMentor.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default ClassReviewMentor