import PropTypes from 'prop-types'
import RNPrint from 'react-native-print'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  Text,
  View,
  Image,
  FlatList,
  Platform,
  TextInput,
  RefreshControl,
  ImageBackground,
} from 'react-native'

import {
  USER_CLASS_LIST_SUCC,
  USER_CLASS_LIST_FAIL,
  USER_CLASS_LOAD_SCROLL,
} from '../../../../action'

import {
  Alerts,
  Progressbar,
  LoadingView,
  ModalRating,
  ButtonGradient,
  ModalFilterUser,
  ModalNoConnection,
} from '../../../../components'
import { Images } from '../../../../assets'
import { Response } from '../../../../utils'
import { UserClassAPI, EnumAPI, RatingAPI } from '../../../../api'

import { styles } from '../class-user/class-user.style'


const ClassUser = (props) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const [dataObj, setDataObj] = useState({})
  const [loading, setLoading] = useState(true)
  const [intervals, setIntervals] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [selectedPrinter, setSelectedPrinter] = useState(null)
  const [modalFilterVisible, setmodalFilterVisible] = useState(false)

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [stateCategory, setStateCategory] = useState([])
  const [dataStateCategory] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })
  const [dataState, setDataState] = useState({ skip: 0, take: 10, filter: [], filterString: '[]',  sort : 'DESC' })

  const { userInfo } = useSelector((state) => state.UserReducer)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const { loadingScroll } = useSelector((state) => state.UserClassReducer)

  const toggleModalFilter = () => setmodalFilterVisible(!modalFilterVisible)
  const toggleModal = (item) => {
    setDataObj(item)
    setModalVisible(!modalVisible)
  }

  const retryConnection = () => {
    setLoading(true)
    fetchDataUserClass(dataState)
    fetchDataClassCategory(dataStateCategory)
    setconnectStatus(!connectStatus)
  }

  const fetchDataUserClass = async ({ skip, take, filterString, sort }) => {
    try {
      const response = await UserClassAPI.GetAllUserClass(skip, take, filterString, sort)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
      } else {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
      }
      setLoading(false)
      dispatch({ type: USER_CLASS_LIST_SUCC })
    } catch (err) {
      setLoading(false)
      dispatch({ type: USER_CLASS_LIST_FAIL })
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

  const onDataStateChange = (sort, filter) => {
    setDataState({
      ...dataState,
      sort : sort,
      filterString : filter
    })
  }

  const giveRatingClass = async (rating) => {
    const values = {
      Rating : rating,
      Comment : comment,
      Class_Code : dataObj.Class_Code,
      User_Code : dataObj.User_Code,
    }
    try {
      const response = await RatingAPI.InsertRatingClass(values)
      if (response.data.result) {
        Alerts(true, 'Terimakasih telah memberikan review')
        setModalVisible(false)
      }
    } catch (err) {
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return err
    }
  }

  const updateProgressClass = async (item) => {
    const values = {
      ID : item.ID,
      Status : 'Completed',
      Progress : item.Progress,
      User_Code : item.User_Code,
      Progress_Count : item.Progress_Count,
      progress_Index : item.progress_Index,
      progress_Subindex : item.progress_Subindex,
    }
    try {
      const response = await UserClassAPI.UpdateProgressUserClass(values)
      if (response.data.result) {
        setLoading(true)
        await fetchDataUserClass(dataState)
      }
    } catch (err) {
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return err
    }
  }

  useEffect(() => {
    if (intervals) {
      setLoading(true)
      fetchDataUserClass(dataState)
      setIntervals(false)
    } else {
      const intervalId = setInterval(() => {
        fetchDataUserClass(dataState)
      }, 5000)
      return () => clearInterval(intervalId)
    }
  }, [dataState])

  useEffect(() => {
    fetchDataClassCategory(dataStateCategory)
  }, [])

  const selectPrinter = async () => {
    const selectedPrinter =
      await RNPrint.selectPrinter({ x: 100, y: 100 })
    setSelectedPrinter(selectedPrinter)
  }

  const silentPrint = async () => {
    if (!selectedPrinter) {
      alert('Must Select Printer First')
    }
    await RNPrint.print({
      printerURL: selectedPrinter.url,
      html: '<h1>Silent Print clicked</h1>',
    })
  }

  const printHTML = async (item) => {
    await RNPrint.print({
      html:
        `<div>
            <img src="https://www.belajariah.com/img-assets/SertificateClass.png" 
            width="1070px" height="720px"/>
            <h1 style="margin-top:-405;text-align:center;
            font-size:52px;color:white">
            ${userInfo.Full_Name}
            </h1>
            <p style="margin-top:35;text-align:center;
            font-size:20px;color:white;font-style:italic">
            "${item.Class_Name}"
            </p>
            <p style="margin-top:20;text-align:center;
            font-size:20px;color:white;font-weight:bold">
            ${item.Post_Test_Date}
            </p>    
        </div>`, })
  }

  const onRefreshing = () => {
    setLoading(true)
    setRefreshing(true)
    fetchDataUserClass(dataState)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (dataState.take < count && e.distanceFromEnd >= 0) {
      dispatch({ type: USER_CLASS_LOAD_SCROLL })
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
          color='white'
          size={30} />
      </View>
    ) : null
  }

  const customOptions = () => {
    return (
      <View>
        {selectedPrinter && (
          <View>
            <Text>
              {`Selected Printer Name: ${selectedPrinter.name}`}
            </Text>
            <Text>
              {`Selected Printer URI: ${selectedPrinter.url}`}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={selectPrinter}>
          <Text>Click to Select Printer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={silentPrint}>
          <Text>Click for Silent Print</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <ModalRating
        submit={giveRatingClass}
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
        title='Berikan ratingmu untuk kelas ini'
        renderItem={  <TextInput
          multiline={true}
          numberOfLines={8}
          onChangeText={(e) => setComment(e)}
          style={styles.textArea}/>}
      />
      <ModalFilterUser
        state={stateCategory}
        submit={onDataStateChange}
        isVisible={modalFilterVisible}
        backdropPress={() => toggleModalFilter()}
      />
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <View style={styles.containerView}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerTextHeader}>Kelas Saya</Text>
          {/* <TouchableOpacity onPress = {toggleModalFilter}>
            <Images.Filter.default
              width={20}
              height={20}
            />
          </TouchableOpacity> */}
        </View>
        <ImageBackground
          source={Images.BgClassUser}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 30 }}
        >
          {Platform.OS === 'ios' && customOptions()}
          {loading && !loadingScroll ?
            <LoadingView
              color ='white'
              loadingStyle={{ marginTop : -100 }}
            /> :
            state.length == 0 ? (
              <View style={styles.containerViewClass}>
                <Images.IconClassEmpty.default/>
                <Text style={styles.containerTextClass}>Oops!</Text>
                <Text style={styles.containerChildTextClass}>Saat ini tidak ada kelas</Text>
                <Text style={styles.containerChildTextClass}>yang anda ikuti, <Text style={styles.containerChildTextClass2}>Yuk gabung</Text></Text>
                <Text style={styles.containerChildTextClass2}>kelas sekarang juga</Text>
              </View>
            ) :
              (
                <FlatList
                  data={state}
                  style={{ width:'90%' }}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={renderFooter}
                  onEndReached={(e) => onLoadMore(e)}
                  showsVerticalScrollIndicator ={false}
                  contentContainerStyle={{ paddingBottom: 122 }}
                  keyExtractor={(item, index) =>  index.toString()}
                  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
                  renderItem={({ item, index }) => (
                    <View key={index}>
                      <View style={styles.containerClassProgress}>
                        <Images.IconStepStart.default />
                        {item.Status == 'In Progress' ||
                        item.Status == 'Completed' ? (
                            <Images.IconLine.default style={styles.iconTop}/> ) : (
                            <Images.IconLineHide.default style={styles.iconTop}/>
                          )}
                        {item.Status == 'In Progress' ||
                          item.Status == 'Completed' ? (
                            <Images.IconStepProgress.default /> ) : (
                            <Images.IconStepProgressHide.default />
                          )}
                        {item.Status == 'Completed' ? (
                          <Images.IconLine.default style={styles.iconTop}/> ) : (
                          <Images.IconLineHide.default style={styles.iconTop}/>
                        )}
                        {item.Status == 'Completed' ? (
                          <Images.IconStepFinish.default /> ) : (
                          <Images.IconStepFinishHide.default />
                        )}
                      </View>
                      <View style={{ bottom: 20 }}>
                        <ImageBackground
                          source={Images.BgClassLearning}
                          imageStyle={{ borderRadius: 20 }}
                          style={styles.imageBackgroundCard}
                        >
                          <View style={styles.containerIconProgress}>
                            <Image
                              source={item.Class_Image == '' ?
                                Images.ImgDefault5  : { uri : item.Class_Image }}
                              style={styles.ImageClass}/>
                              <View style={{ marginLeft: 10, }}>
                                <Text style={styles.TextClass}>{item.Class_Name}</Text>
                                <View style={{marginTop: 10,}}>
                                  <Text style={styles.testTextClass}>Nilai Ujian Awal : {item.Pre_Test_Scores}</Text>
                                  <Text style={styles.testTextClass}>Nilai Ujian Akhir : {item.Post_Test_Scores}</Text>
                                </View>
                              </View>
                            
                          </View>
                          {/* <View style={{ marginTop : -42 }}>
                            <Text style={styles.testTextClass}>Nilai Ujian Awal : {item.Pre_Test_Scores}</Text>
                            <Text style={styles.testTextClass}>Nilai Ujian Akhir : {item.Post_Test_Scores}</Text>
                          </View> */}
                          <View style={[styles.containerIconProgress, styles.customIconProgress]}>
                            {item.Status  == 'Completed' ? (
                              <ButtonGradient
                                title='Akses Video'
                                textStyle={styles.textButton}
                                styles={styles.buttonClassCustom}
                                icon={<Images.IconVideo.default style={styles.iconClassCustomLeft}/>}
                                onPress = {() => props.navigation.navigate('ClassLearning', item)}/>
                            ) : (
                              <View style={styles.progressBar}>
                                <Text style={styles.progressBarText}>Progress kelas</Text>
                                <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                                  <Progressbar progress={item.Progress}/>
                                  <Text style={styles.percentage}>{item.Progress}%</Text>
                                </View>
                              </View>
                            )}
                            {item.Status  == 'Completed' ? (
                              <ButtonGradient
                                title='Unduh Sertifikat'
                                textStyle={styles.textButton}
                                styles={styles.buttonClassCustom}
                                icon={<Images.IconDownload.default
                                  style={styles.iconClassCustomRight}/>}
                                onPress = {() => printHTML(item)}/>
                            ) : (
                              <ButtonGradient
                                styles={styles.ButtonClass}
                                textStyle={styles.textButton}
                                title={
                                  item.Status == 'In Progress' && item.progress == 100 ? 'Selesai' :
                                    item.Status == 'Start' ? 'Mulai' : 'Lanjut'}
                                onPress = {  item.Status == 'Start' ||
                              item.Status == 'In Progress' && item.progress != 100  ?
                                  () => props.navigation.navigate('ClassLearning', item) :
                                  item.Status == 'In Progress' && item.progress == 100 ?
                                    () => updateProgressClass(item) : null}/>
                            )}
                          </View>
                        </ImageBackground>
                      </View>
                    </View>
                  )}
                />
              )
          }
        </ImageBackground>
      </View>
    </>
  )
}

ClassUser.propTypes = {
  navigation: PropTypes.object,
}


export default ClassUser
