import moment from 'moment'
import PropTypes from 'prop-types'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../../assets'
import { RatingAPI } from '../../../../api'
import { Response } from '../../../../utils'
import { ModalNoConnection, ModalRatingDirect, SVGIcon } from '../../../../components'

import styles from './class-review.style'

const ClassReviewQuran = ({ params }) => {
  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [connectStatus, setconnectStatus] = useState(false)
  const [modalVisibleEnd, setModalVisibleEnd] = useState(false)
  const toggleModalEnd = () => setModalVisibleEnd(!modalVisibleEnd)
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

  const ViewFormRating = () => {
    return (
      <View>
        <Card containerStyle={styles.ViewCardFormRat}>
          <TouchableOpacity onPress={toggleModalEnd}>
            <Text style={{...
              styles.TxtBtnRating, color: params.color_path}}>Beri Rating Kelas</Text>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }

  return (
    <>
    <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <ModalRatingDirect
        isVisible={modalVisibleEnd}
        HeaderBanner={<SVGIcon.IconCheckListModal ColorBg={params.color_path} />}
        backdropPress={() => toggleModalEnd()}
        backButtonPress={() => toggleModalEnd()}
        styleBackground={params.color_path}
        renderItem={
          <View style={styles.containerTextArea}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              // onChangeText={(e) => setComment(e)}
              style={styles.textArea}
              placeholder='Catatan untuk Ustadz/Ustadzah'
            />
          </View>
        }
      />
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card containerStyle={styles.card}>
        <View style={styles.header}>
          <Text style={styles.textBold}>Ulasan</Text>
          <View style={styles.flexRow}>
            {/* <Text style={styles.rating}>{params.Class_Rating.toFixed(1)}</Text> */}
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
      <ViewFormRating />
    </ScrollView>
    </>
  )
}

ClassReviewQuran.propTypes = {
  params : PropTypes.object,
}

export default ClassReviewQuran