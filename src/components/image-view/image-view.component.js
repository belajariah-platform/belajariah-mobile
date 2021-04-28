import React from 'react'
import PropTypes from 'prop-types'
import { Images } from '../../assets'
import Modal from 'react-native-modal'
import { View, TouchableOpacity, } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

import { styles } from './image-view.style'

const  ImageView = (props)  => {
  const imagesModal = [{
    url: props.filepath,
    // url: 'https://www.belajariah.com/img-assets/ImgHeadingBacaanInspiratif.png',
    props: {
      // headers: ...
      source : props.source
    },
  }]

  return (
    <>
      <Modal isVisible={props.isVisible} onBackButtonPress={props.backButtonPress}>
        <View style={styles.modalContainer}>
          <ImageViewer
            imageUrls={imagesModal} />
          <TouchableOpacity
            onPress={props.setVisible}
            style={styles.hideModal}>
            <Images.ButtonBack.default />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}
ImageView.propTypes = {
  source : PropTypes.number,
  isVisible : PropTypes.bool,
  hideModal : PropTypes.func,
  filepath : PropTypes.string,
  setVisible : PropTypes.func,
  backButtonPress : PropTypes.func,
}


export default ImageView