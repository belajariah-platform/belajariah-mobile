import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TopNavigation, TopNavigationAction, Text} from '@ui-kitten/components';
import {BackIcon} from './Icon';
import {Color} from '../Themes/Colors';
import {FontType} from '../Themes/Fonts';

export default function TopNavigator(props) {
  const navigation = useNavigation();
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );
  return (
    <TopNavigation
      accessoryLeft={props.backIcon ? BackAction : false}
      title={<Text style={style.iconNavigation}>{props.title}</Text>}
      style={{
        backgroundColor: 'white',
        paddingHorizontal: props.backIcon ? 0 : 20,
      }}
    />
  );
}

const style = StyleSheet.create({
  iconNavigation: {
    fontSize: 16,
    color: Color.textBasic,
    fontFamily: FontType.bold,
  },
});
