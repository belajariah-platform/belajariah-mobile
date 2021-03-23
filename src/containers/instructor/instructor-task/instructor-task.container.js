import moment from 'moment'
import { Text } from '@ui-kitten/components'
import { Avatar } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

import {
  View,
  FlatList,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import {
  LoadingView,
  ModalFilterUstadz,
  ModalNoConnection,
} from '../../../components'

import { Images } from '../../../assets'
import { styles } from './instructor-task.style'
import { ConsultationAPI, EnumAPI } from '../../../api'
import { Response, GenerateFilter } from '../../../utils'

const InstructorTask = () => {
  const navigation = useNavigation()
  const initialLayout = { width: Dimensions.get('window').width }

  const [routes] = useState([
    { key: 1, title : 'Recent Task' },
    { key: 2, title : 'Completed Task' }
  ])
  const [index, setIndex] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [loadingWaiting, setLoadingWaiting] = useState(true)
  const [loadingCompleted, setLoadingCompleted] = useState(true)

  const [stateWaiting, setStateWaiting] = useState([])
  const [stateCategory, setStateCategory] = useState([])
  const [stateCompleted, setStateCompleted] = useState([])

  const [dataStateCategory] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })
  const [dataStateWaiting, setDataStateWaiting] = useState({ skip: 0, take: 5, filter: [], filterString: '[]', sort : 'DESC', search : '' })
  const [dataStateCompleted, setDataStateCompleted] = useState({ skip: 0, take: 5, filter: [], filterString: '[]', sort : 'DESC', search : '' })

  const toggleModal = () => setModalVisible(!modalVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const retryConnection = () => {
    setconnectStatus(!connectStatus)
    fetchDataClassCategory(dataStateCategory)
    fetchDataConsultationWaiting(dataStateWaiting)
    fetchDataConsultationCompleted(dataStateCompleted)
  }

  const fetchDataConsultationWaiting = async ({ skip, take, filter, filterString, sort, search  }) => {
    try {
      setLoadingWaiting(true)
      filterString= GenerateFilter(filter, { type : 'text', field : 'status', value : 'Waiting for Response' })
      const response = await ConsultationAPI.GetAllConsultationLimit(skip, take, filterString, sort, search )
      if (response.status === Response.SUCCESS) {
        setStateWaiting(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoadingWaiting(false)
    } catch (err) {
      setLoadingWaiting(false)
      return err
    }
  }

  const fetchDataConsultationCompleted = async ({ skip, take, filter, filterString, sort, search }) => {
    try {
      setLoadingCompleted(true)
      filterString= GenerateFilter(filter, { type : 'text', field : 'status', value : 'Completed' })
      const response = await ConsultationAPI.GetAllConsultationLimit(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        setStateCompleted(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoadingCompleted(false)
    } catch (err) {
      setLoadingCompleted(false)
      return err
    }
  }

  const fetchDataClassCategory = async ({ skip, take, filterString }) => {
    try {
      filterString='[{"type": "text", "field" : "type", "value": "class_type"}]'
      const response = await EnumAPI.GetAllEnum(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateCategory(response.data.data)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      return err
    }
  }

  const onDataStateChange = (sort, filters) => {
    setDataStateWaiting({
      ...dataStateWaiting,
      sort : sort,
      filter :filters,
    })
    setDataStateCompleted({
      ...dataStateCompleted,
      sort : sort,
      filter :filters,
    })
  }

  const onRefreshing = () => {
    setRefreshing(true)
    fetchDataConsultationWaiting(dataStateWaiting)
    fetchDataConsultationCompleted(dataStateCompleted)
    setRefreshing(false)
  }

  useEffect(() => {
    fetchDataConsultationWaiting(dataStateWaiting)
    fetchDataConsultationCompleted(dataStateCompleted)
  }, [dataStateWaiting, dataStateCompleted])

  useEffect(() => {
    fetchDataClassCategory(dataStateCategory)
  }, [])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBackBlack.default  />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Tugas Saya</Text>
        <TouchableOpacity onPress = {toggleModal}>
          <Images.IconFilterBlack.default width={20} height={20} />
        </TouchableOpacity>
      </View>
    )
  }

  const RecentJobs = () => {
    return (
      <FlatList
        numColumns={1}
        data={stateWaiting}
        style={{ marginTop: 8 }}
        showsVerticalScrollIndicator ={false}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => Content(item, index)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
      />
    )
  }

  const NoRecentJobs = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoRecentTask.default
          style={{ marginTop: '25%' }}/>
        <Text style={styles.textNoTaskTitle}>Uupss</Text>
        <Text style={styles.textNoTask}>
          Belum ada
          <Text style={styles.textHeader}> task </Text>
            yang kamu ambil nih
        </Text>
      </View>
    )
  }

  const CompletedJobs = () => {
    return (
      <FlatList
        numColumns={1}
        data={stateCompleted}
        style={{ marginTop: 8 }}
        showsVerticalScrollIndicator ={false}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => Content(item, index)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
      />
    )
  }

  const NoCompletedJobs = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoCompletedTask.default
          style={{ marginTop: '25%' }} />
        <Text style={styles.textNoTaskTitle}>Uupss</Text>
        <Text style={styles.textNoTask}>
          Belum ada
          <Text style={styles.textHeader}> task </Text>
           yang kamu selesaikan nih
        </Text>
      </View>
    )
  }

  const Content = (item, index) => {
    let isComplete = false
    if(item.Status === 'Completed') isComplete = true

    return(
      <TouchableOpacity
        onPress={() => navigation.navigate('InstructorTaskDetail', item)}>
        <View
          key={index}
          style={styles.containerTaskList}>
          <Avatar
            source={item.avatar}
            containerStyle={isComplete ?
              [styles.avatarUser, { opacity: 0.5 }] :
              styles.avatarUser}
          />
          <View>
            <Text style={isComplete ?
              [styles.textUsername, { opacity: 0.5 }] :
              styles.textUsername}>
              {item.User_Name}
            </Text>
            <Text style={isComplete ?
              [styles.textMoment, { opacity: 0.5 }] :
              styles.textMoment}>
              {moment(item.Modified_Date).fromNow()}
            </Text>
          </View>
          {item.Status === 'Completed' && (
            <Images.IconCompletePurple.default
              width={28}
              height={28}
              style={styles.iconComplete}
            />
          )}
        </View>
      </TouchableOpacity>
    )
  }

  const renderScene = SceneMap({
    1:loadingWaiting ? LoadingView :
      stateWaiting.length == 0 ? NoRecentJobs : RecentJobs,
    2:loadingCompleted ? LoadingView :
      stateCompleted.length == 0 ?  NoCompletedJobs : CompletedJobs,
  })

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor='purple'
      inactiveColor='grey'
      style={styles.tabBarStyle}
      labelStyle={styles.tabBarLabelStyle}
      indicatorStyle={styles.tabBarIndicatorStyle}
    />
  )

  const TabViewTask = () => {
    return (
      <TabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={initialLayout}
        navigationState={{ index, routes }}
        sceneContainerStyle={styles.sceneContainerStyle}
      />
    )
  }

  return (
    <>
      <ModalFilterUstadz
        state={stateCategory}
        submit={onDataStateChange}
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <View style={styles.containerMain}>
        <Header />
        {/* <TabViewTask /> */}
      </View>
    </>
  )
}


export default InstructorTask
