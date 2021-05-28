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
  CONSUL_ACCEPT_REQ,
  CONSUL_ACCEPT_SUCC,
  CONSUL_ACCEPT_FAIL,
  CONSUL_ACCEPT_SCROLL,
} from '../../../action'

import {
  Searchbox,
  ChatAdmin,
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { ConsultationAPI } from '../../../api'

import { styles } from './admin-user.style'

const AdminUserAccept = () => {
  const dispatch = useDispatch()
  const { loadingAccept, loadingAcceptScroll } = useSelector((state) => state.ConsultationAcceptReducer)

  const [search, setSearch] = useState('')
  const [audios, setAudios] = useState([{ 'id': '1.1', 'title': 'Audio...', 'type': 'default', 'url': 'https://belajariah-dev.sgp1.digitaloceanspaces.com/Voice-Note/Perekaman%20baru%201.m4a' }])
  const [connectStatus, setconnectStatus] = useState(false)

  const [count, setCount] = useState(0)
  const [states, setStates] = useState([])
  const [dataState, setDataState] = useState({ skip: 0, take: 5, filter: [], filterString: '[]',  sort : 'DESC', search : '' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataConsultation(dataState)
    setconnectStatus(!connectStatus)
  }

  const fetchDataConsultation = async ({ skip, take, filterString, sort, search }) => {
    try {
      let audio = []
      dispatch({ type: CONSUL_ACCEPT_REQ })
      filterString='[{"type": "text", "field" : "Status", "value": "Approved"}]'
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
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      dispatch({ type: CONSUL_ACCEPT_SUCC })
    } catch (err) {
      dispatch({ type: CONSUL_ACCEPT_FAIL })
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
      dispatch({ type: CONSUL_ACCEPT_SCROLL })
      setDataState({
        ...dataState,
        take : dataState.take + 5
      })
    }
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

  const renderFooter = () => {
    return loadingAcceptScroll ? (
      <View style={styles.indicatorContainer}>
        <LoadingView
          color='white'
          size={30} />
      </View>
    ) : null
  }

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
  //             style={{ flex : 1 }}
  //             activeOpacity={0.5}
  //             onPress={()=> navigation.navigate('AdminProfileAll', item)}
  //           >
  //             <Text style={styles.textUsername}>{item.User_Name}</Text>
  //             <Text style={styles.TxtTimeTitle}>
  //               {moment(item.Created_Date).format('h:mm A')} ({moment(item.Created_Date).format('L')})
  //             </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             activeOpacity={1}
  //             style={styles.iconAccept}>
  //             <Images.IconAcceptStatus.default/>
  //           </TouchableOpacity>
  //         </View>
  //         <View style={styles.containerButtonAction}>
  //           <View style={styles.ViewButtonAction}>
  //             <TouchableOpacity
  //               onPress={() => handlePlayList(item)}
  //             >
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
  //             titleStyle={styles.textRegular}
  //             style={styles.containerAccordion}>
  //             <View>
  //               <Text
  //                 style={styles.description}>
  //                 {item.Description}
  //               </Text>
  //             </View>
  //           </List.Accordion>
  //         </List.Section>
  //       </Card>
  //     </View>
  //   )
  // }

  const NoUser = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoConsulAccept.default />
        <Text style={styles.TxtNoTask}>Saat ini belum ada aktivitas diterima nih</Text>
      </View>
    )
  }

  return(
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
        {loadingAccept && !loadingAcceptScroll ?
          <LoadingView color = 'white'/> :
          states == 0 ?
            <NoUser/>
            :
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

AdminUserAccept.propTypes = {
  search : PropTypes.string,
}

export default AdminUserAccept