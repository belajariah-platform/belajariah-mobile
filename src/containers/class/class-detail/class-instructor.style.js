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
    borderWidth : 0,
    borderRadius: 16,
    marginBottom: '10%',
  },
  higherCard: {
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Color.softPink,
  },
  lowerCard: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: Color.white,
  },
  avatar: {
    width: 64,
    height: 64,
    marginRight: 12,
  },
  textTitle: {
    marginBottom: 10,
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallPoint,
  },
  textName: {
    marginBottom: 4,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textProfile: {
    color: Color.grey,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallest,
  },
  textDesc: {
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
})

export default styles
