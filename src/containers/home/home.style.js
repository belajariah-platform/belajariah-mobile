import {Color} from '../../assets';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Color.bgColorGray,
  },
  search: {
    borderWidth: 0,
    marginTop: 5,
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  container_child: {
    marginTop: 8,
  },
  text_header: {
    color: Color.textBasic,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text_sub_header: {
    color: Color.textHint,
    fontSize: 14,
  },
  text_category: {
    backgroundColor: Color.bgColorWhite,
    borderWidth: 1,
    borderRadius: 14,
    marginTop: 4,
    marginHorizontal: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  card_promo: {
    marginVertical: 0,
    marginHorizontal: 0,
    height: 100,
    borderRadius: 20,
  },
  card_class_popular: {
    marginVertical: 12,
    marginHorizontal: 0,
    height: 200,
    borderRadius: 20,
  },
  card_read_quran: {
    marginTop: 20,
    marginBottom: 12,
    marginHorizontal: 0,
    height: 100,
    borderRadius: 20,
  },
  card_article: {
    marginVertical: 8,
    marginHorizontal: 4,
    width: 250,
    height: 150,
    borderRadius: 20,
  },
  icon_arrow: {
    width: 38,
    height: 38,
    elevation: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export {styles};
