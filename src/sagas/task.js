import { takeEvery, put, call, delay } from "redux-saga/effects";
import { requestStart, requestEnd } from "../actions/global";
import {
  getTaskSuccess,
  getTaskError,
  postTaskError,
  editTaskError
} from "../actions/task";
import {
  GET_TASK_START,
  POST_TASK_START,
  EDIT_TASK_START
} from "../constants/actions/task";
import { getTask, postTask, editTask } from "../api";

function* requestGetTask(action) {
  const { page, sortField, sortDirection } = action.payload;
  try {
    yield put(requestStart());
    const response = yield call(getTask, page, sortField, sortDirection);
    yield put(getTaskSuccess(response.data.message));
  } catch (error) {
    yield put(getTaskError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}
function* requestPostTask(action) {
  const { data, page, sortField, sortDirection } = action.payload;
  try {
    yield put(requestStart());
    yield call(postTask, data);
    const responseGet = yield call(getTask, page, sortField, sortDirection);
    yield put(getTaskSuccess(responseGet.data.message));
  } catch (error) {
    yield put(postTaskError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}
function* requestEditTask(action) {
  const { id, status, text } = action.payload;
  try {
    yield put(requestStart());
    yield call(editTask, id, status, text);
  } catch (error) {
    yield put(editTaskError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_TASK_START, requestGetTask);
  yield takeEvery(POST_TASK_START, requestPostTask);
  yield takeEvery(EDIT_TASK_START, requestEditTask);
}
