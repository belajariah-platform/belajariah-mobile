import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Text,
} from 'react-native';
import {allClass} from './Category';
import {FontType} from '../../../Themes/Fonts';
import {Color} from '../../../Themes/Colors';

function Classes(props) {
  return (
    <>
      <Text
        style={{
          fontFamily: FontType.bold,
          color: Color.textContent,
          fontSize: 16,
        }}>
        Pilih Kelas
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: 15,
          marginBottom: 20,
          marginLeft: -20,
        }}>
        <FlatList
          keyExtractor={(val, index) => index}
          data={allClass}
          numColumns={3}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                marginHorizontal: 20,
                marginBottom: 20,
              }}>
              <Image
                source={item.image}
                style={{
                  backgroundColor: '#eeedf2',
                  borderRadius: 15,
                  width: 60,
                  height: 60,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 11.5,
                  fontFamily: FontType.regular,
                  textAlign: 'center',
                  width: 80,
                  marginTop: 7,
                  color: Color.textContent,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
export default Classes;

const style = StyleSheet.create({});
