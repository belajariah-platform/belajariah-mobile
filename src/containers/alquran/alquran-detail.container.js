import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import {
  QURAN_DETAIL_REQ,
  QURAN_DETAIL_SUCC,
  QURAN_DETAIL_FAIL,
} from '../../action'
import { QuranAPI } from '../../api'
import { Response } from '../../utils'

import { Text } from '@ui-kitten/components'
import { styles } from './alquran-detail.style'
import { FontType, Images } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { ArabicNumbers } from 'react-native-arabic-numbers'

const AlquranDetail = (props) => {
  const navigation = useNavigation()
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

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBack.default />
        </TouchableOpacity>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>{params.surat_name}</Text>
          <View style={styles.containerTitleMetadata}>
            <Text style={styles.textRegularWhite}>
              {params.surat_terjemahan}
            </Text>
            <Text style={styles.textRegularWhite}> - </Text>
            <Text style={styles.textRegularWhite}>
              {params.count_ayat} Ayat
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    //!loadingDetail && (
    <ImageBackground
      source={Images.AlquranDetailBG}
      style={styles.containerBackground}
      resizeMode='stretch'>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerScrollview}
        contentContainerStyle={styles.contentContainerScrollview}>
        {dataDetail.map((item, index) => {
          const regex = /<[^>]*>?/gm
          const ayat_translate = item.translation_aya_text.replace(regex, '')
          const ayat_number = ArabicNumbers(item.aya_number)

          return (
            <View key={index}>
              <View style={styles.containerAyat}>
                <Text style={styles.textArabNumber}>({ayat_number})</Text>
                <Text style={styles.textArab}>{item.aya_text}</Text>
              </View>
              <Text
                style={
                  styles.textRegularBlack
                }>{`${item.aya_number}. ${ayat_translate}`}</Text>
            </View>
          )
        })}
      </ScrollView>
    </ImageBackground>
    //)
  )
}

AlquranDetail.propTypes = {
  route: PropTypes.object,
}

export default AlquranDetail
