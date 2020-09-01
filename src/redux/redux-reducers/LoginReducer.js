import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_FAILED,
  REQUEST_LOGIN_SUCCESS,
} from "../actions/actionType";
import { ERROR, LOADING, SUCCESS } from "../constants/constants";

const initialState = {
  status: "INIT",
  isLoading: true,
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      let reqState = Object.assign({}, state);
      reqState.isLoading = true;
      reqState.status = LOADING;
      reqState.statusCode = 101;

      return reqState;
    case REQUEST_LOGIN_SUCCESS: {
      let reqState = Object.assign({}, state);
      reqState.isLoading = false;
      reqState.status = SUCCESS;
      reqState.statusCode = 200;
      reqState.data = action.data.data;

      return reqState;
    }
    case REQUEST_LOGIN_FAILED: {
      let reqState = Object.assign({}, state);
      reqState.isLoading = true;
      reqState.status = ERROR;
      reqState.statusCode = 400;
      return reqState;
    }
    default:
      return state;
  }
}
