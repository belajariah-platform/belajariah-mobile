import * as Yup from 'yup'
import moment from 'moment'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../../assets'
import { RatingAPI } from '../../../../api'
import { Response } from '../../../../utils'
import { 
  Alerts, 
  SVGIcon, 
  Buttons,
  ModalNoConnection, 
  ModalRatingDirect, 
} from '../../../../components'

import styles from './class-review.style'

const ClassReviewQuran = ({ params, userClass }) => {
  const maxRating = [1, 2, 3, 4, 5]
  const [rate, setRate] = useState(0)
  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)
  const [valueRating, setValuetRating] = useState(0)
  const [connectStatus, setconnectStatus] = useState(false)
  const [modalVisibleEnd, setModalVisibleEnd] = useState(false)
  const { userInfo } = useSelector((state) => state.UserReducer)
  const toggleModalEnd = () => setModalVisibleEnd(!modalVisibleEnd)
  const [dataState, setDataState] = useState({ skip: 0, take: 15, filter: [], filterString: '[]' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    setconnectStatus(!connectStatus)
    fetchDataRating(dataState, params.code)
  }

  const FormRating = useFormik({
    initialValues: { 
        rating: 0,
        comment: '',
        user_code: userInfo.Code,
        class_code: params.code,
    },
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const data = {
          rating : values.rating,
          comment : values.comment,
          class_code : values.class_code,
          user_code : values.user_code,
          modified_date: moment(new Date()).format('YYYY-MM-DD[T]HH:mm:[00].[000Z]')
        }

        const response = await RatingAPI.InsertRatingQuran(data)
        if (response && response.data.message.result) {
            Alerts(true, 'Terima kasih telah memberikan rating dan ulasan')
            setModalVisibleEnd(false)
        } else {
            setLoading(false)
        }
      }
      catch (err) {
          setLoading(false)
          return err
      }
    },
  })

  const fetchDataRating = async (state, code) => {
    try {
      let rates = 0
      let { skip, take, filterString } = state
      filterString= [{"type": "text", "field" : "class_code", "value": `${code}`}]
      const response = await RatingAPI.GetAllRatingQuran(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.message.data)
        setCount(response.data.message.count)
        if (response.data.message.count > 0) {
          response.data.message.data.map((e) => rates += e.rating)
          setRate(rates)
        }
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
    modalVisibleEnd ?
    setValuetRating(0) : null
    fetchDataRating(dataState, params.code)
  }, [dataState, modalVisibleEnd])

  const Ratingbar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              onPress={() => FormRating.setFieldValue('rating', item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= FormRating.values['rating']
                    ? Images.BintangFull
                    : Images.BintangBorder
                }
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

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
        <Text style={styles.textRating}>{num.toFixed(1)}</Text>
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

  const SUMRating = rate > 0 ? rate/state.length : 0

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
        TitleRating='Rating dan ulasan'
        DescRating='untuk kelas ini'
        HeaderBanner={<SVGIcon.IconCheckListModal ColorBg={params.color_path} />}
        backdropPress={() => toggleModalEnd()}
        backButtonPress={() => toggleModalEnd()}
        styleBackground={params.color_path}
        RatingBar={<Ratingbar />}
        renderItem={
          <>
          <View style={styles.containerTextArea}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              style={styles.textArea}
              placeholder='Catatan untuk kelas ini'
              onChangeText={(e) => FormRating.setFieldValue('comment', e)}
            />
          </View>
          <View style={styles.containerRating}>
              <Buttons title='Kirim'
                style={{...styles.StyleBtn2, backgroundColor:  params.color_path}} 
                textStyle={styles.StyleTxt2}
                onPress={FormRating.handleSubmit}/>
            </View>
          </>
        }
      />

    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card containerStyle={styles.card}>
        <View style={styles.header}>
          <Text style={styles.textBold}>Ulasan</Text>
          <View style={styles.flexRow}>
            <Text style={{...styles.rating, backgroundColor :  params.color_path}}>{SUMRating.toFixed(1)}</Text>
            <Text style={styles.textBold}>{`Dari ${state.length} ulasan`}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          {state.map((item, index) => {
            return (
              <View key={index} style={styles.cardReview}>
                <Text style={styles.textBoldCustom}>
                  {item.user_name} | {moment(item.created_date).fromNow()}
                </Text>
                <Text style={styles.textRegular}>{item.comment}</Text>
                <View>{handleRating(item.rating)}</View>
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
      {userClass && userClass.length > 0 ? <ViewFormRating /> : null}
    </ScrollView>
    </>
  )
}

ClassReviewQuran.propTypes = {
  params : PropTypes.object,
}

export default ClassReviewQuran