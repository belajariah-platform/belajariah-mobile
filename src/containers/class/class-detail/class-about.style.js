import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  flexColumn: {
    flexDirection: 'column',
  },
  flexTopicInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexBenefits: {
    marginTop: 4,
    marginBottom: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerDesc: {
    borderWidth: 0,
    borderRadius: 12,
    marginVertical: 16,
  },
  containerTopics: {
    padding: 0,
    borderWidth: 0,
    borderRadius: 12,
    paddingBottom: 16,
    marginVertical: 16,
  },
  containerBenefits: {
    marginTop: 16,
    borderWidth: 0,
    borderRadius: 12,
    marginBottom: 16,
  },
  containerTopicsTitle: {
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  containerList: {
    borderTopWidth: 1,
    borderColor: Color.lightGrey,
    backgroundColor: Color.softPink,
  },
  containerAccordion: {
    paddingVertical: 2,
    marginHorizontal: 0,
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    borderColor: Color.lightGrey,
    backgroundColor: Color.white,
  },
  containerItem: {
    paddingVertical: 2,
    marginHorizontal: 0,
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    borderColor: Color.lightGrey,
  },
  textRegular: {
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textBold: {
    textAlign: 'left',
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textBoldRed: {
    color: Color.textRed,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  iconVideo: {
    marginLeft: -6,
    marginRight: 8,
  },
  iconDocs: {
    marginRight: 10,
  },
  iconConsultation: {
    marginRight: 10,
  },
  iconWebinar: {
    marginRight: 8,
  },
  iconChatGroup: {
    marginLeft: 2,
    marginRight: 10,
  },
  iconCertificate: {
    marginRight: 8,
  },
})

export default styles
