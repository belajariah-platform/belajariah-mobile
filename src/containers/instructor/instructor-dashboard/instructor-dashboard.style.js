import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBackground: {
    width: '100%',
    height: '100%',
  },
  containerFooter: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
    paddingHorizontal: 12,
    paddingTop: 12,
    marginTop: 200,
    flex: 1,
    paddingBottom: 72,
  },
  containerScrollView: {
    flex: 1,
  },
  containerCard: {
    padding: 0,
    borderRadius: 20,
    width: 164,
    height: 220,
  },
  contentScrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardBackground: {
    width: 164,
    height: 220,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  illustration: {
    resizeMode: 'stretch',
  },
  logo: { marginTop: 12 },
  textTitle: {
    fontFamily: FontType.regular,
    fontSize: FontSize.large,
    color: Color.black,
  },
  textSubTitle: {
    fontFamily: FontType.regular,
    fontSize: FontSize.medium,
    color: Color.textHint,
  },
  textClassName: {
    fontFamily: FontType.berkshire,
    fontSize: FontSize.large,
    color: Color.white,
  },
  textTaskCount: {
    marginTop: 2,
    fontFamily: FontType.regular,
    fontSize: FontSize.small,
    color: Color.white,
  },
  textBtnViewTask: {
    marginTop: 4,
    fontFamily: FontType.regular,
    fontSize: FontSize.medium,
    color: Color.white,
    borderColor: Color.white,
    borderWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
  },
})

export { styles }
