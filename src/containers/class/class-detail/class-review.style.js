import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType, FontWeight } from '../../../assets'

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRating: {
    flexDirection: 'row',
    marginLeft: -1,
  },
  container: {
    backgroundColor: Color.softPink,
  },
  card: {
    borderWidth: 0,
    borderRadius: 16,
    marginBottom: 16,
    paddingBottom: 16,
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 16,
  },
  cardReview: {
    borderWidth: 0,
    borderTopWidth: 1,
    marginVertical: 0,
    marginHorizontal: 0,
    borderColor: Color.lightGrey,
  },
  rating: {
    marginRight: 12,
    borderRadius: 8,
    color: Color.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraLarge,
    backgroundColor: Color.bgColorPurple,
  },
  textBold: {
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontType.bold,
  },
  textRegular: {
    marginTop: -12,
    marginBottom: 8,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
})

export default styles
