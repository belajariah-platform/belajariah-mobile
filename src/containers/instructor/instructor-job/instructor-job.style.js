import { StyleSheet } from 'react-native'

import { Resp } from '../../../utils'
import { Color, FontType, FontSize } from '../../../assets'

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  containerHeader: {
    paddingLeft:5,
    paddingRight:20,
    paddingVertical:2,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerScrollView: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
  },
  containerCard: {
    borderWidth: 0,
    borderRadius: 12,
  },
  containerNameSound: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  containerAccordion: {
    width: 190,
    padding: 0,
  },
  textHeader2: {
    marginRight:10,
    color: Color.black,
    textAlign: 'center',
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textUsername: {
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textTime: {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  textSound: {
    marginTop: 14,
    marginLeft: 8,
    color: Color.black,
    fontFamily: FontType.regular,
  },
  textSoundDuration: {
    marginTop: 14,
    marginLeft: 12,
    color: Color.black,
    fontFamily: FontType.regular,
  },
  textAccordionTitle: {
    color: 'black',
    marginLeft: -6,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  textDesc: {
    marginLeft: 2,
    marginBottom: 8,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  btnBack: {
    marginTop: 6,
    marginLeft: 4,
  },
  btnFilter: {
    top: 4,
    marginRight: 12,
  },
  btnApply: {
    width: 100,
    borderRadius: 12,
    alignSelf: 'flex-end',
  },
  avatarUser: {
    width: 48,
    height: 48,
  },
  iconPlayVoice: {
    marginTop: 12,
  },
})

export { styles }
