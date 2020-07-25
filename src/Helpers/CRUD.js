import axios from 'axios';
import {store} from '../Redux/store';
// import NetInfo from '@react-native-community/netinfo';
// import { Toast } from 'native-base'

// function checkConnection() {
//   NetInfo.fetch().then(state => {
//     if (!state.isConnected) {
//       Toast.show({
//         text: 'No Internet Connection',
//         buttonText: 'Ok',
//         duration: 15000,
//         position: 'bottom',
//         type: "warning"
//       })
//     }
//   });
// }

function getConfig() {
  const config = {};
  const token = store.getState().userData.token;
  if (token) {
    config.headers = {Authorization: `Bearer ${token}`};
  }
  return config;
}

export const getData = async (dataUrl, formData) => {
  try {
    // checkConnection();
    const url = API_URL + '/' + dataUrl;
    const response = await axios.get(url, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};
export const submitData = async (dataUrl, formData) => {
  try {
    // checkConnection();
    console.log(dataUrl, formData);
    const url = API_URL + '/' + dataUrl;
    const response = await axios.post(url, formData, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};

export const patchData = async (dataUrl, formData) => {
  try {
    // checkConnection();
    const url = API_URL + '/' + dataUrl;
    const response = await axios.patch(url, formData, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteData = async dataUrl => {
  try {
    // checkConnection();
    const url = API_URL + '/' + dataUrl;
    const response = await axios.delete(url, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};
