import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  YellowBox,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {Avatar, Icon, Text} from '@ui-kitten/components';
import {
  textContent,
  textHintBold,
  bgColor,
  textBold,
} from '../../../Components/Color';
import {Contents4} from './Data';

function EventTag(props) {
  const [tag, setTag] = React.useState(false);

  const handleTag = id => {
    setTag(true);
    console.log(id);
  };

  return (
    <View
      style={{
        marginBottom: 2,
        backgroundColor: 'white',
        paddingTop: 15,
        flex: 1,
      }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={style.mainTag}>All event</Text>
        </TouchableOpacity>
        {Contents4 &&
          Contents4.map((val, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => handleTag(val.id)}>
              <Text style={style.tag}>{val.tag}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}
export default EventTag;

const style = StyleSheet.create({
  tag: {
    backgroundColor: '#eeedf2',
    color: textHintBold,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 13,
    marginHorizontal: 7,
    borderRadius: 16,
  },
  mainTag: {
    backgroundColor: bgColor,
    color: 'white',
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 13,
    marginHorizontal: 7,
    borderRadius: 16,
  },
});
