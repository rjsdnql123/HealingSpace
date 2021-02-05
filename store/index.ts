import { combineReducers } from "redux";
import userProFile from "./reducers/userProFile";
const rootReducer = combineReducers({
  userProFile,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
