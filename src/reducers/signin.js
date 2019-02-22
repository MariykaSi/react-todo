import { SIGNIN, SIGNOUT } from "../constants/actions/signin";

const initialState = {
  status: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN: {
      return {
        ...state,
        status: true
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        status: false
      };
    }
    default:
      return state;
  }
};
