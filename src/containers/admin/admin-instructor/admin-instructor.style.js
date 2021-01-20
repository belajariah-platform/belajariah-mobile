import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
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
        padding: '5%',
        borderRadius: 20,
        borderWidth : 0,
    },
    ViewInstructorInfo: {
        flexDirection: 'row',
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
    TxtButtonDetail: {
        textAlign: 'right',
        color: Color.purpleText,
        fontFamily: FontType.regular,
        fontSize: FontSize.smallMedium,    
    },
})

export {styles}