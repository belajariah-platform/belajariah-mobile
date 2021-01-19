import { StyleSheet } from 'react-native'

import { Resp } from '../../../utils'
import { Color, FontType, FontSize } from '../../../assets'
import { colors } from 'react-native-elements'

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerHeader: {
    flexDirection: 'row',
  },
  containerRecentJobs: {
    marginTop: 8,
    marginLeft: 12,
  },
  containerCompletedJobs: {
    marginTop: 8,
    marginLeft: 12,
    marginBottom: 68,
  },
  containerAccordion: {
    marginTop: 16,
    marginRight: 16,
    paddingLeft: 16,
    borderRadius: 20,
    backgroundColor: Color.white,
  },
  containerConfirm: {
    marginTop: 8,
    marginRight: 16,
    marginBottom: -8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerChat: {
    marginTop: 0,
    marginLeft: 0,
    paddingLeft: 0,
    marginRight: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: Color.white,
  },
  containerUserSound: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerTextInput: {
    flexDirection: 'row',
  },
  containerSend: {
    height: 48,
    width: '160%',
    marginLeft: 4,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerUserChatItem: {
    width: '75%',
    paddingTop: 4,
    borderWidth: 0,
    paddingLeft: 16,
    paddingRight: 4,
    borderRadius: 20,
    paddingBottom: 16,
    borderTopLeftRadius: 0,
    backgroundColor: Color.softPink,
  },
  containerChatInstructor: {
    padding: 4,
    width: '75%',
    borderWidth: 0,
    borderRadius: 20,
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
    backgroundColor: Color.softPink,
  },
  containerChatInstructorFull: {
    padding: 4,
    width: '75%',
    borderWidth: 0,
    borderRadius: 20,
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
    backgroundColor: Color.bgColorPurple,
  },
  containerInstructorHeader: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerInstructorSound: {
    marginTop: 4,
    marginLeft: 8,
    flexDirection: 'row',
  },
  containerAvatarUser: {
    flex: 1,
    height: 44,
    alignItems: 'flex-end',
  },
  containerUserDesc: {
    paddingLeft: 10,
  },
  containerInstructorDesc: {
    marginTop: 4,
    paddingLeft: 20,
    marginBottom: 4,
  },
  semiBox: {
    height: 12,
    marginLeft: 0,
    marginTop: -12,
    marginRight: 16,
    backgroundColor: Color.white,
  },
  btnBack: {
    marginTop: 6,
    marginLeft: 8,
  },
  btnPlayVoice: {
    marginRight: 8,
  },
  textHeader: {
    width: '72%',
    marginTop: 18,
    color: Color.black,
    textAlign: 'center',
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  textTitle: {
    marginTop: 8,
    color: Color.black,
    fontSize: FontSize.large,
    fontFamily: FontType.regular,
  },
  textSubtitle: {
    color: Color.greyHintText,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textUsername: {
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textMoment: {
    color: Color.black,
    fontSize: FontSize.extraSmall,
    fontFamily: FontType.regular,
  },
  textSoundDuration: {
    color: Color.black,
    marginHorizontal: 8,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textSoundDurationWhite: {
    color: Color.white,
    marginHorizontal: 8,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textDesc: {
    marginTop: 2,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textDescWhite: {
    marginTop: 2,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textUserDesc: {
    marginTop: 2,
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textTime: {
    marginTop: 4,
    marginRight: 16,
    textAlign: 'right',
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textTimeWhite: {
    marginTop: 4,
    marginRight: 16,
    textAlign: 'right',
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textInstructorName: {
    marginLeft: 8,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textInstructorNameWhite: {
    marginLeft: 8,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textInstructorDesc: {
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textInstructorDescWhite: {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textInput: {
    width: '75%',
    marginLeft: 20,
    marginRight: 16,
    paddingLeft: 24,
    borderRadius: 28,
    marginVertical: 16,
    backgroundColor: Color.softPink,
  },
  avatarUser: {
    width: 48,
    height: 48,
  },
  avatarChatUser: {
    width: 44,
    height: 44,
  },
  avatarChatInstructor: {
    width: 44,
    height: 44,
  },
})

export { styles }
