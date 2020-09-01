import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_FAILED,
  REQUEST_LOGIN_SUCCESS,
} from "./actionType";

export const requestLogin = (data) => {
  return { type: REQUEST_LOGIN, data: data };
};
export const requestLoginSuccess = (data) => {
  return { type: REQUEST_LOGIN_SUCCESS, data: data };
};
export const requestLoginFailed = (data) => {
  console.error("response: ", data);
  return { type: REQUEST_LOGIN_FAILED, data: data };
};
