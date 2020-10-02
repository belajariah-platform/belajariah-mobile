import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  Text,
} from 'react-native';
import {MainFeature} from './Category';
import {FontType} from '../../../Themes/Fonts';
import {Color} from '../../../Themes/Colors';
import LinearGradient from 'react-native-linear-gradient';

function MainFiture(props) {
  return (
    <View>
      <LinearGradient
        colors={['#8743d1', '#713bae']}
        style={{
          marginBottom: 40,
          backgroundColor: Color.bgColor,
          paddingVertical: 30,
          borderRadius: 20,
          height: 150,
        }}>
        {/* <ImageBackground
          source={require('../../../Helpers/Image/mainfiture.png')}
          style={{
            resizeMode: 'cover',
            width: '100%',
            height: 120,
            paddingTop: 10,
          }}> */}
        <FlatList
          keyExtractor={(val, index) => index}
          style={{alignSelf: 'center'}}
          data={MainFeature}
          numColumns={3}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                marginHorizontal: 10,
              }}>
              <Image
                source={item.image}
                style={{
                  backgroundColor: '#eeedf2',
                  borderRadius: 15,
                  width: 50,
                  height: 50,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 11.5,
                  fontFamily: FontType.bold,
                  textAlign: 'center',
                  width: 80,
                  marginTop: 7,
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
        {/* </ImageBackground> */}
      </LinearGradient>
    </View>
  );
}
export default MainFiture;

const style = StyleSheet.create({});
