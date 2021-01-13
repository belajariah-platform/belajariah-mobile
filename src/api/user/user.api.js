import { SIGN_IN, SIGN_OUT } from '../../action'

const SignIn = data => async dispatch => {
  try {
    // const response = await submitData('login', data)
    if (data) {
      await dispatch({
        type: SIGN_IN,
        payload: data,
      })
    }
    // return response
  } catch (err) {
    // if (!(err.message === 'Network Error')) {
    //   throw err;
    // }
  }
}
const SignOut = () => async dispatch => {
  await dispatch({
    type: SIGN_OUT,
  })
  // await dispatch({
  //   type: CLEAR_HISTORY,
  // });
}

export default { SignIn, SignOut }