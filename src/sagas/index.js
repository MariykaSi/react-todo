import { all, fork } from "redux-saga/effects";

import globalSaga from "./global";
import taskSaga from "./task";

const sagas = [globalSaga, taskSaga];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
