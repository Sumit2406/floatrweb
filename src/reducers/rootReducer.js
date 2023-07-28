import { combineReducers } from "redux";
import userReducer from "./userReducer";

const appReducer = combineReducers({
  userReducer
});


export default function rootReducer(state, action) {
//   if (action.type === LOGOUT_SUCCESS) {
//     return appReducer(undefined, action);
//   }
  return appReducer(state, action);
}