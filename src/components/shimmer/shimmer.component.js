import React from 'react'
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import { styles } from './shimmer.style'
import { Color } from '../../assets'

const ShimmerInspiratifStory = () => {
  return(
    <Card
      containerStyle={styles.shimmerStory}>
      <SkeletonPlaceholder backgroundColor={Color.shimmer}>
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
    <SkeletonPlaceholder backgroundColor={Color.shimmer}>
      <View style={styles.shimmerPromo}/>
    </SkeletonPlaceholder>
  )
}

const ShimmerListCategory = () => {
  return(
    <SkeletonPlaceholder backgroundColor={Color.shimmer}>
      <View style={styles.shimmerCategory}/>
    </SkeletonPlaceholder>
  )
}

const ShimmerCardClassPopuler = () => {
  return(
    <View style={styles.shimmerClass}>
      <SkeletonPlaceholder backgroundColor={Color.shimmer}>
        <View style={styles.shimmerClass1}/>
        <View style={styles.shimmerClass2}/>
        <View style={styles.shimmerClass3}/>
        <View style={styles.shimmerClass4}/>
        <View style={styles.shimmerClass5}/>
      </SkeletonPlaceholder>
    </View>
  )
}

const ShimmerCardInspiratifStory = () => {
  return(
    <Card containerStyle={styles.shimmerStoryPage}>
      <SkeletonPlaceholder backgroundColor={Color.shimmer}>
        <View style={styles.shimmerStoryPage1}/>
        <View style={styles.shimmerStoryPage2}/>
        <View style={styles.shimmerStoryPage3}/>
        <View style={styles.shimmerStoryPage4}/>
        <View style={styles.shimmerStoryPage5}/>
      </SkeletonPlaceholder>
    </Card>
  )
}

export {
  ShimmerListCategory,
  ShimmerCardPromotion,
  ShimmerInspiratifStory,
  ShimmerCardClassPopuler,
  ShimmerCardInspiratifStory,
}