import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import {textBasic} from '../../../Components/Color';
import SearchText from '../../../Components/SearchText';
import BGEmpty from '../../../Helpers/Image/empty.png';
import {textHintBold, bgColor} from '../../../Components/Color';
import {Contents5} from './Data';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';

const Icons = props => <Icon name="search" {...props} />;

function SearchTimeline(props) {
  const [focus, setFocus] = React.useState(false);

  const FormSearch = useFormik({
    initialValues: {search: ''},
    onSubmit: async (values, form) => {
      form.resetForm();
    },
  });

  return (
    <>
      <View
        style={{
          height: 125,
          backgroundColor: 'white',
          paddingHorizontal: 5,
          paddingTop: 10,
          marginBottom: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.navigation.goBack()}>
            <Icon fill={textBasic} name="arrow-ios-back" style={style.icon} />
          </TouchableOpacity>
          <SearchText
            form={FormSearch}
            name="search"
            style={{...style.input, width: focus ? '78.5%' : '85%'}}
            placeholder="Cari di timeline ..."
            onFocus={() => setFocus(true)}
            accessoryLeft={focus ? false : Icons}
          />
          {focus ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={FormSearch.handleReset}>
              <Icon fill="white" name="close" style={style.iconClose} />
            </TouchableOpacity>
          ) : (
            <Text />
          )}
        </View>
        <View
          style={{
            marginBottom: 2,
            backgroundColor: 'white',
            paddingHorizontal: 5,
            paddingTop: 20,
            flex: 1,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Contents5 &&
              Contents5.map((val, i) => (
                <TouchableOpacity
                  key={i}
                  activeOpacity={0.7}
                  onPress={() => handleTag(val.id)}>
                  <Text style={style.tag}>{val.tag}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: 'white'}}>
        <Image source={BGEmpty} style={style.image} />
      </View>
    </>
  );
}
export default SearchTimeline;
const style = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: '#eeedf2',
    borderRadius: 17,
    marginTop: 5,
    marginLeft: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: -10,
  },
  iconClose: {
    width: 16,
    height: 16,
    backgroundColor: textBasic,
    borderRadius: 100,
    padding: 2,
    marginLeft: 6,
  },
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
  image: {
    marginTop: 60,
    width: 185,
    height: 160,
    alignSelf: 'center',
  },
});
