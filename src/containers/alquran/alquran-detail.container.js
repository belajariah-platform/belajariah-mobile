import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import {
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
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
import { Images } from '../../assets'
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
        id: params.number,
        count: params.numberOfVerses,
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
          <Text style={styles.textTitle}>{params.name.transliteration.id}</Text>
          <View style={styles.containerTitleMetadata}>
            <Text style={styles.textRegularWhite}>{params.revelation.id}</Text>
            <Text style={styles.textRegularWhite}> - </Text>
            <Text style={styles.textRegularWhite}>
              {params.name.translation.id}
            </Text>
            <Text style={styles.textRegularWhite}> - </Text>
            <Text style={styles.textRegularWhite}>
              {params.numberOfVerses} Ayat
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return   (
    <ImageBackground
      source={Images.AlquranDetailBG}
      style={styles.containerBackground}
      resizeMode='stretch'>
      <Header />
      {loadingDetail ? (
        <ActivityIndicator
          color='purple'
          size={30} />
      ) : (
        <FlatList
          data={dataDetail.verses}
          style={styles.containerScrollview}
          showsVerticalScrollIndicator ={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          keyExtractor={(item, index) =>  index.toString()}
          renderItem={({ item, index }) => {
            const ayat_translate = item.translation.id
            const ayat_number = ArabicNumbers(item.number.inSurah)
            return (
              <View key={index} style={{ paddingBottom: 4, borderBottomWidth: 0.5 }}>
                <View style={styles.containerAyat}>
                  <Text style={styles.textArabNumber}>({ayat_number})</Text>
                  <Text style={styles.textArab}>{item.text.arab}</Text>
                </View>
                <Text
                  style={
                    styles.textRegularBlack
                  }>{`${item.number.inSurah}. ${ayat_translate}`}</Text>
              </View>
            )
          }}/>
      )}
    </ImageBackground>
  )
}

AlquranDetail.propTypes = {
  route: PropTypes.object,
}

export default AlquranDetail
