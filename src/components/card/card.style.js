import { StyleSheet } from 'react-native'
import { FontType, Color, FontSize } from '../../assets'

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 245,
    elevation: 2,
    width: '100%',
    borderWidth: 0,
    borderRadius: 20,
    alignSelf:'center',
    marginVertical :10,
    shadowColor: '#000',
    borderColor: '#dddddd',
    backgroundColor: Color.white
  },
  images: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  description : {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  content : {
    top : 5,
    paddingHorizontal : 12,
  },
  rating : {
    marginTop : 10,
  },
  divider : {
    marginTop : 10,
  },
})

export { styles }