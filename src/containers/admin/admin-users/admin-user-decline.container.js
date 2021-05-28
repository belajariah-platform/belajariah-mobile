import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import {
  View,
  ImageBackground,
} from 'react-native'
import {
  CONSUL_DECLINE_REQ,
  CONSUL_DECLINE_SUCC,
  CONSUL_DECLINE_FAIL,
  CONSUL_DECLINE_SCROLL,
} from '../../../action'
import {
  ChatAdmin,
  Searchbox,
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { ConsultationAPI } from '../../../api'

import { styles } from './admin-user.style'

const AdminUserDecline = () => {
  const dispatch = useDispatch()
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const { loadingDecline, loadingDeclineScroll } = useSelector((state) => state.ConsultationDeclineReducer)

  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [states, setStates] = useState([])
  const [connectStatus, setconnectStatus] = useState(false)
  const [audios, setAudios] = useState([{ 'id': '1.1', 'title': 'Audio...', 'type': 'default', 'url': 'https://belajariah-dev.sgp1.digitaloceanspaces.com/Voice-Note/Perekaman%20baru%201.m4a' }])
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const retryConnection = () => {
    fetchDataConsultation(dataState)
    setconnectStatus(!connectStatus)
  }

  const fetchDataConsultation = async ({ skip, take, filterString, sort, search }) => {
    try {
      let audio = []
      dispatch({ type: CONSUL_DECLINE_REQ })
      filterString='[{"type": "text", "field" : "Status", "value": "Rejected"}]'
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
        setStates(response.data.data)
        setCount(response.data.count)
        dispatch({ type: CONSUL_DECLINE_SUCC })
      } else {
        dispatch({ type: CONSUL_DECLINE_FAIL })
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
    } catch (err) {
      dispatch({ type: CONSUL_DECLINE_FAIL })
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

  // const onRefreshing = () => {
  //   setRefreshing(true)
  //   fetchDataConsultation(dataState)
  //   setMsgSelected(states)
  //   setOptionSelected({})
  //   setRefreshing(false)
  // }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: CONSUL_DECLINE_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
  }

  const renderFooter = () => {
    return loadingDeclineScroll ? (
      <View style={styles.indicatorContainer}>
        <LoadingView
          color='white'
          size={30} />
      </View>
    ) : null
  }

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

  // const CardUser = (item, index) => {
  //   let icon
  //   optionSelected.Is_Play &&
  //   optionSelected.ID == item.ID ?
  //     (icon = Images.IconPause) :
  //     (icon =  Images.IconPlay)

  //   return(
  //     <View key={index}>
  //       <Card containerStyle={styles.cardUserOpacity}>
  //         <View style={styles.ViewInstructorInfo}>
  //           <Image
  //             source={item.User_Image == '' ?
  //               Images.ImageProfileDefault  : { uri :item.User_Image }}
  //             style={{ ...styles.avatarUser, opacity : 0.5 }}/>
  //           <TouchableOpacity
  //             style={{ flex : 1 }}
  //             activeOpacity={0.5}
  //             onPress={()=> {navigation.navigate('AdminProfileAll', item)}}
  //           >
  //             <Text
  //               style={{ ...styles.textUsername, opacity : 0.5 }}>
  //               {item.User_Name}
  //             </Text>
  //             <Text
  //               style={{ ...styles.TxtTimeTitle,  opacity : 0.5 }}>
  //               {moment(item.Created_Date).format('h:mm A')} ({moment(item.Created_Date).format('L')})
  //             </Text>
  //           </TouchableOpacity>

  //           <TouchableOpacity
  //             activeOpacity={1}
  //             style={styles.iconAccept}>
  //             <Images.IconRejectStatus.default/>
  //           </TouchableOpacity>
  //         </View>
  //         <View style={styles.containerButtonAction}>
  //           <View style={styles.ViewButtonAction}>
  //             <TouchableOpacity
  //               onPress={() => handlePlayList(item)}>
  //               <icon.default
  //                 width={20}
  //                 height={20}
  //                 style={{ marginRight: 5 }}/>
  //             </TouchableOpacity>
  //             <Images.GrafisVoice.default
  //               width={100}
  //               height={20}
  //               style={{ marginRight: 5 }}/>
  //             <Text style={styles.textDuration}>
  //               {optionSelected.Is_Play && optionSelected.ID == item.ID ? (
  //                 `${minutes}:${seconds < 10 ?
  //                   `0${seconds}` : seconds}`
  //               ) : (
  //                 TimeConvert(item.Recording_Duration)
  //               )}
  //             </Text>
  //           </View>
  //           <TouchableOpacity
  //             activeOpacity={0.5}
  //             style={{ marginRight: 5 }}>
  //             <Images.IconDownloadVoice.default/>
  //           </TouchableOpacity>
  //         </View>
  //         <List.Section>
  //           <List.Accordion
  //             title='Deskripsi konsultasi'
  //             titleStyle={{ ...styles.textRegular, opacity : 0.5 }}
  //             style={styles.containerAccordion}>
  //             <View>
  //               <Text
  //                 style={{ ...styles.description, opacity : 0.5 }}>
  //                 {item.Description}
  //               </Text>
  //             </View>
  //           </List.Accordion>
  //         </List.Section>
  //         {/* <TouchableOpacity>
  //           <Text style={styles.textButtonDelete}>Delete</Text>
  //         </TouchableOpacity> */}
  //       </Card>
  //     </View>
  //   )
  // }

  const NoUser = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoConsulReject.default />
        <Text style={styles.TxtNoTask}>Saat ini belum ada aktivitas diterima nih</Text>
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
        {loadingDecline && !loadingDeclineScroll ?
          <LoadingView color = 'white'/> :
          states == 0 ?
            <NoUser/> :
            <ChatAdmin
              state={states}
              audios={audios}
              onLoadMore={onLoadMore}
              renderFooter={renderFooter}
            />
            // <FlatList
            //   data={states}
            //   style={{ width:'100%' }}
            //   onEndReachedThreshold={0.1}
            //   ListFooterComponent={renderFooter}
            //   onEndReached={(e) => onLoadMore(e)}
            //   showsVerticalScrollIndicator ={false}
            //   contentContainerStyle={{ paddingBottom: 25 }}
            //   keyExtractor={(item, index) =>  index.toString()}
            //   renderItem={({ item, index }) => CardUser(item, index)}
            //   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}/>
        }
      </ImageBackground>
    </View>
  )
}

AdminUserDecline.propTypes = {
  search : PropTypes.string,
}

export default AdminUserDecline