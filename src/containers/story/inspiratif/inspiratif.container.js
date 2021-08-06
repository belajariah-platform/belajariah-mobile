import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'

import {
  STORY_LIST_FAIL,
  STORY_LIST_SUCC,
  STORY_LOAD_SCROLL,
} from '../../../action'
import {
  Searchbox,
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { StoryAPI } from '../../../api'
import { Response } from '../../../utils'
import { Images, Color } from '../../../assets'

import styles from './inspiratif.style'

const InspiratifStory = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const { loadingScroll } = useSelector((state) => state.StoryReducer)

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState, setDataState] = useState({ skip: 0, take: 6, filter: [], filterString: '[]' })

  const retryConnection = () => {
    fetchDataStory(dataState)
    setconnectStatus(!connectStatus)
  }

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
      setLoading(true)
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
      dispatch({ type: STORY_LIST_SUCC })
    } catch (err) {
      setLoading(false)
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
        <LoadingView
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
    // console.log(item.Header_Image)
    return(
      <TouchableOpacity
        key={index}
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('InspiratifStoryDetail',
          { params : item, storyIndex : index })}>
        <Card
          containerStyle={styles.cardStyle}>
          <View style={styles.viewStyle}>
            <Image source={item.Header_Image == '' ?
              Images.ImgDefault4  : { uri : item.Header_Image }}
            style={styles.imageStyle}/>
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

  const NoStory = () => {
    return(
      <View style={styles.containerNoStory}>
        <Images.IconStoryEmpty.default width={200} height={200}/>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
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
        <LoadingView /> :
        state == 0 ? <NoStory/>:
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