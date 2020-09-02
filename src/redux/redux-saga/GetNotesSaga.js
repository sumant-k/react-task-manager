import { put, takeLatest, call } from "redux-saga/effects";
import { GET_NOTES, REQUEST_LOGIN } from "../actions/actionType";
import {
  requestLoginFailed,
  requestLoginSuccess,
  requestNotesFailed,
  requestNotesSuccess,
} from "../actions/actionCreator";
import { makeGetRequest } from "../API/API";
import { API_ENDPOINT } from "../constants/constants";

function* workerGetNotes() {
  try {
    const response = yield call(makeGetRequest, API_ENDPOINT.notes);
    yield put(requestNotesSuccess(response));
  } catch (e) {
    yield put(requestNotesFailed(e));
  }
}
export const watchGetNotes = takeLatest(GET_NOTES, workerGetNotes);
