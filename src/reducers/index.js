import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import globalReducer from "./global";
import taskReducer from "./task";
import signinReducer from "./signin";

const rootReducer = combineReducers({
  global: globalReducer,
  form: formReducer,
  task: taskReducer,
  signin: signinReducer
});

export default rootReducer;
