import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import { Color } from '../../assets'
import { styles } from './shimmer.style'

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
      <SkeletonPlaceholder backgroundColor={'#ECF0F1'}>
        <View style={styles.container}>
          <View style={styles.containerImg} />
          <View style={styles.containerTxt}>
            <View style={styles.ViewTitle} />
            <View style={styles.ViewTxt1}/>
            <View style={styles.ViewTxt2}/>
            <View style={styles.ViewTxt3}/>
          </View>
        </View>
      </SkeletonPlaceholder>
    </Card>
  )
}

const ShimmerCardPromotion = () => {
  return(
    <SkeletonPlaceholder backgroundColor={'#ECF0F1'}>
      <View style={{
        height: 100,
        borderWidth: 0,
        borderRadius: 20,
        maxWidth: '100%',
        borderColor: Color.transparent,
        backgroundColor: Color.greyMedium, }}/>
    </SkeletonPlaceholder>
  )
}

const ShimmerListCategory = () => {
  return(
    <SkeletonPlaceholder backgroundColor={'#ECF0F1'}>
      <View style={{
        height: 100,
        marginTop: '20%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '8%',
        justifyContent: 'space-between',
      }}>
         <View style={{
            width: 50,
            height: 50,
            padding: 10,
            elevation: 2,
            borderRadius: 30,
            backgroundColor: Color.white,
          }}/>
          <View style={{
            width: 50,
            height: 50,
            padding: 10,
            elevation: 2,
            borderRadius: 30,
            backgroundColor: Color.white,
          }}/>
          <View style={{
            width: 50,
            height: 50,
            padding: 10,
            elevation: 2,
            borderRadius: 30,
            backgroundColor: Color.white,
          }}/>
      </View>
      <View style={{
        height: 100,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '8%',
        justifyContent: 'space-between',
      }}>
         <View style={{
            width: 50,
            height: 50,
            padding: 10,
            elevation: 2,
            borderRadius: 30,
            backgroundColor: Color.white,
          }}/>
          <View style={{
            width: 50,
            height: 50,
            padding: 10,
            elevation: 2,
            borderRadius: 30,
            backgroundColor: Color.white,
          }}/>
          <View style={{
            width: 50,
            height: 50,
            padding: 10,
            elevation: 2,
            borderRadius: 30,
            backgroundColor: Color.white,
          }}/>
      </View>
    </SkeletonPlaceholder>
  )
}

const ShimmerCardClassPopuler = () => {
  return(
    <View style={{ flex:1,
      height: 210,
      // elevation: 2,
      width: '100%',
      borderWidth: 0,
      borderRadius: 20,
      alignSelf:'center',
      marginVertical :10,
      shadowColor: '#000',
      borderColor: '#dddddd',
      backgroundColor: Color.white }}>
      <SkeletonPlaceholder backgroundColor={'#ECF0F1'}>
        <View style={{
          height: 120,
          borderWidth: 0,
          maxWidth: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: Color.transparent,
          backgroundColor: Color.greyMedium, }}
        />
        <View style={{
          height: 10,
          marginTop: 8,
          borderWidth: 0,
          borderRadius: 5,
          marginHorizontal: '3%',
          borderColor: Color.transparent,
        }}/>
        <View style={{
          width: '80%',
          height: 10,
          marginTop: 5,
          borderWidth: 0,
          borderRadius: 5,
          marginHorizontal: '3%',
          borderColor: Color.transparent,
        }}/>
        <View style={{
          width: '40%',
          height: 10,
          marginTop: 5,
          borderWidth: 0,
          borderRadius: 5,
          marginHorizontal: '3%',
          borderColor: Color.transparent,
        }}/>
        <View style={{
          width: '40%',
          height: 18,
          marginTop: 10,
          borderWidth: 0,
          borderRadius: 5,
          marginHorizontal: '3%',
          borderColor: Color.transparent,
        }}/>
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
      // elevation: 3,
      borderWidth: 0,
      borderRadius: 20,
      marginVertical: 8,
      marginHorizontal: 12, }}>
      <SkeletonPlaceholder backgroundColor={'#ECF0F1'}>
        <View style={{
          width: '100%',
          height: 120,
          borderWidth: 0,
          shadowRadius: 2.22,
          shadowColor: '#000',
          shadowOpacity: 0.22,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowOffset: { width: 0, height: 1 }, }}
        />
        <View style={{
          height: 10,
          marginTop: 6,
          borderWidth: 0,
          borderRadius: 5,
          marginHorizontal: '3%',
          borderColor: Color.transparent,
        }}/>
        <View style={{
          height: 10,
          marginTop: 6,
          borderWidth: 0,
          borderRadius: 5,
          marginHorizontal: '3%',
          borderColor: Color.transparent,
        }}/>
        <View style={{
          height: 10,
          marginTop: 6,
          borderWidth: 0,
          borderRadius: 5,
          marginHorizontal: '3%',
          borderColor: Color.transparent,
        }}/>
        <View style={{
          height: 24,
          left: '63%',
          width: '30%',
          marginTop: 15,
          marginHorizontal: '3%',
          borderWidth: 0,
          borderRadius: 5,
          borderColor: Color.transparent,
        }}/>
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
  ShimmerListCategory,
  ShimmerCardPromotion,
  ShimmerInspiratifStory,
  ShimmerCardClassPopuler,
  ShimmerCardInspiratifStory,
}