import React, { createRef, useEffect, useState } from 'react'
import { View, StatusBar, BackHandler } from 'react-native'

import PropTypes from 'prop-types'
import { Images } from '../../assets'
import { styles } from './video.style'
import Video, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
} from 'react-native-video'
import VideoBar from './video-bar.component'
import Orientation from 'react-native-orientation-locker'
import VideoController from './video-controller.component'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Alert } from 'react-native'

const VideoPlayer = (props) => {
  const videoRef = createRef(Video)
  const [state, setState] = useState({
    fullscreen: false,
    play: false,
    currentTime: 0,
    duration: 0,
    showControls: false,
  })

  const handleOrientation = (orientation) => {
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
      ? (setState(s => ({ ...s, fullscreen: true })), StatusBar.setHidden(true))
      : (setState(s => ({ ...s, fullscreen: false })),
      StatusBar.setHidden(false))
  }

  const handleFullscreen = () => {
    state.fullscreen
      ? Orientation.lockToPortrait()
      : Orientation.lockToLandscapeLeft()
    props.onFullScreenPress()
  }

  const handleBackButton = () => {
    state.fullscreen
      ? (
        console.log(state.fullscreen),
        Orientation.lockToPortrait(),
        props.onFullScreenPress()
      ) : (
        Orientation.lockToPortrait()
      )
  }

  const handlePlayPause = () => {
    // If playing, pause and show controls immediately.
    if (state.play) {
      setState({ ...state, play: false, showControls: true })
      return
    }
    setState({ ...state, play: true })
  }

  const skipBackward = () => {
    videoRef.current.seek(state.currentTime - 15)
    setState({ ...state, currentTime: state.currentTime - 15 })
  }

  const skipForward = () => {
    videoRef.current.seek(state.currentTime + 15)
    setState({ ...state, currentTime: state.currentTime + 15 })
  }

  const onSeek = (data) => {
    videoRef.current.seek(data.seekTime)
    setState({ ...state, currentTime: data.seekTime })
  }

  const onLoadEnd = (data) => {
    setState(s => ({
      ...s,
      duration: data.duration,
      currentTime: data.currentTime,
    }))
  }

  const onProgress = (data) => {
    setState(s => ({
      ...s,
      currentTime: data.currentTime,
    }))
  }

  const onEnd = () => {
    setState({ ...state, play: false })
    videoRef.current.seek(0)
    if(props.onVideoEnd != undefined) {
      props.onVideoEnd()
    }
  }

  const showControls = () => {
    state.showControls
      ? setState({ ...state, showControls: false })
      : setState({ ...state, showControls: true })
    //setTimeout(() => setState(s => ({ ...s, showControls: false })), 5000)
  }

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation)
    BackHandler.addEventListener('hardwareBackPress', handleBackButton)

    return () => {
      Orientation.removeOrientationListener(handleOrientation)
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
    }
  }, [])

  return (
    <TouchableWithoutFeedback style={state.fullscreen? props.fullscreenStyle: props.style} onPress={showControls}>
      <Video
        source={{ uri: props.videoLink }}
        ref={videoRef}
        controls={false}
        style={state.fullscreen? props.videoFullscreenStyle : props.videoStyle}
        poster={props.posterLink}
        resizeMode={'stretch'}
        posterResizeMode={'stretch'}
        onLoad={onLoadEnd}
        onProgress={onProgress}
        onEnd={onEnd}
        paused={!state.play}
      />
      {state.showControls && (
        <View style={state.fullscreen? props.controllerFullscreenStyle: props.controllerStyle}>
          <View style={state.fullscreen? styles.headerControlFullscreen : styles.headerControl}>
            {
              state.fullscreen?
                <TouchableOpacity
                  onPress={handleFullscreen}
                  hitSlop={{ top: 18, bottom: 18, left: 18, right: 18 }}>
                  <Images.ButtonBack.default/>
                </TouchableOpacity>
                :
                null
            }
            <TouchableOpacity
              onPress={handleFullscreen}
              hitSlop={{ top: 18, bottom: 18, left: 18, right: 18 }}
              style={styles.fullscreenButton}>
              <Images.VideoFullscreen.default width={state.fullscreen? 28 : 20} height={state.fullscreen? 28 : 20} />
            </TouchableOpacity>
          </View>
          <VideoController
            playing={state.play}
            onPlay={handlePlayPause}
            onPause={handlePlayPause}
            skipForwards={skipForward}
            showPreviousAndNext={false}
            skipBackwards={skipBackward}
            fullscreen={state.fullscreen}
            showSkip={state.fullscreen? true : false}
            iconPlaySize={state.fullscreen? props.iconPlaySizeFullscreen : props.iconPlaySize}
            iconSkipSize={state.fullscreen? props.iconSkipSizeFullscreen : props.iconSkipSize}
          />
          <VideoBar
            currentTime={state.currentTime}
            duration={state.duration > 0 ? state.duration : 0}
            onSlideStart={handlePlayPause}
            onSlideComplete={handlePlayPause}
            onSlideCapture={onSeek}
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  )
}

VideoPlayer.propTypes = {
  style : PropTypes.object,
  onVideoEnd : PropTypes.func,
  videoLink : PropTypes.string,
  videoStyle : PropTypes.object,
  posterLink : PropTypes.string,
  iconPlaySize : PropTypes.number,
  iconSkipSize : PropTypes.number,
  controllerStyle : PropTypes.object,
  fullscreenStyle : PropTypes.object,
  onFullScreenPress : PropTypes.func,
  videoFullscreenStyle : PropTypes.object,
  iconPlaySizeFullscreen : PropTypes.number,
  iconSkipSizeFullscreen : PropTypes.number,
  controllerFullscreenStyle : PropTypes.object,
}


export default VideoPlayer
