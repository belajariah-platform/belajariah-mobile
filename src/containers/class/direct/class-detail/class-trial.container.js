import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { VideoPlayer } from '../../../../components'
import styles from './class-trial.style'
import { useState } from 'react'
import { ImageBackground } from 'react-native'
import { Images } from '../../../../assets'
import { Image } from 'react-native'

const ClassTrialDirect = (props) => {
  const { item, classes, packages } = props.route.params
  const [isFullscreen, setIsFullscreen] = useState(false)
  // console.log(item)
  return (
    <ImageBackground source={Images.BgClassUser} style={styles.container}>
      <View style={styles.contentContainer}>
        <Images.ButtonClose.default style={styles.btnClose} width={32} height={32} />
        <VideoPlayer
          iconPlaySize = {40}
          iconSkipSize = {40}
          videoLink={item.Video}
          showBackButton = {true}
          posterLink={item.Poster}
          videoStyle={styles.videoStyle}
          style={styles.videoContainerStyle}
          controllerStyle={styles.controllerStyle}
          videoFullscreenStyle={styles.videoFullscreenStyle}
          fullscreenStyle={styles.videoFullscreenContainerStyle}
          onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
          controllerFullscreenStyle={styles.controllerFullscreenStyle}
        />
      </View>
    </ImageBackground>
  )
}

ClassTrialDirect.propTypes = {
  route : PropTypes.object,
}

export default ClassTrialDirect
