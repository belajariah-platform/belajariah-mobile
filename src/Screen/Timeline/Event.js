import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import {Contents3} from './Components/Data';
import EventTag from './Components/EventTag';
import Shimmer from '../../Components/Shimmer';
import ImageView from '../../Components/ImageView';
import {Color} from '../../Themes/Colors';
import {FontType} from '../../Themes/Fonts';

function Event(props) {
  const [like, setLike] = React.useState(false);
  const [addLike, setAddLike] = React.useState(false);
  const [shimmer, setShimmer] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [viewImage, setViewImage] = React.useState(false);
  const [images, setImages] = React.useState('');
  console.log(Contents3);

  // React.useEffect(() => {
  //   setShimmer(false);
  //   setTimeout(function load() {
  //     setShimmer(true);
  //   }, 3000);
  // }, []);
  const handleLike = () => {
    setLike(!like);
    if (like === true) {
      setAddLike(true);
    } else {
      setAddLike(false);
    }
  };

  const handleImageView = (bool, banner) => {
    console.log('ok', banner);
    setViewImage(bool);
    setImages(banner);
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
    <>
      <EventTag />
      <ImageView view={viewImage} setViewImage={setViewImage} image={images} />
      <View style={{flex: 9}}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
          }>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 30,
              backgroundColor: 'white',
            }}>
            <Text style={style.totalEvent}>{Contents3.length} Event</Text>
            <FlatList
              keyExtractor={(i, idx) => idx}
              data={Contents3}
              renderItem={({item, index}) => (
                <>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={{flexDirection: 'row', marginBottom: 25}}>
                      <Shimmer
                        style={style.banner}
                        visible={shimmer}
                        component={
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => handleImageView(true, item.banner)}>
                            <Image style={style.banner} source={item.banner} />
                          </TouchableOpacity>
                        }
                      />

                      <View>
                        <Shimmer
                          style={{...style.dateTime, width: 120}}
                          visible={shimmer}
                          component={
                            <View style={{flexDirection: 'row'}}>
                              <Text style={style.dateTime}>{item.date}</Text>
                              <Text style={style.dateTime}>{item.time}</Text>
                            </View>
                          }
                        />
                        <Shimmer
                          style={{
                            ...style.title,
                            marginTop: 7,
                            marginBottom: 5,
                          }}
                          visible={shimmer}
                          component={
                            <Text style={style.title}>
                              {item.title !== item.title.substring(0, 56)
                                ? `${item.title.substring(0, 56) + '...'}`
                                : item.title}
                            </Text>
                          }
                        />
                        <Shimmer style={style.title} visible={shimmer} />
                        <Shimmer
                          style={{...style.location, width: 70, marginTop: 10}}
                          visible={shimmer}
                          component={
                            <Text style={style.location}>{item.location}</Text>
                          }
                        />

                        <TouchableOpacity
                          style={style.iconLIke}
                          onPress={() => handleLike()}>
                          <Icon
                            fill={like ? 'red' : Color.textHintContent}
                            name={like ? 'heart' : 'heart-outline'}
                            style={{width: 20, height: 20}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
export default Event;

const style = StyleSheet.create({
  totalEvent: {fontSize: 16, marginBottom: 20},
  banner: {
    borderRadius: 4,
    width: 95,
    height: 95,
    backgroundColor: '#eeedf2',
    marginRight: 15,
  },
  dateTime: {
    fontSize: 13.5,
    fontWeight: 'bold',
    color: Color.bgColor,
    marginBottom: 4,
    borderRadius: 5,
  },
  title: {color: Color.textContent, fontSize: 15, width: 220, borderRadius: 5},
  location: {
    color: Color.textHintContent,
    fontSize: 13,
    marginTop: 5,
    borderRadius: 5,
  },
  iconLIke: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 5,
  },
});
