import {Color} from '../../assets';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Color.bgColorGray,
  },
  bgIcon: {
    width: 38,
    height: 38,
    elevation: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  search: {
    width: 220,
    borderWidth: 0,
    marginTop: 5,
    borderRadius: 12,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  containerMiddle: {
    flex: 6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Color.bgColorGray,
  },
  containerBottom: {
    flex: 2,
    marginTop: -20,
    paddingTop: 50,
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: Color.bgColorWhite,
  },
  containerBottoms: {
    flex: 2,
    marginTop: 10,
    paddingTop: 50,
    backgroundColor: Color.bgColor,
  },
});

export {styles};
