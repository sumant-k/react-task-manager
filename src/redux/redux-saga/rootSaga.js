import { all } from "redux-saga/effects";
import { watchLogin } from "./LoginSaga";
import { watchGetNotes } from "./GetNotesSaga";

export default function* rootSaga() {
  yield all([watchLogin, watchGetNotes]);
}
