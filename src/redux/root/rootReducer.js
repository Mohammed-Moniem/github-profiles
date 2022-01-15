import { combineReducers } from "redux";
import userProfile from "../reducers/userProfileReducer";

const rootReducer = combineReducers({
  userProfile,
});

export default rootReducer;
