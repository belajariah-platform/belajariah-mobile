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
    bottom: 0,
    height: 400,
    paddingTop: 12,
    paddingBottom: 36,
    position: 'absolute',
    paddingHorizontal: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
  },
  containerRowView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerCard: {
    width: 164,
    padding: 0,
    height: 220,
    borderRadius: 20,
    marginHorizontal: 12,
  },
  contentSwiper: {
    marginHorizontal: -12,
  },
  cardBackground: {
    width: 164,
    height: 220,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  illustration: {
    resizeMode: 'stretch',
  },
  logo: { marginTop: 12 },
  textTitle: {
    color: Color.black,
    fontSize: 18,
    fontFamily: FontType.regular,
  },
  textSubTitle: {
    color: Color.textHint,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textClassName: {
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.berkshire,
  },
  textTaskCount: {
    marginTop: 2,
    color: Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textBtnViewTask: {
    marginTop: 4,
    borderWidth: 2,
    borderRadius: 16,
    color: Color.white,
    paddingVertical: 4,
    textAlign: 'center',
    paddingHorizontal: 16,
    borderColor: Color.white,
    fontSize: FontSize.medium,
    textAlignVertical: 'center',
    fontFamily: FontType.regular,
  },
  activeDot: {
    backgroundColor: Color.purpleButton,
    width: 20,
  },
})

export { styles }
