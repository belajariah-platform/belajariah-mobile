import moment from 'moment'
import PropTypes from 'prop-types'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../../assets'
import { RatingAPI } from '../../../../api'
import { Response } from '../../../../utils'
import { ModalNoConnection } from '../../../../components'

import styles from './class-review.style'

const ClassReviewDirect = ({ params }) => {
  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState, setDataState] = useState({ skip: 0, take: 15, filter: [], filterString: '[]' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    setconnectStatus(!connectStatus)
    fetchDataRating(dataState, params.Code)
  }

  const fetchDataRating = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "class_code", "value": "${code}"}]`
      const response = await RatingAPI.GetAllRating(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Card containerStyle={styles.card}>
        <View style={styles.header}>
          <Text style={styles.textBold}>Ulasan</Text>
          <View style={styles.flexRow}>
            <Text style={styles.rating}>{params.Class_Rating.toFixed(1)}</Text>
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

ClassReviewDirect.propTypes = {
  params : PropTypes.object,
}

export default ClassReviewDirect
