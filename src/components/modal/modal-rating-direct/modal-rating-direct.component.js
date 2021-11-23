import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Slider from '@react-native-community/slider'

import { Images } from '../../../assets'
import { Buttons } from '../../../components'

import { styles } from './modal-rating-direct.style'

const ModalRatingDirect = (props) => {
    const maxRating = [1, 2, 3, 4, 5]
    const [defaultRating, setDefaultRating] = useState(0)

    useEffect(() => {
        !props.isVisible ?
        setDefaultRating(0) : null
    }, [props.isVisible])

    const RatingbarClass = () => {
        return (
          <View style={styles.customRatingBarStyle}>
            {maxRating.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  onPress={() => setDefaultRating(item)}>
                  <Image
                    style={styles.starImageStyle}
                    source={
                      item <= defaultRating
                        ? Images.BintangFull
                        : Images.BintangBorder
                    }
                  />
                </TouchableOpacity>
              )
            })}
          </View>
        )
    }

    // console.log(defaultRating)
    
    const ReviewClass = () => {
        return (
          <View style={styles.containerReview}>
            <View style={{...
                styles.TopHeader, backgroundColor: props.styleBackground}}>
                  <View style={styles.IconHeader}>{props.HeaderBanner}</View>
                <Text style={styles.TxtHeader}>{props.TitleRating}
                  {/* <Text style={styles.TxtHeaderBld}>Alhamdulillah!, </Text>anda telah menyelesaikan pertemuan bulan ini. */}
                </Text>
              </View>
            <View style={styles.ViewTxtMdl}>
              <Text style={styles.TextTitleRating}>
                <Text style={styles.TextTitleRatingBld}>Beri</Text>
                <Text style={styles.TextTitleRatingBldYellow}> Penilaian</Text>
                , {props.DescRating}
              </Text>
            </View>
            {/* <RatingbarClass /> */}
            {props.RatingBar}
            <View style={styles.containerTextArea}>
              {props.renderItem}
            </View>
            {/* <View style={styles.containerRating}>
              <Buttons title='Kirim'
                style={styles.StyleBtn2} 
                textStyle={styles.StyleTxt2}/>
            </View> */}
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

ModalRatingDirect.propTypes = {
    submit : PropTypes.func,
    title : PropTypes.string,
    isVisible : PropTypes.bool,
    RatingBar : PropTypes.object,
    renderItem : PropTypes.object,
    DescRating : PropTypes.string,
    TitleRating : PropTypes.string,
    backdropPress : PropTypes.func,
    HeaderBanner : PropTypes.object,
    backButtonPress : PropTypes.func,
    containerStyle : PropTypes.object,
    styleBackground : PropTypes.object,
}

export default ModalRatingDirect