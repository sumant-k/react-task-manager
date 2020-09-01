import { put, takeLatest, call } from "redux-saga/effects";
import { REQUEST_LOGIN } from "../actions/actionType";
import {
  requestLoginFailed,
  requestLoginSuccess,
} from "../actions/actionCreator";
import { makePostRequest } from "../API/API";
import { API_ENDPOINT } from "../constants/constants";

function* workerLogin(payload) {
  try {
    const response = yield call(
      makePostRequest,
      API_ENDPOINT.login,
      payload.data
    );
    yield put(requestLoginSuccess(response));
  } catch (e) {
    yield put(requestLoginFailed(e));
  }
}
export const watchLogin = takeLatest(REQUEST_LOGIN, workerLogin);
