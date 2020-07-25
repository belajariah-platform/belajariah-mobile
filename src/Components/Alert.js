import {Alert} from 'react-native';

const CustomAlert = (success, msg, pressOK) => {
  Alert.alert(success ? 'Success' : 'Gagal', msg, [
    {text: 'Ok', onPress: pressOK},
  ]);
};

export default CustomAlert;
