import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import {
  QURAN_LIST_REQ,
  QURAN_LIST_SUCC,
  QURAN_LIST_FAIL,
} from '../../action'

import {
  LoadingView,
  ModalNoConnection,
} from '../../components'

import { QuranAPI } from '../../api'
import { Response } from '../../utils'

import { Images } from '../../assets'
import { styles } from './alquran.style'
// import { TabBar, TabView, SceneMap } from 'react-native-tab-view'

const Alquran = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [connectStatus, setconnectStatus] = useState(false)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const { data, loading } = useSelector((state) => state.QuranReducer)

  const retryConnection = () => {
    fetchDataQuran()
    setconnectStatus(!connectStatus)
  }

  const fetchDataQuran = async () => {
    try {
      dispatch({ type: QURAN_LIST_REQ })
      const response = await QuranAPI.GetAllQuran()
      if (response.status === Response.SUCCESS) {
        await dispatch({
          type: QURAN_LIST_SUCC,
          payload: response.data.data,
        })
      } else {
        dispatch({ type: QURAN_LIST_FAIL })
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      dispatch({ type: QURAN_LIST_FAIL })
      return err
    }
  }

  useEffect(() => {
    fetchDataQuran()
  }, [])

  // const ListJuz = () => (
  //   <View>
  //     <View style={styles.containerSearch}>
  //       <SearchJuz />
  //     </View>
  //     <Text>Hello Juz</Text>
  //   </View>
  // )

  // const SearchSurah = () => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.8}
  //       style={styles.navigateSearch}
  //       onPress={() => Alert.alert('Search Surah')}>
  //       <Searchbox
  //         disabled
  //         style={styles.searchBox}
  //         accessoryRight={() => (
  //           <Images.Search.default style={styles.iconSearch} />
  //         )}
  //       />
  //     </TouchableOpacity>
  //   )
  // }

  // const SearchJuz = () => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.8}
  //       style={styles.navigateSearch}
  //       onPress={() => Alert.alert('Search Juz')}>
  //       <Searchbox
  //         disabled
  //         style={styles.searchBox}
  //         accessoryRight={() => (
  //           <Images.Search.default style={styles.iconSearch} />
  //         )}
  //       />
  //     </TouchableOpacity>
  //   )
  // }

  //deklarasi renderScene harus dibawah component yang mau di pakai
  // const renderScene = SceneMap({
  //   1: ListSurah,
  //   2: ListJuz,
  // })

  // const renderTabBar = (props) => (
  //   <TabBar
  //     {...props}
  //     indicatorStyle={styles.tabBarIndicatorStyle}
  //     style={styles.tabBarStyle}
  //     activeColor='purple'
  //     inactiveColor='grey'
  //     labelStyle={styles.tabBarLabelStyle}
  //   />
  // )

  // const TabViewSuratJuz = () => {
  //   return (
  //     <TabView
  //       renderTabBar={renderTabBar}
  //       navigationState={{ index, routes }}
  //       renderScene={renderScene}
  //       onIndexChange={setIndex}
  //       initialLayout={initialLayout}
  //       sceneContainerStyle={styles.sceneContainerStyle}
  //     />
  //   )
  // }

  const ListSurah = () => {
    return (
      <View>
        <FlatList
          data={data}
          style={{ width:'100%' }}
          showsVerticalScrollIndicator ={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          keyExtractor={(item, index) =>  index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => props.navigation.navigate('AlquranDetail', item)}>
                <View style={styles.containerListSurah}>
                  <View style={styles.containerIdSurah}>
                    <Images.IconSurah.default style={styles.iconSurah} />
                    <Text style={styles.textIdSurah}>{item.number}</Text>
                  </View>
                  <View style={styles.containerSurahName}>
                    <Text style={styles.textSurahName}>{item.name.transliteration.id}</Text>
                    <View style={styles.containerTranslateAyatCount}>
                      <Text style={styles.textRegular}>
                        {item.name.translation.id}
                      </Text>
                      <Text style={styles.textRegular}>({item.numberOfVerses})</Text>
                    </View>
                  </View>
                  <Text style={styles.textSurahNameArab}>{item.name.short}</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    )
  }


  return loading ? (
    <View style={styles.indicatorContainer}>
      <LoadingView color='white'/>
    </View>
  ) : (
    <ImageBackground
      source={Images.AlQuranBG}
      style={styles.containerBackground}
      resizeMode='stretch'>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBack.default />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{'Al-Qur\'an'}</Text>
      </View>
      <View style={styles.containerTemp}>
        <ListSurah />
      </View>
    </ImageBackground>
  )
}

Alquran.propTypes = {
  navigation: PropTypes.object,
}

export default Alquran
