import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Button, SearchBar} from 'react-native-elements';
import {Icon, styled} from '@ui-kitten/components';
import ActionSheet from 'react-native-actions-sheet';

function ActionSheets(props) {
  return (
    <View>
      <ActionSheet ref={props.visible}>
        <View style={{height: 300}} />
      </ActionSheet>
    </View>
  );
}
export default ActionSheets;

const style = StyleSheet.create({});
