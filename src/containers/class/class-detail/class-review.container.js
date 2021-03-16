import moment from 'moment'
import PropTypes from 'prop-types'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'

import { Images } from '../../../assets'
import { RatingAPI } from '../../../api'
import { Response } from '../../../utils'

import styles from './class-review.style'

const ClassReview = ({ params }) => {
  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 15, filter: [], filterString: '[]' })

  const fetchDataRating = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "class_code", "value": "${code}"}]`
      const response = await RatingAPI.GetAllRating(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
      }
    } catch (err) {
      return err
    }
  }

  const handleLoadMore = () => {
    setDataState({
      ...dataState,
      take : dataState.take + 10
    })
  }

  useEffect(() => {
    fetchDataRating(dataState, params.Code)
  }, [dataState])

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
          <Text style={styles.textBold}>Ulasan</Text>
          <View style={styles.flexRow}>
            <Text style={styles.rating}>{params.Class_Rating}</Text>
            <Text style={styles.textBold}>{`Dari ${params.Total_Review} ulasan`}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          {state.map((item, index) => {
            return (
              <View key={index} style={styles.cardReview}>
                <Text style={styles.textBoldCustom}>
                  {item.User_Name} | {moment(item.Created_Date).fromNow()}
                </Text>
                <Text style={styles.textRegular}>{item.Comment}</Text>
                <View>{handleRating(item.Rating)}</View>
              </View>
            )
          })}
          <View>
            <TouchableOpacity
              onPress={handleLoadMore}
              activeOpacity={0.6}>
              {dataState.take <= count &&(
                <Text style={styles.textView}>Lihat lainnya</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </ScrollView>
  )
}

ClassReview.propTypes = {
  params : PropTypes.object,
}

export default ClassReview
