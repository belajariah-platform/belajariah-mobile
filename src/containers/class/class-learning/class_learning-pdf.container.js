import Pdf from 'react-native-pdf'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import {
  View,
  Text,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
import { DownloadFile } from '../../../utils'
import { styles } from '../class-learning/class-learning.style'

const ClassLearningPDF = (props) => {
  const str = 'Dasar Dasar Harokat Al-Quran'

  useEffect(() => {
    const backAction = () => {
      if(props.viewPdf) {
        props.setViewPdf()
      }
      if(!props.viewPdf) {
        return false
      } else {
        return true
      }
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )
    return () => backHandler.remove()
  }, [props.viewPdf])

  return  (
    <ImageBackground source={Images.BGOpenPDF} style={styles.containerPDF}>
      <View style={styles.containerHeaderPDF}>
        <TouchableOpacity
          style={styles.buttonBackPDF}
          onPress={props.setViewPdf}>
          <Images.ButtonBack.default style={{ marginTop : -7 }}/>
        </TouchableOpacity>
        <View style={styles.containerTextPdf}>
          <Text style={styles.textPdf}>
            {str.length > 20 ?  `${str.substring(0, 20)}...` : str.substring(0, 20)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonDownloadPDF}
          onPress={() =>  DownloadFile(props.source)}>
          <Images.IconDownloadPDF.default width={20} height={20}/>
          <Text style={styles.textDonwload}>unduh</Text>
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.containerPDF,
        borderTopLeftRadius : 16, borderTopRightRadius : 16, paddingHorizontal : 16, backgroundColor : 'white', paddingTop : 16  }}>
        <Pdf
          source={{ uri : props.source.filename }}
          onLoadComplete={(numberOfPages, filePath)=>{
            console.log('file Path', filePath)
            console.log('source', props.source.filename)
            console.log(`number of pages: ${numberOfPages}`)
          }}
          onPageChanged={(page, numberOfPages)=>{
            console.log(`current page: ${page}`)
            console.log('number of pages', numberOfPages)
          }}
          onError={(error)=>{
            console.log('err', error)
          }}
          onPressLink={(uri)=>{
            console.log(`Link presse: ${uri}`)
          }}
          style={{ flex: 1 }}/>
      </View>
    </ImageBackground>
  )
}


ClassLearningPDF.propTypes = {
  viewPdf : PropTypes.bool,
  source : PropTypes.object,
  setViewPdf : PropTypes.func,
}

export default ClassLearningPDF