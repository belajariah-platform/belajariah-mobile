import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    backgroundColor: Color.softPink,
  },
  card: {
    padding: 0,
    borderRadius: 16,
    marginBottom: 16,
  },
  higherCard: {
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Color.softPink,
  },
  lowerCard: {
    padding: 20,
    backgroundColor: Color.white,
  },
  avatar: {
    width: 64,
    height: 64,
    marginRight: 12,
  },
  textTitle: {
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  textName: {
    marginBottom: 4,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  textProfile: {
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  textDesc: {
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
})

export default styles
