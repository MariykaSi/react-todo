import {
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  POST_TASK_ERROR
} from "../constants/actions/task";

const initialState = {
  list: [],
  totalTaskCount: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_SUCCESS: {
      const { tasks, total_task_count } = action.payload;
      return {
        ...state,
        list: tasks,
        totalTaskCount: total_task_count,
        error: null
      };
    }

    case GET_TASK_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    case POST_TASK_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
