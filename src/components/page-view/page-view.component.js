import React from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const PageView = (props) => {
  return (
    <View>
      <ActionSheet ref={props.visible}>
        <View style={{height: 300}} />
      </ActionSheet>
    </View>
  );
}
export default PageView;
