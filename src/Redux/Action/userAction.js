import {USER_LOGIN, USER_LOGOUT} from './actionTypes';
import {submitData} from '../../Helpers/CRUD';

export const userLogin = data => async dispatch => {
  console.log(data);
  try {
    // const response = await submitData('login', data);
    if (data) {
      await dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    }
    // return response;
  } catch (err) {
    // if (!(err.message === 'Network Error')) {
    //   throw err;
    // }
  }
};
export const userLogout = () => async dispatch => {
  await dispatch({
    type: USER_LOGOUT,
  });
  // await dispatch({
  //   type: CLEAR_HISTORY,
  // });
};
