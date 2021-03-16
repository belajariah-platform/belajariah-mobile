import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize } from '../../../assets'

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  indicatorContainer : {
    top : 10,
    alignItems:'center',
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
  containerNoTask : {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor : Color.softPink,
  },
  textHeader: {
    marginRight:10,
    color: Color.black,
    textAlign: 'center',
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textNoTaskTitle : {
    fontSize: 40,
    textAlign: 'center',
    color: Color.purpleMedium,
    fontFamily: FontType.bold,
  },
  textNoTask : {
    color: Color.black,
    textAlign: 'center',
    paddingHorizontal : 20,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
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
