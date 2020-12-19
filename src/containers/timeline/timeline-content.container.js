import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Icon, 
  Avatar, 
} from '@ui-kitten/components';

import { 
  Shimmer,
  TextView,
 } from '../../components'

 import { Color } from '../../assets'
 import DataContent from './column-content.json'

 import { styles } from './timeline.style'

const TimelineContent = () => {
  const [like, setLike] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [addLike, setAddLike] = React.useState(false);
  const [shimmer, setShimmer] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const handleLike = () => {
    setLike(!like);
    if (like === true) {
      setAddLike(true);
    } else {
      setAddLike(false);
    }
  }

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    setShimmer(false);
    wait(200).then(async () => {
      setRefreshing(false);
      setShimmer(true);
    });
  }, [refreshing]);

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
            // refreshControl={
            //   <RefreshControl
            //     refreshing={refreshing}
            //     onRefresh={onRefreshing}
            //   />
            // }
            keyExtractor={(i, idx) => idx}
            data={DataContent}
            renderItem={({item, index}) => (
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
                  <View style={{marginTop: 10, marginHorizontal: 15}}>
                    <Shimmer
                      style={styles.likeShimmer}
                      visible={shimmer}
                      component={
                        <View style={{flexDirection: 'row'}}>
                          <TouchableOpacity onPress={() => handleLike()}>
                            <Icon
                              fill={like ? 'red' : Color.textHintContent}
                              name={like ? 'heart' : 'heart-outline'}
                              style={{width: 24, height: 24}}
                            />
                          </TouchableOpacity>
                          <Text style={styles.textLike}>
                            {addLike ? item.like : item.like + 1} suka
                          </Text>
                        </View>
                      }
                    />
                    <View style={{marginTop: 20}}>
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
                              textStyle={{textAlign: 'left', marginTop: 15}}
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
    );
  };

  return isLoading ? <Loading /> : renderData();
}
export default TimelineContent;