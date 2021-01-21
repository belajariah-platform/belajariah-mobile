import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  View,
  Dimensions,
  ImageStore,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { QURAN_LIST_REQ, QURAN_LIST_SUCC, QURAN_LIST_FAIL } from '../../action'
import { QuranAPI } from '../../api'
import { Response } from '../../utils'

import { Text } from '@ui-kitten/components'
import { styles } from './alquran.style'
import { Images } from '../../assets'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view'
import { Searchbox } from '../../components'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Alquran = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { data, loading } = useSelector((state) => state.QuranReducer)

  const initialLayout = { width: Dimensions.get('window').width }

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 1, title: 'Surat' },
    { key: 2, title: 'Juz' },
  ])

  const fetchDataQuran = async () => {
    try {
      const response = await QuranAPI.GetAllQuran()
      if (response.status === Response.SUCCESS) {
        await dispatch({
          type: QURAN_LIST_SUCC,
          payload: response.data.data,
        })
      }
    } catch (err) {
      dispatch({
        type: QURAN_LIST_FAIL,
      })
      return err
    }
  }

  useEffect(() => {
    dispatch({ type: QURAN_LIST_REQ })
    fetchDataQuran()
  }, [])

  const ListSurah = () => (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 64,
          bottom: 5,
        }}>
        <SearchSurah />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 68 }}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => props.navigation.navigate('AlquranDetail', item)}>
              <View style={styles.containerListSurah}>
                <View style={styles.containerIdSurah}>
                  <Images.IconSurah.default style={styles.iconSurah} />
                  <Text style={styles.textIdSurah}>{item.id}</Text>
                </View>
                <View style={styles.containerSurahName}>
                  <Text style={styles.textSurahName}>{item.surat_name}</Text>
                  <View style={styles.containerTranslateAyatCount}>
                    <Text style={styles.textRegular}>
                      {item.surat_terjemahan}
                    </Text>
                    <Text style={styles.textRegular}>({item.count_ayat})</Text>
                  </View>
                </View>
                <Text style={styles.textSurahNameArab}>{item.surat_text}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )

  const ListJuz = () => (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 64,
          bottom: 5,
        }}>
        <SearchJuz />
      </View>
      <Text>Hello Juz</Text>
    </View>
  )

  const SearchSurah = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.navigateSearch}
        onPress={() => Alert.alert('Search Surah')}>
        <Searchbox
          disabled
          style={styles.containerSearch}
          accessoryRight={() => (
            <Images.Search.default style={{ marginRight: -12 }} />
          )}
        />
      </TouchableOpacity>
    )
  }

  const SearchJuz = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.navigateSearch}
        onPress={() => Alert.alert('Search Juz')}>
        <Searchbox
          disabled
          style={styles.containerSearch}
          accessoryRight={() => (
            <Images.Search.default style={{ marginRight: -12 }} />
          )}
        />
      </TouchableOpacity>
    )
  }

  //deklarasi renderScene harus dibawah component yang mau di pakai
  const renderScene = SceneMap({
    1: ListSurah,
    2: ListJuz,
  })

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicatorStyle}
      style={styles.tabBarStyle}
      activeColor='purple'
      inactiveColor='grey'
      labelStyle={styles.tabBarLabelStyle}
    />
  )

  return (
    !loading && (
      <ImageBackground
        source={Images.AlQuranBG}
        style={styles.containerBackground}
        resizeMode='stretch'>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Al-Qur'an</Text>
        </View>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          sceneContainerStyle={styles.sceneContainerStyle}
        />
      </ImageBackground>
    )
  )
}

Alquran.propTypes = {
  navigation: PropTypes.object,
}

export default Alquran
