import React from 'react';
import ActionSheet from 'react-native-actions-sheet';

import { View } from 'react-native';

const ActionSheets = (props) => {
  return (
    <View>
      <ActionSheet ref={props.visible}>
        <View style={{height: 300}} />
      </ActionSheet>
    </View>
  );
}
export default ActionSheets;
