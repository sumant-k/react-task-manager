import {
  GET_NOTES,
  GET_NOTES_FAILED,
  GET_NOTES_SUCCESS,
} from "../actions/actionType";
import {
  ERROR,
  LOADING,
  STATUS_CODE_SUCCESS,
  SUCCESS,
} from "../constants/constants";

const initialState = {
  status: "INIT",
  isLoading: true,
};
export default function getNotesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      let reqState = Object.assign({}, state);
      reqState.isLoading = true;
      reqState.status = LOADING;
      reqState.statusCode = 101;

      return reqState;
    case GET_NOTES_SUCCESS: {
      let reqState = Object.assign({}, state);
      reqState.isLoading = false;
      reqState.noteList = action.data.data;
      
      reqState.errorMessage = false;

      return reqState;
    }
    case GET_NOTES_FAILED: {
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
// {
//   "type": "REQUEST_LOGIN_SUCCESS",
//     "data": {
//   "data": {
//     "status": "success",
//         "status_code": 10,
//         "user": {
//       "age": 0,
//           "_id": "5f0470da7c08742038ccd019",
//           "name": "Smoker",
//           "email": "smoker@marine.com",
//           "createdAt": "2020-07-07T12:55:54.868Z",
//           "updatedAt": "2020-09-02T18:03:17.655Z",
//           "__v": 11
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjA0NzBkYTdjMDg3NDIwMzhjY2QwMTkiLCJpYXQiOjE1OTkwNjk3OTd9.Axo2J0c0c4lB5AIQUDRSsnurb__2-w9RRIqIvuTp9Ac"
//   },
//   "status": 200,
//       "statusText": "OK",
//       "headers": {
//     "content-type": "application/json; charset=utf-8"
//   },
//   "config": {
//     "url": "https://task-manager-api-demo.herokuapp.com/users/login",
//         "method": "post",
//         "data": "{\"email\":\"smoker@marine.com\",\"password\":\"smoker@marine\"}",
//         "headers": {
//       "Accept": "application/json, text/plain, */*",
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*"
//     },
//     "transformRequest": [
//       null
//     ],
//         "transformResponse": [
//       null
//     ],
//         "timeout": 10000,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1
//   },
//   "request": {}
// }
// }
