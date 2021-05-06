import { StyleSheet } from 'react-native'
import { FontType, Color, FontSize } from '../../assets'

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 290,
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
    height: 160,
    width: '100%',
    marginLeft : -3,
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
    top : -20,
    paddingTop : 10,
    paddingHorizontal : 12,
    backgroundColor : 'white',
  },
  rating : {
    flexDirection : 'row',
    marginHorizontal : 12,
  },
  lined : {
    height : 2,
    width : '100%',
    backgroundColor : 'grey',
  },
  instrukturView : {
    marginBottom : 10,
    flexDirection : 'row',
    marginHorizontal : 12,
  },
  bioView : {
    alignSelf : 'center',
    marginHorizontal : 12,
  },
  text1 : {
    marginLeft : 66,
    fontSize : FontSize.small,
    fontFamily : FontType.regular,
  },
  text2 : {
    fontFamily : FontType.bold,
    fontSize : FontSize.extraSmall,
  },
  text3 : {
    fontFamily : FontType.regular,
    fontSize : FontSize.overSmall,
  },
  text4 : {
    fontFamily : FontType.regular,
    fontSize : FontSize.extraSmall,
    textDecorationLine: 'line-through',
  },
  text5 : {
    marginRight : 12,
    color : '#52BBE4',
    textAlign : 'right',
    fontSize : FontSize.small,
    fontFamily : FontType.bold,
  },
  avatar : {
    width : 40,
    height : 40,
  },
  divider : {
    marginTop : 5,
  },
})

export { styles }