import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import getNotesReducer from "./GetNotesReducer";
export const rootReducer = combineReducers({
  loginReducer,
  getNotesReducer,
});
