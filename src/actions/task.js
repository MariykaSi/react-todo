import {
  GET_TASK_START,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  POST_TASK_START,
  POST_TASK_ERROR,
  EDIT_TASK_START,
  EDIT_TASK_ERROR
} from "../constants/actions/task";

export const getTaskStart = (page, sortField, sortDirection) => ({
  type: GET_TASK_START,
  payload: {
    page,
    sortField,
    sortDirection
  }
});

export const getTaskSuccess = data => ({
  type: GET_TASK_SUCCESS,
  payload: data
});

export const getTaskError = msg => ({
  type: GET_TASK_ERROR,
  payload: msg
});

export const postTaskStart = (data, page, sortField, sortDirection) => ({
  type: POST_TASK_START,
  payload: {
    data,
    page,
    sortField,
    sortDirection
  }
});

export const postTaskError = msg => ({
  type: POST_TASK_ERROR,
  payload: msg
});

export const editTaskStart = (id, status, text) => ({
  type: EDIT_TASK_START,
  payload: {
    id,
    status,
    text
  }
});

export const editTaskError = msg => ({
  type: EDIT_TASK_START,
  payload: msg
});
