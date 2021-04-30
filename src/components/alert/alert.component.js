import { Alert } from 'react-native'

const Alerts = (success, msg, pressOK) => {
  Alert.alert(success ? 'Sukses' : 'Gagal', msg, [
    { text: 'Ok', onPress: pressOK },
  ])
}

export default Alerts
