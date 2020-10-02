import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {Text} from '@ui-kitten/components';
import {categoryClass} from './Category';
import {FontType} from '../../../Themes/Fonts';
import {Color} from '../../../Themes/Colors';
import ButtonCustom from '../../../Components/ButtonCustom';

function OtherFeature(props) {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text
        style={{
          fontFamily: FontType.bold,
          color: 'white',
          fontSize: 16,
        }}>
        Fitur Lainnya
      </Text>
      <View
        style={{
          marginBottom: 10,
          paddingTop: 15,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            backgroundColor: '#eeedf2',
            borderRadius: 15,
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginRight: 25,
          }}
        />
        <View style={{width: 200}}>
          <Text
            style={{
              fontFamily: FontType.semiBold,
              color: Color.bgColorYel,
              fontSize: 15,
            }}>
            Kisah Para Nabi dan Sahabat
          </Text>
          <Text
            style={{
              fontFamily: FontType.regular,
              color: Color.bgColorWhite,
              fontSize: 12,
              marginVertical: 5,
            }}>
            Mengisahkan tentang kisah-kisah sirah nabawiyah para sahabat dan
            para tabiin di masanya.
          </Text>
          <TouchableOpacity activeOpacity={0.9}>
            <Text style={style.seeMore}>Lihat semua</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginBottom: 60,
          paddingTop: 15,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            backgroundColor: '#eeedf2',
            borderRadius: 15,
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginRight: 25,
          }}
        />
        <View style={{width: 200}}>
          <Text
            style={{
              fontFamily: FontType.semiBold,
              color: Color.bgColorYel,
              fontSize: 15,
            }}>
            Kisah Ilmuan Islam
          </Text>

          <Text
            style={{
              fontFamily: FontType.regular,
              color: Color.bgColorWhite,
              fontSize: 12,
              marginVertical: 5,
            }}>
            Mengisahkan tentang kisah-kisah sirah nabawiyah para sahabat dan
            para tabiin di masanya.
          </Text>
          {/* <ButtonCustom
            title="Lihat semua"
            style={style.button}
            color={Color.bgColorYel}
          /> */}
          <TouchableOpacity activeOpacity={0.9}>
            <Text style={style.seeMore}>Lihat semua</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default OtherFeature;

const style = StyleSheet.create({
  button: {
    backgroundColor: Color.bgColorWhite,
    borderWidth: 0,
    borderRadius: 20,
    width: 150,
    height: 10,
    marginTop: 5,
  },
  seeMore: {
    fontFamily: FontType.semiBold,
    fontSize: 13,
    color: Color.bgColorWhite,
    backgroundColor: '#ff6666',
    width: 120,
    textAlign: 'center',
    borderRadius: 10,
    paddingVertical: 4,
  },
});
