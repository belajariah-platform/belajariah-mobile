import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

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
  containerTOS: {
    height:'auto',
    // paddingRight: 20,
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
    // marginBottom: '1%',
  },
  containerTopicsTitle: {
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  containerList: {
    // borderTopWidth: 1,
    // borderColor: Color.lightGrey,
    // backgroundColor: Color.softPink,
    backgroundColor: Color.white,
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
    marginLeft: 5,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderColor: Color.lightGrey,
  },
  ViewItem: {
    marginLeft: 8,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  textRegular: {
    lineHeight : 15,
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  textRegularTOS: {
    lineHeight : 15,
    marginRight: 40,
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  textRegularParaf: {
    lineHeight : 15,
    marginBottom : 10,
    color: Color.black,
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
    maxWidth: '86%',
    marginBottom: 7,
    textAlign: 'left',
    color: Color.black,
    alignSelf : 'center',
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  textBoldRed: {
    color: Color.textRed,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  textFree: {
    marginLeft: 8,
    borderRadius: 12,
    color: Color.white,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontFamily: FontType.bold,
    backgroundColor: Color.red,
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
  ViewCardEbook: {
    marginTop: 16,
    borderWidth: 0,
    borderRadius: 12,
    marginBottom: '1%',
  },
  ViewTouch: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TxtEbook: {
    marginLeft: 10,
    color: '#13A98B',
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  ViewButton: {
    marginLeft: '2%',
    marginRight: '3%',
  },
  StyleBtn: {
    height: 50,
    borderRadius: 12,
    backgroundColor: '#13A98B',
  },
  TxtListMateriId: {
    marginVertical: '4%',
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  TxtListMateri: {
    maxWidth: '90%',
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  TxtListMateriArab: {
    maxWidth: '65%',
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.arabBold,
  },
  TxtBoldDesc : {
    color: '#13A98B',
  }
})

export default styles
