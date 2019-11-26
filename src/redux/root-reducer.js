import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import workersReducer from "./workers/workers.reducer";

export default combineReducers({
  user: userReducer,
  workers: workersReducer
});
