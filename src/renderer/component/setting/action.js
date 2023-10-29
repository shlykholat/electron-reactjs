import { LOG_IN, LOG_OUT, LOG_FAIL } from './constant'
import { GET, POST, PUT } from '../../util/request'
import { history } from '../../history'
function _login_in(data) {
  return {
    type: LOG_IN,
    payload: { ...data }
  }
}
function _login_fail(data) {
  return {
    type: LOG_FAIL,
    payload: { ...data }
  }
}
export function login_in_action({ password }, cb) {
  return (dispatch) => {
    return POST('users/login', { password }).then(res => {
      if (res.success) {
        alert("ok")
        dispatch(_login_in(result))
        history.push('/dashboard/home')
      } else {
        cb(res)
      }
      // eslint-disable-next-line node/handle-callback-err
    }).catch(err => {
      dispatch(_login_fail({ message: '登录异常！' }))
    })
  }
}

export function login_out_action() {
  history.push('/')
  return {
    type: LOG_OUT
  }
}

export function getBaseConstant(cb) {
  return dispatch => {
    return GET('base').then(res => {
      cb(res);
    })
  }
}

export function updateBaseConstant(data, cb) {
  return dispatch => {
    return PUT('base', data).then(res => {
      cb(res)
    })
  }
}