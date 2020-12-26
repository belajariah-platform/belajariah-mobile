import { StyleSheet } from 'react-native'
import { Color, FontType } from '../../assets'

const styles = StyleSheet.create({
  layoutContent0: {
    backgroundColor: 'white',
    height: 200,
    marginTop: 2,
    marginBottom: 5,
  },
  layoutContent: {
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  Avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  banner: {
    backgroundColor: '#dcdcdd',
    marginTop: 15,
    width: '100%',
    height: 375,
    resizeMode: 'cover',
  },
  textName: {
    marginTop: 6,
    marginLeft: 10,
    fontSize: 13,
    color: Color.textContent,
    fontFamily: FontType.bold,
    width: 100,
    borderRadius: 5,
  },
  textLike: {
    color: Color.textContent,
    fontSize: 11,
    marginLeft: 5,
    marginTop: 4,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: FontType.bold,
    marginBottom: 10,
    color: Color.textContent,
    borderRadius: 5,
    width: '100%',
  },
  textContent: {
    fontSize: 13,
    color: Color.textContent,
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 16,
  },
  likeShimmer: {
    width: 100,
    borderRadius: 5,
  },
  textContentShimmer: {
    borderRadius: 5,
    width: '100%',
    height: 50,
  },
  time: {
    fontSize: 11,
    color: Color.textHintContent,
    fontFamily: FontType.regular,
  },
})


export { styles }