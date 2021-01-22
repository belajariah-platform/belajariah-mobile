import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FontType } from '../../assets'

import {
  QURAN_DETAIL_REQ,
  QURAN_DETAIL_SUCC,
  QURAN_DETAIL_FAIL,
} from '../../action'
import { QuranAPI } from '../../api'
import { Response } from '../../utils'

const AlquranDetail = (props) => {
  const { params } = props.route
  const dispatch = useDispatch()
  const { dataDetail, loadingDetail } = useSelector(
    (state) => state.QuranDetailReducer,
  )

  const fetchDataQuran = async (params) => {
    try {
      const dataObj = {
        id: params.id,
        count: params.count_ayat,
      }
      const response = await QuranAPI.GetDetailQuran(dataObj)
      if (response.status === Response.SUCCESS) {
        await dispatch({
          type: QURAN_DETAIL_SUCC,
          payload: response.data.data,
        })
      }
    } catch (err) {
      dispatch({
        type: QURAN_DETAIL_FAIL,
      })
      return err
    }
  }

  useEffect(() => {
    dispatch({ type: QURAN_DETAIL_REQ })
    fetchDataQuran(params)
  }, [])

  return (
    !loadingDetail && (
      <View>
        {dataDetail.map((item, index) => {
          return (
            <View key={index}>
              <Text
                style={{
                  fontFamily: FontType.arabBold,
                  fontSize: 24,
                  color: 'purple',
                  marginRight: 12,
                }}>
                {item.aya_text}
              </Text>
            </View>
          )
        })}
      </View>
    )
  )
}

AlquranDetail.propTypes = {
  route: PropTypes.object,
}

export default AlquranDetail
