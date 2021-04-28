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
    padding: 10,
    height: 'auto',
    marginLeft: '15%',
    marginBottom : 100,
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
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.regular,
  },
})

export { styles }