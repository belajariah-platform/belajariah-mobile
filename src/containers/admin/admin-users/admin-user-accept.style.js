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
        width: 'auto',
        height: 'auto',
        borderWidth : 0,
        borderRadius: 20,
    },
    ViewInstructorInfo: {
        paddingBottom: '5%',
        flexDirection: 'row',
    },
    ViewIconStatus: {
        marginHorizontal: '15%',
    },
    ImgUstadz: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    TxtTitleInstructor: {
        color: Color.black,
        fontFamily: FontType.bold,
        fontSize: FontSize.smallMedium,    
    },
    textRegular: {
        color: Color.black,
        fontFamily: FontType.regular,
        fontSize: FontSize.smallMedium,
    },
    TxtTimeTitle: {
        color: Color.black,
        fontSize: FontSize.smallest,
        fontFamily: FontType.regular,
    },
    TxtButtonDetail: {
        textAlign: 'right',
        color: Color.purpleText,
        fontFamily: FontType.regular,
        fontSize: FontSize.smallMedium,    
    },
    containerButtonAction: {
        flexDirection: 'row',
    },
    ViewButtonAction: {
        flexDirection: 'row',
    },
    containerDescUser: {
        margin: 0,
        padding: 0,
    },
    ViewButtonActionVoice: {
        left: '50%',
        flexDirection: 'row',
    },
    ButtonAction: {
        width: '30%',
        marginRight: 10,
    },
})

export {styles}