import { StyleSheet } from 'react-native'

import { Resp } from '../../utils'
import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  //Profile Edit
  containerButtonBack : {
    top: 20,
    left: 0,
  },
  containerView : {
    flex: 1,
    backgroundColor : Color.softPink,
  },
  containerViewBg : {
    flex: 1,
    zIndex: 1,
    top: '-8%',
  },
  containerAvatar : {
    zIndex: 2,
    top: '13%',
    width : '95%',
    alignItems:'center',
    flexDirection: 'row',
    paddingHorizontal:20,
  },
  containerTitleAvatar : {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 5,
    color: Color.white,
    position: 'relative',
    fontFamily: FontType.regular,
    fontSize: FontSize.extraLarge,
  },
  containerTouch : {
    borderRadius:100,
  },
  Avatar : {
    width: 90,
    zIndex: 2,
    height: 90,
    borderColor: '#fff',
    position: 'relative',
  },
  image : {
    width: Resp.HeaderProfileWP,
    height: Resp.HeaderProfileHP,
  },
  containerViewTop : {
    top: '-8.5%',
    borderRadius: 35,
    paddingVertical: 20,
    position: 'relative',
    marginHorizontal: 30,
    paddingHorizontal:30,
    backgroundColor: '#fff',
  },
  containerViewBottom : {
    top: '-5.5%',
    borderRadius: 35,
    paddingVertical: 20,
    position: 'relative',
    marginHorizontal: 30,
    paddingHorizontal:30,
    backgroundColor: '#fff',
  },
  containerTextJudul : {
    marginBottom:28,
    color : Color.black,
    fontSize: FontSize.large,
    fontFamily : FontType.bold,
  },

  containerText : {
    marginTop:-8,
    marginBottom: 5,
    fontSize: FontSize.small,
    color: Color.greyHeadInput,
    fontFamily: FontType.regular,
  },
  datePickerInput : {
    height: 40,
    marginTop:3,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom:21,
    paddingHorizontal: 8,
    borderColor: '#b3b3b3',
    backgroundColor: Color.white,
  },
  containerRadio : {
    marginBottom:16,
    flexDirection: 'row',
  },
  containerInputRadio : {
    marginLeft: 1,
    marginRight: 15,
  },
  datePickerControl : {
    borderWidth:0,
    backgroundColor:Color.transparent,
  },
  fixToText: {
    marginTop: 0,
    alignItems:'flex-end',
  },
  containerButton : {
    width: 100,
  },

})

export { styles }
