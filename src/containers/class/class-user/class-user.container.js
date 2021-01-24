import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  Text,
  View,
  Image,
  FlatList,
  Platform,
  ToastAndroid,
  ImageBackground,
} from 'react-native'
import moment from 'moment'
import RNPrint from 'react-native-print'

import { Images } from '../../../assets'
import { ButtonGradient, Progressbar, ModalRating } from '../../../components'

import { styles } from '../class-user/class-user.style'


const ClassUser = (props) => {
  const [available, setAvailable] = useState(false)
  const [selectedPrinter, setSelectedPrinter] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)

  const Progress = [
    { 'value' : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan', 'status' : 'start', 'progress' : 0 },
    { 'value' : 'Bisa Ngaji dengan nada indah (Tilawah) seperti Qari profesional', 'status' : 'in progress', 'progress' : 50 },
    { 'value' : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan', 'status' : 'in progress', 'progress': 100 },
    { 'value' : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan', 'status' : 'completed', 'progress': 100 },
  ]

  const state = {
    username : 'Riki Jenifer',
    class : 'Belajar al-quran dari dasar dengan metode mudah dan menyenangkan',
    created_date : moment(new Date()).format('DD MMMM YYYY')
  }

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

  const printHTML = async () => {
    const response = await RNPrint.print({
      html:
        `<div>
            <img src="https://www.belajariah.com/img-assets/SertificateClass.png" 
            width="1070px" height="720px"/>
            <h1 style="margin-top:-405;text-align:center;
            font-size:52px;color:white">
            ${state.username}
            </h1>
            <p style="margin-top:35;text-align:center;
            font-size:20px;color:white;font-style:italic">
            "${state.class}"
            </p>
            <p style="margin-top:20;text-align:center;
            font-size:20px;color:white;font-weight:bold">
            ${state.created_date}
            </p>    
        </div>`, })
    response == 'Document' ?
      ToastAndroid.show('Berhasil disimpan', ToastAndroid.SHORT) : null
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
        isVisible={modalVisible}

        backdropPress={() => toggleModal()}
      />
      <View style={styles.containerView}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerTextHeader}>Kelas Saya</Text>
          <TouchableOpacity onPress={() => setAvailable(!available)}>
            <Images.Filter.default
              width={40}
              height={40}
              style={styles.containerButtonFilter}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={Images.BgClassUser}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 30 }}
        >
          {Platform.OS === 'ios' && customOptions()}
          {available ? (
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
                data={Progress}
                style={{ width:'90%', marginBottom : 105 }}
                showsVerticalScrollIndicator ={false}
                keyExtractor={(item, index) =>  index.toString()}
                renderItem={({ item, index }) => (
                  <>
                    <View key={index}>
                      <View style={styles.containerClassProgress}>
                        <Images.IconStepStart.default />
                        {item.status == 'in progress' ||
                        item.status == 'completed' ? (
                            <Images.IconLine.default style={styles.iconTop}/> ) : (
                            <Images.IconLineHide.default style={styles.iconTop}/>
                          )}
                        {item.status == 'in progress' ||
                          item.status == 'completed' ? (
                            <Images.IconStepProgress.default /> ) : (
                            <Images.IconStepProgressHide.default />
                          )}
                        {item.status == 'completed' ? (
                          <Images.IconLine.default style={styles.iconTop}/> ) : (
                          <Images.IconLineHide.default style={styles.iconTop}/>
                        )}
                        {item.status == 'completed' ? (
                          <Images.IconStepFinish.default /> ) : (
                          <Images.IconStepFinishHide.default />
                        )}
                      </View>
                      <View style={{ bottom: 20 }}>
                        <ImageBackground
                          source={Images.BgClassLearning}
                          imageStyle={{ borderRadius: 20 }}
                          style={{ height: 'auto' }}
                        >
                          <View style={styles.containerIconProgress}>
                            <Image source={Images.TahsinImage} style={styles.ImageClass}/>
                            <Text style={styles.TextClass}>{item.value}</Text>
                          </View>
                          <Text style={styles.ButtonTextClass}>Nilai Exam : 0</Text>
                          <View style={[styles.containerIconProgress, styles.customIconProgress]}>
                            {item.status  == 'completed' ? (
                              <ButtonGradient
                                title='Akses Video'
                                textStyle={styles.textButton}
                                styles={styles.buttonClassCustom}
                                icon={<Images.IconVideo.default style={styles.iconClassCustomLeft}/>}
                                onPress = {() => props.navigation.navigate('ClassLearning')}/>
                            ) : (
                              <View style={styles.progressBar}>
                                <Text style={styles.progressBarText}>Progress kelas</Text>
                                <Progressbar progress={item.progress}/>
                              </View>
                            )}
                            {item.status  == 'completed' ? (
                              <ButtonGradient
                                title='Unduh Sertifikat'
                                textStyle={styles.textButton}
                                styles={styles.buttonClassCustom}
                                icon={<Images.IconDownload.default
                                  style={styles.iconClassCustomRight}/>}
                                onPress = {printHTML}/>
                            ) : (
                              <ButtonGradient
                                styles={styles.ButtonClass}
                                textStyle={styles.textButton}
                                title={
                                  item.status == 'in progress' && item.progress == 100 ? 'Selesai' :
                                    item.status == 'start' ? 'Mulai' : 'Lanjut'}
                                onPress = {toggleModal}/>
                            )}
                          </View>
                        </ImageBackground>
                      </View>
                    </View>
                  </>
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