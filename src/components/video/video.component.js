import React, { createRef, useEffect, useState } from 'react'
import { View, StatusBar, BackHandler, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import PropTypes from 'prop-types'
import { Images } from '../../assets'
import { styles } from './video.style'
import Video from 'react-native-video'
import VideoBar from './video-bar.component'
import { useNavigation } from '@react-navigation/native'
import Orientation from 'react-native-orientation-locker'
import VideoController from './video-controller.component'

const VideoPlayer = (props) => {
  const videoRef = createRef(Video)
  const navigation = useNavigation()
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
        props.onFullScreenPress(),
        Orientation.lockToPortrait()
      ) : (
        navigation.goBack(),
        Orientation.lockToPortrait()
      )
    return true
  }

  const handlePlayPause = () => {
    if (state.play) {
      setState({ ...state, play: false, showControls: true })
      return
    }
    setState({ ...state, play: true })
  }

  const handleStop = () => {
    videoRef.current.seek(0)
    setState({ ...state, play : false, currentTime : 0, showControls : true })
  }

  const skipBackward = () => {
    videoRef.current.seek(state.currentTime - 15)
    setState({ ...state, currentTime: state.currentTime - 15 })
  }

  const skipForward = () => {
    videoRef.current.seek(state.currentTime + 15)
    setState({ ...state, currentTime: state.currentTime + 15 })
  }

  const onSeek = (seekTime) => {
    videoRef.current.seek(seekTime)
    setState({ ...state, currentTime: seekTime })
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
    setState({ ...state, play: false, currentTime : 0 })
    videoRef.current.seek(0)
    if(props.onVideoEnd != undefined) {
      props.onVideoEnd()
    }
  }

  const showControls = () => {
    state.showControls
      ? (
        setState({ ...state, showControls: false })
      )
      : (
        setState({ ...state, showControls: true }),
        setTimeout(() => setState(s => ({ ...s, showControls: false })), 5000)
      )
  }

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation)
    BackHandler.addEventListener('hardwareBackPress', handleBackButton)

    return () => {
      Orientation.removeOrientationListener(handleOrientation)
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
    }
  }, [handleBackButton])

  return (
    <TouchableWithoutFeedback
      style={state.fullscreen? props.fullscreenStyle: props.style}
      onPress={showControls}>
      <View>
        <Video
          onEnd={onEnd}
          ref={videoRef}
          controls={false}
          onLoad={onLoadEnd}
          paused={!state.play}
          resizeMode={'cover'}
          onProgress={onProgress}
          poster={props.posterLink}
          posterResizeMode={'cover'}
          source={{ uri: props.videoLink }}
          style={state.fullscreen? props.videoFullscreenStyle : props.videoStyle}
        />

        {state.showControls && (
          <View style={state.fullscreen? props.controllerFullscreenStyle: props.controllerStyle}>

            <View style={state.fullscreen? styles.headerControl : (props.showBackButton ? styles.headerControl : styles.headerWithoutBackButton)}>
              {
                state.fullscreen?
                  <TouchableOpacity
                    onPress={handleFullscreen}
                    hitSlop={{ top: 18, bottom: 18, left: 18, right: 18 }}>
                    <Images.ButtonBack.default/>
                  </TouchableOpacity>
                  :
                  (props.showBackButton &&
                  <TouchableOpacity
                    onPress={navigation.goBack}
                    hitSlop={{ top: 18, bottom: 18, left: 18, right: 18 }}>
                    <Images.ButtonBack.default />
                  </TouchableOpacity>
                  )
              }
              <TouchableOpacity
                onPress={handleFullscreen}
                style={state.fullscreen ? styles.fullscreenButtonFullscreen : styles.fullscreenButtonNormal}
                hitSlop={{ top: 18, bottom: 18, left: 18, right: 18 }} >
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
              showSkip={state.fullscreen? true : props.showSkipButton}
              iconPlaySize={state.fullscreen? 76 : props.iconPlaySize}
              iconSkipSize={state.fullscreen? 44 : props.iconSkipSize}
            />

            <VideoBar
              smallBar={props.useSmallBar}
              fullscreen={state.fullscreen}
              onSlideStart={handlePlayPause}
              currentTime={state.currentTime}
              onSlideComplete={handlePlayPause}
              onSlideCapture={(seekTime) => onSeek(seekTime)}
              duration={state.duration > 0 ? state.duration : 0}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

VideoPlayer.propTypes = {
  style : PropTypes.object,
  onVideoEnd : PropTypes.func,
  videoLink : PropTypes.string,
  useSmallBar : PropTypes.bool,
  videoStyle : PropTypes.object,
  posterLink : PropTypes.string,
  iconPlaySize : PropTypes.number,
  iconSkipSize : PropTypes.number,
  showSkipButton : PropTypes.bool,
  showBackButton : PropTypes.bool,
  controllerStyle : PropTypes.object,
  fullscreenStyle : PropTypes.object,
  onFullScreenPress : PropTypes.func,
  videoFullscreenStyle : PropTypes.object,
  controllerFullscreenStyle : PropTypes.object,
}


export default VideoPlayer
