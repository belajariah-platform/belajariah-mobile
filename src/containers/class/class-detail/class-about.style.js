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
  textRating: {
    marginLeft: 8,
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  flexRating: {
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerDesc: {
    height:'auto',
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
    marginBottom: '10%',
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
    marginLeft: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    borderColor: Color.lightGrey,
  },
  textRegular: {
    lineHeight : 15,
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  textRegularParaf: {
    lineHeight : 15,
    color: Color.black,
    marginBottom : 10,
    flexDirection:'row',
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  textBold: {
    marginBottom: 7,
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallPoint,
  },
  textBoldCustom: {
    marginBottom: 7,
    textAlign: 'left',
    alignSelf : 'center',
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  textBoldRed: {
    color: Color.textRed,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  iconVideo: {
    marginLeft: -6,
    marginRight: 8,
  },
  iconDocs: {
    marginRight: 10,
    alignSelf:'center',
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
