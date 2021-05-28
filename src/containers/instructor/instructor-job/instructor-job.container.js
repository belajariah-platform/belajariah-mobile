import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'
import {
  ModalFilterUstadz,
} from '../../../components'
import {
  CONSUL_MENTOR_LIST_FAIL,
  CONSUL_MENTOR_LIST_SUCC,
  CONSUL_MENTOR_LOAD_SCROLL,
} from '../../../action'
import {
  Loader,
  ImageView,
  ChatMentor,
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { Response } from '../../../utils'
import { Images, Color } from '../../../assets'
import { ConsultationAPI, EnumAPI } from '../../../api'

import { styles } from './instructor-job.style'

const InstructorJob = ({ route }) => {
  const item = route.params
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { userInfo } = useSelector((state) => state.UserReducer)
  const { loadingScroll } = useSelector((state) => state.ConsultationReducer)

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingBtn, setLoadingBtn] = useState(false)
  // const [refreshing, setRefreshing] = useState(false)
  const [stateCategory, setStateCategory] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const [connectStatus, setconnectStatus] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [dataStateCategory] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]', sort : 'DESC', search : '' })
  const [audios, setAudios] = useState([{ 'id': '1.1', 'title': 'Audio...', 'type': 'default', 'url': 'https://belajariah-dev.sgp1.digitaloceanspaces.com/Voice-Note/Perekaman%20baru%201.m4a' }])

  const toggleModal = () => setModalVisible(!modalVisible)
  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataConsultation(dataState)
    fetchDataClassCategory(dataStateCategory)
    setconnectStatus(!connectStatus)
  }

  const fetchDataConsultation = async ({ skip, take, filterString, sort, search }) => {
    try {
      let audio = []
      filterString='[{"type": "text", "field" : "status", "value": "Approved"}]'
      const response = await ConsultationAPI.GetAllConsultation(skip, take, filterString, sort, search)
      if (response.status === Response.SUCCESS) {
        response.data.data.map((a) => {
          if (a.Recording_Path !== '') {
            audio.push({
              id: a.ID.toString(),
              url: a.Recording_Path,
              type: 'default',
              title: 'Audio...',
            })
          }
        })
        setAudios(audio)
        setState(response.data.data)
        setCount(response.data.count)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
      dispatch({ type: CONSUL_MENTOR_LIST_SUCC })
    } catch (err) {
      setLoading(false)
      dispatch({ type: CONSUL_MENTOR_LIST_FAIL })
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

  const handleSubmit = async  (item) => {
    const values = {
      ID : item.ID,
      Action : 'Approved',
      Is_Action_Taken : true,
      Taken_Code : userInfo.ID,
      User_Code : item.User_Code,
      Class_Code : item.Class_Code,
      Status_Code : item.Status_Code,
      Expired_Date : item.Expired_Date,
    }

    try {
      setLoadingBtn(true)
      const response = await ConsultationAPI.UpdateConsultation(values)
      if (!response.data.result) {
        ToastAndroid.show(`Errror ${response.data.error}`,
          ToastAndroid.SHORT)
        setLoadingBtn(false)
      } else {
        navigation.navigate('Tugas', { fetch : true })
        fetchDataConsultation(dataState)
        setLoadingBtn(false)
      }
    } catch (error) {
      setLoadingBtn(false)
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return error
    }
  }

  const onDataStateChange = (sort, filter) => {
    setDataState({
      ...dataState,
      sort : sort,
      filterString : filter
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchDataConsultation(dataState)
  }, [dataState])

  useEffect(() => {
    fetchDataClassCategory(dataStateCategory)
  }, [])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     fetchDataConsultation(dataState)
  //   }, 5000)
  //   return () => clearInterval(intervalId)
  // }, [dataState])

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: CONSUL_MENTOR_LOAD_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingScroll ? (
      <View style={styles.indicatorContainer}>
        <LoadingView
          color={Color.purpleButton}
          size={30} />
      </View>
    ) : null
  }

  // const onRefreshing = () => {
  //   setRefreshing(true)
  //   fetchDataConsultation(dataState)
  //   setRefreshing(false)
  // }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBackBlack.default/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Kelas {item.Class_Initial}</Text>
        {/* <TouchableOpacity onPress = {toggleModal}>
          <Images.IconFilterBlack.default width={18}/>
        </TouchableOpacity> */}
      </View>
    )
  }

  // const CardList = (items, index) => {
  //   return (
  //     <Card
  //       key={index}
  //       containerStyle={styles.containerCard}>
  //       <View>
  //         <View style={styles.flexRow}>
  //           <Avatar
  //             source={items.User_Image == '' ?
  //               Images.ImageProfileDefault  : { uri :items.User_Image }}
  //             containerStyle={styles.avatarUser}
  //           />
  //           <View style={styles.containerNameSound}>
  //             <Text style={styles.textUsername}>{items.User_Name}</Text>
  //             <Text style={styles.textTime}>
  //               {moment(items.Modified_Date).fromNow()}
  //             </Text>
  //           </View>
  //         </View>
  //         <View style={styles.flexRow}>
  //           <TouchableOpacity>
  //             <Images.IconPlayVoiceBlack.default
  //               width={24}
  //               height={24}
  //               style={styles.iconPlayVoice}
  //             />
  //           </TouchableOpacity>
  //           <Text style={styles.textSound}>{items.Recording_Name}</Text>
  //           <Text style={styles.textSoundDuration}>
  //             {items.Recording_Duration}
  //           </Text>
  //         </View>
  //         <List.Accordion
  //           title='Deskripsi konsultasi'
  //           titleStyle={styles.textAccordionTitle}
  //           style={styles.containerAccordion}>
  //           <Text style={styles.textDesc}>{items.Description}</Text>
  //         </List.Accordion>

  //         <ButtonGradient
  //           title='Ambil'
  //           styles={styles.btnApply}
  //           onPress={() => handleSubmit(items)}
  //           disabled={loadingBtn ? true : false}
  //         />
  //       </View>
  //     </Card>
  //   )
  // }

  const EmptyList = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoTaskAvailable.default style={{ marginTop: '4%' }} />
        <Text style={styles.textNoTaskTitle}>Maaf!</Text>
        <Text style={styles.textNoTask}>Saat ini belum ada <Text style={styles.textHeader}>task</Text> yang tersediah yah</Text>
      </View>
    )
  }

  return (
    <>
      <Loader loading={loadingBtn}/>
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
      <ImageView
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />
      <View style={styles.container}>
        <Header />
        {loading && !loadingScroll ?
          <LoadingView/> :
          state.length == 0 ?
            <EmptyList/> :
            <ChatMentor
              state={state}
              audios={audios}
              onLoadMore={onLoadMore}
              renderFooter={renderFooter}
              confirm={(item) => handleSubmit(item)}
            />
            // <FlatList
            //   data={state}
            //   onEndReachedThreshold={0.1}
            //   style={styles.containerScrollView}
            //   ListFooterComponent={renderFooter}
            //   onEndReached={(e) => onLoadMore(e)}
            //   showsVerticalScrollIndicator ={false}
            //   contentContainerStyle={{ paddingBottom: 25 }}
            //   keyExtractor={(item, index) =>  index.toString()}
            //   renderItem={({ item, index }) => CardList(item, index)}
            //   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
            // />
        }
      </View>
    </>
  )
}

InstructorJob.propTypes = {
  route: PropTypes.object,
}

export default InstructorJob
