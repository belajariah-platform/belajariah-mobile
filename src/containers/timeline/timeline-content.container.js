import React, { useState } from 'react'
import { View, Image, FlatList, TouchableOpacity } from 'react-native'
import { Text, Icon, Avatar } from '@ui-kitten/components'

import { Shimmer, TextView } from '../../components'

import { Color } from '../../assets'
import DataContent from './column-content.json'

import { styles } from './timeline.style'

const TimelineContent = () => {
  const [like, setLike] = useState(false)
  const [addLike, setAddLike] = useState(false)
  const [shimmer] = useState(true)

  const handleLike = () => {
    setLike(!like)
    if (like === true) {
      setAddLike(true)
    } else {
      setAddLike(false)
    }
  }

  const renderData = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 6,
            backgroundColor: 'white',
          }}>
          <FlatList
            keyExtractor={( idx) => idx}
            data={DataContent}
            renderItem={({ item }) => (
              <>
                <View style={styles.layoutContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 15,
                    }}>
                    <Shimmer
                      visible={shimmer}
                      style={styles.Avatar}
                      component={
                        <Avatar source={item.picture} style={styles.Avatar} />
                      }
                    />
                    <Shimmer
                      style={styles.textName}
                      visible={shimmer}
                      component={
                        <Text style={styles.textName}>{item.name}</Text>
                      }
                    />
                  </View>
                  <Shimmer
                    style={styles.banner}
                    visible={shimmer}
                    component={
                      <Image style={styles.banner} source={item.banner} />
                    }
                  />
                  <View style={{ marginTop: 10, marginHorizontal: 15 }}>
                    <Shimmer
                      style={styles.likeShimmer}
                      visible={shimmer}
                      component={
                        <View style={{ flexDirection: 'row' }}>
                          <TouchableOpacity onPress={() => handleLike()}>
                            <Icon
                              fill={like ? 'red' : Color.textHintContent}
                              name={like ? 'heart' : 'heart-outline'}
                              style={{ width: 24, height: 24 }}
                            />
                          </TouchableOpacity>
                          <Text style={styles.textLike}>
                            {addLike ? item.like : item.like + 1} suka
                          </Text>
                        </View>
                      }
                    />
                    <View style={{ marginTop: 20 }}>
                      <Shimmer
                        style={styles.textTitle}
                        visible={shimmer}
                        component={
                          <Text style={styles.textTitle}>{item.title}</Text>
                        }
                      />
                      <Shimmer
                        style={styles.textContentShimmer}
                        visible={shimmer}
                        component={
                          <>
                            <TextView
                              textStyle={{ textAlign: 'left', marginTop: 15 }}
                              component={
                                <Text style={styles.textContent}>
                                  {item.content}
                                </Text>
                              }
                            />
                            <Text style={styles.time}>{item.time}</Text>
                          </>
                        }
                      />
                    </View>
                  </View>
                </View>
              </>
            )}
          />
        </View>
      </View>
    )
  }

  return renderData()
}
export default TimelineContent
