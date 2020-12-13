import axios from 'axios';
import {store} from '../redux/store';

const getConfig = () => {
  const config = {};
  const token = store.getState().userData.token;
  if (token) {
    config.headers = {Authorization: `Bearer ${token}`};
  }
  return config;
}

export const getData = async (dataUrl) => {
  try {
    // checkConnection();
    const url = API_URL + dataUrl;
    const response = await axios.get(url, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};
export const postData = async (dataUrl, formData) => {
  try {
    // checkConnection();
    console.log(dataUrl, formData);
    const url = API_URL + dataUrl;
    const response = await axios.post(url, formData, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};

export const putData = async (dataUrl, formData) => {
  try {
    // checkConnection();
    const url = API_URL + dataUrl;
    const response = await axios.patch(url, formData, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteData = async dataUrl => {
  try {
    // checkConnection();
    const url = API_URL + dataUrl;
    const response = await axios.delete(url, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};
