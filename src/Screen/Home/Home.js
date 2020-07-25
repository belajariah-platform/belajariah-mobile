import React, {createRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Button, SearchBar} from 'react-native-elements';
import {Icon, Text} from '@ui-kitten/components';
import {categoryClass} from './Components/Category';
import ActionSheets from '../../Components/ActionSheet';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const actionSheetRef = createRef();

function Home(props) {
  return (
    <View style={{flex: 1}}>
      {<ActionSheets visible={actionSheetRef} />}
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',

          paddingTop: 10,
          paddingHorizontal: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <SearchBar
            placeholder="Cari kelasmu ..."
            containerStyle={style.seacrhContainer}
            inputContainerStyle={style.seacrhInput}
            inputStyle={{fontSize: 14}}
          />
          <TouchableOpacity>
            <Icon fill="#8F9BB3" name="bell" style={style.icon} />
          </TouchableOpacity>
        </View>
        <Text style={style.text1}>Assalamualaikum Herry</Text>
        <Text style={style.text2}>Mau belajar apa hari ini</Text>
        <View style={{flexDirection: 'row'}}>
          <ShimmerPlaceHolder
            autoRun={true}
            colorShimmer={['#ebebeb', '#c5c5c5', '#ebebeb']}
            style={{
              marginRight: 20,
              width: 150,
              height: 100,
              marginTop: 30,
              borderRadius: 13,
            }}
            duration={1000}>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible();
              }}>
              <Image
                style={{
                  backgroundColor: '#dcdcdd',
                  marginRight: 20,
                  width: 150,
                  height: 100,
                  marginTop: 30,
                  borderRadius: 13,
                }}
              />
            </TouchableOpacity>
          </ShimmerPlaceHolder>
          <Image
            style={{
              backgroundColor: '#dcdcdd',
              width: 150,
              height: 100,
              marginTop: 30,
              borderRadius: 13,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          marginTop: 6,
          alignItems: 'center',
        }}>
        <FlatList
          numColumns={3}
          keyExtractor={(item, index) => index}
          data={categoryClass}
          renderItem={({item, index}) => (
            <>
              <View>
                <Image
                  style={{
                    backgroundColor: '#dcdcdd',
                    width: 60,
                    height: 60,
                    marginTop: 30,
                    marginHorizontal: 30,
                    borderRadius: 13,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 4,
                    color: '#5f5f5f',
                  }}>
                  {item.title}
                </Text>
              </View>
            </>
          )}
        />
      </View>
      <View style={{backgroundColor: 'white', marginTop: 6}}>
        <></>
      </View>
    </View>
  );
}
export default Home;

const style = StyleSheet.create({
  seacrhContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderWidth: 0,
  },
  seacrhInput: {
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 20,
    height: 45,
    width: 280,
    paddingRight: 20,
  },
  icon: {
    marginTop: 15,
    width: 25,
    height: 30,
  },
  text1: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '700',
  },
  text2: {
    fontSize: 14,
    color: 'grey',
  },
});
