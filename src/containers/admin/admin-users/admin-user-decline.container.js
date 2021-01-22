import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import {
  View,
  Image,
  FlatList,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { Images } from '../../../assets'
import { TimeConvert } from '../../../utils'
import { styles } from './admin-user.style'

const AdminUserDecline = () => {
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const state = [
    { username : 'Rico Wijaya', created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 74, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { username : 'Rico Wijaya', created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 60, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { username : 'Rico Wijaya', created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 60, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
  ]

  const onRefreshing = () => {
    setRefreshing(true)
    setRefreshing(false)
  }

  const onLoadMore = (e) => {
    if (e.distanceFromEnd >= 0) {
      setLoading(true)
    }
  }

  const renderFooter = () => {
    return loading ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          color='white'
          size={30}
          style={styles.indicator} />
      </View>
    ) : null
  }

  const CardUser = (item, index) => {
    return(
      <View key={index}>
        <Card containerStyle={styles.cardUserOpacity}>
          <View style={styles.ViewInstructorInfo}>
            <Image
              source={Images.AvatarUser1}
              style={{ ...styles.avatarUser, opacity : 0.5 }}/>
            <View style={{ flex : 1 }}>
              <Text
                style={{ ...styles.textUsername, opacity : 0.5 }}>
                {item.username}
              </Text>
              <Text
                style={{ ...styles.TxtTimeTitle,  opacity : 0.5 }}>
                {'8:12 AM (06/01/2021)'}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.iconAccept}>
              <Images.IconRejectStatus.default/>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButtonAction}>
            <View style={styles.ViewButtonAction}>
              <TouchableOpacity>
                <Images.IconPlay.default
                  width={20}
                  height={20}
                  style={{ marginRight: 5 }}/>
              </TouchableOpacity>
              <Images.GrafisVoice.default
                width={100}
                height={20}
                style={{ marginRight: 5 }}/>
              <Text style={styles.textDuration}>{TimeConvert(item.voice_duration)}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ marginRight: 5 }}>
              <Images.IconDownloadVoice.default/>
            </TouchableOpacity>
          </View>
          <List.Section>
            <List.Accordion
              title='Deskripsi voice'
              titleStyle={{ ...styles.textRegular, opacity : 0.5 }}
              style={styles.containerAccordion}>
              <View>
                <Text
                  style={{ ...styles.description, opacity : 0.5 }}>
                  {item.voice_description}
                </Text>
              </View>
            </List.Accordion>
          </List.Section>
          <TouchableOpacity>
            <Text style={styles.textButtonDelete}>Delete</Text>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        <FlatList
          data={state}
          style={{ width:'100%' }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          onEndReached={(e) => onLoadMore(e)}
          showsVerticalScrollIndicator ={false}
          keyExtractor={(item, index) =>  index.toString()}
          renderItem={({ item, index }) => CardUser(item, index)}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}/>
      </ImageBackground>
    </View>
  )
}

export default AdminUserDecline