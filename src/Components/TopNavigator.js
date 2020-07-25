import React from 'react';
import {StyleSheet} from 'react-native';
import {TopNavigation, TopNavigationAction, Text} from '@ui-kitten/components';
import {BackIcon} from './Icon';
import {textBasic, textContent} from './Color';
import {useNavigation} from '@react-navigation/native';

export default function TopNavigator(props) {
  const navigation = useNavigation();
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );
  return (
    <TopNavigation
      accessoryLeft={BackAction}
      title={<Text style={style.iconNavigation}>{props.title}</Text>}
      style={{
        backgroundColor: 'white',
      }}
    />
  );
}

const style = StyleSheet.create({
  iconNavigation: {
    fontSize: 17,
    color: textBasic,
    fontWeight: 'bold',
  },
});
