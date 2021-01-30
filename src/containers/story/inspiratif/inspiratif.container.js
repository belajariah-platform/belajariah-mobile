import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { Images, Color } from '../../../assets'
import { Searchbox } from '../../../components'

import styles from './inspiratif.style'

const InspiratifStory = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const state = [
    { title : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, description : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
    { title : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, description : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
    { title : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, description : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
    { title : 'Jadi Sukses, Belajar dari Sandiaga Uno', images: Images.IconTokohInspiratif, description : 'Tokoh Inspiratif "Sandiaga Uno", pengusaha dan politikus Indonesia yang menjadi Menteri' },
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
          size={30}
          color={Color.purpleMedium}/>
      </View>
    ) : null
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Bacaan Inspiratif</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Search = () => {
    return(
      <View style={styles.containerSearch}>
        <Searchbox
          size='medium'
          style={styles.searchbox}
          placeholder='Telusuri Bacaan Inpiratif'
          accessoryRight={() => (
            <Images.Search.default style={{ marginRight: -12 }} />
          )}
        />
      </View>
    )
  }

  const Inspiratif = () => {
    return(
      <View>
        <FlatList
          data={state}
          style={{ width:'100%' }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          onEndReached={(e) => onLoadMore(e)}
          showsVerticalScrollIndicator ={false}
          contentContainerStyle={{ paddingBottom: 140 }}
          keyExtractor={(item, index) =>  index.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() =>  navigation.navigate('InspiratifStoryDetail')}>
                <Card
                  containerStyle={styles.cardStyle}>
                  <View style={styles.viewStyle}>
                    <Image source={item.images} style={styles.imageStyle}/>
                    <View style={styles.containerDesc}>
                      <Text style={styles.textStyle}>{item.title}</Text>
                      <Text style={styles.description}>
                        {item.description.substring(0, 70)} ...
                      </Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
          }
        />
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <Search />
      <Inspiratif />
    </View>
  )
}

export default InspiratifStory
