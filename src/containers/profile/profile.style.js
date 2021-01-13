import {StyleSheet} from 'react-native'
import {FontType} from '../../assets'

const styles = StyleSheet.create({

  containerButtonBack : {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  containerView : {
    backgroundColor : '#FEF5FF',
    flex: 1,
  },

  containerViewBg : {
    flex: 1,
    zIndex: 2,
    top: '-8%',
  },

  containerAvatar : {
    flexDirection: 'row',
    left: '4%',
    top: '15%',
    zIndex: 4,
  },

  containerJudulAvatar : {
    fontFamily: FontType.regular,
    fontSize: 32,
    color: '#fff',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    position: 'relative',
    top: '5%',
    zIndex: 10,
  },

  containerTouchButton : {

    width: 100,
    height: 100,
    
  },

  containerTouch : {
    width: 100,
    height: 100,
  },

  Avatar : {
    position: 'relative',
    width: 100,
    height: 100,
    borderColor: '#fff',
    zIndex: 12,
  },

  image : {
    width: '100%',
    height: 210,
  },

  containerViewAtas : {
    position: 'relative',
    top: '-9%',
    backgroundColor: '#fff',
    borderRadius: 35,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 20,
  },

  containerViewBawah : {
    backgroundColor: '#fff',
    borderRadius: 40,
    marginTop: -90,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 20,
  },

  containerTextJudul : {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 40,
    marginBottom: 5,
  },

  containerText : {
    fontFamily: FontType.regular,
    fontSize: 14,
    marginLeft: 40,
    marginTop: 15,
    marginBottom: 5,
  },

  containerViewInput : {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 40,
  },

  containerInputKecil : {
    borderColor: '#b3b3b3',
    borderRadius: 20,
    borderWidth: 1,
    width: 100,
    height: 40,
    marginLeft: 1,
    paddingHorizontal: 20,
  },

  containerInput : {
    borderColor: '#b3b3b3',
    borderRadius: 20,
    borderWidth: 1,
    width: '80%',
    height: 40,
    marginLeft: 30,
    marginRight: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  }, 

  containerRadio : {
    flexDirection: 'row',
    paddingHorizontal: 35,
    marginTop: 10,
  },

  containerInputRadio : {
    marginLeft: 1,
    marginRight: 15,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
    
  },

  containerButton : {
    backgroundColor: '#6e248d',
    borderRadius: 20,
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  });
  
  export {styles}