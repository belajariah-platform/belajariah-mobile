import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#ab69c6',
    },
    containerBackground: {
        width: '100%',
        height: '100%',
    },
    containerBgWelcome: {
        width: 250,
        padding: '5%',
        height: 'auto',
        marginTop: '65%',
        marginLeft: '15%',
        alignSelf: 'center',
    },
    containerWelcome: {
        padding: '3%',
    },
    TxtTitle: {
        marginBottom: 5,
        color: Color.white,
        fontFamily: FontType.bold,
        fontSize: FontSize.extraLarge,     
    },
    TxtTitleBottom: {
        marginBottom: 25,
        color: Color.white,
        fontSize: FontSize.large,    
        fontFamily: FontType.bold,
    },
    TxtDetailWelcome: {
        color: Color.white,
        fontFamily: FontType.regular,
        fontSize: FontSize.mediumLarge,    
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconFilter: {
        top: '25%',
        marginRight: '2%',
    },
    cardInstructor: {
        opacity: 0.9,
        width: 'auto',
        height: 'auto',
        borderWidth : 0,
        borderRadius: 20,
    },
    ViewInstructorInfo: {
        paddingBottom: '3%',
        flexDirection: 'row',
    },
    ViewIconStatus: {
        marginHorizontal: '15%',
    },
    ImgUstadz: {
        width: 50,
        height: 50,
        opacity: 0.5,
        marginRight: 10,
    },
    TxtTitleInstructor: {
        opacity: 0.5,
        color: Color.black,
        fontFamily: FontType.bold,
        fontSize: FontSize.smallMedium,    
    },
    TxtTimeTitle: {
        opacity: 0.5,
        color: Color.black,
        fontSize: FontSize.smallest,
        fontFamily: FontType.regular,
    },
    TxtTitleDesc: {
        margin: 0,
        padding: 0,
        opacity: 0.5,
        color: Color.black,
        fontSize: FontSize.smallest,
        fontFamily: FontType.regular,
    },
    TxtButtonDetail: {
        opacity: 2,
        color: Color.red,
        textAlign: 'right',
        fontFamily: FontType.regular,
        fontSize: FontSize.smallMedium,    
    },
    containerButtonAction: {
        flexDirection: 'row',
    },
    ViewButtonAction: {
        opacity: 0.5,
        flexDirection: 'row',
    },
    textRegular: {
        color: Color.black,
        fontFamily: FontType.regular,
        fontSize: FontSize.smallMedium,
    },
    ViewIconDownload : {
        opacity: 0.5,
    },
    containerDescUser: {
        margin: 0,
        padding: 0,
        opacity: 0.5,
    },
    ViewButtonActionVoice: {
        flexDirection: 'row',
    },
    ButtonAction: {
        width: '30%',
        marginRight: 10,
    },
    tabBarStyle: {
        borderRadius: 8,
        paddingVertical: 2,
        marginHorizontal: 16,
        backgroundColor: Color.white,
      },
})

export {styles}