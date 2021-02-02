import moment from 'moment'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
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

const AdminUserAccept = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const state = [
    { username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 74, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 60, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 60, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
    { username : 'Rico Wijaya', images: Images.ImageProfileDefault, created_date : new Date(), voice_status : 'Waiting for Approval', voice_duration : 60, voice_description : 'lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum' },
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
          size={30} />
      </View>
    ) : null
  }

  const CardUser = (item, index) => {
    return(
      <View key={index}>
        <Card containerStyle={styles.cardUser}>
          <View style={styles.ViewInstructorInfo}>
            <Image source={item.images} style={styles.avatarUser}/>
            <TouchableOpacity
              style={{ flex : 1 }}
              activeOpacity={0.5}
              onPress={()=> {navigation.navigate('AdminProfileAll', item)}}
            >
              <Text style={styles.textUsername}>{item.username}</Text>
              <Text style={styles.TxtTimeTitle}>
                {moment(new Date()).format('h:mm A')} ({moment(new Date()).format('L')})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.iconAccept}>
              <Images.IconAcceptStatus.default/>
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
            <List.Accordion title='Deskripsi konsultasi' titleStyle={styles.textRegular} style={styles.containerAccordion}>
              <View>
                <Text style={styles.description}>{item.voice_description}</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </Card>
      </View>
    )
  }

  return(
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
          contentContainerStyle={{ paddingBottom: 25 }}
          keyExtractor={(item, index) =>  index.toString()}
          renderItem={({ item, index }) => CardUser(item, index)}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}/>
      </ImageBackground>
    </View>
  )
}

export default AdminUserAccept