import { LOADER_SHOW, LOADER_HIDE } from "../constants/actions/global";

const initialState = {
  loading: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADER_SHOW: {
      return {
        ...state,
        loading: true
      };
    }
    case LOADER_HIDE: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
}

export default reducer;
