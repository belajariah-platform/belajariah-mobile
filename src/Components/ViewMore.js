import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import ViewMoreText from 'react-native-view-more-text';
import {FontType} from '../Themes/Fonts';
import {Color} from '../Themes/Colors';

const renderViewMore = onPress => {
  return (
    <Text style={style.viewMore} onPress={onPress}>
      View more...
    </Text>
  );
};
const renderViewLess = onPress => {
  return (
    <Text style={style.viewMore} onPress={onPress}>
      View less
    </Text>
  );
};

export default function ViewMore(props) {
  return (
    <ViewMoreText
      numberOfLines={3}
      renderViewMore={renderViewMore}
      renderViewLess={renderViewLess}>
      {props.component}
    </ViewMoreText>
  );
}

const style = StyleSheet.create({
  viewMore: {
    marginTop: 6,
    marginBottom: 12,
    fontSize: 11,
    color: Color.textHint,
    fontFamily: FontType.regular,
  },
});
