import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  YellowBox,
  RefreshControl,
} from 'react-native';
import {Avatar, Icon, Text} from '@ui-kitten/components';
import {textContent, textHintBold} from '../../Components/Color';
import {Contents2} from './Components/Data';
import Shimmer from '../../Components/Shimmer';
import ViewMore from '../../Components/ViewMore';
import LoaderPage from '../../Components/LoaderPage';

YellowBox.ignoreWarnings(['Warning: Failed child context type']);

function News(props) {
  const [like, setLike] = React.useState(false);
  const [addLike, setAddLike] = React.useState(false);
  const [shimmer, setShimmer] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    setShimmer(false);
    setTimeout(function load() {
      setShimmer(true);
    }, 3000);
  }, []);

  const handleLike = () => {
    setLike(!like);
    if (like === true) {
      setAddLike(true);
    } else {
      setAddLike(false);
    }
  };

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    setShimmer(false);
    wait(200).then(async () => {
      setRefreshing(false);
      setShimmer(true);
    });
  }, [refreshing]);

  return (
    <View style={{flex: 1, marginTop: 2}}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
        }
        keyExtractor={(i, idx) => idx}
        data={Contents2}
        renderItem={({item, index}) => (
          <>
            <View style={style.layoutContent}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <Shimmer
                  visible={shimmer}
                  style={style.Avatar}
                  component={
                    <Avatar source={item.picture} style={style.Avatar} />
                  }
                />
                <Shimmer
                  style={style.textName}
                  visible={shimmer}
                  component={<Text style={style.textName}>{item.name}</Text>}
                />
              </View>
              <Shimmer
                style={style.banner}
                visible={shimmer}
                component={<Image style={style.banner} source={item.banner} />}
              />
              <View style={{marginTop: 10, marginHorizontal: 15}}>
                <Shimmer
                  style={style.likeShimmer}
                  visible={shimmer}
                  component={
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => handleLike()}>
                          <Icon
                            fill={like ? 'red' : '#8F9BB3'}
                            name={like ? 'heart' : 'heart-outline'}
                            style={{width: 24, height: 24}}
                          />
                        </TouchableOpacity>
                        <Text style={style.textLike}>
                          {addLike ? item.like : item.like + 1} suka
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '75%',
                        }}>
                        <TouchableOpacity
                          style={{position: 'absolute', right: 0}}
                          activeOpacity={0.4}>
                          <Icon
                            fill={'#8F9BB3'}
                            name={'link'}
                            style={style.iconLink}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                />
                <View style={{marginTop: 20}}>
                  <Shimmer
                    style={style.textContentShimmer}
                    visible={shimmer}
                    component={
                      <>
                        <ViewMore
                          textStyle={{textAlign: 'left', marginTop: 15}}
                          component={
                            <Text style={style.textContent}>
                              {item.content}
                            </Text>
                          }
                        />
                        <Text style={{fontSize: 12, color: textHintBold}}>
                          {item.time}
                        </Text>
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
  );
}
export default News;
const style = StyleSheet.create({
  layoutContent0: {
    backgroundColor: 'white',
    height: 200,
    marginTop: 2,
    marginBottom: 5,
  },
  layoutContent: {
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  Avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  iconLink: {
    width: 24,
    height: 24,
  },
  banner: {
    backgroundColor: '#dcdcdd',
    marginTop: 15,
    width: '100%',
    height: 375,
  },
  textName: {
    marginTop: 6,
    marginLeft: 10,
    fontSize: 14,
    color: textContent,
    fontWeight: '700',
    width: 100,
    borderRadius: 5,
  },
  textLike: {
    color: textContent,
    fontSize: 11,
    marginLeft: 5,
    marginTop: 4,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: textContent,
    borderRadius: 5,
    width: '100%',
  },
  textContent: {
    fontSize: 13,
    color: textContent,
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 16,
  },

  likeShimmer: {
    width: 100,
    borderRadius: 5,
  },
  textContentShimmer: {
    borderRadius: 5,
    width: '100%',
    height: 50,
  },
});
