import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import Swiper from 'react-native-swiper'
import { styles } from './modal-record.style'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  Loader,
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { ExerciseAPI, QuranAPI } from '../../../api'

const ModalRecord = (props) => {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState, setDataState] = useState({
    start : true,
    stop : false,
    send : false,
    sent : false,
  })
  console.log(props.user.Expired_Date)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataQuran()
    setconnectStatus(!connectStatus)
  }

  const fetchDataQuran = async (data) => {
    try {
      const dataObj = {
        id: data.Surat_Code,
        count: 100,
      }
      setLoading(true)
      const response = await QuranAPI.GetDetailQuran(dataObj)
      if (response.status === Response.SUCCESS) {
        const dataArr = []
        response.data.data.verses.forEach((val, index) => {
          if (index + 1 >= data.Ayat_Start && index + 1 <= data.Ayat_End) {
            dataArr.push(val)
          }
        })
        setState(dataArr)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataQuran(props.data)
  }, [props.data])

  const InsertRecord = async () => {
    const values = {
      User_Code              : props.user.User_Code,
      Class_Code             : props.user.Class_Code,
      Title_Code             : props.data.Title_Code,
      Recording_Code         : 1,
      Duration               : 2,
      Expired_Date           : props.user.Expired_Date,
    }
    try {
      setLoadingBtn(true)
      const response = await ExerciseAPI.InsertExerciseReading(values)
      if (response.data.result) {
        setDataState(s => ({ ...s, send : false, sent : true }))
      }
      setLoadingBtn(false)
    } catch (error) {
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      setLoadingBtn(false)
      return error
    }
  }

  const handleRecord = () => {
    dataState.start ? (
      setDataState(s => ({ ...s, start : false, stop : true })),
      alert('Recording....')
    )
      : (
        dataState.stop ? (
          setDataState(s => ({ ...s, stop : false, send : true })),
          alert('Record done.')
        )
          :
          dataState.send && (
            InsertRecord()
          )
      )
  }

  const handlePlayRecord = () => {
    alert('play record')
  }

  const handleReload = () => {
    setDataState(s => ({ ...s, send : false, start : true }))
  }

  return (
    <>
      <Loader loading={loadingBtn}/>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
        onBackButtonPress={props.backButtonPress}
      >
        <View style={styles.modalStyle}>
          <Image source={Images.ModalRecordBG} style={styles.imgBackground}/>
          <TouchableOpacity
            onPress={props.backdropPress}
            style={styles.iconClose}>
            <Images.ButtonClose.default/>
          </TouchableOpacity>

          {dataState.sent ? (
            <View style={styles.containerRecordSent}>
              <Images.IconRecordSent.default />
              <Text style={styles.textSuccess}>Terkirim</Text>
              <Text style={styles.textModal}>Rekaman anda terkirim</Text>
            </View>
          ) : (
            <View style={styles.containerStyle}>

              <View style={styles.containerSwiper}>
                {loading ?
                  <LoadingView/> :
                  <Swiper
                    loop={false}
                    showsPagination={false}
                    showsButtons={true}
                    prevButton={<Images.IconRecordPrevious.default />}
                    nextButton={<Images.IconRecordNext.default />}
                  >
                    {state.map((ayat, index) =>
                      <ScrollView key={index} showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerScrollview}>
                        <Text style={styles.textAyat}>{ayat.text.arab}</Text>
                      </ScrollView>)
                    }
                  </Swiper>
                }
                <Text style={styles.textModal}>Ayoo praktek baca ayat diatas, lalu rekam bacaan~mu ya sobat dan jangan lupa kirim ya.</Text>
              </View>

              {dataState.start && (
                <View>
                  <Text style={styles.textTimer}>00:00:00</Text>
                  <Images.IconRecordStartGradation.default style={styles.iconRecordGradation}/>
                  <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                    <Images.IconRecordStart.default />
                  </TouchableOpacity>
                </View>
              )}

              {dataState.stop && (
                <View>
                  <Text style={styles.textTimer}>00:00:14</Text>
                  <Images.IconRecordStopGradation.default style={styles.iconRecordGradation}/>
                  <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                    <Images.IconRecordStop.default />
                  </TouchableOpacity>
                </View>
              )}

              {dataState.send && (
                <View>
                  <Text style={styles.textTimer}>00:00:14</Text>
                  <Images.IconRecordSendGradation.default style={styles.iconRecordGradation}/>
                  <View style={styles.containerSend}>
                    <TouchableOpacity onPress={handlePlayRecord} style={styles.iconRecord}>
                      <Images.IconRecordPlay.default />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                      <Images.IconRecordSend.default />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleReload} style={styles.iconRecord}>
                      <Images.IconRecordReload.default />
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {dataState.sent && (
                <View>
                  <Text style={styles.textTimer}>Done ya</Text>
                </View>
              )}

            </View>
          )}
        </View>
      </Modal>
    </>
  )
}

ModalRecord.propTypes = {
  user : PropTypes.object,
  data : PropTypes.object,
  loading : PropTypes.bool,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  hideButtonClose : PropTypes.bool,
  containerStyle : PropTypes.object,
}


export default ModalRecord