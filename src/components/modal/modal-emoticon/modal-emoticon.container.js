import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Slider from '@react-native-community/slider'

import { Images } from '../../../assets'
import { Buttons } from '../../../components'

import { styles } from './modal-emoticon.style'

const ModalEmoticon = (props) => {
    const maxRating = [1, 2, 3, 4, 5]
    const [defaultRating, setDefaultRating] = useState(0)
   
    const getEmoji = () => {
      if (defaultRating >= 0 && defaultRating <= 2) {
        return <Images.IconEmotOne.default />
      }
      else if (defaultRating >= 2 && defaultRating <= 4) {
        return <Images.IconEmotTwo.default />
      }
      else if (defaultRating >= 5 && defaultRating <= 6) {
        return <Images.IconEmotThree.default />
      }
      else if (defaultRating >= 7 && defaultRating <= 8) {
        return <Images.IconEmotFour.default />
      }
      else if (defaultRating <= 10) {
        return <Images.IconEmotFive.default />
      }
    
    }

    useEffect(() => {
        !props.isVisible ?
        setDefaultRating(0) : null
    }, [props.isVisible])
    
    const ReviewClass = () => {
        return (
          <View style={styles.containerReview}>
            <View style={styles.TopHeader}>
                <Images.IconCheckLisDirect.default style={styles.IconHeader} />
                <Text style={styles.TxtHeader}>
                  <Text style={styles.TxtHeaderBld}>Beri Penilaian, </Text>Hasil pertemuan anda hari ini
                </Text>
              </View>
            <View style={styles.ViewSlider}>
              <Text style={styles.TxtRatingVal}>{defaultRating}</Text>
              <Slider style={{height: 40}} thumbTintColor='#6E248D' minimumValue={1} maximumValue={10} step={1} onValueChange={setDefaultRating}  minimumTrackTintColor='#6E248D' maximumTrackTintColor='#6E248D' />
              <View style={{alignItems: 'center'}}>
                {getEmoji()}
              </View>
            </View>
            <View style={styles.containerTextArea}>
              {props.renderItem}
            </View>
            <View style={styles.containerRating}>
              <Buttons title='Kirim'
                style={styles.StyleBtn2} 
                textStyle={styles.StyleTxt2}/>
            </View>
          </View>
        )
    }

    return (
        <>
        <Modal
            backdropOpacity={0.25}
            isVisible={props.isVisible}
            style={styles.backdropStyle}
            onBackdropPress={props.backdropPress}
            onBackButtonPress={props.backButtonPress}
        >
            <View style={styles.modalStyle}>
              {/* <Image
                resizeMode='cover'
                source={Images.HeaderModalDirect}
                style={styles.BackroundImgModal}
              /> */}
              
              <View style={styles.modalContentSyle}>
                  {ReviewClass()}
              </View>
            </View>
        </Modal>
        </>
    )
}

ModalEmoticon.propTypes = {
    submit : PropTypes.func,
    title : PropTypes.string,
    isVisible : PropTypes.bool,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    backButtonPress : PropTypes.func,
    containerStyle : PropTypes.object,
}

export default ModalEmoticon