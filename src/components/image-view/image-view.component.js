import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { Images } from '../../assets'
import { View, TouchableOpacity } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

import { styles } from './image-view.style'

const  ImageView = (props)  => {
  const imagesModal = [{
    url: props.filepath,
    // url: 'https://www.belajariah.com/img-assets/ImgHeadingBacaanInspiratif.png',
    props: {
        // headers: ...
    }
  }]

  return (
      <>
        <Modal isVisible={props.isVisible}>
            <View style={{flex: 1}}>
            <ImageViewer imageUrls={imagesModal}/>
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
    isVisible : PropTypes.bool,
    hideModal : PropTypes.func,
    filepath : PropTypes.string,
}


export default ImageView