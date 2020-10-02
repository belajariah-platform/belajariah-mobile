import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Text, Avatar, styled} from '@ui-kitten/components';
import {FontType} from '../../../Themes/Fonts';
import {Color} from '../../../Themes/Colors';

function HeaderTimeline(props) {
  return (
    <View style={style.layoutTop}>
      <TouchableOpacity style={style.bgIcon}>
        <Icon
          fill={Color.iconColor}
          name="more-vertical-outline"
          style={{width: 22, height: 22}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.bgIcon2}>
        <Icon
          fill={Color.iconColor}
          name="search"
          style={{width: 22, height: 22}}
        />
      </TouchableOpacity>
    </View>
  );
}
export default HeaderTimeline;
const style = StyleSheet.create({
  layoutTop: {
    paddingHorizontal: 10,
    paddingTop: 35,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: -100,
  },
  bgIcon: {
    width: 38,
    height: 38,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 60,
    position: 'absolute',
    left: 0,
    marginTop: 34.5,
    marginLeft: 17,
  },
  bgIcon2: {
    width: 38,
    height: 38,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 60,
    position: 'absolute',
    right: 0,
    marginTop: 34.5,
    marginRight: 17,
  },
});
