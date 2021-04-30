import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { ArabicNumbers } from 'react-native-arabic-numbers'

import {
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import {
  QURAN_DETAIL_REQ,
  QURAN_DETAIL_SUCC,
  QURAN_DETAIL_FAIL,
} from '../../action'

import {
  LoadingView,
  ModalNoConnection,
} from '../../components'

import { QuranAPI } from '../../api'
import { Images } from '../../assets'
import { Response } from '../../utils'
import { styles } from './alquran-detail.style'

const AlquranDetail = (props) => {
  const dispatch = useDispatch()
  const { params } = props.route
  const navigation = useNavigation()
  const [state, setState] = useState([])
  const [connectStatus, setconnectStatus] = useState(false)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const { loadingDetail } = useSelector((state) => state.QuranDetailReducer)

  const retryConnection = () => {
    fetchDataQuran(params)
    setconnectStatus(!connectStatus)
  }

  const fetchDataQuran = async (params) => {
    try {
      const dataObj = {
        id: params.number,
        count: params.numberOfVerses,
      }
      dispatch({ type: QURAN_DETAIL_REQ })
      const response = await QuranAPI.GetDetailQuran(dataObj)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        await dispatch({
          type: QURAN_DETAIL_SUCC,
          payload: response.data.data,
        })
      } else {
        dispatch({ type: QURAN_DETAIL_FAIL })
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      dispatch({ type: QURAN_DETAIL_FAIL })
      return err
    }
  }

  useEffect(() => {
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
      resizeMode='stretch'
    >
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Header />
      {loadingDetail ? (
        <LoadingView color='white'/>
      ) : (
        <FlatList
          data={state.verses}
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
