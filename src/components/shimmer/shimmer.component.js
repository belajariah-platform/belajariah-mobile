import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import { Color } from '../../assets'

const Shimmer = (props) => {
  return (
    <ShimmerPlaceHolder
      autoRun={true}
      colorShimmer={['#eeedf2', '#e6e4ea', '#eeedf2']}
      duration={1000}
      visible={props.visible}
      {...props}>
      {props.component}
    </ShimmerPlaceHolder>
  )
}

const ShimmerInspiratifStory = () => {
  return(
    <Card
      containerStyle={{
        padding: 15,
        width: 'auto',
        height: 'auto',
        borderWidth : 0,
        borderRadius: 20, }}
    >
      <SkeletonPlaceholder >
        <View style={{ flexDirection: 'row', }}>
          <View style={{ width: 110, height: 102, marginRight: 10, borderRadius: 20, }} />
          <View style={{ marginLeft: 10, }}>
            <View style={{ width: 170, height: 20, borderRadius: 4 }} />
            <View style={{ marginTop: 6, width: 150, height: 15, borderRadius: 4 }}/>
            <View style={{ marginTop: 24, width: 150, height: 12, borderRadius: 4 }}/>
            <View style={{ marginTop: 6, width: 160, height: 12, borderRadius: 4 }}/>
          </View>
        </View>
      </SkeletonPlaceholder>
    </Card>
  )
}

const ShimmerCardPromotion = () => {
  return(
    <SkeletonPlaceholder >
      <View style={{
        height: 100,
        borderWidth: 0,
        borderRadius: 20,
        maxWidth: '100%',
        borderColor: Color.transparent,
        backgroundColor: Color.greyMedium, }}>
      </View>
    </SkeletonPlaceholder>
  )
}

const ShimmerCardClassPopuler = () => {
  return(
    <View style={{ flex:1,
      height: 210,
      elevation: 2,
      width: '100%',
      borderWidth: 0,
      borderRadius: 20,
      alignSelf:'center',
      marginVertical :10,
      shadowColor: '#000',
      borderColor: '#dddddd',
      backgroundColor: Color.white }}>
      <SkeletonPlaceholder >
        <View style={{
          height: 210,
          borderWidth: 0,
          borderRadius: 20,
          maxWidth: '100%',
          borderColor: Color.transparent,
          backgroundColor: Color.greyMedium, }}>
        </View>
      </SkeletonPlaceholder>
    </View>
  )
}

const ShimmerCardInspiratifStory = () => {
  return(
    <Card containerStyle={{
      padding:0,
      width: 296,
      height: 227,
      elevation: 3,
      borderWidth: 0,
      borderRadius: 20,
      marginVertical: 8,
      shadowRadius: 2.22,
      shadowColor: '#000',
      shadowOpacity: 0.22,
      marginHorizontal: 12,
      shadowOffset: { width: 0, height: 1 }, }}>
      <SkeletonPlaceholder >
        <View style={{
          width: '100%',
          height: '100%',
          elevation: 3,
          borderWidth: 0,
          borderRadius: 20,
          shadowRadius: 2.22,
          shadowColor: '#000',
          shadowOpacity: 0.22,
          shadowOffset: { width: 0, height: 1 }, }}>
        </View>
      </SkeletonPlaceholder>
    </Card>
  )
}

Shimmer.propTypes = {
  visible : PropTypes.bool,
  component : PropTypes.object,
}

export {
  Shimmer,
  ShimmerCardPromotion,
  ShimmerInspiratifStory,
  ShimmerCardClassPopuler,
  ShimmerCardInspiratifStory,
}