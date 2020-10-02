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

function CategoryClass(props) {
  return (
    <View>
      <Text
        style={{
          fontFamily: FontType.bold,
          color: Color.textContent,
          fontSize: 16,
        }}>
        Kategori Kelas
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: 15,
          marginBottom: 40,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryClass &&
            categoryClass.map((val, i) => (
              <TouchableOpacity key={i} activeOpacity={0.5}>
                <Image
                  source={val.image}
                  style={{
                    backgroundColor: '#eeedf2',
                    width: 150,
                    height: 100,
                    marginRight: 20,
                    borderRadius: 15,
                  }}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}
export default CategoryClass;

const style = StyleSheet.create({});
