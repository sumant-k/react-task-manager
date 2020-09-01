import { all } from "redux-saga/effects";
import { watchLogin } from "./LoginSaga";

export default function* rootSaga() {
  yield all([watchLogin]);
}
