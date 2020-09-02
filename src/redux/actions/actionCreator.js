import {
  GET_NOTES,
  GET_NOTES_FAILED,
  GET_NOTES_SUCCESS,
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

export const requestNotes = () => {
  return { type: GET_NOTES };
};
export const requestNotesSuccess = (data) => {
  return { type: GET_NOTES_SUCCESS, data: data };
};
export const requestNotesFailed = (data) => {
  console.error("response: ", data);
  return { type: GET_NOTES_FAILED, data: data };
};
