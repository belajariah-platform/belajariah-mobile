import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'

import {
  View,
  ToastAndroid,
  ImageBackground,
} from 'react-native'
import {
  CONSUL_ALL_REQ,
  CONSUL_ALL_SUCC,
  CONSUL_ALL_FAIL,
  CONSUL_ALL_SCROLL,
  // CONSUL_ALL_SCROLL,
} from '../../../action'

import {
  Loader,
  ChatAdmin,
  Searchbox,
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { Response } from '../../../utils'
import { Images } from '../../../assets'
import { ConsultationAPI } from '../../../api'

import { styles } from './admin-user.style'

const AdminUserAll = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const { loadingAll, loadingAllScroll } = useSelector((state) => state.ConsultationAllReducer)

  const [loadingBtn, setLoadingBtn] = useState(false)
  // const [refreshing, setRefreshing] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)

  const [count, setCount] = useState(0)
  const [states, setStates] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const [audios, setAudios] = useState([{ 'id': '1.1', 'title': 'Audio...', 'type': 'default', 'url': 'https://belajariah-dev.sgp1.digitaloceanspaces.com/Voice-Note/Perekaman%20baru%201.m4a' }])

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataConsultation(dataState)
    setconnectStatus(!connectStatus)
  }

  const fetchDataConsultation = async ({ skip, take, filterString, sort, search }) => {
    try {
      let audio = []
      dispatch({ type: CONSUL_ALL_REQ })
      filterString='[{"type": "text", "field" : "Status", "value": "Waiting for Approval"}]'
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
        setCount(response.data.count)
        setStates(response.data.data)
        dispatch({ type: CONSUL_ALL_SUCC })
      } else {
        dispatch({ type: CONSUL_ALL_FAIL })
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      dispatch({ type: CONSUL_ALL_FAIL })
      return err
    }
  }

  const onDataStateChange = (event) => {
    const delay = setTimeout(() => {
      setDataState({
        ...dataState,
        search : event,
      })
    }, 500)
    return () => clearTimeout(delay)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: CONSUL_ALL_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingAllScroll ? (
      <View style={styles.indicatorContainer}>
        <LoadingView
          color='white'
          size={30} />
      </View>
    ) : null
  }

  const handleConfirm = async (action, item) => {
    const values = {
      ID : item.ID,
      Action : action,
      User_Code : item.User_Code,
      Class_Code : item.Class_Code,
      Status_Code : item.Status_Code,
      Expired_Date : item.Expired_Date,
    }

    try {
      setLoadingBtn(true)
      const response = await ConsultationAPI.ConfirmConsultation(values)
      if (!response.data.result) {
        ToastAndroid.show(`Error ${response.data.error}`,
          ToastAndroid.SHORT)
        setLoadingBtn(false)
      } else {
        setLoadingBtn(false)
        fetchDataConsultation(dataState)
      }
    } catch (error) {
      setLoadingBtn(false)
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return error
    }
  }

  // const onRefreshing = () => {
  //   setRefreshing(true)
  //   fetchDataConsultation(dataState)
  //   // setMsgSelected(states)
  //   setOptionSelected({})
  //   setRefreshing(false)
  // }

  useEffect(() => {
    onDataStateChange(search)
    // if (search.length > 0 ) {
    //   setOptionSelected({
    //     ...optionSelected,
    //     Is_Play : false
    //   })
    // }
  }, [search])

  useEffect(() => {
    fetchDataConsultation(dataState)
  }, [dataState])

  // useEffect(() => {
  //   setOptionSelected({})
  //   setMsgSelected(state)
  // }, [])

  // const CardUser = (item, index) => {
  //   let icon
  //   optionSelected.Is_Play &&
  //   optionSelected.ID == item.ID ?
  //     (icon = Images.IconPause) :
  //     (icon =  Images.IconPlay)

  //   return(
  //     <View key={index}>
  //       <Card containerStyle={styles.cardUser}>
  //         <View style={styles.ViewInstructorInfo}>
  //           <Image
  //             style={styles.avatarUser}
  //             source={item.User_Image == '' ?
  //               Images.ImageProfileDefault  : { uri :item.User_Image }}
  //           />
  //           <TouchableOpacity
  //             activeOpacity={0.5}
  //             onPress={()=> navigation.navigate('AdminProfileAll', item)}
  //           >
  //             <Text style={styles.textUsername}>{item.User_Name}</Text>
  //             <Text style={styles.TxtTimeTitle}>
  //               {moment(item.Created_Date).format('h:mm A')} ({moment(item.Created_Date).format('L')})
  //             </Text>
  //           </TouchableOpacity>
  //         </View>
  //         {item.Recording_Path != '' ? (
  //           <View style={styles.containerButtonAction}>
  //             <View style={styles.ViewButtonAction}>
  //               <TouchableOpacity
  //                 disabled={!isTrackPlayerInit}
  //                 onPress={() => onButtonPressed(item.ID)}
  //               >
  //                 <icon.default
  //                   width={23}
  //                   height={23}
  //                 />
  //               </TouchableOpacity>
  //               <Slider
  //                 minimumValue={0}
  //                 maximumValue={1}
  //                 style={{ width: 120 }}
  //                 value={optionSelected.ID == item.ID ? sliderValue : 0}
  //                 disabled={optionSelected.ID == item.ID ? false : true}
  //                 thumbTintColor={Color.purpleButton}
  //                 maximumTrackTintColor={Color.purpleExHint}
  //                 minimumTrackTintColor={Color.purpleButton}
  //                 onSlidingStart={() => slidingStarted()}
  //                 onSlidingComplete={(e) => slidingCompleted(e, item.ID)}
  //               />
  //               <Text style={styles.textDuration}>
  //                 {/* {optionSelected.Is_Play && optionSelected.ID == item.ID ? (
  //                 `${minutes}:${seconds < 10 ?
  //                   `0${seconds}` : seconds}`
  //               ) : (
  //                 TimeConvert(item.Recording_Duration)
  //               )} */}
  //               </Text>
  //             </View>
  //             <TouchableOpacity
  //               activeOpacity={0.5}
  //               style={{ marginRight: 5 }}>
  //               <Images.IconDownloadVoice.default/>
  //             </TouchableOpacity>
  //           </View>
  //         ) : null}
  //         <List.Section>
  //           <List.Accordion
  //             title='Deskripsi konsultasi'
  //             titleStyle={styles.textRegular}
  //             style={styles.containerAccordion}>
  //             <View>
  //               <Text style={styles.description}>
  //                 {item.Description}
  //               </Text>
  //             </View>
  //           </List.Accordion>
  //         </List.Section>
  //         <View style={styles.ViewButtonActionVoice}>
  //           <ButtonGradient
  //             title='Tolak'
  //             styles={styles.ButtonAction}
  //             disabled={loadingBtn ? true : false}
  //             colors={['#d73c2c', '#ff6c5c', '#d73c2c']}
  //             onPress={() => handleConfirm('Rejected', item)}
  //           />
  //           <ButtonGradient
  //             title='Terima'
  //             styles={styles.ButtonAction}
  //             disabled={loadingBtn ? true : false}
  //             onPress={() => handleConfirm('Approved', item)}
  //           />
  //         </View>
  //       </Card>
  //     </View>
  //   )
  // }

  const NoUser = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoConsulAll.default />
        <Text style={styles.TxtNoTask}>Saat ini belum ada aktivitas nih</Text>
      </View>
    )
  }

  return (
    <View>
      <Loader loading={loadingBtn}/>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        <View>
          <Searchbox
            size='medium'
            style={styles.searchbox}
            placeholder={'Temukan user'}
            onChangeText={(e) => setSearch(e)}
            onFocus={() => console.log('hello')}
          />
        </View>
        {loadingAll && !loadingAllScroll ?
          <LoadingView color = 'white'/> :
          states == 0 ?
            <NoUser/> :
            <ChatAdmin
              state={states}
              audios={audios}
              onLoadMore={onLoadMore}
              renderFooter={renderFooter}
              confirm={(e, v) => handleConfirm(e, v)}
            />
        }
      </ImageBackground>
    </View>
  )
}

AdminUserAll.propTypes = {
  search : PropTypes.string,
}

export default AdminUserAll