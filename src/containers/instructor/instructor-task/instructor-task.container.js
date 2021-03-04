import moment from 'moment'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
import { ModalFilterUstadz } from '../../../components'
import { styles } from './instructor-task.style'

const InstructorTask = () => {
  const navigation = useNavigation()
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 1, title : 'Recent Task' },
    { key: 2, title : 'Completed Task' }
  ])
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)
  const initialLayout = { width: Dimensions.get('window').width }

  const onGoingTask = [
    {
      idTask: 4,
      status: 'ongoing',
      name: 'Rico',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
    },
    {
      idTask: 6,
      status: 'ongoing',
      name: 'Rika',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
    },
    {
      idTask: 8,
      status: 'ongoing',
      name: 'Yudha',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
    },
    {
      idTask: 9,
      status: 'ongoing',
      name: 'Yudhi',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
    },
  ]

  const completedTask = [
    {
      idTask: 1,
      status: 'completed',
      name: 'Saiki',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
    },
    {
      idTask: 2,
      status: 'completed',
      name: 'Saiya',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
    },
    {
      idTask: 3,
      status: 'completed',
      name: 'Hiyahiya',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
    },
  ]

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
        data={onGoingTask}
        style={{ marginTop: 8 }}
        showsVerticalScrollIndicator ={false}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => Content(item, index)}
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
          <Text style={styles.textHeader}>task</Text>
            yang kamu ambil nih
        </Text>
      </View>
    )
  }

  const CompletedJobs = () => {
    return (
      <FlatList
        data={completedTask}
        numColumns={1}
        style={{ marginTop: 8 }}
        showsVerticalScrollIndicator ={false}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => Content(item, index)}
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
          <Text style={styles.textHeader}>task</Text>
           yang kamu selesaikan nih
        </Text>
      </View>
    )
  }

  const Content = (item, index) => {
    const dateTime = item.date
    const momentTime = moment(dateTime, 'DD/MM/YYYY hh:mm').fromNow()
    let isComplete = false
    if(item.status === 'completed') isComplete = true

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
              {item.name}
            </Text>
            <Text style={isComplete ?
              [styles.textMoment, { opacity: 0.5 }] :
              styles.textMoment}>
              {`${momentTime} (${dateTime})`}
            </Text>
          </View>
          {item.status === 'completed' && (
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

  //deklarasi renderScene harus dibawah component yang mau di pakai
  const renderScene = SceneMap({
    1: onGoingTask == 0 ? NoRecentJobs : RecentJobs,
    2: completedTask == 0 ? NoCompletedJobs : CompletedJobs,
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
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
      />
      <View style={styles.containerMain}>
        <Header />
        <TabViewTask />
      </View>
    </>
  )
}


export default InstructorTask
