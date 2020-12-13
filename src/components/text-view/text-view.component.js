import React from 'react'
import {styles} from './text-view.style'
import {Text} from '@ui-kitten/components'
import ViewMoreText from 'react-native-view-more-text'

const renderViewMore = onPress => {
  return (
    <Text style={styles.viewMore} onPress={onPress}>
      View more...
    </Text>
  );
};
const renderViewLess = onPress => {
  return (
    <Text style={styles.viewMore} onPress={onPress}>
      View less
    </Text>
  );
};

const TextView = (props) => {
  return (
    <ViewMoreText
      numberOfLines={3}
      renderViewMore={renderViewMore}
      renderViewLess={renderViewLess}>
      {props.component}
    </ViewMoreText>
  );
}

export default TextView