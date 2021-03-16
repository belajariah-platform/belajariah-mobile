import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import {
  STORY_LIST_REQ,
  STORY_LIST_FAIL,
  STORY_LIST_SUCC,
  STORY_LOAD_SCROLL,
} from '../../../action'

import { StoryAPI } from '../../../api'
import { Response } from '../../../utils'
import { Images, Color } from '../../../assets'
import { Searchbox, LoadingView } from '../../../components'

import styles from './inspiratif.style'

const InspiratifStory = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false)
  const { loading, loadingScroll } = useSelector((state) => state.StoryReducer)

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 6, filter: [], filterString: '[]' })

  const onDataStateChange = (event) => {
    setDataState({
      ...dataState,
      filterString : `[{"type": "text", "field" : "title", "value": "${event}"}]`
    })
  }

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataStory(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: STORY_LOAD_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 6
      })
    }
  }

  const fetchDataStory = async ({ skip, take, filterString }) => {
    try {
      dispatch({ type: STORY_LIST_REQ })
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
        dispatch({ type: STORY_LIST_SUCC })
      }
    } catch (err) {
      dispatch({ type: STORY_LIST_FAIL })
      return err
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchDataStory(dataState)
    }, 500)
    return () => clearTimeout(delay)
  }, [dataState])

  const getInitialRouteName = () => {
    const { isLogin } = useSelector(state => state.UserReducer)
    if (isLogin) {
      return 'UserMain'
    } else {
      return 'Main'
    }
  }

  const renderFooter = () => {
    return loadingScroll ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          size={30}
          color={Color.purpleMedium}/>
      </View>
    ) : null
  }

  const Header = () => {
    const initialRouteName = getInitialRouteName()
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.navigate(initialRouteName)}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Bacaan Inspiratif</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Inspiratif = (item, index) => {
    return(
      <TouchableOpacity
        key={index}
        activeOpacity={0.7}
        onPress={() =>  navigation.navigate('InspiratifStoryDetail', { params : item, storyIndex : index })}>
        <Card
          containerStyle={styles.cardStyle}>
          <View style={styles.viewStyle}>
            <Image source={Images.InstructorCardTilawah} style={styles.imageStyle}/>
            <View style={styles.containerDesc}>
              <Text style={styles.textStyle}>{item.Title}</Text>
              <Text style={styles.description}>
                {item.Content.substring(0, 70)} ...
              </Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <View style={styles.containerSearch}>
        <Searchbox
          size='medium'
          style={styles.searchbox}
          onChangeText={onDataStateChange}
          placeholder='Telusuri Bacaan Inpiratif'
          accessoryRight={() => (
            <Images.Search.default style={{ marginRight: -12 }} />
          )}
        />
      </View>
      {loading && !loadingScroll ?
        <LoadingView/> :
        <FlatList
          data={state}
          style={{ width:'100%' }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          onEndReached={(e) => onLoadMore(e)}
          showsVerticalScrollIndicator ={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyExtractor={(item, index) =>  index.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
          renderItem={({ item, index }) => Inspiratif(item, index)}/>
      }
    </View>
  )
}

export default InspiratifStory
