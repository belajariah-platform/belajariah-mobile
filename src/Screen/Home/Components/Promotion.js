import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import {categoryClass} from './Category';
import {FontType} from '../../../Themes/Fonts';
import {Color} from '../../../Themes/Colors';

function Promotion(props) {
  return (
    <View style={{paddingHorizontal: 20, paddingTop: 40}}>
      <Text
        style={{
          fontFamily: FontType.bold,
          color: 'white',
          fontSize: 16,
        }}>
        Spesial Buat Kamu
      </Text>
      <View
        style={{
          marginBottom: 60,
          paddingTop: 15,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryClass &&
            categoryClass.map((val, i) => (
              <TouchableOpacity key={i} activeOpacity={0.5}>
                <Image
                  source={val.image}
                  style={{
                    backgroundColor: '#eeedf2',
                    width: 260,
                    height: 90,
                    marginRight: 20,
                    borderRadius: 15,
                  }}
                />
                <TouchableOpacity activeOpacity={0.9}>
                  <Text style={style.seeMore}>Ambil</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}
export default Promotion;

const style = StyleSheet.create({
  seeMore: {
    fontFamily: FontType.semiBold,
    fontSize: 12,
    color: 'black',
    backgroundColor: Color.bgColorYel,
    width: 70,
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 3,
    marginTop: -33,
    marginLeft: 190,
  },
});
